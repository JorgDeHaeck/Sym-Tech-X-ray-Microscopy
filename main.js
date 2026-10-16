/* =========================================================
   Sym-Tech website script (version 20261016b)
   - loads header.html / footer.html into every page
   - English / Vietnamese language switch (remembered per visitor)
   - mobile menu, active menu item, image lightbox, scroll reveal
   - scan of the month (reads scans.js, with zoom explorer) and contact form (FormSubmit)
   ========================================================= */
(function () {
  'use strict';
  var KEY = 'symtech-lang';
  var root = document.documentElement;
  root.classList.add('js');

  /* ---------- Language ---------- */
  function currentLang() {
    return root.getAttribute('data-lang') === 'vi' ? 'vi' : 'en';
  }

  function applyLang(lang) {
    lang = lang === 'vi' ? 'vi' : 'en';
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang);

    // page title and description use data-en / data-vi attributes
    var t = document.querySelector('title');
    if (t && t.dataset[lang]) document.title = t.dataset[lang];
    var d = document.querySelector('meta[name="description"]');
    if (d && d.dataset[lang]) d.setAttribute('content', d.dataset[lang]);

    // translated image alt texts: data-alt-en / data-alt-vi
    document.querySelectorAll('[data-alt-en]').forEach(function (img) {
      img.alt = img.getAttribute('data-alt-' + lang) || img.alt;
    });

    document.querySelectorAll('[data-set-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang') === lang));
    });
    try { localStorage.setItem(KEY, lang); } catch (e) { /* storage blocked: ignore */ }
  }

  /* Version tag of this site release. Change it (here AND in the ?v=... of style.css,
     main.js and scans.js in every .html page) each time a new version is published. */
  var SITE_VERSION = '20261016c';

  /* ---------- Header / footer partials ---------- */
  function loadPartial(id, file) {
    var el = document.getElementById(id);
    if (!el) return Promise.resolve();
    return fetch(file + '?v=' + SITE_VERSION)   // version tag: browsers fetch new header/footer after an update
      .then(function (r) { return r.text(); })
      .then(function (html) { el.innerHTML = html; })
      .catch(function () { /* opened without a web server: partials unavailable */ });
  }

  function initHeader() {
    // highlight the current page in the menu
    var page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav a').forEach(function (a) {
      if (a.getAttribute('href') === page) a.classList.add('active');
    });

    var toggle = document.querySelector('.menu-toggle');
    var nav = document.getElementById('main-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
      });
    }

    document.querySelectorAll('.year').forEach(function (y) {
      y.textContent = new Date().getFullYear();
    });
  }

  // language buttons (works for buttons loaded later too)
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-set-lang]');
    if (b) applyLang(b.getAttribute('data-set-lang'));
  });

  /* ---------- Lightbox for scan images ---------- */
  function initLightbox() {
    // Scan results: category filter
    var fbtns = document.querySelectorAll('.cat-filter button');
    fbtns.forEach(function (b) {
      b.addEventListener('click', function () {
        var f = b.getAttribute('data-filter');
        fbtns.forEach(function (x) { x.classList.toggle('active', x === b); });
        document.querySelectorAll('.cat').forEach(function (c) {
          c.classList.toggle('is-hidden', f !== 'all' && c.getAttribute('data-cat') !== f);
          if (!c.classList.contains('is-hidden')) c.querySelectorAll('.reveal').forEach(function (r) { r.classList.add('in'); });
        });
      });
    });

    var h = (location.hash || '').slice(1);
    if (h) fbtns.forEach(function (b) { if (b.getAttribute('data-filter') === h) setTimeout(function () { b.click(); var t = document.getElementById(h); if (t) t.scrollIntoView(); }, 0); });

    var shots = document.querySelectorAll('.shot');
    if (!shots.length) return;
    var box = document.createElement('div');
    box.className = 'lightbox';
    box.innerHTML = '<button type="button" aria-label="Close">&times;</button><img alt=""><p></p>';
    document.body.appendChild(box);
    var img = box.querySelector('img');
    var cap = box.querySelector('p');

    function close() { box.classList.remove('open'); }
    box.addEventListener('click', function (e) { if (e.target !== img) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

    shots.forEach(function (s) {
      if (s.closest('a')) return;            // linked cards (home page) navigate instead
      s.setAttribute('tabindex', '0');
      function open() {
        var i = s.querySelector('img');
        var c = s.querySelector('figcaption [lang="' + currentLang() + '"]') || s.querySelector('figcaption');
        img.src = i.src;
        img.alt = i.alt;
        cap.textContent = c ? c.textContent : '';
        box.classList.add('open');
      }
      s.addEventListener('click', open);
      s.addEventListener('keydown', function (e) { if (e.key === 'Enter') open(); });
    });
  }

  /* ---------- Scan of the month (data in scans.js) ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function bi(o, tag, cls) {                  // bilingual text → two elements
    tag = tag || 'span';
    var c = cls ? ' class="' + cls + '"' : '';
    return '<' + tag + c + ' lang="en">' + esc(o.en) + '</' + tag + '><' + tag + c + ' lang="vi">' + esc(o.vi) + '</' + tag + '>';
  }
  var MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  function fmtDate(iso) {
    var p = iso.split('-');
    return { en: (+p[2]) + ' ' + MONTHS_EN[+p[1] - 1].slice(0, 3) + ' ' + p[0], vi: p[2] + '/' + p[1] + '/' + p[0] };
  }
  function shot(img, extra) {
    return '<figure class="shot contain ' + (extra || '') + '"><img src="Images/' + esc(img.file) + '" alt="' + esc(img.en) +
      '" data-alt-en="' + esc(img.en) + '" data-alt-vi="' + esc(img.vi) + '" loading="lazy">' +
      (img.tag ? '<span class="tag">' + esc(img.tag) + '</span>' : '') +
      '<figcaption>' + bi(img) + '</figcaption></figure>';
  }
  function settingsHtml(s) {
    return '<dl class="scan-settings">' +
      '<div><dt>' + bi({ en: 'Tube voltage', vi: 'Điện áp ống' }) + '</dt><dd>' + s.kv + ' kV</dd></div>' +
      '<div><dt>' + bi({ en: 'Power', vi: 'Công suất' }) + '</dt><dd>' + s.watt + ' W</dd></div>' +
      (s.time ? '<div><dt>' + bi({ en: 'Scan time', vi: 'Thời gian quét' }) + '</dt><dd>' + bi(s.time) + '</dd></div>' : '') +
      (s.projections ? '<div><dt>' + bi({ en: 'Projections', vi: 'Số hình chiếu' }) + '</dt><dd>' + s.projections + '</dd></div>' : '') +
      '</dl>';
  }
  function monthLabel(s) {                    // "October 2026" / "Tháng 10 · 2026"
    var m = s.month || +s.date.split('-')[1];
    var y = s.year || +s.date.split('-')[0];
    return bi({ en: MONTHS_EN[m - 1] + ' ' + y, vi: 'Tháng ' + m + ' · ' + y });
  }
  var PAGE = 'scan-of-the-month.html';

  // interactive explorer: numbered points on the main image, zoom + detail panel
  function explorerHtml(s) {
    var base = s.images[0];
    var tabs = '<button type="button" class="ex-tab" data-ex="overview" aria-selected="true">' +
      bi({ en: 'Overview', vi: 'Tổng quan' }) + '</button>' +
      s.features.map(function (f, n) {
        return '<button type="button" class="ex-tab" data-ex="' + esc(f.id) + '" aria-selected="false">' +
          '<b>' + (n + 1) + '</b>' + bi(f.label) + '</button>';
      }).join('');
    var hotspots = s.features.map(function (f, n) {
      return '<button type="button" class="ex-hotspot" data-ex="' + esc(f.id) + '" style="left:' + f.x + '%;top:' + f.y + '%">' +
        '<b>' + (n + 1) + '</b><span class="ex-hs-label">' + bi(f.label) + '</span></button>';
    }).join('');
    var zooms = s.features.map(function (f) {
      return '<img class="ex-zoom" data-ex="' + esc(f.id) + '" src="Images/' + esc(f.zoom.file) + '" alt="' + esc(f.zoom.en) +
        '" data-alt-en="' + esc(f.zoom.en) + '" data-alt-vi="' + esc(f.zoom.vi) + '" loading="lazy">';
    }).join('');
    var zoomCaps = s.features.map(function (f) {
      return '<p class="ex-caption" data-ex="' + esc(f.id) + '">' + bi(f.zoom) + '</p>';
    }).join('');
    var panels =
      '<div class="ex-panel is-active" data-ex="overview">' +
        '<h3>' + bi({ en: 'Three details worth a closer look', vi: 'Ba chi tiết đáng xem kỹ' }) + '</h3>' +
        '<p>' + bi({ en: 'Choose a numbered point on the image or a tab above.',
                     vi: 'Hãy chọn một điểm đánh số trên hình hoặc một thẻ ở trên.' }) + '</p>' +
        '<ol class="ex-list">' + s.features.map(function (f, n) {
          return '<li><button type="button" data-ex="' + esc(f.id) + '"><b>' + (n + 1) + '</b>' + bi(f.title) + '</button></li>';
        }).join('') + '</ol>' +
      '</div>' +
      s.features.map(function (f, n) {
        var facts = f.facts ? '<div class="ex-facts">' + f.facts.map(function (k) {
          return '<div><strong>' + (typeof k.value === 'object' ? bi(k.value) : esc(k.value)) + '</strong>' + bi(k) + '</div>';
        }).join('') + '</div>' : '';
        return '<div class="ex-panel" data-ex="' + esc(f.id) + '">' +
          '<span class="ex-num">' + (n + 1) + ' / ' + s.features.length + '</span>' +
          '<h3>' + bi(f.title) + '</h3>' + bi(f.text, 'p') + facts +
          '<div class="gallery ex-gallery n' + Math.min(3, f.images.filter(function (i) { return !i.wide; }).length) + '">' +
            f.images.map(function (i) { return shot(i, i.wide ? 'wide' : ''); }).join('') + '</div>' +
          '<div class="ex-nav">' +
            (n > 0 ? '<button type="button" class="ex-step" data-ex="' + esc(s.features[n - 1].id) + '">&larr; ' + bi(s.features[n - 1].label) + '</button>' : '<span></span>') +
            (n < s.features.length - 1 ? '<button type="button" class="ex-step" data-ex="' + esc(s.features[n + 1].id) + '">' + bi(s.features[n + 1].label) + ' &rarr;</button>'
                                       : '<button type="button" class="ex-step" data-ex="overview">' + bi({ en: 'Overview', vi: 'Tổng quan' }) + ' &#8634;</button>') +
          '</div>' +
        '</div>';
      }).join('');
    return '<div class="explorer" id="explorer">' +
      '<div class="ex-tabs" role="tablist">' + tabs + '</div>' +
      '<div class="ex-grid">' +
        '<div class="ex-stage" data-state="overview">' +
          '<div class="ex-frame"><img class="ex-base" src="Images/' + esc(base.file) + '" alt="' + esc(base.en) +
            '" data-alt-en="' + esc(base.en) + '" data-alt-vi="' + esc(base.vi) + '">' + hotspots + '</div>' +
          zooms +
          '<button type="button" class="ex-back" data-ex="overview">&larr; ' + bi({ en: 'Overview', vi: 'Tổng quan' }) + '</button>' +
          zoomCaps +
        '</div>' +
        '<div class="ex-panels">' + panels + '</div>' +
      '</div>' +
    '</div>';
  }

  function initExplorer(s) {
    var ex = document.getElementById('explorer');
    if (!ex) return;
    var stage = ex.querySelector('.ex-stage');
    var frame = ex.querySelector('.ex-frame');
    var timer = null;
    function select(id, scroll) {
      var f = null;
      s.features.forEach(function (x) { if (x.id === id) f = x; });
      clearTimeout(timer);
      ex.querySelectorAll('.ex-tab').forEach(function (t) { t.setAttribute('aria-selected', String(t.getAttribute('data-ex') === id)); });
      ex.querySelectorAll('.ex-panel').forEach(function (p) { p.classList.toggle('is-active', p.getAttribute('data-ex') === id); });
      ex.querySelectorAll('.ex-zoom, .ex-caption').forEach(function (z) { z.classList.remove('is-active'); });
      if (!f) {                                   // back to the overview
        stage.setAttribute('data-state', 'overview');
        frame.style.transformOrigin = '';
        frame.style.transform = '';
      } else {                                    // zoom in on the feature, then show the close-up
        stage.setAttribute('data-state', 'zoom');
        frame.style.transformOrigin = f.x + '% ' + f.y + '%';
        frame.style.transform = 'scale(3)';
        timer = setTimeout(function () {
          ex.querySelectorAll('[data-ex="' + id + '"].ex-zoom, [data-ex="' + id + '"].ex-caption').forEach(function (z) { z.classList.add('is-active'); });
        }, 420);
      }
      if (scroll && window.innerWidth < 900) ex.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    ex.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-ex]');
      if (b) select(b.getAttribute('data-ex'), b.classList.contains('ex-step'));
    });
  }

  function renderScans() {
    var list = window.SCANS;
    if (!list || !list.length) return;
    var opts = window.SCAN_OPTIONS || {};

    // which scan to feature: ?scan=<id> or the newest one
    var wanted = null;
    try { wanted = new URLSearchParams(location.search).get('scan'); } catch (e) { /* old browser */ }
    var feat = list[0];
    list.forEach(function (s) { if (s.id === wanted) feat = s; });

    // home page teaser
    var teaser = document.getElementById('sotw-teaser');
    if (teaser) {
      var s0 = list[0];
      var thumbs = s0.features ? s0.features.slice(0, 2).map(function (f) { return f.images[0]; }) : s0.images.slice(1, 3);
      teaser.innerHTML =
        '<div class="sotw-media">' + shot(s0.images[0], 'big') +
          '<div class="sotw-thumbs">' + thumbs.map(function (i) { return shot(i); }).join('') + '</div></div>' +
        '<div class="sotw-text">' +
          '<span class="sotw-week">' + monthLabel(s0) + '</span>' +
          '<h3>' + bi(s0.title) + '</h3>' + bi(s0.summary, 'p') + settingsHtml(s0.settings) +
          '<div class="sotw-actions"><a class="btn btn-primary" href="' + PAGE + '">' +
            bi({ en: 'Read the full story', vi: 'Xem chi tiết' }) + '</a>' +
          '<a class="btn btn-outline" href="contact.html?topic=sample#form">' +
            bi({ en: 'Suggest a sample', vi: 'Đề xuất mẫu vật' }) + '</a></div>' +
        '</div>';
    }

    // scan-of-the-month page: featured scan
    var box = document.getElementById('sotw-feature');
    if (box) {
      var d = fmtDate(feat.date);
      var isCurrent = feat === list[0];
      var gallery = feat.features
        ? '<div class="gallery sotw-gallery n2 portrait">' + feat.images.slice(0, 2).map(function (i) { return shot(i); }).join('') + '</div>'
        : '<div class="gallery sotw-gallery n' + Math.min(3, Math.max(1, feat.images.length - 1)) + '">' + feat.images.map(function (i, n) { return shot(i, n === 0 ? 'big' : ''); }).join('') + '</div>';
      box.innerHTML =
        '<div class="sotw-head">' +
          '<span class="sotw-week">' + (isCurrent ? bi({ en: 'This month', vi: 'Tháng này' }) + ' · ' : '') + monthLabel(feat) + '</span>' +
          '<h2>' + bi(feat.title) + '</h2>' +
          '<p class="sotw-date">' + bi({ en: 'Scanned on ' + d.en + ' with the Sym-Tech prototype', vi: 'Quét ngày ' + d.vi + ' bằng nguyên mẫu Sym-Tech' }) + '</p>' +
        '</div>' +
        '<div class="sotw-body">' +
          '<div>' + bi(feat.story, 'p') + '<p class="sotw-use">' + bi(feat.use) + '</p>' + settingsHtml(feat.settings) + '</div>' +
          gallery +
        '</div>' +
        (feat.features ? '<div class="ex-wrap"><span class="eyebrow">' + bi({ en: 'Zoom in', vi: 'Phóng to' }) + '</span>' +
          '<h2 class="ex-title">' + bi({ en: 'Explore the details', vi: 'Khám phá các chi tiết' }) + '</h2>' + explorerHtml(feat) + '</div>' : '');
      if (feat.features) initExplorer(feat);
    }

    // scan-of-the-month page: archive (can be switched off in scans.js)
    var arch = document.getElementById('sotw-archive');
    if (arch) {
      var others = list.filter(function (s) { return s !== feat; });
      var section = document.getElementById('archive-section');
      if (opts.showArchive === false || !others.length) {
        if (section) section.hidden = true;
      } else {
        arch.innerHTML = others.map(function (s) {
          var img = s.images[0];
          return '<a class="archive-card" href="' + PAGE + '?scan=' + encodeURIComponent(s.id) + '#feature">' +
            '<img src="Images/' + esc(img.file) + '" alt="' + esc(img.en) + '" data-alt-en="' + esc(img.en) + '" data-alt-vi="' + esc(img.vi) + '" loading="lazy">' +
            '<span class="sotw-week">' + monthLabel(s) + '</span>' +
            '<strong>' + bi(s.title) + '</strong>' + bi(s.summary, 'p') + '</a>';
        }).join('');
      }
    }
  }

  /* ---------- Contact form (sent by FormSubmit to symtechvn@gmail.com) ---------- */
  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;
    var status = document.getElementById('form-status');
    var params;
    try { params = new URLSearchParams(location.search); } catch (e) { params = null; }

    // preselect topic from a link such as contact.html?topic=sample
    if (params && params.get('topic')) {
      var sel = form.querySelector('[name="topic"]');
      var opt = sel && sel.querySelector('option[data-key="' + params.get('topic') + '"]');
      if (opt) sel.value = opt.value;
    }
    // returned here after a submission without JavaScript
    if (params && params.get('sent') === '1') show('ok');

    function show(kind) {
      status.className = 'form-status ' + kind;
      status.querySelectorAll('[data-msg]').forEach(function (m) {
        m.hidden = m.getAttribute('data-msg') !== kind;
      });
      status.hidden = false;
    }

    form.addEventListener('submit', function (e) {
      if (!window.fetch || !window.FormData) return;          // let the browser post normally
      e.preventDefault();
      if (!form.reportValidity()) return;
      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });
      data.language = currentLang() === 'vi' ? 'Tiếng Việt' : 'English';
      data._subject = 'Website: ' + (data.topic || 'message') + ' – ' + (data.name || '');
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      show('busy');
      fetch(form.getAttribute('data-ajax'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (String(res.success) === 'true') { show('ok'); form.reset(); }
          else { show('error'); }
        })
        .catch(function () { show('error'); })
        .then(function () { btn.disabled = false; });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Start ---------- */
  renderScans();
  initContactForm();
  applyLang(currentLang());
  Promise.all([loadPartial('header', 'header.html'), loadPartial('footer', 'footer.html')])
    .then(function () {
      initHeader();
      applyLang(currentLang());
    });
  initLightbox();
  initReveal();
})();
