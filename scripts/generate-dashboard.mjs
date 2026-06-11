import { readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const clientsRoot = path.join(root, 'clients');
const output = path.join(root, 'index.html');
const knownFiles = {
  preview: ['preview.html', 'Preview'], html: ['wordpress-body.html', 'HTML'], css: ['style.css', 'CSS'],
  scorecard: ['client-readiness-scorecard.md', 'Scorecard'], agent: ['agent-performance-report.md', 'Agent Report'],
  creative: ['final-creative-review.md', 'Creative Review'], qa: ['quality-report.md', 'QA Report'],
  generation: ['generation-report.md', 'Generation Report'], instructions: ['wordpress-instructions.md', 'Instructions'],
};

const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
const stripMd = (value = '') => value.replace(/[`*_]/g, '').replace(/^[-\s]+|[.\s]+$/g, '').trim();
const titleFromSlug = (slug) => slug.split('-').map((part) => part.length <= 4 ? part.toUpperCase() : part[0].toUpperCase() + part.slice(1)).join(' ');
const readSafe = async (file) => { try { return await readFile(file, 'utf8'); } catch { return ''; } };
const exists = async (file) => { try { return (await stat(file)).isFile(); } catch { return false; } };
const isDir = async (file) => { try { return (await stat(file)).isDirectory(); } catch { return false; } };

function extractName(brief, slug) {
  const patterns = [/\*\*(?:Marca|Client|Cliente|client_name):\*\*\s*([^\n]+)/i, /^#\s*Brief\s*[—-]\s*([^\n]+)/im];
  for (const pattern of patterns) { const match = brief.match(pattern); if (match) return stripMd(match[1].replace(/\s*\([^)]*\)\s*$/, '')); }
  return titleFromSlug(slug);
}
function extractType(brief) {
  const match = brief.match(/\*\*(?:Industria|Rubro confirmado|Tipo):\*\*\s*([^\n]+)/i);
  return match ? stripMd(match[1]) : 'Client website';
}
function extractReadiness(text) {
  const patterns = [
    /Overall readiness(?:\*\*)?\s*[:|]\s*\*{0,2}(\d{1,3})\s*\/\s*100/i,
    /Overall readiness[^\n|]*\|\s*\*{0,2}(\d{1,3})\s*(?:\/\s*100|\|)/i,
    /Promedio simple:\*{0,2}\s*\*{0,2}(\d{1,3})\s*\/\s*100/i,
  ];
  for (const pattern of patterns) { const match = text.match(pattern); if (match) return Math.min(100, Number(match[1])); }
  return null;
}
function inferPublish(text, hasReports) {
  if (/publish[- ]ready\s*(?:[:|]|está|permanece)[^\n|]{0,40}\b(?:yes|approved|aprobado|listo)\b/i.test(text) && !/publish[- ]ready[^\n]{0,50}\b(?:block|bloquead)/i.test(text)) return 'Yes';
  if (/publish[- ]ready|publicaci[oó]n/i.test(text) && /block|bloquead|no publicar|not publish/i.test(text)) return 'Blocked';
  if (/commercial data readiness|legal\/policies readiness|datos comerciales|pol[ií]ticas|legal/i.test(text) && /missing|pendiente|weak|falta/i.test(text)) return 'Blocked';
  return hasReports ? 'Blocked' : 'Unknown';
}
function inferStatus(text, hasPreview, hasWordPress, publish) {
  if (publish === 'Yes') return 'Publish ready';
  if (/client review/i.test(text)) return 'Client review';
  if (/prototype|prototipo/i.test(text)) return 'Prototype';
  if (!hasPreview) return 'Not generated';
  if (hasWordPress) return 'Prototype';
  return 'Preview ready';
}
function extractBlockers(text, fallback) {
  const section = text.match(/##\s+(?:Blockers|Bloqueadores(?: de publicaci[oó]n)?|Critical blockers)[^\n]*\n([\s\S]*?)(?=\n##\s|$)/i)?.[1] ?? '';
  const lines = section.split('\n').map((line) => stripMd(line.replace(/^\d+[.)]\s*/, ''))).filter((line) => line && !line.startsWith('|')).slice(0, 2);
  return lines.length ? lines.join(' · ') : fallback;
}
function badgeClass(status) {
  if (/client review|publish ready/i.test(status)) return 'badge-review';
  if (/not generated/i.test(status)) return 'badge-blocked';
  if (/prototype|preview/i.test(status)) return 'badge-prototype';
  return '';
}
function initials(name) { return name.split(/\s+/).filter(Boolean).slice(0, 2).map((word) => word[0]).join('').toUpperCase(); }
function link(slug, file, label, primary = false) { return `<a${primary ? ' class="primary"' : ''} href="clients/${escapeHtml(slug)}/${escapeHtml(file)}">${escapeHtml(label)}</a>`; }

async function getClient(slug) {
  const dir = path.join(clientsRoot, slug);
  const brief = await readSafe(path.join(dir, 'brief.md'));
  const scorecard = await readSafe(path.join(dir, 'client-readiness-scorecard.md'));
  const quality = await readSafe(path.join(dir, 'quality-report.md'));
  const generation = await readSafe(path.join(dir, 'generation-report.md'));
  const reports = [scorecard, quality, generation].filter(Boolean).join('\n');
  const files = {};
  for (const [key, [file]] of Object.entries(knownFiles)) files[key] = await exists(path.join(dir, file));
  files.exports = await isDir(path.join(dir, 'exports'));
  const exportFiles = files.exports ? (await readdir(path.join(dir, 'exports'), { withFileTypes: true })).filter((e) => e.isFile()).map((e) => e.name).sort() : [];
  const wordpress = files.html && files.css;
  const publish = inferPublish(reports, Boolean(reports));
  const readiness = extractReadiness(scorecard || generation || quality);
  const status = inferStatus(reports, files.preview, wordpress, publish);
  return { slug, name: extractName(brief, slug), type: extractType(brief), files, exportFiles, wordpress, publish, readiness, status, blockers: extractBlockers([generation, quality, scorecard].filter(Boolean).join('\n'), 'Review missing assets and commercial data.') };
}

function actions(client) {
  const direct = [];
  if (client.files.preview) direct.push(link(client.slug, knownFiles.preview[0], 'Preview', true));
  if (client.files.scorecard) direct.push(link(client.slug, knownFiles.scorecard[0], 'Scorecard'));
  const more = Object.entries(knownFiles).filter(([key]) => !['preview', 'scorecard'].includes(key) && client.files[key]).map(([, [file, label]]) => link(client.slug, file, label));
  if (client.files.exports) more.push(`<a href="#exports-${escapeHtml(client.slug)}">Exports</a>`);
  if (!direct.length && !more.length) return '<span class="disabled-action" aria-disabled="true">Not generated</span>';
  return `<div class="row-actions">${direct.join('')}${more.length ? `<details><summary>More</summary><div>${more.join('')}</div></details>` : ''}</div>`;
}
function projectRow(client) {
  const score = client.readiness;
  const next = client.publish === 'Blocked' || score === null || score < 71 ? client.blockers : 'Review current deliverables and next milestone.';
  return `<tr${client.status === 'Not generated' ? ' class="simulated"' : ''}><td data-label="Project"><div class="project-name"><span class="avatar">${escapeHtml(initials(client.name))}</span><div><strong>${escapeHtml(client.name)}</strong><small>${escapeHtml(client.type)}</small></div></div></td><td data-label="Status"><span class="badge ${badgeClass(client.status)}"><i aria-hidden="true"></i>${escapeHtml(client.status)}</span></td><td data-label="Readiness"><div class="readiness"><strong>${score === null ? '—' : `${score}%`}</strong><progress max="100" value="${score ?? 0}" aria-label="Readiness: ${score === null ? 'not scored' : `${score} percent`}"></progress></div></td><td data-label="WordPress"><span class="${client.wordpress ? 'yes' : 'no'}">${client.wordpress ? 'Yes' : 'No'}</span><small>Publish ${escapeHtml(client.publish.toLowerCase())}</small></td><td data-label="Next action"><strong>${client.publish === 'Blocked' ? 'Resolve blockers' : score !== null && score >= 71 ? 'Review deliverables' : 'Complete missing inputs'}</strong><small>${escapeHtml(next)}</small></td><td data-label="Actions">${actions(client)}</td></tr>`;
}
function exportSection(client) {
  const files = client.exportFiles.filter((file) => /\.(?:html|css|md)$/i.test(file));
  if (!files.length) return '';
  const groups = new Map();
  for (const file of files) {
    const base = file.replace(/\.(html|css|md)$/i, '').replace(/-copy-ready$/i, '').replace(/^\d+-/, '').replace(/-/g, ' ');
    const label = file === 'README.md' ? 'Guide' : base.replace(/\b\w/g, (x) => x.toUpperCase());
    if (!groups.has(label)) groups.set(label, []);
    groups.get(label).push(file);
  }
  const rows = [...groups].map(([label, items]) => `<div><strong>${escapeHtml(label)}</strong><span class="export-actions">${items.map((file) => link(client.slug, `exports/${file}`, path.extname(file).slice(1).toUpperCase() === 'MD' ? 'Open' : path.extname(file).slice(1).toUpperCase())).join('')}</span></div>`).join('');
  return `<details id="exports-${escapeHtml(client.slug)}"><summary><span><strong>${escapeHtml(client.name)} exports</strong><small>Copy-ready files detected automatically</small></span><span>${files.length} files</span></summary><div class="export-list">${rows}</div></details>`;
}

const entries = (await readdir(clientsRoot, { withFileTypes: true })).filter((entry) => entry.isDirectory() && !entry.name.startsWith('.') && /^[a-z0-9][a-z0-9-]*$/.test(entry.name));
const clients = (await Promise.all(entries.map((entry) => getClient(entry.name)))).sort((a, b) => (b.readiness ?? -1) - (a.readiness ?? -1) || a.name.localeCompare(b.name));
const metrics = {
  total: clients.length, previews: clients.filter((c) => c.files.preview).length, wordpress: clients.filter((c) => c.wordpress).length,
  reviews: clients.filter((c) => /client review|prototype/i.test(c.status)).length, blocked: clients.filter((c) => c.publish === 'Blocked').length,
};
const scored = clients.filter((c) => c.readiness !== null);
const average = scored.length ? Math.round(scored.reduce((sum, c) => sum + c.readiness, 0) / scored.length) : null;
const attention = clients.filter((c) => c.publish === 'Blocked' || c.readiness === null || c.readiness < 71).slice(0, 6);
const exportClients = clients.filter((c) => c.files.exports && c.exportFiles.length);

const html = `<!DOCTYPE html>
<!-- Generated by scripts/generate-dashboard.mjs. Do not edit manually. -->
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="Web Agency OS client website production workspace."><meta name="theme-color" content="#0d1117"><title>Web Agency OS — Projects</title><link rel="stylesheet" href="styles.css"></head><body>
<a class="skip-link" href="#content">Skip to content</a><div class="app"><aside class="sidebar" aria-label="Workspace navigation"><a class="brand" href="./" aria-label="Web Agency OS home"><span aria-hidden="true">W</span><strong>Web Agency OS</strong></a><nav aria-label="Dashboard sections"><a class="active" href="#projects"><span aria-hidden="true">▦</span>Projects</a><a href="#readiness"><span aria-hidden="true">◉</span>Readiness</a><a href="#exports"><span aria-hidden="true">⇩</span>Exports</a><a href="#workflow"><span aria-hidden="true">↳</span>Workflow</a><a href="#team"><span aria-hidden="true">✦</span>Team</a><a href="#quality"><span aria-hidden="true">✓</span>Quality</a></nav><footer><span><i aria-hidden="true"></i>Build-time generated</span><small>No API keys</small></footer></aside>
<div class="workspace"><header class="topbar"><div><strong>Web Agency OS</strong><span>Client website production workspace</span></div><dl><div><dt>Projects</dt><dd>${metrics.total}</dd></div><div><dt>Ready previews</dt><dd>${metrics.previews}</dd></div><div><dt>WordPress-ready</dt><dd>${metrics.wordpress}</dd></div><div><dt>Review / prototype</dt><dd>${metrics.reviews}</dd></div><div><dt>Blocked</dt><dd>${metrics.blocked}</dd></div></dl><span class="static-state"><i aria-hidden="true"></i>Static dashboard</span></header>
<main id="content"><section class="projects" id="projects" aria-labelledby="projects-title"><header class="section-head"><div><p>Generated from clients/</p><h1 id="projects-title">Projects</h1></div><span>${metrics.total} workspaces detected</span></header><nav class="tabs" aria-label="Project summary"><a class="active" href="#projects">All <span>${metrics.total}</span></a><a href="#readiness">Review / prototype <span>${metrics.reviews}</span></a><a href="#projects">WordPress-ready <span>${metrics.wordpress}</span></a><a href="#readiness">Publish blocked <span>${metrics.blocked}</span></a></nav><div class="project-table-wrap"><table class="project-table"><thead><tr><th>Project</th><th>Status</th><th>Readiness</th><th>WordPress</th><th>Blocker / next action</th><th>Actions</th></tr></thead><tbody>${clients.map(projectRow).join('')}</tbody></table></div></section>
<section class="summary-grid" id="readiness" aria-label="Readiness and attention summary"><article class="panel readiness-summary"><header><div><p>Readiness</p><h2>Workspace status</h2></div><span>${average === null ? 'No scores' : `${average}% average`}</span></header><dl><div><dt>Average readiness</dt><dd>${average === null ? '—' : `${average}%`}</dd></div><div><dt>Ready previews</dt><dd>${metrics.previews}</dd></div><div><dt>WordPress-ready</dt><dd>${metrics.wordpress}</dd></div><div><dt>Publish blocked</dt><dd class="warning">${metrics.blocked}</dd></div></dl></article><article class="panel attention"><header><div><p>Needs attention</p><h2>Next decisions</h2></div><span>${attention.length} open</span></header><ul>${attention.length ? attention.map((c) => `<li><strong>${escapeHtml(c.name)}</strong><span>${escapeHtml(c.blockers)}</span></li>`).join('') : '<li><strong>No blockers detected</strong><span>Review reports before publishing.</span></li>'}</ul></article></section>
<section class="secondary" id="exports">${exportClients.length ? exportClients.map(exportSection).join('') : '<details><summary><span><strong>WordPress exports</strong><small>No exports detected</small></span><span>0 files</span></summary></details>'}</section>
<section class="secondary compact" id="workflow"><details><summary><span><strong>Workflow</strong><small>Production sequence</small></span><span>11 stages</span></summary><ol class="workflow"><li>Brief</li><li>Research</li><li>Brand</li><li>UX/CRO</li><li>Copy</li><li>SEO</li><li>Visual</li><li>Frontend</li><li>QA</li><li>Creative Director</li><li>WordPress</li></ol></details></section><section class="secondary compact" id="team"><details><summary><span><strong>Team</strong><small>Specialist agents</small></span><span>9 roles</span></summary><ul class="chips"><li>Research</li><li>Brand</li><li>UX/CRO</li><li>Copy</li><li>SEO</li><li>Visual</li><li>Frontend</li><li>QA</li><li>Creative Director</li></ul></details></section><section class="secondary compact" id="quality"><details><summary><span><strong>Quality</strong><small>Definition of done</small></span><span>7 checks</span></summary><ul class="checks"><li>Semantic HTML</li><li>Scoped CSS</li><li>Mobile-first</li><li>Accessibility basics</li><li>No fake claims</li><li>Placeholder control</li><li>WordPress notes</li></ul></details></section></main></div></div></body></html>\n`;
await writeFile(output, html);
console.log(`Generated index.html from ${clients.length} client workspace${clients.length === 1 ? '' : 's'}.`);
