const CFB_CATALOG = null; // stripped for size -- was the full CFB 27 reference catalog, no longer used by this build

// CFB_CATALOG above is kept only for reference/porting -- it is NOT used by the
// active FIELD_GROUPS below. This tool now targets Madden NFL Team Builder, whose
// jersey-font and helmet-material asset paths are different from CFB 27's and have
// not been captured yet. Fill MADDEN_CATALOG in with real captured entries (same
// shape as CFB_CATALOG: displayName/path/label triples) as they're gathered --
// see README.md "Capturing Madden font/material paths" for the process.
const MADDEN_CATALOG = {
  "_meta": {
    "description": "Known font-array texture paths for Madden NFL Team Builder name/number fonts and helmet materials. Empty stub -- populate by capturing real payloads via this extension's Fetch/Push workflow, one NFL team + variant at a time.",
    "generatedFrom": "not yet populated",
    "knownIssues": [
      "[numberFonts.jersey] UNVERIFIED: 'Jacksonville Jaguars (2026, Current Alternate Classic)' path was pattern-guessed from the CFB naming convention (TEAM_Jersey_YEAR_VARIANT_NUM_Array), not captured from a live Team Builder payload -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'San Francisco 49ers (2026, Current Alternate Classic)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'Indianapolis Colts (2026, Current Home)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'New York Jets (2026, Current Alternate Classic)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'Miami Dolphins (2026, Current Home Alternate Classic)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'Tennessee Titans (2026, Current Alternate Classic)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'Buffalo Bills (2026, 1990 Classic Away)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'New England Patriots (2026, Current Alternate Classic)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'Cleveland Browns (2026, Current Alternate Classic)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'Baltimore Ravens (2026, Current Home)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'Pittsburgh Steelers (2026, Current Alternate Classic)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'Denver Broncos (2026, Current Alternate Classic)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'Los Angeles Chargers (2026, Current Navy Color Rush)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'Carolina Panthers (2026, Current Home)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'New Orleans Saints (2026, Current Color Rush)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'Tampa Bay Buccaneers (2026, Current Home Alternate Classic)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'New York Giants (2026, Current Color Rush)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'Dallas Cowboys (2026, Current Away)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'Philadelphia Eagles (2026, Current Alternate Classic)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'Chicago Bears (2026, Current Home)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'Green Bay Packers (2026, Current Home)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'Minnesota Vikings (2026, Current Alternate Classic)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'Detroit Lions (2026, 1980s Classic Home)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'Seattle Seahawks (2026, Current Alternate Classic)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'Los Angeles Rams (2026, Current Away)' path was pattern-guessed, not captured -- confirm and correct once verified.",
      "[numberFonts.jersey] UNVERIFIED: 'Arizona Cardinals (2026, Current Rivalry)' path was pattern-guessed, not captured -- confirm and correct once verified."
    ]
  },
  "nameFonts": [],
  "numberFonts": {
    "jersey": [
      { "displayName": "JAX_Jersey_2026_CurrentAlternateClassic_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/JAX_Jersey_2026_CurrentAlternateClassic_NUM_Array", "label": "Jacksonville Jaguars (2026, Current Alternate Classic)" },
      { "displayName": "SF_Jersey_2026_CurrentAlternateClassic_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/SF_Jersey_2026_CurrentAlternateClassic_NUM_Array", "label": "San Francisco 49ers (2026, Current Alternate Classic)" },

{ "displayName": "IND_Jersey_2026_CurrentHome_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/IND_Jersey_2026_CurrentHome_NUM_Array", "label": "Indianapolis Colts (2026, Current Home)" },
      { "displayName": "NYJ_Jersey_2026_CurrentAlternateClassic_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/NYJ_Jersey_2026_CurrentAlternateClassic_NUM_Array", "label": "New York Jets (2026, Current Alternate Classic)" },
      { "displayName": "MIA_Jersey_2026_CurrentHomeAlternateClassic_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/MIA_Jersey_2026_CurrentHomeAlternateClassic_NUM_Array", "label": "Miami Dolphins (2026, Current Home Alternate Classic)" },
      { "displayName": "TEN_Jersey_2026_CurrentAlternateClassic_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/TEN_Jersey_2026_CurrentAlternateClassic_NUM_Array", "label": "Tennessee Titans (2026, Current Alternate Classic)" },
      { "displayName": "BUF_Jersey_2026_1990ClassicAway_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/BUF_Jersey_2026_1990ClassicAway_NUM_Array", "label": "Buffalo Bills (2026, 1990 Classic Away)" },
      { "displayName": "NE_Jersey_2026_CurrentAlternateClassic_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/NE_Jersey_2026_CurrentAlternateClassic_NUM_Array", "label": "New England Patriots (2026, Current Alternate Classic)" },
      { "displayName": "CLE_Jersey_2026_CurrentAlternateClassic_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/CLE_Jersey_2026_CurrentAlternateClassic_NUM_Array", "label": "Cleveland Browns (2026, Current Alternate Classic)" },
      { "displayName": "BAL_Jersey_2026_CurrentHome_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/BAL_Jersey_2026_CurrentHome_NUM_Array", "label": "Baltimore Ravens (2026, Current Home)" },
      { "displayName": "PIT_Jersey_2026_CurrentAlternateClassic_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/PIT_Jersey_2026_CurrentAlternateClassic_NUM_Array", "label": "Pittsburgh Steelers (2026, Current Alternate Classic)" },
      { "displayName": "DEN_Jersey_2026_CurrentAlternateClassic_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/DEN_Jersey_2026_CurrentAlternateClassic_NUM_Array", "label": "Denver Broncos (2026, Current Alternate Classic)" },
      { "displayName": "LAC_Jersey_2026_CurrentNavyColorRush_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/LAC_Jersey_2026_CurrentNavyColorRush_NUM_Array", "label": "Los Angeles Chargers (2026, Current Navy Color Rush)" },
      { "displayName": "CAR_Jersey_2026_CurrentHome_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/CAR_Jersey_2026_CurrentHome_NUM_Array", "label": "Carolina Panthers (2026, Current Home)" },
      { "displayName": "NO_Jersey_2026_CurrentColorRush_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/NO_Jersey_2026_CurrentColorRush_NUM_Array", "label": "New Orleans Saints (2026, Current Color Rush)" },
      { "displayName": "TB_Jersey_2026_CurrentHomeAlternateClassic_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/TB_Jersey_2026_CurrentHomeAlternateClassic_NUM_Array", "label": "Tampa Bay Buccaneers (2026, Current Home Alternate Classic)" },
      { "displayName": "NYG_Jersey_2026_CurrentColorRush_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/NYG_Jersey_2026_CurrentColorRush_NUM_Array", "label": "New York Giants (2026, Current Color Rush)" },
      { "displayName": "DAL_Jersey_2026_CurrentAway_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/DAL_Jersey_2026_CurrentAway_NUM_Array", "label": "Dallas Cowboys (2026, Current Away)" },
      { "displayName": "PHI_Jersey_2026_CurrentAlternateClassic_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/PHI_Jersey_2026_CurrentAlternateClassic_NUM_Array", "label": "Philadelphia Eagles (2026, Current Alternate Classic)" },
      { "displayName": "CHI_Jersey_2026_CurrentHome_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/CHI_Jersey_2026_CurrentHome_NUM_Array", "label": "Chicago Bears (2026, Current Home)" },
      { "displayName": "GB_Jersey_2026_CurrentHome_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/GB_Jersey_2026_CurrentHome_NUM_Array", "label": "Green Bay Packers (2026, Current Home)" },
      { "displayName": "MIN_Jersey_2026_CurrentAlternateClassic_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/MIN_Jersey_2026_CurrentAlternateClassic_NUM_Array", "label": "Minnesota Vikings (2026, Current Alternate Classic)" },
      { "displayName": "DET_Jersey_2026_1980sClassicHome_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/DET_Jersey_2026_1980sClassicHome_NUM_Array", "label": "Detroit Lions (2026, 1980s Classic Home)" },
      { "displayName": "SEA_Jersey_2026_CurrentAlternateClassic_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/SEA_Jersey_2026_CurrentAlternateClassic_NUM_Array", "label": "Seattle Seahawks (2026, Current Alternate Classic)" },
      { "displayName": "LAR_Jersey_2026_CurrentAway_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/LAR_Jersey_2026_CurrentAway_NUM_Array", "label": "Los Angeles Rams (2026, Current Away)" },
      { "displayName": "ARI_Jersey_2026_CurrentRivalry_NUM_Array", "path": "content/characters/player/parts/uniforms/jerseys/numbers/ARI_Jersey_2026_CurrentRivalry_NUM_Array", "label": "Arizona Cardinals (2026, Current Rivalry)" }

],
    "helmetDedicated": [],
    "alts": []
  },
  "helmetMaterials": {
    "shell": [],
    "facemask": [],
    "accessory": []
  }
};

const state = {
  extensionId: null, // unused now -- this page is bundled in the extension, so messaging is internal
  urls: [],
  selectedUrl: null,
  payload: null,
  variants: [],
  selectedVariantIdx: 0,
  originalRawText: '', // snapshot taken when a payload is first fetched, for Reset to loaded
  lastSelections: {} // gsKey -> last applied text, so the picker shows what was actually chosen
};

// Bump this with every round of changes to this tool. See CHANGELOG.md for what
// each version actually changed.
const EDITOR_VERSION = 'v0.03-madden-stub';

// ---------- logging ----------
function log(msg, level = '') {
  const el = document.getElementById('logOut');
  const div = document.createElement('div');
  div.className = 'entry' + (level ? ' ' + level : '');
  const ts = new Date().toLocaleTimeString();
  div.innerHTML = `<span class="ts">${ts}</span>${escapeHtml(msg)}`;
  el.appendChild(div);
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// ---------- extension messaging ----------
// This page is bundled inside the extension itself (opened via the toolbar icon),
// so messages go through chrome.runtime.sendMessage() with no target ID -- that
// routes to this same extension's own background.js via chrome.runtime.onMessage,
// which now shares its handling logic with the external-facing API.
function sendToExtension(type, extra = {}) {
  return new Promise((resolve, reject) => {
    if (!window.chrome || !chrome.runtime || !chrome.runtime.sendMessage) {
      reject(new Error('chrome.runtime is unavailable. This page must be opened as chrome-extension://…/editor.html, not a regular file or web page.'));
      return;
    }
    try {
      chrome.runtime.sendMessage(Object.assign({ type }, extra), (response) => {
        if (chrome.runtime.lastError) { reject(new Error(chrome.runtime.lastError.message)); return; }
        if (!response) { reject(new Error('No response from background.js.')); return; }
        if (response.ok === false) { reject(new Error(response.error || 'Extension returned an error.')); return; }
        resolve(response);
      });
    } catch (err) { reject(err); }
  });
}

// ---------- status / urls ----------
document.getElementById('btnStatus').addEventListener('click', refreshStatus);
async function refreshStatus() {
  try {
    const r = await sendToExtension('TB_GET_STATUS');
    state.urls = r.urls || [];
    renderStatus(r);
    renderUrlList();
    log('Status refreshed — helper v' + r.helperVersion + ', ' + state.urls.length + ' known URL(s).', 'ok');
  } catch (err) {
    document.getElementById('statusOut').innerHTML = `<div class="badge err">error</div> ${escapeHtml(err.message)}`;
    log('Status refresh failed: ' + err.message, 'err');
  }
}

function renderStatus(r) {
  const s = r.status || {};
  const nm = s.networkMocking || {};
  const lastHit = s.lastMockHit;
  document.getElementById('statusOut').innerHTML = `
    <div class="status-grid">
      <div>Helper version: <b>${escapeHtml(r.helperVersion || '—')}</b></div>
      <div>Active page key: <b>${escapeHtml(r.activePage?.pageKey || '—')}</b></div>
      <div>Network mocking: <b>${nm.enabled ? 'enabled' : 'off'}</b></div>
      <div>Mocks stored: <b>${Object.keys(r.mocks || {}).length}</b></div>
      <div style="grid-column:1 / -1;">Last mock hit: <b>${lastHit ? escapeHtml(lastHit.teamName || lastHit.url) + ' @ ' + new Date(lastHit.usedAt).toLocaleTimeString() : '—'}</b></div>
    </div>`;
}

function renderUrlList() {
  const el = document.getElementById('urlListOut');
  if (!state.urls.length) { el.innerHTML = '<div class="hint">No nonce-primary.json URLs discovered yet — open a team in Team Builder, then refresh status.</div>'; return; }
  el.innerHTML = '<div class="urllist">' + state.urls.map((u, i) => `
    <div class="urlitem${u.url === state.selectedUrl ? ' selected' : ''}" data-idx="${i}">${escapeHtml(u.url)}</div>
  `).join('') + '</div>';
  el.querySelectorAll('.urlitem').forEach(node => {
    node.addEventListener('click', () => {
      state.selectedUrl = state.urls[+node.dataset.idx].url;
      document.getElementById('urlManual').value = state.selectedUrl;
      renderUrlList();
    });
  });
}

// ---------- fetch / parse payload ----------
document.getElementById('btnFetch').addEventListener('click', fetchPayload);
async function fetchPayload() {
  let url = document.getElementById('urlManual').value.trim();
  if (!url && state.urls.length) {
    url = state.urls[0].url;
    document.getElementById('urlManual').value = url;
    log('No URL selected — using the top discovered one automatically.');
  }
  if (!url) { log('No URL entered, and none discovered yet — click "Refresh status" first.', 'err'); return; }
  state.selectedUrl = url;
  try {
    const r = await sendToExtension('TB_FETCH_JSON', { url });
    document.getElementById('rawText').value = r.text;
    state.originalRawText = r.text;
    loadFromRawText();
    log('Fetched payload (' + r.text.length + ' chars).', 'ok');
  } catch (err) {
    log('Fetch failed: ' + err.message, 'err');
  }
}

document.getElementById('btnResync').addEventListener('click', loadFromRawText);
function loadFromRawText() {
  const raw = document.getElementById('rawText').value;
  try {
    state.payload = JSON.parse(raw);
  } catch (err) {
    log('Could not parse current text as JSON: ' + err.message, 'err');

return;
  }
  state.variants = deriveVariants(state.payload);
  state.selectedVariantIdx = 0;
  state.lastSelections = {};
  const teamName = state.payload?.teamData?.teamInfos?.TEAM_NAME;
  document.getElementById('teamNameBadge').textContent = teamName ? ' — ' + teamName : '';
  renderEditor();
}

function deriveVariants(payload) {
  const helmets = payload?.teamData?.frostbiteData?.uniformParts?.helmets || {};
  const jerseys = payload?.teamData?.frostbiteData?.uniformParts?.jerseys || {};
  const suffixOf = (key, kind) => {
    const m = key.match(new RegExp('-([A-Za-z0-9]+)-' + kind + '$', 'i'));
    return m ? m[1] : null;
  };
  const suffixes = new Set();
  Object.keys(helmets).forEach(k => { const s = suffixOf(k, 'helmet'); if (s) suffixes.add(s); });
  Object.keys(jerseys).forEach(k => { const s = suffixOf(k, 'jersey'); if (s) suffixes.add(s); });
  return [...suffixes].map(suffix => ({
    label: suffix.replace(/([a-z])([A-Z])/g, '$1 $2'),
    suffix,
    helmetKey: Object.keys(helmets).find(k => suffixOf(k, 'helmet') === suffix) || null,
    jerseyKey: Object.keys(jerseys).find(k => suffixOf(k, 'jersey') === suffix) || null
  }));
}

// ---------- deep get/set ----------
function getDeep(obj, path) {
  let cur = obj;
  for (const p of path) { if (cur == null) return undefined; cur = cur[p]; }
  return cur;
}
function setDeep(obj, path, value) {
  let cur = obj;
  for (let i = 0; i < path.length - 1; i++) {
    if (cur[path[i]] == null) return false;
    cur = cur[path[i]];
  }
  cur[path[path.length - 1]] = value;
  return true;
}

// ---------- field definitions ----------
function isUsableFontPath(p) { return !!p && !/\/(numbers|name_fonts)\/?$/i.test(p); }

// Confirmed by testing: /comp/ isn't needed at all. Both arrayTexture.textureId and
// the overlay's textureId work fine set to the exact same non-/comp/ path. The real
// original bug was simply that arrayTexture can't be left blank -- it was never about
// the two fields needing different path shapes. This strips /comp/ from whatever the
// catalog has on record (most entries have it, a few newer ones don't), so both
// targets always get the same normalized, confirmed-working form.
function stripCompSegment(path) {
  return path.replace('/uniforms/comp/', '/uniforms/');
}

// v1 scope: only fields confirmed to actually work in-game. Helmet number font and
// name font are left out entirely -- both are still unverified (see the prompt doc),
// and weren't wanted in this pass regardless.
const FIELD_GROUPS = [
  {
    key: 'jerseyNumberFont', label: 'Jersey Number Font', status: 'ok', partKind: 'jersey',
    subfields: [
      {
        key: 'font', label: '',
        options: () => [...MADDEN_CATALOG.numberFonts.jersey, ...MADDEN_CATALOG.numberFonts.alts]
          .filter(e => isUsableFontPath(e.path) && !/_name_array$/i.test(e.path)),
        // Confirmed: arrayTexture.textureId can't be left blank, and once set, both
        // it and the overlay's textureId use the identical non-/comp/ path.
        targets: [
          { label: 'arrayTexture', path: ['numberComp', 'arrayTexture', 'textureId'], transform: stripCompSegment },
          { label: 'overlay', path: ['numberComp', 'overlays', 0, 'textures', 'color', 'textureId'], transform: stripCompSegment }
        ]
      }
    ]
  },
  {
    key: 'helmetMaterials', label: 'Helmet Materials', status: 'ok', partKind: 'helmet',
    subfields: [
      {
        key: 'shell', label: 'Shell',
        hint: 'Also sets the matching accessory automatically.',
        options: () => MADDEN_CATALOG.helmetMaterials.shell,
        targets: [
          { label: 'shell', path: ['shellMaterial'] },
          { label: 'accessory (auto)', path: ['accMaterial'], lookupCatalog: () => MADDEN_CATALOG.helmetMaterials.accessory }
        ]
      }
    ]
  }
];
const STATUS_BADGE = {
  ok: '<span class="badge ok">confirmed</span>',
  warn: '<span class="badge warn">unverified</span>',
  off: '<span class="badge off">out of scope</span>'
};

// ---------- editor rendering ----------
function renderEditor() {
  const out = document.getElementById('editorOut');
  if (!state.payload || !state.variants.length) {
    out.innerHTML = '<div class="empty-state">No uniform variants found in this payload — check it actually has teamData.frostbiteData.uniformParts.</div>';
    return;
  }
  const variantOptions = state.variants.map((v, i) => `<option value="${i}"${i === state.selectedVariantIdx ? ' selected' : ''}>${escapeHtml(v.label)}</option>`).join('');

  out.innerHTML = `
    <div class="row">
      <div class="field">
        <label for="variantSel">Uniform variant</label>
        <select id="variantSel">${variantOptions}</select>
      </div>
    </div>
    <div id="fieldsOut"></div>
  `;
  document.getElementById('variantSel').addEventListener('change', (e) => {
    state.selectedVariantIdx = +e.target.value;
    state.lastSelections = {};
    renderFields();
  });
  renderFields();
}

function renderFields() {
  const variant = state.variants[state.selectedVariantIdx];
  const fieldsEl = document.getElementById('fieldsOut');

  fieldsEl.innerHTML = FIELD_GROUPS.map(group => {
    const part = getPart(group);

    const subfieldsHtml = !part ? '' : group.subfields.map(sub => {
      const gsKey = group.key + ':' + sub.key;
      const listId = 'dl-' + gsKey;
      const opts = sub.options();
      const datalist = opts.length ? `<datalist id="${listId}">${opts.map(o => `<option value="${escapeHtml(o.label || o.displayName)}">`).join('')}</datalist>` : '';

      const currentValsHtml = sub.targets.map(t => {
        const v = getDeep(part, t.path);
        const tag = sub.targets.length > 1 ? ` (${escapeHtml(t.label)})` : '';
        return `<div class="current-val"><b>current${tag} — what's already there:</b> ${escapeHtml(v || '(unset)')}</div>`;

}).join('');

      const lastValue = state.lastSelections[gsKey] || '';

      return `
        <div${group.subfields.length > 1 ? ' style="margin-top:14px; padding-top:14px; border-top:1px solid var(--line);"' : ''}>
          ${sub.label ? `<div style="font-weight:600; font-size:12.5px; margin-bottom:6px;">${escapeHtml(sub.label)}</div>` : ''}
          ${sub.hint ? `<div class="hint" style="margin-bottom:6px;">${escapeHtml(sub.hint)}</div>` : ''}
          <input type="text" list="${listId}" data-key="${gsKey}" value="${escapeHtml(lastValue)}" placeholder="${opts.length ? 'Pick from catalog' : 'Paste a raw path'} — sets ${sub.targets.length > 1 ? 'all fields' : 'this field'} at once">
          ${datalist}
          ${currentValsHtml}
        </div>`;
    }).join('');

    return `
      <div class="fieldblock">
        <div class="head">
          <div class="name">${escapeHtml(group.label)}</div>
          ${STATUS_BADGE[group.status]}
        </div>
        ${!part ? `<div class="hint">No ${group.partKind} part found for this variant.</div>` : subfieldsHtml}
      </div>`;
  }).join('');

  FIELD_GROUPS.forEach(group => {
    group.subfields.forEach(sub => {
      const gsKey = group.key + ':' + sub.key;
      const input = fieldsEl.querySelector(`input[data-key="${gsKey}"]`);
      if (input) input.addEventListener('change', () => applyField(group, sub, input.value));
    });
  });
}

function getPart(group) {
  const variant = state.variants[state.selectedVariantIdx];
  const partKey = group.partKind === 'helmet' ? variant.helmetKey : variant.jerseyKey;
  if (!partKey) return null;
  const basePath = ['teamData', 'frostbiteData', 'uniformParts', group.partKind === 'helmet' ? 'helmets' : 'jerseys', partKey];
  return getDeep(state.payload, basePath);
}

function applyField(group, sub, typed) {
  const part = getPart(group);
  if (!part) return;
  const variant = state.variants[state.selectedVariantIdx];
  const label = group.label + (sub.label ? ' ' + sub.label : '');

  let value = typed;
  const opts = sub.options();
  const match = opts.find(o => (o.label || o.displayName) === typed);
  if (match) value = match.path;
  const resolvedLabel = match ? (match.label || match.displayName) : typed;
  // else: treat typed text as a raw path override (must contain a slash to be sane)

  let allOk = true;
  const skipped = [];
  sub.targets.forEach(t => {
    let v;
    if (t.lookupCatalog) {
      // Pull this target's value from a different catalog, matched by the same
      // resolved label -- e.g. picking a shell also looks up the accessory with
      // the identical label. If nothing matches there, leave this target alone
      // rather than writing something wrong.
      const hit = t.lookupCatalog().find(o => (o.label || o.displayName) === resolvedLabel);
      if (!hit) { skipped.push(t.label); return; }
      v = hit.path;
    } else {
      v = t.transform ? t.transform(value) : value;
    }
    if (!setDeep(part, t.path, v)) allOk = false;
  });
  if (!allOk) {
    log(`Could not fully set ${label} — expected structure missing on this variant for at least one of its ${sub.targets.length} target field(s).`, 'err');
    return;
  }
  if (skipped.length) {
    log(`No matching ${skipped.join(', ')} found for "${resolvedLabel}" — left unchanged.`, 'err');
  }

  document.getElementById('rawText').value = JSON.stringify(state.payload, null, 2);
  state.lastSelections[group.key + ':' + sub.key] = typed;
  const writeNote = sub.targets.length > 1 ? ` [written to ${sub.targets.length} fields: ${sub.targets.map(t => t.label).join(', ')}]` : '';
  log(`Set ${label} (${variant.label}) → ${value}${writeNote}`, 'ok');
  renderFields();
}


// ---------- push / status / clear ----------
document.getElementById('btnPush').addEventListener('click', async () => {
  if (!state.selectedUrl) { log('No URL selected — fetch a payload first.', 'err'); return; }
  const text = document.getElementById('rawText').value;
  try {
    JSON.parse(text);
  } catch (err) { log('Current text is not valid JSON: ' + err.message, 'err'); return; }
  try {
    const teamName = state.payload?.teamData?.teamInfos?.TEAM_NAME || '';
    const r = await sendToExtension('TB_SET_MOCK', { url: state.selectedUrl, text, teamName });
    log('Pushed mock for ' + (teamName || state.selectedUrl) + '. Reload the Team Builder tab to see it.', 'ok');
  } catch (err) {
    log('Push failed: ' + err.message, 'err');
  }
});

document.getElementById('btnCheck').addEventListener('click', refreshStatus);

document.getElementById('btnClear').addEventListener('click', async () => {
  if (!state.selectedUrl) { log('No URL selected.', 'err'); return; }
  try {
    await sendToExtension('TB_CLEAR_MOCK', { url: state.selectedUrl });
    log('Mock cleared.', 'ok');
    await refreshStatus(); // the connection panel above won't visibly change otherwise
  } catch (err) {
    log('Clear failed: ' + err.message, 'err');
  }
});

document.getElementById('btnReset').addEventListener('click', () => {
  if (!state.originalRawText) { log('Nothing loaded yet to reset to.', 'err'); return; }
  document.getElementById('rawText').value = state.originalRawText;
  loadFromRawText();
  log('Reset to the payload as originally loaded — all edits this session are discarded.', 'ok');
});

document.getElementById('versionTag').textContent = EDITOR_VERSION;
log('Ready (' + EDITOR_VERSION + '). Click "Refresh status" to connect to the helper extension.');
if (!MADDEN_CATALOG.numberFonts.jersey.length && !MADDEN_CATALOG.helmetMaterials.shell.length) {
  log('MADDEN_CATALOG is currently empty — dropdowns will be blank until real Madden font/material paths are captured and added. You can still type a raw path directly into any field.', 'warn');
}
