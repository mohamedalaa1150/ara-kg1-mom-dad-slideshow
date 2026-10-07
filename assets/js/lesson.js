/* =====================================================================
   Lesson content: 2026_ara_1k_1a_02_03_01 — الوحدة الثانية: أنا وأسرتي
   الدرس الثاني: أمي وأبي  (KG1 · Arabic) — character: زيزي (Zizi)

   ▸ Edit the two texts below to change the lesson chip or the end message.
     In ELEMENT.endMessage, "\n" starts a new line; the first line is shown
     as the big praise word.
   ▸ Every cue is tied to a spoken word: c.w('word', n) = start time of the
     nth occurrence of that word in the scene's voice-over.
   ▸ Layout: content stays inside the safe area (y 150 → 850) so nothing
     reaches the control bar. The character stands on the LEFT.
   ===================================================================== */
(function () {
  var ELEMENT = {
    code: '2026_ara_1k_1a_02_03_01',
    chip: 'أُمِّي وَأَبِي',
    endMessage: 'أَحْسَنْتَ!\nلَقَدْ أَتْمَمْتَ مُهِمَّتَكَ بِنَجَاحٍ'
  };

  var DS = SelahKG, C = DS.colors;
  var ZIZI = { x: 335, feet: 862, scale: 1.2 };       // character: left side, feet on the safe-area floor
  var BOTTOM = 850;                                   // safe-area floor

  /* Title card (DS look) with its text centred on the ink */
  function titleCard(c, x, y, text) {
    var g = c.g({ 'data-name': 'title-card' });
    g.appendChild(DS.Sticker({ x: x, y: y, w: 880, h: 290, r: 125, wob: 0.8, seed: 11, fill: C['sky-500'], shadow: C['shadow-soft'], shadowDx: -6, shadowDy: 20, ring: C['sky-300'], ringInset: 14, ringWidth: 6, dash: C['sky-dash'], dashWidth: 7, dashArray: '23 9' }));
    g.appendChild(c.inkText(text, x - 70, y, 104, 700, C.white));
    var mark = c.g({ 'data-name': 'title-mark' }, g);
    mark.appendChild(DS.Icon({ name: 'letters-abt', x: x + 380, y: y + 46, size: 250, color: C['shadow-soft'] }));
    mark.appendChild(DS.Icon({ name: 'letters-abt', x: x + 368, y: y + 34, size: 250 }));
    return { g: g, mark: mark };
  }

  var scenes = [
    /* 1 — Title (also the start screen: play button sits on the card's bottom edge) */
    { id: 1, vo: 's01', chip: false, startAnchor: { x: 960, y: 645 }, build: function (c) {
      var t = titleCard(c, 960, 450, 'أُمِّي وَأَبِي');
      c.gentleScale(t.g, c.w('أمي'), 1.05);
      c.sfxAt('sparkle', c.w('أمي'));
      c.tl.to(t.mark, { y: -6, duration: 1.4, ease: 'sine.inOut', yoyo: true, repeat: 3 }, c.w('أمي') + 0.4);
    } },

    /* 2 — Intro with Zizi */
    { id: 2, vo: 's02', build: function (c) {
      var z = c.character(ZIZI);
      c.fadeIn(z.el, 0.05, { y: 0, dur: 0.6 });
      var mom = c.frame({ x: 1360, y: 385, w: 330, h: 430, href: 's02_mom_girl', seed: 33 });
      var dad = c.frame({ x: 960, y: 385, w: 330, h: 430, href: 's02_dad_boy', seed: 35, rotate: 1.2 });
      c.fadeIn(mom.outer, c.w('أمي'), { sfx: 'pop' });
      c.fadeIn(dad.outer, c.w('وأبي'), { sfx: 'pop' });
      var icons = [c.bubble('ico_blocks', 1360, 755, 160), c.bubble('ico_food', 1160, 755, 160), c.bubble('ico_school', 960, 755, 160)];
      c.pop(icons, c.w('وكيف'), { stagger: 0.25 });
      c.hop(z.el, c.w('هيا'));
    } },

    /* 3 — This is my mother, this is my father */
    { id: 3, vo: 's03', build: function (c) {
      var mom = c.frame({ x: 1190, y: 405, w: 410, h: 534, href: 's03_mom', empty: true, seed: 41 });
      var dad = c.frame({ x: 730, y: 405, w: 410, h: 534, href: 's03_dad', empty: true, seed: 43, rotate: 1.2 });
      c.fadeIn([mom.outer, dad.outer], 0.05, { stagger: 0.2, dur: 0.6 });
      var lm = c.label('أُمِّي', 1190, 768), ld = c.label('أَبِي', 730, 768);
      c.fill(mom, c.w('هذه'), { pop: true });
      c.pop(lm, c.w('أمي'), { sfx: false });
      c.fill(dad, c.w('وهذا'), { pop: true });
      c.pop(ld, c.w('أبي'), { sfx: false });
      c.gentleScale([mom.outer, dad.outer, lm, ld], c.w('وأنا'));
    } },

    /* 4 — Recognising mother and father in the family */
    { id: 4, vo: 's04', build: function (c) {
      var f = c.frame({ x: 960, y: 500, w: 1186, h: 690, href: 's04_family', seed: 51, rotate: -0.6 });
      c.fadeIn(f.outer, 0.05, { dur: 0.6 });
      var b = f.box, u = function (v) { return b.x + v * b.w; }, v = function (q) { return b.y + q * b.h; };
      var cx = u(0.495), cy = v(0.47), rx = b.w * 0.17, ry = b.h * 0.44;
      var mid = 'spot' + Math.random().toString(36).slice(2, 7), fid = mid + 'b', h = React.createElement;
      c.defs.appendChild(h('filter', { id: fid, x: '-20%', y: '-20%', width: '140%', height: '140%' }, h('feGaussianBlur', { stdDeviation: 18 })));
      c.defs.appendChild(h('mask', { id: mid }, h('rect', { x: b.x, y: b.y, width: b.w, height: b.h, fill: '#fff' }), h('ellipse', { cx: cx, cy: cy, rx: rx, ry: ry, fill: '#000', filter: 'url(#' + fid + ')' })));
      var veil = c.add(h('rect', { x: b.x, y: b.y, width: b.w, height: b.h, fill: '#fff6d2', mask: 'url(#' + mid + ')' }), f.art);
      var glow = c.add(h('ellipse', { cx: cx, cy: cy, rx: rx, ry: ry, fill: 'none', stroke: '#fcc34f', 'stroke-width': 14, filter: 'url(#' + fid + ')' }), f.art);
      c.hide([veil, glow]);
      c.tl.fromTo(f.art, { scale: 1, transformOrigin: '50% 50%' }, { scale: 1.06, duration: 2.6, ease: 'sine.inOut' }, c.w('عندما'));
      var t = c.w('أتعرف');
      c.tl.to(veil, { opacity: 0.55, duration: 0.8, ease: 'power2.out' }, t);
      c.tl.to(glow, { opacity: 1, duration: 0.8, ease: 'power2.out' }, t);
      c.tl.to(glow, { opacity: 0.55, duration: 0.9, ease: 'sine.inOut', yoyo: true, repeat: 3 }, t + 0.8);
      c.tl.to(f.art, { scale: 1.1, duration: 0.9, ease: 'sine.inOut', svgOrigin: cx + ' ' + cy }, t);
      c.sfxAt('sparkle', t);
    } },

    /* 5 — Playing with blocks */
    { id: 5, vo: 's05', build: function (c) {
      var f = c.frame({ x: 960, y: 500, w: 1186, h: 690, href: 's05_blocks', empty: true, seed: 53, rotate: 0.6 });
      c.fadeIn(f.outer, 0.05, { dur: 0.6 });
      var b = f.box, k = b.w / 1600, img = window.LESSON_DATA.img;
      var blocks = [['blk_red', 0.66, 0.86], ['blk_yellow', 0.745, 0.89], ['blk_blue', 0.83, 0.85]].map(function (d) {
        var m = img[d[0]], hh = 120 * k, w = hh * m[0] / m[1];
        return c.add(React.createElement('image', { href: 'assets/img/' + d[0] + '.webp', x: b.x + d[1] * b.w - w / 2, y: b.y + d[2] * b.h - hh, width: w, height: hh }), f.art);
      });
      c.fill(f, c.w('وأحب'), { sfx: 'pop' });
      var t = c.w('نبني');
      blocks.forEach(function (bl, i) {
        c.tl.to(bl, { keyframes: [{ y: -44, duration: 0.26, ease: 'power2.out' }, { y: 0, duration: 0.42, ease: 'bounce.out' }], repeat: 1 }, t + i * 0.18);
      });
    } },

    /* 6 — Eating and caring for plants together */
    { id: 6, vo: 's06', build: function (c) {
      var a = c.frame({ x: 1350, y: 495, w: 700, h: 525, href: 's06_eat_mom', empty: true, seed: 61 });
      var b = c.frame({ x: 570, y: 495, w: 700, h: 525, href: 's06_plant_dad', empty: true, seed: 63, rotate: 1.2 });
      c.fadeIn([a.outer, b.outer], 0.05, { stagger: 0.2, dur: 0.6 });
      c.fill(a, c.w('أتناول'));
      c.fill(b, c.w('أعتني'));
      c.gentleScale([a.outer, b.outer], c.w('المشاركة'));
    } },

    /* 7 — How mother and father help me */
    { id: 7, vo: 's07', build: function (c) {
      var xs = [1460, 960, 460], src = ['s07_salad', 's07_fruit', 's07_school'];
      var fr = xs.map(function (x, i) { return c.frame({ x: x, y: 495, w: 440, h: 573, href: src[i], empty: true, seed: 71 + i * 2, rotate: [-1.2, 0.8, -0.8][i] }); });
      c.fadeIn(fr.map(function (f) { return f.outer; }), c.w('يساعدانني'), { stagger: 0.18, dur: 0.6 });
      c.fill(fr[0], c.w('إعداد'));
      c.fill(fr[1], c.w('ويقدمان'));
      c.fill(fr[2], c.w('ويرافقانني'));
    } },

    /* 8 — Showing love to mother and father */
    { id: 8, vo: 's08', build: function (c) {
      var xs = [1460, 960, 460], src = ['s08_talk_mom', 's08_play_dad', 's08_hug'];
      var fr = xs.map(function (x, i) { return c.frame({ x: x, y: 495, w: 440, h: 573, href: src[i], empty: true, seed: 81 + i * 2, rotate: [-1.2, 0.8, -0.8][i] }); });
      c.fadeIn(fr.map(function (f) { return f.outer; }), c.w('أعبر'), { stagger: 0.18, dur: 0.6 });
      c.fill(fr[0], c.w('أتحدث'));
      c.fill(fr[1], c.w('وأشاركهما'));
      var t = c.w('وأحتضنهما');
      c.fill(fr[2], t);
      var heart = c.heart(710, 495, 116);
      c.pop(heart, t + 0.35, { sfx: 'sparkle' });
      c.pulse(heart, t + 0.9, 2);
    } },

    /* 9 — Review */
    { id: 9, vo: 's09', build: function (c) {
      var group = c.g({ 'data-name': 'review' });
      // parents inside a soft portrait panel (the picture is cropped at the knees, so it sits in a shape)
      var parents = c.g({ 'data-name': 'parents-panel' }, group);
      var pw = 520, ph = 590, px = 960, py = BOTTOM - ph / 2, h = React.createElement;
      parents.appendChild(DS.Sticker({ x: px, y: py, w: pw, h: ph, r: 90, wob: 0.6, seed: 91, fill: C['lilac-50'], stroke: C['sky-200'], strokeWidth: 12, dash: C['sky-dash'], dashInset: 9, dashWidth: 5, dashArray: '22 11', shadow: C['shadow-soft'], shadowDy: 12 }));
      var cid = 'pp' + Math.random().toString(36).slice(2, 7), ins = 16;
      c.defs.appendChild(h('clipPath', { id: cid }, h('path', { d: DS.blobPath(px - pw / 2 + ins, py - ph / 2 + ins, pw - 2 * ins, ph - 2 * ins, 78, 91, 0.6) })));
      var m = window.LESSON_DATA.img.s09_parents, ih = ph - 40, iw = m[0] * ih / m[1];
      var clipG = c.g({ 'clip-path': 'url(#' + cid + ')' }, parents);
      c.add(h('image', { href: 'assets/img/s09_parents.webp', x: px - iw / 2, y: py + ph / 2 - ih, width: iw, height: ih }), clipG);
      c.fadeIn(parents, c.w('تحدثنا'), { sfx: 'pop' });
      var act = [c.bubble('ico_blocks', 1330, 310, 175), c.bubble('ico_food', 1440, 545, 175), c.bubble('ico_plant', 1310, 755, 175)];
      var help = [c.bubble('ico_fruit', 590, 345, 175), c.bubble('ico_school', 500, 610, 175)];
      act.concat(help).forEach(function (n) { group.appendChild(n); });
      c.pop(act, c.w('والأنشطة'), { stagger: 0.28 });
      c.pop(help, c.w('يساعداننا'), { stagger: 0.28 });
      var heart = c.heart(960, 248, 104); group.appendChild(heart);
      var t = c.w('وكيف');
      c.pop(heart, t, { sfx: 'sparkle' });
      c.pulse(heart, t + 0.5, 2);
      c.gentleScale(group, c.w('حبنا'), 1.04);
    } },

    /* 10 — Closing with Zizi */
    { id: 10, vo: 's10', build: function (c) {
      var z = c.character(ZIZI);
      c.fadeIn(z.el, 0.05, { y: 0, dur: 0.6 });
      var fam = c.picture('s10_family', 1160, BOTTOM, 560);
      c.fadeIn(fam, 0.15, { dur: 0.7 });
      var stars = [
        c.star(930, 330, 68, C['sun-400']), c.star(1400, 300, 56, C['sky-300']), c.star(880, 610, 48, C['pink-500']),
        c.star(1450, 560, 62, C['lilac-300']), c.sparkle(1010, 250, 44, C['sun-400']), c.sparkle(1330, 420, 36, C['sky-300']), c.sparkle(1500, 760, 40, C['pink-500'])
      ];
      var t = c.w('أحسنتم');
      c.pop(stars, t, { stagger: 0.12, sfx: false });
      c.sfxAt('sparkle', t);
      c.tl.to(stars, { rotation: 12, transformOrigin: '50% 50%', duration: 1.4, ease: 'sine.inOut', yoyo: true, repeat: 3, stagger: 0.1 }, t + 1);
      var heart = c.heart(1395, 400, 96);
      var th = c.w('أحب');
      c.pop(heart, th, { sfx: 'sparkle' });
      c.pulse(heart, th + 0.5, 2);
    } }
  ];

  KGPlayer.init({ code: ELEMENT.code, chip: ELEMENT.chip, endMessage: ELEMENT.endMessage, scenes: scenes });
})();
