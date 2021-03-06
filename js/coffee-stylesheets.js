// Generated by CoffeeScript 1.4.0

(function(context, definition) {
  if ('function' === typeof require && typeof exports === typeof module) {
    return module.exports = definition;
  }
  return context.CoffeeStylesheets = definition;
})(this, (function() {
  var C, y;
  y = function(v) {
    return (typeof v)[0];
  };
  C = function(o) {
    var clean, g, x, _fn, _fn1;
    o = o || {};
    o.space = o.format ? ' ' : '';
    o.indent = (o.format || '') && (o.indent || '  ');
    o.newline = (o.format || '') && (o.newline || "\n");
    o.selector = o.selector || 'a abbr address article aside audio b bdi bdo blockquote body button canvas caption cite code colgroup command data datagrid datalist dd del details dfn div dl dt em embed eventsource fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup html i iframe ins kbd keygen label legend li mark map menu meter nav noscript object ol optgroup option output p pre progress q ruby rp rt s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr area base br col hr img input link meta param'.split(' ');
    o.property = o.property || 'align-content align-items align-self alignment-adjust alignment-baseline anchor-point animation animation-delay animation-direction animation-duration animation-iteration-count animation-name animation-play-state animation-timing-function appearance azimuth backface-visibility background background-attachment background-clip background-color background-image background-origin background-position background-repeat background-size baseline-shift binding bleed bookmark-label bookmark-level bookmark-state bookmark-target border border-bottom border-bottom-color border-bottom-left-radius border-bottom-right-radius border-bottom-style border-bottom-width border-collapse border-color border-image border-image-outset border-image-repeat border-image-slice border-image-source border-image-width border-left border-left-color border-left-style border-left-width border-radius border-right border-right-color border-right-style border-right-width border-spacing border-style border-top border-top-color border-top-left-radius border-top-right-radius border-top-style border-top-width border-width bottom box-decoration-break box-shadow box-sizing break-after break-before break-inside caption-side clear clip color color-profile column-count column-fill column-gap column-rule column-rule-color column-rule-style column-rule-width column-span column-width columns content counter-increment counter-reset crop cue cue-after cue-before cursor direction display dominant-baseline drop-initial-after-adjust drop-initial-after-align drop-initial-before-adjust drop-initial-before-align drop-initial-size drop-initial-value elevation empty-cells fit fit-position flex flex-basis flex-direction flex-flow flex-grow flex-shrink flex-wrap float float-offset font font-feature-settings font-family font-kerning font-language-override font-size font-size-adjust font-stretch font-style font-synthesis font-variant font-variant-alternates font-variant-caps font-variant-east-asian font-variant-ligatures font-variant-numeric font-variant-position font-weight grid-cell grid-column grid-column-align grid-column-sizing grid-column-span grid-columns grid-flow grid-row grid-row-align grid-row-sizing grid-row-span grid-rows grid-template hanging-punctuation height hyphens icon image-orientation image-rendering image-resolution inline-box-align justify-content left letter-spacing line-break line-height line-stacking line-stacking-ruby line-stacking-shift line-stacking-strategy list-style list-style-image list-style-position list-style-type margin margin-bottom margin-left margin-right margin-top marker-offset marks marquee-direction marquee-loop marquee-play-count marquee-speed marquee-style max-height max-width min-height min-width move-to nav-down nav-index nav-left nav-right nav-up opacity order orphans outline outline-color outline-offset outline-style outline-width overflow overflow-style overflow-wrap overflow-x overflow-y padding padding-bottom padding-left padding-right padding-top page page-break-after page-break-before page-break-inside page-policy pause pause-after pause-before perspective perspective-origin pitch pitch-range play-during position presentation-level punctuation-trim quotes rendering-intent resize rest rest-after rest-before richness right rotation rotation-point ruby-align ruby-overhang ruby-position ruby-span size speak speak-as speak-header speak-numeral speak-punctuation speech-rate stress string-set tab-size table-layout target target-name target-new target-position text-align text-align-last text-decoration text-decoration-color text-decoration-line text-decoration-skip text-decoration-style text-emphasis text-emphasis-color text-emphasis-position text-emphasis-style text-height text-indent text-justify text-outline text-overflow text-shadow text-space-collapse text-transform text-underline-position text-wrap top transform transform-origin transform-style transition transition-delay transition-duration transition-property transition-timing-function unicode-bidi vertical-align visibility voice-balance voice-duration voice-family voice-pitch voice-range voice-rate voice-stress voice-volume volume white-space widows width word-break word-spacing word-wrap z-index'.split(' ');
    g = o.globals = o.globals || {};
    _fn = function(x) {
      return g[o.selector[x]] = g[o.selector[x]] || function() {
        return this.selector(o.selector[x]).apply(null, arguments);
      };
    };
    for (x in o.selector) {
      _fn(x);
    }
    _fn1 = function(x) {
      return g[clean] = g[clean] || function() {
        return this.property(o.property[x]).apply(null, arguments);
      };
    };
    for (x in o.property) {
      clean = o.property[x].replace(/[^\w\d]+/ig, '_');
      _fn1(x);
    }
    g.comment = function(s, f) {
      if (f) {
        this.literal(o.newline + '/*' + o.space + s);
        f();
        return this.literal(o.space + '*/');
      } else {
        return this.literal(o.newline + '/*' + o.space + s + o.space + '*/');
      }
    };
    g.s = function(s, f) {
      s = s.replace(/(^\s*|\s*$)/, '').split(/,\s*/);
      return (this.selector(s))(f);
    };
    g.prop = function(k, v) {
      return (this.property(k))(v);
    };
    this.o = o;
  };
  C.prototype.render = function(f, cb) {
    var dom, g, k, kk, l, o, styles, t;
    l = 0;
    dom = [];
    styles = [];
    o = this.o;
    g = o.globals;
    g.selector = function(n) {
      return function() {
        var a, b, c, pl, ps, s, v, w, x, _ref;
        a = arguments;
        b = {};
        pl = l;
        l = styles.length;
        s = '';
        for (x in a) {
          s += y(a[x]);
        }
        if (s === 'sof' || s === 'sf') {
          n += a[0];
        }
        if (s === 'of') {
          b = a[0];
        }
        if (s === 'sof') {
          b = a[1];
        }
        if (o.length) {
          if (b.id) {
            n += '#' + b.id;
          }
          if (b["class"]) {
            n += '.' + b["class"].split(' ').join('.');
          }
        }
        f = a[a.length - 1];
        dom.push(y(n) !== 'o' ? [n] : n);
        for (c in dom) {
          if (c === '0') {
            b = dom[c];
            continue;
          } else {
            x = [];
            for (w in b) {
              _ref = dom[c];
              for (v in _ref) {
                ps = _ref[v];
                if (ps.indexOf('&') === -1) {
                  ps = '& ' + ps;
                }
                x.push(ps.replace('&', b[w]));
              }
            }
            b = x;
          }
        }
        styles[l] = {
          selector: b,
          properties: [],
          lineNumber: (function(o) {
            var E, e, p;
            E = Error;
            p = 'prepareStackTrace';
            b = E[p];
            E[p] = (function(_, s) {
              return s;
            });
            e = new E;
            E.captureStackTrace(e, o);
            s = e.stack;
            E[p] = b;
            return s[1].getLineNumber();
          })(arguments.callee)
        };
        f();
        dom.pop();
        return l = pl;
      };
    };
    g.property = function(n) {
      return function(s) {
        return styles[l].properties.push([n, s]);
      };
    };
    g.literal = function(s) {
      if (l === 0) {
        return styles.push(s);
      } else {
        return styles[l].properties.push(s);
      }
    };
    (Function('g', 'with(g){(' + f + ')()}'))(g);
    t = '';
    for (k in styles) {
      if (typeof styles[k] === 'string') {
        t += styles[k] + o.newline;
      } else if (styles[k].properties.length) {
        if (o.format) {
          t += "/* line " + styles[k].lineNumber + (o.file ? ', ' + o.file : '') + " */\n";
        }
        t += "" + (styles[k].selector.join(',' + o.newline)) + o.space + "{" + o.newline;
        for (kk in styles[k].properties) {
          if (typeof styles[k].properties[kk] === 'object') {
            t += "" + o.indent + styles[k].properties[kk][0] + ":" + o.space + styles[k].properties[kk][1] + ";" + o.newline;
          } else {
            t += o.indent + styles[k].properties[kk] + o.newline;
          }
        }
        if (!o.format && t.slice(-1) === ';') {
          t = t.slice(0, -1);
        }
        t = t.replace(new RegExp(o.newline + '$'), o.space);
        t += "}" + o.newline;
      }
    }
    this.on.end(t, function(err, css) {
      return cb(err, css);
    });
  };
  C.prototype.on = {
    end: function(t, cb) {
      return cb(null, t);
    }
  };
  C.prototype.use = function(cb) {
    return cb(this);
  };
  return C;
})());
