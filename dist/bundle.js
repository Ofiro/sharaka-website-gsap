/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 465:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
 * ScrollSmoother 3.12.2
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

!function (e, t) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? t(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (e) {
  "use strict";

  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }
  function s() {
    return "undefined" != typeof window;
  }
  function t() {
    return I || s() && (I = window.gsap) && I.registerPlugin && I;
  }
  function v(e) {
    return V.maxScroll(e || U);
  }
  var I,
    L,
    U,
    G,
    j,
    K,
    q,
    D,
    V,
    J,
    Y,
    Q,
    W,
    X,
    Z,
    r = (ScrollSmoother.register = function register(e) {
      return L || (I = e || t(), s() && window.document && (U = window, G = document, j = G.documentElement, K = G.body), I && (q = I.utils.toArray, D = I.utils.clamp, Y = I.parseEase("expo"), X = I.core.context || function () {}, V = I.core.globals().ScrollTrigger, I.core.globals("ScrollSmoother", ScrollSmoother), K && V && (Z = I.delayedCall(.2, function () {
        return V.isRefreshing || J && J.refresh();
      }).pause(), Q = V.core._getVelocityProp, W = V.core._inputObserver, ScrollSmoother.refresh = V.refresh, L = 1))), L;
    }, function _createClass(e, t, r) {
      return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
    }(ScrollSmoother, [{
      key: "progress",
      get: function get() {
        return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0;
      }
    }]), ScrollSmoother);
  function ScrollSmoother(t) {
    var o = this;
    L || ScrollSmoother.register(I) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), t = this.vars = t || {}, J && J.kill(), X(J = this);
    function Aa() {
      return F.update(-H);
    }
    function Ca() {
      return n.style.overflow = "visible";
    }
    function Ea(e) {
      e.update();
      var t = e.getTween();
      t && (t.pause(), t._time = t._dur, t._tTime = t._tDur), d = !1, e.animation.progress(e.progress, !0);
    }
    function Fa(e, t) {
      (e !== H && !f || t) && (E && (e = Math.round(e)), k && (n.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", n._gsap.y = e + "px"), M = e - H, H = e, V.isUpdating || ScrollSmoother.isRefreshing || V.update());
    }
    function Ga(e) {
      return arguments.length ? (e < 0 && (e = 0), O.y = -e, d = !0, f ? H = -e : Fa(-e), V.isRefreshing ? i.update() : P(e / A), this) : -H;
    }
    function Ja(e) {
      S.scrollTop = 0, e.target.contains && e.target.contains(S) || T && !1 === T(o, e) || (V.isInViewport(e.target) || e.target === g || o.scrollTo(e.target, !1, "center center"), g = e.target);
    }
    function Ka(t, e) {
      if (t < e.start) return t;
      var r = isNaN(e.ratio) ? 1 : e.ratio,
        n = e.end - e.start,
        o = t - e.start,
        i = e.offset || 0,
        s = e.pins || [],
        a = s.offset || 0,
        l = e._startClamp && e.start <= 0 || e.pins && e.pins.offset ? 0 : e._endClamp && e.end === v() ? 1 : .5;
      return s.forEach(function (e) {
        n -= e.distance, e.nativeStart <= t && (o -= e.distance);
      }), a && (o *= (n - a / r) / n), t + (o - i * l) / r - o;
    }
    function Ma(t, r) {
      b.forEach(function (e) {
        return function adjustEffectRelatedTriggers(e, t, r) {
          r || (e.pins.length = e.pins.offset = 0);
          var n,
            o,
            i,
            s,
            a,
            l,
            c,
            f,
            u = e.pins,
            h = e.markers;
          for (c = 0; c < t.length; c++) if (f = t[c], e.trigger && f.trigger && e !== f && (f.trigger === e.trigger || f.pinnedContainer === e.trigger || e.trigger.contains(f.trigger)) && (a = f._startNative || f._startClamp || f.start, l = f._endNative || f._endClamp || f.end, i = Ka(a, e), s = f.pin && 0 < l ? i + (l - a) : Ka(l, e), f.setPositions(i, s, !0, (f._startClamp ? Math.max(0, i) : i) - a), f.markerStart && h.push(I.quickSetter([f.markerStart, f.markerEnd], "y", "px")), f.pin && 0 < f.end && !r)) {
            if (n = f.end - f.start, o = e._startClamp && f.start < 0) {
              if (0 < e.start) return e.setPositions(0, e.end + (e._startNative - e.start), !0), void adjustEffectRelatedTriggers(e, t);
              n += f.start, u.offset = -f.start;
            }
            u.push({
              start: f.start,
              nativeStart: a,
              end: f.end,
              distance: n,
              trig: f
            }), e.setPositions(e.start, e.end + (o ? -f.start : n), !0);
          }
        }(e, t, r);
      });
    }
    function Na() {
      Ca(), requestAnimationFrame(Ca), b && (V.getAll().forEach(function (e) {
        e._startNative = e.start, e._endNative = e.end;
      }), b.forEach(function (e) {
        var t = e._startClamp || e.start,
          r = e.autoSpeed ? Math.min(v(), e.end) : t + Math.abs((e.end - t) / e.ratio),
          n = r - e.end;
        if ((r -= n / 2) < (t -= n / 2)) {
          var o = t;
          t = r, r = o;
        }
        e._startClamp && t < 0 ? (n = (r = e.ratio < 0 ? v() : e.end / e.ratio) - e.end, t = 0) : (e.ratio < 0 || e._endClamp && r >= v()) && (n = ((r = v()) - (t = e.ratio < 0 || 1 < e.ratio ? 0 : r - (r - e.start) / e.ratio)) * e.ratio - (e.end - e.start)), e.offset = n || 1e-4, e.pins.length = e.pins.offset = 0, e.setPositions(t, r, !0);
      }), Ma(V.sort())), F.reset();
    }
    function Oa() {
      return V.addEventListener("refresh", Na);
    }
    function Pa() {
      return b && b.forEach(function (e) {
        return e.vars.onRefresh(e);
      });
    }
    function Qa() {
      return b && b.forEach(function (e) {
        return e.vars.onRefreshInit(e);
      }), Pa;
    }
    function Ra(r, n, o, i) {
      return function () {
        var e = "function" == typeof n ? n(o, i) : n;
        e || 0 === e || (e = i.getAttribute("data-" + x + r) || ("speed" === r ? 1 : 0)), i.setAttribute("data-" + x + r, e);
        var t = "clamp(" === (e + "").substr(0, 6);
        return {
          clamp: t,
          value: t ? e.substr(6, e.length - 7) : e
        };
      };
    }
    function Sa(r, e, t, n, o) {
      function bc() {
        e = u(), t = parseFloat(h().value), i = parseFloat(e.value) || 1, a = "auto" === e.value, c = a || s && s._startClamp && s.start <= 0 || p.offset ? 0 : s && s._endClamp && s.end === v() ? 1 : .5, l && l.kill(), l = t && I.to(r, {
          ease: Y,
          overwrite: !1,
          y: "+=0",
          duration: t
        }), s && (s.ratio = i, s.autoSpeed = a);
      }
      function cc() {
        g.y = d + "px", g.renderTransform(1), bc();
      }
      function fc(e) {
        if (a) {
          cc();
          var t = function _autoDistance(e, t) {
            var r,
              n,
              o = e.parentNode || j,
              i = e.getBoundingClientRect(),
              s = o.getBoundingClientRect(),
              a = s.top - i.top,
              l = s.bottom - i.bottom,
              c = (Math.abs(a) > Math.abs(l) ? a : l) / (1 - t),
              f = -c * t;
            return 0 < c && (n = .5 == (r = s.height / (U.innerHeight + s.height)) ? 2 * s.height : 2 * Math.min(s.height, Math.abs(-c * r / (2 * r - 1))) * (t || 1), f += t ? -n * t : -n / 2, c += n), {
              change: c,
              offset: f
            };
          }(r, D(0, 1, -e.start / (e.end - e.start)));
          y = t.change, f = t.offset;
        } else f = p.offset || 0, y = (e.end - e.start - f) * (1 - i);
        p.forEach(function (e) {
          return y -= e.distance * (1 - i);
        }), e.offset = y || .001, e.vars.onUpdate(e), l && l.progress(1);
      }
      o = ("function" == typeof o ? o(n, r) : o) || 0;
      var i,
        s,
        a,
        l,
        c,
        f,
        u = Ra("speed", e, n, r),
        h = Ra("lag", t, n, r),
        d = I.getProperty(r, "y"),
        g = r._gsap,
        p = [],
        m = [],
        y = 0;
      return bc(), (1 !== i || a || l) && (fc(s = V.create({
        trigger: a ? r.parentNode : r,
        start: function start() {
          return e.clamp ? "clamp(top bottom+=" + o + ")" : "top bottom+=" + o;
        },
        end: function end() {
          return e.value < 0 ? "max" : e.clamp ? "clamp(bottom top-=" + o + ")" : "bottom top-=" + o;
        },
        scroller: S,
        scrub: !0,
        refreshPriority: -999,
        onRefreshInit: cc,
        onRefresh: fc,
        onKill: function onKill(e) {
          var t = b.indexOf(e);
          0 <= t && b.splice(t, 1), cc();
        },
        onUpdate: function onUpdate(e) {
          var t,
            r,
            n,
            o = d + y * (e.progress - c),
            i = p.length,
            s = 0;
          if (e.offset) {
            if (i) {
              for (r = -H, n = e.end; i--;) {
                if ((t = p[i]).trig.isActive || r >= t.start && r <= t.end) return void (l && (t.trig.progress += t.trig.direction < 0 ? .001 : -.001, t.trig.update(0, 0, 1), l.resetTo("y", parseFloat(g.y), -M, !0), N && l.progress(1)));
                r > t.end && (s += t.distance), n -= t.distance;
              }
              o = d + s + y * ((I.utils.clamp(e.start, e.end, r) - e.start - s) / (n - e.start) - c);
            }
            m.length && !a && m.forEach(function (e) {
              return e(o - s);
            }), o = function _round(e) {
              return Math.round(1e5 * e) / 1e5 || 0;
            }(o + f), l ? (l.resetTo("y", o, -M, !0), N && l.progress(1)) : (g.y = o + "px", g.renderTransform(1));
          }
        }
      })), I.core.getCache(s.trigger).stRevert = Qa, s.startY = d, s.pins = p, s.markers = m, s.ratio = i, s.autoSpeed = a, r.style.willChange = "transform"), s;
    }
    var n,
      S,
      e,
      i,
      b,
      s,
      a,
      l,
      c,
      f,
      r,
      u,
      h,
      d,
      g,
      p = t.smoothTouch,
      m = t.onUpdate,
      w = t.onStop,
      _ = t.smooth,
      T = t.onFocusIn,
      C = t.normalizeScroll,
      E = t.wholePixels,
      R = this,
      x = t.effectsPrefix || "",
      P = V.getScrollFunc(U),
      k = 1 === V.isTouch ? !0 === p ? .8 : parseFloat(p) || 0 : 0 === _ || !1 === _ ? 0 : parseFloat(_) || .8,
      A = k && +t.speed || 1,
      H = 0,
      M = 0,
      N = 1,
      F = Q(0),
      O = {
        y: 0
      },
      z = "undefined" != typeof ResizeObserver && !1 !== t.autoResize && new ResizeObserver(function () {
        if (!V.isRefreshing) {
          var e = v(S) * A;
          e < -H && Ga(e), Z.restart(!0);
        }
      });
    function refreshHeight() {
      return e = n.clientHeight, n.style.overflow = "visible", K.style.height = U.innerHeight + (e - U.innerHeight) / A + "px", e - U.innerHeight;
    }
    Oa(), V.addEventListener("killAll", Oa), I.delayedCall(.5, function () {
      return N = 0;
    }), this.scrollTop = Ga, this.scrollTo = function (e, t, r) {
      var n = I.utils.clamp(0, v(), isNaN(e) ? o.offset(e, r) : +e);
      t ? f ? I.to(o, {
        duration: k,
        scrollTop: n,
        overwrite: "auto",
        ease: Y
      }) : P(n) : Ga(n);
    }, this.offset = function (e, t) {
      var r,
        n = (e = q(e)[0]).style.cssText,
        o = V.create({
          trigger: e,
          start: t || "top top"
        });
      return b && (N ? V.refresh() : Ma([o], !0)), r = o.start / A, o.kill(!1), e.style.cssText = n, I.core.getCache(e).uncache = 1, r;
    }, this.content = function (e) {
      if (arguments.length) {
        var t = q(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || K.children[0];
        return t !== n && (c = (n = t).getAttribute("style") || "", z && z.observe(n), I.set(n, {
          overflow: "visible",
          width: "100%",
          boxSizing: "border-box",
          y: "+=0"
        }), k || I.set(n, {
          clearProps: "transform"
        })), this;
      }
      return n;
    }, this.wrapper = function (e) {
      return arguments.length ? (S = q(e || "#smooth-wrapper")[0] || function _wrap(e) {
        var t = G.querySelector(".ScrollSmoother-wrapper");
        return t || ((t = G.createElement("div")).classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e)), t;
      }(n), l = S.getAttribute("style") || "", refreshHeight(), I.set(S, k ? {
        overflow: "hidden",
        position: "fixed",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      } : {
        overflow: "visible",
        position: "relative",
        width: "100%",
        height: "auto",
        top: "auto",
        bottom: "auto",
        left: "auto",
        right: "auto"
      }), this) : S;
    }, this.effects = function (e, t) {
      if (b = b || [], !e) return b.slice(0);
      (e = q(e)).forEach(function (e) {
        for (var t = b.length; t--;) b[t].trigger === e && b[t].kill();
      });
      t = t || {};
      var r,
        n,
        o = t.speed,
        i = t.lag,
        s = t.effectsPadding,
        a = [];
      for (r = 0; r < e.length; r++) (n = Sa(e[r], o, i, r, s)) && a.push(n);
      return b.push.apply(b, a), a;
    }, this.sections = function (e, t) {
      if (s = s || [], !e) return s.slice(0);
      var r = q(e).map(function (t) {
        return V.create({
          trigger: t,
          start: "top 120%",
          end: "bottom -20%",
          onToggle: function onToggle(e) {
            t.style.opacity = e.isActive ? "1" : "0", t.style.pointerEvents = e.isActive ? "all" : "none";
          }
        });
      });
      return t && t.add ? s.push.apply(s, r) : s = r.slice(0), r;
    }, this.content(t.content), this.wrapper(t.wrapper), this.render = function (e) {
      return Fa(e || 0 === e ? e : H);
    }, this.getVelocity = function () {
      return F.getVelocity(-H);
    }, V.scrollerProxy(S, {
      scrollTop: Ga,
      scrollHeight: function scrollHeight() {
        return refreshHeight() && K.scrollHeight;
      },
      fixedMarkers: !1 !== t.fixedMarkers && !!k,
      content: n,
      getBoundingClientRect: function getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: U.innerWidth,
          height: U.innerHeight
        };
      }
    }), V.defaults({
      scroller: S
    });
    var B = V.getAll().filter(function (e) {
      return e.scroller === U || e.scroller === S;
    });
    B.forEach(function (e) {
      return e.revert(!0, !0);
    }), i = V.create({
      animation: I.fromTo(O, {
        y: 0
      }, {
        y: function y() {
          return -refreshHeight();
        },
        immediateRender: !1,
        ease: "none",
        data: "ScrollSmoother",
        duration: 100,
        onUpdate: function onUpdate() {
          if (this._dur) {
            var e = d;
            e && (Ea(i), O.y = H), Fa(O.y, e), Aa(), m && !f && m(R);
          }
        }
      }),
      onRefreshInit: function onRefreshInit(e) {
        if (!ScrollSmoother.isRefreshing) {
          if (ScrollSmoother.isRefreshing = !0, b) {
            var t = V.getAll().filter(function (e) {
              return !!e.pin;
            });
            b.forEach(function (r) {
              r.vars.pinnedContainer || t.forEach(function (e) {
                if (e.pin.contains(r.trigger)) {
                  var t = r.vars;
                  t.pinnedContainer = e.pin, r.vars = null, r.init(t, r.animation);
                }
              });
            });
          }
          var r = e.getTween();
          h = r && r._end > r._dp._time, u = H, O.y = 0, k && (1 === V.isTouch && (S.style.position = "absolute"), S.scrollTop = 0, 1 === V.isTouch && (S.style.position = "fixed"));
        }
      },
      onRefresh: function onRefresh(e) {
        e.animation.invalidate(), e.setPositions(e.start, refreshHeight() / A), h || Ea(e), O.y = -P() * A, Fa(O.y), N || e.animation.progress(I.utils.clamp(0, 1, u / A / -e.end)), h && (e.progress -= .001, e.update()), ScrollSmoother.isRefreshing = !1;
      },
      id: "ScrollSmoother",
      scroller: U,
      invalidateOnRefresh: !0,
      start: 0,
      refreshPriority: -9999,
      end: function end() {
        return refreshHeight() / A;
      },
      onScrubComplete: function onScrubComplete() {
        F.reset(), w && w(o);
      },
      scrub: k || !0
    }), this.smooth = function (e) {
      return arguments.length && (A = (k = e || 0) && +t.speed || 1, i.scrubDuration(e)), i.getTween() ? i.getTween().duration() : 0;
    }, i.getTween() && (i.getTween().vars.ease = t.ease || Y), this.scrollTrigger = i, t.effects && this.effects(!0 === t.effects ? "[data-" + x + "speed], [data-" + x + "lag]" : t.effects, {
      effectsPadding: t.effectsPadding
    }), t.sections && this.sections(!0 === t.sections ? "[data-section]" : t.sections), B.forEach(function (e) {
      e.vars.scroller = S, e.revert(!1, !0), e.init(e.vars, e.animation);
    }), this.paused = function (e, t) {
      return arguments.length ? (!!f !== e && (e ? (i.getTween() && i.getTween().pause(), P(-H / A), F.reset(), (r = V.normalizeScroll()) && r.disable(), (f = V.observe({
        preventDefault: !0,
        type: "wheel,touch,scroll",
        debounce: !1,
        allowClicks: !0,
        onChangeY: function onChangeY() {
          return Ga(-H);
        }
      })).nested = W(j, "wheel,touch,scroll", !0, !1 !== t)) : (f.nested.kill(), f.kill(), f = 0, r && r.enable(), i.progress = (-H / A - i.start) / (i.end - i.start), Ea(i))), this) : !!f;
    }, this.kill = this.revert = function () {
      o.paused(!1), Ea(i), i.kill();
      for (var e = (b || []).concat(s || []), t = e.length; t--;) e[t].kill();
      V.scrollerProxy(S), V.removeEventListener("killAll", Oa), V.removeEventListener("refresh", Na), S.style.cssText = l, n.style.cssText = c;
      var r = V.defaults({});
      r && r.scroller === S && V.defaults({
        scroller: U
      }), o.normalizer && V.normalizeScroll(!1), clearInterval(a), J = null, z && z.disconnect(), K.style.removeProperty("height"), U.removeEventListener("focusin", Ja);
    }, this.refresh = function (e, t) {
      return i.refresh(e, t);
    }, C && (this.normalizer = V.normalizeScroll(!0 === C ? {
      debounce: !0,
      content: !k && n
    } : C)), V.config(t), "overscrollBehavior" in U.getComputedStyle(K) && I.set([K, j], {
      overscrollBehavior: "none"
    }), "scrollBehavior" in U.getComputedStyle(K) && I.set([K, j], {
      scrollBehavior: "auto"
    }), U.addEventListener("focusin", Ja), a = setInterval(Aa, 250), "loading" === G.readyState || requestAnimationFrame(function () {
      return V.refresh();
    });
  }
  r.version = "3.12.2", r.create = function (e) {
    return J && e && J.content() === q(e.content)[0] ? J : new r(e);
  }, r.get = function () {
    return J;
  }, t() && I.registerPlugin(r), e.ScrollSmoother = r, e["default"] = r;
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e["default"];
  }
});

/***/ }),

/***/ 482:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function (e, t) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? t(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (e) {
  "use strict";

  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }
  function r() {
    return Se || "undefined" != typeof window && (Se = window.gsap) && Se.registerPlugin && Se;
  }
  function z(e, t) {
    return ~Ie.indexOf(e) && Ie[Ie.indexOf(e) + 1][t];
  }
  function A(e) {
    return !!~t.indexOf(e);
  }
  function B(e, t, r, n, o) {
    return e.addEventListener(t, r, {
      passive: !n,
      capture: !!o
    });
  }
  function C(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function F() {
    return Re && Re.isPressed || ze.cache++;
  }
  function G(r, n) {
    function ad(e) {
      if (e || 0 === e) {
        o && (Te.history.scrollRestoration = "manual");
        var t = Re && Re.isPressed;
        e = ad.v = Math.round(e) || (Re && Re.iOS ? 1 : 0), r(e), ad.cacheID = ze.cache, t && i("ss", e);
      } else (n || ze.cache !== ad.cacheID || i("ref")) && (ad.cacheID = ze.cache, ad.v = r());
      return ad.v + ad.offset;
    }
    return ad.offset = 0, r && ad;
  }
  function J(e, t) {
    return (t && t._ctx && t._ctx.selector || Se.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== Se.config().nullTargetWarn ? console.warn("Element not found:", e) : null);
  }
  function K(t, e) {
    var r = e.s,
      n = e.sc;
    A(t) && (t = Ce.scrollingElement || Pe);
    var o = ze.indexOf(t),
      i = n === He.sc ? 1 : 2;
    ~o || (o = ze.push(t) - 1), ze[o + i] || B(t, "scroll", F);
    var a = ze[o + i],
      s = a || (ze[o + i] = G(z(t, r), !0) || (A(t) ? n : G(function (e) {
        return arguments.length ? t[r] = e : t[r];
      })));
    return s.target = t, a || (s.smooth = "smooth" === Se.getProperty(t, "scrollBehavior")), s;
  }
  function L(e, t, o) {
    function zd(e, t) {
      var r = Ye();
      t || n < r - s ? (a = i, i = e, l = s, s = r) : o ? i += e : i = a + (e - a) / (r - l) * (s - l);
    }
    var i = e,
      a = e,
      s = Ye(),
      l = s,
      n = t || 50,
      c = Math.max(500, 3 * n);
    return {
      update: zd,
      reset: function reset() {
        a = i = o ? 0 : i, l = s = 0;
      },
      getVelocity: function getVelocity(e) {
        var t = l,
          r = a,
          n = Ye();
        return !e && 0 !== e || e === i || zd(e), s === l || c < n - l ? 0 : (i + (o ? r : -r)) / ((o ? n : s) - t) * 1e3;
      }
    };
  }
  function M(e, t) {
    return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
  }
  function N(e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  }
  function O() {
    (Ae = Se.core.globals().ScrollTrigger) && Ae.core && function _integrate() {
      var e = Ae.core,
        r = e.bridge || {},
        t = e._scrollers,
        n = e._proxies;
      t.push.apply(t, ze), n.push.apply(n, Ie), ze = t, Ie = n, i = function _bridge(e, t) {
        return r[e](t);
      };
    }();
  }
  function P(e) {
    return (Se = e || r()) && "undefined" != typeof document && document.body && (Te = window, Pe = (Ce = document).documentElement, Me = Ce.body, t = [Te, Ce, Pe, Me], Se.utils.clamp, De = Se.core.context || function () {}, Oe = "onpointerenter" in Me ? "pointer" : "mouse", Ee = E.isTouch = Te.matchMedia && Te.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Te || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, Be = E.eventTypes = ("ontouchstart" in Pe ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Pe ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function () {
      return o = 0;
    }, 500), O(), ke = 1), ke;
  }
  var Se,
    ke,
    Te,
    Ce,
    Pe,
    Me,
    Ee,
    Oe,
    Ae,
    t,
    Re,
    Be,
    De,
    o = 1,
    Fe = [],
    ze = [],
    Ie = [],
    Ye = Date.now,
    i = function _bridge(e, t) {
      return t;
    },
    n = "scrollLeft",
    a = "scrollTop",
    qe = {
      s: n,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: G(function (e) {
        return arguments.length ? Te.scrollTo(e, He.sc()) : Te.pageXOffset || Ce[n] || Pe[n] || Me[n] || 0;
      })
    },
    He = {
      s: a,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: qe,
      sc: G(function (e) {
        return arguments.length ? Te.scrollTo(qe.sc(), e) : Te.pageYOffset || Ce[a] || Pe[a] || Me[a] || 0;
      })
    };
  qe.op = He, ze.cache = 0;
  var E = (Observer.prototype.init = function init(e) {
    ke || P(Se) || console.warn("Please gsap.registerPlugin(Observer)"), Ae || O();
    var o = e.tolerance,
      a = e.dragMinimum,
      t = e.type,
      i = e.target,
      r = e.lineHeight,
      n = e.debounce,
      s = e.preventDefault,
      l = e.onStop,
      c = e.onStopDelay,
      u = e.ignore,
      f = e.wheelSpeed,
      d = e.event,
      p = e.onDragStart,
      g = e.onDragEnd,
      h = e.onDrag,
      v = e.onPress,
      b = e.onRelease,
      m = e.onRight,
      y = e.onLeft,
      x = e.onUp,
      _ = e.onDown,
      w = e.onChangeX,
      S = e.onChangeY,
      k = e.onChange,
      T = e.onToggleX,
      E = e.onToggleY,
      R = e.onHover,
      D = e.onHoverEnd,
      z = e.onMove,
      I = e.ignoreCheck,
      Y = e.isNormalizer,
      q = e.onGestureStart,
      H = e.onGestureEnd,
      X = e.onWheel,
      W = e.onEnable,
      G = e.onDisable,
      V = e.onClick,
      U = e.scrollSpeed,
      j = e.capture,
      Q = e.allowClicks,
      $ = e.lockAxis,
      Z = e.onLockAxis;
    function $e() {
      return ye = Ye();
    }
    function _e(e, t) {
      return (se.event = e) && u && ~u.indexOf(e.target) || t && ge && "touch" !== e.pointerType || I && I(e, t);
    }
    function bf() {
      var e = se.deltaX = N(be),
        t = se.deltaY = N(me),
        r = Math.abs(e) >= o,
        n = Math.abs(t) >= o;
      k && (r || n) && k(se, e, t, be, me), r && (m && 0 < se.deltaX && m(se), y && se.deltaX < 0 && y(se), w && w(se), T && se.deltaX < 0 != le < 0 && T(se), le = se.deltaX, be[0] = be[1] = be[2] = 0), n && (_ && 0 < se.deltaY && _(se), x && se.deltaY < 0 && x(se), S && S(se), E && se.deltaY < 0 != ce < 0 && E(se), ce = se.deltaY, me[0] = me[1] = me[2] = 0), (ne || re) && (z && z(se), re && (h(se), re = !1), ne = !1), ie && !(ie = !1) && Z && Z(se), oe && (X(se), oe = !1), ee = 0;
    }
    function cf(e, t, r) {
      be[r] += e, me[r] += t, se._vx.update(e), se._vy.update(t), n ? ee = ee || requestAnimationFrame(bf) : bf();
    }
    function df(e, t) {
      $ && !ae && (se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y", ie = !0), "y" !== ae && (be[2] += e, se._vx.update(e, !0)), "x" !== ae && (me[2] += t, se._vy.update(t, !0)), n ? ee = ee || requestAnimationFrame(bf) : bf();
    }
    function ef(e) {
      if (!_e(e, 1)) {
        var t = (e = M(e, s)).clientX,
          r = e.clientY,
          n = t - se.x,
          o = r - se.y,
          i = se.isDragging;
        se.x = t, se.y = r, (i || Math.abs(se.startX - t) >= a || Math.abs(se.startY - r) >= a) && (h && (re = !0), i || (se.isDragging = !0), df(n, o), i || p && p(se));
      }
    }
    function hf(e) {
      return e.touches && 1 < e.touches.length && (se.isGesturing = !0) && q(e, se.isDragging);
    }
    function jf() {
      return (se.isGesturing = !1) || H(se);
    }
    function kf(e) {
      if (!_e(e)) {
        var t = ue(),
          r = fe();
        cf((t - de) * U, (r - pe) * U, 1), de = t, pe = r, l && te.restart(!0);
      }
    }
    function lf(e) {
      if (!_e(e)) {
        e = M(e, s), X && (oe = !0);
        var t = (1 === e.deltaMode ? r : 2 === e.deltaMode ? Te.innerHeight : 1) * f;
        cf(e.deltaX * t, e.deltaY * t, 0), l && !Y && te.restart(!0);
      }
    }
    function mf(e) {
      if (!_e(e)) {
        var t = e.clientX,
          r = e.clientY,
          n = t - se.x,
          o = r - se.y;
        se.x = t, se.y = r, ne = !0, (n || o) && df(n, o);
      }
    }
    function nf(e) {
      se.event = e, R(se);
    }
    function of(e) {
      se.event = e, D(se);
    }
    function pf(e) {
      return _e(e) || M(e, s) && V(se);
    }
    this.target = i = J(i) || Pe, this.vars = e, u = u && Se.utils.toArray(u), o = o || 1e-9, a = a || 0, f = f || 1, U = U || 1, t = t || "wheel,touch,pointer", n = !1 !== n, r = r || parseFloat(Te.getComputedStyle(Me).lineHeight) || 22;
    var ee,
      te,
      re,
      ne,
      oe,
      ie,
      ae,
      se = this,
      le = 0,
      ce = 0,
      ue = K(i, qe),
      fe = K(i, He),
      de = ue(),
      pe = fe(),
      ge = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === Be[0],
      he = A(i),
      ve = i.ownerDocument || Ce,
      be = [0, 0, 0],
      me = [0, 0, 0],
      ye = 0,
      xe = se.onPress = function (e) {
        _e(e, 1) || e && e.button || (se.axis = ae = null, te.pause(), se.isPressed = !0, e = M(e), le = ce = 0, se.startX = se.x = e.clientX, se.startY = se.y = e.clientY, se._vx.reset(), se._vy.reset(), B(Y ? i : ve, Be[1], ef, s, !0), se.deltaX = se.deltaY = 0, v && v(se));
      },
      we = se.onRelease = function (t) {
        if (!_e(t, 1)) {
          C(Y ? i : ve, Be[1], ef, !0);
          var e = !isNaN(se.y - se.startY),
            r = se.isDragging && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY)),
            n = M(t);
          !r && e && (se._vx.reset(), se._vy.reset(), s && Q && Se.delayedCall(.08, function () {
            if (300 < Ye() - ye && !t.defaultPrevented) if (t.target.click) t.target.click();else if (ve.createEvent) {
              var e = ve.createEvent("MouseEvents");
              e.initMouseEvent("click", !0, !0, Te, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e);
            }
          })), se.isDragging = se.isGesturing = se.isPressed = !1, l && !Y && te.restart(!0), g && r && g(se), b && b(se, r);
        }
      };
    te = se._dc = Se.delayedCall(c || .25, function onStopFunc() {
      se._vx.reset(), se._vy.reset(), te.pause(), l && l(se);
    }).pause(), se.deltaX = se.deltaY = 0, se._vx = L(0, 50, !0), se._vy = L(0, 50, !0), se.scrollX = ue, se.scrollY = fe, se.isDragging = se.isGesturing = se.isPressed = !1, De(this), se.enable = function (e) {
      return se.isEnabled || (B(he ? ve : i, "scroll", F), 0 <= t.indexOf("scroll") && B(he ? ve : i, "scroll", kf, s, j), 0 <= t.indexOf("wheel") && B(i, "wheel", lf, s, j), (0 <= t.indexOf("touch") && Ee || 0 <= t.indexOf("pointer")) && (B(i, Be[0], xe, s, j), B(ve, Be[2], we), B(ve, Be[3], we), Q && B(i, "click", $e, !1, !0), V && B(i, "click", pf), q && B(ve, "gesturestart", hf), H && B(ve, "gestureend", jf), R && B(i, Oe + "enter", nf), D && B(i, Oe + "leave", of), z && B(i, Oe + "move", mf)), se.isEnabled = !0, e && e.type && xe(e), W && W(se)), se;
    }, se.disable = function () {
      se.isEnabled && (Fe.filter(function (e) {
        return e !== se && A(e.target);
      }).length || C(he ? ve : i, "scroll", F), se.isPressed && (se._vx.reset(), se._vy.reset(), C(Y ? i : ve, Be[1], ef, !0)), C(he ? ve : i, "scroll", kf, j), C(i, "wheel", lf, j), C(i, Be[0], xe, j), C(ve, Be[2], we), C(ve, Be[3], we), C(i, "click", $e, !0), C(i, "click", pf), C(ve, "gesturestart", hf), C(ve, "gestureend", jf), C(i, Oe + "enter", nf), C(i, Oe + "leave", of), C(i, Oe + "move", mf), se.isEnabled = se.isPressed = se.isDragging = !1, G && G(se));
    }, se.kill = se.revert = function () {
      se.disable();
      var e = Fe.indexOf(se);
      0 <= e && Fe.splice(e, 1), Re === se && (Re = 0);
    }, Fe.push(se), Y && A(i) && (Re = se), se.enable(d);
  }, function _createClass(e, t, r) {
    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
  }(Observer, [{
    key: "velocityX",
    get: function get() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function get() {
      return this._vy.getVelocity();
    }
  }]), Observer);
  function Observer(e) {
    this.init(e);
  }
  E.version = "3.12.2", E.create = function (e) {
    return new E(e);
  }, E.register = P, E.getAll = function () {
    return Fe.slice();
  }, E.getById = function (t) {
    return Fe.filter(function (e) {
      return e.vars.id === t;
    })[0];
  }, r() && Se.registerPlugin(E);
  function Aa(e, t, r) {
    var n = ct(e) && ("clamp(" === e.substr(0, 6) || -1 < e.indexOf("max"));
    return (r["_" + t + "Clamp"] = n) ? e.substr(6, e.length - 7) : e;
  }
  function Ba(e, t) {
    return !t || ct(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")";
  }
  function Da() {
    return Ke = 1;
  }
  function Ea() {
    return Ke = 0;
  }
  function Fa(e) {
    return e;
  }
  function Ga(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }
  function Ha() {
    return "undefined" != typeof window;
  }
  function Ia() {
    return Le || Ha() && (Le = window.gsap) && Le.registerPlugin && Le;
  }
  function Ja(e) {
    return !!~l.indexOf(e);
  }
  function Ka(e) {
    return ("Height" === e ? S : Ne["inner" + e]) || Je["client" + e] || We["client" + e];
  }
  function La(e) {
    return z(e, "getBoundingClientRect") || (Ja(e) ? function () {
      return Ot.width = Ne.innerWidth, Ot.height = S, Ot;
    } : function () {
      return _t(e);
    });
  }
  function Oa(e, t) {
    var r = t.s,
      n = t.d2,
      o = t.d,
      i = t.a;
    return Math.max(0, (r = "scroll" + n) && (i = z(e, r)) ? i() - La(e)()[o] : Ja(e) ? (Je[r] || We[r]) - Ka(n) : e[r] - e["offset" + n]);
  }
  function Pa(e, t) {
    for (var r = 0; r < g.length; r += 3) t && !~t.indexOf(g[r + 1]) || e(g[r], g[r + 1], g[r + 2]);
  }
  function Ra(e) {
    return "function" == typeof e;
  }
  function Sa(e) {
    return "number" == typeof e;
  }
  function Ta(e) {
    return "object" == _typeof(e);
  }
  function Ua(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause();
  }
  function Va(e, t) {
    if (e.enabled) {
      var r = t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  }
  function kb(e) {
    return Ne.getComputedStyle(e);
  }
  function mb(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  }
  function ob(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  }
  function pb(e) {
    var t,
      r = [],
      n = e.labels,
      o = e.duration();
    for (t in n) r.push(n[t] / o);
    return r;
  }
  function rb(o) {
    var i = Le.utils.snap(o),
      a = Array.isArray(o) && o.slice(0).sort(function (e, t) {
        return e - t;
      });
    return a ? function (e, t, r) {
      var n;
      if (void 0 === r && (r = .001), !t) return i(e);
      if (0 < t) {
        for (e -= r, n = 0; n < a.length; n++) if (a[n] >= e) return a[n];
        return a[n - 1];
      }
      for (n = a.length, e += r; n--;) if (a[n] <= e) return a[n];
      return a[0];
    } : function (e, t, r) {
      void 0 === r && (r = .001);
      var n = i(e);
      return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : i(t < 0 ? e - o : e + o);
    };
  }
  function tb(t, r, e, n) {
    return e.split(",").forEach(function (e) {
      return t(r, e, n);
    });
  }
  function ub(e, t, r, n, o) {
    return e.addEventListener(t, r, {
      passive: !n,
      capture: !!o
    });
  }
  function vb(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function wb(e, t, r) {
    (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r));
  }
  function Ab(e, t) {
    if (ct(e)) {
      var r = e.indexOf("="),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in q ? q[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
    }
    return e;
  }
  function Bb(e, t, r, n, o, i, a, s) {
    var l = o.startColor,
      c = o.endColor,
      u = o.fontSize,
      f = o.indent,
      d = o.fontWeight,
      p = Xe.createElement("div"),
      g = Ja(r) || "fixed" === z(r, "pinType"),
      h = -1 !== e.indexOf("scroller"),
      v = g ? We : r,
      b = -1 !== e.indexOf("start"),
      m = b ? l : c,
      y = "border-color:" + m + ";font-size:" + u + ";color:" + m + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return y += "position:" + ((h || s) && g ? "fixed;" : "absolute;"), !h && !s && g || (y += (n === He ? D : I) + ":" + (i + parseFloat(f)) + "px;"), a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = b, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || 0 === t ? e + "-" + t : e, v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p), p._offset = p["offset" + n.op.d2], H(p, 0, n, b), p;
  }
  function Gb() {
    return 34 < at() - st && (k = k || requestAnimationFrame(Q));
  }
  function Hb() {
    v && v.isPressed && !(v.startX > We.clientWidth) || (ze.cache++, v ? k = k || requestAnimationFrame(Q) : Q(), st || V("scrollStart"), st = at());
  }
  function Ib() {
    y = Ne.innerWidth, m = Ne.innerHeight;
  }
  function Jb() {
    ze.cache++, je || h || Xe.fullscreenElement || Xe.webkitFullscreenElement || b && y === Ne.innerWidth && !(Math.abs(Ne.innerHeight - m) > .25 * Ne.innerHeight) || c.restart(!0);
  }
  function Mb() {
    return vb(re, "scrollEnd", Mb) || Pt(!0);
  }
  function Pb(e) {
    for (var t = 0; t < U.length; t += 5) (!e || U[t + 4] && U[t + 4].query === e) && (U[t].style.cssText = U[t + 1], U[t].getBBox && U[t].setAttribute("transform", U[t + 2] || ""), U[t + 3].uncache = 1);
  }
  function Qb(e, t) {
    var r;
    for (Qe = 0; Qe < kt.length; Qe++) !(r = kt[Qe]) || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
    t && Pb(t), t || V("revert");
  }
  function Rb(e, t) {
    ze.cache++, !t && rt || ze.forEach(function (e) {
      return Ra(e) && e.cacheID++ && (e.rec = 0);
    }), ct(e) && (Ne.history.scrollRestoration = _ = e);
  }
  function Wb() {
    We.appendChild(w), S = w.offsetHeight || Ne.innerHeight, We.removeChild(w);
  }
  function dc(e, t, r, n) {
    if (!e._gsap.swappedIn) {
      for (var o, i = $.length, a = t.style, s = e.style; i--;) a[o = $[i]] = r[o];
      a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[I] = s[D] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[ft] = ob(e, qe) + xt, a[dt] = ob(e, He) + xt, a[bt] = s[mt] = s.top = s.left = "0", Et(n), s[ft] = s.maxWidth = r[ft], s[dt] = s.maxHeight = r[dt], s[bt] = r[bt], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0;
    }
  }
  function gc(e) {
    for (var t = Z.length, r = e.style, n = [], o = 0; o < t; o++) n.push(Z[o], r[Z[o]]);
    return n.t = e, n;
  }
  function jc(e, t, r, n, o, i, a, s, l, c, u, f, d, p) {
    Ra(e) && (e = e(s)), ct(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? Ab("0" + e.substr(3), r) : 0));
    var g,
      h,
      v,
      b = d ? d.time() : 0;
    if (d && d.seek(0), isNaN(e) || (e = +e), Sa(e)) d && (e = Le.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, f, e)), a && H(a, r, n, !0);else {
      Ra(t) && (t = t(s));
      var m,
        y,
        x,
        _,
        w = (e || "0").split(" ");
      v = J(t, s) || We, (m = _t(v) || {}) && (m.left || m.top) || "none" !== kb(v).display || (_ = v.style.display, v.style.display = "block", m = _t(v), _ ? v.style.display = _ : v.style.removeProperty("display")), y = Ab(w[0], m[n.d]), x = Ab(w[1] || "0", r), e = m[n.p] - l[n.p] - c + y + o - x, a && H(a, x, n, r - x < 20 || a._isStart && 20 < x), r -= r - x;
    }
    if (p && (s[p] = e || -.001, e < 0 && (e = 0)), i) {
      var S = e + r,
        k = i._isStart;
      g = "scroll" + n.d2, H(i, S, n, k && 20 < S || !k && (u ? Math.max(We[g], Je[g]) : i.parentNode[g]) <= S + 1), u && (l = _t(a), u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + xt));
    }
    return d && v && (g = _t(v), d.seek(f), h = _t(v), d._caScrollDist = g[n.p] - h[n.p], e = e / d._caScrollDist * f), d && d.seek(b), d ? e : Math.round(e);
  }
  function lc(e, t, r, n) {
    if (e.parentNode !== t) {
      var o,
        i,
        a = e.style;
      if (t === We) {
        for (o in e._stOrig = a.cssText, i = kb(e)) +o || te.test(o) || !i[o] || "string" != typeof a[o] || "0" === o || (a[o] = i[o]);
        a.top = r, a.left = n;
      } else a.cssText = e._stOrig;
      Le.core.getCache(e).uncache = 1, t.appendChild(e);
    }
  }
  function mc(r, e, n) {
    var o = e,
      i = o;
    return function (e) {
      var t = Math.round(r());
      return t !== o && t !== i && 3 < Math.abs(t - o) && 3 < Math.abs(t - i) && (e = t, n && n()), i = o, o = e;
    };
  }
  function nc(e, t, r) {
    var n = {};
    n[t.p] = "+=" + r, Le.set(e, n);
  }
  function oc(c, e) {
    function uk(e, t, r, n, o) {
      var i = uk.tween,
        a = t.onComplete,
        s = {};
      r = r || u();
      var l = mc(u, r, function () {
        i.kill(), uk.tween = 0;
      });
      return o = n && o || 0, n = n || e - r, i && i.kill(), t[f] = e, (t.modifiers = s)[f] = function () {
        return l(r + n * i.ratio + o * i.ratio * i.ratio);
      }, t.onUpdate = function () {
        ze.cache++, Q();
      }, t.onComplete = function () {
        uk.tween = 0, a && a.call(i);
      }, i = uk.tween = Le.to(c, t);
    }
    var u = K(c, e),
      f = "_scroll" + e.p2;
    return (c[f] = u).wheelHandler = function () {
      return uk.tween && uk.tween.kill() && (uk.tween = 0);
    }, ub(c, "wheel", u.wheelHandler), re.isTouch && ub(c, "touchmove", u.wheelHandler), uk;
  }
  var Le,
    s,
    Ne,
    Xe,
    Je,
    We,
    l,
    c,
    Ge,
    Ve,
    Ue,
    u,
    je,
    Ke,
    f,
    Qe,
    d,
    p,
    g,
    Ze,
    et,
    h,
    v,
    b,
    m,
    y,
    R,
    x,
    _,
    w,
    S,
    tt,
    k,
    rt,
    nt,
    ot,
    it = 1,
    at = Date.now,
    T = at(),
    st = 0,
    lt = 0,
    ct = function _isString(e) {
      return "string" == typeof e;
    },
    ut = Math.abs,
    D = "right",
    I = "bottom",
    ft = "width",
    dt = "height",
    pt = "Right",
    gt = "Left",
    ht = "Top",
    vt = "Bottom",
    bt = "padding",
    mt = "margin",
    yt = "Width",
    Y = "Height",
    xt = "px",
    _t = function _getBounds(e, t) {
      var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== kb(e)[f] && Le.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0
        }).progress(1),
        n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    wt = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal"
    },
    St = {
      toggleActions: "play",
      anticipatePin: 0
    },
    q = {
      top: 0,
      left: 0,
      center: .5,
      bottom: 1,
      right: 1
    },
    H = function _positionMarker(e, t, r, n) {
      var o = {
          display: "block"
        },
        i = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
      e._isFlipped = n, o[r.a + "Percent"] = n ? -100 : 0, o[r.a] = n ? "1px" : 0, o["border" + i + yt] = 1, o["border" + a + yt] = 0, o[r.p] = t + "px", Le.set(e, o);
    },
    kt = [],
    Tt = {},
    X = {},
    W = [],
    V = function _dispatch(e) {
      return X[e] && X[e].map(function (e) {
        return e();
      }) || W;
    },
    U = [],
    Ct = 0,
    Pt = function _refreshAll(e, t) {
      if (!st || e) {
        Wb(), rt = re.isRefreshing = !0, ze.forEach(function (e) {
          return Ra(e) && ++e.cacheID && (e.rec = e());
        });
        var r = V("refreshInit");
        Ze && re.sort(), t || Qb(), ze.forEach(function (e) {
          Ra(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
        }), kt.slice(0).forEach(function (e) {
          return e.refresh();
        }), kt.forEach(function (e, t) {
          if (e._subPinOffset && e.pin) {
            var r = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
              n = e.pin[r];
            e.revert(!0, 1), e.adjustPinSpacing(e.pin[r] - n), e.refresh();
          }
        }), kt.forEach(function (e) {
          var t = Oa(e.scroller, e._dir);
          ("max" === e.vars.end || e._endClamp && e.end > t) && e.setPositions(e.start, Math.max(e.start + 1, t), !0);
        }), r.forEach(function (e) {
          return e && e.render && e.render(-1);
        }), ze.forEach(function (e) {
          Ra(e) && (e.smooth && requestAnimationFrame(function () {
            return e.target.style.scrollBehavior = "smooth";
          }), e.rec && e(e.rec));
        }), Rb(_, 1), c.pause(), Ct++, Q(rt = 2), kt.forEach(function (e) {
          return Ra(e.vars.onRefresh) && e.vars.onRefresh(e);
        }), rt = re.isRefreshing = !1, V("refresh");
      } else ub(re, "scrollEnd", Mb);
    },
    j = 0,
    Mt = 1,
    Q = function _updateAll(e) {
      if (!rt || 2 === e) {
        re.isUpdating = !0, ot && ot.update(0);
        var t = kt.length,
          r = at(),
          n = 50 <= r - T,
          o = t && kt[0].scroll();
        if (Mt = o < j ? -1 : 1, rt || (j = o), n && (st && !Ke && 200 < r - st && (st = 0, V("scrollEnd")), Ue = T, T = r), Mt < 0) {
          for (Qe = t; 0 < Qe--;) kt[Qe] && kt[Qe].update(0, n);
          Mt = 1;
        } else for (Qe = 0; Qe < t; Qe++) kt[Qe] && kt[Qe].update(0, n);
        re.isUpdating = !1;
      }
      k = 0;
    },
    $ = ["left", "top", I, D, mt + vt, mt + pt, mt + ht, mt + gt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    Z = $.concat([ft, dt, "boxSizing", "max" + yt, "max" + Y, "position", mt, bt, bt + ht, bt + pt, bt + vt, bt + gt]),
    ee = /([A-Z])/g,
    Et = function _setState(e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          o = e.length,
          i = 0;
        for ((e.t._gsap || Le.core.getCache(e.t)).uncache = 1; i < o; i += 2) r = e[i + 1], t = e[i], r ? n[t] = r : n[t] && n.removeProperty(t.replace(ee, "-$1").toLowerCase());
      }
    },
    Ot = {
      left: 0,
      top: 0
    },
    te = /(webkit|moz|length|cssText|inset)/i,
    re = (ScrollTrigger.prototype.init = function init(E, O) {
      if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), lt) {
        var A,
          n,
          p,
          R,
          B,
          D,
          F,
          I,
          Y,
          q,
          H,
          e,
          L,
          N,
          X,
          W,
          G,
          V,
          t,
          U,
          b,
          j,
          Q,
          m,
          $,
          y,
          Z,
          x,
          r,
          _,
          w,
          ee,
          o,
          g,
          te,
          re,
          ne,
          S,
          i,
          k = (E = mb(ct(E) || Sa(E) || E.nodeType ? {
            trigger: E
          } : E, St)).onUpdate,
          T = E.toggleClass,
          a = E.id,
          C = E.onToggle,
          oe = E.onRefresh,
          P = E.scrub,
          ie = E.trigger,
          ae = E.pin,
          se = E.pinSpacing,
          le = E.invalidateOnRefresh,
          M = E.anticipatePin,
          s = E.onScrubComplete,
          h = E.onSnapComplete,
          ce = E.once,
          ue = E.snap,
          fe = E.pinReparent,
          l = E.pinSpacer,
          de = E.containerAnimation,
          pe = E.fastScrollEnd,
          ge = E.preventOverlaps,
          he = E.horizontal || E.containerAnimation && !1 !== E.horizontal ? qe : He,
          ve = !P && 0 !== P,
          be = J(E.scroller || Ne),
          c = Le.core.getCache(be),
          me = Ja(be),
          ye = "fixed" === ("pinType" in E ? E.pinType : z(be, "pinType") || me && "fixed"),
          xe = [E.onEnter, E.onLeave, E.onEnterBack, E.onLeaveBack],
          _e = ve && E.toggleActions.split(" "),
          we = "markers" in E ? E.markers : St.markers,
          Se = me ? 0 : parseFloat(kb(be)["border" + he.p2 + yt]) || 0,
          ke = this,
          Te = E.onRefreshInit && function () {
            return E.onRefreshInit(ke);
          },
          Ce = function _getSizeFunc(e, t, r) {
            var n = r.d,
              o = r.d2,
              i = r.a;
            return (i = z(e, "getBoundingClientRect")) ? function () {
              return i()[n];
            } : function () {
              return (t ? Ka(o) : e["client" + o]) || 0;
            };
          }(be, me, he),
          Pe = function _getOffsetsFunc(e, t) {
            return !t || ~Ie.indexOf(e) ? La(e) : function () {
              return Ot;
            };
          }(be, me),
          Me = 0,
          Ee = 0,
          Oe = 0,
          Ae = K(be, he);
        if (ke._startClamp = ke._endClamp = !1, ke._dir = he, M *= 45, ke.scroller = be, ke.scroll = de ? de.time.bind(de) : Ae, R = Ae(), ke.vars = E, O = O || E.animation, "refreshPriority" in E && (Ze = 1, -9999 === E.refreshPriority && (ot = ke)), c.tweenScroll = c.tweenScroll || {
          top: oc(be, He),
          left: oc(be, qe)
        }, ke.tweenTo = A = c.tweenScroll[he.p], ke.scrubDuration = function (e) {
          (o = Sa(e) && e) ? ee ? ee.duration(e) : ee = Le.to(O, {
            ease: "expo",
            totalProgress: "+=0",
            duration: o,
            paused: !0,
            onComplete: function onComplete() {
              return s && s(ke);
            }
          }) : (ee && ee.progress(1).kill(), ee = 0);
        }, O && (O.vars.lazy = !1, O._initted && !ke.isReverted || !1 !== O.vars.immediateRender && !1 !== E.immediateRender && O.duration() && O.render(0, !0, !0), ke.animation = O.pause(), (O.scrollTrigger = ke).scrubDuration(P), _ = 0, a = a || O.vars.id), ue && (Ta(ue) && !ue.push || (ue = {
          snapTo: ue
        }), "scrollBehavior" in We.style && Le.set(me ? [We, Je] : be, {
          scrollBehavior: "auto"
        }), ze.forEach(function (e) {
          return Ra(e) && e.target === (me ? Xe.scrollingElement || Je : be) && (e.smooth = !1);
        }), p = Ra(ue.snapTo) ? ue.snapTo : "labels" === ue.snapTo ? function _getClosestLabel(t) {
          return function (e) {
            return Le.utils.snap(pb(t), e);
          };
        }(O) : "labelsDirectional" === ue.snapTo ? function _getLabelAtDirection(r) {
          return function (e, t) {
            return rb(pb(r))(e, t.direction);
          };
        }(O) : !1 !== ue.directional ? function (e, t) {
          return rb(ue.snapTo)(e, at() - Ee < 500 ? 0 : t.direction);
        } : Le.utils.snap(ue.snapTo), g = ue.duration || {
          min: .1,
          max: 2
        }, g = Ta(g) ? Ve(g.min, g.max) : Ve(g, g), te = Le.delayedCall(ue.delay || o / 2 || .1, function () {
          var e = Ae(),
            t = at() - Ee < 500,
            r = A.tween;
          if (!(t || Math.abs(ke.getVelocity()) < 10) || r || Ke || Me === e) ke.isActive && Me !== e && te.restart(!0);else {
            var n = (e - D) / N,
              o = O && !ve ? O.totalProgress() : n,
              i = t ? 0 : (o - w) / (at() - Ue) * 1e3 || 0,
              a = Le.utils.clamp(-n, 1 - n, ut(i / 2) * i / .185),
              s = n + (!1 === ue.inertia ? 0 : a),
              l = Ve(0, 1, p(s, ke)),
              c = Math.round(D + l * N),
              u = ue.onStart,
              f = ue.onInterrupt,
              d = ue.onComplete;
            if (e <= F && D <= e && c !== e) {
              if (r && !r._initted && r.data <= ut(c - e)) return;
              !1 === ue.inertia && (a = l - n), A(c, {
                duration: g(ut(.185 * Math.max(ut(s - o), ut(l - o)) / i / .05 || 0)),
                ease: ue.ease || "power3",
                data: ut(c - e),
                onInterrupt: function onInterrupt() {
                  return te.restart(!0) && f && f(ke);
                },
                onComplete: function onComplete() {
                  ke.update(), Me = Ae(), _ = w = O && !ve ? O.totalProgress() : ke.progress, h && h(ke), d && d(ke);
                }
              }, e, a * N, c - e - a * N), u && u(ke, A.tween);
            }
          }
        }).pause()), a && (Tt[a] = ke), i = (i = (ie = ke.trigger = J(ie || !0 !== ae && ae)) && ie._gsap && ie._gsap.stRevert) && i(ke), ae = !0 === ae ? ie : J(ae), ct(T) && (T = {
          targets: ie,
          className: T
        }), ae && (!1 === se || se === mt || (se = !(!se && ae.parentNode && ae.parentNode.style && "flex" === kb(ae.parentNode).display) && bt), ke.pin = ae, (n = Le.core.getCache(ae)).spacer ? X = n.pinState : (l && ((l = J(l)) && !l.nodeType && (l = l.current || l.nativeElement), n.spacerIsNative = !!l, l && (n.spacerState = gc(l))), n.spacer = V = l || Xe.createElement("div"), V.classList.add("pin-spacer"), a && V.classList.add("pin-spacer-" + a), n.pinState = X = gc(ae)), !1 !== E.force3D && Le.set(ae, {
          force3D: !0
        }), ke.spacer = V = n.spacer, r = kb(ae), m = r[se + he.os2], U = Le.getProperty(ae), b = Le.quickSetter(ae, he.a, xt), dc(ae, V, r), G = gc(ae)), we) {
          e = Ta(we) ? mb(we, wt) : wt, q = Bb("scroller-start", a, be, he, e, 0), H = Bb("scroller-end", a, be, he, e, 0, q), t = q["offset" + he.op.d2];
          var u = J(z(be, "content") || be);
          I = this.markerStart = Bb("start", a, u, he, e, t, 0, de), Y = this.markerEnd = Bb("end", a, u, he, e, t, 0, de), de && (S = Le.quickSetter([I, Y], he.a, xt)), ye || Ie.length && !0 === z(be, "fixedMarkers") || (function _makePositionable(e) {
            var t = kb(e).position;
            e.style.position = "absolute" === t || "fixed" === t ? t : "relative";
          }(me ? We : be), Le.set([q, H], {
            force3D: !0
          }), y = Le.quickSetter(q, he.a, xt), x = Le.quickSetter(H, he.a, xt));
        }
        if (de) {
          var f = de.vars.onUpdate,
            d = de.vars.onUpdateParams;
          de.eventCallback("onUpdate", function () {
            ke.update(0, 0, 1), f && f.apply(de, d || []);
          });
        }
        if (ke.previous = function () {
          return kt[kt.indexOf(ke) - 1];
        }, ke.next = function () {
          return kt[kt.indexOf(ke) + 1];
        }, ke.revert = function (e, t) {
          if (!t) return ke.kill(!0);
          var r = !1 !== e || !ke.enabled,
            n = je;
          r !== ke.isReverted && (r && (re = Math.max(Ae(), ke.scroll.rec || 0), Oe = ke.progress, ne = O && O.progress()), I && [I, Y, q, H].forEach(function (e) {
            return e.style.display = r ? "none" : "block";
          }), r && (je = ke).update(r), !ae || fe && ke.isActive || (r ? function _swapPinOut(e, t, r) {
            Et(r);
            var n = e._gsap;
            if (n.spacerIsNative) Et(n.spacerState);else if (e._gsap.swappedIn) {
              var o = t.parentNode;
              o && (o.insertBefore(e, t), o.removeChild(t));
            }
            e._gsap.swappedIn = !1;
          }(ae, V, X) : dc(ae, V, kb(ae), $)), r || ke.update(r), je = n, ke.isReverted = r);
        }, ke.refresh = function (e, t, r, n) {
          if (!je && ke.enabled || t) if (ae && e && st) ub(ScrollTrigger, "scrollEnd", Mb);else {
            !rt && Te && Te(ke), je = ke, A.tween && !r && (A.tween.kill(), A.tween = 0), ee && ee.pause(), le && O && O.revert({
              kill: !1
            }).invalidate(), ke.isReverted || ke.revert(!0, !0), ke._subPinOffset = !1;
            var o,
              i,
              a,
              s,
              l,
              c,
              u,
              f,
              d,
              p,
              g,
              h,
              v,
              b = Ce(),
              m = Pe(),
              y = de ? de.duration() : Oa(be, he),
              x = N <= .01,
              _ = 0,
              w = n || 0,
              S = Ta(r) ? r.end : E.end,
              k = E.endTrigger || ie,
              T = Ta(r) ? r.start : E.start || (0 !== E.start && ie ? ae ? "0 0" : "0 100%" : 0),
              C = ke.pinnedContainer = E.pinnedContainer && J(E.pinnedContainer, ke),
              P = ie && Math.max(0, kt.indexOf(ke)) || 0,
              M = P;
            for (we && Ta(r) && (h = Le.getProperty(q, he.p), v = Le.getProperty(H, he.p)); M--;) (c = kt[M]).end || c.refresh(0, 1) || (je = ke), !(u = c.pin) || u !== ie && u !== ae && u !== C || c.isReverted || ((p = p || []).unshift(c), c.revert(!0, !0)), c !== kt[M] && (P--, M--);
            for (Ra(T) && (T = T(ke)), T = Aa(T, "start", ke), D = jc(T, ie, b, he, Ae(), I, q, ke, m, Se, ye, y, de, ke._startClamp && "_startClamp") || (ae ? -.001 : 0), Ra(S) && (S = S(ke)), ct(S) && !S.indexOf("+=") && (~S.indexOf(" ") ? S = (ct(T) ? T.split(" ")[0] : "") + S : (_ = Ab(S.substr(2), b), S = ct(T) ? T : (de ? Le.utils.mapRange(0, de.duration(), de.scrollTrigger.start, de.scrollTrigger.end, D) : D) + _, k = ie)), S = Aa(S, "end", ke), F = Math.max(D, jc(S || (k ? "100% 0" : y), k, b, he, Ae() + _, Y, H, ke, m, Se, ye, y, de, ke._endClamp && "_endClamp")) || -.001, _ = 0, M = P; M--;) (u = (c = kt[M]).pin) && c.start - c._pinPush <= D && !de && 0 < c.end && (o = c.end - (ke._startClamp ? Math.max(0, c.start) : c.start), (u === ie && c.start - c._pinPush < D || u === C) && isNaN(T) && (_ += o * (1 - c.progress)), u === ae && (w += o));
            if (D += _, F += _, ke._startClamp && (ke._startClamp += _), ke._endClamp && !rt && (ke._endClamp = F || -.001, F = Math.min(F, Oa(be, he))), N = F - D || (D -= .01) && .001, x && (Oe = Le.utils.clamp(0, 1, Le.utils.normalize(D, F, re))), ke._pinPush = w, I && _ && ((o = {})[he.a] = "+=" + _, C && (o[he.p] = "-=" + Ae()), Le.set([I, Y], o)), ae) o = kb(ae), s = he === He, a = Ae(), j = parseFloat(U(he.a)) + w, !y && 1 < F && (g = {
              style: g = (me ? Xe.scrollingElement || Je : be).style,
              value: g["overflow" + he.a.toUpperCase()]
            }, me && "scroll" !== kb(We)["overflow" + he.a.toUpperCase()] && (g.style["overflow" + he.a.toUpperCase()] = "scroll")), dc(ae, V, o), G = gc(ae), i = _t(ae, !0), f = ye && K(be, s ? qe : He)(), se && (($ = [se + he.os2, N + w + xt]).t = V, (M = se === bt ? ob(ae, he) + N + w : 0) && $.push(he.d, M + xt), Et($), C && kt.forEach(function (e) {
              e.pin === C && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0);
            }), ye && Ae(re)), ye && ((l = {
              top: i.top + (s ? a - D : f) + xt,
              left: i.left + (s ? f : a - D) + xt,
              boxSizing: "border-box",
              position: "fixed"
            })[ft] = l.maxWidth = Math.ceil(i.width) + xt, l[dt] = l.maxHeight = Math.ceil(i.height) + xt, l[mt] = l[mt + ht] = l[mt + pt] = l[mt + vt] = l[mt + gt] = "0", l[bt] = o[bt], l[bt + ht] = o[bt + ht], l[bt + pt] = o[bt + pt], l[bt + vt] = o[bt + vt], l[bt + gt] = o[bt + gt], W = function _copyState(e, t, r) {
              for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2) n = e[a], o.push(n, n in t ? t[n] : e[a + 1]);
              return o.t = e.t, o;
            }(X, l, fe), rt && Ae(0)), O ? (d = O._initted, et(1), O.render(O.duration(), !0, !0), Q = U(he.a) - j + N + w, Z = 1 < Math.abs(N - Q), ye && Z && W.splice(W.length - 2, 2), O.render(0, !0, !0), d || O.invalidate(!0), O.parent || O.totalTime(O.totalTime()), et(0)) : Q = N, g && (g.value ? g.style["overflow" + he.a.toUpperCase()] = g.value : g.style.removeProperty("overflow-" + he.a));else if (ie && Ae() && !de) for (i = ie.parentNode; i && i !== We;) i._pinOffset && (D -= i._pinOffset, F -= i._pinOffset), i = i.parentNode;
            p && p.forEach(function (e) {
              return e.revert(!1, !0);
            }), ke.start = D, ke.end = F, R = B = rt ? re : Ae(), de || rt || (R < re && Ae(re), ke.scroll.rec = 0), ke.revert(!1, !0), Ee = at(), te && (Me = -1, te.restart(!0)), je = 0, O && ve && (O._initted || ne) && O.progress() !== ne && O.progress(ne || 0, !0).render(O.time(), !0, !0), (x || Oe !== ke.progress || de) && (O && !ve && O.totalProgress(de && D < -.001 && !Oe ? Le.utils.normalize(D, F, 0) : Oe, !0), ke.progress = x || (R - D) / N === Oe ? 0 : Oe), ae && se && (V._pinOffset = Math.round(ke.progress * Q)), ee && ee.invalidate(), isNaN(h) || (h -= Le.getProperty(q, he.p), v -= Le.getProperty(H, he.p), nc(q, he, h), nc(I, he, h - (n || 0)), nc(H, he, v), nc(Y, he, v - (n || 0))), x && !rt && ke.update(), !oe || rt || L || (L = !0, oe(ke), L = !1);
          }
        }, ke.getVelocity = function () {
          return (Ae() - B) / (at() - Ue) * 1e3 || 0;
        }, ke.endAnimation = function () {
          Ua(ke.callbackAnimation), O && (ee ? ee.progress(1) : O.paused() ? ve || Ua(O, ke.direction < 0, 1) : Ua(O, O.reversed()));
        }, ke.labelToScroll = function (e) {
          return O && O.labels && (D || ke.refresh() || D) + O.labels[e] / O.duration() * N || 0;
        }, ke.getTrailing = function (t) {
          var e = kt.indexOf(ke),
            r = 0 < ke.direction ? kt.slice(0, e).reverse() : kt.slice(e + 1);
          return (ct(t) ? r.filter(function (e) {
            return e.vars.preventOverlaps === t;
          }) : r).filter(function (e) {
            return 0 < ke.direction ? e.end <= D : e.start >= F;
          });
        }, ke.update = function (e, t, r) {
          if (!de || r || e) {
            var n,
              o,
              i,
              a,
              s,
              l,
              c,
              u = !0 === rt ? re : ke.scroll(),
              f = e ? 0 : (u - D) / N,
              d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
              p = ke.progress;
            if (t && (B = R, R = de ? Ae() : u, ue && (w = _, _ = O && !ve ? O.totalProgress() : d)), M && !d && ae && !je && !it && st && D < u + (u - B) / (at() - Ue) * M && (d = 1e-4), d !== p && ke.enabled) {
              if (a = (s = (n = ke.isActive = !!d && d < 1) != (!!p && p < 1)) || !!d != !!p, ke.direction = p < d ? 1 : -1, ke.progress = d, a && !je && (o = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3, ve && (i = !s && "none" !== _e[o + 1] && _e[o + 1] || _e[o], c = O && ("complete" === i || "reset" === i || i in O))), ge && (s || c) && (c || P || !O) && (Ra(ge) ? ge(ke) : ke.getTrailing(ge).forEach(function (e) {
                return e.endAnimation();
              })), ve || (!ee || je || it ? O && O.totalProgress(d, !(!je || !Ee && !e)) : (ee._dp._time - ee._start !== ee._time && ee.render(ee._dp._time - ee._start), ee.resetTo ? ee.resetTo("totalProgress", d, O._tTime / O._tDur) : (ee.vars.totalProgress = d, ee.invalidate().restart()))), ae) if (e && se && (V.style[se + he.os2] = m), ye) {
                if (a) {
                  if (l = !e && p < d && u < F + 1 && u + 1 >= Oa(be, he), fe) if (e || !n && !l) lc(ae, V);else {
                    var g = _t(ae, !0),
                      h = u - D;
                    lc(ae, We, g.top + (he === He ? h : 0) + xt, g.left + (he === He ? 0 : h) + xt);
                  }
                  Et(n || l ? W : G), Z && d < 1 && n || b(j + (1 !== d || l ? 0 : Q));
                }
              } else b(Ga(j + Q * d));
              !ue || A.tween || je || it || te.restart(!0), T && (s || ce && d && (d < 1 || !tt)) && Ge(T.targets).forEach(function (e) {
                return e.classList[n || ce ? "add" : "remove"](T.className);
              }), !k || ve || e || k(ke), a && !je ? (ve && (c && ("complete" === i ? O.pause().totalProgress(1) : "reset" === i ? O.restart(!0).pause() : "restart" === i ? O.restart(!0) : O[i]()), k && k(ke)), !s && tt || (C && s && Va(ke, C), xe[o] && Va(ke, xe[o]), ce && (1 === d ? ke.kill(!1, 1) : xe[o] = 0), s || xe[o = 1 === d ? 1 : 3] && Va(ke, xe[o])), pe && !n && Math.abs(ke.getVelocity()) > (Sa(pe) ? pe : 2500) && (Ua(ke.callbackAnimation), ee ? ee.progress(1) : Ua(O, "reverse" === i ? 1 : !d, 1))) : ve && k && !je && k(ke);
            }
            if (x) {
              var v = de ? u / de.duration() * (de._caScrollDist || 0) : u;
              y(v + (q._isFlipped ? 1 : 0)), x(v);
            }
            S && S(-u / de.duration() * (de._caScrollDist || 0));
          }
        }, ke.enable = function (e, t) {
          ke.enabled || (ke.enabled = !0, ub(be, "resize", Jb), me || ub(be, "scroll", Hb), Te && ub(ScrollTrigger, "refreshInit", Te), !1 !== e && (ke.progress = Oe = 0, R = B = Me = Ae()), !1 !== t && ke.refresh());
        }, ke.getTween = function (e) {
          return e && A ? A.tween : ee;
        }, ke.setPositions = function (e, t, r, n) {
          if (de) {
            var o = de.scrollTrigger,
              i = de.duration(),
              a = o.end - o.start;
            e = o.start + a * e / i, t = o.start + a * t / i;
          }
          ke.refresh(!1, !1, {
            start: Ba(e, r && !!ke._startClamp),
            end: Ba(t, r && !!ke._endClamp)
          }, n), ke.update();
        }, ke.adjustPinSpacing = function (e) {
          if ($ && e) {
            var t = $.indexOf(he.d) + 1;
            $[t] = parseFloat($[t]) + e + xt, $[1] = parseFloat($[1]) + e + xt, Et($);
          }
        }, ke.disable = function (e, t) {
          if (ke.enabled && (!1 !== e && ke.revert(!0, !0), ke.enabled = ke.isActive = !1, t || ee && ee.pause(), re = 0, n && (n.uncache = 1), Te && vb(ScrollTrigger, "refreshInit", Te), te && (te.pause(), A.tween && A.tween.kill() && (A.tween = 0)), !me)) {
            for (var r = kt.length; r--;) if (kt[r].scroller === be && kt[r] !== ke) return;
            vb(be, "resize", Jb), me || vb(be, "scroll", Hb);
          }
        }, ke.kill = function (e, t) {
          ke.disable(e, t), ee && !t && ee.kill(), a && delete Tt[a];
          var r = kt.indexOf(ke);
          0 <= r && kt.splice(r, 1), r === Qe && 0 < Mt && Qe--, r = 0, kt.forEach(function (e) {
            return e.scroller === ke.scroller && (r = 1);
          }), r || rt || (ke.scroll.rec = 0), O && (O.scrollTrigger = null, e && O.revert({
            kill: !1
          }), t || O.kill()), I && [I, Y, q, H].forEach(function (e) {
            return e.parentNode && e.parentNode.removeChild(e);
          }), ot === ke && (ot = 0), ae && (n && (n.uncache = 1), r = 0, kt.forEach(function (e) {
            return e.pin === ae && r++;
          }), r || (n.spacer = 0)), E.onKill && E.onKill(ke);
        }, kt.push(ke), ke.enable(!1, !1), i && i(ke), O && O.add && !N) {
          var v = ke.update;
          ke.update = function () {
            ke.update = v, D || F || ke.refresh();
          }, Le.delayedCall(.01, ke.update), N = .01, D = F = 0;
        } else ke.refresh();
        ae && function _queueRefreshAll() {
          if (nt !== Ct) {
            var e = nt = Ct;
            requestAnimationFrame(function () {
              return e === Ct && Pt(!0);
            });
          }
        }();
      } else this.update = this.refresh = this.kill = Fa;
    }, ScrollTrigger.register = function register(e) {
      return s || (Le = e || Ia(), Ha() && window.document && ScrollTrigger.enable(), s = lt), s;
    }, ScrollTrigger.defaults = function defaults(e) {
      if (e) for (var t in e) St[t] = e[t];
      return St;
    }, ScrollTrigger.disable = function disable(t, r) {
      lt = 0, kt.forEach(function (e) {
        return e[r ? "kill" : "disable"](t);
      }), vb(Ne, "wheel", Hb), vb(Xe, "scroll", Hb), clearInterval(u), vb(Xe, "touchcancel", Fa), vb(We, "touchstart", Fa), tb(vb, Xe, "pointerdown,touchstart,mousedown", Da), tb(vb, Xe, "pointerup,touchend,mouseup", Ea), c.kill(), Pa(vb);
      for (var e = 0; e < ze.length; e += 3) wb(vb, ze[e], ze[e + 1]), wb(vb, ze[e], ze[e + 2]);
    }, ScrollTrigger.enable = function enable() {
      if (Ne = window, Xe = document, Je = Xe.documentElement, We = Xe.body, Le && (Ge = Le.utils.toArray, Ve = Le.utils.clamp, x = Le.core.context || Fa, et = Le.core.suppressOverwrites || Fa, _ = Ne.history.scrollRestoration || "auto", j = Ne.pageYOffset, Le.core.globals("ScrollTrigger", ScrollTrigger), We)) {
        lt = 1, (w = document.createElement("div")).style.height = "100vh", w.style.position = "absolute", Wb(), function _rafBugFix() {
          return lt && requestAnimationFrame(_rafBugFix);
        }(), E.register(Le), ScrollTrigger.isTouch = E.isTouch, R = E.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ub(Ne, "wheel", Hb), l = [Ne, Xe, Je, We], Le.matchMedia ? (ScrollTrigger.matchMedia = function (e) {
          var t,
            r = Le.matchMedia();
          for (t in e) r.add(t, e[t]);
          return r;
        }, Le.addEventListener("matchMediaInit", function () {
          return Qb();
        }), Le.addEventListener("matchMediaRevert", function () {
          return Pb();
        }), Le.addEventListener("matchMedia", function () {
          Pt(0, 1), V("matchMedia");
        }), Le.matchMedia("(orientation: portrait)", function () {
          return Ib(), Ib;
        })) : console.warn("Requires GSAP 3.11.0 or later"), Ib(), ub(Xe, "scroll", Hb);
        var e,
          t,
          r = We.style,
          n = r.borderTopStyle,
          o = Le.core.Animation.prototype;
        for (o.revert || Object.defineProperty(o, "revert", {
          value: function value() {
            return this.time(-.01, !0);
          }
        }), r.borderTopStyle = "solid", e = _t(We), He.m = Math.round(e.top + He.sc()) || 0, qe.m = Math.round(e.left + qe.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), u = setInterval(Gb, 250), Le.delayedCall(.5, function () {
          return it = 0;
        }), ub(Xe, "touchcancel", Fa), ub(We, "touchstart", Fa), tb(ub, Xe, "pointerdown,touchstart,mousedown", Da), tb(ub, Xe, "pointerup,touchend,mouseup", Ea), f = Le.utils.checkPrefix("transform"), Z.push(f), s = at(), c = Le.delayedCall(.2, Pt).pause(), g = [Xe, "visibilitychange", function () {
          var e = Ne.innerWidth,
            t = Ne.innerHeight;
          Xe.hidden ? (d = e, p = t) : d === e && p === t || Jb();
        }, Xe, "DOMContentLoaded", Pt, Ne, "load", Pt, Ne, "resize", Jb], Pa(ub), kt.forEach(function (e) {
          return e.enable(0, 1);
        }), t = 0; t < ze.length; t += 3) wb(vb, ze[t], ze[t + 1]), wb(vb, ze[t], ze[t + 2]);
      }
    }, ScrollTrigger.config = function config(e) {
      "limitCallbacks" in e && (tt = !!e.limitCallbacks);
      var t = e.syncInterval;
      t && clearInterval(u) || (u = t) && setInterval(Gb, t), "ignoreMobileResize" in e && (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Pa(vb) || Pa(ub, e.autoRefreshEvents || "none"), h = -1 === (e.autoRefreshEvents + "").indexOf("resize"));
    }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
      var r = J(e),
        n = ze.indexOf(r),
        o = Ja(r);
      ~n && ze.splice(n, o ? 6 : 2), t && (o ? Ie.unshift(Ne, t, We, t, Je, t) : Ie.unshift(r, t));
    }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
      kt.forEach(function (e) {
        return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
      });
    }, ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
      var n = (ct(e) ? J(e) : e).getBoundingClientRect(),
        o = n[r ? ft : dt] * t || 0;
      return r ? 0 < n.right - o && n.left + o < Ne.innerWidth : 0 < n.bottom - o && n.top + o < Ne.innerHeight;
    }, ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
      ct(e) && (e = J(e));
      var n = e.getBoundingClientRect(),
        o = n[r ? ft : dt],
        i = null == t ? o / 2 : t in q ? q[t] * o : ~t.indexOf("%") ? parseFloat(t) * o / 100 : parseFloat(t) || 0;
      return r ? (n.left + i) / Ne.innerWidth : (n.top + i) / Ne.innerHeight;
    }, ScrollTrigger.killAll = function killAll(e) {
      if (kt.slice(0).forEach(function (e) {
        return "ScrollSmoother" !== e.vars.id && e.kill();
      }), !0 !== e) {
        var t = X.killAll || [];
        X = {}, t.forEach(function (e) {
          return e();
        });
      }
    }, ScrollTrigger);
  function ScrollTrigger(e, t) {
    s || ScrollTrigger.register(Le) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), x(this), this.init(e, t);
  }
  re.version = "3.12.2", re.saveStyles = function (e) {
    return e ? Ge(e).forEach(function (e) {
      if (e && e.style) {
        var t = U.indexOf(e);
        0 <= t && U.splice(t, 5), U.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Le.core.getCache(e), x());
      }
    }) : U;
  }, re.revert = function (e, t) {
    return Qb(!e, t);
  }, re.create = function (e, t) {
    return new re(e, t);
  }, re.refresh = function (e) {
    return e ? Jb() : (s || re.register()) && Pt(!0);
  }, re.update = function (e) {
    return ++ze.cache && Q(!0 === e ? 2 : 0);
  }, re.clearScrollMemory = Rb, re.maxScroll = function (e, t) {
    return Oa(e, t ? qe : He);
  }, re.getScrollFunc = function (e, t) {
    return K(J(e), t ? qe : He);
  }, re.getById = function (e) {
    return Tt[e];
  }, re.getAll = function () {
    return kt.filter(function (e) {
      return "ScrollSmoother" !== e.vars.id;
    });
  }, re.isScrolling = function () {
    return !!st;
  }, re.snapDirectional = rb, re.addEventListener = function (e, t) {
    var r = X[e] || (X[e] = []);
    ~r.indexOf(t) || r.push(t);
  }, re.removeEventListener = function (e, t) {
    var r = X[e],
      n = r && r.indexOf(t);
    0 <= n && r.splice(n, 1);
  }, re.batch = function (e, t) {
    function up(e, t) {
      var r = [],
        n = [],
        o = Le.delayedCall(i, function () {
          t(r, n), r = [], n = [];
        }).pause();
      return function (e) {
        r.length || o.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && o.progress(1);
      };
    }
    var r,
      n = [],
      o = {},
      i = t.interval || .016,
      a = t.batchMax || 1e9;
    for (r in t) o[r] = "on" === r.substr(0, 2) && Ra(t[r]) && "onRefreshInit" !== r ? up(0, t[r]) : t[r];
    return Ra(a) && (a = a(), ub(re, "refresh", function () {
      return a = t.batchMax();
    })), Ge(e).forEach(function (e) {
      var t = {};
      for (r in o) t[r] = o[r];
      t.trigger = e, n.push(re.create(t));
    }), n;
  };
  function qc(e, t, r, n) {
    return n < t ? e(n) : t < 0 && e(0), n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1;
  }
  function rc(e, t) {
    !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (E.isTouch ? " pinch-zoom" : "") : "none", e === Je && rc(We, t);
  }
  function tc(e) {
    var t,
      r = e.event,
      n = e.target,
      o = e.axis,
      i = (r.changedTouches ? r.changedTouches[0] : r).target,
      a = i._gsap || Le.core.getCache(i),
      s = at();
    if (!a._isScrollT || 2e3 < s - a._isScrollT) {
      for (; i && i !== We && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !oe[(t = kb(i)).overflowY] && !oe[t.overflowX]);) i = i.parentNode;
      a._isScroll = i && i !== n && !Ja(i) && (oe[(t = kb(i)).overflowY] || oe[t.overflowX]), a._isScrollT = s;
    }
    !a._isScroll && "x" !== o || (r.stopPropagation(), r._gsapAllow = !0);
  }
  function uc(e, t, r, n) {
    return E.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: n = n && tc,
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function onEnable() {
        return r && ub(Xe, E.eventTypes[0], ae, !1, !0);
      },
      onDisable: function onDisable() {
        return vb(Xe, E.eventTypes[0], ae, !0);
      }
    });
  }
  function yc(e) {
    function rq() {
      return o = !1;
    }
    function uq() {
      i = Oa(p, He), T = Ve(R ? 1 : 0, i), f && (k = Ve(0, Oa(p, qe))), l = Ct;
    }
    function vq() {
      v._gsap.y = Ga(parseFloat(v._gsap.y) + b.offset) + "px", v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)", b.offset = b.cacheID = 0;
    }
    function Bq() {
      uq(), a.isActive() && a.vars.scrollY > i && (b() > i ? a.progress(1) && b(i) : a.resetTo("scrollY", i));
    }
    Ta(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
    var n,
      i,
      l,
      o,
      a,
      c,
      u,
      s,
      f = e.normalizeScrollX,
      t = e.momentum,
      r = e.allowNestedScroll,
      d = e.onRelease,
      p = J(e.target) || Je,
      g = Le.core.globals().ScrollSmoother,
      h = g && g.get(),
      v = R && (e.content && J(e.content) || h && !1 !== e.content && !h.smooth() && h.content()),
      b = K(p, He),
      m = K(p, qe),
      y = 1,
      x = (E.isTouch && Ne.visualViewport ? Ne.visualViewport.scale * Ne.visualViewport.width : Ne.outerWidth) / Ne.innerWidth,
      _ = 0,
      w = Ra(t) ? function () {
        return t(n);
      } : function () {
        return t || 2.8;
      },
      S = uc(p, e.type, !0, r),
      k = Fa,
      T = Fa;
    return v && Le.set(v, {
      y: "+=0"
    }), e.ignoreCheck = function (e) {
      return R && "touchmove" === e.type && function ignoreDrag() {
        if (o) {
          requestAnimationFrame(rq);
          var e = Ga(n.deltaY / 2),
            t = T(b.v - e);
          if (v && t !== b.v + b.offset) {
            b.offset = t - b.v;
            var r = Ga((parseFloat(v && v._gsap.y) || 0) - b.offset);
            v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)", v._gsap.y = r + "px", b.cacheID = ze.cache, Q();
          }
          return !0;
        }
        b.offset && vq(), o = !0;
      }() || 1.05 < y && "touchstart" !== e.type || n.isGesturing || e.touches && 1 < e.touches.length;
    }, e.onPress = function () {
      o = !1;
      var e = y;
      y = Ga((Ne.visualViewport && Ne.visualViewport.scale || 1) / x), a.pause(), e !== y && rc(p, 1.01 < y || !f && "x"), c = m(), u = b(), uq(), l = Ct;
    }, e.onRelease = e.onGestureStart = function (e, t) {
      if (b.offset && vq(), t) {
        ze.cache++;
        var r,
          n,
          o = w();
        f && (n = (r = m()) + .05 * o * -e.velocityX / .227, o *= qc(m, r, n, Oa(p, qe)), a.vars.scrollX = k(n)), n = (r = b()) + .05 * o * -e.velocityY / .227, o *= qc(b, r, n, Oa(p, He)), a.vars.scrollY = T(n), a.invalidate().duration(o).play(.01), (R && a.vars.scrollY >= i || i - 1 <= r) && Le.to({}, {
          onUpdate: Bq,
          duration: o
        });
      } else s.restart(!0);
      d && d(e);
    }, e.onWheel = function () {
      a._ts && a.pause(), 1e3 < at() - _ && (l = 0, _ = at());
    }, e.onChange = function (e, t, r, n, o) {
      if (Ct !== l && uq(), t && f && m(k(n[2] === t ? c + (e.startX - e.x) : m() + t - n[1])), r) {
        b.offset && vq();
        var i = o[2] === r,
          a = i ? u + e.startY - e.y : b() + r - o[1],
          s = T(a);
        i && a !== s && (u += s - a), b(s);
      }
      (r || t) && Q();
    }, e.onEnable = function () {
      rc(p, !f && "x"), re.addEventListener("refresh", Bq), ub(Ne, "resize", Bq), b.smooth && (b.target.style.scrollBehavior = "auto", b.smooth = m.smooth = !1), S.enable();
    }, e.onDisable = function () {
      rc(p, !0), vb(Ne, "resize", Bq), re.removeEventListener("refresh", Bq), S.kill();
    }, e.lockAxis = !1 !== e.lockAxis, ((n = new E(e)).iOS = R) && !b() && b(1), R && Le.ticker.add(Fa), s = n._dc, a = Le.to(n, {
      ease: "power4",
      paused: !0,
      scrollX: f ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      modifiers: {
        scrollY: mc(b, b(), function () {
          return a.pause();
        })
      },
      onUpdate: Q,
      onComplete: s.vars.onComplete
    }), n;
  }
  var ne,
    oe = {
      auto: 1,
      scroll: 1
    },
    ie = /(input|label|select|textarea)/i,
    ae = function _captureInputs(e) {
      var t = ie.test(e.target.tagName);
      (t || ne) && (e._gsapAllow = !0, ne = t);
    };
  re.sort = function (e) {
    return kt.sort(e || function (e, t) {
      return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0));
    });
  }, re.observe = function (e) {
    return new E(e);
  }, re.normalizeScroll = function (e) {
    if (void 0 === e) return v;
    if (!0 === e && v) return v.enable();
    if (!1 === e) return v && v.kill();
    var t = e instanceof E ? e : yc(e);
    return v && v.target === t.target && v.kill(), Ja(t.target) && (v = t), t;
  }, re.core = {
    _getVelocityProp: L,
    _inputObserver: uc,
    _scrollers: ze,
    _proxies: Ie,
    bridge: {
      ss: function ss() {
        st || V("scrollStart"), st = at();
      },
      ref: function ref() {
        return je;
      }
    }
  }, Ia() && Le.registerPlugin(re), e.ScrollTrigger = re, e["default"] = re;
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e["default"];
  }
});

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
 * SplitText 3.12.2
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

!function (D, u) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? u(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (u),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (D) {
  "use strict";

  var _ = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function m(D) {
    X = document, e = window, (C = C || D || e.gsap || console.warn("Please gsap.registerPlugin(SplitText)")) && (l = C.utils.toArray, i = C.core.context || function () {}, F = 1);
  }
  function n(D) {
    return e.getComputedStyle(D);
  }
  function o(D) {
    return "absolute" === D.position || !0 === D.absolute;
  }
  function p(D, u) {
    for (var e, t = u.length; -1 < --t;) if (e = u[t], D.substr(0, e.length) === e) return e.length;
  }
  function r(D, u) {
    void 0 === D && (D = "");
    var e = ~D.indexOf("++"),
      t = 1;
    return e && (D = D.split("++").join("")), function () {
      return "<" + u + " style='position:relative;display:inline-block;'" + (D ? " class='" + D + (e ? t++ : "") + "'>" : ">");
    };
  }
  function s(D, u, e) {
    var t = D.nodeType;
    if (1 === t || 9 === t || 11 === t) for (D = D.firstChild; D; D = D.nextSibling) s(D, u, e);else 3 !== t && 4 !== t || (D.nodeValue = D.nodeValue.split(u).join(e));
  }
  function t(D, u) {
    for (var e = u.length; -1 < --e;) D.push(u[e]);
  }
  function u(D, u, e) {
    for (var t; D && D !== u;) {
      if (t = D._next || D.nextSibling) return t.textContent.charAt(0) === e;
      D = D.parentNode || D._parent;
    }
  }
  function v(D) {
    var u,
      e,
      t = l(D.childNodes),
      F = t.length;
    for (u = 0; u < F; u++) (e = t[u])._isSplit ? v(e) : u && e.previousSibling && 3 === e.previousSibling.nodeType ? (e.previousSibling.nodeValue += 3 === e.nodeType ? e.nodeValue : e.firstChild.nodeValue, D.removeChild(e)) : 3 !== e.nodeType && (D.insertBefore(e.firstChild, e), D.removeChild(e));
  }
  function w(D, u) {
    return parseFloat(u[D]) || 0;
  }
  function x(D, e, F, C, i, E, r) {
    var l,
      p,
      d,
      a,
      h,
      B,
      f,
      A,
      c,
      x,
      g,
      y,
      _ = n(D),
      b = w("paddingLeft", _),
      S = -999,
      T = w("borderBottomWidth", _) + w("borderTopWidth", _),
      m = w("borderLeftWidth", _) + w("borderRightWidth", _),
      N = w("paddingTop", _) + w("paddingBottom", _),
      L = w("paddingLeft", _) + w("paddingRight", _),
      W = w("fontSize", _) * (e.lineThreshold || .2),
      H = _.textAlign,
      O = [],
      V = [],
      M = [],
      R = e.wordDelimiter || " ",
      j = e.tag ? e.tag : e.span ? "span" : "div",
      k = e.type || e.split || "chars,words,lines",
      P = i && ~k.indexOf("lines") ? [] : null,
      z = ~k.indexOf("words"),
      q = ~k.indexOf("chars"),
      G = o(e),
      I = e.linesClass,
      J = ~(I || "").indexOf("++"),
      K = [],
      Q = "flex" === _.display,
      U = D.style.display;
    for (J && (I = I.split("++").join("")), Q && (D.style.display = "block"), d = (p = D.getElementsByTagName("*")).length, h = [], l = 0; l < d; l++) h[l] = p[l];
    if (P || G) for (l = 0; l < d; l++) ((B = (a = h[l]).parentNode === D) || G || q && !z) && (y = a.offsetTop, P && B && Math.abs(y - S) > W && ("BR" !== a.nodeName || 0 === l) && (f = [], P.push(f), S = y), G && (a._x = a.offsetLeft, a._y = y, a._w = a.offsetWidth, a._h = a.offsetHeight), P && ((a._isSplit && B || !q && B || z && B || !z && a.parentNode.parentNode === D && !a.parentNode._isSplit) && (f.push(a), a._x -= b, u(a, D, R) && (a._wordEnd = !0)), "BR" === a.nodeName && (a.nextSibling && "BR" === a.nextSibling.nodeName || 0 === l) && P.push([])));
    for (l = 0; l < d; l++) if (B = (a = h[l]).parentNode === D, "BR" !== a.nodeName) {
      if (G && (c = a.style, z || B || (a._x += a.parentNode._x, a._y += a.parentNode._y), c.left = a._x + "px", c.top = a._y + "px", c.position = "absolute", c.display = "block", c.width = a._w + 1 + "px", c.height = a._h + "px"), !z && q) {
        if (a._isSplit) for (a._next = p = a.nextSibling, a.parentNode.appendChild(a); p && 3 === p.nodeType && " " === p.textContent;) a._next = p.nextSibling, a.parentNode.appendChild(p), p = p.nextSibling;else a.parentNode._isSplit ? (a._parent = a.parentNode, !a.previousSibling && a.firstChild && (a.firstChild._isFirst = !0), a.nextSibling && " " === a.nextSibling.textContent && !a.nextSibling.nextSibling && K.push(a.nextSibling), a._next = a.nextSibling && a.nextSibling._isFirst ? null : a.nextSibling, a.parentNode.removeChild(a), h.splice(l--, 1), d--) : B || (y = !a.nextSibling && u(a.parentNode, D, R), a.parentNode._parent && a.parentNode._parent.appendChild(a), y && a.parentNode.appendChild(X.createTextNode(" ")), "span" === j && (a.style.display = "inline"), O.push(a));
      } else a.parentNode._isSplit && !a._isSplit && "" !== a.innerHTML ? V.push(a) : q && !a._isSplit && ("span" === j && (a.style.display = "inline"), O.push(a));
    } else P || G ? (a.parentNode && a.parentNode.removeChild(a), h.splice(l--, 1), d--) : z || D.appendChild(a);
    for (l = K.length; -1 < --l;) K[l].parentNode.removeChild(K[l]);
    if (P) {
      for (G && (x = X.createElement(j), D.appendChild(x), g = x.offsetWidth + "px", y = x.offsetParent === D ? 0 : D.offsetLeft, D.removeChild(x)), c = D.style.cssText, D.style.cssText = "display:none;"; D.firstChild;) D.removeChild(D.firstChild);
      for (A = " " === R && (!G || !z && !q), l = 0; l < P.length; l++) {
        for (f = P[l], (x = X.createElement(j)).style.cssText = "display:block;text-align:" + H + ";position:" + (G ? "absolute;" : "relative;"), I && (x.className = I + (J ? l + 1 : "")), M.push(x), d = f.length, p = 0; p < d; p++) "BR" !== f[p].nodeName && (a = f[p], x.appendChild(a), A && a._wordEnd && x.appendChild(X.createTextNode(" ")), G && (0 === p && (x.style.top = a._y + "px", x.style.left = b + y + "px"), a.style.top = "0px", y && (a.style.left = a._x - y + "px")));
        0 === d ? x.innerHTML = "&nbsp;" : z || q || (v(x), s(x, String.fromCharCode(160), " ")), G && (x.style.width = g, x.style.height = a._h + "px"), D.appendChild(x);
      }
      D.style.cssText = c;
    }
    G && (r > D.clientHeight && (D.style.height = r - N + "px", D.clientHeight < r && (D.style.height = r + T + "px")), E > D.clientWidth && (D.style.width = E - L + "px", D.clientWidth < E && (D.style.width = E + m + "px"))), Q && (U ? D.style.display = U : D.style.removeProperty("display")), t(F, O), z && t(C, V), t(i, M);
  }
  function y(D, u, e, t) {
    var F,
      C,
      i,
      n,
      E,
      r,
      l,
      d,
      a = u.tag ? u.tag : u.span ? "span" : "div",
      h = ~(u.type || u.split || "chars,words,lines").indexOf("chars"),
      B = o(u),
      f = u.wordDelimiter || " ",
      A = " " !== f ? "" : B ? "&#173; " : " ",
      c = "</" + a + ">",
      x = 1,
      g = u.specialChars ? "function" == typeof u.specialChars ? u.specialChars : p : null,
      y = X.createElement("div"),
      v = D.parentNode;
    for (v.insertBefore(y, D), y.textContent = D.nodeValue, v.removeChild(D), l = -1 !== (F = function getText(D) {
      var u = D.nodeType,
        e = "";
      if (1 === u || 9 === u || 11 === u) {
        if ("string" == typeof D.textContent) return D.textContent;
        for (D = D.firstChild; D; D = D.nextSibling) e += getText(D);
      } else if (3 === u || 4 === u) return D.nodeValue;
      return e;
    }(D = y)).indexOf("<"), !1 !== u.reduceWhiteSpace && (F = F.replace(S, " ").replace(b, "")), l && (F = F.split("<").join("{{LT}}")), E = F.length, C = (" " === F.charAt(0) ? A : "") + e(), i = 0; i < E; i++) if (r = F.charAt(i), g && (d = g(F.substr(i), u.specialChars))) r = F.substr(i, d || 1), C += h && " " !== r ? t() + r + "</" + a + ">" : r, i += d - 1;else if (r === f && F.charAt(i - 1) !== f && i) {
      for (C += x ? c : "", x = 0; F.charAt(i + 1) === f;) C += A, i++;
      i === E - 1 ? C += A : ")" !== F.charAt(i + 1) && (C += A + e(), x = 1);
    } else "{" === r && "{{LT}}" === F.substr(i, 6) ? (C += h ? t() + "{{LT}}</" + a + ">" : "{{LT}}", i += 5) : 55296 <= r.charCodeAt(0) && r.charCodeAt(0) <= 56319 || 65024 <= F.charCodeAt(i + 1) && F.charCodeAt(i + 1) <= 65039 ? (n = ((F.substr(i, 12).split(_) || [])[1] || "").length || 2, C += h && " " !== r ? t() + F.substr(i, n) + "</" + a + ">" : F.substr(i, n), i += n - 1) : C += h && " " !== r ? t() + r + "</" + a + ">" : r;
    D.outerHTML = C + (x ? c : ""), l && s(v, "{{LT}}", "<");
  }
  function z(D, u, e, t) {
    var F,
      C,
      i = l(D.childNodes),
      E = i.length,
      s = o(u);
    if (3 !== D.nodeType || 1 < E) {
      for (u.absolute = !1, F = 0; F < E; F++) (C = i[F])._next = C._isFirst = C._parent = C._wordEnd = null, 3 === C.nodeType && !/\S+/.test(C.nodeValue) || (s && 3 !== C.nodeType && "inline" === n(C).display && (C.style.display = "inline-block", C.style.position = "relative"), C._isSplit = !0, z(C, u, e, t));
      return u.absolute = s, void (D._isSplit = !0);
    }
    y(D, u, e, t);
  }
  var X,
    e,
    F,
    C,
    i,
    l,
    E,
    b = /(?:\r|\n|\t\t)/g,
    S = /(?:\s\s+)/g,
    d = ((E = SplitText.prototype).split = function split(D) {
      this.isSplit && this.revert(), this.vars = D = D || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
      for (var u, e, t, F = this.elements.length, C = D.tag ? D.tag : D.span ? "span" : "div", i = r(D.wordsClass, C), n = r(D.charsClass, C); -1 < --F;) t = this.elements[F], this._originals[F] = t.innerHTML, u = t.clientHeight, e = t.clientWidth, z(t, D, i, n), x(t, D, this.chars, this.words, this.lines, e, u);
      return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this;
    }, E.revert = function revert() {
      var e = this._originals;
      if (!e) throw "revert() call wasn't scoped properly.";
      return this.elements.forEach(function (D, u) {
        return D.innerHTML = e[u];
      }), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this;
    }, SplitText.create = function create(D, u) {
      return new SplitText(D, u);
    }, SplitText);
  function SplitText(D, u) {
    F || m(), this.elements = l(D), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = u || {}, i(this), this.split(u);
  }
  d.version = "3.12.2", d.register = m, D.SplitText = d, D["default"] = d;
  if (typeof window === "undefined" || window !== D) {
    Object.defineProperty(D, "__esModule", {
      value: !0
    });
  } else {
    delete D["default"];
  }
});

/***/ }),

/***/ 523:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
 * GSAP 3.12.2
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function (t, e) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? e(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (e) {
  "use strict";

  function _inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e;
  }
  function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  function r(t) {
    return "string" == typeof t;
  }
  function s(t) {
    return "function" == typeof t;
  }
  function t(t) {
    return "number" == typeof t;
  }
  function u(t) {
    return void 0 === t;
  }
  function v(t) {
    return "object" == _typeof(t);
  }
  function w(t) {
    return !1 !== t;
  }
  function x() {
    return "undefined" != typeof window;
  }
  function y(t) {
    return s(t) || r(t);
  }
  function P(t) {
    return (i = yt(t, ot)) && Ee;
  }
  function Q(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
  }
  function R(t, e) {
    return !e && console.warn(t);
  }
  function S(t, e) {
    return t && (ot[t] = e) && i && (i[t] = e) || ot;
  }
  function T() {
    return 0;
  }
  function ea(t) {
    var e,
      r,
      i = t[0];
    if (v(i) || s(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
      for (r = gt.length; r-- && !gt[r].targetTest(i););
      e = gt[r];
    }
    for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Vt(t[r], e))) || t.splice(r, 1);
    return t;
  }
  function fa(t) {
    return t._gsap || ea(Ot(t))[0]._gsap;
  }
  function ga(t, e, r) {
    return (r = t[e]) && s(r) ? t[e]() : u(r) && t.getAttribute && t.getAttribute(e) || r;
  }
  function ha(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }
  function ia(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }
  function ja(t) {
    return Math.round(1e7 * t) / 1e7 || 0;
  }
  function ka(t, e) {
    var r = e.charAt(0),
      i = parseFloat(e.substr(2));
    return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i;
  }
  function la(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
    return i < r;
  }
  function ma() {
    var t,
      e,
      r = ct.length,
      i = ct.slice(0);
    for (dt = {}, t = ct.length = 0; t < r; t++) (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  }
  function na(t, e, r, i) {
    ct.length && !L && ma(), t.render(e, r, i || L && e < 0 && (t._initted || t._startAt)), ct.length && !L && ma();
  }
  function oa(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(at).length < 2 ? e : r(t) ? t.trim() : t;
  }
  function pa(t) {
    return t;
  }
  function qa(t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t;
  }
  function ta(t, e) {
    for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = v(e[r]) ? ta(t[r] || (t[r] = {}), e[r]) : e[r]);
    return t;
  }
  function ua(t, e) {
    var r,
      i = {};
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  }
  function va(t) {
    var e = t.parent || I,
      r = t.keyframes ? function _setKeyframeDefaults(i) {
        return function (t, e) {
          for (var r in e) r in t || "duration" === r && i || "ease" === r || (t[r] = e[r]);
        };
      }($(t.keyframes)) : qa;
    if (w(t.inherit)) for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
    return t;
  }
  function xa(t, e, r, i, n) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var a,
      s = t[i];
    if (n) for (a = e[n]; s && s[n] > a;) s = s._prev;
    return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e;
  }
  function ya(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
      a = e._next;
    n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;
  }
  function za(t, e) {
    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
  }
  function Aa(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0)) for (var r = t; r;) r._dirty = 1, r = r.parent;
    return t;
  }
  function Ca(t, e, r, i) {
    return t._startAt && (L ? t._startAt.revert(ht) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i));
  }
  function Ea(t) {
    return t._repeat ? Tt(t._tTime, t = t.duration() + t._rDelay) * t : 0;
  }
  function Ga(t, e) {
    return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);
  }
  function Ha(t) {
    return t._end = ja(t._start + (t._tDur / Math.abs(t._ts || t._rts || X) || 0));
  }
  function Ia(t, e) {
    var r = t._dp;
    return r && r.smoothChildTiming && t._ts && (t._start = ja(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ha(t), r._dirty || Aa(r, t)), t;
  }
  function Ja(t, e) {
    var r;
    if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = Ga(t.rawTime(), e), (!e._dur || kt(0, e.totalDuration(), r) - e._tTime > X) && e.render(r, !0)), Aa(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
      if (t._dur < t.duration()) for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
      t._zTime = -X;
    }
  }
  function Ka(e, r, i, n) {
    return r.parent && za(r), r._start = ja((t(i) ? i : i || e !== I ? xt(e, i, r) : e._time) + r._delay), r._end = ja(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), xa(e, r, "_first", "_last", e._sort ? "_start" : 0), bt(r) || (e._recent = r), n || Ja(e, r), e._ts < 0 && Ia(e, e._tTime), e;
  }
  function La(t, e) {
    return (ot.ScrollTrigger || Q("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t);
  }
  function Ma(t, e, r, i, n) {
    return Gt(t, e, n), t._initted ? !r && t._pt && !L && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Rt.frame ? (ct.push(t), t._lazy = [n, i], 1) : void 0 : 1;
  }
  function Ra(t, e, r, i) {
    var n = t._repeat,
      a = ja(e) || 0,
      s = t._tTime / t._tDur;
    return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : ja(a * (n + 1) + t._rDelay * n) : a, 0 < s && !i && Ia(t, t._tTime = t._tDur * s), t.parent && Ha(t), r || Aa(t.parent, t), t;
  }
  function Sa(t) {
    return t instanceof Xt ? Aa(t) : Ra(t, t._dur);
  }
  function Va(e, r, i) {
    var n,
      a,
      s = t(r[1]),
      o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
      u = r[o];
    if (s && (u.duration = r[1]), u.parent = i, e) {
      for (n = u, a = i; a && !("immediateRender" in n);) n = a.vars.defaults || {}, a = w(a.vars.inherit) && a.parent;
      u.immediateRender = w(n.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1];
    }
    return new Zt(r[0], u, r[1 + o]);
  }
  function Wa(t, e) {
    return t || 0 === t ? e(t) : e;
  }
  function Ya(t, e) {
    return r(t) && (e = st.exec(t)) ? e[1] : "";
  }
  function _a(t, e) {
    return t && v(t) && "length" in t && (!e && !t.length || t.length - 1 in t && v(t[0])) && !t.nodeType && t !== h;
  }
  function cb(r) {
    return r = Ot(r)[0] || R("Invalid scope") || {}, function (t) {
      var e = r.current || r.nativeElement || r;
      return Ot(t, e.querySelectorAll ? e : e === r ? R("Invalid scope") || a.createElement("div") : r);
    };
  }
  function db(t) {
    return t.sort(function () {
      return .5 - Math.random();
    });
  }
  function eb(t) {
    if (s(t)) return t;
    var p = v(t) ? t : {
        each: t
      },
      _ = jt(p.ease),
      m = p.from || 0,
      g = parseFloat(p.base) || 0,
      y = {},
      e = 0 < m && m < 1,
      T = isNaN(m) || e,
      b = p.axis,
      w = m,
      x = m;
    return r(m) ? w = x = {
      center: .5,
      edges: .5,
      end: 1
    }[m] || 0 : !e && T && (w = m[0], x = m[1]), function (t, e, r) {
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        c = (r || p).length,
        d = y[c];
      if (!d) {
        if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, U])[1])) {
          for (h = -U; h < (h = r[f++].getBoundingClientRect().left) && f < c;);
          f--;
        }
        for (d = y[c] = [], i = T ? Math.min(f, c) * w - .5 : m % f, n = f === U ? 0 : T ? c * x / f - .5 : m / f | 0, l = U, u = h = 0; u < c; u++) a = u % f - i, s = n - (u / f | 0), d[u] = o = b ? Math.abs("y" === b ? s : a) : K(a * a + s * s), h < o && (h = o), o < l && (l = o);
        "random" === m && db(d), d.max = h - l, d.min = l, d.v = c = (parseFloat(p.amount) || parseFloat(p.each) * (c < f ? c - 1 : b ? "y" === b ? c / f : f : Math.max(f, c / f)) || 0) * ("edges" === m ? -1 : 1), d.b = c < 0 ? g - c : g, d.u = Ya(p.amount || p.each) || 0, _ = _ && c < 0 ? Yt(_) : _;
      }
      return c = (d[t] - d.min) / d.max || 0, ja(d.b + (_ ? _(c) : c) * d.v) + d.u;
    };
  }
  function fb(i) {
    var n = Math.pow(10, ((i + "").split(".")[1] || "").length);
    return function (e) {
      var r = ja(Math.round(parseFloat(e) / i) * i * n);
      return (r - r % 1) / n + (t(e) ? 0 : Ya(e));
    };
  }
  function gb(h, e) {
    var l,
      f,
      r = $(h);
    return !r && v(h) && (l = r = h.radius || U, h.values ? (h = Ot(h.values), (f = !t(h[0])) && (l *= l)) : h = fb(h.increment)), Wa(e, r ? s(h) ? function (t) {
      return f = h(t), Math.abs(f - t) <= l ? f : t;
    } : function (e) {
      for (var r, i, n = parseFloat(f ? e.x : e), a = parseFloat(f ? e.y : 0), s = U, o = 0, u = h.length; u--;) (r = f ? (r = h[u].x - n) * r + (i = h[u].y - a) * i : Math.abs(h[u] - n)) < s && (s = r, o = u);
      return o = !l || s <= l ? h[o] : e, f || o === e || t(e) ? o : o + Ya(e);
    } : fb(h));
  }
  function hb(t, e, r, i) {
    return Wa($(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return $(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i;
    });
  }
  function lb(e, r, t) {
    return Wa(t, function (t) {
      return e[~~r(t)];
    });
  }
  function ob(t) {
    for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + hb(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
    return s + t.substr(a, t.length - a);
  }
  function rb(t, e, r) {
    var i,
      n,
      a,
      s = t.labels,
      o = U;
    for (i in s) (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
    return a;
  }
  function tb(t) {
    return za(t), t.scrollTrigger && t.scrollTrigger.kill(!!L), t.progress() < 1 && At(t, "onInterrupt"), t;
  }
  function wb(t) {
    if (x() && t) {
      var e = (t = !t.name && t["default"] || t).name,
        r = s(t),
        i = e && !r && t.init ? function () {
          this._props = [];
        } : t,
        n = {
          init: T,
          render: he,
          add: Qt,
          kill: ce,
          modifier: fe,
          rawVars: 0
        },
        a = {
          targetTest: 0,
          get: 0,
          getSetter: ne,
          aliases: {},
          register: 0
        };
      if (Ft(), t !== i) {
        if (pt[e]) return;
        qa(i, qa(ua(t, n), a)), yt(i.prototype, yt(n, ua(t, a))), pt[i.prop = e] = i, t.targetTest && (gt.push(i), ft[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      S(e, i), t.register && t.register(Ee, i, _e);
    } else t && Ct.push(t);
  }
  function zb(t, e, r) {
    return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * St + .5 | 0;
  }
  function Ab(e, r, i) {
    var n,
      a,
      s,
      o,
      u,
      h,
      l,
      f,
      c,
      d,
      p = e ? t(e) ? [e >> 16, e >> 8 & St, e & St] : 0 : Et.black;
    if (!p) {
      if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), Et[e]) p = Et[e];else if ("#" === e.charAt(0)) {
        if (e.length < 6 && (e = "#" + (n = e.charAt(1)) + n + (a = e.charAt(2)) + a + (s = e.charAt(3)) + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & St, p & St, parseInt(e.substr(7), 16) / 255];
        p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & St, e & St];
      } else if ("hsl" === e.substr(0, 3)) {
        if (p = d = e.match(tt), r) {
          if (~e.indexOf("=")) return p = e.match(et), i && p.length < 4 && (p[3] = 1), p;
        } else o = +p[0] % 360 / 360, u = p[1] / 100, n = 2 * (h = p[2] / 100) - (a = h <= .5 ? h * (u + 1) : h + u - h * u), 3 < p.length && (p[3] *= 1), p[0] = zb(o + 1 / 3, n, a), p[1] = zb(o, n, a), p[2] = zb(o - 1 / 3, n, a);
      } else p = e.match(tt) || Et.transparent;
      p = p.map(Number);
    }
    return r && !d && (n = p[0] / St, a = p[1] / St, s = p[2] / St, h = ((l = Math.max(n, a, s)) + (f = Math.min(n, a, s))) / 2, l === f ? o = u = 0 : (c = l - f, u = .5 < h ? c / (2 - l - f) : c / (l + f), o = l === n ? (a - s) / c + (a < s ? 6 : 0) : l === a ? (s - n) / c + 2 : (n - a) / c + 4, o *= 60), p[0] = ~~(o + .5), p[1] = ~~(100 * u + .5), p[2] = ~~(100 * h + .5)), i && p.length < 4 && (p[3] = 1), p;
  }
  function Bb(t) {
    var r = [],
      i = [],
      n = -1;
    return t.split(Dt).forEach(function (t) {
      var e = t.match(rt) || [];
      r.push.apply(r, e), i.push(n += e.length + 1);
    }), r.c = i, r;
  }
  function Cb(t, e, r) {
    var i,
      n,
      a,
      s,
      o = "",
      u = (t + o).match(Dt),
      h = e ? "hsla(" : "rgba(",
      l = 0;
    if (!u) return t;
    if (u = u.map(function (t) {
      return (t = Ab(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
    }), r && (a = Bb(t), (i = r.c).join(o) !== a.c.join(o))) for (s = (n = t.replace(Dt, "1").split(rt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
    if (!n) for (s = (n = t.split(Dt)).length - 1; l < s; l++) o += n[l] + u[l];
    return o + n[s];
  }
  function Fb(t) {
    var e,
      r = t.join(" ");
    if (Dt.lastIndex = 0, Dt.test(r)) return e = zt.test(r), t[1] = Cb(t[1], e), t[0] = Cb(t[0], e, Bb(t[1])), !0;
  }
  function Ob(t) {
    var e = (t + "").split("("),
      r = Bt[e[0]];
    return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
      for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(It, "").trim() : +i, s = r.substr(e + 1).trim();
      return n;
    }(e[1])] : function _valueInParentheses(t) {
      var e = t.indexOf("(") + 1,
        r = t.indexOf(")"),
        i = t.indexOf("(", e);
      return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
    }(t).split(",").map(oa)) : Bt._CE && Lt.test(t) ? Bt._CE("", t) : r;
  }
  function Qb(t, e) {
    for (var r, i = t._first; i;) i instanceof Xt ? Qb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Qb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
  }
  function Sb(t, e, r, i) {
    void 0 === r && (r = function easeOut(t) {
      return 1 - e(1 - t);
    }), void 0 === i && (i = function easeInOut(t) {
      return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
    });
    var n,
      a = {
        easeIn: e,
        easeOut: r,
        easeInOut: i
      };
    return ha(t, function (t) {
      for (var e in Bt[t] = ot[t] = a, Bt[n = t.toLowerCase()] = r, a) Bt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Bt[t + "." + e] = a[e];
    }), a;
  }
  function Tb(e) {
    return function (t) {
      return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2;
    };
  }
  function Ub(r, t, e) {
    function Jm(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * H((t - a) * n) + 1;
    }
    var i = 1 <= t ? t : 1,
      n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
      a = n / N * (Math.asin(1 / i) || 0),
      s = "out" === r ? Jm : "in" === r ? function (t) {
        return 1 - Jm(1 - t);
      } : Tb(Jm);
    return n = N / n, s.config = function (t, e) {
      return Ub(r, t, e);
    }, s;
  }
  function Vb(e, r) {
    function Rm(t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
    }
    void 0 === r && (r = 1.70158);
    var t = "out" === e ? Rm : "in" === e ? function (t) {
      return 1 - Rm(1 - t);
    } : Tb(Rm);
    return t.config = function (t) {
      return Vb(e, t);
    }, t;
  }
  var B,
    L,
    l,
    I,
    h,
    n,
    a,
    i,
    o,
    f,
    c,
    d,
    p,
    _,
    m,
    g,
    b,
    k,
    M,
    O,
    A,
    C,
    E,
    D,
    z,
    F,
    Y,
    j,
    q = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: {
        lineHeight: ""
      }
    },
    V = {
      duration: .5,
      overwrite: !1,
      delay: 0
    },
    U = 1e8,
    X = 1 / U,
    N = 2 * Math.PI,
    W = N / 4,
    G = 0,
    K = Math.sqrt,
    J = Math.cos,
    H = Math.sin,
    Z = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
    $ = Array.isArray,
    tt = /(?:-?\.?\d|\.)+/gi,
    et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    nt = /[+-]=-?[.\d]+/,
    at = /[^,'"\[\]\s]+/gi,
    st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ot = {},
    ut = {
      suppressEvents: !0,
      isStart: !0,
      kill: !1
    },
    ht = {
      suppressEvents: !0,
      kill: !1
    },
    lt = {
      suppressEvents: !0
    },
    ft = {},
    ct = [],
    dt = {},
    pt = {},
    _t = {},
    mt = 30,
    gt = [],
    vt = "",
    yt = function _merge(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    Tt = function _animationCycle(t, e) {
      var r = Math.floor(t /= e);
      return t && r === t ? r - 1 : r;
    },
    bt = function _isFromOrFromStart(t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e;
    },
    wt = {
      _start: 0,
      endTime: T,
      totalDuration: T
    },
    xt = function _parsePosition(t, e, i) {
      var n,
        a,
        s,
        o = t.labels,
        u = t._recent || wt,
        h = t.duration() >= U ? u.endTime(!1) : t._dur;
      return r(e) && (isNaN(e) || e in o) ? (a = e.charAt(0), s = "%" === e.substr(-1), n = e.indexOf("="), "<" === a || ">" === a ? (0 <= n && (e = e.replace(/=/, "")), ("<" === a ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (s ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (e in o || (o[e] = h), o[e]) : (a = parseFloat(e.charAt(n - 1) + e.substr(n + 1)), s && i && (a = a / 100 * ($(i) ? i[0] : i).totalDuration()), 1 < n ? _parsePosition(t, e.substr(0, n - 1), i) + a : h + a)) : null == e ? h : +e;
    },
    kt = function _clamp(t, e, r) {
      return r < t ? t : e < r ? e : r;
    },
    Mt = [].slice,
    Ot = function toArray(t, e, i) {
      return l && !e && l.selector ? l.selector(t) : !r(t) || i || !n && Ft() ? $(t) ? function _flatten(t, e, i) {
        return void 0 === i && (i = []), t.forEach(function (t) {
          return r(t) && !e || _a(t, 1) ? i.push.apply(i, Ot(t)) : i.push(t);
        }) || i;
      }(t, i) : _a(t) ? Mt.call(t, 0) : t ? [t] : [] : Mt.call((e || a).querySelectorAll(t), 0);
    },
    Pt = function mapRange(e, t, r, i, n) {
      var a = t - e,
        s = i - r;
      return Wa(n, function (t) {
        return r + ((t - e) / a * s || 0);
      });
    },
    At = function _callback(t, e, r) {
      var i,
        n,
        a,
        s = t.vars,
        o = s[e],
        u = l,
        h = t._ctx;
      if (o) return i = s[e + "Params"], n = s.callbackScope || t, r && ct.length && ma(), h && (l = h), a = i ? o.apply(n, i) : o.call(n), l = u, a;
    },
    Ct = [],
    St = 255,
    Et = {
      aqua: [0, St, St],
      lime: [0, St, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, St],
      navy: [0, 0, 128],
      white: [St, St, St],
      olive: [128, 128, 0],
      yellow: [St, St, 0],
      orange: [St, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [St, 0, 0],
      pink: [St, 192, 203],
      cyan: [0, St, St],
      transparent: [St, St, St, 0]
    },
    Dt = function () {
      var t,
        e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in Et) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    }(),
    zt = /hsl[a]?\(/,
    Rt = (M = Date.now, O = 500, A = 33, C = M(), E = C, z = D = 1e3 / 240, g = {
      time: 0,
      frame: 0,
      tick: function tick() {
        yl(!0);
      },
      deltaRatio: function deltaRatio(t) {
        return b / (1e3 / (t || 60));
      },
      wake: function wake() {
        o && (!n && x() && (h = n = window, a = h.document || {}, ot.gsap = Ee, (h.gsapVersions || (h.gsapVersions = [])).push(Ee.version), P(i || h.GreenSockGlobals || !h.gsap && h || {}), m = h.requestAnimationFrame, Ct.forEach(wb)), p && g.sleep(), _ = m || function (t) {
          return setTimeout(t, z - 1e3 * g.time + 1 | 0);
        }, d = 1, yl(2));
      },
      sleep: function sleep() {
        (m ? h.cancelAnimationFrame : clearTimeout)(p), d = 0, _ = T;
      },
      lagSmoothing: function lagSmoothing(t, e) {
        O = t || 1 / 0, A = Math.min(e || 33, O);
      },
      fps: function fps(t) {
        D = 1e3 / (t || 240), z = 1e3 * g.time + D;
      },
      add: function add(n, t, e) {
        var a = t ? function (t, e, r, i) {
          n(t, e, r, i), g.remove(a);
        } : n;
        return g.remove(n), F[e ? "unshift" : "push"](a), Ft(), a;
      },
      remove: function remove(t, e) {
        ~(e = F.indexOf(t)) && F.splice(e, 1) && e <= k && k--;
      },
      _listeners: F = []
    }),
    Ft = function _wake() {
      return !d && Rt.wake();
    },
    Bt = {},
    Lt = /^[\d.\-M][\d.\-,\s]/,
    It = /["']/g,
    Yt = function _invertEase(e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    jt = function _parseEase(t, e) {
      return t && (s(t) ? t : Bt[t] || Ob(t)) || e;
    };
  function yl(t) {
    var e,
      r,
      i,
      n,
      a = M() - E,
      s = !0 === t;
    if (O < a && (C += a - A), (0 < (e = (i = (E += a) - C) - z) || s) && (n = ++g.frame, b = i - 1e3 * g.time, g.time = i /= 1e3, z += e + (D <= e ? 4 : D - e), r = 1), s || (p = _(yl)), r) for (k = 0; k < F.length; k++) F[k](i, b, n, t);
  }
  function gn(t) {
    return t < j ? Y * t * t : t < .7272727272727273 ? Y * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? Y * (t -= 2.25 / 2.75) * t + .9375 : Y * Math.pow(t - 2.625 / 2.75, 2) + .984375;
  }
  ha("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Sb(t + ",Power" + (r - 1), e ? function (t) {
      return Math.pow(t, r);
    } : function (t) {
      return t;
    }, function (t) {
      return 1 - Math.pow(1 - t, r);
    }, function (t) {
      return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
    });
  }), Bt.Linear.easeNone = Bt.none = Bt.Linear.easeIn, Sb("Elastic", Ub("in"), Ub("out"), Ub()), Y = 7.5625, j = 1 / 2.75, Sb("Bounce", function (t) {
    return 1 - gn(1 - t);
  }, gn), Sb("Expo", function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0;
  }), Sb("Circ", function (t) {
    return -(K(1 - t * t) - 1);
  }), Sb("Sine", function (t) {
    return 1 === t ? 1 : 1 - J(t * W);
  }), Sb("Back", Vb("in"), Vb("out"), Vb()), Bt.SteppedEase = Bt.steps = ot.SteppedEase = {
    config: function config(t, e) {
      void 0 === t && (t = 1);
      var r = 1 / t,
        i = t + (e ? 0 : 1),
        n = e ? 1 : 0;
      return function (t) {
        return ((i * kt(0, .99999999, t) | 0) + n) * r;
      };
    }
  }, V.ease = Bt["quad.out"], ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
    return vt += t + "," + t + "Params,";
  });
  var qt,
    Vt = function GSCache(t, e) {
      this.id = G++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : ga, this.set = e ? e.getSetter : ne;
    },
    Ut = ((qt = Animation.prototype).delay = function delay(t) {
      return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay;
    }, qt.duration = function duration(t) {
      return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
    }, qt.totalDuration = function totalDuration(t) {
      return arguments.length ? (this._dirty = 0, Ra(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
    }, qt.totalTime = function totalTime(t, e) {
      if (Ft(), !arguments.length) return this._tTime;
      var r = this._dp;
      if (r && r.smoothChildTiming && this._ts) {
        for (Ia(this, t), !r._dp || r.parent || Ja(r, this); r && r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
        !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ka(this._dp, this, this._start - this._delay);
      }
      return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === X || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), na(this, t, e)), this;
    }, qt.time = function time(t, e) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ea(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time;
    }, qt.totalProgress = function totalProgress(t, e) {
      return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    }, qt.progress = function progress(t, e) {
      return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Ea(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    }, qt.iteration = function iteration(t, e) {
      var r = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Tt(this._tTime, r) + 1 : 1;
    }, qt.timeScale = function timeScale(t) {
      if (!arguments.length) return this._rts === -X ? 0 : this._rts;
      if (this._rts === t) return this;
      var e = this.parent && this._ts ? Ga(this.parent._time, this) : this._tTime;
      return this._rts = +t || 0, this._ts = this._ps || t === -X ? 0 : this._rts, this.totalTime(kt(-Math.abs(this._delay), this._tDur, e), !0), Ha(this), function _recacheAncestors(t) {
        for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
        return t;
      }(this);
    }, qt.paused = function paused(t) {
      return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ft(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== X && (this._tTime -= X)))), this) : this._ps;
    }, qt.startTime = function startTime(t) {
      if (arguments.length) {
        this._start = t;
        var e = this.parent || this._dp;
        return !e || !e._sort && this.parent || Ka(e, this, t - this._delay), this;
      }
      return this._start;
    }, qt.endTime = function endTime(t) {
      return this._start + (w(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    }, qt.rawTime = function rawTime(t) {
      var e = this.parent || this._dp;
      return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ga(e.rawTime(t), this) : this._tTime : this._tTime;
    }, qt.revert = function revert(t) {
      void 0 === t && (t = lt);
      var e = L;
      return L = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), L = e, this;
    }, qt.globalTime = function globalTime(t) {
      for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
      return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(t) : r;
    }, qt.repeat = function repeat(t) {
      return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Sa(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
    }, qt.repeatDelay = function repeatDelay(t) {
      if (arguments.length) {
        var e = this._time;
        return this._rDelay = t, Sa(this), e ? this.time(e) : this;
      }
      return this._rDelay;
    }, qt.yoyo = function yoyo(t) {
      return arguments.length ? (this._yoyo = t, this) : this._yoyo;
    }, qt.seek = function seek(t, e) {
      return this.totalTime(xt(this, t), w(e));
    }, qt.restart = function restart(t, e) {
      return this.play().totalTime(t ? -this._delay : 0, w(e));
    }, qt.play = function play(t, e) {
      return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
    }, qt.reverse = function reverse(t, e) {
      return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
    }, qt.pause = function pause(t, e) {
      return null != t && this.seek(t, e), this.paused(!0);
    }, qt.resume = function resume() {
      return this.paused(!1);
    }, qt.reversed = function reversed(t) {
      return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -X : 0)), this) : this._rts < 0;
    }, qt.invalidate = function invalidate() {
      return this._initted = this._act = 0, this._zTime = -X, this;
    }, qt.isActive = function isActive() {
      var t,
        e = this.parent || this._dp,
        r = this._start;
      return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - X));
    }, qt.eventCallback = function eventCallback(t, e, r) {
      var i = this.vars;
      return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
    }, qt.then = function then(t) {
      var i = this;
      return new Promise(function (e) {
        function Bo() {
          var t = i.then;
          i.then = null, s(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t;
        }
        var r = s(t) ? t : pa;
        i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? Bo() : i._prom = Bo;
      });
    }, qt.kill = function kill() {
      tb(this);
    }, Animation);
  function Animation(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ra(this, +t.duration, 1, 1), this.data = t.data, l && (this._ctx = l).data.push(this), d || Rt.wake();
  }
  qa(Ut.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -X,
    _prom: 0,
    _ps: !1,
    _rts: 1
  });
  var Xt = function (i) {
    function Timeline(t, e) {
      var r;
      return void 0 === t && (t = {}), (r = i.call(this, t) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = w(t.sortChildren), I && Ka(t.parent || I, _assertThisInitialized(r), e), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && La(_assertThisInitialized(r), t.scrollTrigger), r;
    }
    _inheritsLoose(Timeline, i);
    var e = Timeline.prototype;
    return e.to = function to(t, e, r) {
      return Va(0, arguments, this), this;
    }, e.from = function from(t, e, r) {
      return Va(1, arguments, this), this;
    }, e.fromTo = function fromTo(t, e, r, i) {
      return Va(2, arguments, this), this;
    }, e.set = function set(t, e, r) {
      return e.duration = 0, e.parent = this, va(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Zt(t, e, xt(this, r), 1), this;
    }, e.call = function call(t, e, r) {
      return Ka(this, Zt.delayedCall(0, t, e), r);
    }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
      return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Zt(t, r, xt(this, n)), this;
    }, e.staggerFrom = function staggerFrom(t, e, r, i, n, a, s) {
      return r.runBackwards = 1, va(r).immediateRender = w(r.immediateRender), this.staggerTo(t, e, r, i, n, a, s);
    }, e.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, s, o) {
      return i.startAt = r, va(i).immediateRender = w(i.immediateRender), this.staggerTo(t, e, i, n, a, s, o);
    }, e.render = function render(t, e, r) {
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        c,
        d,
        p,
        _ = this._time,
        m = this._dirty ? this.totalDuration() : this._tDur,
        g = this._dur,
        v = t <= 0 ? 0 : ja(t),
        y = this._zTime < 0 != t < 0 && (this._initted || !g);
      if (this !== I && m < v && 0 <= t && (v = m), v !== this._tTime || r || y) {
        if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
          if (d = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);
          if (i = ja(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), c = Tt(this._tTime, o), !_ && this._tTime && c !== s && this._tTime - c * o - this._dur <= 0 && (c = s), d && 1 & s && (i = g - i, p = 1), s !== c && !this._lock) {
            var T = d && 1 & c,
              b = T === (d && 1 & s);
            if (s < c && (T = !T), _ = T ? 0 : v % g ? g : v, this._lock = 1, this.render(_ || (p ? 0 : ja(s * o)), e, !g)._lock = 0, this._tTime = v, !e && this.parent && At(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
            if (g = this._dur, m = this._tDur, b && (this._lock = 2, _ = T ? g : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
            Qb(this, p);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
          var i;
          if (e < r) for (i = t._first; i && i._start <= r;) {
            if ("isPause" === i.data && i._start > e) return i;
            i = i._next;
          } else for (i = t._last; i && i._start >= r;) {
            if ("isPause" === i.data && i._start < e) return i;
            i = i._prev;
          }
        }(this, ja(_), ja(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), !_ && i && !e && !s && (At(this, "onStart"), this._tTime !== v)) return this;
        if (_ <= i && 0 <= t) for (n = this._first; n;) {
          if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
            if (n.parent !== this) return this.render(t, e, r);
            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
              h = 0, a && (v += this._zTime = -X);
              break;
            }
          }
          n = a;
        } else {
          n = this._last;
          for (var w = t < 0 ? t : i; n;) {
            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
              if (n.parent !== this) return this.render(t, e, r);
              if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r || L && (n._initted || n._startAt)), i !== this._time || !this._ts && !u) {
                h = 0, a && (v += this._zTime = w ? -X : X);
                break;
              }
            }
            n = a;
          }
        }
        if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -X)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, Ha(this), this.render(t, e, r);
        this._onUpdate && !e && At(this, "onUpdate", !0), (v === m && this._tTime >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || za(this, 1), e || t < 0 && !_ || !v && !_ && m || (At(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())));
      }
      return this;
    }, e.add = function add(e, i) {
      var n = this;
      if (t(i) || (i = xt(this, i, e)), !(e instanceof Ut)) {
        if ($(e)) return e.forEach(function (t) {
          return n.add(t, i);
        }), this;
        if (r(e)) return this.addLabel(e, i);
        if (!s(e)) return this;
        e = Zt.delayedCall(0, e);
      }
      return this !== e ? Ka(this, e, i) : this;
    }, e.getChildren = function getChildren(t, e, r, i) {
      void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -U);
      for (var n = [], a = this._first; a;) a._start >= i && (a instanceof Zt ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
      return n;
    }, e.getById = function getById(t) {
      for (var e = this.getChildren(1, 1, 1), r = e.length; r--;) if (e[r].vars.id === t) return e[r];
    }, e.remove = function remove(t) {
      return r(t) ? this.removeLabel(t) : s(t) ? this.killTweensOf(t) : (ya(this, t), t === this._recent && (this._recent = this._last), Aa(this));
    }, e.totalTime = function totalTime(t, e) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ja(Rt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime;
    }, e.addLabel = function addLabel(t, e) {
      return this.labels[t] = xt(this, e), this;
    }, e.removeLabel = function removeLabel(t) {
      return delete this.labels[t], this;
    }, e.addPause = function addPause(t, e, r) {
      var i = Zt.delayedCall(0, e || T, r);
      return i.data = "isPause", this._hasPause = 1, Ka(this, i, xt(this, t));
    }, e.removePause = function removePause(t) {
      var e = this._first;
      for (t = xt(this, t); e;) e._start === t && "isPause" === e.data && za(e), e = e._next;
    }, e.killTweensOf = function killTweensOf(t, e, r) {
      for (var i = this.getTweensOf(t, r), n = i.length; n--;) Nt !== i[n] && i[n].kill(t, e);
      return this;
    }, e.getTweensOf = function getTweensOf(e, r) {
      for (var i, n = [], a = Ot(e), s = this._first, o = t(r); s;) s instanceof Zt ? la(s._targets, a) && (o ? (!Nt || s._initted && s._ts) && s.globalTime(0) <= r && s.globalTime(s.totalDuration()) > r : !r || s.isActive()) && n.push(s) : (i = s.getTweensOf(a, r)).length && n.push.apply(n, i), s = s._next;
      return n;
    }, e.tweenTo = function tweenTo(t, e) {
      e = e || {};
      var r,
        i = this,
        n = xt(i, t),
        a = e.startAt,
        s = e.onStart,
        o = e.onStartParams,
        u = e.immediateRender,
        h = Zt.to(i, qa({
          ease: e.ease || "none",
          lazy: !1,
          immediateRender: !1,
          time: n,
          overwrite: "auto",
          duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || X,
          onStart: function onStart() {
            if (i.pause(), !r) {
              var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
              h._dur !== t && Ra(h, t, 0, 1).render(h._time, !0, !0), r = 1;
            }
            s && s.apply(h, o || []);
          }
        }, e));
      return u ? h.render(0) : h;
    }, e.tweenFromTo = function tweenFromTo(t, e, r) {
      return this.tweenTo(e, qa({
        startAt: {
          time: xt(this, t)
        }
      }, r));
    }, e.recent = function recent() {
      return this._recent;
    }, e.nextLabel = function nextLabel(t) {
      return void 0 === t && (t = this._time), rb(this, xt(this, t));
    }, e.previousLabel = function previousLabel(t) {
      return void 0 === t && (t = this._time), rb(this, xt(this, t), 1);
    }, e.currentLabel = function currentLabel(t) {
      return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + X);
    }, e.shiftChildren = function shiftChildren(t, e, r) {
      void 0 === r && (r = 0);
      for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
      if (e) for (i in a) a[i] >= r && (a[i] += t);
      return Aa(this);
    }, e.invalidate = function invalidate(t) {
      var e = this._first;
      for (this._lock = 0; e;) e.invalidate(t), e = e._next;
      return i.prototype.invalidate.call(this, t);
    }, e.clear = function clear(t) {
      void 0 === t && (t = !0);
      for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
      return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Aa(this);
    }, e.totalDuration = function totalDuration(t) {
      var e,
        r,
        i,
        n = 0,
        a = this,
        s = a._last,
        o = U;
      if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
      if (a._dirty) {
        for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Ka(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
        Ra(a, a === I && a._time > n ? a._time : n, 1, 1), a._dirty = 0;
      }
      return a._tDur;
    }, Timeline.updateRoot = function updateRoot(t) {
      if (I._ts && (na(I, Ga(t, I)), f = Rt.frame), Rt.frame >= mt) {
        mt += q.autoSleep || 120;
        var e = I._first;
        if ((!e || !e._ts) && q.autoSleep && Rt._listeners.length < 2) {
          for (; e && !e._ts;) e = e._next;
          e || Rt.sleep();
        }
      }
    }, Timeline;
  }(Ut);
  qa(Xt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  function ac(t, e, i, n, a, o) {
    var u, h, l, f;
    if (pt[t] && !1 !== (u = new pt[t]()).init(a, u.rawVars ? e[t] : function _processVars(t, e, i, n, a) {
      if (s(t) && (t = Kt(t, a, e, i, n)), !v(t) || t.style && t.nodeType || $(t) || Z(t)) return r(t) ? Kt(t, a, e, i, n) : t;
      var o,
        u = {};
      for (o in t) u[o] = Kt(t[o], a, e, i, n);
      return u;
    }(e[t], n, a, o, i), i, n, o) && (i._pt = h = new _e(i._pt, a, t, 0, 1, u.render, u, 0, u.priority), i !== c)) for (l = i._ptLookup[i._targets.indexOf(a)], f = u._props.length; f--;) l[u._props[f]] = h;
    return u;
  }
  function gc(t, r, e, i) {
    var n,
      a,
      s = r.ease || i || "power1.inOut";
    if ($(r)) a = e[t] || (e[t] = []), r.forEach(function (t, e) {
      return a.push({
        t: e / (r.length - 1) * 100,
        v: t,
        e: s
      });
    });else for (n in r) a = e[n] || (e[n] = []), "ease" === n || a.push({
      t: parseFloat(t),
      v: r[n],
      e: s
    });
  }
  var Nt,
    Wt,
    Qt = function _addPropTween(t, e, i, n, a, o, u, h, l, f) {
      s(n) && (n = n(a || 0, t, o));
      var c,
        d = t[e],
        p = "get" !== i ? i : s(d) ? l ? t[e.indexOf("set") || !s(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d,
        _ = s(d) ? l ? re : te : $t;
      if (r(n) && (~n.indexOf("random(") && (n = ob(n)), "=" === n.charAt(1) && (!(c = ka(p, n) + (Ya(p) || 0)) && 0 !== c || (n = c))), !f || p !== n || Wt) return isNaN(p * n) || "" === n ? (d || e in t || Q(e, n), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
        var o,
          u,
          h,
          l,
          f,
          c,
          d,
          p,
          _ = new _e(this._pt, t, e, 0, 1, ue, null, n),
          m = 0,
          g = 0;
        for (_.b = r, _.e = i, r += "", (d = ~(i += "").indexOf("random(")) && (i = ob(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(it) || []; o = it.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (c = parseFloat(u[g - 1]) || 0, _._pt = {
          _next: _._pt,
          p: f || 1 === g ? f : ",",
          s: c,
          c: "=" === l.charAt(1) ? ka(c, l) - c : parseFloat(l) - c,
          m: h && h < 4 ? Math.round : 0
        }, m = it.lastIndex);
        return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (nt.test(i) || d) && (_.e = 0), this._pt = _;
      }.call(this, t, e, p, n, _, h || q.stringFilter, l)) : (c = new _e(this._pt, t, e, +p || 0, n - (p || 0), "boolean" == typeof d ? se : ae, 0, _), l && (c.fp = l), u && c.modifier(u, this, t), this._pt = c);
    },
    Gt = function _initTween(t, e, r) {
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        c,
        d,
        p,
        _,
        m = t.vars,
        g = m.ease,
        v = m.startAt,
        y = m.immediateRender,
        T = m.lazy,
        b = m.onUpdate,
        x = m.onUpdateParams,
        k = m.callbackScope,
        M = m.runBackwards,
        O = m.yoyoEase,
        P = m.keyframes,
        A = m.autoRevert,
        C = t._dur,
        S = t._startAt,
        E = t._targets,
        D = t.parent,
        z = D && "nested" === D.data ? D.vars.targets : E,
        R = "auto" === t._overwrite && !B,
        F = t.timeline;
      if (!F || P && g || (g = "none"), t._ease = jt(g, V.ease), t._yEase = O ? Yt(jt(!0 === O ? g : O, V.ease)) : 0, O && t._yoyo && !t._repeat && (O = t._yEase, t._yEase = t._ease, t._ease = O), t._from = !F && !!m.runBackwards, !F || P && !m.stagger) {
        if (p = (l = E[0] ? fa(E[0]).harness : 0) && m[l.prop], i = ua(m, ft), S && (S._zTime < 0 && S.progress(1), e < 0 && M && y && !A ? S.render(-1, !0) : S.revert(M && C ? ht : ut), S._lazy = 0), v) {
          if (za(t._startAt = Zt.set(E, qa({
            data: "isStart",
            overwrite: !1,
            parent: D,
            immediateRender: !0,
            lazy: !S && w(T),
            startAt: null,
            delay: 0,
            onUpdate: b,
            onUpdateParams: x,
            callbackScope: k,
            stagger: 0
          }, v))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (L || !y && !A) && t._startAt.revert(ht), y && C && e <= 0 && r <= 0) return void (e && (t._zTime = e));
        } else if (M && C && !S) if (e && (y = !1), a = qa({
          overwrite: !1,
          data: "isFromStart",
          lazy: y && !S && w(T),
          immediateRender: y,
          stagger: 0,
          parent: D
        }, i), p && (a[l.prop] = p), za(t._startAt = Zt.set(E, a)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (L ? t._startAt.revert(ht) : t._startAt.render(-1, !0)), t._zTime = e, y) {
          if (!e) return;
        } else _initTween(t._startAt, X, X);
        for (t._pt = t._ptCache = 0, T = C && w(T) || T && !C, n = 0; n < E.length; n++) {
          if (h = (o = E[n])._gsap || ea(E)[n]._gsap, t._ptLookup[n] = c = {}, dt[h.id] && ct.length && ma(), d = z === E ? n : z.indexOf(o), l && !1 !== (f = new l()).init(o, p || i, t, d, z) && (t._pt = s = new _e(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function (t) {
            c[t] = s;
          }), f.priority && (u = 1)), !l || p) for (a in i) pt[a] && (f = ac(a, i, t, d, o, z)) ? f.priority && (u = 1) : c[a] = s = Qt.call(t, o, a, "get", i[a], d, z, 0, m.stringFilter);
          t._op && t._op[n] && t.kill(o, t._op[n]), R && t._pt && (Nt = t, I.killTweensOf(o, c, t.globalTime(e)), _ = !t.parent, Nt = 0), t._pt && T && (dt[h.id] = 1);
        }
        u && pe(t), t._onInit && t._onInit(t);
      }
      t._onUpdate = b, t._initted = (!t._op || t._pt) && !_, P && e <= 0 && F.render(U, !0, !0);
    },
    Kt = function _parseFuncOrString(t, e, i, n, a) {
      return s(t) ? t.call(e, i, n, a) : r(t) && ~t.indexOf("random(") ? ob(t) : t;
    },
    Jt = vt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Ht = {};
  ha(Jt + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return Ht[t] = 1;
  });
  var Zt = function (z) {
    function Tween(e, r, i, n) {
      var a;
      "number" == typeof r && (i.duration = r, r = i, i = null);
      var s,
        o,
        u,
        h,
        l,
        f,
        c,
        d,
        p = (a = z.call(this, n ? r : va(r)) || this).vars,
        _ = p.duration,
        m = p.delay,
        g = p.immediateRender,
        T = p.stagger,
        b = p.overwrite,
        x = p.keyframes,
        k = p.defaults,
        M = p.scrollTrigger,
        O = p.yoyoEase,
        P = r.parent || I,
        A = ($(e) || Z(e) ? t(e[0]) : "length" in r) ? [e] : Ot(e);
      if (a._targets = A.length ? ea(A) : R("GSAP target " + e + " not found. https://greensock.com", !q.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = b, x || T || y(_) || y(m)) {
        if (r = a.vars, (s = a.timeline = new Xt({
          data: "nested",
          defaults: k || {},
          targets: P && "nested" === P.data ? P.vars.targets : A
        })).kill(), s.parent = s._dp = _assertThisInitialized(a), s._start = 0, T || y(_) || y(m)) {
          if (h = A.length, c = T && eb(T), v(T)) for (l in T) ~Jt.indexOf(l) && ((d = d || {})[l] = T[l]);
          for (o = 0; o < h; o++) (u = ua(r, Ht)).stagger = 0, O && (u.yoyoEase = O), d && yt(u, d), f = A[o], u.duration = +Kt(_, _assertThisInitialized(a), o, f, A), u.delay = (+Kt(m, _assertThisInitialized(a), o, f, A) || 0) - a._delay, !T && 1 === h && u.delay && (a._delay = m = u.delay, a._start += m, u.delay = 0), s.to(f, u, c ? c(o, f, A) : 0), s._ease = Bt.none;
          s.duration() ? _ = m = 0 : a.timeline = 0;
        } else if (x) {
          va(qa(s.vars.defaults, {
            ease: "none"
          })), s._ease = jt(x.ease || r.ease || "none");
          var C,
            S,
            E,
            D = 0;
          if ($(x)) x.forEach(function (t) {
            return s.to(A, t, ">");
          }), s.duration();else {
            for (l in u = {}, x) "ease" === l || "easeEach" === l || gc(l, x[l], u, x.easeEach);
            for (l in u) for (C = u[l].sort(function (t, e) {
              return t.t - e.t;
            }), o = D = 0; o < C.length; o++) (E = {
              ease: (S = C[o]).e,
              duration: (S.t - (o ? C[o - 1].t : 0)) / 100 * _
            })[l] = S.v, s.to(A, E, D), D += E.duration;
            s.duration() < _ && s.to({}, {
              duration: _ - s.duration()
            });
          }
        }
        _ || a.duration(_ = s.duration());
      } else a.timeline = 0;
      return !0 !== b || B || (Nt = _assertThisInitialized(a), I.killTweensOf(A), Nt = 0), Ka(P, _assertThisInitialized(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (g || !_ && !x && a._start === ja(P._time) && w(g) && function _hasNoPausedAncestors(t) {
        return !t || t._ts && _hasNoPausedAncestors(t.parent);
      }(_assertThisInitialized(a)) && "nested" !== P.data) && (a._tTime = -X, a.render(Math.max(0, -m) || 0)), M && La(_assertThisInitialized(a), M), a;
    }
    _inheritsLoose(Tween, z);
    var e = Tween.prototype;
    return e.render = function render(t, e, r) {
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        c = this._time,
        d = this._tDur,
        p = this._dur,
        _ = t < 0,
        m = d - X < t && !_ ? d : t < X ? 0 : t;
      if (p) {
        if (m !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != _) {
          if (i = m, l = this.timeline, this._repeat) {
            if (s = p + this._rDelay, this._repeat < -1 && _) return this.totalTime(100 * s + t, e, r);
            if (i = ja(m % s), m === d ? (a = this._repeat, i = p) : ((a = ~~(m / s)) && a === m / s && (i = p, a--), p < i && (i = p)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = Tt(this._tTime, s), i === c && !r && this._initted) return this._tTime = m, this;
            a !== o && (l && this._yEase && Qb(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(ja(s * a), !0).invalidate()._lock = 0));
          }
          if (!this._initted) {
            if (Ma(this, _ ? t : i, r, e, m)) return this._tTime = 0, this;
            if (c !== this._time) return this;
            if (p !== this._dur) return this.render(t, e, r);
          }
          if (this._tTime = m, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), i && !c && !e && !a && (At(this, "onStart"), this._tTime !== m)) return this;
          for (n = this._pt; n;) n.r(h, n.d), n = n._next;
          l && l.render(t < 0 ? t : !i && u ? -X : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (_ && Ca(this, t, 0, r), At(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && At(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (_ && !this._onUpdate && Ca(this, t, 0, !0), !t && p || !(m === this._tDur && 0 < this._ts || !m && this._ts < 0) || za(this, 1), e || _ && !c || !(m || c || u) || (At(this, m === d ? "onComplete" : "onReverseComplete", !0), !this._prom || m < d && 0 < this.timeScale() || this._prom()));
        }
      } else !function _renderZeroDurationTween(t, e, r, i) {
        var n,
          a,
          s,
          o = t.ratio,
          u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
            var e = t.parent;
            return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e));
          }(t) && (t._initted || !bt(t)) || (t._ts < 0 || t._dp._ts < 0) && !bt(t)) ? 0 : 1,
          h = t._rDelay,
          l = 0;
        if (h && t._repeat && (l = kt(0, t._tDur, e), a = Tt(l, h), t._yoyo && 1 & a && (u = 1 - u), a !== Tt(t._tTime, h) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || L || i || t._zTime === X || !e && t._zTime) {
          if (!t._initted && Ma(t, e, i, r, l)) return;
          for (s = t._zTime, t._zTime = e || (r ? X : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(u, n.d), n = n._next;
          e < 0 && Ca(t, e, 0, !0), t._onUpdate && !r && At(t, "onUpdate"), l && t._repeat && !r && t.parent && At(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && za(t, 1), r || L || (At(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
        } else t._zTime || (t._zTime = e);
      }(this, t, e, r);
      return this;
    }, e.targets = function targets() {
      return this._targets;
    }, e.invalidate = function invalidate(t) {
      return t && this.vars.runBackwards || (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), z.prototype.invalidate.call(this, t);
    }, e.resetTo = function resetTo(t, e, r, i) {
      d || Rt.wake(), this._ts || this.play();
      var n,
        a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
      return this._initted || Gt(this, a), n = this._ease(a / this._dur), function _updatePropTweens(t, e, r, i, n, a, s) {
        var o,
          u,
          h,
          l,
          f = (t._pt && t._ptCache || (t._ptCache = {}))[e];
        if (!f) for (f = t._ptCache[e] = [], h = t._ptLookup, l = t._targets.length; l--;) {
          if ((o = h[l][e]) && o.d && o.d._pt) for (o = o.d._pt; o && o.p !== e && o.fp !== e;) o = o._next;
          if (!o) return Wt = 1, t.vars[e] = "+=0", Gt(t, s), Wt = 0, 1;
          f.push(o);
        }
        for (l = f.length; l--;) (o = (u = f[l])._pt || u).s = !i && 0 !== i || n ? o.s + (i || 0) + a * o.c : i, o.c = r - o.s, u.e && (u.e = ia(r) + Ya(u.e)), u.b && (u.b = o.s + Ya(u.b));
      }(this, t, e, r, i, n, a) ? this.resetTo(t, e, r, i) : (Ia(this, 0), this.parent || xa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
    }, e.kill = function kill(t, e) {
      if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? tb(this) : this;
      if (this.timeline) {
        var i = this.timeline.totalDuration();
        return this.timeline.killTweensOf(t, e, Nt && !0 !== Nt.vars.overwrite)._first || tb(this), this.parent && i !== this.timeline.totalDuration() && Ra(this, this._dur * this.timeline._tDur / i, 0, 1), this;
      }
      var n,
        a,
        s,
        o,
        u,
        h,
        l,
        f = this._targets,
        c = t ? Ot(t) : f,
        d = this._ptLookup,
        p = this._pt;
      if ((!e || "all" === e) && function _arraysMatch(t, e) {
        for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
        return r < 0;
      }(f, c)) return "all" === e && (this._pt = 0), tb(this);
      for (n = this._op = this._op || [], "all" !== e && (r(e) && (u = {}, ha(e, function (t) {
        return u[t] = 1;
      }), e = u), e = function _addAliasesToVars(t, e) {
        var r,
          i,
          n,
          a,
          s = t[0] ? fa(t[0]).harness : 0,
          o = s && s.aliases;
        if (!o) return e;
        for (i in r = yt({}, e), o) if ((i in r)) for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];
        return r;
      }(f, e)), l = f.length; l--;) if (~c.indexOf(f[l])) for (u in a = d[l], "all" === e ? (n[l] = e, o = a, s = {}) : (s = n[l] = n[l] || {}, o = e), o) (h = a && a[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || ya(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);
      return this._initted && !this._pt && p && tb(this), this;
    }, Tween.to = function to(t, e, r) {
      return new Tween(t, e, r);
    }, Tween.from = function from(t, e) {
      return Va(1, arguments);
    }, Tween.delayedCall = function delayedCall(t, e, r, i) {
      return new Tween(e, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: t,
        onComplete: e,
        onReverseComplete: e,
        onCompleteParams: r,
        onReverseCompleteParams: r,
        callbackScope: i
      });
    }, Tween.fromTo = function fromTo(t, e, r) {
      return Va(2, arguments);
    }, Tween.set = function set(t, e) {
      return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e);
    }, Tween.killTweensOf = function killTweensOf(t, e, r) {
      return I.killTweensOf(t, e, r);
    }, Tween;
  }(Ut);
  qa(Zt.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  }), ha("staggerTo,staggerFrom,staggerFromTo", function (r) {
    Zt[r] = function () {
      var t = new Xt(),
        e = Mt.call(arguments, 0);
      return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
    };
  });
  function oc(t, e, r) {
    return t.setAttribute(e, r);
  }
  function wc(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  }
  var $t = function _setterPlain(t, e, r) {
      return t[e] = r;
    },
    te = function _setterFunc(t, e, r) {
      return t[e](r);
    },
    re = function _setterFuncWithParam(t, e, r, i) {
      return t[e](i.fp, r);
    },
    ne = function _getSetter(t, e) {
      return s(t[e]) ? te : u(t[e]) && t.setAttribute ? oc : $t;
    },
    ae = function _renderPlain(t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
    },
    se = function _renderBoolean(t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    ue = function _renderComplexString(t, e) {
      var r = e._pt,
        i = "";
      if (!t && e.b) i = e.b;else if (1 === t && e.e) i = e.e;else {
        for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
        i += e.c;
      }
      e.set(e.t, e.p, i, e);
    },
    he = function _renderPropTweens(t, e) {
      for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
    },
    fe = function _addPluginModifier(t, e, r, i) {
      for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n;
    },
    ce = function _killPropTweensOf(t) {
      for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? ya(this, i, "_pt") : i.dep || (e = 1), i = r;
      return !e;
    },
    pe = function _sortPropTweensByPriority(t) {
      for (var e, r, i, n, a = t._pt; a;) {
        for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;
        (a._prev = r ? r._prev : n) ? a._prev._next = a : i = a, (a._next = r) ? r._prev = a : n = a, a = e;
      }
      t._pt = i;
    },
    _e = (PropTween.prototype.modifier = function modifier(t, e, r) {
      this.mSet = this.mSet || this.set, this.set = wc, this.m = t, this.mt = r, this.tween = e;
    }, PropTween);
  function PropTween(t, e, r, i, n, a, s, o, u) {
    this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || ae, this.d = s || this, this.set = o || $t, this.pr = u || 0, (this._next = t) && (t._prev = this);
  }
  ha(vt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
    return ft[t] = 1;
  }), ot.TweenMax = ot.TweenLite = Zt, ot.TimelineLite = ot.TimelineMax = Xt, I = new Xt({
    sortChildren: !1,
    defaults: V,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
  }), q.stringFilter = Fb;
  function Ec(t) {
    return (ye[t] || Te).map(function (t) {
      return t();
    });
  }
  function Fc() {
    var t = Date.now(),
      o = [];
    2 < t - Me && (Ec("matchMediaInit"), ge.forEach(function (t) {
      var e,
        r,
        i,
        n,
        a = t.queries,
        s = t.conditions;
      for (r in a) (e = h.matchMedia(a[r]).matches) && (i = 1), e !== s[r] && (s[r] = e, n = 1);
      n && (t.revert(), i && o.push(t));
    }), Ec("matchMediaRevert"), o.forEach(function (t) {
      return t.onMatch(t);
    }), Me = t, Ec("matchMedia"));
  }
  var me,
    ge = [],
    ye = {},
    Te = [],
    Me = 0,
    Oe = 0,
    Pe = ((me = Context.prototype).add = function add(t, i, n) {
      function Ew() {
        var t,
          e = l,
          r = a.selector;
        return e && e !== a && e.data.push(a), n && (a.selector = cb(n)), l = a, t = i.apply(a, arguments), s(t) && a._r.push(t), l = e, a.selector = r, a.isReverted = !1, t;
      }
      s(t) && (n = i, i = t, t = s);
      var a = this;
      return a.last = Ew, t === s ? Ew(a) : t ? a[t] = Ew : Ew;
    }, me.ignore = function ignore(t) {
      var e = l;
      l = null, t(this), l = e;
    }, me.getTweens = function getTweens() {
      var e = [];
      return this.data.forEach(function (t) {
        return t instanceof Context ? e.push.apply(e, t.getTweens()) : t instanceof Zt && !(t.parent && "nested" === t.parent.data) && e.push(t);
      }), e;
    }, me.clear = function clear() {
      this._r.length = this.data.length = 0;
    }, me.kill = function kill(e, t) {
      var r = this;
      if (e) {
        var i = this.getTweens();
        this.data.forEach(function (t) {
          "isFlip" === t.data && (t.revert(), t.getChildren(!0, !0, !1).forEach(function (t) {
            return i.splice(i.indexOf(t), 1);
          }));
        }), i.map(function (t) {
          return {
            g: t.globalTime(0),
            t: t
          };
        }).sort(function (t, e) {
          return e.g - t.g || -1 / 0;
        }).forEach(function (t) {
          return t.t.revert(e);
        }), this.data.forEach(function (t) {
          return !(t instanceof Zt) && t.revert && t.revert(e);
        }), this._r.forEach(function (t) {
          return t(e, r);
        }), this.isReverted = !0;
      } else this.data.forEach(function (t) {
        return t.kill && t.kill();
      });
      if (this.clear(), t) for (var n = ge.length; n--;) ge[n].id === this.id && ge.splice(n, 1);
    }, me.revert = function revert(t) {
      this.kill(t || {});
    }, Context);
  function Context(t, e) {
    this.selector = e && cb(e), this.data = [], this._r = [], this.isReverted = !1, this.id = Oe++, t && this.add(t);
  }
  var Ae,
    Ce = ((Ae = MatchMedia.prototype).add = function add(t, e, r) {
      v(t) || (t = {
        matches: t
      });
      var i,
        n,
        a,
        s = new Pe(0, r || this.scope),
        o = s.conditions = {};
      for (n in l && !s.selector && (s.selector = l.selector), this.contexts.push(s), e = s.add("onMatch", e), s.queries = t) "all" === n ? a = 1 : (i = h.matchMedia(t[n])) && (ge.indexOf(s) < 0 && ge.push(s), (o[n] = i.matches) && (a = 1), i.addListener ? i.addListener(Fc) : i.addEventListener("change", Fc));
      return a && e(s), this;
    }, Ae.revert = function revert(t) {
      this.kill(t || {});
    }, Ae.kill = function kill(e) {
      this.contexts.forEach(function (t) {
        return t.kill(e, !0);
      });
    }, MatchMedia);
  function MatchMedia(t) {
    this.contexts = [], this.scope = t;
  }
  var Se = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
      e.forEach(function (t) {
        return wb(t);
      });
    },
    timeline: function timeline(t) {
      return new Xt(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return I.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, n) {
      r(i) && (i = Ot(i)[0]);
      var a = fa(i || {}).get,
        s = e ? pa : oa;
      return "native" === e && (e = ""), i ? t ? s((pt[t] && pt[t].get || a)(i, t, e, n)) : function (t, e, r) {
        return s((pt[t] && pt[t].get || a)(i, t, e, r));
      } : i;
    },
    quickSetter: function quickSetter(r, e, i) {
      if (1 < (r = Ot(r)).length) {
        var n = r.map(function (t) {
            return Ee.quickSetter(t, e, i);
          }),
          a = n.length;
        return function (t) {
          for (var e = a; e--;) n[e](t);
        };
      }
      r = r[0] || {};
      var s = pt[e],
        o = fa(r),
        u = o.harness && (o.harness.aliases || {})[e] || e,
        h = s ? function (t) {
          var e = new s();
          c._pt = 0, e.init(r, i ? t + i : t, c, 0, [r]), e.render(1, e), c._pt && he(1, c);
        } : o.set(r, u);
      return s ? h : function (t) {
        return h(r, u, i ? t + i : t, o, 1);
      };
    },
    quickTo: function quickTo(t, i, e) {
      function Wx(t, e, r) {
        return n.resetTo(i, t, e, r);
      }
      var r,
        n = Ee.to(t, yt(((r = {})[i] = "+=0.1", r.paused = !0, r), e || {}));
      return Wx.tween = n, Wx;
    },
    isTweening: function isTweening(t) {
      return 0 < I.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = jt(t.ease, V.ease)), ta(V, t || {});
    },
    config: function config(t) {
      return ta(q, t || {});
    },
    registerEffect: function registerEffect(t) {
      var i = t.name,
        n = t.effect,
        e = t.plugins,
        a = t.defaults,
        r = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return t && !pt[t] && !ot[t] && R(i + " effect requires " + t + " plugin.");
      }), _t[i] = function (t, e, r) {
        return n(Ot(t), qa(e || {}, a), r);
      }, r && (Xt.prototype[i] = function (t, e, r) {
        return this.add(_t[i](t, v(e) ? e : (r = e) && {}, this), r);
      });
    },
    registerEase: function registerEase(t, e) {
      Bt[t] = jt(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? jt(t, e) : Bt;
    },
    getById: function getById(t) {
      return I.getById(t);
    },
    exportRoot: function exportRoot(t, e) {
      void 0 === t && (t = {});
      var r,
        i,
        n = new Xt(t);
      for (n.smoothChildTiming = w(t.smoothChildTiming), I.remove(n), n._dp = 0, n._time = n._tTime = I._time, r = I._first; r;) i = r._next, !e && !r._dur && r instanceof Zt && r.vars.onComplete === r._targets[0] || Ka(n, r, r._start - r._delay), r = i;
      return Ka(I, n, 0), n;
    },
    context: function context(t, e) {
      return t ? new Pe(t, e) : l;
    },
    matchMedia: function matchMedia(t) {
      return new Ce(t);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return ge.forEach(function (t) {
        var e,
          r,
          i = t.conditions;
        for (r in i) i[r] && (i[r] = !1, e = 1);
        e && t.revert();
      }) || Fc();
    },
    addEventListener: function addEventListener(t, e) {
      var r = ye[t] || (ye[t] = []);
      ~r.indexOf(e) || r.push(e);
    },
    removeEventListener: function removeEventListener(t, e) {
      var r = ye[t],
        i = r && r.indexOf(e);
      0 <= i && r.splice(i, 1);
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var i = t - e;
        return $(e) ? lb(e, wrap(0, e.length), t) : Wa(r, function (t) {
          return (i + (t - e) % i) % i + e;
        });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var i = t - e,
          n = 2 * i;
        return $(e) ? lb(e, wrapYoyo(0, e.length - 1), t) : Wa(r, function (t) {
          return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t);
        });
      },
      distribute: eb,
      random: hb,
      snap: gb,
      normalize: function normalize(t, e, r) {
        return Pt(t, e, 0, 1, r);
      },
      getUnit: Ya,
      clamp: function clamp(e, r, t) {
        return Wa(t, function (t) {
          return kt(e, r, t);
        });
      },
      splitColor: Ab,
      toArray: Ot,
      selector: cb,
      mapRange: Pt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || Ya(t));
        };
      },
      interpolate: function interpolate(e, i, t, n) {
        var a = isNaN(e + i) ? 0 : function (t) {
          return (1 - t) * e + t * i;
        };
        if (!a) {
          var s,
            o,
            u,
            h,
            l,
            f = r(e),
            c = {};
          if (!0 === t && (n = 1) && (t = null), f) e = {
            p: e
          }, i = {
            p: i
          };else if ($(e) && !$(i)) {
            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(interpolate(e[o - 1], e[o]));
            h--, a = function func(t) {
              t *= h;
              var e = Math.min(l, ~~t);
              return u[e](t - e);
            }, t = i;
          } else n || (e = yt($(e) ? [] : {}, e));
          if (!u) {
            for (s in i) Qt.call(c, e, s, "get", i[s]);
            a = function func(t) {
              return he(t, c) || (f ? e.p : e);
            };
          }
        }
        return Wa(t, a);
      },
      shuffle: db
    },
    install: P,
    effects: _t,
    ticker: Rt,
    updateRoot: Xt.updateRoot,
    plugins: pt,
    globalTimeline: I,
    core: {
      PropTween: _e,
      globals: S,
      Tween: Zt,
      Timeline: Xt,
      Animation: Ut,
      getCache: fa,
      _removeLinkedListItem: ya,
      reverting: function reverting() {
        return L;
      },
      context: function context(t) {
        return t && l && (l.data.push(t), t._ctx = l), l;
      },
      suppressOverwrites: function suppressOverwrites(t) {
        return B = t;
      }
    }
  };
  ha("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return Se[t] = Zt[t];
  }), Rt.add(Xt.updateRoot), c = Se.to({}, {
    duration: 0
  });
  function Jc(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
    return r;
  }
  function Lc(t, a) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, n, e) {
        e._onInit = function (t) {
          var e, i;
          if (r(n) && (e = {}, ha(n, function (t) {
            return e[t] = 1;
          }), n = e), a) {
            for (i in e = {}, n) e[i] = a(n[i]);
            n = e;
          }
          !function _addModifiers(t, e) {
            var r,
              i,
              n,
              a = t._targets;
            for (r in e) for (i = a.length; i--;) (n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = Jc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r));
          }(t, n);
        };
      }
    };
  }
  var Ee = Se.registerPlugin({
    name: "attr",
    init: function init(t, e, r, i, n) {
      var a, s, o;
      for (a in this.tween = r, e) o = t.getAttribute(a) || "", (s = this.add(t, "setAttribute", (o || 0) + "", e[a], i, n, 0, 0, a)).op = a, s.b = o, this._props.push(a);
    },
    render: function render(t, e) {
      for (var r = e._pt; r;) L ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next;
    }
  }, {
    name: "endArray",
    init: function init(t, e) {
      for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
    }
  }, Lc("roundProps", fb), Lc("modifiers"), Lc("snap", gb)) || Se;
  Zt.version = Xt.version = Ee.version = "3.12.2", o = 1, x() && Ft();
  function vd(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function wd(t, e) {
    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function xd(t, e) {
    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
  }
  function yd(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e);
  }
  function zd(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }
  function Ad(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }
  function Bd(t, e, r) {
    return t.style[e] = r;
  }
  function Cd(t, e, r) {
    return t.style.setProperty(e, r);
  }
  function Dd(t, e, r) {
    return t._gsap[e] = r;
  }
  function Ed(t, e, r) {
    return t._gsap.scaleX = t._gsap.scaleY = r;
  }
  function Fd(t, e, r, i, n) {
    var a = t._gsap;
    a.scaleX = a.scaleY = r, a.renderTransform(n, a);
  }
  function Gd(t, e, r, i, n) {
    var a = t._gsap;
    a[e] = r, a.renderTransform(n, a);
  }
  function Jd(t, e) {
    var r = this,
      i = this.target,
      n = i.style;
    if (t in ar && n) {
      if (this.tfm = this.tfm || {}, "transform" === t) return cr.transform.split(",").forEach(function (t) {
        return Jd.call(r, t, e);
      });
      if (~(t = cr[t] || t).indexOf(",") ? t.split(",").forEach(function (t) {
        return r.tfm[t] = yr(i, t);
      }) : this.tfm[t] = i._gsap.x ? i._gsap[t] : yr(i, t), 0 <= this.props.indexOf(dr)) return;
      i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(pr, e, "")), t = dr;
    }
    (n || e) && this.props.push(t, e, n[t]);
  }
  function Kd(t) {
    t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
  }
  function Ld() {
    var t,
      e,
      r = this.props,
      i = this.target,
      n = i.style,
      a = i._gsap;
    for (t = 0; t < r.length; t += 3) r[t + 1] ? i[r[t]] = r[t + 2] : r[t + 2] ? n[r[t]] = r[t + 2] : n.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(hr, "-$1").toLowerCase());
    if (this.tfm) {
      for (e in this.tfm) a[e] = this.tfm[e];
      a.svg && (a.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), (t = Ie()) && t.isStart || n[dr] || (Kd(n), a.uncache = 1);
    }
  }
  function Md(t, e) {
    var r = {
      target: t,
      props: [],
      revert: Ld,
      save: Jd
    };
    return t._gsap || Ee.core.getCache(t), e && e.split(",").forEach(function (t) {
      return r.save(t);
    }), r;
  }
  function Od(t, e) {
    var r = ze.createElementNS ? ze.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ze.createElement(t);
    return r.style ? r : ze.createElement(t);
  }
  function Pd(t, e, r) {
    var i = getComputedStyle(t);
    return i[e] || i.getPropertyValue(e.replace(hr, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && Pd(t, mr(e) || e, 1) || "";
  }
  function Sd() {
    (function _windowExists() {
      return "undefined" != typeof window;
    })() && window.document && (De = window, ze = De.document, Re = ze.documentElement, Be = Od("div") || {
      style: {}
    }, Od("div"), dr = mr(dr), pr = dr + "Origin", Be.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ye = !!mr("perspective"), Ie = Ee.core.reverting, Fe = 1);
  }
  function Td(t) {
    var e,
      r = Od("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      i = this.parentNode,
      n = this.nextSibling,
      a = this.style.cssText;
    if (Re.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
      e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Td;
    } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
    return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), Re.removeChild(r), this.style.cssText = a, e;
  }
  function Ud(t, e) {
    for (var r = e.length; r--;) if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  }
  function Vd(e) {
    var r;
    try {
      r = e.getBBox();
    } catch (t) {
      r = Td.call(e, !0);
    }
    return r && (r.width || r.height) || e.getBBox === Td || (r = Td.call(e, !0)), !r || r.width || r.x || r.y ? r : {
      x: +Ud(e, ["x", "cx", "x1"]) || 0,
      y: +Ud(e, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    };
  }
  function Wd(t) {
    return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Vd(t));
  }
  function Xd(t, e) {
    if (e) {
      var r = t.style;
      e in ar && e !== pr && (e = dr), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(hr, "-$1").toLowerCase())) : r.removeAttribute(e);
    }
  }
  function Yd(t, e, r, i, n, a) {
    var s = new _e(t._pt, e, r, 0, 1, a ? Ad : zd);
    return (t._pt = s).b = i, s.e = n, t._props.push(r), s;
  }
  function _d(t, e, r, i) {
    var n,
      a,
      s,
      o,
      u = parseFloat(r) || 0,
      h = (r + "").trim().substr((u + "").length) || "px",
      l = Be.style,
      f = lr.test(e),
      c = "svg" === t.tagName.toLowerCase(),
      d = (c ? "client" : "offset") + (f ? "Width" : "Height"),
      p = "px" === i,
      _ = "%" === i;
    return i === h || !u || gr[i] || gr[h] ? u : ("px" === h || p || (u = _d(t, e, r, "px")), o = t.getCTM && Wd(t), !_ && "%" !== h || !ar[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (p ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !c ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== ze && a.appendChild || (a = ze.body), (s = a._gsap) && _ && s.width && f && s.time === Rt.time && !s.uncache ? ia(u / s.width * 100) : (!_ && "%" !== h || vr[Pd(a, "display")] || (l.position = Pd(t, "position")), a === t && (l.position = "static"), a.appendChild(Be), n = Be[d], a.removeChild(Be), l.position = "absolute", f && _ && ((s = fa(a)).time = Rt.time, s.width = a[d]), ia(p ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[d], ia(_ ? u / n * 100 : u / 100 * n)));
  }
  function be(t, e, r, i) {
    if (!r || "none" === r) {
      var n = mr(e, t, 1),
        a = n && Pd(t, n, 1);
      a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = Pd(t, "borderTopColor"));
    }
    var s,
      o,
      u,
      h,
      l,
      f,
      c,
      d,
      p,
      _,
      m,
      g = new _e(this._pt, t.style, e, 0, 1, ue),
      v = 0,
      y = 0;
    if (g.b = r, g.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = Pd(t, e) || i, t.style[e] = r), Fb(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
      for (; o = rt.exec(i);) c = o[0], p = i.substring(v, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), c !== (f = u[y++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), "=" === c.charAt(1) && (c = ka(h, c) + m), d = parseFloat(c), _ = c.substr((d + "").length), v = rt.lastIndex - _.length, _ || (_ = _ || q.units[e] || m, v === i.length && (i += _, g.e += _)), m !== _ && (h = _d(t, e, f, _) || 0), g._pt = {
        _next: g._pt,
        p: p || 1 === y ? p : ",",
        s: h,
        c: d - h,
        m: l && l < 4 || "zIndex" === e ? Math.round : 0
      });
      g.c = v < i.length ? i.substring(v, i.length) : "";
    } else g.r = "display" === e && "none" === i ? Ad : zd;
    return nt.test(i) && (g.e = 0), this._pt = g;
  }
  function de(t) {
    var e = t.split(" "),
      r = e[0],
      i = e[1] || "50%";
    return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = Tr[r] || r, e[1] = Tr[i] || i, e.join(" ");
  }
  function ee(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
        i,
        n,
        a = e.t,
        s = a.style,
        o = e.u,
        u = a._gsap;
      if ("all" === o || !0 === o) s.cssText = "", i = 1;else for (n = (o = o.split(",")).length; -1 < --n;) r = o[n], ar[r] && (i = 1, r = "transformOrigin" === r ? pr : dr), Xd(a, r);
      i && (Xd(a, dr), u && (u.svg && a.removeAttribute("transform"), kr(a, 1), u.uncache = 1, Kd(s)));
    }
  }
  function ie(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }
  function je(t) {
    var e = Pd(t, dr);
    return ie(e) ? wr : e.substr(7).match(et).map(ia);
  }
  function ke(t, e) {
    var r,
      i,
      n,
      a,
      s = t._gsap || fa(t),
      o = t.style,
      u = je(t);
    return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? wr : u : (u !== wr || t.offsetParent || t === Re || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextElementSibling, Re.appendChild(t)), u = je(t), n ? o.display = n : Xd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : Re.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }
  function le(t, e, r, i, n, a) {
    var s,
      o,
      u,
      h = t._gsap,
      l = n || ke(t, !0),
      f = h.xOrigin || 0,
      c = h.yOrigin || 0,
      d = h.xOffset || 0,
      p = h.yOffset || 0,
      _ = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      T = l[5],
      b = e.split(" "),
      w = parseFloat(b[0]) || 0,
      x = parseFloat(b[1]) || 0;
    r ? l !== wr && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = Vd(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - c, h.xOffset = d + (y * _ + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[pr] = "0px 0px", a && (Yd(a, h, "xOrigin", f, w), Yd(a, h, "yOrigin", c, x), Yd(a, h, "xOffset", d, h.xOffset), Yd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x);
  }
  function oe(t, e, r) {
    var i = Ya(e);
    return ia(parseFloat(e) + parseFloat(_d(t, "x", r + "px", i))) + i;
  }
  function ve(t, e, i, n, a) {
    var s,
      o,
      u = 360,
      h = r(a),
      l = parseFloat(a) * (h && ~a.indexOf("rad") ? sr : 1) - n,
      f = n + l + "deg";
    return h && ("short" === (s = a.split("_")[1]) && (l %= u) !== l % 180 && (l += l < 0 ? u : -u), "cw" === s && l < 0 ? l = (l + 36e9) % u - ~~(l / u) * u : "ccw" === s && 0 < l && (l = (l - 36e9) % u - ~~(l / u) * u)), t._pt = o = new _e(t._pt, e, i, n, l, wd), o.e = f, o.u = "deg", t._props.push(i), o;
  }
  function we(t, e) {
    for (var r in e) t[r] = e[r];
    return t;
  }
  function xe(t, e, r) {
    var i,
      n,
      a,
      s,
      o,
      u,
      h,
      l = we({}, r._gsap),
      f = r.style;
    for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[dr] = e, i = kr(r, 1), Xd(r, dr), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[dr], f[dr] = e, i = kr(r, 1), f[dr] = a), ar) (a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Ya(a) !== (h = Ya(s)) ? _d(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new _e(t._pt, i, n, o, u - o, vd), t._pt.u = h || 0, t._props.push(n));
    we(i, l);
  }
  var De,
    ze,
    Re,
    Fe,
    Be,
    Le,
    Ie,
    Ye,
    qe = Bt.Power0,
    Ve = Bt.Power1,
    Ue = Bt.Power2,
    Xe = Bt.Power3,
    Ne = Bt.Power4,
    We = Bt.Linear,
    Qe = Bt.Quad,
    Ge = Bt.Cubic,
    Ke = Bt.Quart,
    Je = Bt.Quint,
    He = Bt.Strong,
    Ze = Bt.Elastic,
    $e = Bt.Back,
    tr = Bt.SteppedEase,
    er = Bt.Bounce,
    rr = Bt.Sine,
    ir = Bt.Expo,
    nr = Bt.Circ,
    ar = {},
    sr = 180 / Math.PI,
    or = Math.PI / 180,
    ur = Math.atan2,
    hr = /([A-Z])/g,
    lr = /(left|right|width|margin|padding|x)/i,
    fr = /[\s,\(]\S/,
    cr = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity"
    },
    dr = "transform",
    pr = dr + "Origin",
    _r = "O,Moz,ms,Ms,Webkit".split(","),
    mr = function _checkPropPrefix(t, e, r) {
      var i = (e || Be).style,
        n = 5;
      if (t in i && !r) return t;
      for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(_r[n] + t in i););
      return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? _r[n] : "") + t;
    },
    gr = {
      deg: 1,
      rad: 1,
      turn: 1
    },
    vr = {
      grid: 1,
      flex: 1
    },
    yr = function _get(t, e, r, i) {
      var n;
      return Fe || Sd(), e in cr && "transform" !== e && ~(e = cr[e]).indexOf(",") && (e = e.split(",")[0]), ar[e] && "transform" !== e ? (n = kr(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Mr(Pd(t, pr)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = br[e] && br[e](t, e, r) || Pd(t, e) || ga(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? _d(t, e, n, r) + r : n;
    },
    Tr = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%"
    },
    br = {
      clearProps: function clearProps(t, e, r, i, n) {
        if ("isFromStart" !== n.data) {
          var a = t._pt = new _e(t._pt, e, r, 0, 0, ee);
          return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1;
        }
      }
    },
    wr = [1, 0, 0, 1, 0, 0],
    xr = {},
    kr = function _parseTransform(t, e) {
      var r = t._gsap || new Vt(t);
      if ("x" in r && !e && !r.uncache) return r;
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        c,
        d,
        p,
        _,
        m,
        g,
        v,
        y,
        T,
        b,
        w,
        x,
        k,
        M,
        O,
        P,
        A,
        C,
        S,
        E,
        D,
        z,
        R,
        F = t.style,
        B = r.scaleX < 0,
        L = "deg",
        I = getComputedStyle(t),
        Y = Pd(t, pr) || "0";
      return i = n = a = u = h = l = f = c = d = 0, s = o = 1, r.svg = !(!t.getCTM || !Wd(t)), I.translate && ("none" === I.translate && "none" === I.scale && "none" === I.rotate || (F[dr] = ("none" !== I.translate ? "translate3d(" + (I.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== I.rotate ? "rotate(" + I.rotate + ") " : "") + ("none" !== I.scale ? "scale(" + I.scale.split(" ").join(",") + ") " : "") + ("none" !== I[dr] ? I[dr] : "")), F.scale = F.rotate = F.translate = "none"), m = ke(t, r.svg), r.svg && (O = r.uncache ? (P = t.getBBox(), Y = r.xOrigin - P.x + "px " + (r.yOrigin - P.y) + "px", "") : !e && t.getAttribute("data-svg-origin"), le(t, O || Y, !!O || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== wr && (T = m[0], b = m[1], w = m[2], x = m[3], i = k = m[4], n = M = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? ur(b, T) * sr : 0, (f = w || x ? ur(w, x) * sr + u : 0) && (o *= Math.abs(Math.cos(f * or))), r.svg && (i -= p - (p * T + _ * w), n -= _ - (p * b + _ * x))) : (R = m[6], D = m[7], C = m[8], S = m[9], E = m[10], z = m[11], i = m[12], n = m[13], a = m[14], h = (g = ur(R, E)) * sr, g && (O = k * (v = Math.cos(-g)) + C * (y = Math.sin(-g)), P = M * v + S * y, A = R * v + E * y, C = k * -y + C * v, S = M * -y + S * v, E = R * -y + E * v, z = D * -y + z * v, k = O, M = P, R = A), l = (g = ur(-w, E)) * sr, g && (v = Math.cos(-g), z = x * (y = Math.sin(-g)) + z * v, T = O = T * v - C * y, b = P = b * v - S * y, w = A = w * v - E * y), u = (g = ur(b, T)) * sr, g && (O = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), P = k * v + M * y, b = b * v - T * y, M = M * v - k * y, T = O, k = P), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ia(Math.sqrt(T * T + b * b + w * w)), o = ia(Math.sqrt(M * M + R * R)), g = ur(k, M), f = 2e-4 < Math.abs(g) ? g * sr : 0, d = z ? 1 / (z < 0 ? -z : z) : 0), r.svg && (O = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !ie(Pd(t, dr)), O && t.setAttribute("transform", O))), 90 < Math.abs(f) && Math.abs(f) < 270 && (B ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ia(s), r.scaleY = ia(o), r.rotation = ia(u) + L, r.rotationX = ia(h) + L, r.rotationY = ia(l) + L, r.skewX = f + L, r.skewY = c + L, r.transformPerspective = d + "px", (r.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (F[pr] = Mr(Y)), r.xOffset = r.yOffset = 0, r.force3D = q.force3D, r.renderTransform = r.svg ? Er : Ye ? Sr : Or, r.uncache = 0, r;
    },
    Mr = function _firstTwoOnly(t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Or = function _renderNon3DTransforms(t, e) {
      e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Sr(t, e);
    },
    Pr = "0deg",
    Ar = "0px",
    Cr = ") ",
    Sr = function _renderCSSTransforms(t, e) {
      var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        c = r.skewY,
        d = r.scaleX,
        p = r.scaleY,
        _ = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        T = "auto" === m && t && 1 !== t || !0 === m;
      if (v && (l !== Pr || h !== Pr)) {
        var b,
          w = parseFloat(h) * or,
          x = Math.sin(w),
          k = Math.cos(w);
        w = parseFloat(l) * or, b = Math.cos(w), a = oe(g, a, x * b * -v), s = oe(g, s, -Math.sin(w) * -v), o = oe(g, o, k * b * -v + v);
      }
      _ !== Ar && (y += "perspective(" + _ + Cr), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === Ar && s === Ar && o === Ar || (y += o !== Ar || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Cr), u !== Pr && (y += "rotate(" + u + Cr), h !== Pr && (y += "rotateY(" + h + Cr), l !== Pr && (y += "rotateX(" + l + Cr), f === Pr && c === Pr || (y += "skew(" + f + ", " + c + Cr), 1 === d && 1 === p || (y += "scale(" + d + ", " + p + Cr), g.style[dr] = y || "translate(0, 0)";
    },
    Er = function _renderSVGTransforms(t, e) {
      var r,
        i,
        n,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        c = o.rotation,
        d = o.skewX,
        p = o.skewY,
        _ = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        T = o.xOffset,
        b = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        k = parseFloat(f);
      c = parseFloat(c), d = parseFloat(d), (p = parseFloat(p)) && (d += p = parseFloat(p), c += p), c || d ? (c *= or, d *= or, r = Math.cos(c) * _, i = Math.sin(c) * _, n = Math.sin(c - d) * -m, a = Math.cos(c - d) * m, d && (p *= or, s = Math.tan(d - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ia(r), i = ia(i), n = ia(n), a = ia(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (x = _d(g, "x", l, "px"), k = _d(g, "y", f, "px")), (v || y || T || b) && (x = ia(x + v - (v * r + y * n) + T), k = ia(k + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = ia(x + u / 100 * s.width), k = ia(k + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")", g.setAttribute("transform", s), w && (g.style[dr] = s);
    };
  ha("padding,margin,Width,Radius", function (e, r) {
    var t = "Right",
      i = "Bottom",
      n = "Left",
      o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function (t) {
        return r < 2 ? e + t : "border" + t + e;
      });
    br[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
      var a, s;
      if (arguments.length < 4) return a = o.map(function (t) {
        return yr(e, t, r);
      }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
      a = (i + "").split(" "), s = {}, o.forEach(function (t, e) {
        return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0];
      }), e.init(t, s, n);
    };
  });
  var Dr,
    zr,
    Rr,
    Fr = {
      name: "css",
      register: Sd,
      targetTest: function targetTest(t) {
        return t.style && t.nodeType;
      },
      init: function init(t, e, i, n, a) {
        var s,
          o,
          u,
          h,
          l,
          f,
          c,
          d,
          p,
          _,
          m,
          g,
          v,
          y,
          T,
          b,
          w = this._props,
          x = t.style,
          k = i.vars.startAt;
        for (c in Fe || Sd(), this.styles = this.styles || Md(t), b = this.styles.props, this.tween = i, e) if ("autoRound" !== c && (o = e[c], !pt[c] || !ac(c, e, i, n, t, a))) if (l = _typeof(o), f = br[c], "function" === l && (l = _typeof(o = o.call(i, n, t, a))), "string" === l && ~o.indexOf("random(") && (o = ob(o)), f) f(this, t, c, o, i) && (T = 1);else if ("--" === c.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(c) + "").trim(), o += "", Dt.lastIndex = 0, Dt.test(s) || (d = Ya(s), p = Ya(o)), p ? d !== p && (s = _d(t, c, s, p) + p) : d && (o += d), this.add(x, "setProperty", s, o, n, a, 0, 0, c), w.push(c), b.push(c, 0, x[c]);else if ("undefined" !== l) {
          if (k && c in k ? (s = "function" == typeof k[c] ? k[c].call(i, n, t, a) : k[c], r(s) && ~s.indexOf("random(") && (s = ob(s)), Ya(s + "") || (s += q.units[c] || Ya(yr(t, c)) || ""), "=" === (s + "").charAt(1) && (s = yr(t, c))) : s = yr(t, c), h = parseFloat(s), (_ = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), u = parseFloat(o), c in cr && ("autoAlpha" === c && (1 === h && "hidden" === yr(t, "visibility") && u && (h = 0), b.push("visibility", 0, x.visibility), Yd(this, x, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== c && "transform" !== c && ~(c = cr[c]).indexOf(",") && (c = c.split(",")[0])), m = c in ar) {
            if (this.styles.save(c), g || ((v = t._gsap).renderTransform && !e.parseTransform || kr(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new _e(this._pt, x, dr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === c) this._pt = new _e(this._pt, v, "scaleY", v.scaleY, (_ ? ka(v.scaleY, _ + u) : u) - v.scaleY || 0, vd), this._pt.u = 0, w.push("scaleY", c), c += "X";else {
              if ("transformOrigin" === c) {
                b.push(pr, 0, x[pr]), o = de(o), v.svg ? le(t, o, 0, y, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Yd(this, v, "zOrigin", v.zOrigin, p), Yd(this, x, c, Mr(s), Mr(o)));
                continue;
              }
              if ("svgOrigin" === c) {
                le(t, o, 1, y, 0, this);
                continue;
              }
              if (c in xr) {
                ve(this, v, c, h, _ ? ka(h, _ + o) : o);
                continue;
              }
              if ("smoothOrigin" === c) {
                Yd(this, v, "smooth", v.smooth, o);
                continue;
              }
              if ("force3D" === c) {
                v[c] = o;
                continue;
              }
              if ("transform" === c) {
                xe(this, o, t);
                continue;
              }
            }
          } else c in x || (c = mr(c) || c);
          if (m || (u || 0 === u) && (h || 0 === h) && !fr.test(o) && c in x) u = u || 0, (d = (s + "").substr((h + "").length)) !== (p = Ya(o) || (c in q.units ? q.units[c] : d)) && (h = _d(t, c, s, p)), this._pt = new _e(this._pt, m ? v : x, c, h, (_ ? ka(h, _ + u) : u) - h, m || "px" !== p && "zIndex" !== c || !1 === e.autoRound ? vd : yd), this._pt.u = p || 0, d !== p && "%" !== p && (this._pt.b = s, this._pt.r = xd);else if (c in x) be.call(this, t, c, s, _ ? _ + o : o);else if (c in t) this.add(t, c, s || t[c], _ ? _ + o : o, n, a);else if ("parseTransform" !== c) {
            Q(c, o);
            continue;
          }
          m || (c in x ? b.push(c, 0, x[c]) : b.push(c, 1, s || t[c])), w.push(c);
        }
        T && pe(this);
      },
      render: function render(t, e) {
        if (e.tween._time || !Ie()) for (var r = e._pt; r;) r.r(t, r.d), r = r._next;else e.styles.revert();
      },
      get: yr,
      aliases: cr,
      getSetter: function getSetter(t, e, r) {
        var i = cr[e];
        return i && i.indexOf(",") < 0 && (e = i), e in ar && e !== pr && (t._gsap.x || yr(t, "x")) ? r && Le === r ? "scale" === e ? Ed : Dd : (Le = r || {}) && ("scale" === e ? Fd : Gd) : t.style && !u(t.style[e]) ? Bd : ~e.indexOf("-") ? Cd : ne(t, e);
      },
      core: {
        _removeProperty: Xd,
        _getMatrix: ke
      }
    };
  Ee.utils.checkPrefix = mr, Ee.core.getStyleSaver = Md, Rr = ha((Dr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (zr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
    ar[t] = 1;
  }), ha(zr, function (t) {
    q.units[t] = "deg", xr[t] = 1;
  }), cr[Rr[13]] = Dr + "," + zr, ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
    var e = t.split(":");
    cr[e[1]] = Rr[e[0]];
  }), ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
    q.units[t] = "px";
  }), Ee.registerPlugin(Fr);
  var Br = Ee.registerPlugin(Fr) || Ee,
    Lr = Br.core.Tween;
  e.Back = $e, e.Bounce = er, e.CSSPlugin = Fr, e.Circ = nr, e.Cubic = Ge, e.Elastic = Ze, e.Expo = ir, e.Linear = We, e.Power0 = qe, e.Power1 = Ve, e.Power2 = Ue, e.Power3 = Xe, e.Power4 = Ne, e.Quad = Qe, e.Quart = Ke, e.Quint = Je, e.Sine = rr, e.SteppedEase = tr, e.Strong = He, e.TimelineLite = Xt, e.TimelineMax = Xt, e.TweenLite = Zt, e.TweenMax = Lr, e["default"] = Br, e.gsap = Br;
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e["default"];
  }
});

/***/ }),

/***/ 693:
/***/ (() => {

(()=>{"use strict";var t={701:t=>{let e=0;t.exports={incr:()=>++e,decr:()=>--e,curr:()=>e}},941:t=>{t.exports=(t,e,r="")=>{const n=/url\(['"]?#([\w:.-]+)['"]?\)/g,a=/#([\w:.-]+)/g;return e.match(n)&&(e=e.replace(n,(function(e,r){return t[r]?`url(#${t[r]})`:e}))),["href","xlink:href"].includes(r)&&e.match(a)&&(e=e.replace(a,(function(e,r){return t[r]?`#${t[r]}`:e}))),e}},905:t=>{t.exports=(t,e,r)=>{const n=new RegExp("([^\r\n,{}]+)(,(?=[^}]*{)|s*{)","g");return t.replace(n,(function(t,n,a){if(n.match(/^\s*(@media|@.*keyframes|to|from|@font-face|1?[0-9]?[0-9])/))return n+a;const o=n.match(/#(\w+)/);return o&&r[o[1]]&&(n=n.replace(o[0],`#${r[o[1]]}`)),(n=n.replace(/^(\s*)/,"$1"+e+" "))+a}))}},741:(t,e,r)=>{function n(t){return new Promise(((e,r)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>r(t.error)}))}function a(t,e){const r=indexedDB.open(t);r.onupgradeneeded=()=>r.result.createObjectStore(e);const a=n(r);return(t,r)=>a.then((n=>r(n.transaction(e,t).objectStore(e))))}let o;function s(){return o||(o=a("keyval-store","keyval")),o}function i(t,e=s()){return e("readonly",(e=>n(e.get(t))))}function c(t,e,r=s()){return r("readwrite",(r=>(r.put(e,t),n(r.transaction))))}function u(t,e=s()){return e("readwrite",(e=>(t.forEach((t=>e.put(t[1],t[0]))),n(e.transaction))))}function l(t,e=s()){return e("readonly",(e=>Promise.all(t.map((t=>n(e.get(t)))))))}function d(t,e,r=s()){return r("readwrite",(r=>new Promise(((a,o)=>{r.get(t).onsuccess=function(){try{r.put(e(this.result),t),a(n(r.transaction))}catch(t){o(t)}}}))))}function f(t,e=s()){return e("readwrite",(e=>(e.delete(t),n(e.transaction))))}function h(t,e=s()){return e("readwrite",(e=>(t.forEach((t=>e.delete(t))),n(e.transaction))))}function b(t=s()){return t("readwrite",(t=>(t.clear(),n(t.transaction))))}function g(t,e){return t.openCursor().onsuccess=function(){this.result&&(e(this.result),this.result.continue())},n(t.transaction)}function p(t=s()){return t("readonly",(t=>{if(t.getAllKeys)return n(t.getAllKeys());const e=[];return g(t,(t=>e.push(t.key))).then((()=>e))}))}function y(t=s()){return t("readonly",(t=>{if(t.getAll)return n(t.getAll());const e=[];return g(t,(t=>e.push(t.value))).then((()=>e))}))}function m(t=s()){return t("readonly",(e=>{if(e.getAll&&e.getAllKeys)return Promise.all([n(e.getAllKeys()),n(e.getAll())]).then((([t,e])=>t.map(((t,r)=>[t,e[r]]))));const r=[];return t("readonly",(t=>g(t,(t=>r.push([t.key,t.value]))).then((()=>r))))}))}r.r(e),r.d(e,{clear:()=>b,createStore:()=>a,del:()=>f,delMany:()=>h,entries:()=>m,get:()=>i,getMany:()=>l,keys:()=>p,promisifyRequest:()=>n,set:()=>c,setMany:()=>u,update:()=>d,values:()=>y})}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const{get:t,set:e,del:n,entries:a}=r(741),o=r(905),s=r(941),i=r(701),c=[],u={},l=(t,e,r)=>{const{enableJs:n,disableUniqueIds:a,disableCssScoping:l,spriteIconId:d}=e,f=!!d,h=(new DOMParser).parseFromString(r,"text/html"),b=f?h.getElementById(d):h.querySelector("svg"),g=(()=>{if(c.length)return c;for(const t in document.body)t.startsWith("on")&&c.push(t);return c.push("onbegin","onend","onrepeat"),c.push("onfocusin","onfocusout","onbounce","onfinish","onshow"),c})(),p=u[t.getAttribute("data-id")]||new Set,y=t.getAttribute("data-id")||`svg-loader_${i.incr()}`,m={};if(a||Array.from(b.querySelectorAll("[id]")).forEach((t=>{const e=t.getAttribute("id"),r=`${e}_${i.incr()}`;t.setAttribute("id",r),m[e]=r})),Array.from(b.querySelectorAll("*")).concat(b).forEach((e=>{if("script"===e.tagName){if(e.remove(),!n)return;{const r=document.createElement("script");r.appendChild(e.childNodes[0]),t.appendChild(r)}}const r=[];for(let t=0;t<e.attributes.length;t++){const{name:a,value:o}=e.attributes[t],i=s(m,o,a);o!==i&&e.setAttribute(a,i),!g.includes(a.toLowerCase())||n?["href","xlink:href","values"].includes(a)&&o.startsWith("javascript")&&!n&&r.push(a):r.push(a)}if(r.forEach((t=>e.removeAttribute(t))),"style"===e.tagName&&!l){let t=o(e.innerHTML,`[data-id="${y}"]`,m);t=s(m,t),t!==e.innerHTML&&(e.innerHTML=t)}})),t.innerHTML=d?b.outerHTML:b.innerHTML,!f)for(let e=0;e<b.attributes.length;e++){const{name:r,value:n}=b.attributes[e];t.getAttribute(r)&&!p.has(r)||(p.add(r),t.setAttribute(r,n))}u[y]=p,t.setAttribute("data-id",y);const v=new CustomEvent("iconload",{bubbles:!0});if(t.dispatchEvent(v),t.getAttribute("oniconload")){t.setAttribute("onauxclick",t.getAttribute("oniconload"));const e=new CustomEvent("auxclick",{bubbles:!1,view:window});t.dispatchEvent(e),t.removeAttribute("onauxclick")}},d={},f={},h=async r=>{const a=new URL(r.getAttribute("data-src"),globalThis.location),o=a.toString().replace(a.hash,""),s=a.hash.replace("#",""),i=r.getAttribute("data-cache"),c="enabled"===r.getAttribute("data-js"),u="disabled"===r.getAttribute("data-unique-ids"),b="disabled"===r.getAttribute("data-css-scoping"),g=await(async e=>{let r;try{r=await t(`loader_${e}`)}catch(t){}if(!r)try{r=localStorage.getItem(`loader_${e}`)}catch(t){}if(r)return r=JSON.parse(r),Date.now()<r.expiry?r.data:void n(`loader_${e}`)})(o),p="disabled"!==i,y=l.bind(self,r,{enableJs:c,disableUniqueIds:u,disableCssScoping:b,spriteIconId:s});if(f[o]||p&&g){const t=f[o]||g;y(t)}else{if(d[o])return void setTimeout((()=>h(r)),20);d[o]=!0,fetch(o).then((t=>{if(!t.ok)throw Error(`Request for '${o}' returned ${t.status} (${t.statusText})`);return t.text()})).then((t=>{const r=t.toLowerCase().trim();if(!(r.startsWith("<svg")||r.startsWith("<?xml")||r.startsWith("<!doctype")))throw Error(`Resource '${o}' returned an invalid SVG file`);p&&(async(t,r,n)=>{const a=parseInt(n,10),o=JSON.stringify({data:r,expiry:Date.now()+(Number.isNaN(a)?2592e6:1e3*a)});try{await e(`loader_${t}`,o)}catch(e){try{localStorage.setItem(`loader_${t}`,o)}catch(t){console.warn("Failed to set cache: ",t)}}})(o,t,i),f[o]=t,y(t)})).catch((t=>{console.error(t)})).finally((()=>{delete d[o]}))}};let b;globalThis.IntersectionObserver&&(b=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&(h(t.target),b.unobserve(t.target))}))}),{rootMargin:"1200px"}));const g=[];function p(){Array.from(document.querySelectorAll("svg[data-src]:not([data-id])")).forEach((t=>{-1===g.indexOf(t)&&(g.push(t),"lazy"===t.getAttribute("data-loading")?b.observe(t):h(t))}))}let y=!1;if(globalThis.addEventListener){const m=setInterval((()=>{p()}),100);function v(){clearInterval(m),p(),y||(y=!0,new MutationObserver((t=>{t.some((t=>Array.from(t.addedNodes).some((t=>t.nodeType===Node.ELEMENT_NODE&&(t.getAttribute("data-src")&&!t.getAttribute("data-id")||t.querySelector("svg[data-src]:not([data-id])"))))))&&p(),t.forEach((t=>{"attributes"===t.type&&h(t.target)}))})).observe(document.documentElement,{attributeFilter:["data-src"],attributes:!0,childList:!0,subtree:!0}))}"interactive"===document.readyState?v():globalThis.addEventListener("DOMContentLoaded",(()=>{v()}))}globalThis.SVGLoader={},globalThis.SVGLoader.destroyCache=async()=>{try{const t=await a();for(const e of t)e[0].startsWith("loader_")&&await n(e[0])}catch(t){}Object.keys(localStorage).forEach((t=>{t.startsWith("loader_")&&localStorage.removeItem(t)}))}})()})();
//# sourceMappingURL=svg-loader.min.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./gsap/gsap.min.js
var gsap_min = __webpack_require__(523);
var gsap_min_default = /*#__PURE__*/__webpack_require__.n(gsap_min);
// EXTERNAL MODULE: ./gsap/SplitText.min.js
var SplitText_min = __webpack_require__(169);
var SplitText_min_default = /*#__PURE__*/__webpack_require__.n(SplitText_min);
// EXTERNAL MODULE: ./gsap/ScrollTrigger.min.js
var ScrollTrigger_min = __webpack_require__(482);
var ScrollTrigger_min_default = /*#__PURE__*/__webpack_require__.n(ScrollTrigger_min);
// EXTERNAL MODULE: ./gsap/ScrollSmoother.min.js
var ScrollSmoother_min = __webpack_require__(465);
var ScrollSmoother_min_default = /*#__PURE__*/__webpack_require__.n(ScrollSmoother_min);
// EXTERNAL MODULE: ./node_modules/external-svg-loader/dist/svg-loader.min.js
var svg_loader_min = __webpack_require__(693);
;// CONCATENATED MODULE: ./src/config.js
var COMMON_OPTIONS = {
  focus: 0,
  type: 'loop',
  gap: '1rem',
  autoplay: true,
  speed: 1000,
  dragAngleThreshold: 30,
  autoWidth: false,
  rewind: false,
  rewindSpeed: 400,
  waitForTransition: false,
  updateOnMove: true,
  trimSpace: false
};

// Helper Functions and Configuration
var defaultAnimationProperties = {
  duration: 1,
  ease: "power2.out"
};
var dataAttributeConfig = {
  "split-type": "words",
  target: "0",
  "plus-sign": "false"
};
function checkElementExistence(element) {
  return element !== null;
}
function checkLibrariesAvailability() {
  return "gsap" in window && "ScrollTrigger" in window;
}
function getDataAttribute(element, attributeName) {
  return element.getAttribute("data-".concat(attributeName)) || dataAttributeConfig[attributeName];
}

;// CONCATENATED MODULE: ./src/utils.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function getScrollTriggerConfig(triggerElement) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "top 80%";
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "center center";
  var toggleActions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "play none none none";
  return {
    trigger: triggerElement,
    start: start,
    end: end,
    toggleActions: toggleActions,
    scrub: true
  };
}
function getRandomAnimationDirection() {
  var directions = [{
    clipPath: "inset(0 100% 0 0)",
    opacity: 0
  },
  // Left to Right
  {
    clipPath: "inset(0 0 0 100%)",
    opacity: 0
  },
  // Right to Left
  {
    clipPath: "inset(100% 0 0 0)",
    opacity: 0
  },
  // Bottom to Top
  {
    clipPath: "inset(0 0 100% 0)",
    opacity: 0
  } // Top to Bottom
  ];

  return directions[Math.floor(Math.random() * directions.length)];
}
function splitTextContent(element) {
  var defaultType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "words";
  var type = getDataAttribute(element, "split-type") || defaultType;
  var splitChild = new SplitText(element, {
    type: type,
    linesClass: "".concat(type, "Child")
  });
  return splitChild[type] || splitChild.words;
}
function getAnimationProperties(specificProperties) {
  return _objectSpread(_objectSpread({}, defaultAnimationProperties), specificProperties);
}

function elementsExist(selectors) {
  if (Array.isArray(selectors)) {
    return selectors.every(function (selector) {
      return document.querySelector(selector);
    });
  }
  return !!document.querySelector(selectors);
}
;// CONCATENATED MODULE: ./src/animations.js
function animations_typeof(obj) { "@babel/helpers - typeof"; return animations_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, animations_typeof(obj); }
function animations_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function animations_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? animations_ownKeys(Object(source), !0).forEach(function (key) { animations_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : animations_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function animations_defineProperty(obj, key, value) { key = animations_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function animations_toPropertyKey(arg) { var key = animations_toPrimitive(arg, "string"); return animations_typeof(key) === "symbol" ? key : String(key); }
function animations_toPrimitive(input, hint) { if (animations_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (animations_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


function initializeAnimations() {
  if (!checkLibrariesAvailability()) return;

  // Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

  // Navbar Animation
  var $navbar = $("#navbar");
  if ($navbar.length) {
    ScrollTrigger.create({
      trigger: $navbar[0],
      start: "top top",
      endTrigger: "body",
      end: "bottom top",
      pin: true,
      pinSpacing: false
    });
  }

  // Impact Number Animation
  if (elementsExist('.impact_number-wrapper')) {
    gsap.from(".impact_number-wrapper", getAnimationProperties({
      opacity: 0,
      y: 100,
      stagger: 0.3,
      scrollTrigger: animations_objectSpread(animations_objectSpread({}, getScrollTriggerConfig(".impact_number-wrapper", "top 90%", "bottom 60%")), {}, {
        scrub: true,
        toggleActions: "play none none reverse"
      })
    }));
  }

  // SVG Animation
  if (elementsExist('#arabicSVG path')) {
    gsap.to("#arabicSVG path", getAnimationProperties({
      clipPath: "inset(0 0% 0 0)"
    }));
  }

  // Fade In Animations
  if (elementsExist('[animate-fade-in]')) {
    document.querySelectorAll("[animate-fade-in]").forEach(function (element) {
      gsap.to(element, getAnimationProperties({
        opacity: 1,
        scrollTrigger: getScrollTriggerConfig(element)
      }));
    });
  }

  // Number Animation
  if (elementsExist('.number_block')) {
    document.querySelectorAll(".number_block").forEach(function (block) {
      var target = parseInt(getDataAttribute(block, "target"), 10);
      var plusSign = getDataAttribute(block, "plus-sign") === "true";
      block.textContent = plusSign ? "0+" : "0";
      gsap.to({}, getAnimationProperties({
        onUpdate: function onUpdate() {
          block.textContent = plusSign ? "".concat(Math.round(this.progress() * target), "+") : "".concat(Math.round(this.progress() * target));
        },
        scrollTrigger: animations_objectSpread(animations_objectSpread({}, getScrollTriggerConfig(block, "top 80%", "bottom 20")), {}, {
          scrub: false,
          toggleActions: "play none none none"
        })
      }));
    });
  }

  // Background Color Animation
  if (elementsExist('.background-color-blue, .background-color-pink, .background-color-cyan')) {
    document.querySelectorAll(".background-color-blue, .background-color-pink, .background-color-cyan").forEach(function (background) {
      gsap.from(background, getAnimationProperties({
        backgroundColor: "#fff",
        scrollTrigger: getScrollTriggerConfig(background, "top bottom", "bottom bottom")
      }));
    });
  }
  var animateText = function animateText(selectors) {
    var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (elementsExist(selectors)) {
      $(selectors).each(function (_, element) {
        var splitElements = splitTextContent(element);
        gsap.from(splitElements, getAnimationProperties(animations_objectSpread(animations_objectSpread({}, properties), {}, {
          stagger: 0.25,
          scrollTrigger: getScrollTriggerConfig(element, "top 90%", "bottom center")
        })));
      });
    }
  };
  animateText("[animate-lines-up]", {
    y: 50,
    opacity: 0
  });
  animateText("[animate-words-up]", {
    opacity: 0,
    stagger: 0.15
  });
  animateText("[scrub-words]", {
    opacity: 0.1,
    stagger: 0.15
  });

  // Animate Sections
  if (elementsExist('[animate-section-left]')) {
    gsap.timeline().to("[animate-section-left]", getAnimationProperties({
      clipPath: "inset(0 0% 0 0)",
      delay: 0.3
    })).to("[animate-section-left]", getAnimationProperties({
      opacity: 1,
      delay: 0.1
    }));
  }
  var randomAnimationSelectors = '.news_grid .news_item_wrapper, .team_members-wrapper .team_member_item, [random-animation]';
  if (elementsExist(randomAnimationSelectors)) {
    document.querySelectorAll(randomAnimationSelectors).forEach(function (item) {
      var animationProperties = getRandomAnimationDirection();
      gsap.from(item, getAnimationProperties(animations_objectSpread(animations_objectSpread({}, animationProperties), {}, {
        scrollTrigger: getScrollTriggerConfig(item, "top 85%", "center center")
      })));
    });
  }

  // Button and Form Input Animations
  if (elementsExist('.button')) {
    document.querySelectorAll('.button').forEach(function (element) {
      gsap.fromTo(element, {
        clipPath: "inset(0 100% 0 0)"
      }, getAnimationProperties({
        clipPath: "inset(0 0% 0 0)",
        scrollTrigger: animations_objectSpread(animations_objectSpread({}, getScrollTriggerConfig(element)), {}, {
          scrub: true,
          toggleActions: "play none none none"
        })
      }));
    });
  }
  if (elementsExist('.form_input_wrap')) {
    document.querySelectorAll('.form_input_wrap').forEach(function (element) {
      gsap.fromTo(element, {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0.1
      }, getAnimationProperties({
        clipPath: "inset(0 0% 0 0)",
        opacity: 1,
        scrollTrigger: animations_objectSpread(animations_objectSpread({}, getScrollTriggerConfig(element)), {}, {
          scrub: true,
          toggleActions: "play none none none"
        })
      }));
    });
  }

  // Page Wrapper Smooth Scrolling
  var $pageWrapper = $(".page-wrapper");
  if (!$pageWrapper.hasClass("ignore-smooth")) {
    ScrollSmoother.create({
      content: ".page-wrapper",
      smooth: 2,
      effects: true,
      smoothTouch: 0.1
    });
  }
}

// Invoke initialization
if (checkLibrariesAvailability()) {}

;// CONCATENATED MODULE: ./node_modules/@splidejs/splide/dist/js/splide.esm.js
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
var CREATED = 1;
var MOUNTED = 2;
var IDLE = 3;
var MOVING = 4;
var SCROLLING = 5;
var DRAGGING = 6;
var DESTROYED = 7;
var STATES = {
  CREATED: CREATED,
  MOUNTED: MOUNTED,
  IDLE: IDLE,
  MOVING: MOVING,
  SCROLLING: SCROLLING,
  DRAGGING: DRAGGING,
  DESTROYED: DESTROYED
};

function empty(array) {
  array.length = 0;
}

function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}

function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}

var nextTick = setTimeout;

var noop = function noop() {};

function raf(func) {
  return requestAnimationFrame(func);
}

function typeOf(type, subject) {
  return typeof subject === type;
}

function isObject(subject) {
  return !isNull(subject) && typeOf("object", subject);
}

var isArray = Array.isArray;
var isFunction = apply(typeOf, "function");
var isString = apply(typeOf, "string");
var isUndefined = apply(typeOf, "undefined");

function isNull(subject) {
  return subject === null;
}

function isHTMLElement(subject) {
  try {
    return subject instanceof (subject.ownerDocument.defaultView || window).HTMLElement;
  } catch (e) {
    return false;
  }
}

function toArray(value) {
  return isArray(value) ? value : [value];
}

function forEach(values, iteratee) {
  toArray(values).forEach(iteratee);
}

function includes(array, value) {
  return array.indexOf(value) > -1;
}

function push(array, items) {
  array.push.apply(array, toArray(items));
  return array;
}

function toggleClass(elm, classes, add) {
  if (elm) {
    forEach(classes, function (name) {
      if (name) {
        elm.classList[add ? "add" : "remove"](name);
      }
    });
  }
}

function addClass(elm, classes) {
  toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}

function append(parent, children) {
  forEach(children, parent.appendChild.bind(parent));
}

function before(nodes, ref) {
  forEach(nodes, function (node) {
    var parent = (ref || node).parentNode;

    if (parent) {
      parent.insertBefore(node, ref);
    }
  });
}

function matches(elm, selector) {
  return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}

function children(parent, selector) {
  var children2 = parent ? slice(parent.children) : [];
  return selector ? children2.filter(function (child) {
    return matches(child, selector);
  }) : children2;
}

function child(parent, selector) {
  return selector ? children(parent, selector)[0] : parent.firstElementChild;
}

var splide_esm_ownKeys = Object.keys;

function forOwn(object, iteratee, right) {
  if (object) {
    (right ? splide_esm_ownKeys(object).reverse() : splide_esm_ownKeys(object)).forEach(function (key) {
      key !== "__proto__" && iteratee(object[key], key);
    });
  }

  return object;
}

function splide_esm_assign(object) {
  slice(arguments, 1).forEach(function (source) {
    forOwn(source, function (value, key) {
      object[key] = source[key];
    });
  });
  return object;
}

function merge(object) {
  slice(arguments, 1).forEach(function (source) {
    forOwn(source, function (value, key) {
      if (isArray(value)) {
        object[key] = value.slice();
      } else if (isObject(value)) {
        object[key] = merge({}, isObject(object[key]) ? object[key] : {}, value);
      } else {
        object[key] = value;
      }
    });
  });
  return object;
}

function omit(object, keys) {
  forEach(keys || splide_esm_ownKeys(object), function (key) {
    delete object[key];
  });
}

function removeAttribute(elms, attrs) {
  forEach(elms, function (elm) {
    forEach(attrs, function (attr) {
      elm && elm.removeAttribute(attr);
    });
  });
}

function setAttribute(elms, attrs, value) {
  if (isObject(attrs)) {
    forOwn(attrs, function (value2, name) {
      setAttribute(elms, name, value2);
    });
  } else {
    forEach(elms, function (elm) {
      isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
    });
  }
}

function create(tag, attrs, parent) {
  var elm = document.createElement(tag);

  if (attrs) {
    isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
  }

  parent && append(parent, elm);
  return elm;
}

function style(elm, prop, value) {
  if (isUndefined(value)) {
    return getComputedStyle(elm)[prop];
  }

  if (!isNull(value)) {
    elm.style[prop] = "" + value;
  }
}

function display(elm, display2) {
  style(elm, "display", display2);
}

function splide_esm_focus(elm) {
  elm["setActive"] && elm["setActive"]() || elm.focus({
    preventScroll: true
  });
}

function getAttribute(elm, attr) {
  return elm.getAttribute(attr);
}

function hasClass(elm, className) {
  return elm && elm.classList.contains(className);
}

function rect(target) {
  return target.getBoundingClientRect();
}

function remove(nodes) {
  forEach(nodes, function (node) {
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
}

function parseHtml(html) {
  return child(new DOMParser().parseFromString(html, "text/html").body);
}

function prevent(e, stopPropagation) {
  e.preventDefault();

  if (stopPropagation) {
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
}

function query(parent, selector) {
  return parent && parent.querySelector(selector);
}

function queryAll(parent, selector) {
  return selector ? slice(parent.querySelectorAll(selector)) : [];
}

function removeClass(elm, classes) {
  toggleClass(elm, classes, false);
}

function timeOf(e) {
  return e.timeStamp;
}

function unit(value) {
  return isString(value) ? value : value ? value + "px" : "";
}

var PROJECT_CODE = "splide";
var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;

function assert(condition, message) {
  if (!condition) {
    throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
  }
}

var min = Math.min,
    max = Math.max,
    floor = Math.floor,
    ceil = Math.ceil,
    abs = Math.abs;

function approximatelyEqual(x, y, epsilon) {
  return abs(x - y) < epsilon;
}

function between(number, x, y, exclusive) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
}

function clamp(number, x, y) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return min(max(minimum, number), maximum);
}

function sign(x) {
  return +(x > 0) - +(x < 0);
}

function camelToKebab(string) {
  return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function format(string, replacements) {
  forEach(replacements, function (replacement) {
    string = string.replace("%s", "" + replacement);
  });
  return string;
}

function pad(number) {
  return number < 10 ? "0" + number : "" + number;
}

var ids = {};

function uniqueId(prefix) {
  return "" + prefix + pad(ids[prefix] = (ids[prefix] || 0) + 1);
}

function EventBinder() {
  var listeners = [];

  function bind(targets, events, callback, options) {
    forEachEvent(targets, events, function (target, event, namespace) {
      var isEventTarget = ("addEventListener" in target);
      var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
      isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
      listeners.push([target, event, namespace, callback, remover]);
    });
  }

  function unbind(targets, events, callback) {
    forEachEvent(targets, events, function (target, event, namespace) {
      listeners = listeners.filter(function (listener) {
        if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
          listener[4]();
          return false;
        }

        return true;
      });
    });
  }

  function dispatch(target, type, detail) {
    var e;
    var bubbles = true;

    if (typeof CustomEvent === "function") {
      e = new CustomEvent(type, {
        bubbles: bubbles,
        detail: detail
      });
    } else {
      e = document.createEvent("CustomEvent");
      e.initCustomEvent(type, bubbles, false, detail);
    }

    target.dispatchEvent(e);
    return e;
  }

  function forEachEvent(targets, events, iteratee) {
    forEach(targets, function (target) {
      target && forEach(events, function (events2) {
        events2.split(" ").forEach(function (eventNS) {
          var fragment = eventNS.split(".");
          iteratee(target, fragment[0], fragment[1]);
        });
      });
    });
  }

  function destroy() {
    listeners.forEach(function (data) {
      data[4]();
    });
    empty(listeners);
  }

  return {
    bind: bind,
    unbind: unbind,
    dispatch: dispatch,
    destroy: destroy
  };
}

var EVENT_MOUNTED = "mounted";
var EVENT_READY = "ready";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_CLICK = "click";
var EVENT_ACTIVE = "active";
var EVENT_INACTIVE = "inactive";
var EVENT_VISIBLE = "visible";
var EVENT_HIDDEN = "hidden";
var EVENT_REFRESH = "refresh";
var EVENT_UPDATED = "updated";
var EVENT_RESIZE = "resize";
var EVENT_RESIZED = "resized";
var EVENT_DRAG = "drag";
var EVENT_DRAGGING = "dragging";
var EVENT_DRAGGED = "dragged";
var EVENT_SCROLL = "scroll";
var EVENT_SCROLLED = "scrolled";
var EVENT_OVERFLOW = "overflow";
var EVENT_DESTROY = "destroy";
var EVENT_ARROWS_MOUNTED = "arrows:mounted";
var EVENT_ARROWS_UPDATED = "arrows:updated";
var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
var EVENT_PAGINATION_UPDATED = "pagination:updated";
var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
var EVENT_AUTOPLAY_PLAY = "autoplay:play";
var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";
var EVENT_SLIDE_KEYDOWN = "sk";
var EVENT_SHIFTED = "sh";
var EVENT_END_INDEX_CHANGED = "ei";

function EventInterface(Splide2) {
  var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
  var binder = EventBinder();

  function on(events, callback) {
    binder.bind(bus, toArray(events).join(" "), function (e) {
      callback.apply(callback, isArray(e.detail) ? e.detail : []);
    });
  }

  function emit(event) {
    binder.dispatch(bus, event, slice(arguments, 1));
  }

  if (Splide2) {
    Splide2.event.on(EVENT_DESTROY, binder.destroy);
  }

  return splide_esm_assign(binder, {
    bus: bus,
    on: on,
    off: apply(binder.unbind, bus),
    emit: emit
  });
}

function RequestInterval(interval, onInterval, onUpdate, limit) {
  var now = Date.now;
  var startTime;
  var rate = 0;
  var id;
  var paused = true;
  var count = 0;

  function update() {
    if (!paused) {
      rate = interval ? min((now() - startTime) / interval, 1) : 1;
      onUpdate && onUpdate(rate);

      if (rate >= 1) {
        onInterval();
        startTime = now();

        if (limit && ++count >= limit) {
          return pause();
        }
      }

      id = raf(update);
    }
  }

  function start(resume) {
    resume || cancel();
    startTime = now() - (resume ? rate * interval : 0);
    paused = false;
    id = raf(update);
  }

  function pause() {
    paused = true;
  }

  function rewind() {
    startTime = now();
    rate = 0;

    if (onUpdate) {
      onUpdate(rate);
    }
  }

  function cancel() {
    id && cancelAnimationFrame(id);
    rate = 0;
    id = 0;
    paused = true;
  }

  function set(time) {
    interval = time;
  }

  function isPaused() {
    return paused;
  }

  return {
    start: start,
    rewind: rewind,
    pause: pause,
    cancel: cancel,
    set: set,
    isPaused: isPaused
  };
}

function State(initialState) {
  var state = initialState;

  function set(value) {
    state = value;
  }

  function is(states) {
    return includes(toArray(states), state);
  }

  return {
    set: set,
    is: is
  };
}

function Throttle(func, duration) {
  var interval = RequestInterval(duration || 0, func, null, 1);
  return function () {
    interval.isPaused() && interval.start();
  };
}

function Media(Splide2, Components2, options) {
  var state = Splide2.state;
  var breakpoints = options.breakpoints || {};
  var reducedMotion = options.reducedMotion || {};
  var binder = EventBinder();
  var queries = [];

  function setup() {
    var isMin = options.mediaQuery === "min";
    splide_esm_ownKeys(breakpoints).sort(function (n, m) {
      return isMin ? +n - +m : +m - +n;
    }).forEach(function (key) {
      register(breakpoints[key], "(" + (isMin ? "min" : "max") + "-width:" + key + "px)");
    });
    register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
    update();
  }

  function destroy(completely) {
    if (completely) {
      binder.destroy();
    }
  }

  function register(options2, query) {
    var queryList = matchMedia(query);
    binder.bind(queryList, "change", update);
    queries.push([options2, queryList]);
  }

  function update() {
    var destroyed = state.is(DESTROYED);
    var direction = options.direction;
    var merged = queries.reduce(function (merged2, entry) {
      return merge(merged2, entry[1].matches ? entry[0] : {});
    }, {});
    omit(options);
    set(merged);

    if (options.destroy) {
      Splide2.destroy(options.destroy === "completely");
    } else if (destroyed) {
      destroy(true);
      Splide2.mount();
    } else {
      direction !== options.direction && Splide2.refresh();
    }
  }

  function reduce(enable) {
    if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) {
      enable ? merge(options, reducedMotion) : omit(options, splide_esm_ownKeys(reducedMotion));
    }
  }

  function set(opts, base, notify) {
    merge(options, opts);
    base && merge(Object.getPrototypeOf(options), opts);

    if (notify || !state.is(CREATED)) {
      Splide2.emit(EVENT_UPDATED, options);
    }
  }

  return {
    setup: setup,
    destroy: destroy,
    reduce: reduce,
    set: set
  };
}

var ARROW = "Arrow";
var ARROW_LEFT = ARROW + "Left";
var ARROW_RIGHT = ARROW + "Right";
var ARROW_UP = ARROW + "Up";
var ARROW_DOWN = ARROW + "Down";
var LTR = "ltr";
var RTL = "rtl";
var TTB = "ttb";
var ORIENTATION_MAP = {
  width: ["height"],
  left: ["top", "right"],
  right: ["bottom", "left"],
  x: ["y"],
  X: ["Y"],
  Y: ["X"],
  ArrowLeft: [ARROW_UP, ARROW_RIGHT],
  ArrowRight: [ARROW_DOWN, ARROW_LEFT]
};

function Direction(Splide2, Components2, options) {
  function resolve(prop, axisOnly, direction) {
    direction = direction || options.direction;
    var index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
    return ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index] || prop.replace(/width|left|right/i, function (match, offset) {
      var replacement = ORIENTATION_MAP[match.toLowerCase()][index] || match;
      return offset > 0 ? replacement.charAt(0).toUpperCase() + replacement.slice(1) : replacement;
    });
  }

  function orient(value) {
    return value * (options.direction === RTL ? 1 : -1);
  }

  return {
    resolve: resolve,
    orient: orient
  };
}

var ROLE = "role";
var TAB_INDEX = "tabindex";
var DISABLED = "disabled";
var ARIA_PREFIX = "aria-";
var ARIA_CONTROLS = ARIA_PREFIX + "controls";
var ARIA_CURRENT = ARIA_PREFIX + "current";
var ARIA_SELECTED = ARIA_PREFIX + "selected";
var ARIA_LABEL = ARIA_PREFIX + "label";
var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
var ARIA_LIVE = ARIA_PREFIX + "live";
var ARIA_BUSY = ARIA_PREFIX + "busy";
var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
var ALL_ATTRIBUTES = [ROLE, TAB_INDEX, DISABLED, ARIA_CONTROLS, ARIA_CURRENT, ARIA_LABEL, ARIA_LABELLEDBY, ARIA_HIDDEN, ARIA_ORIENTATION, ARIA_ROLEDESCRIPTION];
var CLASS_PREFIX = PROJECT_CODE + "__";
var STATUS_CLASS_PREFIX = "is-";
var CLASS_ROOT = PROJECT_CODE;
var CLASS_TRACK = CLASS_PREFIX + "track";
var CLASS_LIST = CLASS_PREFIX + "list";
var CLASS_SLIDE = CLASS_PREFIX + "slide";
var CLASS_CLONE = CLASS_SLIDE + "--clone";
var CLASS_CONTAINER = CLASS_SLIDE + "__container";
var CLASS_ARROWS = CLASS_PREFIX + "arrows";
var CLASS_ARROW = CLASS_PREFIX + "arrow";
var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
var CLASS_PAGINATION = CLASS_PREFIX + "pagination";
var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
var CLASS_PROGRESS = CLASS_PREFIX + "progress";
var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
var CLASS_TOGGLE = CLASS_PREFIX + "toggle";
var CLASS_TOGGLE_PLAY = CLASS_TOGGLE + "__play";
var CLASS_TOGGLE_PAUSE = CLASS_TOGGLE + "__pause";
var CLASS_SPINNER = CLASS_PREFIX + "spinner";
var CLASS_SR = CLASS_PREFIX + "sr";
var CLASS_INITIALIZED = STATUS_CLASS_PREFIX + "initialized";
var CLASS_ACTIVE = STATUS_CLASS_PREFIX + "active";
var CLASS_PREV = STATUS_CLASS_PREFIX + "prev";
var CLASS_NEXT = STATUS_CLASS_PREFIX + "next";
var CLASS_VISIBLE = STATUS_CLASS_PREFIX + "visible";
var CLASS_LOADING = STATUS_CLASS_PREFIX + "loading";
var CLASS_FOCUS_IN = STATUS_CLASS_PREFIX + "focus-in";
var CLASS_OVERFLOW = STATUS_CLASS_PREFIX + "overflow";
var STATUS_CLASSES = [CLASS_ACTIVE, CLASS_VISIBLE, CLASS_PREV, CLASS_NEXT, CLASS_LOADING, CLASS_FOCUS_IN, CLASS_OVERFLOW];
var CLASSES = {
  slide: CLASS_SLIDE,
  clone: CLASS_CLONE,
  arrows: CLASS_ARROWS,
  arrow: CLASS_ARROW,
  prev: CLASS_ARROW_PREV,
  next: CLASS_ARROW_NEXT,
  pagination: CLASS_PAGINATION,
  page: CLASS_PAGINATION_PAGE,
  spinner: CLASS_SPINNER
};

function closest(from, selector) {
  if (isFunction(from.closest)) {
    return from.closest(selector);
  }

  var elm = from;

  while (elm && elm.nodeType === 1) {
    if (matches(elm, selector)) {
      break;
    }

    elm = elm.parentElement;
  }

  return elm;
}

var FRICTION = 5;
var LOG_INTERVAL = 200;
var POINTER_DOWN_EVENTS = "touchstart mousedown";
var POINTER_MOVE_EVENTS = "touchmove mousemove";
var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";

function Elements(Splide2, Components2, options) {
  var _EventInterface = EventInterface(Splide2),
      on = _EventInterface.on,
      bind = _EventInterface.bind;

  var root = Splide2.root;
  var i18n = options.i18n;
  var elements = {};
  var slides = [];
  var rootClasses = [];
  var trackClasses = [];
  var track;
  var list;
  var isUsingKey;

  function setup() {
    collect();
    init();
    update();
  }

  function mount() {
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, setup);
    on(EVENT_UPDATED, update);
    bind(document, POINTER_DOWN_EVENTS + " keydown", function (e) {
      isUsingKey = e.type === "keydown";
    }, {
      capture: true
    });
    bind(root, "focusin", function () {
      toggleClass(root, CLASS_FOCUS_IN, !!isUsingKey);
    });
  }

  function destroy(completely) {
    var attrs = ALL_ATTRIBUTES.concat("style");
    empty(slides);
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    removeAttribute([track, list], attrs);
    removeAttribute(root, completely ? attrs : ["style", ARIA_ROLEDESCRIPTION]);
  }

  function update() {
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    rootClasses = getClasses(CLASS_ROOT);
    trackClasses = getClasses(CLASS_TRACK);
    addClass(root, rootClasses);
    addClass(track, trackClasses);
    setAttribute(root, ARIA_LABEL, options.label);
    setAttribute(root, ARIA_LABELLEDBY, options.labelledby);
  }

  function collect() {
    track = find("." + CLASS_TRACK);
    list = child(track, "." + CLASS_LIST);
    assert(track && list, "A track/list element is missing.");
    push(slides, children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")"));
    forOwn({
      arrows: CLASS_ARROWS,
      pagination: CLASS_PAGINATION,
      prev: CLASS_ARROW_PREV,
      next: CLASS_ARROW_NEXT,
      bar: CLASS_PROGRESS_BAR,
      toggle: CLASS_TOGGLE
    }, function (className, key) {
      elements[key] = find("." + className);
    });
    splide_esm_assign(elements, {
      root: root,
      track: track,
      list: list,
      slides: slides
    });
  }

  function init() {
    var id = root.id || uniqueId(PROJECT_CODE);
    var role = options.role;
    root.id = id;
    track.id = track.id || id + "-track";
    list.id = list.id || id + "-list";

    if (!getAttribute(root, ROLE) && root.tagName !== "SECTION" && role) {
      setAttribute(root, ROLE, role);
    }

    setAttribute(root, ARIA_ROLEDESCRIPTION, i18n.carousel);
    setAttribute(list, ROLE, "presentation");
  }

  function find(selector) {
    var elm = query(root, selector);
    return elm && closest(elm, "." + CLASS_ROOT) === root ? elm : void 0;
  }

  function getClasses(base) {
    return [base + "--" + options.type, base + "--" + options.direction, options.drag && base + "--draggable", options.isNavigation && base + "--nav", base === CLASS_ROOT && CLASS_ACTIVE];
  }

  return splide_esm_assign(elements, {
    setup: setup,
    mount: mount,
    destroy: destroy
  });
}

var SLIDE = "slide";
var LOOP = "loop";
var FADE = "fade";

function Slide$1(Splide2, index, slideIndex, slide) {
  var event = EventInterface(Splide2);
  var on = event.on,
      emit = event.emit,
      bind = event.bind;
  var Components = Splide2.Components,
      root = Splide2.root,
      options = Splide2.options;
  var isNavigation = options.isNavigation,
      updateOnMove = options.updateOnMove,
      i18n = options.i18n,
      pagination = options.pagination,
      slideFocus = options.slideFocus;
  var resolve = Components.Direction.resolve;
  var styles = getAttribute(slide, "style");
  var label = getAttribute(slide, ARIA_LABEL);
  var isClone = slideIndex > -1;
  var container = child(slide, "." + CLASS_CONTAINER);
  var destroyed;

  function mount() {
    if (!isClone) {
      slide.id = root.id + "-slide" + pad(index + 1);
      setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
      setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n.slide);
      setAttribute(slide, ARIA_LABEL, label || format(i18n.slideLabel, [index + 1, Splide2.length]));
    }

    listen();
  }

  function listen() {
    bind(slide, "click", apply(emit, EVENT_CLICK, self));
    bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self));
    on([EVENT_MOVED, EVENT_SHIFTED, EVENT_SCROLLED], update);
    on(EVENT_NAVIGATION_MOUNTED, initNavigation);

    if (updateOnMove) {
      on(EVENT_MOVE, onMove);
    }
  }

  function destroy() {
    destroyed = true;
    event.destroy();
    removeClass(slide, STATUS_CLASSES);
    removeAttribute(slide, ALL_ATTRIBUTES);
    setAttribute(slide, "style", styles);
    setAttribute(slide, ARIA_LABEL, label || "");
  }

  function initNavigation() {
    var controls = Splide2.splides.map(function (target) {
      var Slide2 = target.splide.Components.Slides.getAt(index);
      return Slide2 ? Slide2.slide.id : "";
    }).join(" ");
    setAttribute(slide, ARIA_LABEL, format(i18n.slideX, (isClone ? slideIndex : index) + 1));
    setAttribute(slide, ARIA_CONTROLS, controls);
    setAttribute(slide, ROLE, slideFocus ? "button" : "");
    slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
  }

  function onMove() {
    if (!destroyed) {
      update();
    }
  }

  function update() {
    if (!destroyed) {
      var curr = Splide2.index;
      updateActivity();
      updateVisibility();
      toggleClass(slide, CLASS_PREV, index === curr - 1);
      toggleClass(slide, CLASS_NEXT, index === curr + 1);
    }
  }

  function updateActivity() {
    var active = isActive();

    if (active !== hasClass(slide, CLASS_ACTIVE)) {
      toggleClass(slide, CLASS_ACTIVE, active);
      setAttribute(slide, ARIA_CURRENT, isNavigation && active || "");
      emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
    }
  }

  function updateVisibility() {
    var visible = isVisible();
    var hidden = !visible && (!isActive() || isClone);

    if (!Splide2.state.is([MOVING, SCROLLING])) {
      setAttribute(slide, ARIA_HIDDEN, hidden || "");
    }

    setAttribute(queryAll(slide, options.focusableNodes || ""), TAB_INDEX, hidden ? -1 : "");

    if (slideFocus) {
      setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
    }

    if (visible !== hasClass(slide, CLASS_VISIBLE)) {
      toggleClass(slide, CLASS_VISIBLE, visible);
      emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
    }

    if (!visible && document.activeElement === slide) {
      var Slide2 = Components.Slides.getAt(Splide2.index);
      Slide2 && splide_esm_focus(Slide2.slide);
    }
  }

  function style$1(prop, value, useContainer) {
    style(useContainer && container || slide, prop, value);
  }

  function isActive() {
    var curr = Splide2.index;
    return curr === index || options.cloneStatus && curr === slideIndex;
  }

  function isVisible() {
    if (Splide2.is(FADE)) {
      return isActive();
    }

    var trackRect = rect(Components.Elements.track);
    var slideRect = rect(slide);
    var left = resolve("left", true);
    var right = resolve("right", true);
    return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
  }

  function isWithin(from, distance) {
    var diff = abs(from - index);

    if (!isClone && (options.rewind || Splide2.is(LOOP))) {
      diff = min(diff, Splide2.length - diff);
    }

    return diff <= distance;
  }

  var self = {
    index: index,
    slideIndex: slideIndex,
    slide: slide,
    container: container,
    isClone: isClone,
    mount: mount,
    destroy: destroy,
    update: update,
    style: style$1,
    isWithin: isWithin
  };
  return self;
}

function Slides(Splide2, Components2, options) {
  var _EventInterface2 = EventInterface(Splide2),
      on = _EventInterface2.on,
      emit = _EventInterface2.emit,
      bind = _EventInterface2.bind;

  var _Components2$Elements = Components2.Elements,
      slides = _Components2$Elements.slides,
      list = _Components2$Elements.list;
  var Slides2 = [];

  function mount() {
    init();
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, init);
  }

  function init() {
    slides.forEach(function (slide, index) {
      register(slide, index, -1);
    });
  }

  function destroy() {
    forEach$1(function (Slide2) {
      Slide2.destroy();
    });
    empty(Slides2);
  }

  function update() {
    forEach$1(function (Slide2) {
      Slide2.update();
    });
  }

  function register(slide, index, slideIndex) {
    var object = Slide$1(Splide2, index, slideIndex, slide);
    object.mount();
    Slides2.push(object);
    Slides2.sort(function (Slide1, Slide2) {
      return Slide1.index - Slide2.index;
    });
  }

  function get(excludeClones) {
    return excludeClones ? filter(function (Slide2) {
      return !Slide2.isClone;
    }) : Slides2;
  }

  function getIn(page) {
    var Controller = Components2.Controller;
    var index = Controller.toIndex(page);
    var max = Controller.hasFocus() ? 1 : options.perPage;
    return filter(function (Slide2) {
      return between(Slide2.index, index, index + max - 1);
    });
  }

  function getAt(index) {
    return filter(index)[0];
  }

  function add(items, index) {
    forEach(items, function (slide) {
      if (isString(slide)) {
        slide = parseHtml(slide);
      }

      if (isHTMLElement(slide)) {
        var ref = slides[index];
        ref ? before(slide, ref) : append(list, slide);
        addClass(slide, options.classes.slide);
        observeImages(slide, apply(emit, EVENT_RESIZE));
      }
    });
    emit(EVENT_REFRESH);
  }

  function remove$1(matcher) {
    remove(filter(matcher).map(function (Slide2) {
      return Slide2.slide;
    }));
    emit(EVENT_REFRESH);
  }

  function forEach$1(iteratee, excludeClones) {
    get(excludeClones).forEach(iteratee);
  }

  function filter(matcher) {
    return Slides2.filter(isFunction(matcher) ? matcher : function (Slide2) {
      return isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index);
    });
  }

  function style(prop, value, useContainer) {
    forEach$1(function (Slide2) {
      Slide2.style(prop, value, useContainer);
    });
  }

  function observeImages(elm, callback) {
    var images = queryAll(elm, "img");
    var length = images.length;

    if (length) {
      images.forEach(function (img) {
        bind(img, "load error", function () {
          if (! --length) {
            callback();
          }
        });
      });
    } else {
      callback();
    }
  }

  function getLength(excludeClones) {
    return excludeClones ? slides.length : Slides2.length;
  }

  function isEnough() {
    return Slides2.length > options.perPage;
  }

  return {
    mount: mount,
    destroy: destroy,
    update: update,
    register: register,
    get: get,
    getIn: getIn,
    getAt: getAt,
    add: add,
    remove: remove$1,
    forEach: forEach$1,
    filter: filter,
    style: style,
    getLength: getLength,
    isEnough: isEnough
  };
}

function Layout(Splide2, Components2, options) {
  var _EventInterface3 = EventInterface(Splide2),
      on = _EventInterface3.on,
      bind = _EventInterface3.bind,
      emit = _EventInterface3.emit;

  var Slides = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var _Components2$Elements2 = Components2.Elements,
      root = _Components2$Elements2.root,
      track = _Components2$Elements2.track,
      list = _Components2$Elements2.list;
  var getAt = Slides.getAt,
      styleSlides = Slides.style;
  var vertical;
  var rootRect;
  var overflow;

  function mount() {
    init();
    bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
    on([EVENT_UPDATED, EVENT_REFRESH], init);
    on(EVENT_RESIZE, resize);
  }

  function init() {
    vertical = options.direction === TTB;
    style(root, "maxWidth", unit(options.width));
    style(track, resolve("paddingLeft"), cssPadding(false));
    style(track, resolve("paddingRight"), cssPadding(true));
    resize(true);
  }

  function resize(force) {
    var newRect = rect(root);

    if (force || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
      style(track, "height", cssTrackHeight());
      styleSlides(resolve("marginRight"), unit(options.gap));
      styleSlides("width", cssSlideWidth());
      styleSlides("height", cssSlideHeight(), true);
      rootRect = newRect;
      emit(EVENT_RESIZED);

      if (overflow !== (overflow = isOverflow())) {
        toggleClass(root, CLASS_OVERFLOW, overflow);
        emit(EVENT_OVERFLOW, overflow);
      }
    }
  }

  function cssPadding(right) {
    var padding = options.padding;
    var prop = resolve(right ? "right" : "left");
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  }

  function cssTrackHeight() {
    var height = "";

    if (vertical) {
      height = cssHeight();
      assert(height, "height or heightRatio is missing.");
      height = "calc(" + height + " - " + cssPadding(false) + " - " + cssPadding(true) + ")";
    }

    return height;
  }

  function cssHeight() {
    return unit(options.height || rect(list).width * options.heightRatio);
  }

  function cssSlideWidth() {
    return options.autoWidth ? null : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
  }

  function cssSlideHeight() {
    return unit(options.fixedHeight) || (vertical ? options.autoHeight ? null : cssSlideSize() : cssHeight());
  }

  function cssSlideSize() {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  }

  function listSize() {
    return rect(list)[resolve("width")];
  }

  function slideSize(index, withoutGap) {
    var Slide = getAt(index || 0);
    return Slide ? rect(Slide.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
  }

  function totalSize(index, withoutGap) {
    var Slide = getAt(index);

    if (Slide) {
      var right = rect(Slide.slide)[resolve("right")];
      var left = rect(list)[resolve("left")];
      return abs(right - left) + (withoutGap ? 0 : getGap());
    }

    return 0;
  }

  function sliderSize(withoutGap) {
    return totalSize(Splide2.length - 1) - totalSize(0) + slideSize(0, withoutGap);
  }

  function getGap() {
    var Slide = getAt(0);
    return Slide && parseFloat(style(Slide.slide, resolve("marginRight"))) || 0;
  }

  function getPadding(right) {
    return parseFloat(style(track, resolve("padding" + (right ? "Right" : "Left")))) || 0;
  }

  function isOverflow() {
    return Splide2.is(FADE) || sliderSize(true) > listSize();
  }

  return {
    mount: mount,
    resize: resize,
    listSize: listSize,
    slideSize: slideSize,
    sliderSize: sliderSize,
    totalSize: totalSize,
    getPadding: getPadding,
    isOverflow: isOverflow
  };
}

var MULTIPLIER = 2;

function Clones(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on;
  var Elements = Components2.Elements,
      Slides = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var clones = [];
  var cloneCount;

  function mount() {
    on(EVENT_REFRESH, remount);
    on([EVENT_UPDATED, EVENT_RESIZE], observe);

    if (cloneCount = computeCloneCount()) {
      generate(cloneCount);
      Components2.Layout.resize(true);
    }
  }

  function remount() {
    destroy();
    mount();
  }

  function destroy() {
    remove(clones);
    empty(clones);
    event.destroy();
  }

  function observe() {
    var count = computeCloneCount();

    if (cloneCount !== count) {
      if (cloneCount < count || !count) {
        event.emit(EVENT_REFRESH);
      }
    }
  }

  function generate(count) {
    var slides = Slides.get().slice();
    var length = slides.length;

    if (length) {
      while (slides.length < count) {
        push(slides, slides);
      }

      push(slides.slice(-count), slides.slice(0, count)).forEach(function (Slide, index) {
        var isHead = index < count;
        var clone = cloneDeep(Slide.slide, index);
        isHead ? before(clone, slides[0].slide) : append(Elements.list, clone);
        push(clones, clone);
        Slides.register(clone, index - count + (isHead ? 0 : length), Slide.index);
      });
    }
  }

  function cloneDeep(elm, index) {
    var clone = elm.cloneNode(true);
    addClass(clone, options.classes.clone);
    clone.id = Splide2.root.id + "-clone" + pad(index + 1);
    return clone;
  }

  function computeCloneCount() {
    var clones2 = options.clones;

    if (!Splide2.is(LOOP)) {
      clones2 = 0;
    } else if (isUndefined(clones2)) {
      var fixedSize = options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
      var fixedCount = fixedSize && ceil(rect(Elements.track)[resolve("width")] / fixedSize);
      clones2 = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage * MULTIPLIER;
    }

    return clones2;
  }

  return {
    mount: mount,
    destroy: destroy
  };
}

function Move(Splide2, Components2, options) {
  var _EventInterface4 = EventInterface(Splide2),
      on = _EventInterface4.on,
      emit = _EventInterface4.emit;

  var set = Splide2.state.set;
  var _Components2$Layout = Components2.Layout,
      slideSize = _Components2$Layout.slideSize,
      getPadding = _Components2$Layout.getPadding,
      totalSize = _Components2$Layout.totalSize,
      listSize = _Components2$Layout.listSize,
      sliderSize = _Components2$Layout.sliderSize;
  var _Components2$Directio = Components2.Direction,
      resolve = _Components2$Directio.resolve,
      orient = _Components2$Directio.orient;
  var _Components2$Elements3 = Components2.Elements,
      list = _Components2$Elements3.list,
      track = _Components2$Elements3.track;
  var Transition;

  function mount() {
    Transition = Components2.Transition;
    on([EVENT_MOUNTED, EVENT_RESIZED, EVENT_UPDATED, EVENT_REFRESH], reposition);
  }

  function reposition() {
    if (!Components2.Controller.isBusy()) {
      Components2.Scroll.cancel();
      jump(Splide2.index);
      Components2.Slides.update();
    }
  }

  function move(dest, index, prev, callback) {
    if (dest !== index && canShift(dest > prev)) {
      cancel();
      translate(shift(getPosition(), dest > prev), true);
    }

    set(MOVING);
    emit(EVENT_MOVE, index, prev, dest);
    Transition.start(index, function () {
      set(IDLE);
      emit(EVENT_MOVED, index, prev, dest);
      callback && callback();
    });
  }

  function jump(index) {
    translate(toPosition(index, true));
  }

  function translate(position, preventLoop) {
    if (!Splide2.is(FADE)) {
      var destination = preventLoop ? position : loop(position);
      style(list, "transform", "translate" + resolve("X") + "(" + destination + "px)");
      position !== destination && emit(EVENT_SHIFTED);
    }
  }

  function loop(position) {
    if (Splide2.is(LOOP)) {
      var index = toIndex(position);
      var exceededMax = index > Components2.Controller.getEnd();
      var exceededMin = index < 0;

      if (exceededMin || exceededMax) {
        position = shift(position, exceededMax);
      }
    }

    return position;
  }

  function shift(position, backwards) {
    var excess = position - getLimit(backwards);
    var size = sliderSize();
    position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
    return position;
  }

  function cancel() {
    translate(getPosition(), true);
    Transition.cancel();
  }

  function toIndex(position) {
    var Slides = Components2.Slides.get();
    var index = 0;
    var minDistance = Infinity;

    for (var i = 0; i < Slides.length; i++) {
      var slideIndex = Slides[i].index;
      var distance = abs(toPosition(slideIndex, true) - position);

      if (distance <= minDistance) {
        minDistance = distance;
        index = slideIndex;
      } else {
        break;
      }
    }

    return index;
  }

  function toPosition(index, trimming) {
    var position = orient(totalSize(index - 1) - offset(index));
    return trimming ? trim(position) : position;
  }

  function getPosition() {
    var left = resolve("left");
    return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
  }

  function trim(position) {
    if (options.trimSpace && Splide2.is(SLIDE)) {
      position = clamp(position, 0, orient(sliderSize(true) - listSize()));
    }

    return position;
  }

  function offset(index) {
    var focus = options.focus;
    return focus === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus * slideSize(index) || 0;
  }

  function getLimit(max) {
    return toPosition(max ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
  }

  function canShift(backwards) {
    var shifted = orient(shift(getPosition(), backwards));
    return backwards ? shifted >= 0 : shifted <= list[resolve("scrollWidth")] - rect(track)[resolve("width")];
  }

  function exceededLimit(max, position) {
    position = isUndefined(position) ? getPosition() : position;
    var exceededMin = max !== true && orient(position) < orient(getLimit(false));
    var exceededMax = max !== false && orient(position) > orient(getLimit(true));
    return exceededMin || exceededMax;
  }

  return {
    mount: mount,
    move: move,
    jump: jump,
    translate: translate,
    shift: shift,
    cancel: cancel,
    toIndex: toIndex,
    toPosition: toPosition,
    getPosition: getPosition,
    getLimit: getLimit,
    exceededLimit: exceededLimit,
    reposition: reposition
  };
}

function Controller(Splide2, Components2, options) {
  var _EventInterface5 = EventInterface(Splide2),
      on = _EventInterface5.on,
      emit = _EventInterface5.emit;

  var Move = Components2.Move;
  var getPosition = Move.getPosition,
      getLimit = Move.getLimit,
      toPosition = Move.toPosition;
  var _Components2$Slides = Components2.Slides,
      isEnough = _Components2$Slides.isEnough,
      getLength = _Components2$Slides.getLength;
  var omitEnd = options.omitEnd;
  var isLoop = Splide2.is(LOOP);
  var isSlide = Splide2.is(SLIDE);
  var getNext = apply(getAdjacent, false);
  var getPrev = apply(getAdjacent, true);
  var currIndex = options.start || 0;
  var endIndex;
  var prevIndex = currIndex;
  var slideCount;
  var perMove;
  var perPage;

  function mount() {
    init();
    on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], init);
    on(EVENT_RESIZED, onResized);
  }

  function init() {
    slideCount = getLength(true);
    perMove = options.perMove;
    perPage = options.perPage;
    endIndex = getEnd();
    var index = clamp(currIndex, 0, omitEnd ? endIndex : slideCount - 1);

    if (index !== currIndex) {
      currIndex = index;
      Move.reposition();
    }
  }

  function onResized() {
    if (endIndex !== getEnd()) {
      emit(EVENT_END_INDEX_CHANGED);
    }
  }

  function go(control, allowSameIndex, callback) {
    if (!isBusy()) {
      var dest = parse(control);
      var index = loop(dest);

      if (index > -1 && (allowSameIndex || index !== currIndex)) {
        setIndex(index);
        Move.move(dest, index, prevIndex, callback);
      }
    }
  }

  function scroll(destination, duration, snap, callback) {
    Components2.Scroll.scroll(destination, duration, snap, function () {
      var index = loop(Move.toIndex(getPosition()));
      setIndex(omitEnd ? min(index, endIndex) : index);
      callback && callback();
    });
  }

  function parse(control) {
    var index = currIndex;

    if (isString(control)) {
      var _ref = control.match(/([+\-<>])(\d+)?/) || [],
          indicator = _ref[1],
          number = _ref[2];

      if (indicator === "+" || indicator === "-") {
        index = computeDestIndex(currIndex + +("" + indicator + (+number || 1)), currIndex);
      } else if (indicator === ">") {
        index = number ? toIndex(+number) : getNext(true);
      } else if (indicator === "<") {
        index = getPrev(true);
      }
    } else {
      index = isLoop ? control : clamp(control, 0, endIndex);
    }

    return index;
  }

  function getAdjacent(prev, destination) {
    var number = perMove || (hasFocus() ? 1 : perPage);
    var dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex, !(perMove || hasFocus()));

    if (dest === -1 && isSlide) {
      if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) {
        return prev ? 0 : endIndex;
      }
    }

    return destination ? dest : loop(dest);
  }

  function computeDestIndex(dest, from, snapPage) {
    if (isEnough() || hasFocus()) {
      var index = computeMovableDestIndex(dest);

      if (index !== dest) {
        from = dest;
        dest = index;
        snapPage = false;
      }

      if (dest < 0 || dest > endIndex) {
        if (!perMove && (between(0, dest, from, true) || between(endIndex, from, dest, true))) {
          dest = toIndex(toPage(dest));
        } else {
          if (isLoop) {
            dest = snapPage ? dest < 0 ? -(slideCount % perPage || perPage) : slideCount : dest;
          } else if (options.rewind) {
            dest = dest < 0 ? endIndex : 0;
          } else {
            dest = -1;
          }
        }
      } else {
        if (snapPage && dest !== from) {
          dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
        }
      }
    } else {
      dest = -1;
    }

    return dest;
  }

  function computeMovableDestIndex(dest) {
    if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
      var position = getPosition();

      while (position === toPosition(dest, true) && between(dest, 0, Splide2.length - 1, !options.rewind)) {
        dest < currIndex ? --dest : ++dest;
      }
    }

    return dest;
  }

  function loop(index) {
    return isLoop ? (index + slideCount) % slideCount || 0 : index;
  }

  function getEnd() {
    var end = slideCount - (hasFocus() || isLoop && perMove ? 1 : perPage);

    while (omitEnd && end-- > 0) {
      if (toPosition(slideCount - 1, true) !== toPosition(end, true)) {
        end++;
        break;
      }
    }

    return clamp(end, 0, slideCount - 1);
  }

  function toIndex(page) {
    return clamp(hasFocus() ? page : perPage * page, 0, endIndex);
  }

  function toPage(index) {
    return hasFocus() ? min(index, endIndex) : floor((index >= endIndex ? slideCount - 1 : index) / perPage);
  }

  function toDest(destination) {
    var closest = Move.toIndex(destination);
    return isSlide ? clamp(closest, 0, endIndex) : closest;
  }

  function setIndex(index) {
    if (index !== currIndex) {
      prevIndex = currIndex;
      currIndex = index;
    }
  }

  function getIndex(prev) {
    return prev ? prevIndex : currIndex;
  }

  function hasFocus() {
    return !isUndefined(options.focus) || options.isNavigation;
  }

  function isBusy() {
    return Splide2.state.is([MOVING, SCROLLING]) && !!options.waitForTransition;
  }

  return {
    mount: mount,
    go: go,
    scroll: scroll,
    getNext: getNext,
    getPrev: getPrev,
    getAdjacent: getAdjacent,
    getEnd: getEnd,
    setIndex: setIndex,
    getIndex: getIndex,
    toIndex: toIndex,
    toPage: toPage,
    toDest: toDest,
    hasFocus: hasFocus,
    isBusy: isBusy
  };
}

var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
var PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
var SIZE = 40;

function Arrows(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on,
      bind = event.bind,
      emit = event.emit;
  var classes = options.classes,
      i18n = options.i18n;
  var Elements = Components2.Elements,
      Controller = Components2.Controller;
  var placeholder = Elements.arrows,
      track = Elements.track;
  var wrapper = placeholder;
  var prev = Elements.prev;
  var next = Elements.next;
  var created;
  var wrapperClasses;
  var arrows = {};

  function mount() {
    init();
    on(EVENT_UPDATED, remount);
  }

  function remount() {
    destroy();
    mount();
  }

  function init() {
    var enabled = options.arrows;

    if (enabled && !(prev && next)) {
      createArrows();
    }

    if (prev && next) {
      splide_esm_assign(arrows, {
        prev: prev,
        next: next
      });
      display(wrapper, enabled ? "" : "none");
      addClass(wrapper, wrapperClasses = CLASS_ARROWS + "--" + options.direction);

      if (enabled) {
        listen();
        update();
        setAttribute([prev, next], ARIA_CONTROLS, track.id);
        emit(EVENT_ARROWS_MOUNTED, prev, next);
      }
    }
  }

  function destroy() {
    event.destroy();
    removeClass(wrapper, wrapperClasses);

    if (created) {
      remove(placeholder ? [prev, next] : wrapper);
      prev = next = null;
    } else {
      removeAttribute([prev, next], ALL_ATTRIBUTES);
    }
  }

  function listen() {
    on([EVENT_MOUNTED, EVENT_MOVED, EVENT_REFRESH, EVENT_SCROLLED, EVENT_END_INDEX_CHANGED], update);
    bind(next, "click", apply(go, ">"));
    bind(prev, "click", apply(go, "<"));
  }

  function go(control) {
    Controller.go(control, true);
  }

  function createArrows() {
    wrapper = placeholder || create("div", classes.arrows);
    prev = createArrow(true);
    next = createArrow(false);
    created = true;
    append(wrapper, [prev, next]);
    !placeholder && before(wrapper, track);
  }

  function createArrow(prev2) {
    var arrow = "<button class=\"" + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + "\" type=\"button\"><svg xmlns=\"" + XML_NAME_SPACE + "\" viewBox=\"0 0 " + SIZE + " " + SIZE + "\" width=\"" + SIZE + "\" height=\"" + SIZE + "\" focusable=\"false\"><path d=\"" + (options.arrowPath || PATH) + "\" />";
    return parseHtml(arrow);
  }

  function update() {
    if (prev && next) {
      var index = Splide2.index;
      var prevIndex = Controller.getPrev();
      var nextIndex = Controller.getNext();
      var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
      var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
      prev.disabled = prevIndex < 0;
      next.disabled = nextIndex < 0;
      setAttribute(prev, ARIA_LABEL, prevLabel);
      setAttribute(next, ARIA_LABEL, nextLabel);
      emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
    }
  }

  return {
    arrows: arrows,
    mount: mount,
    destroy: destroy,
    update: update
  };
}

var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";

function Autoplay(Splide2, Components2, options) {
  var _EventInterface6 = EventInterface(Splide2),
      on = _EventInterface6.on,
      bind = _EventInterface6.bind,
      emit = _EventInterface6.emit;

  var interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), onAnimationFrame);
  var isPaused = interval.isPaused;
  var Elements = Components2.Elements,
      _Components2$Elements4 = Components2.Elements,
      root = _Components2$Elements4.root,
      toggle = _Components2$Elements4.toggle;
  var autoplay = options.autoplay;
  var hovered;
  var focused;
  var stopped = autoplay === "pause";

  function mount() {
    if (autoplay) {
      listen();
      toggle && setAttribute(toggle, ARIA_CONTROLS, Elements.track.id);
      stopped || play();
      update();
    }
  }

  function listen() {
    if (options.pauseOnHover) {
      bind(root, "mouseenter mouseleave", function (e) {
        hovered = e.type === "mouseenter";
        autoToggle();
      });
    }

    if (options.pauseOnFocus) {
      bind(root, "focusin focusout", function (e) {
        focused = e.type === "focusin";
        autoToggle();
      });
    }

    if (toggle) {
      bind(toggle, "click", function () {
        stopped ? play() : pause(true);
      });
    }

    on([EVENT_MOVE, EVENT_SCROLL, EVENT_REFRESH], interval.rewind);
    on(EVENT_MOVE, onMove);
  }

  function play() {
    if (isPaused() && Components2.Slides.isEnough()) {
      interval.start(!options.resetProgress);
      focused = hovered = stopped = false;
      update();
      emit(EVENT_AUTOPLAY_PLAY);
    }
  }

  function pause(stop) {
    if (stop === void 0) {
      stop = true;
    }

    stopped = !!stop;
    update();

    if (!isPaused()) {
      interval.pause();
      emit(EVENT_AUTOPLAY_PAUSE);
    }
  }

  function autoToggle() {
    if (!stopped) {
      hovered || focused ? pause(false) : play();
    }
  }

  function update() {
    if (toggle) {
      toggleClass(toggle, CLASS_ACTIVE, !stopped);
      setAttribute(toggle, ARIA_LABEL, options.i18n[stopped ? "play" : "pause"]);
    }
  }

  function onAnimationFrame(rate) {
    var bar = Elements.bar;
    bar && style(bar, "width", rate * 100 + "%");
    emit(EVENT_AUTOPLAY_PLAYING, rate);
  }

  function onMove(index) {
    var Slide = Components2.Slides.getAt(index);
    interval.set(Slide && +getAttribute(Slide.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
  }

  return {
    mount: mount,
    destroy: interval.cancel,
    play: play,
    pause: pause,
    isPaused: isPaused
  };
}

function Cover(Splide2, Components2, options) {
  var _EventInterface7 = EventInterface(Splide2),
      on = _EventInterface7.on;

  function mount() {
    if (options.cover) {
      on(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
      on([EVENT_MOUNTED, EVENT_UPDATED, EVENT_REFRESH], apply(cover, true));
    }
  }

  function cover(cover2) {
    Components2.Slides.forEach(function (Slide) {
      var img = child(Slide.container || Slide.slide, "img");

      if (img && img.src) {
        toggle(cover2, img, Slide);
      }
    });
  }

  function toggle(cover2, img, Slide) {
    Slide.style("background", cover2 ? "center/cover no-repeat url(\"" + img.src + "\")" : "", true);
    display(img, cover2 ? "none" : "");
  }

  return {
    mount: mount,
    destroy: apply(cover, false)
  };
}

var BOUNCE_DIFF_THRESHOLD = 10;
var BOUNCE_DURATION = 600;
var FRICTION_FACTOR = 0.6;
var BASE_VELOCITY = 1.5;
var MIN_DURATION = 800;

function Scroll(Splide2, Components2, options) {
  var _EventInterface8 = EventInterface(Splide2),
      on = _EventInterface8.on,
      emit = _EventInterface8.emit;

  var set = Splide2.state.set;
  var Move = Components2.Move;
  var getPosition = Move.getPosition,
      getLimit = Move.getLimit,
      exceededLimit = Move.exceededLimit,
      translate = Move.translate;
  var isSlide = Splide2.is(SLIDE);
  var interval;
  var callback;
  var friction = 1;

  function mount() {
    on(EVENT_MOVE, clear);
    on([EVENT_UPDATED, EVENT_REFRESH], cancel);
  }

  function scroll(destination, duration, snap, onScrolled, noConstrain) {
    var from = getPosition();
    clear();

    if (snap && (!isSlide || !exceededLimit())) {
      var size = Components2.Layout.sliderSize();
      var offset = sign(destination) * size * floor(abs(destination) / size) || 0;
      destination = Move.toPosition(Components2.Controller.toDest(destination % size)) + offset;
    }

    var noDistance = approximatelyEqual(from, destination, 1);
    friction = 1;
    duration = noDistance ? 0 : duration || max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
    callback = onScrolled;
    interval = RequestInterval(duration, onEnd, apply(update, from, destination, noConstrain), 1);
    set(SCROLLING);
    emit(EVENT_SCROLL);
    interval.start();
  }

  function onEnd() {
    set(IDLE);
    callback && callback();
    emit(EVENT_SCROLLED);
  }

  function update(from, to, noConstrain, rate) {
    var position = getPosition();
    var target = from + (to - from) * easing(rate);
    var diff = (target - position) * friction;
    translate(position + diff);

    if (isSlide && !noConstrain && exceededLimit()) {
      friction *= FRICTION_FACTOR;

      if (abs(diff) < BOUNCE_DIFF_THRESHOLD) {
        scroll(getLimit(exceededLimit(true)), BOUNCE_DURATION, false, callback, true);
      }
    }
  }

  function clear() {
    if (interval) {
      interval.cancel();
    }
  }

  function cancel() {
    if (interval && !interval.isPaused()) {
      clear();
      onEnd();
    }
  }

  function easing(t) {
    var easingFunc = options.easingFunc;
    return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
  }

  return {
    mount: mount,
    destroy: clear,
    scroll: scroll,
    cancel: cancel
  };
}

var SCROLL_LISTENER_OPTIONS = {
  passive: false,
  capture: true
};

function Drag(Splide2, Components2, options) {
  var _EventInterface9 = EventInterface(Splide2),
      on = _EventInterface9.on,
      emit = _EventInterface9.emit,
      bind = _EventInterface9.bind,
      unbind = _EventInterface9.unbind;

  var state = Splide2.state;
  var Move = Components2.Move,
      Scroll = Components2.Scroll,
      Controller = Components2.Controller,
      track = Components2.Elements.track,
      reduce = Components2.Media.reduce;
  var _Components2$Directio2 = Components2.Direction,
      resolve = _Components2$Directio2.resolve,
      orient = _Components2$Directio2.orient;
  var getPosition = Move.getPosition,
      exceededLimit = Move.exceededLimit;
  var basePosition;
  var baseEvent;
  var prevBaseEvent;
  var isFree;
  var dragging;
  var exceeded = false;
  var clickPrevented;
  var disabled;
  var target;

  function mount() {
    bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
    bind(track, "click", onClick, {
      capture: true
    });
    bind(track, "dragstart", prevent);
    on([EVENT_MOUNTED, EVENT_UPDATED], init);
  }

  function init() {
    var drag = options.drag;
    disable(!drag);
    isFree = drag === "free";
  }

  function onPointerDown(e) {
    clickPrevented = false;

    if (!disabled) {
      var isTouch = isTouchEvent(e);

      if (isDraggable(e.target) && (isTouch || !e.button)) {
        if (!Controller.isBusy()) {
          target = isTouch ? track : window;
          dragging = state.is([MOVING, SCROLLING]);
          prevBaseEvent = null;
          bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
          bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
          Move.cancel();
          Scroll.cancel();
          save(e);
        } else {
          prevent(e, true);
        }
      }
    }
  }

  function onPointerMove(e) {
    if (!state.is(DRAGGING)) {
      state.set(DRAGGING);
      emit(EVENT_DRAG);
    }

    if (e.cancelable) {
      if (dragging) {
        Move.translate(basePosition + constrain(diffCoord(e)));
        var expired = diffTime(e) > LOG_INTERVAL;
        var hasExceeded = exceeded !== (exceeded = exceededLimit());

        if (expired || hasExceeded) {
          save(e);
        }

        clickPrevented = true;
        emit(EVENT_DRAGGING);
        prevent(e);
      } else if (isSliderDirection(e)) {
        dragging = shouldStart(e);
        prevent(e);
      }
    }
  }

  function onPointerUp(e) {
    if (state.is(DRAGGING)) {
      state.set(IDLE);
      emit(EVENT_DRAGGED);
    }

    if (dragging) {
      move(e);
      prevent(e);
    }

    unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
    unbind(target, POINTER_UP_EVENTS, onPointerUp);
    dragging = false;
  }

  function onClick(e) {
    if (!disabled && clickPrevented) {
      prevent(e, true);
    }
  }

  function save(e) {
    prevBaseEvent = baseEvent;
    baseEvent = e;
    basePosition = getPosition();
  }

  function move(e) {
    var velocity = computeVelocity(e);
    var destination = computeDestination(velocity);
    var rewind = options.rewind && options.rewindByDrag;
    reduce(false);

    if (isFree) {
      Controller.scroll(destination, 0, options.snap);
    } else if (Splide2.is(FADE)) {
      Controller.go(orient(sign(velocity)) < 0 ? rewind ? "<" : "-" : rewind ? ">" : "+");
    } else if (Splide2.is(SLIDE) && exceeded && rewind) {
      Controller.go(exceededLimit(true) ? ">" : "<");
    } else {
      Controller.go(Controller.toDest(destination), true);
    }

    reduce(true);
  }

  function shouldStart(e) {
    var thresholds = options.dragMinThreshold;
    var isObj = isObject(thresholds);
    var mouse = isObj && thresholds.mouse || 0;
    var touch = (isObj ? thresholds.touch : +thresholds) || 10;
    return abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
  }

  function isSliderDirection(e) {
    return abs(diffCoord(e)) > abs(diffCoord(e, true));
  }

  function computeVelocity(e) {
    if (Splide2.is(LOOP) || !exceeded) {
      var time = diffTime(e);

      if (time && time < LOG_INTERVAL) {
        return diffCoord(e) / time;
      }
    }

    return 0;
  }

  function computeDestination(velocity) {
    return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
  }

  function diffCoord(e, orthogonal) {
    return coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal);
  }

  function diffTime(e) {
    return timeOf(e) - timeOf(getBaseEvent(e));
  }

  function getBaseEvent(e) {
    return baseEvent === e && prevBaseEvent || baseEvent;
  }

  function coordOf(e, orthogonal) {
    return (isTouchEvent(e) ? e.changedTouches[0] : e)["page" + resolve(orthogonal ? "Y" : "X")];
  }

  function constrain(diff) {
    return diff / (exceeded && Splide2.is(SLIDE) ? FRICTION : 1);
  }

  function isDraggable(target2) {
    var noDrag = options.noDrag;
    return !matches(target2, "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW) && (!noDrag || !matches(target2, noDrag));
  }

  function isTouchEvent(e) {
    return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
  }

  function isDragging() {
    return dragging;
  }

  function disable(value) {
    disabled = value;
  }

  return {
    mount: mount,
    disable: disable,
    isDragging: isDragging
  };
}

var NORMALIZATION_MAP = {
  Spacebar: " ",
  Right: ARROW_RIGHT,
  Left: ARROW_LEFT,
  Up: ARROW_UP,
  Down: ARROW_DOWN
};

function normalizeKey(key) {
  key = isString(key) ? key : key.key;
  return NORMALIZATION_MAP[key] || key;
}

var KEYBOARD_EVENT = "keydown";

function Keyboard(Splide2, Components2, options) {
  var _EventInterface10 = EventInterface(Splide2),
      on = _EventInterface10.on,
      bind = _EventInterface10.bind,
      unbind = _EventInterface10.unbind;

  var root = Splide2.root;
  var resolve = Components2.Direction.resolve;
  var target;
  var disabled;

  function mount() {
    init();
    on(EVENT_UPDATED, destroy);
    on(EVENT_UPDATED, init);
    on(EVENT_MOVE, onMove);
  }

  function init() {
    var keyboard = options.keyboard;

    if (keyboard) {
      target = keyboard === "global" ? window : root;
      bind(target, KEYBOARD_EVENT, onKeydown);
    }
  }

  function destroy() {
    unbind(target, KEYBOARD_EVENT);
  }

  function disable(value) {
    disabled = value;
  }

  function onMove() {
    var _disabled = disabled;
    disabled = true;
    nextTick(function () {
      disabled = _disabled;
    });
  }

  function onKeydown(e) {
    if (!disabled) {
      var key = normalizeKey(e);

      if (key === resolve(ARROW_LEFT)) {
        Splide2.go("<");
      } else if (key === resolve(ARROW_RIGHT)) {
        Splide2.go(">");
      }
    }
  }

  return {
    mount: mount,
    destroy: destroy,
    disable: disable
  };
}

var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
var IMAGE_SELECTOR = "[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";

function LazyLoad(Splide2, Components2, options) {
  var _EventInterface11 = EventInterface(Splide2),
      on = _EventInterface11.on,
      off = _EventInterface11.off,
      bind = _EventInterface11.bind,
      emit = _EventInterface11.emit;

  var isSequential = options.lazyLoad === "sequential";
  var events = [EVENT_MOVED, EVENT_SCROLLED];
  var entries = [];

  function mount() {
    if (options.lazyLoad) {
      init();
      on(EVENT_REFRESH, init);
    }
  }

  function init() {
    empty(entries);
    register();

    if (isSequential) {
      loadNext();
    } else {
      off(events);
      on(events, check);
      check();
    }
  }

  function register() {
    Components2.Slides.forEach(function (Slide) {
      queryAll(Slide.slide, IMAGE_SELECTOR).forEach(function (img) {
        var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
        var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);

        if (src !== img.src || srcset !== img.srcset) {
          var className = options.classes.spinner;
          var parent = img.parentElement;
          var spinner = child(parent, "." + className) || create("span", className, parent);
          entries.push([img, Slide, spinner]);
          img.src || display(img, "none");
        }
      });
    });
  }

  function check() {
    entries = entries.filter(function (data) {
      var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
      return data[1].isWithin(Splide2.index, distance) ? load(data) : true;
    });
    entries.length || off(events);
  }

  function load(data) {
    var img = data[0];
    addClass(data[1].slide, CLASS_LOADING);
    bind(img, "load error", apply(onLoad, data));
    setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
    setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_ATTRIBUTE));
    removeAttribute(img, SRC_DATA_ATTRIBUTE);
    removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
  }

  function onLoad(data, e) {
    var img = data[0],
        Slide = data[1];
    removeClass(Slide.slide, CLASS_LOADING);

    if (e.type !== "error") {
      remove(data[2]);
      display(img, "");
      emit(EVENT_LAZYLOAD_LOADED, img, Slide);
      emit(EVENT_RESIZE);
    }

    isSequential && loadNext();
  }

  function loadNext() {
    entries.length && load(entries.shift());
  }

  return {
    mount: mount,
    destroy: apply(empty, entries),
    check: check
  };
}

function Pagination(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on,
      emit = event.emit,
      bind = event.bind;
  var Slides = Components2.Slides,
      Elements = Components2.Elements,
      Controller = Components2.Controller;
  var hasFocus = Controller.hasFocus,
      getIndex = Controller.getIndex,
      go = Controller.go;
  var resolve = Components2.Direction.resolve;
  var placeholder = Elements.pagination;
  var items = [];
  var list;
  var paginationClasses;

  function mount() {
    destroy();
    on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], mount);
    var enabled = options.pagination;
    placeholder && display(placeholder, enabled ? "" : "none");

    if (enabled) {
      on([EVENT_MOVE, EVENT_SCROLL, EVENT_SCROLLED], update);
      createPagination();
      update();
      emit(EVENT_PAGINATION_MOUNTED, {
        list: list,
        items: items
      }, getAt(Splide2.index));
    }
  }

  function destroy() {
    if (list) {
      remove(placeholder ? slice(list.children) : list);
      removeClass(list, paginationClasses);
      empty(items);
      list = null;
    }

    event.destroy();
  }

  function createPagination() {
    var length = Splide2.length;
    var classes = options.classes,
        i18n = options.i18n,
        perPage = options.perPage;
    var max = hasFocus() ? Controller.getEnd() + 1 : ceil(length / perPage);
    list = placeholder || create("ul", classes.pagination, Elements.track.parentElement);
    addClass(list, paginationClasses = CLASS_PAGINATION + "--" + getDirection());
    setAttribute(list, ROLE, "tablist");
    setAttribute(list, ARIA_LABEL, i18n.select);
    setAttribute(list, ARIA_ORIENTATION, getDirection() === TTB ? "vertical" : "");

    for (var i = 0; i < max; i++) {
      var li = create("li", null, list);
      var button = create("button", {
        class: classes.page,
        type: "button"
      }, li);
      var controls = Slides.getIn(i).map(function (Slide) {
        return Slide.slide.id;
      });
      var text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
      bind(button, "click", apply(onClick, i));

      if (options.paginationKeyboard) {
        bind(button, "keydown", apply(onKeydown, i));
      }

      setAttribute(li, ROLE, "presentation");
      setAttribute(button, ROLE, "tab");
      setAttribute(button, ARIA_CONTROLS, controls.join(" "));
      setAttribute(button, ARIA_LABEL, format(text, i + 1));
      setAttribute(button, TAB_INDEX, -1);
      items.push({
        li: li,
        button: button,
        page: i
      });
    }
  }

  function onClick(page) {
    go(">" + page, true);
  }

  function onKeydown(page, e) {
    var length = items.length;
    var key = normalizeKey(e);
    var dir = getDirection();
    var nextPage = -1;

    if (key === resolve(ARROW_RIGHT, false, dir)) {
      nextPage = ++page % length;
    } else if (key === resolve(ARROW_LEFT, false, dir)) {
      nextPage = (--page + length) % length;
    } else if (key === "Home") {
      nextPage = 0;
    } else if (key === "End") {
      nextPage = length - 1;
    }

    var item = items[nextPage];

    if (item) {
      splide_esm_focus(item.button);
      go(">" + nextPage);
      prevent(e, true);
    }
  }

  function getDirection() {
    return options.paginationDirection || options.direction;
  }

  function getAt(index) {
    return items[Controller.toPage(index)];
  }

  function update() {
    var prev = getAt(getIndex(true));
    var curr = getAt(getIndex());

    if (prev) {
      var button = prev.button;
      removeClass(button, CLASS_ACTIVE);
      removeAttribute(button, ARIA_SELECTED);
      setAttribute(button, TAB_INDEX, -1);
    }

    if (curr) {
      var _button = curr.button;
      addClass(_button, CLASS_ACTIVE);
      setAttribute(_button, ARIA_SELECTED, true);
      setAttribute(_button, TAB_INDEX, "");
    }

    emit(EVENT_PAGINATION_UPDATED, {
      list: list,
      items: items
    }, prev, curr);
  }

  return {
    items: items,
    mount: mount,
    destroy: destroy,
    getAt: getAt,
    update: update
  };
}

var TRIGGER_KEYS = [" ", "Enter"];

function Sync(Splide2, Components2, options) {
  var isNavigation = options.isNavigation,
      slideFocus = options.slideFocus;
  var events = [];

  function mount() {
    Splide2.splides.forEach(function (target) {
      if (!target.isParent) {
        sync(Splide2, target.splide);
        sync(target.splide, Splide2);
      }
    });

    if (isNavigation) {
      navigate();
    }
  }

  function destroy() {
    events.forEach(function (event) {
      event.destroy();
    });
    empty(events);
  }

  function remount() {
    destroy();
    mount();
  }

  function sync(splide, target) {
    var event = EventInterface(splide);
    event.on(EVENT_MOVE, function (index, prev, dest) {
      target.go(target.is(LOOP) ? dest : index);
    });
    events.push(event);
  }

  function navigate() {
    var event = EventInterface(Splide2);
    var on = event.on;
    on(EVENT_CLICK, onClick);
    on(EVENT_SLIDE_KEYDOWN, onKeydown);
    on([EVENT_MOUNTED, EVENT_UPDATED], update);
    events.push(event);
    event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
  }

  function update() {
    setAttribute(Components2.Elements.list, ARIA_ORIENTATION, options.direction === TTB ? "vertical" : "");
  }

  function onClick(Slide) {
    Splide2.go(Slide.index);
  }

  function onKeydown(Slide, e) {
    if (includes(TRIGGER_KEYS, normalizeKey(e))) {
      onClick(Slide);
      prevent(e);
    }
  }

  return {
    setup: apply(Components2.Media.set, {
      slideFocus: isUndefined(slideFocus) ? isNavigation : slideFocus
    }, true),
    mount: mount,
    destroy: destroy,
    remount: remount
  };
}

function Wheel(Splide2, Components2, options) {
  var _EventInterface12 = EventInterface(Splide2),
      bind = _EventInterface12.bind;

  var lastTime = 0;

  function mount() {
    if (options.wheel) {
      bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
    }
  }

  function onWheel(e) {
    if (e.cancelable) {
      var deltaY = e.deltaY;
      var backwards = deltaY < 0;
      var timeStamp = timeOf(e);

      var _min = options.wheelMinThreshold || 0;

      var sleep = options.wheelSleep || 0;

      if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
        Splide2.go(backwards ? "<" : ">");
        lastTime = timeStamp;
      }

      shouldPrevent(backwards) && prevent(e);
    }
  }

  function shouldPrevent(backwards) {
    return !options.releaseWheel || Splide2.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
  }

  return {
    mount: mount
  };
}

var SR_REMOVAL_DELAY = 90;

function Live(Splide2, Components2, options) {
  var _EventInterface13 = EventInterface(Splide2),
      on = _EventInterface13.on;

  var track = Components2.Elements.track;
  var enabled = options.live && !options.isNavigation;
  var sr = create("span", CLASS_SR);
  var interval = RequestInterval(SR_REMOVAL_DELAY, apply(toggle, false));

  function mount() {
    if (enabled) {
      disable(!Components2.Autoplay.isPaused());
      setAttribute(track, ARIA_ATOMIC, true);
      sr.textContent = "\u2026";
      on(EVENT_AUTOPLAY_PLAY, apply(disable, true));
      on(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
      on([EVENT_MOVED, EVENT_SCROLLED], apply(toggle, true));
    }
  }

  function toggle(active) {
    setAttribute(track, ARIA_BUSY, active);

    if (active) {
      append(track, sr);
      interval.start();
    } else {
      remove(sr);
      interval.cancel();
    }
  }

  function destroy() {
    removeAttribute(track, [ARIA_LIVE, ARIA_ATOMIC, ARIA_BUSY]);
    remove(sr);
  }

  function disable(disabled) {
    if (enabled) {
      setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
    }
  }

  return {
    mount: mount,
    disable: disable,
    destroy: destroy
  };
}

var ComponentConstructors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Media: Media,
  Direction: Direction,
  Elements: Elements,
  Slides: Slides,
  Layout: Layout,
  Clones: Clones,
  Move: Move,
  Controller: Controller,
  Arrows: Arrows,
  Autoplay: Autoplay,
  Cover: Cover,
  Scroll: Scroll,
  Drag: Drag,
  Keyboard: Keyboard,
  LazyLoad: LazyLoad,
  Pagination: Pagination,
  Sync: Sync,
  Wheel: Wheel,
  Live: Live
});
var I18N = {
  prev: "Previous slide",
  next: "Next slide",
  first: "Go to first slide",
  last: "Go to last slide",
  slideX: "Go to slide %s",
  pageX: "Go to page %s",
  play: "Start autoplay",
  pause: "Pause autoplay",
  carousel: "carousel",
  slide: "slide",
  select: "Select a slide to show",
  slideLabel: "%s of %s"
};
var DEFAULTS = {
  type: "slide",
  role: "region",
  speed: 400,
  perPage: 1,
  cloneStatus: true,
  arrows: true,
  pagination: true,
  paginationKeyboard: true,
  interval: 5e3,
  pauseOnHover: true,
  pauseOnFocus: true,
  resetProgress: true,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  drag: true,
  direction: "ltr",
  trimSpace: true,
  focusableNodes: "a, button, textarea, input, select, iframe",
  live: true,
  classes: CLASSES,
  i18n: I18N,
  reducedMotion: {
    speed: 0,
    rewindSpeed: 0,
    autoplay: "pause"
  }
};

function Fade(Splide2, Components2, options) {
  var Slides = Components2.Slides;

  function mount() {
    EventInterface(Splide2).on([EVENT_MOUNTED, EVENT_REFRESH], init);
  }

  function init() {
    Slides.forEach(function (Slide) {
      Slide.style("transform", "translateX(-" + 100 * Slide.index + "%)");
    });
  }

  function start(index, done) {
    Slides.style("transition", "opacity " + options.speed + "ms " + options.easing);
    nextTick(done);
  }

  return {
    mount: mount,
    start: start,
    cancel: noop
  };
}

function Slide(Splide2, Components2, options) {
  var Move = Components2.Move,
      Controller = Components2.Controller,
      Scroll = Components2.Scroll;
  var list = Components2.Elements.list;
  var transition = apply(style, list, "transition");
  var endCallback;

  function mount() {
    EventInterface(Splide2).bind(list, "transitionend", function (e) {
      if (e.target === list && endCallback) {
        cancel();
        endCallback();
      }
    });
  }

  function start(index, done) {
    var destination = Move.toPosition(index, true);
    var position = Move.getPosition();
    var speed = getSpeed(index);

    if (abs(destination - position) >= 1 && speed >= 1) {
      if (options.useScroll) {
        Scroll.scroll(destination, speed, false, done);
      } else {
        transition("transform " + speed + "ms " + options.easing);
        Move.translate(destination, true);
        endCallback = done;
      }
    } else {
      Move.jump(index);
      done();
    }
  }

  function cancel() {
    transition("");
    Scroll.cancel();
  }

  function getSpeed(index) {
    var rewindSpeed = options.rewindSpeed;

    if (Splide2.is(SLIDE) && rewindSpeed) {
      var prev = Controller.getIndex(true);
      var end = Controller.getEnd();

      if (prev === 0 && index >= end || prev >= end && index === 0) {
        return rewindSpeed;
      }
    }

    return options.speed;
  }

  return {
    mount: mount,
    start: start,
    cancel: cancel
  };
}

var _Splide = /*#__PURE__*/function () {
  function _Splide(target, options) {
    this.event = EventInterface();
    this.Components = {};
    this.state = State(CREATED);
    this.splides = [];
    this._o = {};
    this._E = {};
    var root = isString(target) ? query(document, target) : target;
    assert(root, root + " is invalid.");
    this.root = root;
    options = merge({
      label: getAttribute(root, ARIA_LABEL) || "",
      labelledby: getAttribute(root, ARIA_LABELLEDBY) || ""
    }, DEFAULTS, _Splide.defaults, options || {});

    try {
      merge(options, JSON.parse(getAttribute(root, DATA_ATTRIBUTE)));
    } catch (e) {
      assert(false, "Invalid JSON");
    }

    this._o = Object.create(merge({}, options));
  }

  var _proto = _Splide.prototype;

  _proto.mount = function mount(Extensions, Transition) {
    var _this = this;

    var state = this.state,
        Components2 = this.Components;
    assert(state.is([CREATED, DESTROYED]), "Already mounted!");
    state.set(CREATED);
    this._C = Components2;
    this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
    this._E = Extensions || this._E;
    var Constructors = splide_esm_assign({}, ComponentConstructors, this._E, {
      Transition: this._T
    });
    forOwn(Constructors, function (Component, key) {
      var component = Component(_this, Components2, _this._o);
      Components2[key] = component;
      component.setup && component.setup();
    });
    forOwn(Components2, function (component) {
      component.mount && component.mount();
    });
    this.emit(EVENT_MOUNTED);
    addClass(this.root, CLASS_INITIALIZED);
    state.set(IDLE);
    this.emit(EVENT_READY);
    return this;
  };

  _proto.sync = function sync(splide) {
    this.splides.push({
      splide: splide
    });
    splide.splides.push({
      splide: this,
      isParent: true
    });

    if (this.state.is(IDLE)) {
      this._C.Sync.remount();

      splide.Components.Sync.remount();
    }

    return this;
  };

  _proto.go = function go(control) {
    this._C.Controller.go(control);

    return this;
  };

  _proto.on = function on(events, callback) {
    this.event.on(events, callback);
    return this;
  };

  _proto.off = function off(events) {
    this.event.off(events);
    return this;
  };

  _proto.emit = function emit(event) {
    var _this$event;

    (_this$event = this.event).emit.apply(_this$event, [event].concat(slice(arguments, 1)));

    return this;
  };

  _proto.add = function add(slides, index) {
    this._C.Slides.add(slides, index);

    return this;
  };

  _proto.remove = function remove(matcher) {
    this._C.Slides.remove(matcher);

    return this;
  };

  _proto.is = function is(type) {
    return this._o.type === type;
  };

  _proto.refresh = function refresh() {
    this.emit(EVENT_REFRESH);
    return this;
  };

  _proto.destroy = function destroy(completely) {
    if (completely === void 0) {
      completely = true;
    }

    var event = this.event,
        state = this.state;

    if (state.is(CREATED)) {
      EventInterface(this).on(EVENT_READY, this.destroy.bind(this, completely));
    } else {
      forOwn(this._C, function (component) {
        component.destroy && component.destroy(completely);
      }, true);
      event.emit(EVENT_DESTROY);
      event.destroy();
      completely && empty(this.splides);
      state.set(DESTROYED);
    }

    return this;
  };

  _createClass(_Splide, [{
    key: "options",
    get: function get() {
      return this._o;
    },
    set: function set(options) {
      this._C.Media.set(options, true, true);
    }
  }, {
    key: "length",
    get: function get() {
      return this._C.Slides.getLength(true);
    }
  }, {
    key: "index",
    get: function get() {
      return this._C.Controller.getIndex();
    }
  }]);

  return _Splide;
}();

var Splide = _Splide;
Splide.defaults = {};
Splide.STATES = STATES;
var CLASS_RENDERED = "is-rendered";
var RENDERER_DEFAULT_CONFIG = {
  listTag: "ul",
  slideTag: "li"
};

var Style = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function Style(id, options) {
    this.styles = {};
    this.id = id;
    this.options = options;
  }

  var _proto2 = Style.prototype;

  _proto2.rule = function rule(selector, prop, value, breakpoint) {
    breakpoint = breakpoint || "default";
    var selectors = this.styles[breakpoint] = this.styles[breakpoint] || {};
    var styles = selectors[selector] = selectors[selector] || {};
    styles[prop] = value;
  };

  _proto2.build = function build() {
    var _this2 = this;

    var css = "";

    if (this.styles.default) {
      css += this.buildSelectors(this.styles.default);
    }

    Object.keys(this.styles).sort(function (n, m) {
      return _this2.options.mediaQuery === "min" ? +n - +m : +m - +n;
    }).forEach(function (breakpoint) {
      if (breakpoint !== "default") {
        css += "@media screen and (max-width: " + breakpoint + "px) {";
        css += _this2.buildSelectors(_this2.styles[breakpoint]);
        css += "}";
      }
    });
    return css;
  };

  _proto2.buildSelectors = function buildSelectors(selectors) {
    var _this3 = this;

    var css = "";
    forOwn(selectors, function (styles, selector) {
      selector = ("#" + _this3.id + " " + selector).trim();
      css += selector + " {";
      forOwn(styles, function (value, prop) {
        if (value || value === 0) {
          css += prop + ": " + value + ";";
        }
      });
      css += "}";
    });
    return css;
  };

  return Style;
}()));

var SplideRenderer = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function SplideRenderer(contents, options, config, defaults) {
    this.slides = [];
    this.options = {};
    this.breakpoints = [];
    merge(DEFAULTS, defaults || {});
    merge(merge(this.options, DEFAULTS), options || {});
    this.contents = contents;
    this.config = splide_esm_assign({}, RENDERER_DEFAULT_CONFIG, config || {});
    this.id = this.config.id || uniqueId("splide");
    this.Style = new Style(this.id, this.options);
    this.Direction = Direction(null, null, this.options);
    assert(this.contents.length, "Provide at least 1 content.");
    this.init();
  }

  SplideRenderer.clean = function clean(splide) {
    var _EventInterface14 = EventInterface(splide),
        on = _EventInterface14.on;

    var root = splide.root;
    var clones = queryAll(root, "." + CLASS_CLONE);
    on(EVENT_MOUNTED, function () {
      remove(child(root, "style"));
    });
    remove(clones);
  };

  var _proto3 = SplideRenderer.prototype;

  _proto3.init = function init() {
    this.parseBreakpoints();
    this.initSlides();
    this.registerRootStyles();
    this.registerTrackStyles();
    this.registerSlideStyles();
    this.registerListStyles();
  };

  _proto3.initSlides = function initSlides() {
    var _this4 = this;

    push(this.slides, this.contents.map(function (content, index) {
      content = isString(content) ? {
        html: content
      } : content;
      content.styles = content.styles || {};
      content.attrs = content.attrs || {};

      _this4.cover(content);

      var classes = _this4.options.classes.slide + " " + (index === 0 ? CLASS_ACTIVE : "");
      splide_esm_assign(content.attrs, {
        class: (classes + " " + (content.attrs.class || "")).trim(),
        style: _this4.buildStyles(content.styles)
      });
      return content;
    }));

    if (this.isLoop()) {
      this.generateClones(this.slides);
    }
  };

  _proto3.registerRootStyles = function registerRootStyles() {
    var _this5 = this;

    this.breakpoints.forEach(function (_ref2) {
      var width = _ref2[0],
          options = _ref2[1];

      _this5.Style.rule(" ", "max-width", unit(options.width), width);
    });
  };

  _proto3.registerTrackStyles = function registerTrackStyles() {
    var _this6 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_TRACK;
    this.breakpoints.forEach(function (_ref3) {
      var width = _ref3[0],
          options = _ref3[1];
      Style2.rule(selector, _this6.resolve("paddingLeft"), _this6.cssPadding(options, false), width);
      Style2.rule(selector, _this6.resolve("paddingRight"), _this6.cssPadding(options, true), width);
      Style2.rule(selector, "height", _this6.cssTrackHeight(options), width);
    });
  };

  _proto3.registerListStyles = function registerListStyles() {
    var _this7 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_LIST;
    this.breakpoints.forEach(function (_ref4) {
      var width = _ref4[0],
          options = _ref4[1];
      Style2.rule(selector, "transform", _this7.buildTranslate(options), width);

      if (!_this7.cssSlideHeight(options)) {
        Style2.rule(selector, "aspect-ratio", _this7.cssAspectRatio(options), width);
      }
    });
  };

  _proto3.registerSlideStyles = function registerSlideStyles() {
    var _this8 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_SLIDE;
    this.breakpoints.forEach(function (_ref5) {
      var width = _ref5[0],
          options = _ref5[1];
      Style2.rule(selector, "width", _this8.cssSlideWidth(options), width);
      Style2.rule(selector, "height", _this8.cssSlideHeight(options) || "100%", width);
      Style2.rule(selector, _this8.resolve("marginRight"), unit(options.gap) || "0px", width);
      Style2.rule(selector + " > img", "display", options.cover ? "none" : "inline", width);
    });
  };

  _proto3.buildTranslate = function buildTranslate(options) {
    var _this$Direction = this.Direction,
        resolve = _this$Direction.resolve,
        orient = _this$Direction.orient;
    var values = [];
    values.push(this.cssOffsetClones(options));
    values.push(this.cssOffsetGaps(options));

    if (this.isCenter(options)) {
      values.push(this.buildCssValue(orient(-50), "%"));
      values.push.apply(values, this.cssOffsetCenter(options));
    }

    return values.filter(Boolean).map(function (value) {
      return "translate" + resolve("X") + "(" + value + ")";
    }).join(" ");
  };

  _proto3.cssOffsetClones = function cssOffsetClones(options) {
    var _this$Direction2 = this.Direction,
        resolve = _this$Direction2.resolve,
        orient = _this$Direction2.orient;
    var cloneCount = this.getCloneCount();

    if (this.isFixedWidth(options)) {
      var _this$parseCssValue = this.parseCssValue(options[resolve("fixedWidth")]),
          value = _this$parseCssValue.value,
          unit2 = _this$parseCssValue.unit;

      return this.buildCssValue(orient(value) * cloneCount, unit2);
    }

    var percent = 100 * cloneCount / options.perPage;
    return orient(percent) + "%";
  };

  _proto3.cssOffsetCenter = function cssOffsetCenter(options) {
    var _this$Direction3 = this.Direction,
        resolve = _this$Direction3.resolve,
        orient = _this$Direction3.orient;

    if (this.isFixedWidth(options)) {
      var _this$parseCssValue2 = this.parseCssValue(options[resolve("fixedWidth")]),
          value = _this$parseCssValue2.value,
          unit2 = _this$parseCssValue2.unit;

      return [this.buildCssValue(orient(value / 2), unit2)];
    }

    var values = [];
    var perPage = options.perPage,
        gap = options.gap;
    values.push(orient(50 / perPage) + "%");

    if (gap) {
      var _this$parseCssValue3 = this.parseCssValue(gap),
          _value = _this$parseCssValue3.value,
          _unit = _this$parseCssValue3.unit;

      var gapOffset = (_value / perPage - _value) / 2;
      values.push(this.buildCssValue(orient(gapOffset), _unit));
    }

    return values;
  };

  _proto3.cssOffsetGaps = function cssOffsetGaps(options) {
    var cloneCount = this.getCloneCount();

    if (cloneCount && options.gap) {
      var orient = this.Direction.orient;

      var _this$parseCssValue4 = this.parseCssValue(options.gap),
          value = _this$parseCssValue4.value,
          unit2 = _this$parseCssValue4.unit;

      if (this.isFixedWidth(options)) {
        return this.buildCssValue(orient(value * cloneCount), unit2);
      }

      var perPage = options.perPage;
      var gaps = cloneCount / perPage;
      return this.buildCssValue(orient(gaps * value), unit2);
    }

    return "";
  };

  _proto3.resolve = function resolve(prop) {
    return camelToKebab(this.Direction.resolve(prop));
  };

  _proto3.cssPadding = function cssPadding(options, right) {
    var padding = options.padding;
    var prop = this.Direction.resolve(right ? "right" : "left", true);
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  };

  _proto3.cssTrackHeight = function cssTrackHeight(options) {
    var height = "";

    if (this.isVertical()) {
      height = this.cssHeight(options);
      assert(height, '"height" is missing.');
      height = "calc(" + height + " - " + this.cssPadding(options, false) + " - " + this.cssPadding(options, true) + ")";
    }

    return height;
  };

  _proto3.cssHeight = function cssHeight(options) {
    return unit(options.height);
  };

  _proto3.cssSlideWidth = function cssSlideWidth(options) {
    return options.autoWidth ? "" : unit(options.fixedWidth) || (this.isVertical() ? "" : this.cssSlideSize(options));
  };

  _proto3.cssSlideHeight = function cssSlideHeight(options) {
    return unit(options.fixedHeight) || (this.isVertical() ? options.autoHeight ? "" : this.cssSlideSize(options) : this.cssHeight(options));
  };

  _proto3.cssSlideSize = function cssSlideSize(options) {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  };

  _proto3.cssAspectRatio = function cssAspectRatio(options) {
    var heightRatio = options.heightRatio;
    return heightRatio ? "" + 1 / heightRatio : "";
  };

  _proto3.buildCssValue = function buildCssValue(value, unit2) {
    return "" + value + unit2;
  };

  _proto3.parseCssValue = function parseCssValue(value) {
    if (isString(value)) {
      var number = parseFloat(value) || 0;
      var unit2 = value.replace(/\d*(\.\d*)?/, "") || "px";
      return {
        value: number,
        unit: unit2
      };
    }

    return {
      value: value,
      unit: "px"
    };
  };

  _proto3.parseBreakpoints = function parseBreakpoints() {
    var _this9 = this;

    var breakpoints = this.options.breakpoints;
    this.breakpoints.push(["default", this.options]);

    if (breakpoints) {
      forOwn(breakpoints, function (options, width) {
        _this9.breakpoints.push([width, merge(merge({}, _this9.options), options)]);
      });
    }
  };

  _proto3.isFixedWidth = function isFixedWidth(options) {
    return !!options[this.Direction.resolve("fixedWidth")];
  };

  _proto3.isLoop = function isLoop() {
    return this.options.type === LOOP;
  };

  _proto3.isCenter = function isCenter(options) {
    if (options.focus === "center") {
      if (this.isLoop()) {
        return true;
      }

      if (this.options.type === SLIDE) {
        return !this.options.trimSpace;
      }
    }

    return false;
  };

  _proto3.isVertical = function isVertical() {
    return this.options.direction === TTB;
  };

  _proto3.buildClasses = function buildClasses() {
    var options = this.options;
    return [CLASS_ROOT, CLASS_ROOT + "--" + options.type, CLASS_ROOT + "--" + options.direction, options.drag && CLASS_ROOT + "--draggable", options.isNavigation && CLASS_ROOT + "--nav", CLASS_ACTIVE, !this.config.hidden && CLASS_RENDERED].filter(Boolean).join(" ");
  };

  _proto3.buildAttrs = function buildAttrs(attrs) {
    var attr = "";
    forOwn(attrs, function (value, key) {
      attr += value ? " " + camelToKebab(key) + "=\"" + value + "\"" : "";
    });
    return attr.trim();
  };

  _proto3.buildStyles = function buildStyles(styles) {
    var style = "";
    forOwn(styles, function (value, key) {
      style += " " + camelToKebab(key) + ":" + value + ";";
    });
    return style.trim();
  };

  _proto3.renderSlides = function renderSlides() {
    var _this10 = this;

    var tag = this.config.slideTag;
    return this.slides.map(function (content) {
      return "<" + tag + " " + _this10.buildAttrs(content.attrs) + ">" + (content.html || "") + "</" + tag + ">";
    }).join("");
  };

  _proto3.cover = function cover(content) {
    var styles = content.styles,
        _content$html = content.html,
        html = _content$html === void 0 ? "" : _content$html;

    if (this.options.cover && !this.options.lazyLoad) {
      var src = html.match(/<img.*?src\s*=\s*(['"])(.+?)\1.*?>/);

      if (src && src[2]) {
        styles.background = "center/cover no-repeat url('" + src[2] + "')";
      }
    }
  };

  _proto3.generateClones = function generateClones(contents) {
    var classes = this.options.classes;
    var count = this.getCloneCount();
    var slides = contents.slice();

    while (slides.length < count) {
      push(slides, slides);
    }

    push(slides.slice(-count).reverse(), slides.slice(0, count)).forEach(function (content, index) {
      var attrs = splide_esm_assign({}, content.attrs, {
        class: content.attrs.class + " " + classes.clone
      });
      var clone = splide_esm_assign({}, content, {
        attrs: attrs
      });
      index < count ? contents.unshift(clone) : contents.push(clone);
    });
  };

  _proto3.getCloneCount = function getCloneCount() {
    if (this.isLoop()) {
      var options = this.options;

      if (options.clones) {
        return options.clones;
      }

      var perPage = max.apply(void 0, this.breakpoints.map(function (_ref6) {
        var options2 = _ref6[1];
        return options2.perPage;
      }));
      return perPage * ((options.flickMaxPages || 1) + 1);
    }

    return 0;
  };

  _proto3.renderArrows = function renderArrows() {
    var html = "";
    html += "<div class=\"" + this.options.classes.arrows + "\">";
    html += this.renderArrow(true);
    html += this.renderArrow(false);
    html += "</div>";
    return html;
  };

  _proto3.renderArrow = function renderArrow(prev) {
    var _this$options = this.options,
        classes = _this$options.classes,
        i18n = _this$options.i18n;
    var attrs = {
      class: classes.arrow + " " + (prev ? classes.prev : classes.next),
      type: "button",
      ariaLabel: prev ? i18n.prev : i18n.next
    };
    return "<button " + this.buildAttrs(attrs) + "><svg xmlns=\"" + XML_NAME_SPACE + "\" viewBox=\"0 0 " + SIZE + " " + SIZE + "\" width=\"" + SIZE + "\" height=\"" + SIZE + "\"><path d=\"" + (this.options.arrowPath || PATH) + "\" /></svg></button>";
  };

  _proto3.html = function html() {
    var _this$config = this.config,
        rootClass = _this$config.rootClass,
        listTag = _this$config.listTag,
        arrows = _this$config.arrows,
        beforeTrack = _this$config.beforeTrack,
        afterTrack = _this$config.afterTrack,
        slider = _this$config.slider,
        beforeSlider = _this$config.beforeSlider,
        afterSlider = _this$config.afterSlider;
    var html = "";
    html += "<div id=\"" + this.id + "\" class=\"" + this.buildClasses() + " " + (rootClass || "") + "\">";
    html += "<style>" + this.Style.build() + "</style>";

    if (slider) {
      html += beforeSlider || "";
      html += "<div class=\"splide__slider\">";
    }

    html += beforeTrack || "";

    if (arrows) {
      html += this.renderArrows();
    }

    html += "<div class=\"splide__track\">";
    html += "<" + listTag + " class=\"splide__list\">";
    html += this.renderSlides();
    html += "</" + listTag + ">";
    html += "</div>";
    html += afterTrack || "";

    if (slider) {
      html += "</div>";
      html += afterSlider || "";
    }

    html += "</div>";
    return html;
  };

  return SplideRenderer;
}()));



;// CONCATENATED MODULE: ./src/splideInitializers.js
function splideInitializers_typeof(obj) { "@babel/helpers - typeof"; return splideInitializers_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, splideInitializers_typeof(obj); }
function splideInitializers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function splideInitializers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? splideInitializers_ownKeys(Object(source), !0).forEach(function (key) { splideInitializers_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : splideInitializers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function splideInitializers_defineProperty(obj, key, value) { key = splideInitializers_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function splideInitializers_toPropertyKey(arg) { var key = splideInitializers_toPrimitive(arg, "string"); return splideInitializers_typeof(key) === "symbol" ? key : String(key); }
function splideInitializers_toPrimitive(input, hint) { if (splideInitializers_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (splideInitializers_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// splideInitializers.js



function initializeGallery() {
  var gallerySplide = new Splide('#gallery-splide', splideInitializers_objectSpread(splideInitializers_objectSpread({}, COMMON_OPTIONS), {}, {
    perPage: 1,
    padding: '10%',
    arrows: false,
    pagination: false,
    cloneStatus: false
  }));
  if (gallerySplide) {
    gallerySplide.mount();
    var galleryArrowNext = document.querySelector('.custom_arrow_next');
    var galleryArrowPrev = document.querySelector('.custom_arrow_prev');
    if (galleryArrowNext) {
      galleryArrowNext.addEventListener('click', function () {
        return gallerySplide.go('+1');
      });
    } else if (galleryArrowPrev) {
      galleryArrowPrev.addEventListener('click', function () {
        return gallerySplide.go('-1');
      });
    }
  }
}
function initializeOurWork() {
  var ourWorkSplide = new Splide('#splide-our-work', splideInitializers_objectSpread(splideInitializers_objectSpread({}, COMMON_OPTIONS), {}, {
    perPage: 2,
    focus: 'left',
    padding: {
      right: '10%',
      left: 0
    },
    arrows: false,
    pagination: false,
    breakpoints: {
      990: {
        perPage: 1
      }
    }
  }));
  if (ourWorkSplide) {
    ourWorkSplide.mount();
    var arrowNext = document.querySelector('#arrowNext');
    var arrowPrev = document.querySelector('#arrowPrev');
    var barProgress = document.querySelector('#barProgress');
    var currentSlideCounter = document.querySelector('#currentSlideCounter');
    if (arrowNext) {
      arrowNext.addEventListener('click', function () {
        return ourWorkSplide.go('+1');
      });
    }
    if (arrowPrev) {
      arrowPrev.addEventListener('click', function () {
        return ourWorkSplide.go('-1');
      });
    }
    ourWorkSplide.on('move', function () {
      var currentIndex = ourWorkSplide.index + 1;
      barProgress.style.width = "".concat(currentIndex / ourWorkSplide.length * 100, "%");
      currentSlideCounter.textContent = "0".concat(currentIndex);
    });
  }
}
;// CONCATENATED MODULE: ./src/svgHandler.js
// svgHandler.js

function createSVGElements() {
  var svgElements = document.querySelectorAll('.svg-code');
  svgElements.forEach(function (el) {
    var svgCode = el.getAttribute('data-svg');
    el.innerHTML = svgCode;
  });
}
;// CONCATENATED MODULE: ./src/teamBioHandler.js
// teamBioHandler.js


function handleTeamBioPopup() {
  var teamMembers = document.querySelectorAll('.team_member_item');
  teamMembers.forEach(function (member) {
    member.addEventListener('mouseover', function () {
      var name = getDataAttribute(member, 'name');
      var role = getDataAttribute(member, 'role');
      var bio = getDataAttribute(member, 'bio');
      document.querySelector('.team_bio_popup .team_member_name').textContent = name;
      document.querySelector('.team_bio_popup .team_member_role').textContent = role;
      document.querySelector('.team_bio_popup .team_member_bio').textContent = bio;
    });
  });
}
;// CONCATENATED MODULE: ./src/effects.js
// effects.js

function applyHoverEffectToSplideWork() {
  if ($(window).width() <= 991) return;
  $('.splide-work').on('mouseenter', function () {
    $(this).addClass('ishovered');
    $(this).find('.card-overlay-blue, .card-overlay-row, .circle-arrow, .card-overlay-gradient, .project-card_desc_wrap').addClass('ishovered');
  }).on('mouseleave', function () {
    $(this).removeClass('ishovered');
    $(this).find('.card-overlay-blue, .card-overlay-row, .circle-arrow, .card-overlay-gradient, .project-card_desc_wrap').removeClass('ishovered');
  });
}
function applyProjectCardHoverEffect() {
  if ($(window).width() <= 991) return;
  $('.project_card').on('mouseenter', function () {
    $(this).addClass('ishovered');
    $(this).find('.card-overlay-blue, .card-overlay-row, .circle-arrow, .card-overlay-gradient, .project-card_desc_wrap').addClass('ishovered');
  }).on('mouseleave', function () {
    $(this).removeClass('ishovered');
    $(this).find('.card-overlay-blue, .card-overlay-row, .circle-arrow, .card-overlay-gradient, .project-card_desc_wrap').removeClass('ishovered');
  });
}
function applyRegionItemHoverEffects() {
  if ($(window).width() <= 991) return;
  $('.region_item_wrapper').on('mouseenter', function () {
    var mapCode = $(this).attr('data-map-code');
    $('.world_map_modded .' + mapCode).addClass('active-region');
  }).on('mouseleave', function () {
    var mapCode = $(this).attr('data-map-code');
    $('.world_map_modded .' + mapCode).removeClass('active-region');
  });
}
function applyRegionCardHoverEffects() {
  if ($(window).width() <= 991) return;
  $('.region_card').on('mouseenter', function () {
    $(this).addClass('ishovered');
    $(this).find('.region_card_map_svg, .region_card_name, .region_card_arrow').addClass('ishovered');
  }).on('mouseleave', function () {
    $(this).removeClass('ishovered');
    $(this).find('.region_card_map_svg, .region_card_name, .region_card_arrow').removeClass('ishovered');
  });
}
;// CONCATENATED MODULE: ./src/init.js
// init.js

// Import core GSAP library and plugins





// Import custom styles


// Import Splide styles


// Import utility functions and initializers







// Register GSAP Plugins
gsap_min_default().registerPlugin((SplitText_min_default()), (ScrollTrigger_min_default()), (ScrollSmoother_min_default()));

// Check if GSAP libraries are available
if (checkLibrariesAvailability()) {
  initializeAnimations();
} else {
  var checkGSAPInterval = setInterval(function () {
    if (window.gsap) {
      clearInterval(checkGSAPInterval);
      initializeAnimations();
    }
  }, 100);
}
var isHomePage = window.location.pathname === '/';
if (isHomePage) {
  initializeGallery();
  initializeOurWork();
}

// Apply hover effect to Splide work on all pages
applyHoverEffectToSplideWork();
createSVGElements();
handleTeamBioPopup();
applyProjectCardHoverEffect();
applyRegionCardHoverEffects();
applyRegionItemHoverEffects();
})();

/******/ })()
;