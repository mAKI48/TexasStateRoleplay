// ============================================================
// Texas State Roleplay - Rules Website Logic
// ============================================================

(function () {
  'use strict';

  // ----- Header -----
  document.getElementById('site-title').textContent = siteConfig.title;
  document.getElementById('site-subtitle').textContent = siteConfig.subtitle;
  document.getElementById('site-tagline').textContent = siteConfig.tagline;

  const valuesEl = document.getElementById('site-values');
  siteConfig.values.forEach(v => {
    const pill = document.createElement('span');
    pill.className = 'value-pill';
    pill.textContent = v;
    valuesEl.appendChild(pill);
  });

  // ----- Tab Navigation -----
  const tabs = document.querySelectorAll('.nav-tab');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => {
        t.classList.toggle('active', t === tab);
        t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
      });
      panels.forEach(p => {
        p.classList.toggle('active', p.id === `panel-${target}`);
      });
    });
  });

  // ----- Render Rule Card -----
  function createRuleCard(rule) {
    const card = document.createElement('article');
    card.className = 'rule-card';
    card.dataset.id = rule.id;
    card.dataset.search = `${rule.number} ${rule.title} ${rule.short} ${rule.meaning} ${rule.howToFollow} ${rule.whenApplies}`.toLowerCase();

    card.innerHTML = `
      <div class="rule-header" role="button" tabindex="0" aria-expanded="false">
        <span class="rule-number">${rule.number}</span>
        <div class="rule-header-text">
          <div class="rule-title">${escapeHtml(rule.title)}</div>
          <div class="rule-short">${escapeHtml(rule.short)}</div>
        </div>
        <span class="rule-chevron">▼</span>
      </div>
      <div class="rule-body">
        <div class="rule-section">
          <h4>What it means</h4>
          <p>${escapeHtml(rule.meaning)}</p>
        </div>
        <div class="rule-section">
          <h4>How to follow</h4>
          <p>${escapeHtml(rule.howToFollow)}</p>
        </div>
        <div class="rule-section">
          <h4>When it applies</h4>
          <p>${escapeHtml(rule.whenApplies)}</p>
        </div>
        <div class="rule-section">
          <h4>Examples — Allowed</h4>
          <ul class="examples-allowed">
            ${rule.examplesAllowed.map(e => `<li>${escapeHtml(e)}</li>`).join('')}
          </ul>
        </div>
        <div class="rule-section">
          <h4>Examples — Not Allowed</h4>
          <ul class="examples-not">
            ${rule.examplesNotAllowed.map(e => `<li>${escapeHtml(e)}</li>`).join('')}
          </ul>
        </div>
        <div class="rule-section">
          <h4>Exceptions / Notes</h4>
          <div class="exceptions-box">${escapeHtml(rule.exceptions)}</div>
        </div>
      </div>
    `;

    const header = card.querySelector('.rule-header');
    header.addEventListener('click', () => toggleCard(card, header));
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCard(card, header);
      }
    });

    return card;
  }

  function toggleCard(card, header) {
    const isOpen = card.classList.toggle('open');
    header.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ----- Render In-Game & Discord Rules -----
  const ingameList = document.getElementById('rules-ingame');
  const discordList = document.getElementById('rules-discord');

  inGameRules.forEach(rule => ingameList.appendChild(createRuleCard(rule)));
  discordRules.forEach(rule => discordList.appendChild(createRuleCard(rule)));

  // ----- Search for rules -----
  function setupRuleSearch(inputId, listId, noResultsId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);
    const noResults = document.getElementById(noResultsId);

    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      let visible = 0;
      list.querySelectorAll('.rule-card').forEach(card => {
        const match = !q || card.dataset.search.includes(q);
        card.style.display = match ? '' : 'none';
        if (match) visible++;
      });
      noResults.style.display = visible === 0 ? 'block' : 'none';
    });
  }

  setupRuleSearch('search-ingame', 'rules-ingame', 'no-ingame');
  setupRuleSearch('search-discord', 'rules-discord', 'no-discord');

  // ----- LEO Codes -----
  function renderCodeTable(tbodyId, codes) {
    const tbody = document.getElementById(tbodyId);
    tbody.innerHTML = codes.map(c => `
      <tr data-search="${escapeHtml((c.code + ' ' + c.meaning).toLowerCase())}">
        <td class="code-cell">${escapeHtml(c.code)}</td>
        <td>${escapeHtml(c.meaning)}</td>
      </tr>
    `).join('');
  }

  renderCodeTable('tbody-tencodes', leoCodes.tenCodes);
  renderCodeTable('tbody-response', leoCodes.responseCodes);
  renderCodeTable('tbody-signals', leoCodes.signalCodes);

  // Phonetic
  const phoneticGrid = document.getElementById('phonetic-grid');
  phoneticGrid.innerHTML = leoCodes.phonetic.map(p => `
    <div class="phonetic-item" data-search="${escapeHtml((p.letter + ' ' + p.word).toLowerCase())}">
      <span class="phonetic-letter">${escapeHtml(p.letter)}</span>
      <span class="phonetic-word">${escapeHtml(p.word)}</span>
    </div>
  `).join('');

  // LEO sub-tabs
  const leoSubtabs = document.querySelectorAll('.leo-subtab');
  const leoSections = document.querySelectorAll('.leo-section');

  leoSubtabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.leo;
      leoSubtabs.forEach(b => b.classList.toggle('active', b === btn));
      leoSections.forEach(s => s.classList.toggle('active', s.id === `leo-${target}`));
    });
  });

  // LEO search
  const leoSearch = document.getElementById('search-leo');
  leoSearch.addEventListener('input', () => {
    const q = leoSearch.value.trim().toLowerCase();

    // Filter tables
    ['tbody-tencodes', 'tbody-response', 'tbody-signals'].forEach(id => {
      document.querySelectorAll(`#${id} tr`).forEach(row => {
        const match = !q || (row.dataset.search || '').includes(q);
        row.style.display = match ? '' : 'none';
      });
    });

    // Filter phonetic
    document.querySelectorAll('#phonetic-grid .phonetic-item').forEach(item => {
      const match = !q || (item.dataset.search || '').includes(q);
      item.style.display = match ? '' : 'none';
    });
  });

})();
