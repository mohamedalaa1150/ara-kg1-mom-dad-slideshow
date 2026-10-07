/* =====================================================================
   Selah KG Slideshow Player — reusable engine (v2)
   - 16:9 stage (1920x1080) scaled to the window, white side bars
   - Layout zones: header (logo + lesson chip) · content SAFE AREA ·
     control bar. Content never enters the control-bar zone.
   - Control bar (rounded container): Next (left, points left) ·
     Play/Pause/Replay (centre) · Previous (right, points right)
   - Every text is centred on its *ink* (glyphs + tashkeel), measured
     with the real font, so vowel marks never leave their shape
   - Scenes: DS-built SVG + optional character + a GSAP timeline whose
     cues are tied to the spoken words of the scene's voice-over
   - Generic end screen after the last scene (message set in lesson.js)
   Content lives in lesson.js; timings in lesson-data.js.
   ===================================================================== */
(function () {
  'use strict';
  var DS = window.SelahKG, C = DS.colors, h = React.createElement, D = window.LESSON_DATA;

  var CFG = {
    lead: 0.6,          // s between scene start and voice start
    endHold: 0.8,       // s after the voice before a scene counts as finished
    endScreenDelay: 2,  // s after the last voice line before the end screen
    fps: 25,            // character sequence frame rate
    safe: { top: 150, bottom: 850, left: 60, right: 1860 },   // content safe area
    bar: { y: 896, h: 150, w: 520 }                           // control bar zone (stage px)
  };

  /* ---------------- helpers ---------------- */
  function el(type, attrs) { return h(type, attrs || {}); }
  function strip(s) { return String(s).replace(/[ً-ْٰـ]/g, '').replace(/[،,.!؟?:؛"«»\[\]]/g, '').trim(); }
  function imgSrc(name) { return 'assets/img/' + name + '.webp'; }
  var TONES = {
    blue: { fill: C['sky-500'], lip: C['sky-700'], hi: C['sky-100'] },
    green: { fill: C['green-500'], lip: C['green-700'], hi: C['green-100'] },
    gold: { fill: C['gold-500'], lip: C['gold-700'], hi: C['gold-100'] }
  };
  var uid = 0;

  /* ---------------- ink-measured Arabic text ---------------- */
  var mctx = document.createElement('canvas').getContext('2d');
  function ink(text, size, weight) {
    mctx.font = (weight || 700) + ' ' + size + 'px Vazirmatn';
    mctx.direction = 'rtl'; mctx.textAlign = 'center'; mctx.textBaseline = 'alphabetic';
    var m = mctx.measureText(text);
    return { asc: m.actualBoundingBoxAscent, desc: m.actualBoundingBoxDescent, l: m.actualBoundingBoxLeft, r: m.actualBoundingBoxRight,
      w: m.actualBoundingBoxLeft + m.actualBoundingBoxRight, h: m.actualBoundingBoxAscent + m.actualBoundingBoxDescent };
  }
  /** SVG text whose ink box (letters + tashkeel) is centred exactly on (cx, cy). */
  function inkText(text, cx, cy, size, weight, color) {
    var k = ink(text, size, weight);
    var t = el('text', { x: (cx + (k.l - k.r) / 2).toFixed(1), y: (cy + (k.asc - k.desc) / 2).toFixed(1), fill: color, 'font-family': 'Vazirmatn', 'font-weight': weight || 700, 'font-size': size, 'text-anchor': 'middle', direction: 'rtl' });
    t.textContent = text;
    t._ink = k;
    return t;
  }
  /** Sticker sized to its text's ink box. o: text,x,y,size,weight,color,padX,padY,minW,minH + Sticker props. */
  function inkPill(o) {
    var k = ink(o.text, o.size, o.weight);
    var w = Math.max(o.minW || 0, k.w + 2 * (o.padX || 40)), hh = Math.max(o.minH || 0, k.h + 2 * (o.padY || 24));
    var x = o.anchorRight != null ? o.anchorRight - w / 2 : o.x;
    var y = o.anchorTop != null ? o.anchorTop + hh / 2 : o.y;
    var g = el('g', { 'data-name': o.name || 'pill' });
    var sp = Object.assign({ x: x, y: y, w: w, h: hh, r: o.r == null ? hh * 0.45 : o.r, wob: 0.6, seed: o.seed || 3 }, o.sticker || {});
    g.appendChild(DS.Sticker(sp));
    g.appendChild(inkText(o.text, x, y, o.size, o.weight, o.color));
    g._box = { x: x, y: y, w: w, h: hh };
    return g;
  }

  /* ---------------- audio ---------------- */
  var VOL = { click: 0.55, pop: 0.38, sparkle: 0.32, whoosh: 0.22 };
  var SFX = {};
  function initAudio(scenes) {
    if (window.Howler) Howler.html5PoolSize = 40;
    Object.keys(VOL).forEach(function (n) { SFX[n] = new Howl({ src: ['assets/audio/sfx/' + n + '.mp3'], html5: true, volume: VOL[n], pool: 6 }); });
    scenes.forEach(function (s) { if (s.vo) s._howl = new Howl({ src: ['assets/audio/vo/' + s.vo + '.mp3'], html5: true, preload: true }); });
  }
  function sfx(n) { try { SFX[n] && SFX[n].play(); } catch (e) { /* optional */ } }

  /* ---------------- character sprite ---------------- */
  function Sprite(meta, images) {
    this.meta = meta; this.images = images;
    this.canvas = document.createElement('canvas'); this.ctx = this.canvas.getContext('2d');
    this.state = null; this.frame = 0; this.acc = 0; this.base = 'idle'; this.talkFn = null;
    this.canvas.width = meta.idle.fw; this.canvas.height = meta.idle.fh;
    this.set('idle');
  }
  Sprite.prototype.set = function (s) { if (this.state === s || !this.meta[s]) return; this.state = s; this.frame = 0; this.acc = 0; this.draw(); };
  Sprite.prototype.draw = function () {
    var m = this.meta[this.state], img = this.images[this.state]; if (!img) return;
    var f = this.frame % m.frames;
    this.ctx.clearRect(0, 0, m.fw, m.fh);
    this.ctx.drawImage(img, (f % m.cols) * m.fw, Math.floor(f / m.cols) * m.fh, m.fw, m.fh, 0, 0, m.fw, m.fh);
  };
  Sprite.prototype.tick = function (dt, running) {
    this.set((this.talkFn && this.talkFn()) ? 'talk' : this.base);
    if (!running) return;
    this.acc += dt; var step = 1 / CFG.fps;
    if (this.acc >= step) { this.frame += Math.floor(this.acc / step); this.acc %= step; this.draw(); }
  };

  /* ---------------- scene context (authoring API) ---------------- */
  function Ctx(player, scene, root) {
    this.p = player; this.scene = scene; this.el = root; this.safe = CFG.safe;
    this.svg = h('svg', { viewBox: '0 0 1920 1080', width: 1920, height: 1080, class: 'full' });
    root.appendChild(this.svg);
    this.defs = h('defs'); this.svg.appendChild(this.defs);
    this.tl = gsap.timeline({ paused: true });
    this.sprites = [];
    this.timing = scene.vo ? D.timings[scene.vo] : null;
  }
  Ctx.prototype.w = function (word, n) {
    n = n || 1; if (!this.timing) return CFG.lead;
    var q = strip(word), hit = 0, ws = this.timing.words;
    for (var i = 0; i < ws.length; i++) {
      if (ws[i][0].charAt(0) === '[') continue;
      if (strip(ws[i][0]) === q && ++hit === n) return CFG.lead + ws[i][1];
    }
    console.warn('[cue] word not found:', word, 'in', this.scene.vo);
    return CFG.lead;
  };
  Ctx.prototype.add = function (node, parent) { (parent || this.svg).appendChild(node); return node; };
  Ctx.prototype.g = function (attrs, parent) { return this.add(el('g', attrs), parent); };
  Ctx.prototype.inkText = inkText;
  Ctx.prototype.inkPill = function (o) { return this.add(inkPill(o)); };

  Ctx.prototype.frame = function (o) {
    var t = TONES[o.tone || 'blue'], x = o.x, y = o.y, w = o.w, hh = o.h, seed = o.seed || 31;
    var b = Math.round(Math.min(w, hh) * 0.05);
    var outer = this.g({ 'data-name': 'frame-' + (o.href || 'empty') });
    var rot = this.g({ transform: 'rotate(' + (o.rotate == null ? -1.2 : o.rotate) + ' ' + x + ' ' + y + ')' }, outer);
    rot.appendChild(DS.Sticker({ x: x, y: y, w: w, h: hh, r: 26, wob: 0.6, seed: seed, fill: t.fill, shadow: C['shadow-cool'], shadowDx: 10, shadowDy: 14, lip: 10, lipDx: 6, lipColor: t.lip, ring: t.hi, ringInset: 5, ringWidth: 5 }));
    var ix = x - w / 2 + b, iy = y - hh / 2 + b, iw = w - 2 * b, ih = hh - 2 * b, id = 'clip' + (++uid);
    this.defs.appendChild(h('clipPath', { id: id }, h('path', { d: DS.blobPath(ix, iy, iw, ih, 12, seed + 1, 0.4) })));
    var clip = this.g({ 'clip-path': 'url(#' + id + ')' }, rot);
    clip.appendChild(el('rect', { x: ix, y: iy, width: iw, height: ih, fill: '#e9f8fd' }));
    var art = this.g({ 'data-name': 'art' }, clip), img = null;
    if (o.href) img = this.add(el('image', { href: imgSrc(o.href), x: ix, y: iy, width: iw, height: ih, preserveAspectRatio: 'xMidYMid slice' }), art);
    if (o.empty) gsap.set(art, { opacity: 0 });
    return { outer: outer, art: art, img: img, clip: clip, box: { x: ix, y: iy, w: iw, h: ih } };
  };
  /** Word under a picture: white chip, sky ring, stitched edge; text centred on its ink. */
  Ctx.prototype.label = function (text, x, y, size) {
    return this.inkPill({ name: 'label', text: text, x: x, y: y, size: size || 66, weight: 700, color: C['sky-dash'], padX: 58, padY: 30, minW: 230, seed: 71,
      sticker: { fill: C.white, stroke: C['sky-200'], strokeWidth: 12, dash: C['sky-dash'], dashInset: 9, dashWidth: 5, dashArray: '20 9', shadow: C['shadow-soft'], shadowDy: 10 } });
  };
  Ctx.prototype.bubble = function (name, x, y, s) {
    s = s || 180;
    var g = this.g({ 'data-name': 'bubble-' + name });
    g.appendChild(DS.Sticker({ x: x, y: y, w: s, h: s, r: s / 2, wob: 0.5, seed: 61 + Math.round(x), fill: C.white, stroke: C['sky-200'], strokeWidth: 10, dash: C['sky-dash'], dashInset: 7, dashWidth: 4, dashArray: '16 9', shadow: C['shadow-mid'], shadowDy: 9 }));
    var m = D.img[name], k = (s * 0.66) / Math.max(m[0], m[1]), iw = m[0] * k, ih = m[1] * k;
    this.add(el('image', { href: imgSrc(name), x: x - iw / 2, y: y - ih / 2, width: iw, height: ih }), g);
    return g;
  };
  Ctx.prototype.picture = function (name, cx, bottom, height) {
    var m = D.img[name], w = m[0] * height / m[1], g = this.g({ 'data-name': 'pic-' + name });
    this.add(el('image', { href: imgSrc(name), x: cx - w / 2, y: bottom - height, width: w, height: height }), g);
    return g;
  };
  Ctx.prototype.heart = function (x, y, s) { var g = heartG(x, y, s || 110); return this.add(g); };
  Ctx.prototype.star = function (x, y, s, color) { return this.add(starG(x, y, s, color)); };
  Ctx.prototype.sparkle = function (x, y, s, color) {
    var k = s / 2, d = 'M' + x + ' ' + (y - k) + ' Q' + x + ' ' + y + ' ' + (x + k) + ' ' + y + ' Q' + x + ' ' + y + ' ' + x + ' ' + (y + k) + ' Q' + x + ' ' + y + ' ' + (x - k) + ' ' + y + ' Q' + x + ' ' + y + ' ' + x + ' ' + (y - k) + ' Z';
    var g = this.g({ 'data-name': 'sparkle' }); g.appendChild(el('path', { d: d, fill: color })); return g;
  };
  Ctx.prototype.character = function (o) {
    var meta = D.char, sp = new Sprite(meta, this.p.charImages);
    var k = o.scale || 1.2, m = meta.idle, w = m.fw * k, hh = m.fh * k;
    var wrap = document.createElement('div'); wrap.className = 'char';
    wrap.style.cssText = 'left:' + (o.x - w / 2) + 'px;top:' + (o.feet - hh) + 'px;width:' + w + 'px;height:' + hh + 'px';
    sp.canvas.style.cssText = 'width:100%;height:100%';
    wrap.appendChild(sp.canvas); this.el.appendChild(wrap);
    var self = this; sp.talkFn = function () { return self.p.isSpeakingNow(); };
    this.sprites.push(sp);
    return { el: wrap, sprite: sp };
  };

  /* ---- motion vocabulary (DS tokens: pop 500ms · move 700ms · stagger 200ms) ---- */
  Ctx.prototype.hide = function (els) { gsap.set(els, { opacity: 0 }); };
  Ctx.prototype.fadeIn = function (els, t, o) {
    o = o || {}; this.hide(els);
    this.tl.fromTo(els, { opacity: 0, y: o.y == null ? 24 : o.y, scale: 0.96, transformOrigin: '50% 50%' },
      { opacity: 1, y: 0, scale: 1, duration: o.dur || 0.7, ease: 'power2.out', stagger: o.stagger || 0 }, t);
    if (o.sfx) this.sfxAt(o.sfx, t, o.stagger, Array.isArray(els) ? els.length : 1);
  };
  Ctx.prototype.pop = function (els, t, o) {
    o = o || {}; this.hide(els);
    var st = o.stagger == null ? 0.2 : o.stagger;
    this.tl.fromTo(els, { opacity: 0, scale: 0, transformOrigin: '50% 50%' },
      { keyframes: [{ opacity: 1, scale: 1.08, duration: 0.3, ease: 'power2.out' }, { scale: 1, duration: 0.2, ease: 'sine.inOut' }], stagger: st }, t);
    if (o.sfx !== false) this.sfxAt(o.sfx || 'pop', t, st, Array.isArray(els) ? els.length : 1);
  };
  Ctx.prototype.fill = function (frame, t, o) {
    o = o || {};
    this.tl.fromTo(frame.art, { opacity: 0, scale: o.pop ? 0.82 : 1.06, transformOrigin: '50% 50%' },
      { opacity: 1, scale: 1, duration: o.pop ? 0.5 : 0.8, ease: o.pop ? 'back.out(1.6)' : 'power2.out' }, t);
    this.sfxAt(o.sfx || 'pop', t);
  };
  Ctx.prototype.gentleScale = function (els, t, amt) { this.tl.to(els, { scale: amt || 1.05, transformOrigin: '50% 50%', duration: 0.6, ease: 'sine.inOut', yoyo: true, repeat: 1 }, t); };
  Ctx.prototype.pulse = function (els, t, times) { this.tl.to(els, { scale: 1.16, transformOrigin: '50% 50%', duration: 0.32, ease: 'sine.inOut', yoyo: true, repeat: (times || 2) * 2 - 1 }, t); };
  Ctx.prototype.hop = function (target, t) { this.tl.to(target, { y: -26, duration: 0.22, ease: 'power2.out', yoyo: true, repeat: 3 }, t); };
  Ctx.prototype.sfxAt = function (name, t, stagger, count) { for (var i = 0; i < (count || 1); i++) this.tl.call(sfx, [name], t + (stagger || 0) * i); };

  /* ---------------- shared shapes ---------------- */
  function heartG(x, y, s) {
    var k = s / 100, d = 'M50 88 C22 68 6 52 6 33 C6 18 18 8 31 8 C40 8 46 13 50 20 C54 13 60 8 69 8 C82 8 94 18 94 33 C94 52 78 68 50 88 Z';
    var g = el('g', { 'data-name': 'heart' }), inner = el('g', { transform: 'translate(' + (x - 50 * k) + ' ' + (y - 48 * k) + ') scale(' + k + ')' });
    inner.appendChild(el('path', { d: d, fill: C['pink-700'], transform: 'translate(0 6)' }));
    inner.appendChild(el('path', { d: d, fill: C['pink-500'], stroke: C['pink-700'], 'stroke-width': 3, 'stroke-linejoin': 'round' }));
    inner.appendChild(el('path', { d: 'M24 26 C27 20 33 18 38 19', fill: 'none', stroke: '#fff', 'stroke-width': 6, 'stroke-linecap': 'round', opacity: 0.85 }));
    g.appendChild(inner); return g;
  }
  function starG(x, y, s, color) {
    var pts = [], R = s / 2, r = R * 0.48;
    for (var i = 0; i < 10; i++) { var a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r : R; pts.push((x + rr * Math.cos(a)).toFixed(1) + ',' + (y + rr * Math.sin(a)).toFixed(1)); }
    var g = el('g', { 'data-name': 'star' });
    g.appendChild(el('polygon', { points: pts.join(' '), fill: color, stroke: '#fff', 'stroke-width': Math.max(3, s * 0.06), 'stroke-linejoin': 'round' }));
    return g;
  }

  /* ---------------- buttons (vector, DS button colours) ---------------- */
  function replayPath(cx, cy, r) {
    var rad = Math.PI / 180, a0 = -62 * rad, a1 = 205 * rad;
    var p0 = [cx + r * Math.cos(a0), cy + r * Math.sin(a0)], p1 = [cx + r * Math.cos(a1), cy + r * Math.sin(a1)];
    var t = [Math.sin(a0), -Math.cos(a0)], n = [-t[1], t[0]], L = r * 0.55;
    var tip = [p0[0] + t[0] * L * 0.55, p0[1] + t[1] * L * 0.55];
    var w1 = [p0[0] - t[0] * L * 0.25 + n[0] * L * 0.7, p0[1] - t[1] * L * 0.25 + n[1] * L * 0.7];
    var w2 = [p0[0] - t[0] * L * 0.25 - n[0] * L * 0.7, p0[1] - t[1] * L * 0.25 - n[1] * L * 0.7];
    function f(p) { return p[0].toFixed(1) + ' ' + p[1].toFixed(1); }
    return { arc: 'M' + f(p1) + ' A' + r + ' ' + r + ' 0 1 0 ' + f(p0), head: 'M' + f(w1) + ' L' + f(tip) + ' L' + f(w2) };
  }
  var ICON = {
    next: function (g) { g.appendChild(el('path', { d: 'M84 58 H38 M57 38 L37 58 L57 78', fill: 'none', stroke: '#fff', 'stroke-width': 13, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })); },
    prev: function (g) { g.appendChild(el('path', { d: 'M36 58 H82 M63 38 L83 58 L63 78', fill: 'none', stroke: '#fff', 'stroke-width': 13, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })); },
    play: function (g) { g.appendChild(el('path', { d: 'M50 38 L83 58 L50 78 Z', fill: '#fff', stroke: '#fff', 'stroke-width': 12, 'stroke-linejoin': 'round' })); },
    pause: function (g) { g.appendChild(el('path', { d: 'M48 40 V76 M72 40 V76', fill: 'none', stroke: '#fff', 'stroke-width': 15, 'stroke-linecap': 'round' })); },
    replay: function (g) {
      var p = replayPath(60, 58, 23);
      g.appendChild(el('path', { d: p.arc, fill: 'none', stroke: '#fff', 'stroke-width': 11, 'stroke-linecap': 'round' }));
      g.appendChild(el('path', { d: p.head, fill: 'none', stroke: '#fff', 'stroke-width': 11, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }));
    }
  };
  /** Pressable sticker button: darker lip under a lighter body; the body lifts on hover, sinks on press. */
  function buttonSVG(icons, seed) {
    var svg = h('svg', { viewBox: '0 0 120 124', width: '100%', height: '100%', 'aria-hidden': 'true' });
    var d = DS.blobPath(8, 6, 104, 104, 40, seed, 0.5);
    svg.appendChild(el('path', { d: d, fill: C['shadow-deep'], transform: 'translate(0 12)', class: 'shadow' }));
    svg.appendChild(el('path', { d: d, fill: C['button-700'], transform: 'translate(0 8)' }));
    var body = el('g', { class: 'body' });
    body.appendChild(el('path', { d: d, fill: C['button-300'], stroke: C['button-700'], 'stroke-width': 4, 'stroke-linejoin': 'round' }));
    body.appendChild(el('path', { d: DS.blobPath(16, 13, 88, 88, 33, seed, 0.5), fill: 'none', stroke: '#ffffff', 'stroke-opacity': 0.35, 'stroke-width': 4 }));
    icons.forEach(function (k) { var ig = el('g', { class: 'ico g-' + k }); ICON[k](ig); body.appendChild(ig); });
    svg.appendChild(body);
    return svg;
  }
  function barSVG(w, hh) {
    var svg = h('svg', { viewBox: '0 0 ' + w + ' ' + hh, width: w, height: hh, class: 'barbg', 'aria-hidden': 'true' });
    svg.appendChild(DS.Sticker({ x: w / 2, y: hh / 2 - 4, w: w - 16, h: hh - 22, r: 46, wob: 0.5, seed: 141, fill: C.white, stroke: C['sky-200'], strokeWidth: 8, dash: C['sky-dash'], dashInset: 11, dashWidth: 4, dashArray: '18 11', shadow: C['shadow-soft'], shadowDy: 10 }));
    return svg;
  }

  /* ---------------- player ---------------- */
  var Player = {
    i: -1, state: 'idle', ctx: null, busy: false,
    init: function (lesson) {
      this.lesson = lesson; this.scenes = lesson.scenes;
      this.stage = document.getElementById('stage'); this.sceneHost = document.getElementById('scenes');
      this.fit(); window.addEventListener('resize', this.fit.bind(this));
      initAudio(this.scenes);
      var self = this;
      this.preload().then(function () { self.buildChrome(); self.showStart(); });
      gsap.ticker.add(this.tick.bind(this));
    },
    fit: function () {
      var s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
      this.stage.style.transform = 'translate(-50%,-50%) scale(' + s + ')';
    },
    preload: function () {
      var self = this, urls = [], done = 0, bar = document.getElementById('loadbar');
      Object.keys(D.img).forEach(function (k) { urls.push(imgSrc(k)); });
      Object.keys(D.char).forEach(function (k) { urls.push(D.char[k].src); });
      this.charImages = {};
      function one(src) {
        return new Promise(function (res) {
          var im = new Image();
          im.onload = im.onerror = function () { done++; bar.style.width = (100 * done / urls.length) + '%'; res(im); };
          im.src = src;
        });
      }
      var fonts = document.fonts ? Promise.all([document.fonts.load('700 60px Vazirmatn'), document.fonts.load('600 60px Vazirmatn')]) : Promise.resolve();
      return Promise.all([fonts].concat(urls.map(function (u) {
        return one(u).then(function (im) { Object.keys(D.char).forEach(function (k) { if (D.char[k].src === u) self.charImages[k] = im; }); });
      }))).then(function () { document.getElementById('loader').style.display = 'none'; });
    },
    buildChrome: function () {
      var bg = document.getElementById('bg');
      bg.appendChild(DS.Background({}));
      bg.appendChild(DS.LogoBadge({}));
      // lesson chip — fixed (no motion), top-right, text centred on its ink
      this.chipLayer = document.getElementById('chip');
      this.chipLayer.appendChild(inkPill({ name: 'lesson-chip', text: this.lesson.chip, anchorRight: 1883, anchorTop: 28, size: 50, weight: 700, color: C.white, padX: 46, padY: 24, minH: 92, seed: 3,
        sticker: { fill: C['sky-500'], shadow: C['shadow-soft'], shadowDy: 12, ring: C['sky-300'], ringInset: 7, ringWidth: 4, dash: C['sky-dash'], dashInset: -5, dashWidth: 6, dashArray: '34 22' } }));

      var self = this, bar = document.getElementById('controls');
      bar.style.cssText = 'top:' + CFG.bar.y + 'px;width:' + CFG.bar.w + 'px;height:' + CFG.bar.h + 'px';
      bar.insertBefore(barSVG(CFG.bar.w, CFG.bar.h), bar.firstChild);
      this.btn = { next: document.getElementById('btnNext'), main: document.getElementById('btnMain'), prev: document.getElementById('btnPrev') };
      this.btn.next.appendChild(buttonSVG(['next'], 132));
      this.btn.prev.appendChild(buttonSVG(['prev'], 133));
      this.btn.main.appendChild(buttonSVG(['play', 'pause', 'replay'], 131));
      this.btn.next.addEventListener('click', function () { self.nav(1); });
      this.btn.prev.addEventListener('click', function () { self.nav(-1); });
      this.btn.main.addEventListener('click', function () { sfx('click'); self.toggle(); });
      document.addEventListener('keydown', function (e) {
        if (self.state === 'start' || self.endOpen) return;
        if (e.key === 'ArrowLeft') self.nav(1);
        else if (e.key === 'ArrowRight') self.nav(-1);
        else if (e.key === ' ' && e.target === document.body) { e.preventDefault(); self.toggle(); }
      });
      // start button (sits on the title card)
      this.startBtn = document.getElementById('startBtn');
      this.startBtn.appendChild(buttonSVG(['play'], 130));
      this.startBtn.addEventListener('click', function () { self.begin(); });
      // end screen
      this.buildEnd();
    },

    /* --- start screen = title scene waiting for the first tap --- */
    showStart: function () {
      this.go(0, { wait: true, silent: true });
      var a = this.scenes[0].startAnchor || { x: 960, y: 645 };
      var s = 172, b = this.startBtn;
      b.style.cssText = 'left:' + (a.x - s / 2) + 'px;top:' + (a.y - s / 2) + 'px;width:' + s + 'px;height:' + (s * 124 / 120) + 'px';
      b.hidden = false;
      document.getElementById('controls').classList.add('off');
      if (this.startLoop) this.startLoop.kill();
      gsap.killTweensOf(b);
      gsap.set(b, { y: 0, scale: 1, rotation: 0 });
      // calm idle loop: soft bob + breathing, never reaching the title text
      this.startLoop = gsap.timeline({ paused: true, repeat: -1 })
        .to(b, { y: -8, scale: 1.05, duration: 1.2, ease: 'sine.inOut' })
        .to(b, { y: 0, scale: 1, duration: 1.2, ease: 'sine.inOut' });
      var self = this;
      gsap.fromTo(b, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)', delay: 0.3, onComplete: function () { self.startLoop.play(0); } });
      this.state = 'start'; this.ui();
    },
    begin: function () {
      if (this.state !== 'start') return;
      var self = this; sfx('click');
      if (this.startLoop) this.startLoop.kill();
      gsap.to(this.startBtn, { scale: 0, opacity: 0, duration: 0.3, ease: 'back.in(1.6)', onComplete: function () { self.startBtn.hidden = true; } });
      document.getElementById('controls').classList.remove('off');
      this.state = 'playing'; this.ctx.tl.play(0); this.ui();
    },
    /** Back to the very beginning, exactly like reloading the element. */
    reset: function () {
      var ctx = this.ctx;
      if (ctx) { ctx.tl.kill(); if (ctx.scene._howl) ctx.scene._howl.stop(); }
      this.scenes.forEach(function (sc) { if (sc._howl) sc._howl.stop(); });
      this.busy = false;
      this.showStart();
    },

    nav: function (d) {
      var j = this.i + d;
      if (this.busy || this.state === 'start' || j < 0 || j >= this.scenes.length) return;
      sfx('click'); this.go(j);
    },
    go: function (j, opt) {
      opt = opt || {};
      var self = this, old = this.ctx;
      this.busy = true; setTimeout(function () { self.busy = false; }, 450);
      if (old) {
        old.tl.kill();
        if (old.scene._howl) old.scene._howl.stop();
        gsap.to(old.el, { opacity: 0, duration: 0.3, onComplete: function () { old.el.remove(); } });
        if (!opt.silent) sfx('whoosh');
      }
      this.i = j;
      var scene = this.scenes[j], node = document.createElement('div');
      node.className = 'scene'; node.style.opacity = 0; this.sceneHost.appendChild(node);
      var ctx = new Ctx(this, scene, node);
      this.ctx = ctx; this.voStarted = false; this.voDone = false;
      gsap.set(this.chipLayer, { opacity: scene.chip === false ? 0 : 1 });
      scene.build(ctx);
      var howl = scene._howl, dur = scene.vo ? D.timings[scene.vo].dur : 0;
      if (howl) {
        howl.stop(); howl.off('end');
        howl.on('end', function () { if (self.ctx === ctx) self.voDone = true; });
        ctx.tl.call(function () { self.startVO(ctx); }, null, CFG.lead);
      }
      var endAt = Math.max(ctx.tl.duration(), CFG.lead + dur + CFG.endHold);
      ctx.tl.call(function () { self.finish(ctx); }, null, endAt);
      if (j === this.scenes.length - 1) ctx.tl.call(function () { if (self.ctx === ctx) self.showEnd(); }, null, Math.max(endAt, CFG.lead + dur + CFG.endScreenDelay));
      gsap.to(node, { opacity: 1, duration: 0.45, delay: old ? 0.15 : 0 });
      if (opt.wait) { this.state = 'start'; }
      else { this.state = 'playing'; ctx.tl.play(0); }
      this.ui();
    },
    startVO: function (ctx) { if (ctx !== this.ctx) return; this.voStarted = true; var hw = ctx.scene._howl; hw.seek(0); hw.play(); },
    finish: function (ctx) { if (ctx !== this.ctx) return; this.state = 'ended'; this.ui(); },
    toggle: function () {
      if (!this.ctx || this.state === 'start' || this.endOpen) return;
      var hw = this.ctx.scene._howl;
      if (this.state === 'playing') { this.state = 'paused'; this.ctx.tl.pause(); if (hw && hw.playing()) hw.pause(); }
      else if (this.state === 'paused') { this.state = 'playing'; this.ctx.tl.resume(); if (hw && this.voStarted && !this.voDone) hw.play(); }
      else if (this.state === 'ended') { this.go(this.i); return; }
      this.ui();
    },
    isSpeakingNow: function () {
      var ctx = this.ctx; if (!ctx || this.state !== 'playing' || !this.voStarted || this.voDone) return false;
      var hw = ctx.scene._howl; if (!hw || !hw.playing()) return false;
      var t = hw.seek(), segs = D.timings[ctx.scene.vo].talk;
      for (var i = 0; i < segs.length; i++) if (t >= segs[i][0] && t <= segs[i][1]) return true;
      return false;
    },
    tick: function (time, deltaMs) {
      var ctx = this.ctx; if (!ctx) return;
      var dt = Math.min(0.1, (deltaMs || 16) / 1000), hw = ctx.scene._howl;
      if (this.state === 'playing' && hw && this.voStarted && !this.voDone && hw.playing()) {
        var target = CFG.lead + hw.seek();
        if (Math.abs(ctx.tl.time() - target) > 0.15) ctx.tl.time(target, true);
      }
      var run = this.state !== 'paused';
      for (var i = 0; i < ctx.sprites.length; i++) ctx.sprites[i].tick(dt, run);
    },
    ui: function () {
      if (!this.btn) return;
      var b = this.btn, last = this.scenes.length - 1;
      b.prev.disabled = this.i <= 0;
      b.next.disabled = this.i >= last;
      var mode = this.state === 'playing' ? 'pause' : (this.state === 'ended' ? 'replay' : 'play');
      b.main.setAttribute('data-mode', mode);
      b.main.setAttribute('aria-label', { pause: 'إيقاف مؤقت', play: 'تشغيل', replay: 'إعادة' }[mode]);
      b.next.classList.toggle('nudge', this.state === 'ended' && this.i < last);
    },

    /* --- generic end screen --- */
    buildEnd: function () {
      var self = this, layer = document.getElementById('end');
      var msg = (this.lesson.endMessage || 'أَحْسَنْتَ!\nلَقَدْ أَتْمَمْتَ مُهِمَّتَكَ بِنَجَاحٍ').split('\n');
      var svg = h('svg', { viewBox: '0 0 1920 1080', width: 1920, height: 1080, class: 'full' });
      var shade = el('rect', { x: 0, y: 0, width: 1920, height: 1080, fill: '#000000', opacity: 0.72 });
      svg.appendChild(shade);
      // text lines: first line is the praise word (larger, pink), the rest ink-feedback
      var sizes = msg.map(function (l, i) { return i === 0 && msg.length > 1 ? 92 : 64; });
      var inks = msg.map(function (l, i) { return ink(l, sizes[i], 700); });
      var gap = 34, textH = inks.reduce(function (s, k) { return s + k.h; }, 0) + gap * (msg.length - 1);
      var maxW = Math.max.apply(null, inks.map(function (k) { return k.w; }));
      var pw = Math.max(900, maxW + 260), ph = textH + 250, cx = 960, cy = 470;
      var pop = el('g', { 'data-name': 'end-popup' });
      pop.appendChild(DS.Sticker({ x: cx, y: cy, w: pw, h: ph, r: 70, wob: 0.6, seed: 101, fill: C['aqua-50'], stroke: C['aqua-500'], strokeWidth: 3, lip: 16, lipColor: C['aqua-500'], innerFill: C.white, innerInset: 22, dash: C['aqua-500'], dashInset: 24, dashWidth: 5, dashArray: '30 16' }));
      var y = cy - textH / 2 - 30;
      msg.forEach(function (line, i) {
        var k = inks[i]; y += k.h / 2;
        pop.appendChild(inkText(line, cx, y, sizes[i], 700, i === 0 && msg.length > 1 ? C['pink-500'] : C['ink-feedback']));
        y += k.h / 2 + gap;
      });
      [[cx - pw / 2 + 70, cy - ph / 2 + 60, 64, C['sun-400']], [cx + pw / 2 - 74, cy - ph / 2 + 56, 56, C['sky-300']], [cx + pw / 2 - 150, cy - ph / 2 + 30, 34, C['pink-500']]].forEach(function (s) { pop.appendChild(starG(s[0], s[1], s[2], s[3])); });
      svg.appendChild(pop);
      layer.insertBefore(svg, layer.firstChild);
      // replay button centred on the popup's bottom edge
      var rb = document.getElementById('endReplay'), s = 170;
      rb.appendChild(buttonSVG(['replay'], 134));
      rb.style.cssText = 'left:' + (cx - s / 2) + 'px;top:' + (cy + ph / 2 + 8 - s * 0.5) + 'px;width:' + s + 'px;height:' + (s * 124 / 120) + 'px';
      rb.addEventListener('click', function () { sfx('click'); self.hideEnd(); self.reset(); });
      this.end = { layer: layer, shade: shade, pop: pop, btn: rb };
    },
    showEnd: function () {
      var e = this.end; this.endOpen = true; e.layer.hidden = false;
      gsap.fromTo(e.shade, { opacity: 0 }, { opacity: 0.72, duration: 0.5 });
      gsap.fromTo([e.pop, e.btn], { opacity: 0, scale: 0.6, transformOrigin: '50% 50%' }, { opacity: 1, scale: 1, duration: 0.55, ease: 'back.out(1.6)', delay: 0.35, stagger: 0.12 });
      setTimeout(function () { sfx('sparkle'); }, 450);
      e.btn.focus({ preventScroll: true });
    },
    hideEnd: function () {
      var e = this.end, self = this;
      gsap.to(e.layer, { opacity: 0, duration: 0.3, onComplete: function () { e.layer.hidden = true; e.layer.style.opacity = 1; self.endOpen = false; } });
    }
  };

  window.KGPlayer = Player;
})();
