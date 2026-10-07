/* Minimal React.createElement shim that renders the Selah KG Arabic Motion
   design-system components (selahkg-ds.js) straight into live SVG DOM nodes,
   so GSAP can animate every DS shape. No React needed at runtime. */
(function () {
  var NS = 'http://www.w3.org/2000/svg';
  var KEEP = { viewBox: 1, preserveAspectRatio: 1, gradientTransform: 1, gradientUnits: 1, clipPathUnits: 1, patternUnits: 1, patternContentUnits: 1, maskUnits: 1, maskContentUnits: 1, stdDeviation: 1, startOffset: 1 };
  var uid = 0;
  function attr(k) { return KEEP[k] ? k : k.replace(/[A-Z]/g, function (m) { return '-' + m.toLowerCase(); }); }
  function flat(arr, out) {
    for (var i = 0; i < arr.length; i++) {
      var c = arr[i];
      if (c == null || c === false || c === true) continue;
      if (Array.isArray(c)) flat(c, out); else out.push(c);
    }
    return out;
  }
  function createElement(type, props) {
    props = props || {};
    var kids = flat(Array.prototype.slice.call(arguments, 2), []);
    if (typeof type === 'function') {
      var p = Object.assign({}, props);
      if (kids.length) p.children = kids.length === 1 ? kids[0] : kids;
      return type(p);
    }
    var el = document.createElementNS(NS, type);
    for (var k in props) {
      var v = props[k];
      if (v == null || k === 'key' || k === 'children' || k === 'xmlns') continue;
      if (k === 'style' && typeof v === 'object') { Object.assign(el.style, v); continue; }
      if (k === 'className') { el.setAttribute('class', v); continue; }
      el.setAttribute(attr(k), v);
    }
    var all = kids.length ? kids : (props.children != null ? flat([props.children], []) : []);
    for (var j = 0; j < all.length; j++) {
      var c = all[j];
      el.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return el;
  }
  window.React = { createElement: createElement, useId: function () { return ':r' + (uid++) + ':'; } };
})();
