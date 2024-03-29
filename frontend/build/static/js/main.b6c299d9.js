/*! For license information please see main.b6c299d9.js.LICENSE.txt */
!(function () {
  var e = {
      110: function (e, t, n) {
        "use strict";
        var r = n(309),
          a = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          o = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          i = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          l = {};
        function u(e) {
          return r.isMemo(e) ? i : l[e.$$typeof] || a;
        }
        (l[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (l[r.Memo] = i);
        var c = Object.defineProperty,
          s = Object.getOwnPropertyNames,
          f = Object.getOwnPropertySymbols,
          d = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          h = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" !== typeof n) {
            if (h) {
              var a = p(n);
              a && a !== h && e(t, a, r);
            }
            var i = s(n);
            f && (i = i.concat(f(n)));
            for (var l = u(t), v = u(n), m = 0; m < i.length; ++m) {
              var y = i[m];
              if (!o[y] && (!r || !r[y]) && (!v || !v[y]) && (!l || !l[y])) {
                var g = d(n, y);
                try {
                  c(t, y, g);
                } catch (b) {}
              }
            }
          }
          return t;
        };
      },
      746: function (e, t) {
        "use strict";
        var n = "function" === typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          a = n ? Symbol.for("react.portal") : 60106,
          o = n ? Symbol.for("react.fragment") : 60107,
          i = n ? Symbol.for("react.strict_mode") : 60108,
          l = n ? Symbol.for("react.profiler") : 60114,
          u = n ? Symbol.for("react.provider") : 60109,
          c = n ? Symbol.for("react.context") : 60110,
          s = n ? Symbol.for("react.async_mode") : 60111,
          f = n ? Symbol.for("react.concurrent_mode") : 60111,
          d = n ? Symbol.for("react.forward_ref") : 60112,
          p = n ? Symbol.for("react.suspense") : 60113,
          h = n ? Symbol.for("react.suspense_list") : 60120,
          v = n ? Symbol.for("react.memo") : 60115,
          m = n ? Symbol.for("react.lazy") : 60116,
          y = n ? Symbol.for("react.block") : 60121,
          g = n ? Symbol.for("react.fundamental") : 60117,
          b = n ? Symbol.for("react.responder") : 60118,
          w = n ? Symbol.for("react.scope") : 60119;
        function k(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case s:
                  case f:
                  case o:
                  case l:
                  case i:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case c:
                      case d:
                      case m:
                      case v:
                      case u:
                        return e;
                      default:
                        return t;
                    }
                }
              case a:
                return t;
            }
          }
        }
        function S(e) {
          return k(e) === f;
        }
        (t.AsyncMode = s),
          (t.ConcurrentMode = f),
          (t.ContextConsumer = c),
          (t.ContextProvider = u),
          (t.Element = r),
          (t.ForwardRef = d),
          (t.Fragment = o),
          (t.Lazy = m),
          (t.Memo = v),
          (t.Portal = a),
          (t.Profiler = l),
          (t.StrictMode = i),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return S(e) || k(e) === s;
          }),
          (t.isConcurrentMode = S),
          (t.isContextConsumer = function (e) {
            return k(e) === c;
          }),
          (t.isContextProvider = function (e) {
            return k(e) === u;
          }),
          (t.isElement = function (e) {
            return "object" === typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return k(e) === d;
          }),
          (t.isFragment = function (e) {
            return k(e) === o;
          }),
          (t.isLazy = function (e) {
            return k(e) === m;
          }),
          (t.isMemo = function (e) {
            return k(e) === v;
          }),
          (t.isPortal = function (e) {
            return k(e) === a;
          }),
          (t.isProfiler = function (e) {
            return k(e) === l;
          }),
          (t.isStrictMode = function (e) {
            return k(e) === i;
          }),
          (t.isSuspense = function (e) {
            return k(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" === typeof e ||
              "function" === typeof e ||
              e === o ||
              e === f ||
              e === l ||
              e === i ||
              e === p ||
              e === h ||
              ("object" === typeof e &&
                null !== e &&
                (e.$$typeof === m ||
                  e.$$typeof === v ||
                  e.$$typeof === u ||
                  e.$$typeof === c ||
                  e.$$typeof === d ||
                  e.$$typeof === g ||
                  e.$$typeof === b ||
                  e.$$typeof === w ||
                  e.$$typeof === y))
            );
          }),
          (t.typeOf = k);
      },
      309: function (e, t, n) {
        "use strict";
        e.exports = n(746);
      },
      888: function (e, t, n) {
        "use strict";
        var r = n(47);
        function a() {}
        function o() {}
        (o.resetWarningCache = a),
          (e.exports = function () {
            function e(e, t, n, a, o, i) {
              if (i !== r) {
                var l = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((l.name = "Invariant Violation"), l);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: o,
              resetWarningCache: a,
            };
            return (n.PropTypes = n), n;
          });
      },
      7: function (e, t, n) {
        e.exports = n(888)();
      },
      47: function (e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      299: function (e, t, n) {
        e.exports = (function (e, t) {
          "use strict";
          function n(e) {
            return e && "object" == typeof e && "default" in e
              ? e
              : { default: e };
          }
          var r = n(e),
            a = n(t);
          function o(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function i(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function l() {
            return (l =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }).apply(this, arguments);
          }
          function u(e, t) {
            var n,
              r = Object.keys(e);
            return (
              Object.getOwnPropertySymbols &&
                ((n = Object.getOwnPropertySymbols(e)),
                t &&
                  (n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                r.push.apply(r, n)),
              r
            );
          }
          function c(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? u(Object(n), !0).forEach(function (t) {
                    i(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : u(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          function s(e) {
            return (s = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function f(e, t) {
            return (f =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function d(e, t) {
            if (null == e) return {};
            var n,
              r = (function (e, t) {
                if (null == e) return {};
                for (
                  var n, r = {}, a = Object.keys(e), o = 0;
                  o < a.length;
                  o++
                )
                  (n = a[o]), 0 <= t.indexOf(n) || (r[n] = e[n]);
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols)
              for (
                var a = Object.getOwnPropertySymbols(e), o = 0;
                o < a.length;
                o++
              )
                (n = a[o]),
                  0 <= t.indexOf(n) ||
                    (Object.prototype.propertyIsEnumerable.call(e, n) &&
                      (r[n] = e[n]));
            return r;
          }
          function p(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function h(t) {
            var n = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var e,
                r,
                a = s(t);
              return !(r = n
                ? ((e = s(this).constructor),
                  Reflect.construct(a, arguments, e))
                : a.apply(this, arguments)) ||
                ("object" != typeof r && "function" != typeof r)
                ? p(this)
                : r;
            };
          }
          function v(e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                if (
                  "undefined" != typeof Symbol &&
                  Symbol.iterator in Object(e)
                ) {
                  var n = [],
                    r = !0,
                    a = !1,
                    o = void 0;
                  try {
                    for (
                      var i, l = e[Symbol.iterator]();
                      !(r = (i = l.next()).done) &&
                      (n.push(i.value), !t || n.length !== t);
                      r = !0
                    );
                  } catch (e) {
                    (a = !0), (o = e);
                  } finally {
                    try {
                      r || null == l.return || l.return();
                    } finally {
                      if (a) throw o;
                    }
                  }
                  return n;
                }
              })(e, t) ||
              m(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
          function m(e, t) {
            if (e) {
              if ("string" == typeof e) return y(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? y(e, t)
                  : void 0
              );
            }
          }
          function y(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
          }
          function g(e, t) {
            return new Promise(function (n, r) {
              var a,
                o = new Image();
              (o.onload = function () {
                return n(o);
              }),
                (o.onerror = r),
                0 ==
                  (null !== (a = e) &&
                    !!a.match(
                      /^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i
                    )) &&
                  t &&
                  (o.crossOrigin = t),
                (o.src = e);
            });
          }
          var b,
            w = !(
              "undefined" == typeof window ||
              "undefined" == typeof navigator ||
              !("ontouchstart" in window || 0 < navigator.msMaxTouchPoints)
            ),
            k = "undefined" != typeof File,
            S = {
              touch: {
                react: {
                  down: "onTouchStart",
                  mouseDown: "onMouseDown",
                  drag: "onTouchMove",
                  move: "onTouchMove",
                  mouseMove: "onMouseMove",
                  up: "onTouchEnd",
                  mouseUp: "onMouseUp",
                },
                native: {
                  down: "touchstart",
                  mouseDown: "mousedown",
                  drag: "touchmove",
                  move: "touchmove",
                  mouseMove: "mousemove",
                  up: "touchend",
                  mouseUp: "mouseup",
                },
              },
              desktop: {
                react: {
                  down: "onMouseDown",
                  drag: "onDragOver",
                  move: "onMouseMove",
                  up: "onMouseUp",
                },
                native: {
                  down: "mousedown",
                  drag: "dragStart",
                  move: "mousemove",
                  up: "mouseup",
                },
              },
            },
            x = w ? S.touch : S.desktop,
            E =
              "undefined" != typeof window && window.devicePixelRatio
                ? window.devicePixelRatio
                : 1,
            _ = { x: 0.5, y: 0.5 },
            A = (function () {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && f(e, t);
              })(u, a.default.Component);
              var e,
                t,
                n,
                r = h(u);
              function u(e) {
                var t;
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, u),
                  i(p((t = r.call(this, e))), "state", {
                    drag: !1,
                    my: null,
                    mx: null,
                    image: _,
                  }),
                  i(p(t), "handleImageReady", function (e) {
                    var n = t.getInitialSize(e.width, e.height);
                    (n.resource = e),
                      (n.x = 0.5),
                      (n.y = 0.5),
                      (n.backgroundColor = t.props.backgroundColor),
                      t.setState({ drag: !1, image: n }, t.props.onImageReady),
                      t.props.onLoadSuccess(n);
                  }),
                  i(p(t), "clearImage", function () {
                    t.canvas
                      .getContext("2d")
                      .clearRect(0, 0, t.canvas.width, t.canvas.height),
                      t.setState({ image: _ });
                  }),
                  i(p(t), "handleMouseDown", function (e) {
                    (e = e || window.event).preventDefault(),
                      t.setState({ drag: !0, mx: null, my: null });
                  }),
                  i(p(t), "handleMouseUp", function () {
                    t.state.drag &&
                      (t.setState({ drag: !1 }), t.props.onMouseUp());
                  }),
                  i(p(t), "handleMouseMove", function (e) {
                    var n, r, a, o, i, l, u, s, f, d, p, h, v, m, y, g;
                    (e = e || window.event),
                      !1 !== t.state.drag &&
                        (e.preventDefault(),
                        (a = {
                          mx: (n = e.targetTouches
                            ? e.targetTouches[0].pageX
                            : e.clientX),
                          my: (r = e.targetTouches
                            ? e.targetTouches[0].pageY
                            : e.clientY),
                        }),
                        (g = t.props.rotate),
                        (g = (g %= 360) < 0 ? g + 360 : g),
                        t.state.mx &&
                          t.state.my &&
                          ((o = t.state.mx - n),
                          (i = t.state.my - r),
                          (l = t.state.image.width * t.props.scale),
                          (u = t.state.image.height * t.props.scale),
                          (f = (s = t.getCroppingRect()).x),
                          (d = s.y),
                          (f *= l),
                          (d *= u),
                          (p = function (e) {
                            return e * (Math.PI / 180);
                          }),
                          (h = Math.cos(p(g))),
                          (m = d + -o * (v = Math.sin(p(g))) + i * h),
                          (y = {
                            x:
                              (f + o * h + i * v) / l +
                              ((1 / t.props.scale) * t.getXScale()) / 2,
                            y:
                              m / u + ((1 / t.props.scale) * t.getYScale()) / 2,
                          }),
                          t.props.onPositionChange(y),
                          (a.image = c(c({}, t.state.image), y))),
                        t.setState(a),
                        t.props.onMouseMove(e));
                  }),
                  i(p(t), "setCanvas", function (e) {
                    t.canvas = e;
                  }),
                  (t.canvas = null),
                  t
                );
              }
              return (
                (e = u),
                (t = [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.props.disableHiDPIScaling && (E = 1);
                      var e,
                        t,
                        n = this.canvas.getContext("2d");
                      this.props.image && this.loadImage(this.props.image),
                        this.paint(n),
                        document &&
                          ((e = !!(function () {
                            var e = !1;
                            try {
                              var t = Object.defineProperty({}, "passive", {
                                get: function () {
                                  e = !0;
                                },
                              });
                              window.addEventListener("test", t, t),
                                window.removeEventListener("test", t, t);
                            } catch (t) {
                              e = !1;
                            }
                            return e;
                          })() && { passive: !1 }),
                          (t = x.native),
                          document.addEventListener(
                            t.move,
                            this.handleMouseMove,
                            e
                          ),
                          document.addEventListener(
                            t.up,
                            this.handleMouseUp,
                            e
                          ),
                          w &&
                            (document.addEventListener(
                              t.mouseMove,
                              this.handleMouseMove,
                              e
                            ),
                            document.addEventListener(
                              t.mouseUp,
                              this.handleMouseUp,
                              e
                            )));
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e, t) {
                      (this.props.image && this.props.image !== e.image) ||
                      this.props.width !== e.width ||
                      this.props.height !== e.height ||
                      this.props.backgroundColor !== e.backgroundColor
                        ? this.loadImage(this.props.image)
                        : this.props.image ||
                          t.image === _ ||
                          this.clearImage();
                      var n = this.canvas.getContext("2d");
                      n.clearRect(0, 0, this.canvas.width, this.canvas.height),
                        this.paint(n),
                        this.paintImage(n, this.state.image, this.props.border),
                        (e.image === this.props.image &&
                          e.width === this.props.width &&
                          e.height === this.props.height &&
                          e.position === this.props.position &&
                          e.scale === this.props.scale &&
                          e.rotate === this.props.rotate &&
                          t.my === this.state.my &&
                          t.mx === this.state.mx &&
                          t.image.x === this.state.image.x &&
                          t.image.y === this.state.image.y &&
                          t.backgroundColor === this.state.backgroundColor) ||
                          this.props.onImageChange();
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      var e;
                      document &&
                        ((e = x.native),
                        document.removeEventListener(
                          e.move,
                          this.handleMouseMove,
                          !1
                        ),
                        document.removeEventListener(
                          e.up,
                          this.handleMouseUp,
                          !1
                        ),
                        w &&
                          (document.removeEventListener(
                            e.mouseMove,
                            this.handleMouseMove,
                            !1
                          ),
                          document.removeEventListener(
                            e.mouseUp,
                            this.handleMouseUp,
                            !1
                          )));
                    },
                  },
                  {
                    key: "isVertical",
                    value: function () {
                      return (
                        !this.props.disableCanvasRotation &&
                        this.props.rotate % 180 != 0
                      );
                    },
                  },
                  {
                    key: "getBorders",
                    value: function (e) {
                      var t =
                        0 < arguments.length && void 0 !== e
                          ? e
                          : this.props.border;
                      return Array.isArray(t) ? t : [t, t];
                    },
                  },
                  {
                    key: "getDimensions",
                    value: function () {
                      var e = this.props,
                        t = e.width,
                        n = e.height,
                        r = e.rotate,
                        a = e.border,
                        o = {},
                        i = v(this.getBorders(a), 2),
                        l = i[0],
                        u = i[1],
                        c = t,
                        s = n;
                      return (
                        this.isVertical()
                          ? ((o.width = s), (o.height = c))
                          : ((o.width = c), (o.height = s)),
                        (o.width += 2 * l),
                        (o.height += 2 * u),
                        { canvas: o, rotate: r, width: t, height: n, border: a }
                      );
                    },
                  },
                  {
                    key: "getImage",
                    value: function () {
                      var e = this.getCroppingRect(),
                        t = this.state.image;
                      (e.x *= t.resource.width),
                        (e.y *= t.resource.height),
                        (e.width *= t.resource.width),
                        (e.height *= t.resource.height);
                      var n = document.createElement("canvas");
                      this.isVertical()
                        ? ((n.width = e.height), (n.height = e.width))
                        : ((n.width = e.width), (n.height = e.height));
                      var r = n.getContext("2d");
                      return (
                        r.translate(n.width / 2, n.height / 2),
                        r.rotate((this.props.rotate * Math.PI) / 180),
                        r.translate(-n.width / 2, -n.height / 2),
                        this.isVertical() &&
                          r.translate(
                            (n.width - n.height) / 2,
                            (n.height - n.width) / 2
                          ),
                        t.backgroundColor &&
                          ((r.fillStyle = t.backgroundColor),
                          r.fillRect(
                            -e.x,
                            -e.y,
                            t.resource.width,
                            t.resource.height
                          )),
                        r.drawImage(t.resource, -e.x, -e.y),
                        n
                      );
                    },
                  },
                  {
                    key: "getImageScaledToCanvas",
                    value: function () {
                      var e = this.getDimensions(),
                        t = e.width,
                        n = e.height,
                        r = document.createElement("canvas");
                      return (
                        this.isVertical()
                          ? ((r.width = n), (r.height = t))
                          : ((r.width = t), (r.height = n)),
                        this.paintImage(
                          r.getContext("2d"),
                          this.state.image,
                          0,
                          1
                        ),
                        r
                      );
                    },
                  },
                  {
                    key: "getXScale",
                    value: function () {
                      var e = this.props.width / this.props.height,
                        t = this.state.image.width / this.state.image.height;
                      return Math.min(1, e / t);
                    },
                  },
                  {
                    key: "getYScale",
                    value: function () {
                      var e = this.props.height / this.props.width,
                        t = this.state.image.height / this.state.image.width;
                      return Math.min(1, e / t);
                    },
                  },
                  {
                    key: "getCroppingRect",
                    value: function () {
                      var e = this.props.position || {
                          x: this.state.image.x,
                          y: this.state.image.y,
                        },
                        t = (1 / this.props.scale) * this.getXScale(),
                        n = (1 / this.props.scale) * this.getYScale(),
                        r = {
                          x: e.x - t / 2,
                          y: e.y - n / 2,
                          width: t,
                          height: n,
                        },
                        a = 0,
                        o = 1 - r.width,
                        i = 0,
                        l = 1 - r.height;
                      return (
                        (this.props.disableBoundaryChecks || 1 < t || 1 < n) &&
                          ((a = -r.width), (i = -r.height), (l = o = 1)),
                        c(
                          c({}, r),
                          {},
                          {
                            x: Math.max(a, Math.min(r.x, o)),
                            y: Math.max(i, Math.min(r.y, l)),
                          }
                        )
                      );
                    },
                  },
                  {
                    key: "loadImage",
                    value: function (e) {
                      var t;
                      k && e instanceof File
                        ? (this.loadingImage =
                            ((t = e),
                            new Promise(function (e, n) {
                              var r = new FileReader();
                              (r.onload = function (t) {
                                try {
                                  var r = g(t.target.result);
                                  e(r);
                                } catch (t) {
                                  n(t);
                                }
                              }),
                                r.readAsDataURL(t);
                            })
                              .then(this.handleImageReady)
                              .catch(this.props.onLoadFailure)))
                        : "string" == typeof e &&
                          (this.loadingImage = g(e, this.props.crossOrigin)
                            .then(this.handleImageReady)
                            .catch(this.props.onLoadFailure));
                    },
                  },
                  {
                    key: "getInitialSize",
                    value: function (e, t) {
                      var n,
                        r,
                        a = this.getDimensions();
                      return (
                        t / e < a.height / a.width
                          ? (r = e * ((n = this.getDimensions().height) / t))
                          : (n = t * ((r = this.getDimensions().width) / e)),
                        { height: n, width: r }
                      );
                    },
                  },
                  {
                    key: "paintImage",
                    value: function (e, t, n, r) {
                      var a,
                        o = 3 < arguments.length && void 0 !== r ? r : E;
                      t.resource &&
                        ((a = this.calculatePosition(t, n)),
                        e.save(),
                        e.translate(e.canvas.width / 2, e.canvas.height / 2),
                        e.rotate((this.props.rotate * Math.PI) / 180),
                        e.translate(-e.canvas.width / 2, -e.canvas.height / 2),
                        this.isVertical() &&
                          e.translate(
                            (e.canvas.width - e.canvas.height) / 2,
                            (e.canvas.height - e.canvas.width) / 2
                          ),
                        e.scale(o, o),
                        (e.globalCompositeOperation = "destination-over"),
                        e.drawImage(t.resource, a.x, a.y, a.width, a.height),
                        t.backgroundColor &&
                          ((e.fillStyle = t.backgroundColor),
                          e.fillRect(a.x, a.y, a.width, a.height)),
                        e.restore());
                    },
                  },
                  {
                    key: "calculatePosition",
                    value: function (e, t) {
                      e = e || this.state.image;
                      var n = v(this.getBorders(t), 2),
                        r = n[0],
                        a = n[1],
                        o = this.getCroppingRect(),
                        i = e.width * this.props.scale,
                        l = e.height * this.props.scale,
                        u = -o.x * i,
                        c = -o.y * l;
                      return (
                        this.isVertical()
                          ? ((u += a), (c += r))
                          : ((u += r), (c += a)),
                        { x: u, y: c, height: l, width: i }
                      );
                    },
                  },
                  {
                    key: "paint",
                    value: function (e) {
                      e.save(),
                        e.scale(E, E),
                        e.translate(0, 0),
                        (e.fillStyle =
                          "rgba(" +
                          this.props.color.slice(0, 4).join(",") +
                          ")");
                      var t,
                        n,
                        r,
                        a,
                        o,
                        i,
                        l,
                        u,
                        c = this.props.borderRadius,
                        s = this.getDimensions(),
                        f = v(this.getBorders(s.border), 2),
                        d = f[0],
                        p = f[1],
                        h = s.canvas.height,
                        m = s.canvas.width;
                      (c = Math.max(c, 0)),
                        (c = Math.min(c, m / 2 - d, h / 2 - p)),
                        e.beginPath(),
                        (t = e),
                        (a = m - 2 * (n = d)),
                        (o = h - 2 * (r = p)),
                        0 === (i = c)
                          ? t.rect(n, r, a, o)
                          : ((l = a - i),
                            (u = o - i),
                            t.translate(n, r),
                            t.arc(i, i, i, Math.PI, 1.5 * Math.PI),
                            t.lineTo(l, 0),
                            t.arc(l, i, i, 1.5 * Math.PI, 2 * Math.PI),
                            t.lineTo(a, u),
                            t.arc(l, u, i, 2 * Math.PI, 0.5 * Math.PI),
                            t.lineTo(i, o),
                            t.arc(i, u, i, 0.5 * Math.PI, Math.PI),
                            t.translate(-n, -r)),
                        e.rect(m, 0, -m, h),
                        e.fill("evenodd"),
                        e.restore();
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t =
                          (e.scale,
                          e.rotate,
                          e.image,
                          e.border,
                          e.borderRadius,
                          e.width,
                          e.height,
                          e.position,
                          e.color,
                          e.backgroundColor,
                          e.style),
                        n =
                          (e.crossOrigin,
                          e.onLoadFailure,
                          e.onLoadSuccess,
                          e.onImageReady,
                          e.onImageChange,
                          e.onMouseUp,
                          e.onMouseMove,
                          e.onPositionChange,
                          e.disableBoundaryChecks,
                          e.disableHiDPIScaling,
                          e.disableCanvasRotation,
                          d(e, [
                            "scale",
                            "rotate",
                            "image",
                            "border",
                            "borderRadius",
                            "width",
                            "height",
                            "position",
                            "color",
                            "backgroundColor",
                            "style",
                            "crossOrigin",
                            "onLoadFailure",
                            "onLoadSuccess",
                            "onImageReady",
                            "onImageChange",
                            "onMouseUp",
                            "onMouseMove",
                            "onPositionChange",
                            "disableBoundaryChecks",
                            "disableHiDPIScaling",
                            "disableCanvasRotation",
                          ])),
                        r = this.getDimensions(),
                        o = {
                          width: r.canvas.width,
                          height: r.canvas.height,
                          cursor: this.state.drag ? "grabbing" : "grab",
                          touchAction: "none",
                        },
                        i = {
                          width: r.canvas.width * E,
                          height: r.canvas.height * E,
                          style: c(c({}, o), t),
                        };
                      return (
                        (i[x.react.down] = this.handleMouseDown),
                        w && (i[x.react.mouseDown] = this.handleMouseDown),
                        a.default.createElement(
                          "canvas",
                          l({ ref: this.setCanvas }, i, n)
                        )
                      );
                    },
                  },
                ]) && o(e.prototype, t),
                n && o(e, n),
                u
              );
            })();
          return (
            i(A, "propTypes", {
              scale: r.default.number,
              rotate: r.default.number,
              image: r.default.oneOfType(
                [r.default.string].concat(
                  (function (e) {
                    if (Array.isArray(e)) return y(e);
                  })((b = k ? [r.default.instanceOf(File)] : [])) ||
                    (function (e) {
                      if (
                        "undefined" != typeof Symbol &&
                        Symbol.iterator in Object(e)
                      )
                        return Array.from(e);
                    })(b) ||
                    m(b) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()
                )
              ),
              border: r.default.oneOfType([
                r.default.number,
                r.default.arrayOf(r.default.number),
              ]),
              borderRadius: r.default.number,
              width: r.default.number,
              height: r.default.number,
              position: r.default.shape({
                x: r.default.number,
                y: r.default.number,
              }),
              color: r.default.arrayOf(r.default.number),
              backgroundColor: r.default.string,
              crossOrigin: r.default.oneOf([
                "",
                "anonymous",
                "use-credentials",
              ]),
              onLoadFailure: r.default.func,
              onLoadSuccess: r.default.func,
              onImageReady: r.default.func,
              onImageChange: r.default.func,
              onMouseUp: r.default.func,
              onMouseMove: r.default.func,
              onPositionChange: r.default.func,
              disableBoundaryChecks: r.default.bool,
              disableHiDPIScaling: r.default.bool,
              disableCanvasRotation: r.default.bool,
            }),
            i(A, "defaultProps", {
              scale: 1,
              rotate: 0,
              border: 25,
              borderRadius: 0,
              width: 200,
              height: 200,
              color: [0, 0, 0, 0.5],
              onLoadFailure: function () {},
              onLoadSuccess: function () {},
              onImageReady: function () {},
              onImageChange: function () {},
              onMouseUp: function () {},
              onMouseMove: function () {},
              onPositionChange: function () {},
              disableBoundaryChecks: !1,
              disableHiDPIScaling: !1,
              disableCanvasRotation: !0,
            }),
            A
          );
        })(n(7), n(791));
      },
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(296);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          l = {};
        function u(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var s = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function v(e, t, n, r, a, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = i);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function g(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = m.hasOwnProperty(t) ? m[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, g);
            m[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, g);
              m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, g);
            m[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          S = Symbol.for("react.portal"),
          x = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          _ = Symbol.for("react.profiler"),
          A = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          O = Symbol.for("react.suspense"),
          R = Symbol.for("react.suspense_list"),
          T = Symbol.for("react.memo"),
          M = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var j = Symbol.iterator;
        function N(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (j && e[j]) || e["@@iterator"])
            ? e
            : null;
        }
        var D,
          I = Object.assign;
        function z(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || "";
            }
          return "\n" + D + e;
        }
        var F = !1;
        function U(e, t) {
          if (!e || F) return "";
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (c) {
                  var r = c;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (c) {
                  r = c;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                r = c;
              }
              e();
            }
          } catch (c) {
            if (c && r && "string" === typeof c.stack) {
              for (
                var a = c.stack.split("\n"),
                  o = r.stack.split("\n"),
                  i = a.length - 1,
                  l = o.length - 1;
                1 <= i && 0 <= l && a[i] !== o[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (a[i] !== o[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || a[i] !== o[l])) {
                        var u = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? z(e) : "";
        }
        function $(e) {
          switch (e.tag) {
            case 5:
              return z(e.type);
            case 16:
              return z("Lazy");
            case 13:
              return z("Suspense");
            case 19:
              return z("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return "";
          }
        }
        function V(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case x:
              return "Fragment";
            case S:
              return "Portal";
            case _:
              return "Profiler";
            case E:
              return "StrictMode";
            case O:
              return "Suspense";
            case R:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || "Context") + ".Consumer";
              case A:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case T:
                return null !== (t = e.displayName || null)
                  ? t
                  : V(e.type) || "Memo";
              case M:
                (t = e._payload), (e = e._init);
                try {
                  return V(e(t));
                } catch (n) {}
            }
          return null;
        }
        function W(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return V(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function B(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function H(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = H(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = H(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function X(e, t) {
          var n = t.checked;
          return I({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = B(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function G(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          G(e, t);
          var n = B(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, B(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && K(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + B(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return I({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: B(n) };
        }
        function oe(e, t) {
          var n = B(t.value),
            r = B(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ce,
          se,
          fe =
            ((se = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return se(e, t);
                  });
                }
              : se);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ye = I(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ge(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Se = null,
          xe = null,
          Ee = null;
        function _e(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof Se) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = ka(t)), Se(e.stateNode, e.type, t));
          }
        }
        function Ae(e) {
          xe ? (Ee ? Ee.push(e) : (Ee = [e])) : (xe = e);
        }
        function Ce() {
          if (xe) {
            var e = xe,
              t = Ee;
            if (((Ee = xe = null), _e(e), t))
              for (e = 0; e < t.length; e++) _e(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function Oe() {}
        var Re = !1;
        function Te(e, t, n) {
          if (Re) return e(t, n);
          Re = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (Re = !1), (null !== xe || null !== Ee) && (Oe(), Ce());
          }
        }
        function Me(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ka(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (s)
          try {
            var je = {};
            Object.defineProperty(je, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", je, je),
              window.removeEventListener("test", je, je);
          } catch (se) {
            Le = !1;
          }
        function Ne(e, t, n, r, a, o, i, l, u) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (s) {
            this.onError(s);
          }
        }
        var De = !1,
          Ie = null,
          ze = !1,
          Fe = null,
          Ue = {
            onError: function (e) {
              (De = !0), (Ie = e);
            },
          };
        function $e(e, t, n, r, a, o, i, l, u) {
          (De = !1), (Ie = null), Ne.apply(Ue, arguments);
        }
        function Ve(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function We(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Be(e) {
          if (Ve(e) !== e) throw Error(o(188));
        }
        function He(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ve(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return Be(a), e;
                    if (i === r) return Be(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var l = !1, u = a.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = a), (r = i);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = a), (n = i);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) {
                    for (u = i.child; u; ) {
                      if (u === n) {
                        (l = !0), (n = i), (r = a);
                        break;
                      }
                      if (u === r) {
                        (l = !0), (r = i), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!l) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Ke = a.unstable_cancelCallback,
          Xe = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Ge = a.unstable_now,
          Ze = a.unstable_getCurrentPriorityLevel,
          Je = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((lt(e) / ut) | 0)) | 0;
              },
          lt = Math.log,
          ut = Math.LN2;
        var ct = 64,
          st = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~a;
            0 !== l ? (r = ft(l)) : 0 !== (o &= i) && (r = ft(o));
          } else 0 !== (i = n & ~a) ? (r = ft(i)) : 0 !== o && (r = ft(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = ct;
          return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function gt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var kt,
          St,
          xt,
          Et,
          _t,
          At = !1,
          Ct = [],
          Pt = null,
          Ot = null,
          Rt = null,
          Tt = new Map(),
          Mt = new Map(),
          Lt = [],
          jt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Nt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              Ot = null;
              break;
            case "mouseover":
            case "mouseout":
              Rt = null;
              break;
            case "pointerover":
            case "pointerout":
              Tt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Mt.delete(t.pointerId);
          }
        }
        function Dt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && St(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function It(e) {
          var t = ga(e.target);
          if (null !== t) {
            var n = Ve(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
                  return (
                    (e.blockedOn = t),
                    void _t(e.priority, function () {
                      xt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function zt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && St(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          zt(e) && n.delete(t);
        }
        function Ut() {
          (At = !1),
            null !== Pt && zt(Pt) && (Pt = null),
            null !== Ot && zt(Ot) && (Ot = null),
            null !== Rt && zt(Rt) && (Rt = null),
            Tt.forEach(Ft),
            Mt.forEach(Ft);
        }
        function $t(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            At ||
              ((At = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)));
        }
        function Vt(e) {
          function t(t) {
            return $t(t, e);
          }
          if (0 < Ct.length) {
            $t(Ct[0], e);
            for (var n = 1; n < Ct.length; n++) {
              var r = Ct[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && $t(Pt, e),
              null !== Ot && $t(Ot, e),
              null !== Rt && $t(Rt, e),
              Tt.forEach(t),
              Mt.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            It(n), null === n.blockedOn && Lt.shift();
        }
        var Wt = w.ReactCurrentBatchConfig,
          Bt = !0;
        function Ht(e, t, n, r) {
          var a = bt,
            o = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = o);
          }
        }
        function Qt(e, t, n, r) {
          var a = bt,
            o = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = o);
          }
        }
        function qt(e, t, n, r) {
          if (Bt) {
            var a = Xt(e, t, n, r);
            if (null === a) Br(e, t, r, Kt, n), Nt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Pt = Dt(Pt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Ot = Dt(Ot, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Rt = Dt(Rt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return Tt.set(o, Dt(Tt.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Mt.set(o, Dt(Mt.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Nt(e, r), 4 & t && -1 < jt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && kt(o),
                  null === (o = Xt(e, t, n, r)) && Br(e, t, r, Kt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Br(e, t, r, null, n);
          }
        }
        var Kt = null;
        function Xt(e, t, n, r) {
          if (((Kt = null), null !== (e = ga((e = ke(r))))))
            if (null === (t = Ve(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Yt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Gt = null,
          Zt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Zt,
            r = n.length,
            a = "value" in Gt ? Gt.value : Gt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return (Jt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            I(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          un,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          sn = an(cn),
          fn = I({}, cn, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = I({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: _n,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((on = e.screenX - un.screenX),
                        (ln = e.screenY - un.screenY))
                      : (ln = on = 0),
                    (un = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          vn = an(I({}, pn, { dataTransfer: 0 })),
          mn = an(I({}, fn, { relatedTarget: 0 })),
          yn = an(
            I({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          gn = I({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(gn),
          wn = an(I({}, cn, { data: 0 })),
          kn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Sn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          xn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = xn[e]) && !!t[e];
        }
        function _n() {
          return En;
        }
        var An = I({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Sn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: _n,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Cn = an(An),
          Pn = an(
            I({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          On = an(
            I({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: _n,
            })
          ),
          Rn = an(
            I({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Tn = I({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Mn = an(Tn),
          Ln = [9, 13, 27, 32],
          jn = s && "CompositionEvent" in window,
          Nn = null;
        s && "documentMode" in document && (Nn = document.documentMode);
        var Dn = s && "TextEvent" in window && !Nn,
          In = s && (!jn || (Nn && 8 < Nn && 11 >= Nn)),
          zn = String.fromCharCode(32),
          Fn = !1;
        function Un(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function $n(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Vn = !1;
        var Wn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Bn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function Hn(e, t, n, r) {
          Ae(r),
            0 < (t = Qr(t, "onChange")).length &&
              ((n = new sn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          qn = null;
        function Kn(e) {
          zr(e, 0);
        }
        function Xn(e) {
          if (q(wa(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Gn = !1;
        if (s) {
          var Zn;
          if (s) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof er.oninput);
            }
            Zn = Jn;
          } else Zn = !1;
          Gn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent("onpropertychange", nr), (qn = Qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Xn(qn)) {
            var t = [];
            Hn(t, qn, e, ke(e)), Te(Kn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Xn(qn);
        }
        function or(e, t) {
          if ("click" === e) return Xn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Xn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !lr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function sr(e, t) {
          var n,
            r = cr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = sr(n, o));
                var i = sr(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = s && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          yr = null,
          gr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == mr ||
            mr !== K(r) ||
            ("selectionStart" in (r = mr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (gr && ur(gr, r)) ||
              ((gr = r),
              0 < (r = Qr(yr, "onSelect")).length &&
                ((t = new sn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function kr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Sr = {
            animationend: kr("Animation", "AnimationEnd"),
            animationiteration: kr("Animation", "AnimationIteration"),
            animationstart: kr("Animation", "AnimationStart"),
            transitionend: kr("Transition", "TransitionEnd"),
          },
          xr = {},
          Er = {};
        function _r(e) {
          if (xr[e]) return xr[e];
          if (!Sr[e]) return e;
          var t,
            n = Sr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (xr[e] = n[t]);
          return e;
        }
        s &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Sr.animationend.animation,
            delete Sr.animationiteration.animation,
            delete Sr.animationstart.animation),
          "TransitionEvent" in window || delete Sr.transitionend.transition);
        var Ar = _r("animationend"),
          Cr = _r("animationiteration"),
          Pr = _r("animationstart"),
          Or = _r("transitionend"),
          Rr = new Map(),
          Tr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Mr(e, t) {
          Rr.set(e, t), u(t, [e]);
        }
        for (var Lr = 0; Lr < Tr.length; Lr++) {
          var jr = Tr[Lr];
          Mr(jr.toLowerCase(), "on" + (jr[0].toUpperCase() + jr.slice(1)));
        }
        Mr(Ar, "onAnimationEnd"),
          Mr(Cr, "onAnimationIteration"),
          Mr(Pr, "onAnimationStart"),
          Mr("dblclick", "onDoubleClick"),
          Mr("focusin", "onFocus"),
          Mr("focusout", "onBlur"),
          Mr(Or, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Nr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Dr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Nr)
          );
        function Ir(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, l, u, c) {
              if (($e.apply(this, arguments), De)) {
                if (!De) throw Error(o(198));
                var s = Ie;
                (De = !1), (Ie = null), ze || ((ze = !0), (Fe = s));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function zr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    u = l.instance,
                    c = l.currentTarget;
                  if (((l = l.listener), u !== o && a.isPropagationStopped()))
                    break e;
                  Ir(a, l, c), (o = u);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((u = (l = r[i]).instance),
                    (c = l.currentTarget),
                    (l = l.listener),
                    u !== o && a.isPropagationStopped())
                  )
                    break e;
                  Ir(a, l, c), (o = u);
                }
            }
          }
          if (ze) throw ((e = Fe), (ze = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[va];
          void 0 === n && (n = t[va] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function Ur(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var $r = "_reactListening" + Math.random().toString(36).slice(2);
        function Vr(e) {
          if (!e[$r]) {
            (e[$r] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Dr.has(t) || Ur(t, !1, e), Ur(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[$r] || ((t[$r] = !0), Ur("selectionchange", !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = Ht;
              break;
            case 4:
              a = Qt;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Le ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Br(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var u = i.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = i.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = ga(l))) return;
                  if (5 === (u = i.tag) || 6 === u) {
                    r = o = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Te(function () {
            var r = o,
              a = ke(n),
              i = [];
            e: {
              var l = Rr.get(e);
              if (void 0 !== l) {
                var u = sn,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Cn;
                    break;
                  case "focusin":
                    (c = "focus"), (u = mn);
                    break;
                  case "focusout":
                    (c = "blur"), (u = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = mn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = On;
                    break;
                  case Ar:
                  case Cr:
                  case Pr:
                    u = yn;
                    break;
                  case Or:
                    u = Rn;
                    break;
                  case "scroll":
                    u = dn;
                    break;
                  case "wheel":
                    u = Mn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Pn;
                }
                var s = 0 !== (4 & t),
                  f = !s && "scroll" === e,
                  d = s ? (null !== l ? l + "Capture" : null) : l;
                s = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== d &&
                        null != (v = Me(h, d)) &&
                        s.push(Hr(h, v, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < s.length &&
                  ((l = new u(l, c, null, n, a)),
                  i.push({ event: l, listeners: s }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!ga(c) && !c[ha])) &&
                  (u || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? ga(c)
                          : null) &&
                        (c !== (f = Ve(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((u = null), (c = r)),
                  u !== c))
              ) {
                if (
                  ((s = hn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((s = Pn),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? l : wa(u)),
                  (p = null == c ? l : wa(c)),
                  ((l = new s(v, h + "leave", u, n, a)).target = f),
                  (l.relatedTarget = p),
                  (v = null),
                  ga(a) === r &&
                    (((s = new s(d, h + "enter", c, n, a)).target = p),
                    (s.relatedTarget = f),
                    (v = s)),
                  (f = v),
                  u && c)
                )
                  e: {
                    for (d = c, h = 0, p = s = u; p; p = qr(p)) h++;
                    for (p = 0, v = d; v; v = qr(v)) p++;
                    for (; 0 < h - p; ) (s = qr(s)), h--;
                    for (; 0 < p - h; ) (d = qr(d)), p--;
                    for (; h--; ) {
                      if (s === d || (null !== d && s === d.alternate)) break e;
                      (s = qr(s)), (d = qr(d));
                    }
                    s = null;
                  }
                else s = null;
                null !== u && Kr(i, l, u, s, !1),
                  null !== c && null !== f && Kr(i, f, c, s, !0);
              }
              if (
                "select" ===
                  (u =
                    (l = r ? wa(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === u && "file" === l.type)
              )
                var m = Yn;
              else if (Bn(l))
                if (Gn) m = ir;
                else {
                  m = ar;
                  var y = rr;
                }
              else
                (u = l.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (m = or);
              switch (
                (m && (m = m(e, r))
                  ? Hn(i, m, n, a)
                  : (y && y(e, l, r),
                    "focusout" === e &&
                      (y = l._wrapperState) &&
                      y.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (y = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Bn(y) || "true" === y.contentEditable) &&
                    ((mr = y), (yr = r), (gr = null));
                  break;
                case "focusout":
                  gr = yr = mr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(i, n, a);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, a);
              }
              var g;
              if (jn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Vn
                  ? Un(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (In &&
                  "ko" !== n.locale &&
                  (Vn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Vn && (g = en())
                    : ((Zt = "value" in (Gt = a) ? Gt.value : Gt.textContent),
                      (Vn = !0))),
                0 < (y = Qr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  i.push({ event: b, listeners: y }),
                  g ? (b.data = g) : null !== (g = $n(n)) && (b.data = g))),
                (g = Dn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return $n(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), zn);
                        case "textInput":
                          return (e = t.data) === zn && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Vn)
                        return "compositionend" === e || (!jn && Un(e, t))
                          ? ((e = en()), (Jt = Zt = Gt = null), (Vn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return In && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = g));
            }
            zr(i, t);
          });
        }
        function Hr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Me(e, n)) && r.unshift(Hr(e, o, a)),
              null != (o = Me(e, t)) && r.push(Hr(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              u = l.alternate,
              c = l.stateNode;
            if (null !== u && u === r) break;
            5 === l.tag &&
              null !== c &&
              ((l = c),
              a
                ? null != (u = Me(n, o)) && i.unshift(Hr(n, u, l))
                : a || (null != (u = Me(n, o)) && i.push(Hr(n, u, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Xr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Gr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Xr, "\n")
            .replace(Yr, "");
        }
        function Zr(e, t, n) {
          if (((t = Gr(t)), Gr(e) !== t && n)) throw Error(o(425));
        }
        function Jr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(la);
                }
              : ra;
        function la(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Vt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Vt(t);
        }
        function ca(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function sa(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          va = "__reactEvents$" + fa,
          ma = "__reactListeners$" + fa,
          ya = "__reactHandles$" + fa;
        function ga(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = sa(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = sa(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function ka(e) {
          return e[pa] || null;
        }
        var Sa = [],
          xa = -1;
        function Ea(e) {
          return { current: e };
        }
        function _a(e) {
          0 > xa || ((e.current = Sa[xa]), (Sa[xa] = null), xa--);
        }
        function Aa(e, t) {
          xa++, (Sa[xa] = e.current), (e.current = t);
        }
        var Ca = {},
          Pa = Ea(Ca),
          Oa = Ea(!1),
          Ra = Ca;
        function Ta(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ca;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Ma(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function La() {
          _a(Oa), _a(Pa);
        }
        function ja(e, t, n) {
          if (Pa.current !== Ca) throw Error(o(168));
          Aa(Pa, t), Aa(Oa, n);
        }
        function Na(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, W(e) || "Unknown", a));
          return I({}, n, r);
        }
        function Da(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ca),
            (Ra = Pa.current),
            Aa(Pa, e),
            Aa(Oa, Oa.current),
            !0
          );
        }
        function Ia(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = Na(e, t, Ra)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              _a(Oa),
              _a(Pa),
              Aa(Pa, e))
            : _a(Oa),
            Aa(Oa, n);
        }
        var za = null,
          Fa = !1,
          Ua = !1;
        function $a(e) {
          null === za ? (za = [e]) : za.push(e);
        }
        function Va() {
          if (!Ua && null !== za) {
            Ua = !0;
            var e = 0,
              t = bt;
            try {
              var n = za;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (za = null), (Fa = !1);
            } catch (a) {
              throw (null !== za && (za = za.slice(e + 1)), qe(Je, Va), a);
            } finally {
              (bt = t), (Ua = !1);
            }
          }
          return null;
        }
        var Wa = [],
          Ba = 0,
          Ha = null,
          Qa = 0,
          qa = [],
          Ka = 0,
          Xa = null,
          Ya = 1,
          Ga = "";
        function Za(e, t) {
          (Wa[Ba++] = Qa), (Wa[Ba++] = Ha), (Ha = e), (Qa = t);
        }
        function Ja(e, t, n) {
          (qa[Ka++] = Ya), (qa[Ka++] = Ga), (qa[Ka++] = Xa), (Xa = e);
          var r = Ya;
          e = Ga;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - it(t) + a;
          if (30 < o) {
            var i = a - (a % 5);
            (o = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ya = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Ga = o + e);
          } else (Ya = (1 << o) | (n << a) | r), (Ga = e);
        }
        function eo(e) {
          null !== e.return && (Za(e, 1), Ja(e, 1, 0));
        }
        function to(e) {
          for (; e === Ha; )
            (Ha = Wa[--Ba]), (Wa[Ba] = null), (Qa = Wa[--Ba]), (Wa[Ba] = null);
          for (; e === Xa; )
            (Xa = qa[--Ka]),
              (qa[Ka] = null),
              (Ga = qa[--Ka]),
              (qa[Ka] = null),
              (Ya = qa[--Ka]),
              (qa[Ka] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function io(e, t) {
          var n = Tc(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function lo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = ca(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Xa ? { id: Ya, overflow: Ga } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Tc(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function uo(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function co(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!lo(e, t)) {
                if (uo(e)) throw Error(o(418));
                t = ca(n.nextSibling);
                var r = no;
                t && lo(e, t)
                  ? io(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (uo(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function so(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return so(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (uo(e)) throw (po(), Error(o(418)));
            for (; t; ) io(e, t), (t = ca(t.nextSibling));
          }
          if ((so(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = ca(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? ca(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = ca(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (ao = !1);
        }
        function vo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var mo = w.ReactCurrentBatchConfig;
        function yo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = I({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var go = Ea(null),
          bo = null,
          wo = null,
          ko = null;
        function So() {
          ko = wo = bo = null;
        }
        function xo(e) {
          var t = go.current;
          _a(go), (e._currentValue = t);
        }
        function Eo(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function _o(e, t) {
          (bo = e),
            (ko = wo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wl = !0), (e.firstContext = null));
        }
        function Ao(e) {
          var t = e._currentValue;
          if (ko !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wo)
            ) {
              if (null === bo) throw Error(o(308));
              (wo = e), (bo.dependencies = { lanes: 0, firstContext: e });
            } else wo = wo.next = e;
          return t;
        }
        var Co = null;
        function Po(e) {
          null === Co ? (Co = [e]) : Co.push(e);
        }
        function Oo(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Po(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Ro(e, r)
          );
        }
        function Ro(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var To = !1;
        function Mo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Lo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function jo(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function No(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Pu))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Ro(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Po(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Ro(e, n)
          );
        }
        function Do(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        function Io(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function zo(e, t, n, r) {
          var a = e.updateQueue;
          To = !1;
          var o = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var u = l,
              c = u.next;
            (u.next = null), null === i ? (o = c) : (i.next = c), (i = u);
            var s = e.alternate;
            null !== s &&
              (l = (s = s.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (s.firstBaseUpdate = c) : (l.next = c),
              (s.lastBaseUpdate = u));
          }
          if (null !== o) {
            var f = a.baseState;
            for (i = 0, s = c = u = null, l = o; ; ) {
              var d = l.lane,
                p = l.eventTime;
              if ((r & d) === d) {
                null !== s &&
                  (s = s.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = l;
                  switch (((d = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (h = v.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = v.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = I({}, f, d);
                      break e;
                    case 2:
                      To = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [l]) : d.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === s ? ((c = s = p), (u = f)) : (s = s.next = p),
                  (i |= d);
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                (l = (d = l).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === s && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = s),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Du |= i), (e.lanes = i), (e.memoizedState = f);
          }
        }
        function Fo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Uo = new r.Component().refs;
        function $o(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : I({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Vo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ve(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              a = tc(e),
              o = jo(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = No(e, o, a)) && (nc(t, e, a, r), Do(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              a = tc(e),
              o = jo(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = No(e, o, a)) && (nc(t, e, a, r), Do(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ec(),
              r = tc(e),
              a = jo(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = No(e, a, r)) && (nc(t, e, r, n), Do(t, e, r));
          },
        };
        function Wo(e, t, n, r, a, o, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, o);
        }
        function Bo(e, t, n) {
          var r = !1,
            a = Ca,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Ao(o))
              : ((a = Ma(t) ? Ra : Pa.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ta(e, a)
                  : Ca)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Vo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function Ho(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Vo.enqueueReplaceState(t, t.state, null);
        }
        function Qo(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Uo), Mo(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = Ao(o))
            : ((o = Ma(t) ? Ra : Pa.current), (a.context = Ta(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              ($o(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Vo.enqueueReplaceState(a, a.state, null),
              zo(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function qo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Uo && (t = a.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function Ko(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Xo(e) {
          return (0, e._init)(e._payload);
        }
        function Yo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Lc(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Ic(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var o = n.type;
            return o === x
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === M &&
                    Xo(o) === t.type))
              ? (((r = a(t, n.props)).ref = qo(e, t, n)), (r.return = e), r)
              : (((r = jc(n.type, n.key, n.props, null, e.mode, r)).ref = qo(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function s(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = zc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Nc(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Ic("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = jc(t.type, t.key, t.props, null, e.mode, n)).ref = qo(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case S:
                  return ((t = zc(t, e.mode, n)).return = e), t;
                case M:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || N(t))
                return ((t = Nc(t, e.mode, n, null)).return = e), t;
              Ko(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case S:
                  return n.key === a ? s(e, t, n, r) : null;
                case M:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || N(n)) return null !== a ? null : f(e, t, n, r, null);
              Ko(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case S:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case M:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || N(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              Ko(t, r);
            }
            return null;
          }
          function v(a, o, l, u) {
            for (
              var c = null, s = null, f = o, v = (o = 0), m = null;
              null !== f && v < l.length;
              v++
            ) {
              f.index > v ? ((m = f), (f = null)) : (m = f.sibling);
              var y = p(a, f, l[v], u);
              if (null === y) {
                null === f && (f = m);
                break;
              }
              e && f && null === y.alternate && t(a, f),
                (o = i(y, o, v)),
                null === s ? (c = y) : (s.sibling = y),
                (s = y),
                (f = m);
            }
            if (v === l.length) return n(a, f), ao && Za(a, v), c;
            if (null === f) {
              for (; v < l.length; v++)
                null !== (f = d(a, l[v], u)) &&
                  ((o = i(f, o, v)),
                  null === s ? (c = f) : (s.sibling = f),
                  (s = f));
              return ao && Za(a, v), c;
            }
            for (f = r(a, f); v < l.length; v++)
              null !== (m = h(f, a, v, l[v], u)) &&
                (e &&
                  null !== m.alternate &&
                  f.delete(null === m.key ? v : m.key),
                (o = i(m, o, v)),
                null === s ? (c = m) : (s.sibling = m),
                (s = m));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Za(a, v),
              c
            );
          }
          function m(a, l, u, c) {
            var s = N(u);
            if ("function" !== typeof s) throw Error(o(150));
            if (null == (u = s.call(u))) throw Error(o(151));
            for (
              var f = (s = null), v = l, m = (l = 0), y = null, g = u.next();
              null !== v && !g.done;
              m++, g = u.next()
            ) {
              v.index > m ? ((y = v), (v = null)) : (y = v.sibling);
              var b = p(a, v, g.value, c);
              if (null === b) {
                null === v && (v = y);
                break;
              }
              e && v && null === b.alternate && t(a, v),
                (l = i(b, l, m)),
                null === f ? (s = b) : (f.sibling = b),
                (f = b),
                (v = y);
            }
            if (g.done) return n(a, v), ao && Za(a, m), s;
            if (null === v) {
              for (; !g.done; m++, g = u.next())
                null !== (g = d(a, g.value, c)) &&
                  ((l = i(g, l, m)),
                  null === f ? (s = g) : (f.sibling = g),
                  (f = g));
              return ao && Za(a, m), s;
            }
            for (v = r(a, v); !g.done; m++, g = u.next())
              null !== (g = h(v, a, m, g.value, c)) &&
                (e &&
                  null !== g.alternate &&
                  v.delete(null === g.key ? m : g.key),
                (l = i(g, l, m)),
                null === f ? (s = g) : (f.sibling = g),
                (f = g));
            return (
              e &&
                v.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Za(a, m),
              s
            );
          }
          return function e(r, o, i, u) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === x &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case k:
                  e: {
                    for (var c = i.key, s = o; null !== s; ) {
                      if (s.key === c) {
                        if ((c = i.type) === x) {
                          if (7 === s.tag) {
                            n(r, s.sibling),
                              ((o = a(s, i.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          s.elementType === c ||
                          ("object" === typeof c &&
                            null !== c &&
                            c.$$typeof === M &&
                            Xo(c) === s.type)
                        ) {
                          n(r, s.sibling),
                            ((o = a(s, i.props)).ref = qo(r, s, i)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, s);
                        break;
                      }
                      t(r, s), (s = s.sibling);
                    }
                    i.type === x
                      ? (((o = Nc(i.props.children, r.mode, u, i.key)).return =
                          r),
                        (r = o))
                      : (((u = jc(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          u
                        )).ref = qo(r, o, i)),
                        (u.return = r),
                        (r = u));
                  }
                  return l(r);
                case S:
                  e: {
                    for (s = i.key; null !== o; ) {
                      if (o.key === s) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === i.containerInfo &&
                          o.stateNode.implementation === i.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, i.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = zc(i, r.mode, u)).return = r), (r = o);
                  }
                  return l(r);
                case M:
                  return e(r, o, (s = i._init)(i._payload), u);
              }
              if (te(i)) return v(r, o, i, u);
              if (N(i)) return m(r, o, i, u);
              Ko(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                  : (n(r, o), ((o = Ic(i, r.mode, u)).return = r), (r = o)),
                l(r))
              : n(r, o);
          };
        }
        var Go = Yo(!0),
          Zo = Yo(!1),
          Jo = {},
          ei = Ea(Jo),
          ti = Ea(Jo),
          ni = Ea(Jo);
        function ri(e) {
          if (e === Jo) throw Error(o(174));
          return e;
        }
        function ai(e, t) {
          switch ((Aa(ni, t), Aa(ti, e), Aa(ei, Jo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          _a(ei), Aa(ei, t);
        }
        function oi() {
          _a(ei), _a(ti), _a(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = ue(t, e.type);
          t !== n && (Aa(ti, e), Aa(ei, n));
        }
        function li(e) {
          ti.current === e && (_a(ei), _a(ti));
        }
        var ui = Ea(0);
        function ci(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var si = [];
        function fi() {
          for (var e = 0; e < si.length; e++)
            si[e]._workInProgressVersionPrimary = null;
          si.length = 0;
        }
        var di = w.ReactCurrentDispatcher,
          pi = w.ReactCurrentBatchConfig,
          hi = 0,
          vi = null,
          mi = null,
          yi = null,
          gi = !1,
          bi = !1,
          wi = 0,
          ki = 0;
        function Si() {
          throw Error(o(321));
        }
        function xi(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function Ei(e, t, n, r, a, i) {
          if (
            ((hi = i),
            (vi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? ll : ul),
            (e = n(r, a)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (wi = 0), 25 <= i)) throw Error(o(301));
              (i += 1),
                (yi = mi = null),
                (t.updateQueue = null),
                (di.current = cl),
                (e = n(r, a));
            } while (bi);
          }
          if (
            ((di.current = il),
            (t = null !== mi && null !== mi.next),
            (hi = 0),
            (yi = mi = vi = null),
            (gi = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function _i() {
          var e = 0 !== wi;
          return (wi = 0), e;
        }
        function Ai() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === yi ? (vi.memoizedState = yi = e) : (yi = yi.next = e), yi
          );
        }
        function Ci() {
          if (null === mi) {
            var e = vi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mi.next;
          var t = null === yi ? vi.memoizedState : yi.next;
          if (null !== t) (yi = t), (mi = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (mi = e).memoizedState,
              baseState: mi.baseState,
              baseQueue: mi.baseQueue,
              queue: mi.queue,
              next: null,
            }),
              null === yi ? (vi.memoizedState = yi = e) : (yi = yi.next = e);
          }
          return yi;
        }
        function Pi(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Oi(e) {
          var t = Ci(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = mi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var l = a.next;
              (a.next = i.next), (i.next = l);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var u = (l = null),
              c = null,
              s = i;
            do {
              var f = s.lane;
              if ((hi & f) === f)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: s.action,
                      hasEagerState: s.hasEagerState,
                      eagerState: s.eagerState,
                      next: null,
                    }),
                  (r = s.hasEagerState ? s.eagerState : e(r, s.action));
              else {
                var d = {
                  lane: f,
                  action: s.action,
                  hasEagerState: s.hasEagerState,
                  eagerState: s.eagerState,
                  next: null,
                };
                null === c ? ((u = c = d), (l = r)) : (c = c.next = d),
                  (vi.lanes |= f),
                  (Du |= f);
              }
              s = s.next;
            } while (null !== s && s !== i);
            null === c ? (l = r) : (c.next = u),
              lr(r, t.memoizedState) || (wl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = c),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (vi.lanes |= i), (Du |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ri(e) {
          var t = Ci(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== a);
            lr(i, t.memoizedState) || (wl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Ti() {}
        function Mi(e, t) {
          var n = vi,
            r = Ci(),
            a = t(),
            i = !lr(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (wl = !0)),
            (r = r.queue),
            Bi(Ni.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== yi && 1 & yi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Fi(9, ji.bind(null, n, r, a, t), void 0, null),
              null === Ou)
            )
              throw Error(o(349));
            0 !== (30 & hi) || Li(n, t, a);
          }
          return a;
        }
        function Li(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = vi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function ji(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Di(t) && Ii(e);
        }
        function Ni(e, t, n) {
          return n(function () {
            Di(t) && Ii(e);
          });
        }
        function Di(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ii(e) {
          var t = Ro(e, 1);
          null !== t && nc(t, e, 1, -1);
        }
        function zi(e) {
          var t = Ai();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Pi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, vi, e)),
            [t.memoizedState, e]
          );
        }
        function Fi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = vi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Ui() {
          return Ci().memoizedState;
        }
        function $i(e, t, n, r) {
          var a = Ai();
          (vi.flags |= e),
            (a.memoizedState = Fi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Vi(e, t, n, r) {
          var a = Ci();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== mi) {
            var i = mi.memoizedState;
            if (((o = i.destroy), null !== r && xi(r, i.deps)))
              return void (a.memoizedState = Fi(t, n, o, r));
          }
          (vi.flags |= e), (a.memoizedState = Fi(1 | t, n, o, r));
        }
        function Wi(e, t) {
          return $i(8390656, 8, e, t);
        }
        function Bi(e, t) {
          return Vi(2048, 8, e, t);
        }
        function Hi(e, t) {
          return Vi(4, 2, e, t);
        }
        function Qi(e, t) {
          return Vi(4, 4, e, t);
        }
        function qi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ki(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Vi(4, 4, qi.bind(null, t, e), n)
          );
        }
        function Xi() {}
        function Yi(e, t) {
          var n = Ci();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && xi(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Gi(e, t) {
          var n = Ci();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && xi(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Zi(e, t, n) {
          return 0 === (21 & hi)
            ? (e.baseState && ((e.baseState = !1), (wl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = vt()), (vi.lanes |= n), (Du |= n), (e.baseState = !0)),
              t);
        }
        function Ji(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pi.transition;
          pi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pi.transition = r);
          }
        }
        function el() {
          return Ci().memoizedState;
        }
        function tl(e, t, n) {
          var r = tc(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            al(t, n);
          else if (null !== (n = Oo(e, t, n, r))) {
            nc(n, e, r, ec()), ol(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = tc(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) al(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = o(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, i))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), Po(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (c) {}
            null !== (n = Oo(e, t, a, r)) &&
              (nc(n, e, r, (a = ec())), ol(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === vi || (null !== t && t === vi);
        }
        function al(e, t) {
          bi = gi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ol(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var il = {
            readContext: Ao,
            useCallback: Si,
            useContext: Si,
            useEffect: Si,
            useImperativeHandle: Si,
            useInsertionEffect: Si,
            useLayoutEffect: Si,
            useMemo: Si,
            useReducer: Si,
            useRef: Si,
            useState: Si,
            useDebugValue: Si,
            useDeferredValue: Si,
            useTransition: Si,
            useMutableSource: Si,
            useSyncExternalStore: Si,
            useId: Si,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Ao,
            useCallback: function (e, t) {
              return (Ai().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ao,
            useEffect: Wi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                $i(4194308, 4, qi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return $i(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return $i(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ai();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Ai();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, vi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ai().memoizedState = e);
            },
            useState: zi,
            useDebugValue: Xi,
            useDeferredValue: function (e) {
              return (Ai().memoizedState = e);
            },
            useTransition: function () {
              var e = zi(!1),
                t = e[0];
              return (
                (e = Ji.bind(null, e[1])), (Ai().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = vi,
                a = Ai();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Ou)) throw Error(o(349));
                0 !== (30 & hi) || Li(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Wi(Ni.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Fi(9, ji.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ai(),
                t = Ou.identifierPrefix;
              if (ao) {
                var n = Ga;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ya & ~(1 << (32 - it(Ya) - 1))).toString(32) + n)),
                  0 < (n = wi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = ki++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: Ao,
            useCallback: Yi,
            useContext: Ao,
            useEffect: Bi,
            useImperativeHandle: Ki,
            useInsertionEffect: Hi,
            useLayoutEffect: Qi,
            useMemo: Gi,
            useReducer: Oi,
            useRef: Ui,
            useState: function () {
              return Oi(Pi);
            },
            useDebugValue: Xi,
            useDeferredValue: function (e) {
              return Zi(Ci(), mi.memoizedState, e);
            },
            useTransition: function () {
              return [Oi(Pi)[0], Ci().memoizedState];
            },
            useMutableSource: Ti,
            useSyncExternalStore: Mi,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          cl = {
            readContext: Ao,
            useCallback: Yi,
            useContext: Ao,
            useEffect: Bi,
            useImperativeHandle: Ki,
            useInsertionEffect: Hi,
            useLayoutEffect: Qi,
            useMemo: Gi,
            useReducer: Ri,
            useRef: Ui,
            useState: function () {
              return Ri(Pi);
            },
            useDebugValue: Xi,
            useDeferredValue: function (e) {
              var t = Ci();
              return null === mi
                ? (t.memoizedState = e)
                : Zi(t, mi.memoizedState, e);
            },
            useTransition: function () {
              return [Ri(Pi)[0], Ci().memoizedState];
            },
            useMutableSource: Ti,
            useSyncExternalStore: Mi,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function sl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += $(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function fl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function dl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = jo(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Bu || ((Bu = !0), (Hu = r)), dl(0, t);
            }),
            n
          );
        }
        function vl(e, t, n) {
          (n = jo(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                dl(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                dl(0, t),
                  "function" !== typeof r &&
                    (null === Qu ? (Qu = new Set([this])) : Qu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ml(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = _c.bind(null, e, t, n)), t.then(e, e));
        }
        function yl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gl(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = jo(-1, 1)).tag = 2), No(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bl = w.ReactCurrentOwner,
          wl = !1;
        function kl(e, t, n, r) {
          t.child = null === e ? Zo(t, null, n, r) : Go(t, e.child, n, r);
        }
        function Sl(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            _o(t, a),
            (r = Ei(e, t, n, r, o, a)),
            (n = _i()),
            null === e || wl
              ? (ao && n && eo(t), (t.flags |= 1), kl(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Bl(e, t, a))
          );
        }
        function xl(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Mc(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = jc(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), El(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var i = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(i, r) &&
              e.ref === t.ref
            )
              return Bl(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Lc(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function El(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (ur(o, r) && e.ref === t.ref) {
              if (((wl = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Bl(e, t, a);
              0 !== (131072 & e.flags) && (wl = !0);
            }
          }
          return Cl(e, t, n, r, a);
        }
        function _l(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Aa(Lu, Mu),
                (Mu |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Aa(Lu, Mu),
                  (Mu |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Aa(Lu, Mu),
                (Mu |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Aa(Lu, Mu),
              (Mu |= r);
          return kl(e, t, a, n), t.child;
        }
        function Al(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Cl(e, t, n, r, a) {
          var o = Ma(n) ? Ra : Pa.current;
          return (
            (o = Ta(t, o)),
            _o(t, a),
            (n = Ei(e, t, n, r, o, a)),
            (r = _i()),
            null === e || wl
              ? (ao && r && eo(t), (t.flags |= 1), kl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Bl(e, t, a))
          );
        }
        function Pl(e, t, n, r, a) {
          if (Ma(n)) {
            var o = !0;
            Da(t);
          } else o = !1;
          if ((_o(t, a), null === t.stateNode))
            Wl(e, t), Bo(t, n, r), Qo(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var u = i.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = Ao(c))
              : (c = Ta(t, (c = Ma(n) ? Ra : Pa.current)));
            var s = n.getDerivedStateFromProps,
              f =
                "function" === typeof s ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== r || u !== c) && Ho(t, i, r, c)),
              (To = !1);
            var d = t.memoizedState;
            (i.state = d),
              zo(t, r, i, a),
              (u = t.memoizedState),
              l !== r || d !== u || Oa.current || To
                ? ("function" === typeof s &&
                    ($o(t, n, s, r), (u = t.memoizedState)),
                  (l = To || Wo(t, n, l, r, d, u, c))
                    ? (f ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (i.props = r),
                  (i.state = u),
                  (i.context = c),
                  (r = l))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Lo(e, t),
              (l = t.memoizedProps),
              (c = t.type === t.elementType ? l : yo(t.type, l)),
              (i.props = c),
              (f = t.pendingProps),
              (d = i.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = Ao(u))
                : (u = Ta(t, (u = Ma(n) ? Ra : Pa.current)));
            var p = n.getDerivedStateFromProps;
            (s =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== f || d !== u) && Ho(t, i, r, u)),
              (To = !1),
              (d = t.memoizedState),
              (i.state = d),
              zo(t, r, i, a);
            var h = t.memoizedState;
            l !== f || d !== h || Oa.current || To
              ? ("function" === typeof p &&
                  ($o(t, n, p, r), (h = t.memoizedState)),
                (c = To || Wo(t, n, c, r, d, h, u) || !1)
                  ? (s ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, u),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = u),
                (r = c))
              : ("function" !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ol(e, t, n, r, o, a);
        }
        function Ol(e, t, n, r, a, o) {
          Al(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Ia(t, n, !1), Bl(e, t, o);
          (r = t.stateNode), (bl.current = t);
          var l =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Go(t, e.child, null, o)),
                (t.child = Go(t, null, l, o)))
              : kl(e, t, l, o),
            (t.memoizedState = r.state),
            a && Ia(t, n, !0),
            t.child
          );
        }
        function Rl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? ja(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && ja(0, t.context, !1),
            ai(e, t.containerInfo);
        }
        function Tl(e, t, n, r, a) {
          return ho(), vo(a), (t.flags |= 256), kl(e, t, n, r), t.child;
        }
        var Ml,
          Ll,
          jl,
          Nl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Dl(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Il(e, t, n) {
          var r,
            a = t.pendingProps,
            i = ui.current,
            l = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Aa(ui, 1 & i),
            null === e)
          )
            return (
              co(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  l
                    ? ((a = t.mode),
                      (l = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & a) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = u))
                        : (l = Dc(u, a, 0, null)),
                      (e = Nc(e, a, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Dl(n)),
                      (t.memoizedState = Nl),
                      e)
                    : zl(t, u))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fl(e, t, l, (r = fl(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = Dc(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = Nc(i, a, l, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Go(t, e.child, null, l),
                    (t.child.memoizedState = Dl(l)),
                    (t.memoizedState = Nl),
                    i);
              if (0 === (1 & t.mode)) return Fl(e, t, l, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Fl(e, t, l, (r = fl((i = Error(o(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (l & e.childLanes)), wl || u)) {
                if (null !== (r = Ou)) {
                  switch (l & -l) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Ro(e, a), nc(r, e, a, -1));
                }
                return vc(), Fl(e, t, l, (r = fl(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Cc.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (ro = ca(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((qa[Ka++] = Ya),
                    (qa[Ka++] = Ga),
                    (qa[Ka++] = Xa),
                    (Ya = e.id),
                    (Ga = e.overflow),
                    (Xa = t)),
                  ((t = zl(t, r.children)).flags |= 4096),
                  t);
            })(e, t, u, a, r, i, n);
          if (l) {
            (l = a.fallback), (u = t.mode), (r = (i = e.child).sibling);
            var c = { mode: "hidden", children: a.children };
            return (
              0 === (1 & u) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = c),
                  (t.deletions = null))
                : ((a = Lc(i, c)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (l = Lc(r, l))
                : ((l = Nc(l, u, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Dl(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (l.memoizedState = u),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Nl),
              a
            );
          }
          return (
            (e = (l = e.child).sibling),
            (a = Lc(l, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function zl(e, t) {
          return (
            ((t = Dc(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Fl(e, t, n, r) {
          return (
            null !== r && vo(r),
            Go(t, e.child, null, n),
            ((e = zl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ul(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Eo(e.return, t, n);
        }
        function $l(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Vl(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((kl(e, t, r.children, n), 0 !== (2 & (r = ui.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ul(e, n, t);
                else if (19 === e.tag) Ul(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Aa(ui, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === ci(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  $l(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === ci(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                $l(t, !0, n, null, o);
                break;
              case "together":
                $l(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Wl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Bl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Du |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Lc((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Lc(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Hl(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Ql(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function ql(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Ql(t), null;
            case 1:
            case 17:
              return Ma(t.type) && La(), Ql(t), null;
            case 3:
              return (
                (r = t.stateNode),
                oi(),
                _a(Oa),
                _a(Pa),
                fi(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (ic(oo), (oo = null)))),
                Ql(t),
                null
              );
            case 5:
              li(t);
              var a = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ll(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Ql(t), null;
                }
                if (((e = ri(ei.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Fr("cancel", r), Fr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Nr.length; a++) Fr(Nr[a], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Fr("error", r), Fr("load", r);
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      Y(r, i), Fr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Fr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Fr("invalid", r);
                  }
                  for (var u in (ge(n, i), (a = null), i))
                    if (i.hasOwnProperty(u)) {
                      var c = i[u];
                      "children" === u
                        ? "string" === typeof c
                          ? r.textContent !== c &&
                            (!0 !== i.suppressHydrationWarning &&
                              Zr(r.textContent, c, e),
                            (a = ["children", c]))
                          : "number" === typeof c &&
                            r.textContent !== "" + c &&
                            (!0 !== i.suppressHydrationWarning &&
                              Zr(r.textContent, c, e),
                            (a = ["children", "" + c]))
                        : l.hasOwnProperty(u) &&
                          null != c &&
                          "onScroll" === u &&
                          Fr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Q(r), J(r, i, !0);
                      break;
                    case "textarea":
                      Q(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Jr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Ml(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Fr("cancel", e), Fr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Fr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Nr.length; a++) Fr(Nr[a], e);
                        a = r;
                        break;
                      case "source":
                        Fr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Fr("error", e), Fr("load", e), (a = r);
                        break;
                      case "details":
                        Fr("toggle", e), (a = r);
                        break;
                      case "input":
                        Y(e, r), (a = X(e, r)), Fr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = I({}, r, { value: void 0 })),
                          Fr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Fr("invalid", e);
                    }
                    for (i in (ge(n, a), (c = a)))
                      if (c.hasOwnProperty(i)) {
                        var s = c[i];
                        "style" === i
                          ? me(e, s)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (s = s ? s.__html : void 0) && fe(e, s)
                          : "children" === i
                          ? "string" === typeof s
                            ? ("textarea" !== n || "" !== s) && de(e, s)
                            : "number" === typeof s && de(e, "" + s)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (l.hasOwnProperty(i)
                              ? null != s && "onScroll" === i && Fr("scroll", e)
                              : null != s && b(e, i, s, u));
                      }
                    switch (n) {
                      case "input":
                        Q(e), J(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + B(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Ql(t), null;
            case 6:
              if (e && null != t.stateNode) jl(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = ri(ni.current)), ri(ei.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (i = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return Ql(t), null;
            case 13:
              if (
                (_a(ui),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), ho(), (t.flags |= 98560), (i = !1);
                else if (((i = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(o(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(o(317));
                    i[da] = t;
                  } else
                    ho(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Ql(t), (i = !1);
                } else null !== oo && (ic(oo), (oo = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ui.current)
                        ? 0 === ju && (ju = 3)
                        : vc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Ql(t),
                  null);
            case 4:
              return (
                oi(), null === e && Vr(t.stateNode.containerInfo), Ql(t), null
              );
            case 10:
              return xo(t.type._context), Ql(t), null;
            case 19:
              if ((_a(ui), null === (i = t.memoizedState))) return Ql(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = i.rendering)))
                if (r) Hl(i, !1);
                else {
                  if (0 !== ju || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = ci(e))) {
                        for (
                          t.flags |= 128,
                            Hl(i, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (u = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = u.childLanes),
                                (i.lanes = u.lanes),
                                (i.child = u.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = u.memoizedProps),
                                (i.memoizedState = u.memoizedState),
                                (i.updateQueue = u.updateQueue),
                                (i.type = u.type),
                                (e = u.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Aa(ui, (1 & ui.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Ge() > Vu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Hl(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ci(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Hl(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !u.alternate &&
                        !ao)
                    )
                      return Ql(t), null;
                  } else
                    2 * Ge() - i.renderingStartTime > Vu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Hl(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = i.last) ? (n.sibling = u) : (t.child = u),
                    (i.last = u));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Ge()),
                  (t.sibling = null),
                  (n = ui.current),
                  Aa(ui, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Ql(t), null);
            case 22:
            case 23:
              return (
                fc(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Mu) &&
                    (Ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ql(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Kl(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Ma(t.type) && La(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                oi(),
                _a(Oa),
                _a(Pa),
                fi(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return li(t), null;
            case 13:
              if (
                (_a(ui),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return _a(ui), null;
            case 4:
              return oi(), null;
            case 10:
              return xo(t.type._context), null;
            case 22:
            case 23:
              return fc(), null;
            default:
              return null;
          }
        }
        (Ml = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ll = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ri(ei.current);
              var o,
                i = null;
              switch (n) {
                case "input":
                  (a = X(e, a)), (r = X(e, r)), (i = []);
                  break;
                case "select":
                  (a = I({}, a, { value: void 0 })),
                    (r = I({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (s in (ge(n, r), (n = null), a))
                if (!r.hasOwnProperty(s) && a.hasOwnProperty(s) && null != a[s])
                  if ("style" === s) {
                    var u = a[s];
                    for (o in u)
                      u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== s &&
                      "children" !== s &&
                      "suppressContentEditableWarning" !== s &&
                      "suppressHydrationWarning" !== s &&
                      "autoFocus" !== s &&
                      (l.hasOwnProperty(s)
                        ? i || (i = [])
                        : (i = i || []).push(s, null));
              for (s in r) {
                var c = r[s];
                if (
                  ((u = null != a ? a[s] : void 0),
                  r.hasOwnProperty(s) && c !== u && (null != c || null != u))
                )
                  if ("style" === s)
                    if (u) {
                      for (o in u)
                        !u.hasOwnProperty(o) ||
                          (c && c.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in c)
                        c.hasOwnProperty(o) &&
                          u[o] !== c[o] &&
                          (n || (n = {}), (n[o] = c[o]));
                    } else n || (i || (i = []), i.push(s, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === s
                      ? ((c = c ? c.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != c && u !== c && (i = i || []).push(s, c))
                      : "children" === s
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (i = i || []).push(s, "" + c)
                      : "suppressContentEditableWarning" !== s &&
                        "suppressHydrationWarning" !== s &&
                        (l.hasOwnProperty(s)
                          ? (null != c && "onScroll" === s && Fr("scroll", e),
                            i || u === c || (i = []))
                          : (i = i || []).push(s, c));
              }
              n && (i = i || []).push("style", n);
              var s = i;
              (t.updateQueue = s) && (t.flags |= 4);
            }
          }),
          (jl = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Xl = !1,
          Yl = !1,
          Gl = "function" === typeof WeakSet ? WeakSet : Set,
          Zl = null;
        function Jl(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Ec(e, t, r);
              }
            else n.current = null;
        }
        function eu(e, t, n) {
          try {
            n();
          } catch (r) {
            Ec(e, t, r);
          }
        }
        var tu = !1;
        function nu(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && eu(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function ru(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function au(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function ou(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), ou(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[va],
              delete t[ma],
              delete t[ya]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function iu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function lu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || iu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function uu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (uu(e, t, n), e = e.sibling; null !== e; )
              uu(e, t, n), (e = e.sibling);
        }
        function cu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e; )
              cu(e, t, n), (e = e.sibling);
        }
        var su = null,
          fu = !1;
        function du(e, t, n) {
          for (n = n.child; null !== n; ) pu(e, t, n), (n = n.sibling);
        }
        function pu(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Yl || Jl(n, t);
            case 6:
              var r = su,
                a = fu;
              (su = null),
                du(e, t, n),
                (fu = a),
                null !== (su = r) &&
                  (fu
                    ? ((e = su),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : su.removeChild(n.stateNode));
              break;
            case 18:
              null !== su &&
                (fu
                  ? ((e = su),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    Vt(e))
                  : ua(su, n.stateNode));
              break;
            case 4:
              (r = su),
                (a = fu),
                (su = n.stateNode.containerInfo),
                (fu = !0),
                du(e, t, n),
                (su = r),
                (fu = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Yl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    i = o.destroy;
                  (o = o.tag),
                    void 0 !== i &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      eu(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              du(e, t, n);
              break;
            case 1:
              if (
                !Yl &&
                (Jl(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Ec(n, t, l);
                }
              du(e, t, n);
              break;
            case 21:
              du(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Yl = (r = Yl) || null !== n.memoizedState),
                  du(e, t, n),
                  (Yl = r))
                : du(e, t, n);
              break;
            default:
              du(e, t, n);
          }
        }
        function hu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Gl()),
              t.forEach(function (t) {
                var r = Pc.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function vu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  l = t,
                  u = l;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (su = u.stateNode), (fu = !1);
                      break e;
                    case 3:
                    case 4:
                      (su = u.stateNode.containerInfo), (fu = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === su) throw Error(o(160));
                pu(i, l, a), (su = null), (fu = !1);
                var c = a.alternate;
                null !== c && (c.return = null), (a.return = null);
              } catch (s) {
                Ec(a, t, s);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) mu(t, e), (t = t.sibling);
        }
        function mu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vu(t, e), yu(e), 4 & r)) {
                try {
                  nu(3, e, e.return), ru(3, e);
                } catch (m) {
                  Ec(e, e.return, m);
                }
                try {
                  nu(5, e, e.return);
                } catch (m) {
                  Ec(e, e.return, m);
                }
              }
              break;
            case 1:
              vu(t, e), yu(e), 512 & r && null !== n && Jl(n, n.return);
              break;
            case 5:
              if (
                (vu(t, e),
                yu(e),
                512 & r && null !== n && Jl(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (m) {
                  Ec(e, e.return, m);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  u = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    "input" === u &&
                      "radio" === i.type &&
                      null != i.name &&
                      G(a, i),
                      be(u, l);
                    var s = be(u, i);
                    for (l = 0; l < c.length; l += 2) {
                      var f = c[l],
                        d = c[l + 1];
                      "style" === f
                        ? me(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, s);
                    }
                    switch (u) {
                      case "input":
                        Z(a, i);
                        break;
                      case "textarea":
                        oe(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (m) {
                    Ec(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((vu(t, e), yu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (m) {
                  Ec(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (vu(t, e),
                yu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Vt(t.containerInfo);
                } catch (m) {
                  Ec(e, e.return, m);
                }
              break;
            case 4:
            default:
              vu(t, e), yu(e);
              break;
            case 13:
              vu(t, e),
                yu(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    ($u = Ge())),
                4 & r && hu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Yl = (s = Yl) || f), vu(t, e), (Yl = s))
                  : vu(t, e),
                yu(e),
                8192 & r)
              ) {
                if (
                  ((s = null !== e.memoizedState),
                  (e.stateNode.isHidden = s) && !f && 0 !== (1 & e.mode))
                )
                  for (Zl = e, f = e.child; null !== f; ) {
                    for (d = Zl = f; null !== Zl; ) {
                      switch (((h = (p = Zl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nu(4, p, p.return);
                          break;
                        case 1:
                          Jl(p, p.return);
                          var v = p.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (m) {
                              Ec(r, n, m);
                            }
                          }
                          break;
                        case 5:
                          Jl(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ku(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zl = h)) : ku(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          s
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((u = d.stateNode),
                              (l =
                                void 0 !== (c = d.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (u.style.display = ve("display", l)));
                      } catch (m) {
                        Ec(e, e.return, m);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = s ? "" : d.memoizedProps;
                      } catch (m) {
                        Ec(e, e.return, m);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              vu(t, e), yu(e), 4 & r && hu(e);
            case 21:
          }
        }
        function yu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (iu(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    cu(e, lu(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  uu(e, lu(e), i);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (l) {
              Ec(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function gu(e, t, n) {
          (Zl = e), bu(e, t, n);
        }
        function bu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zl; ) {
            var a = Zl,
              o = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Xl;
              if (!i) {
                var l = a.alternate,
                  u = (null !== l && null !== l.memoizedState) || Yl;
                l = Xl;
                var c = Yl;
                if (((Xl = i), (Yl = u) && !c))
                  for (Zl = a; null !== Zl; )
                    (u = (i = Zl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? Su(a)
                        : null !== u
                        ? ((u.return = i), (Zl = u))
                        : Su(a);
                for (; null !== o; ) (Zl = o), bu(o, t, n), (o = o.sibling);
                (Zl = a), (Xl = l), (Yl = c);
              }
              wu(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Zl = o))
                : wu(e);
          }
        }
        function wu(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yl || ru(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Yl)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : yo(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Fo(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Fo(t, l, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var s = t.alternate;
                        if (null !== s) {
                          var f = s.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Vt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Yl || (512 & t.flags && au(t));
              } catch (p) {
                Ec(t, t.return, p);
              }
            }
            if (t === e) {
              Zl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function ku(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (t === e) {
              Zl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function Su(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ru(4, t);
                  } catch (u) {
                    Ec(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      Ec(t, a, u);
                    }
                  }
                  var o = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    Ec(t, o, u);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    Ec(t, i, u);
                  }
              }
            } catch (u) {
              Ec(t, t.return, u);
            }
            if (t === e) {
              Zl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Zl = l);
              break;
            }
            Zl = t.return;
          }
        }
        var xu,
          Eu = Math.ceil,
          _u = w.ReactCurrentDispatcher,
          Au = w.ReactCurrentOwner,
          Cu = w.ReactCurrentBatchConfig,
          Pu = 0,
          Ou = null,
          Ru = null,
          Tu = 0,
          Mu = 0,
          Lu = Ea(0),
          ju = 0,
          Nu = null,
          Du = 0,
          Iu = 0,
          zu = 0,
          Fu = null,
          Uu = null,
          $u = 0,
          Vu = 1 / 0,
          Wu = null,
          Bu = !1,
          Hu = null,
          Qu = null,
          qu = !1,
          Ku = null,
          Xu = 0,
          Yu = 0,
          Gu = null,
          Zu = -1,
          Ju = 0;
        function ec() {
          return 0 !== (6 & Pu) ? Ge() : -1 !== Zu ? Zu : (Zu = Ge());
        }
        function tc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Pu) && 0 !== Tu
            ? Tu & -Tu
            : null !== mo.transition
            ? (0 === Ju && (Ju = vt()), Ju)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function nc(e, t, n, r) {
          if (50 < Yu) throw ((Yu = 0), (Gu = null), Error(o(185)));
          yt(e, n, r),
            (0 !== (2 & Pu) && e === Ou) ||
              (e === Ou && (0 === (2 & Pu) && (Iu |= n), 4 === ju && lc(e, Tu)),
              rc(e, r),
              1 === n &&
                0 === Pu &&
                0 === (1 & t.mode) &&
                ((Vu = Ge() + 500), Fa && Va()));
        }
        function rc(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var i = 31 - it(o),
                l = 1 << i,
                u = a[i];
              -1 === u
                ? (0 !== (l & n) && 0 === (l & r)) || (a[i] = pt(l, t))
                : u <= t && (e.expiredLanes |= l),
                (o &= ~l);
            }
          })(e, t);
          var r = dt(e, e === Ou ? Tu : 0);
          if (0 === r)
            null !== n && Ke(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fa = !0), $a(e);
                  })(uc.bind(null, e))
                : $a(uc.bind(null, e)),
                ia(function () {
                  0 === (6 & Pu) && Va();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Oc(n, ac.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ac(e, t) {
          if (((Zu = -1), (Ju = 0), 0 !== (6 & Pu))) throw Error(o(327));
          var n = e.callbackNode;
          if (Sc() && e.callbackNode !== n) return null;
          var r = dt(e, e === Ou ? Tu : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = mc(e, r);
          else {
            t = r;
            var a = Pu;
            Pu |= 2;
            var i = hc();
            for (
              (Ou === e && Tu === t) ||
              ((Wu = null), (Vu = Ge() + 500), dc(e, t));
              ;

            )
              try {
                gc();
                break;
              } catch (u) {
                pc(e, u);
              }
            So(),
              (_u.current = i),
              (Pu = a),
              null !== Ru ? (t = 0) : ((Ou = null), (Tu = 0), (t = ju));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = oc(e, a))),
              1 === t)
            )
              throw ((n = Nu), dc(e, 0), lc(e, r), rc(e, Ge()), n);
            if (6 === t) lc(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!lr(o(), a)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = mc(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = oc(e, i))),
                  1 === t))
              )
                throw ((n = Nu), dc(e, 0), lc(e, r), rc(e, Ge()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  kc(e, Uu, Wu);
                  break;
                case 3:
                  if (
                    (lc(e, r),
                    (130023424 & r) === r && 10 < (t = $u + 500 - Ge()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ec(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(kc.bind(null, e, Uu, Wu), t);
                    break;
                  }
                  kc(e, Uu, Wu);
                  break;
                case 4:
                  if ((lc(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > a && (a = l), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ge() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Eu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(kc.bind(null, e, Uu, Wu), r);
                    break;
                  }
                  kc(e, Uu, Wu);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return rc(e, Ge()), e.callbackNode === n ? ac.bind(null, e) : null;
        }
        function oc(e, t) {
          var n = Fu;
          return (
            e.current.memoizedState.isDehydrated && (dc(e, t).flags |= 256),
            2 !== (e = mc(e, t)) && ((t = Uu), (Uu = n), null !== t && ic(t)),
            e
          );
        }
        function ic(e) {
          null === Uu ? (Uu = e) : Uu.push.apply(Uu, e);
        }
        function lc(e, t) {
          for (
            t &= ~zu,
              t &= ~Iu,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uc(e) {
          if (0 !== (6 & Pu)) throw Error(o(327));
          Sc();
          var t = dt(e, 0);
          if (0 === (1 & t)) return rc(e, Ge()), null;
          var n = mc(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = oc(e, r)));
          }
          if (1 === n) throw ((n = Nu), dc(e, 0), lc(e, t), rc(e, Ge()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            kc(e, Uu, Wu),
            rc(e, Ge()),
            null
          );
        }
        function cc(e, t) {
          var n = Pu;
          Pu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Pu = n) && ((Vu = Ge() + 500), Fa && Va());
          }
        }
        function sc(e) {
          null !== Ku && 0 === Ku.tag && 0 === (6 & Pu) && Sc();
          var t = Pu;
          Pu |= 1;
          var n = Cu.transition,
            r = bt;
          try {
            if (((Cu.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Cu.transition = n), 0 === (6 & (Pu = t)) && Va();
          }
        }
        function fc() {
          (Mu = Lu.current), _a(Lu);
        }
        function dc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ru))
            for (n = Ru.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    La();
                  break;
                case 3:
                  oi(), _a(Oa), _a(Pa), fi();
                  break;
                case 5:
                  li(r);
                  break;
                case 4:
                  oi();
                  break;
                case 13:
                case 19:
                  _a(ui);
                  break;
                case 10:
                  xo(r.type._context);
                  break;
                case 22:
                case 23:
                  fc();
              }
              n = n.return;
            }
          if (
            ((Ou = e),
            (Ru = e = Lc(e.current, null)),
            (Tu = Mu = t),
            (ju = 0),
            (Nu = null),
            (zu = Iu = Du = 0),
            (Uu = Fu = null),
            null !== Co)
          ) {
            for (t = 0; t < Co.length; t++)
              if (null !== (r = (n = Co[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var i = o.next;
                  (o.next = a), (r.next = i);
                }
                n.pending = r;
              }
            Co = null;
          }
          return e;
        }
        function pc(e, t) {
          for (;;) {
            var n = Ru;
            try {
              if ((So(), (di.current = il), gi)) {
                for (var r = vi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                gi = !1;
              }
              if (
                ((hi = 0),
                (yi = mi = vi = null),
                (bi = !1),
                (wi = 0),
                (Au.current = null),
                null === n || null === n.return)
              ) {
                (ju = 1), (Nu = t), (Ru = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  u = n,
                  c = t;
                if (
                  ((t = Tu),
                  (u.flags |= 32768),
                  null !== c &&
                    "object" === typeof c &&
                    "function" === typeof c.then)
                ) {
                  var s = c,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = yl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      gl(h, l, u, 0, t),
                      1 & h.mode && ml(i, s, t),
                      (c = s);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var m = new Set();
                      m.add(c), (t.updateQueue = m);
                    } else v.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ml(i, s, t), vc();
                    break e;
                  }
                  c = Error(o(426));
                } else if (ao && 1 & u.mode) {
                  var y = yl(l);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      gl(y, l, u, 0, t),
                      vo(sl(c, u));
                    break e;
                  }
                }
                (i = c = sl(c, u)),
                  4 !== ju && (ju = 2),
                  null === Fu ? (Fu = [i]) : Fu.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Io(i, hl(0, c, t));
                      break e;
                    case 1:
                      u = c;
                      var g = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof g.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Qu || !Qu.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Io(i, vl(i, u, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              wc(n);
            } catch (w) {
              (t = w), Ru === n && null !== n && (Ru = n = n.return);
              continue;
            }
            break;
          }
        }
        function hc() {
          var e = _u.current;
          return (_u.current = il), null === e ? il : e;
        }
        function vc() {
          (0 !== ju && 3 !== ju && 2 !== ju) || (ju = 4),
            null === Ou ||
              (0 === (268435455 & Du) && 0 === (268435455 & Iu)) ||
              lc(Ou, Tu);
        }
        function mc(e, t) {
          var n = Pu;
          Pu |= 2;
          var r = hc();
          for ((Ou === e && Tu === t) || ((Wu = null), dc(e, t)); ; )
            try {
              yc();
              break;
            } catch (a) {
              pc(e, a);
            }
          if ((So(), (Pu = n), (_u.current = r), null !== Ru))
            throw Error(o(261));
          return (Ou = null), (Tu = 0), ju;
        }
        function yc() {
          for (; null !== Ru; ) bc(Ru);
        }
        function gc() {
          for (; null !== Ru && !Xe(); ) bc(Ru);
        }
        function bc(e) {
          var t = xu(e.alternate, e, Mu);
          (e.memoizedProps = e.pendingProps),
            null === t ? wc(e) : (Ru = t),
            (Au.current = null);
        }
        function wc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = ql(n, t, Mu))) return void (Ru = n);
            } else {
              if (null !== (n = Kl(n, t)))
                return (n.flags &= 32767), void (Ru = n);
              if (null === e) return (ju = 6), void (Ru = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ru = t);
            Ru = t = e;
          } while (null !== t);
          0 === ju && (ju = 5);
        }
        function kc(e, t, n) {
          var r = bt,
            a = Cu.transition;
          try {
            (Cu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Sc();
                } while (null !== Ku);
                if (0 !== (6 & Pu)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, i),
                  e === Ou && ((Ru = Ou = null), (Tu = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qu ||
                    ((qu = !0),
                    Oc(tt, function () {
                      return Sc(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Cu.transition), (Cu.transition = null);
                  var l = bt;
                  bt = 1;
                  var u = Pu;
                  (Pu |= 4),
                    (Au.current = null),
                    (function (e, t) {
                      if (((ea = Bt), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (k) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                u = -1,
                                c = -1,
                                s = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (u = l + a),
                                    d !== i ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (c = l + r),
                                    3 === d.nodeType &&
                                      (l += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++s === a && (u = l),
                                    p === i && ++f === r && (c = l),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === u || -1 === c
                                  ? null
                                  : { start: u, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Bt = !1,
                          Zl = t;
                        null !== Zl;

                      )
                        if (
                          ((e = (t = Zl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zl = e);
                        else
                          for (; null !== Zl; ) {
                            t = Zl;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var m = v.memoizedProps,
                                        y = v.memoizedState,
                                        g = t.stateNode,
                                        b = g.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : yo(t.type, m),
                                          y
                                        );
                                      g.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (k) {
                              Ec(t, t.return, k);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zl = e);
                              break;
                            }
                            Zl = t.return;
                          }
                      (v = tu), (tu = !1);
                    })(e, n),
                    mu(n, e),
                    hr(ta),
                    (Bt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    gu(n, e, a),
                    Ye(),
                    (Pu = u),
                    (bt = l),
                    (Cu.transition = i);
                } else e.current = n;
                if (
                  (qu && ((qu = !1), (Ku = e), (Xu = a)),
                  0 === (i = e.pendingLanes) && (Qu = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  rc(e, Ge()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, {
                      componentStack: a.stack,
                      digest: a.digest,
                    });
                if (Bu) throw ((Bu = !1), (e = Hu), (Hu = null), e);
                0 !== (1 & Xu) && 0 !== e.tag && Sc(),
                  0 !== (1 & (i = e.pendingLanes))
                    ? e === Gu
                      ? Yu++
                      : ((Yu = 0), (Gu = e))
                    : (Yu = 0),
                  Va();
              })(e, t, n, r);
          } finally {
            (Cu.transition = a), (bt = r);
          }
          return null;
        }
        function Sc() {
          if (null !== Ku) {
            var e = wt(Xu),
              t = Cu.transition,
              n = bt;
            try {
              if (((Cu.transition = null), (bt = 16 > e ? 16 : e), null === Ku))
                var r = !1;
              else {
                if (((e = Ku), (Ku = null), (Xu = 0), 0 !== (6 & Pu)))
                  throw Error(o(331));
                var a = Pu;
                for (Pu |= 4, Zl = e.current; null !== Zl; ) {
                  var i = Zl,
                    l = i.child;
                  if (0 !== (16 & Zl.flags)) {
                    var u = i.deletions;
                    if (null !== u) {
                      for (var c = 0; c < u.length; c++) {
                        var s = u[c];
                        for (Zl = s; null !== Zl; ) {
                          var f = Zl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nu(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Zl = d);
                          else
                            for (; null !== Zl; ) {
                              var p = (f = Zl).sibling,
                                h = f.return;
                              if ((ou(f), f === s)) {
                                Zl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zl = p);
                                break;
                              }
                              Zl = h;
                            }
                        }
                      }
                      var v = i.alternate;
                      if (null !== v) {
                        var m = v.child;
                        if (null !== m) {
                          v.child = null;
                          do {
                            var y = m.sibling;
                            (m.sibling = null), (m = y);
                          } while (null !== m);
                        }
                      }
                      Zl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l)
                    (l.return = i), (Zl = l);
                  else
                    e: for (; null !== Zl; ) {
                      if (0 !== (2048 & (i = Zl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nu(9, i, i.return);
                        }
                      var g = i.sibling;
                      if (null !== g) {
                        (g.return = i.return), (Zl = g);
                        break e;
                      }
                      Zl = i.return;
                    }
                }
                var b = e.current;
                for (Zl = b; null !== Zl; ) {
                  var w = (l = Zl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== w)
                    (w.return = l), (Zl = w);
                  else
                    e: for (l = b; null !== Zl; ) {
                      if (0 !== (2048 & (u = Zl).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(9, u);
                          }
                        } catch (S) {
                          Ec(u, u.return, S);
                        }
                      if (u === l) {
                        Zl = null;
                        break e;
                      }
                      var k = u.sibling;
                      if (null !== k) {
                        (k.return = u.return), (Zl = k);
                        break e;
                      }
                      Zl = u.return;
                    }
                }
                if (
                  ((Pu = a),
                  Va(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (S) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Cu.transition = t);
            }
          }
          return !1;
        }
        function xc(e, t, n) {
          (e = No(e, (t = hl(0, (t = sl(n, t)), 1)), 1)),
            (t = ec()),
            null !== e && (yt(e, 1, t), rc(e, t));
        }
        function Ec(e, t, n) {
          if (3 === e.tag) xc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                xc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Qu || !Qu.has(r)))
                ) {
                  (t = No(t, (e = vl(t, (e = sl(n, e)), 1)), 1)),
                    (e = ec()),
                    null !== t && (yt(t, 1, e), rc(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function _c(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ec()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ou === e &&
              (Tu & n) === n &&
              (4 === ju ||
              (3 === ju && (130023424 & Tu) === Tu && 500 > Ge() - $u)
                ? dc(e, 0)
                : (zu |= n)),
            rc(e, t);
        }
        function Ac(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = st), 0 === (130023424 & (st <<= 1)) && (st = 4194304)));
          var n = ec();
          null !== (e = Ro(e, t)) && (yt(e, t, n), rc(e, n));
        }
        function Cc(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Ac(e, n);
        }
        function Pc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Ac(e, n);
        }
        function Oc(e, t) {
          return qe(e, t);
        }
        function Rc(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Tc(e, t, n, r) {
          return new Rc(e, t, n, r);
        }
        function Mc(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Lc(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Tc(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function jc(e, t, n, r, a, i) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Mc(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case x:
                return Nc(n.children, a, i, t);
              case E:
                (l = 8), (a |= 8);
                break;
              case _:
                return (
                  ((e = Tc(12, n, t, 2 | a)).elementType = _), (e.lanes = i), e
                );
              case O:
                return (
                  ((e = Tc(13, n, t, a)).elementType = O), (e.lanes = i), e
                );
              case R:
                return (
                  ((e = Tc(19, n, t, a)).elementType = R), (e.lanes = i), e
                );
              case L:
                return Dc(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case A:
                      l = 10;
                      break e;
                    case C:
                      l = 9;
                      break e;
                    case P:
                      l = 11;
                      break e;
                    case T:
                      l = 14;
                      break e;
                    case M:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Tc(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Nc(e, t, n, r) {
          return ((e = Tc(7, e, r, t)).lanes = n), e;
        }
        function Dc(e, t, n, r) {
          return (
            ((e = Tc(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Ic(e, t, n) {
          return ((e = Tc(6, e, null, t)).lanes = n), e;
        }
        function zc(e, t, n) {
          return (
            ((t = Tc(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Fc(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Uc(e, t, n, r, a, o, i, l, u) {
          return (
            (e = new Fc(e, t, n, l, u)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Tc(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Mo(o),
            e
          );
        }
        function $c(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: S,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Vc(e) {
          if (!e) return Ca;
          e: {
            if (Ve((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ma(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ma(n)) return Na(e, n, t);
          }
          return t;
        }
        function Wc(e, t, n, r, a, o, i, l, u) {
          return (
            ((e = Uc(n, r, !0, e, 0, o, 0, l, u)).context = Vc(null)),
            (n = e.current),
            ((o = jo((r = ec()), (a = tc(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            No(n, o, a),
            (e.current.lanes = a),
            yt(e, a, r),
            rc(e, r),
            e
          );
        }
        function Bc(e, t, n, r) {
          var a = t.current,
            o = ec(),
            i = tc(a);
          return (
            (n = Vc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = jo(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = No(a, t, i)) && (nc(e, a, i, o), Do(e, a, i)),
            i
          );
        }
        function Hc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qc(e, t) {
          Qc(e, t), (e = e.alternate) && Qc(e, t);
        }
        xu = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Oa.current) wl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Rl(t), ho();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        Ma(t.type) && Da(t);
                        break;
                      case 4:
                        ai(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Aa(go, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Aa(ui, 1 & ui.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Il(e, t, n)
                            : (Aa(ui, 1 & ui.current),
                              null !== (e = Bl(e, t, n)) ? e.sibling : null);
                        Aa(ui, 1 & ui.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Vl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Aa(ui, ui.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), _l(e, t, n);
                    }
                    return Bl(e, t, n);
                  })(e, t, n)
                );
              wl = 0 !== (131072 & e.flags);
            }
          else (wl = !1), ao && 0 !== (1048576 & t.flags) && Ja(t, Qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Wl(e, t), (e = t.pendingProps);
              var a = Ta(t, Pa.current);
              _o(t, n), (a = Ei(null, t, r, e, a, n));
              var i = _i();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ma(r) ? ((i = !0), Da(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Mo(t),
                    (a.updater = Vo),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Qo(t, r, e, n),
                    (t = Ol(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    ao && i && eo(t),
                    kl(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Wl(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Mc(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === T) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = yo(r, e)),
                  a)
                ) {
                  case 0:
                    t = Cl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Pl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = Sl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = xl(null, t, r, yo(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Cl(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Pl(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 3:
              e: {
                if ((Rl(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Lo(e, t),
                  zo(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Tl(e, t, r, n, (a = sl(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Tl(e, t, r, n, (a = sl(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = ca(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Zo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === a)) {
                    t = Bl(e, t, n);
                    break e;
                  }
                  kl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && co(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = a.children),
                na(r, a)
                  ? (l = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                Al(e, t),
                kl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && co(t), null;
            case 13:
              return Il(e, t, n);
            case 4:
              return (
                ai(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Go(t, null, r, n)) : kl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Sl(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 7:
              return kl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return kl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = a.value),
                  Aa(go, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === a.children && !Oa.current) {
                      t = Bl(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var u = i.dependencies;
                      if (null !== u) {
                        l = i.child;
                        for (var c = u.firstContext; null !== c; ) {
                          if (c.context === r) {
                            if (1 === i.tag) {
                              (c = jo(-1, n & -n)).tag = 2;
                              var s = i.updateQueue;
                              if (null !== s) {
                                var f = (s = s.shared).pending;
                                null === f
                                  ? (c.next = c)
                                  : ((c.next = f.next), (f.next = c)),
                                  (s.pending = c);
                              }
                            }
                            (i.lanes |= n),
                              null !== (c = i.alternate) && (c.lanes |= n),
                              Eo(i.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === i.tag)
                        l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(o(341));
                        (l.lanes |= n),
                          null !== (u = l.alternate) && (u.lanes |= n),
                          Eo(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                kl(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                _o(t, n),
                (r = r((a = Ao(a)))),
                (t.flags |= 1),
                kl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = yo((r = t.type), t.pendingProps)),
                xl(e, t, r, (a = yo(r.type, a)), n)
              );
            case 15:
              return El(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : yo(r, a)),
                Wl(e, t),
                (t.tag = 1),
                Ma(r) ? ((e = !0), Da(t)) : (e = !1),
                _o(t, n),
                Bo(t, r, a),
                Qo(t, r, a, n),
                Ol(null, t, r, !0, e, n)
              );
            case 19:
              return Vl(e, t, n);
            case 22:
              return _l(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Kc =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Xc(e) {
          this._internalRoot = e;
        }
        function Yc(e) {
          this._internalRoot = e;
        }
        function Gc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Jc() {}
        function es(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o;
            if ("function" === typeof a) {
              var l = a;
              a = function () {
                var e = Hc(i);
                l.call(e);
              };
            }
            Bc(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Hc(i);
                    o.call(e);
                  };
                }
                var i = Wc(t, r, e, 0, null, !1, 0, "", Jc);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  Vr(8 === e.nodeType ? e.parentNode : e),
                  sc(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = Hc(u);
                  l.call(e);
                };
              }
              var u = Uc(e, 0, !1, null, 0, !1, 0, "", Jc);
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                Vr(8 === e.nodeType ? e.parentNode : e),
                sc(function () {
                  Bc(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return Hc(i);
        }
        (Yc.prototype.render = Xc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Bc(e, t, null, null);
          }),
          (Yc.prototype.unmount = Xc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                sc(function () {
                  Bc(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Yc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Lt.length && 0 !== t && t < Lt[n].priority;
                n++
              );
              Lt.splice(n, 0, e), 0 === n && It(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n),
                    rc(t, Ge()),
                    0 === (6 & Pu) && ((Vu = Ge() + 500), Va()));
                }
                break;
              case 13:
                sc(function () {
                  var t = Ro(e, 1);
                  if (null !== t) {
                    var n = ec();
                    nc(t, e, 1, n);
                  }
                }),
                  qc(e, 1);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = Ro(e, 134217728);
              if (null !== t) nc(t, e, 134217728, ec());
              qc(e, 134217728);
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = tc(e),
                n = Ro(e, t);
              if (null !== n) nc(n, e, t, ec());
              qc(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (_t = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (Se = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = ka(r);
                      if (!a) throw Error(o(90));
                      q(r), Z(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = cc),
          (Oe = sc);
        var ts = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, ka, Ae, Ce, cc],
          },
          ns = {
            findFiberByHostInstance: ga,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rs = {
            bundleType: ns.bundleType,
            version: ns.version,
            rendererPackageName: ns.rendererPackageName,
            rendererConfig: ns.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = He(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              ns.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var as = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!as.isDisabled && as.supportsFiber)
            try {
              (at = as.inject(rs)), (ot = as);
            } catch (se) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ts),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Gc(t)) throw Error(o(200));
            return $c(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Gc(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = Kc;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Uc(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Vr(8 === e.nodeType ? e.parentNode : e),
              new Xc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = He(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return sc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zc(t)) throw Error(o(200));
            return es(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gc(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              l = Kc;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Wc(t, null, e, 1, null != n ? n : null, a, 0, i, l)),
              (e[ha] = t.current),
              Vr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Yc(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zc(t)) throw Error(o(200));
            return es(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zc(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (sc(function () {
                es(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zc(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return es(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      459: function (e, t) {
        "use strict";
        var n,
          r = Symbol.for("react.element"),
          a = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          u = Symbol.for("react.provider"),
          c = Symbol.for("react.context"),
          s = Symbol.for("react.server_context"),
          f = Symbol.for("react.forward_ref"),
          d = Symbol.for("react.suspense"),
          p = Symbol.for("react.suspense_list"),
          h = Symbol.for("react.memo"),
          v = Symbol.for("react.lazy"),
          m = Symbol.for("react.offscreen");
        function y(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case o:
                  case l:
                  case i:
                  case d:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case s:
                      case c:
                      case f:
                      case v:
                      case h:
                      case u:
                        return e;
                      default:
                        return t;
                    }
                }
              case a:
                return t;
            }
          }
        }
        n = Symbol.for("react.module.reference");
      },
      900: function (e, t, n) {
        "use strict";
        n(459);
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var r,
            o = {},
            c = null,
            s = null;
          for (r in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (s = t.ref),
          t))
            i.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: c,
            ref: s,
            props: o,
            _owner: l.current,
          };
        }
        (t.jsx = c), (t.jsxs = c);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          s = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          m = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function g() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = y.prototype);
        var w = (b.prototype = new g());
        (w.constructor = b), v(w, y.prototype), (w.isPureReactComponent = !0);
        var k = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          x = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function _(e, t, r) {
          var a,
            o = {},
            i = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              S.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) o.children = r;
          else if (1 < u) {
            for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
            o.children = c;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === o[a] && (o[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: o,
            _owner: x.current,
          };
        }
        function A(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function O(e, t, a, o, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (l) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (i = i((u = e))),
              (e = "" === o ? "." + P(u, 0) : o),
              k(i)
                ? ((a = ""),
                  null != e && (a = e.replace(C, "$&/") + "/"),
                  O(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (A(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (u && u.key === i.key)
                          ? ""
                          : ("" + i.key).replace(C, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((u = 0), (o = "" === o ? "." : o + ":"), k(e)))
            for (var c = 0; c < e.length; c++) {
              var s = o + P((l = e[c]), c);
              u += O(l, t, a, s, i);
            }
          else if (
            ((s = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof s)
          )
            for (e = s.call(e), c = 0; !(l = e.next()).done; )
              u += O((l = l.value), t, a, (s = o + P(l, c++)), i);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function R(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            O(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function T(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var M = { current: null },
          L = { transition: null },
          j = {
            ReactCurrentDispatcher: M,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: x,
          };
        (t.Children = {
          map: R,
          forEach: function (e, t, n) {
            R(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              R(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              R(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!A(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = s),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = v({}, e.props),
              o = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = x.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (c in t)
                S.call(t, c) &&
                  !E.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = r;
            else if (1 < c) {
              u = Array(c);
              for (var s = 0; s < c; s++) u[s] = arguments[s + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: i,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = _),
          (t.createFactory = function (e) {
            var t = _.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = A),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: T,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return M.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return M.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return M.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return M.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return M.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return M.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return M.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return M.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return M.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return M.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return M.current.useRef(e);
          }),
          (t.useState = function (e) {
            return M.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return M.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return M.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                u = e[l],
                c = l + 1,
                s = e[c];
              if (0 > o(u, n))
                c < a && 0 > o(s, u)
                  ? ((e[r] = s), (e[c] = n), (r = c))
                  : ((e[r] = u), (e[l] = n), (r = l));
              else {
                if (!(c < a && 0 > o(s, n))) break e;
                (e[r] = s), (e[c] = n), (r = c);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            u = l.now();
          t.unstable_now = function () {
            return l.now() - u;
          };
        }
        var c = [],
          s = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          v = !1,
          m = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          g = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(s); null !== t; ) {
            if (null === t.callback) a(s);
            else {
              if (!(t.startTime <= e)) break;
              a(s), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = r(s);
          }
        }
        function k(e) {
          if (((m = !1), w(e), !v))
            if (null !== r(c)) (v = !0), L(S);
            else {
              var t = r(s);
              null !== t && j(k, t.startTime - e);
            }
        }
        function S(e, n) {
          (v = !1), m && ((m = !1), g(A), (A = -1)), (h = !0);
          var o = p;
          try {
            for (
              w(n), d = r(c);
              null !== d && (!(d.expirationTime > n) || (e && !O()));

            ) {
              var i = d.callback;
              if ("function" === typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var l = i(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (d.callback = l)
                    : d === r(c) && a(c),
                  w(n);
              } else a(c);
              d = r(c);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(s);
              null !== f && j(k, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = o), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var x,
          E = !1,
          _ = null,
          A = -1,
          C = 5,
          P = -1;
        function O() {
          return !(t.unstable_now() - P < C);
        }
        function R() {
          if (null !== _) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = _(!0, e);
            } finally {
              n ? x() : ((E = !1), (_ = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          x = function () {
            b(R);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var T = new MessageChannel(),
            M = T.port2;
          (T.port1.onmessage = R),
            (x = function () {
              M.postMessage(null);
            });
        } else
          x = function () {
            y(R, 0);
          };
        function L(e) {
          (_ = e), E || ((E = !0), x());
        }
        function j(e, n) {
          A = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || h || ((v = !0), L(S));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(c);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i)
                : (o = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (l = o + l),
                sortIndex: -1,
              }),
              o > i
                ? ((e.sortIndex = o),
                  n(s, e),
                  null === r(c) &&
                    e === r(s) &&
                    (m ? (g(A), (A = -1)) : (m = !0), j(k, o - i)))
                : ((e.sortIndex = l), n(c, e), v || h || ((v = !0), L(S))),
              e
            );
          }),
          (t.unstable_shouldYield = O),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
      561: function (e, t, n) {
        "use strict";
        var r = n(791);
        var a =
            "function" === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e === 1 / t)) ||
                    (e !== e && t !== t)
                  );
                },
          o = r.useState,
          i = r.useEffect,
          l = r.useLayoutEffect,
          u = r.useDebugValue;
        function c(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !a(e, n);
          } catch (r) {
            return !0;
          }
        }
        var s =
          "undefined" === typeof window ||
          "undefined" === typeof window.document ||
          "undefined" === typeof window.document.createElement
            ? function (e, t) {
                return t();
              }
            : function (e, t) {
                var n = t(),
                  r = o({ inst: { value: n, getSnapshot: t } }),
                  a = r[0].inst,
                  s = r[1];
                return (
                  l(
                    function () {
                      (a.value = n),
                        (a.getSnapshot = t),
                        c(a) && s({ inst: a });
                    },
                    [e, n, t]
                  ),
                  i(
                    function () {
                      return (
                        c(a) && s({ inst: a }),
                        e(function () {
                          c(a) && s({ inst: a });
                        })
                      );
                    },
                    [e]
                  ),
                  u(n),
                  n
                );
              };
        t.useSyncExternalStore =
          void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : s;
      },
      595: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(248);
        var o =
            "function" === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e === 1 / t)) ||
                    (e !== e && t !== t)
                  );
                },
          i = a.useSyncExternalStore,
          l = r.useRef,
          u = r.useEffect,
          c = r.useMemo,
          s = r.useDebugValue;
        t.useSyncExternalStoreWithSelector = function (e, t, n, r, a) {
          var f = l(null);
          if (null === f.current) {
            var d = { hasValue: !1, value: null };
            f.current = d;
          } else d = f.current;
          f = c(
            function () {
              function e(e) {
                if (!u) {
                  if (
                    ((u = !0), (i = e), (e = r(e)), void 0 !== a && d.hasValue)
                  ) {
                    var t = d.value;
                    if (a(t, e)) return (l = t);
                  }
                  return (l = e);
                }
                if (((t = l), o(i, e))) return t;
                var n = r(e);
                return void 0 !== a && a(t, n) ? t : ((i = e), (l = n));
              }
              var i,
                l,
                u = !1,
                c = void 0 === n ? null : n;
              return [
                function () {
                  return e(t());
                },
                null === c
                  ? void 0
                  : function () {
                      return e(c());
                    },
              ];
            },
            [t, n, r, a]
          );
          var p = i(e, f[0], f[1]);
          return (
            u(
              function () {
                (d.hasValue = !0), (d.value = p);
              },
              [p]
            ),
            s(p),
            p
          );
        };
      },
      248: function (e, t, n) {
        "use strict";
        e.exports = n(561);
      },
      327: function (e, t, n) {
        "use strict";
        e.exports = n(595);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.m = e),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var o = Object.create(null);
        n.r(o);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var l = 2 & a && r;
          "object" == typeof l && !~e.indexOf(l);
          l = t(l)
        )
          Object.getOwnPropertyNames(l).forEach(function (e) {
            i[e] = function () {
              return r[e];
            };
          });
        return (
          (i.default = function () {
            return r;
          }),
          n.d(o, i),
          o
        );
      };
    })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, r) {
          return n.f[r](e, t), t;
        }, [])
      );
    }),
    (n.u = function (e) {
      return "static/js/" + e + ".89fa964c.chunk.js";
    }),
    (n.miniCssF = function (e) {}),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = "ownit:";
      n.l = function (r, a, o, i) {
        if (e[r]) e[r].push(a);
        else {
          var l, u;
          if (void 0 !== o)
            for (
              var c = document.getElementsByTagName("script"), s = 0;
              s < c.length;
              s++
            ) {
              var f = c[s];
              if (
                f.getAttribute("src") == r ||
                f.getAttribute("data-webpack") == t + o
              ) {
                l = f;
                break;
              }
            }
          l ||
            ((u = !0),
            ((l = document.createElement("script")).charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + o),
            (l.src = r)),
            (e[r] = [a]);
          var d = function (t, n) {
              (l.onerror = l.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                a &&
                  a.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: l }),
              12e4
            );
          (l.onerror = d.bind(null, l.onerror)),
            (l.onload = d.bind(null, l.onload)),
            u && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      var e = { 179: 0 };
      n.f.j = function (t, r) {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var o = new Promise(function (n, r) {
              a = e[t] = [n, r];
            });
            r.push((a[2] = o));
            var i = n.p + n.u(t),
              l = new Error();
            n.l(
              i,
              function (r) {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    i = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = o),
                    (l.request = i),
                    a[1](l);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = function (t, r) {
          var a,
            o,
            i = r[0],
            l = r[1],
            u = r[2],
            c = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (a in l) n.o(l, a) && (n.m[a] = l[a]);
            if (u) u(n);
          }
          for (t && t(r); c < i.length; c++)
            (o = i[c]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (self.webpackChunkownit = self.webpackChunkownit || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (function () {
      "use strict";
      var e,
        t = n(791),
        r = n.t(t, 2),
        a = n(250);
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function i(e, t) {
        if (e) {
          if ("string" === typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? o(e, t)
              : void 0
          );
        }
      }
      function l(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                o = [],
                i = !0,
                l = !1;
              try {
                for (
                  n = n.call(e);
                  !(i = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  i = !0
                );
              } catch (u) {
                (l = !0), (a = u);
              } finally {
                try {
                  i || null == n.return || n.return();
                } finally {
                  if (l) throw a;
                }
              }
              return o;
            }
          })(e, t) ||
          i(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function u(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return o(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          i(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function f(e, t, n) {
        return (
          t && s(e.prototype, t),
          n && s(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function d(e, t) {
        return (
          (d = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          d(e, t)
        );
      }
      function p(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && d(e, t);
      }
      function h(e) {
        return (
          (h = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          h(e)
        );
      }
      function v() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (Ge) {
          return !1;
        }
      }
      function m(e) {
        return (
          (m =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          m(e)
        );
      }
      function y(e, t) {
        if (t && ("object" === m(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function g(e) {
        var t = v();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var a = h(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return y(this, n);
        };
      }
      function b(e, t, n) {
        return (
          (b = v()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && d(a, n.prototype), a;
              }),
          b.apply(null, arguments)
        );
      }
      function w(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (w = function (e) {
            if (
              null === e ||
              !(function (e) {
                return (
                  -1 !== Function.toString.call(e).indexOf("[native code]")
                );
              })(e)
            )
              return e;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, n);
            }
            function n() {
              return b(e, arguments, h(this).constructor);
            }
            return (
              (n.prototype = Object.create(e.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              d(n, e)
            );
          }),
          w(e)
        );
      }
      function k() {
        return (
          (k = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          k.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var S,
        x = "popstate";
      function E(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (Ge) {}
        }
      }
      function _(e) {
        return { usr: e.state, key: e.key };
      }
      function A(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          k(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? P(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function C(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          o = e.hash,
          i = void 0 === o ? "" : o;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i),
          n
        );
      }
      function P(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function O(e) {
        var t =
            "undefined" !== typeof window &&
            "undefined" !== typeof window.location &&
            "null" !== window.location.origin
              ? window.location.origin
              : "unknown://unknown",
          n = "string" === typeof e ? e : C(e);
        return new URL(n, t);
      }
      function R(t, n, r, a) {
        void 0 === a && (a = {});
        var o = a,
          i = o.window,
          l = void 0 === i ? document.defaultView : i,
          u = o.v5Compat,
          c = void 0 !== u && u,
          s = l.history,
          f = e.Pop,
          d = null;
        function p() {
          (f = e.Pop), d && d({ action: f, location: h.location });
        }
        var h = {
          get action() {
            return f;
          },
          get location() {
            return t(l, s);
          },
          listen: function (e) {
            if (d)
              throw new Error("A history only accepts one active listener");
            return (
              l.addEventListener(x, p),
              (d = e),
              function () {
                l.removeEventListener(x, p), (d = null);
              }
            );
          },
          createHref: function (e) {
            return n(l, e);
          },
          encodeLocation: function (e) {
            var t = O(C(e));
            return k({}, e, {
              pathname: t.pathname,
              search: t.search,
              hash: t.hash,
            });
          },
          push: function (t, n) {
            f = e.Push;
            var a = A(h.location, t, n);
            r && r(a, t);
            var o = _(a),
              i = h.createHref(a);
            try {
              s.pushState(o, "", i);
            } catch (u) {
              l.location.assign(i);
            }
            c && d && d({ action: f, location: h.location });
          },
          replace: function (t, n) {
            f = e.Replace;
            var a = A(h.location, t, n);
            r && r(a, t);
            var o = _(a),
              i = h.createHref(a);
            s.replaceState(o, "", i),
              c && d && d({ action: f, location: h.location });
          },
          go: function (e) {
            return s.go(e);
          },
        };
        return h;
      }
      function T(e, t, n) {
        void 0 === n && (n = "/");
        var r = F(("string" === typeof t ? P(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = M(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var o = null, i = 0; null == o && i < a.length; ++i)
          o = D(a[i], z(r));
        return o;
      }
      function M(e, t, n, r) {
        return (
          void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = ""),
          e.forEach(function (e, a) {
            var o = {
              relativePath: e.path || "",
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: a,
              route: e,
            };
            o.relativePath.startsWith("/") &&
              (U(
                o.relativePath.startsWith(r),
                'Absolute route path "' +
                  o.relativePath +
                  '" nested under path "' +
                  r +
                  '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
              ),
              (o.relativePath = o.relativePath.slice(r.length)));
            var i = H([r, o.relativePath]),
              l = n.concat(o);
            e.children &&
              e.children.length > 0 &&
              (U(
                !0 !== e.index,
                'Index routes must not have child routes. Please remove all child routes from route path "' +
                  i +
                  '".'
              ),
              M(e.children, t, l, i)),
              (null != e.path || e.index) &&
                t.push({ path: i, score: N(i, e.index), routesMeta: l });
          }),
          t
        );
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(S || (S = {}));
      var L = /^:\w+$/,
        j = function (e) {
          return "*" === e;
        };
      function N(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(j) && (r += -2),
          t && (r += 2),
          n
            .filter(function (e) {
              return !j(e);
            })
            .reduce(function (e, t) {
              return e + (L.test(t) ? 3 : "" === t ? 1 : 10);
            }, r)
        );
      }
      function D(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", o = [], i = 0;
          i < n.length;
          ++i
        ) {
          var l = n[i],
            u = i === n.length - 1,
            c = "/" === a ? t : t.slice(a.length) || "/",
            s = I(
              { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
              c
            );
          if (!s) return null;
          Object.assign(r, s.params);
          var f = l.route;
          o.push({
            params: r,
            pathname: H([a, s.pathname]),
            pathnameBase: Q(H([a, s.pathnameBase])),
            route: f,
          }),
            "/" !== s.pathnameBase && (a = H([a, s.pathnameBase]));
        }
        return o;
      }
      function I(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            $(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/:(\w+)/g, function (e, t) {
                    return r.push(t), "([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            return [new RegExp(a, t ? void 0 : "i"), r];
          })(e.path, e.caseSensitive, e.end),
          r = l(n, 2),
          a = r[0],
          o = r[1],
          i = t.match(a);
        if (!i) return null;
        var u = i[0],
          c = u.replace(/(.)\/+$/, "$1"),
          s = i.slice(1);
        return {
          params: o.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = s[n] || "";
              c = u.slice(0, u.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    $(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ")."
                    ),
                    e
                  );
                }
              })(s[n] || "", t)),
              e
            );
          }, {}),
          pathname: u,
          pathnameBase: c,
          pattern: e,
        };
      }
      function z(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            $(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function F(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function U(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function $(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (Ge) {}
        }
      }
      function V(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function W(e) {
        return e.filter(function (e, t) {
          return 0 === t || (e.route.path && e.route.path.length > 0);
        });
      }
      function B(e, t, n, r) {
        var a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = P(e))
            : (U(
                !(a = k({}, e)).pathname || !a.pathname.includes("?"),
                V("?", "pathname", "search", a)
              ),
              U(
                !a.pathname || !a.pathname.includes("#"),
                V("#", "pathname", "hash", a)
              ),
              U(
                !a.search || !a.search.includes("#"),
                V("#", "search", "hash", a)
              ));
        var o,
          i = "" === e || "" === a.pathname,
          l = i ? "/" : a.pathname;
        if (r || null == l) o = n;
        else {
          var u = t.length - 1;
          if (l.startsWith("..")) {
            for (var c = l.split("/"); ".." === c[0]; ) c.shift(), (u -= 1);
            a.pathname = c.join("/");
          }
          o = u >= 0 ? t[u] : "/";
        }
        var s = (function (e, t) {
            void 0 === t && (t = "/");
            var n = "string" === typeof e ? P(e) : e,
              r = n.pathname,
              a = n.search,
              o = void 0 === a ? "" : a,
              i = n.hash,
              l = void 0 === i ? "" : i,
              u = r
                ? r.startsWith("/")
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach(function (e) {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(r, t)
                : t;
            return { pathname: u, search: q(o), hash: K(l) };
          })(a, o),
          f = l && "/" !== l && l.endsWith("/"),
          d = (i || "." === l) && n.endsWith("/");
        return s.pathname.endsWith("/") || (!f && !d) || (s.pathname += "/"), s;
      }
      var H = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        Q = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        q = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        K = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        },
        X = (function (e) {
          p(n, e);
          var t = g(n);
          function n() {
            return c(this, n), t.apply(this, arguments);
          }
          return f(n);
        })(w(Error));
      var Y = f(function e(t, n, r) {
        c(this, e),
          (this.status = t),
          (this.statusText = n || ""),
          (this.data = r);
      });
      function G(e) {
        return e instanceof Y;
      }
      "undefined" !== typeof window &&
        "undefined" !== typeof window.document &&
        window.document.createElement;
      var Z = new Set(["POST", "PUT", "PATCH", "DELETE"]);
      new Set(["GET", "HEAD"].concat(u(Z)));
      function J() {
        return (
          (J = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          J.apply(this, arguments)
        );
      }
      var ee =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        te = t.useState,
        ne = t.useEffect,
        re = t.useLayoutEffect,
        ae = t.useDebugValue;
      function oe(e) {
        var t = e.getSnapshot,
          n = e.value;
        try {
          var r = t();
          return !ee(n, r);
        } catch (a) {
          return !0;
        }
      }
      "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        window.document.createElement,
        r.useSyncExternalStore;
      var ie = t.createContext(null);
      var le = t.createContext(null);
      var ue = t.createContext(null);
      var ce = t.createContext(null);
      var se = t.createContext(null);
      var fe = t.createContext(null);
      var de = t.createContext({ outlet: null, matches: [] });
      var pe = t.createContext(null);
      function he() {
        return null != t.useContext(fe);
      }
      function ve() {
        return he() || U(!1), t.useContext(fe).location;
      }
      function me() {
        he() || U(!1);
        var e = t.useContext(se),
          n = e.basename,
          r = e.navigator,
          a = t.useContext(de).matches,
          o = ve().pathname,
          i = JSON.stringify(
            W(a).map(function (e) {
              return e.pathnameBase;
            })
          ),
          l = t.useRef(!1);
        return (
          t.useEffect(function () {
            l.current = !0;
          }),
          t.useCallback(
            function (e, t) {
              if ((void 0 === t && (t = {}), l.current))
                if ("number" !== typeof e) {
                  var a = B(e, JSON.parse(i), o, "path" === t.relative);
                  "/" !== n &&
                    (a.pathname = "/" === a.pathname ? n : H([n, a.pathname])),
                    (t.replace ? r.replace : r.push)(a, t.state, t);
                } else r.go(e);
            },
            [n, r, i, o]
          )
        );
      }
      function ye() {
        var e = (function () {
            var e,
              n = t.useContext(pe),
              r = xe(be.UseRouteError),
              a = t.useContext(de),
              o = a.matches[a.matches.length - 1];
            if (n) return n;
            return (
              a || U(!1),
              !o.route.id && U(!1),
              null == (e = r.errors) ? void 0 : e[o.route.id]
            );
          })(),
          n = G(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          o = { padding: "0.5rem", backgroundColor: a },
          i = { padding: "2px 4px", backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unhandled Thrown Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? t.createElement("pre", { style: o }, r) : null,
          t.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"),
          t.createElement(
            "p",
            null,
            "You can provide a way better UX than this when your app throws errors by providing your own\xa0",
            t.createElement("code", { style: i }, "errorElement"),
            " props on\xa0",
            t.createElement("code", { style: i }, "<Route>")
          )
        );
      }
      var ge,
        be,
        we = (function (e) {
          p(r, e);
          var n = g(r);
          function r(e) {
            var t;
            return (
              c(this, r),
              ((t = n.call(this, e)).state = {
                location: e.location,
                error: e.error,
              }),
              t
            );
          }
          return (
            f(
              r,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? t.createElement(pe.Provider, {
                          value: this.state.error,
                          children: this.props.component,
                        })
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location
                      ? { error: e.error, location: e.location }
                      : { error: e.error || t.error, location: t.location };
                  },
                },
              ]
            ),
            r
          );
        })(t.Component);
      function ke(e) {
        var n = e.routeContext,
          r = e.match,
          a = e.children,
          o = t.useContext(ie);
        return (
          o &&
            r.route.errorElement &&
            (o._deepestRenderedBoundaryId = r.route.id),
          t.createElement(de.Provider, { value: n }, a)
        );
      }
      function Se(e, n, r) {
        if ((void 0 === n && (n = []), null == e)) {
          if (null == r || !r.errors) return null;
          e = r.matches;
        }
        var a = e,
          o = null == r ? void 0 : r.errors;
        if (null != o) {
          var i = a.findIndex(function (e) {
            return e.route.id && (null == o ? void 0 : o[e.route.id]);
          });
          i >= 0 || U(!1), (a = a.slice(0, Math.min(a.length, i + 1)));
        }
        return a.reduceRight(function (e, i, l) {
          var u = i.route.id ? (null == o ? void 0 : o[i.route.id]) : null,
            c = r ? i.route.errorElement || t.createElement(ye, null) : null,
            s = function () {
              return t.createElement(
                ke,
                {
                  match: i,
                  routeContext: {
                    outlet: e,
                    matches: n.concat(a.slice(0, l + 1)),
                  },
                },
                u ? c : void 0 !== i.route.element ? i.route.element : e
              );
            };
          return r && (i.route.errorElement || 0 === l)
            ? t.createElement(we, {
                location: r.location,
                component: c,
                error: u,
                children: s(),
              })
            : s();
        }, null);
      }
      function xe(e) {
        var n = t.useContext(ue);
        return n || U(!1), n;
      }
      !(function (e) {
        e.UseRevalidator = "useRevalidator";
      })(ge || (ge = {})),
        (function (e) {
          (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator");
        })(be || (be = {}));
      var Ee;
      function _e(e) {
        U(!1);
      }
      function Ae(n) {
        var r = n.basename,
          a = void 0 === r ? "/" : r,
          o = n.children,
          i = void 0 === o ? null : o,
          l = n.location,
          u = n.navigationType,
          c = void 0 === u ? e.Pop : u,
          s = n.navigator,
          f = n.static,
          d = void 0 !== f && f;
        he() && U(!1);
        var p = a.replace(/^\/*/, "/"),
          h = t.useMemo(
            function () {
              return { basename: p, navigator: s, static: d };
            },
            [p, s, d]
          );
        "string" === typeof l && (l = P(l));
        var v = l,
          m = v.pathname,
          y = void 0 === m ? "/" : m,
          g = v.search,
          b = void 0 === g ? "" : g,
          w = v.hash,
          k = void 0 === w ? "" : w,
          S = v.state,
          x = void 0 === S ? null : S,
          E = v.key,
          _ = void 0 === E ? "default" : E,
          A = t.useMemo(
            function () {
              var e = F(y, p);
              return null == e
                ? null
                : { pathname: e, search: b, hash: k, state: x, key: _ };
            },
            [p, y, b, k, x, _]
          );
        return null == A
          ? null
          : t.createElement(
              se.Provider,
              { value: h },
              t.createElement(fe.Provider, {
                children: i,
                value: { location: A, navigationType: c },
              })
            );
      }
      function Ce(n) {
        var r = n.children,
          a = n.location,
          o = t.useContext(le);
        return (function (n, r) {
          he() || U(!1);
          var a,
            o = t.useContext(ue),
            i = t.useContext(de).matches,
            l = i[i.length - 1],
            u = l ? l.params : {},
            c = (l && l.pathname, l ? l.pathnameBase : "/"),
            s = (l && l.route, ve());
          if (r) {
            var f,
              d = "string" === typeof r ? P(r) : r;
            "/" === c ||
              (null == (f = d.pathname) ? void 0 : f.startsWith(c)) ||
              U(!1),
              (a = d);
          } else a = s;
          var p = a.pathname || "/",
            h = T(n, { pathname: "/" === c ? p : p.slice(c.length) || "/" }),
            v = Se(
              h &&
                h.map(function (e) {
                  return Object.assign({}, e, {
                    params: Object.assign({}, u, e.params),
                    pathname: H([c, e.pathname]),
                    pathnameBase:
                      "/" === e.pathnameBase ? c : H([c, e.pathnameBase]),
                  });
                }),
              i,
              o || void 0
            );
          return r && v
            ? t.createElement(
                fe.Provider,
                {
                  value: {
                    location: J(
                      {
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default",
                      },
                      a
                    ),
                    navigationType: e.Pop,
                  },
                },
                v
              )
            : v;
        })(o && !r ? o.router.routes : Oe(r), a);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(Ee || (Ee = {}));
      var Pe = new Promise(function () {});
      t.Component;
      function Oe(e, n) {
        void 0 === n && (n = []);
        var r = [];
        return (
          t.Children.forEach(e, function (e, a) {
            if (t.isValidElement(e))
              if (e.type !== t.Fragment) {
                e.type !== _e && U(!1),
                  e.props.index && e.props.children && U(!1);
                var o = [].concat(u(n), [a]),
                  i = {
                    id: e.props.id || o.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    hasErrorBoundary: null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                  };
                e.props.children && (i.children = Oe(e.props.children, o)),
                  r.push(i);
              } else r.push.apply(r, Oe(e.props.children, n));
          }),
          r
        );
      }
      function Re(e) {
        var n,
          r = e.basename,
          a = e.children,
          o = e.window,
          i = t.useRef();
        null == i.current &&
          (i.current =
            (void 0 === (n = { window: o, v5Compat: !0 }) && (n = {}),
            R(
              function (e, t) {
                var n = P(e.location.hash.substr(1)),
                  r = n.pathname,
                  a = void 0 === r ? "/" : r,
                  o = n.search,
                  i = void 0 === o ? "" : o,
                  l = n.hash;
                return A(
                  "",
                  { pathname: a, search: i, hash: void 0 === l ? "" : l },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                var n = e.document.querySelector("base"),
                  r = "";
                if (n && n.getAttribute("href")) {
                  var a = e.location.href,
                    o = a.indexOf("#");
                  r = -1 === o ? a : a.slice(0, o);
                }
                return r + "#" + ("string" === typeof t ? t : C(t));
              },
              function (e, t) {
                E(
                  "/" === e.pathname.charAt(0),
                  "relative pathnames are not supported in hash history.push(" +
                    JSON.stringify(t) +
                    ")"
                );
              },
              n
            )));
        var u = i.current,
          c = l(t.useState({ action: u.action, location: u.location }), 2),
          s = c[0],
          f = c[1];
        return (
          t.useLayoutEffect(
            function () {
              return u.listen(f);
            },
            [u]
          ),
          t.createElement(Ae, {
            basename: r,
            children: a,
            location: s.location,
            navigationType: s.action,
            navigator: u,
          })
        );
      }
      var Te, Me;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmitImpl = "useSubmitImpl"),
          (e.UseFetcher = "useFetcher");
      })(Te || (Te = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Me || (Me = {}));
      var Le = "style_heading__L58NH",
        je = n(184),
        Ne = function (e) {
          var t = e.children;
          return (0, je.jsx)("h1", { className: Le, children: t });
        },
        De = (n(299), n.p, n.p, "style_input__2x9Ha"),
        Ie = (0, t.forwardRef)(function (e, t) {
          var n = e.type,
            r = void 0 === n ? "text" : n,
            a = e.className,
            o = e.onChange,
            i = e.placeholder,
            l = void 0 === i ? "" : i,
            u = e.value,
            c = void 0 === u ? "" : u,
            s = e.name,
            f = void 0 === s ? "" : s;
          return (0,
          je.jsx)("input", { type: r, name: f, className: "".concat(De, " ").concat(a), onChange: o, placeholder: l, value: c, ref: t });
        }),
        ze = "style_primary__nUTV-",
        Fe = function (e) {
          var t = e.children,
            n = e.onClick,
            r = e.className,
            a = void 0 === r ? "" : r;
          return (0, je.jsx)("button", {
            className: "".concat(ze, " ").concat(a),
            onClick: n,
            children: t,
          });
        },
        Ue = "style_verify-product-page__MofDz",
        $e = "style_left-container__n945X",
        Ve = "style_right-container__Hxy9L",
        We = "style_scan-button__xPp9C",
        Be = function () {
          var e = me(),
            n = l((0, t.useState)(""), 2),
            r = n[0],
            a = n[1];
          return (0, je.jsxs)("div", {
            className: "".concat(Ue, " page"),
            children: [
              (0, je.jsxs)("div", {
                className: $e,
                children: [
                  (0, je.jsx)("h1", { children: "Verify Your Product Easily" }),
                  (0, je.jsx)("h2", {
                    children: "Enter your Reference Id or Scan and it's done.",
                  }),
                ],
              }),
              (0, je.jsx)("div", {
                className: Ve,
                children: (0, je.jsxs)("form", {
                  children: [
                    (0, je.jsx)(Ne, { children: "Verify Product" }),
                    (0, je.jsx)("button", {
                      className: We,
                      onClick: function (t) {
                        t.preventDefault(), e("/verifyproduct/scan");
                      },
                      children: (0, je.jsx)("img", {
                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAgMAAACJFjxpAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUAAACSOckAAAB0uSXzAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfmCxYUDhnvrOWPAAABt0lEQVR42u3XMRKCQAwFUC08AvfhCBZw/6tYiIU7EHZ1hTjzfseQ5L92L3OYS4fsNAAAAAAAAAAAAAAAAAAAZAHce1S15AYAAAAAAAAAAAAAAAAAkBUwzBWZ3oenT3YBAAAAAAAAAAAAAAAAALIDXmNFiopx9W+8CwAAAAAAAAAAAAAAAACQDxCP/e5zKwAAAAAAAAAAAAAAAAAA2QDf8JouAwAAAAAAAAAAAAAAAACkA8SZ+u8CAAAAAAAAAAAAAAAAAOQBNGWo8XRtBAAAAAAAAAAAAAAAAAA4ALBsxZmqhsfn0HV9FwAAAAAAAAAAAAAAAAAgLWDdU2xd3yuadhsDAAAAAAAAAAAAAAAAAHAaYONNHXuqUukBAAAAAAAAAAAAAAAAADgPMISNTZ/xZQAAAAAAAAAAAAAAAACAPwO8Mq7u1L3lAQAAAAAAAAAAAAAAAAD+BRDfLP4WnrgiLWC5dT8acFtuAAAAAAAAAAAAAAAAAKQDFGPDXJGPhgEAAAAAAAAAAAAAAAAA0gIOCwAAAAAAAAAAAAAAAAAAQDrARnpU7TQAAAAAAAAAAAAAAAAAAJwNeACfAqKlVfRU2wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0xMS0yMlQyMDoxNDoyNSswMDowMPrDMgUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMTEtMjJUMjA6MTQ6MjUrMDA6MDCLnoq5AAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIyLTExLTIyVDIwOjE0OjI1KzAwOjAw3IurZgAAAABJRU5ErkJggg==",
                        alt: "scan QR",
                      }),
                    }),
                    (0, je.jsx)(Ie, {
                      placeholder: "enter product ref id",
                      onChange: function (e) {
                        a(e.target.value);
                      },
                      value: r,
                    }),
                    (0, je.jsx)(Fe, {
                      onClick: function (t) {
                        t.preventDefault(), e("/product/".concat(r));
                      },
                      children: "Verify",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        He = function () {
          var e = (function () {
            var e = t.useContext(de).matches,
              n = e[e.length - 1];
            return n ? n.params : {};
          })();
          return (0, je.jsxs)("div", { children: ["Reference Id: ", e.refId] });
        };
      function Qe(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = i(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          l = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (l = e.done), e;
          },
          e: function (e) {
            (u = !0), (o = e);
          },
          f: function () {
            try {
              l || null == n.return || n.return();
            } finally {
              if (u) throw o;
            }
          },
        };
      }
      function qe(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Ke() {
        Ke = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          l = a.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (O) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function c(e, t, n, a) {
          var o = t && t.prototype instanceof d ? t : d,
            i = Object.create(o.prototype),
            l = new A(a || []);
          return r(i, "_invoke", { value: S(e, n, l) }), i;
        }
        function s(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (O) {
            return { type: "throw", arg: O };
          }
        }
        e.wrap = c;
        var f = {};
        function d() {}
        function p() {}
        function h() {}
        var v = {};
        u(v, o, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          g = y && y(y(C([])));
        g && g !== t && n.call(g, o) && (v = g);
        var b = (h.prototype = d.prototype = Object.create(v));
        function w(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function k(e, t) {
          function a(r, o, i, l) {
            var u = s(e[r], e, o);
            if ("throw" !== u.type) {
              var c = u.arg,
                f = c.value;
              return f && "object" == m(f) && n.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      a("next", e, i, l);
                    },
                    function (e) {
                      a("throw", e, i, l);
                    }
                  )
                : t.resolve(f).then(
                    function (e) {
                      (c.value = e), i(c);
                    },
                    function (e) {
                      return a("throw", e, i, l);
                    }
                  );
            }
            l(u.arg);
          }
          var o;
          r(this, "_invoke", {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  a(e, n, t, r);
                });
              }
              return (o = o ? o.then(r, r) : r());
            },
          });
        }
        function S(e, t, n) {
          var r = "suspendedStart";
          return function (a, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw o;
              return P();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var l = x(i, n);
                if (l) {
                  if (l === f) continue;
                  return l;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var u = s(e, t, n);
              if ("normal" === u.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: n.done };
              }
              "throw" === u.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
            }
          };
        }
        function x(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
                "throw" === t.method)
              )
                return f;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return f;
          }
          var r = s(n, e.iterator, t.arg);
          if ("throw" === r.type)
            return (
              (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), f
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((t[e.resultName] = a.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : a
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function E(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function _(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function A(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function C(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: P };
        }
        function P() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = h),
          r(b, "constructor", { value: h, configurable: !0 }),
          r(h, "constructor", { value: p, configurable: !0 }),
          (p.displayName = u(h, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, h)
                : ((e.__proto__ = h), u(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          w(k.prototype),
          u(k.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = k),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new k(c(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          w(b),
          u(b, l, "Generator"),
          u(b, o, function () {
            return this;
          }),
          u(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = C),
          (A.prototype = {
            constructor: A,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(_),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var l = n.call(o, "catchLoc"),
                    u = n.call(o, "finallyLoc");
                  if (l && u) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), _(n), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    _(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: C(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      function Xe(e, t, n, r, a, o, i) {
        try {
          var l = e[o](i),
            u = l.value;
        } catch (c) {
          return void n(c);
        }
        l.done ? t(u) : Promise.resolve(u).then(r, a);
      }
      function Ye(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              Xe(o, r, a, i, l, "next", e);
            }
            function l(e) {
              Xe(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        };
      }
      var Ge = (function () {
        function e(t, n, r, a, o) {
          var i = this;
          c(this, e),
            (this._legacyCanvasSize = e.DEFAULT_CANVAS_SIZE),
            (this._preferredCamera = "environment"),
            (this._maxScansPerSecond = 25),
            (this._lastScanTimestamp = -1),
            (this._destroyed =
              this._flashOn =
              this._paused =
              this._active =
                !1),
            (this.$video = t),
            (this.$canvas = document.createElement("canvas")),
            r && "object" === typeof r
              ? (this._onDecode = n)
              : (r || a || o
                  ? console.warn(
                      "You're using a deprecated version of the QrScanner constructor which will be removed in the future"
                    )
                  : console.warn(
                      "Note that the type of the scan result passed to onDecode will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."
                    ),
                (this._legacyOnDecode = n)),
            (n = "object" === typeof r ? r : {}),
            (this._onDecodeError =
              n.onDecodeError ||
              ("function" === typeof r ? r : this._onDecodeError)),
            (this._calculateScanRegion =
              n.calculateScanRegion ||
              ("function" === typeof a ? a : this._calculateScanRegion)),
            (this._preferredCamera =
              n.preferredCamera || o || this._preferredCamera),
            (this._legacyCanvasSize =
              "number" === typeof r
                ? r
                : "number" === typeof a
                ? a
                : this._legacyCanvasSize),
            (this._maxScansPerSecond =
              n.maxScansPerSecond || this._maxScansPerSecond),
            (this._onPlay = this._onPlay.bind(this)),
            (this._onLoadedMetaData = this._onLoadedMetaData.bind(this)),
            (this._onVisibilityChange = this._onVisibilityChange.bind(this)),
            (this._updateOverlay = this._updateOverlay.bind(this)),
            (t.disablePictureInPicture = !0),
            (t.playsInline = !0),
            (t.muted = !0);
          var l = !1;
          if (
            (t.hidden && ((t.hidden = !1), (l = !0)),
            document.body.contains(t) ||
              (document.body.appendChild(t), (l = !0)),
            (r = t.parentElement),
            n.highlightScanRegion || n.highlightCodeOutline)
          ) {
            if (
              ((a = !!n.overlay),
              (this.$overlay = n.overlay || document.createElement("div")),
              ((o = this.$overlay.style).position = "absolute"),
              (o.display = "none"),
              (o.pointerEvents = "none"),
              this.$overlay.classList.add("scan-region-highlight"),
              !a && n.highlightScanRegion)
            ) {
              this.$overlay.innerHTML =
                '<svg class="scan-region-highlight-svg" viewBox="0 0 238 238" preserveAspectRatio="none" style="position:absolute;width:100%;height:100%;left:0;top:0;fill:none;stroke:#e9b213;stroke-width:4;stroke-linecap:round;stroke-linejoin:round"><path d="M31 2H10a8 8 0 0 0-8 8v21M207 2h21a8 8 0 0 1 8 8v21m0 176v21a8 8 0 0 1-8 8h-21m-176 0H10a8 8 0 0 1-8-8v-21"/></svg>';
              try {
                this.$overlay.firstElementChild.animate(
                  { transform: ["scale(.98)", "scale(1.01)"] },
                  {
                    duration: 400,
                    iterations: 1 / 0,
                    direction: "alternate",
                    easing: "ease-in-out",
                  }
                );
              } catch (Rt) {}
              r.insertBefore(this.$overlay, this.$video.nextSibling);
            }
            n.highlightCodeOutline &&
              (this.$overlay.insertAdjacentHTML(
                "beforeend",
                '<svg class="code-outline-highlight" preserveAspectRatio="none" style="display:none;width:100%;height:100%;fill:none;stroke:#e9b213;stroke-width:5;stroke-dasharray:25;stroke-linecap:round;stroke-linejoin:round"><polygon/></svg>'
              ),
              (this.$codeOutlineHighlight = this.$overlay.lastElementChild));
          }
          (this._scanRegion = this._calculateScanRegion(t)),
            requestAnimationFrame(function () {
              var e = window.getComputedStyle(t);
              "none" === e.display &&
                (t.style.setProperty("display", "block", "important"),
                (l = !0)),
                "visible" !== e.visibility &&
                  (t.style.setProperty("visibility", "visible", "important"),
                  (l = !0)),
                l &&
                  (console.warn(
                    "QrScanner has overwritten the video hiding style to avoid Safari stopping the playback."
                  ),
                  (t.style.opacity = "0"),
                  (t.style.width = "0"),
                  (t.style.height = "0"),
                  i.$overlay &&
                    i.$overlay.parentElement &&
                    i.$overlay.parentElement.removeChild(i.$overlay),
                  delete i.$overlay,
                  delete i.$codeOutlineHighlight),
                i.$overlay && i._updateOverlay();
            }),
            t.addEventListener("play", this._onPlay),
            t.addEventListener("loadedmetadata", this._onLoadedMetaData),
            document.addEventListener(
              "visibilitychange",
              this._onVisibilityChange
            ),
            window.addEventListener("resize", this._updateOverlay),
            (this._qrEnginePromise = e.createQrEngine());
        }
        return (
          f(
            e,
            [
              {
                key: "hasFlash",
                value: (function () {
                  var t = Ye(
                    Ke().mark(function t() {
                      var n;
                      return Ke().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (((t.prev = 0), !this.$video.srcObject)) {
                                  t.next = 7;
                                  break;
                                }
                                if (
                                  this.$video.srcObject instanceof MediaStream
                                ) {
                                  t.next = 4;
                                  break;
                                }
                                return t.abrupt("return", !1);
                              case 4:
                                (n = this.$video.srcObject), (t.next = 10);
                                break;
                              case 7:
                                return (t.next = 9), this._getCameraStream();
                              case 9:
                                n = t.sent.stream;
                              case 10:
                                return t.abrupt(
                                  "return",
                                  "torch" in n.getVideoTracks()[0].getSettings()
                                );
                              case 13:
                                return (
                                  (t.prev = 13),
                                  (t.t0 = t.catch(0)),
                                  t.abrupt("return", !1)
                                );
                              case 16:
                                return (
                                  (t.prev = 16),
                                  n &&
                                    n !== this.$video.srcObject &&
                                    (console.warn(
                                      "Call hasFlash after successfully starting the scanner to avoid creating a temporary video stream"
                                    ),
                                    e._stopVideoStream(n)),
                                  t.finish(16)
                                );
                              case 19:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[0, 13, 16, 19]]
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "isFlashOn",
                value: function () {
                  return this._flashOn;
                },
              },
              {
                key: "toggleFlash",
                value: (function () {
                  var e = Ye(
                    Ke().mark(function e() {
                      return Ke().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this._flashOn) {
                                  e.next = 5;
                                  break;
                                }
                                return (e.next = 3), this.turnFlashOff();
                              case 3:
                                e.next = 7;
                                break;
                              case 5:
                                return (e.next = 7), this.turnFlashOn();
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "turnFlashOn",
                value: (function () {
                  var e = Ye(
                    Ke().mark(function e() {
                      return Ke().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  this._flashOn ||
                                  this._destroyed ||
                                  ((this._flashOn = !0),
                                  !this._active || this._paused)
                                ) {
                                  e.next = 13;
                                  break;
                                }
                                return (
                                  (e.prev = 1), (e.next = 4), this.hasFlash()
                                );
                              case 4:
                                if (e.sent) {
                                  e.next = 6;
                                  break;
                                }
                                throw "No flash available";
                              case 6:
                                return (
                                  (e.next = 8),
                                  this.$video.srcObject
                                    .getVideoTracks()[0]
                                    .applyConstraints({
                                      advanced: [{ torch: !0 }],
                                    })
                                );
                              case 8:
                                e.next = 13;
                                break;
                              case 10:
                                throw (
                                  ((e.prev = 10),
                                  (e.t0 = e.catch(1)),
                                  (this._flashOn = !1),
                                  e.t0)
                                );
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 10]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "turnFlashOff",
                value: (function () {
                  var e = Ye(
                    Ke().mark(function e() {
                      return Ke().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((e.t0 = this._flashOn), !e.t0)) {
                                  e.next = 5;
                                  break;
                                }
                                return (
                                  (this._flashOn = !1),
                                  (e.next = 5),
                                  this._restartVideoStream()
                                );
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "destroy",
                value: function () {
                  this.$video.removeEventListener(
                    "loadedmetadata",
                    this._onLoadedMetaData
                  ),
                    this.$video.removeEventListener("play", this._onPlay),
                    document.removeEventListener(
                      "visibilitychange",
                      this._onVisibilityChange
                    ),
                    window.removeEventListener("resize", this._updateOverlay),
                    (this._destroyed = !0),
                    (this._flashOn = !1),
                    this.stop(),
                    e._postWorkerMessage(this._qrEnginePromise, "close");
                },
              },
              {
                key: "start",
                value: (function () {
                  var t = Ye(
                    Ke().mark(function t() {
                      var n, r, a;
                      return Ke().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!this._destroyed) {
                                  t.next = 2;
                                  break;
                                }
                                throw Error(
                                  "The QR scanner can not be started as it had been destroyed."
                                );
                              case 2:
                                if (this._active && !this._paused) {
                                  t.next = 30;
                                  break;
                                }
                                if (
                                  ("https:" !== window.location.protocol &&
                                    console.warn(
                                      "The camera stream is only accessible if the page is transferred via https."
                                    ),
                                  (this._active = !0),
                                  document.hidden)
                                ) {
                                  t.next = 30;
                                  break;
                                }
                                if (
                                  ((this._paused = !1), !this.$video.srcObject)
                                ) {
                                  t.next = 9;
                                  break;
                                }
                                return (t.next = 7), this.$video.play();
                              case 7:
                                t.next = 30;
                                break;
                              case 9:
                                return (
                                  (t.prev = 9),
                                  (t.next = 12),
                                  this._getCameraStream()
                                );
                              case 12:
                                if (
                                  ((n = t.sent),
                                  (r = n.stream),
                                  (a = n.facingMode),
                                  this._active && !this._paused)
                                ) {
                                  t.next = 19;
                                  break;
                                }
                                e._stopVideoStream(r), (t.next = 24);
                                break;
                              case 19:
                                return (
                                  this._setVideoMirror(a),
                                  (this.$video.srcObject = r),
                                  (t.next = 23),
                                  this.$video.play()
                                );
                              case 23:
                                this._flashOn &&
                                  ((this._flashOn = !1),
                                  this.turnFlashOn().catch(function () {}));
                              case 24:
                                t.next = 30;
                                break;
                              case 26:
                                if (
                                  ((t.prev = 26),
                                  (t.t0 = t.catch(9)),
                                  this._paused)
                                ) {
                                  t.next = 30;
                                  break;
                                }
                                throw ((this._active = !1), t.t0);
                              case 30:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[9, 26]]
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "stop",
                value: function () {
                  this.pause(), (this._active = !1);
                },
              },
              {
                key: "pause",
                value: (function () {
                  var t = Ye(
                    Ke().mark(function t() {
                      var n,
                        r,
                        a = this,
                        o = arguments;
                      return Ke().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((n =
                                    o.length > 0 && void 0 !== o[0] && o[0]),
                                  (this._paused = !0),
                                  this._active)
                                ) {
                                  t.next = 4;
                                  break;
                                }
                                return t.abrupt("return", !0);
                              case 4:
                                if (
                                  (this.$video.pause(),
                                  this.$overlay &&
                                    (this.$overlay.style.display = "none"),
                                  (r = function () {
                                    a.$video.srcObject instanceof MediaStream &&
                                      (e._stopVideoStream(a.$video.srcObject),
                                      (a.$video.srcObject = null));
                                  }),
                                  !n)
                                ) {
                                  t.next = 9;
                                  break;
                                }
                                return t.abrupt("return", (r(), !0));
                              case 9:
                                return (
                                  (t.next = 11),
                                  new Promise(function (e) {
                                    return setTimeout(e, 300);
                                  })
                                );
                              case 11:
                                if (this._paused) {
                                  t.next = 13;
                                  break;
                                }
                                return t.abrupt("return", !1);
                              case 13:
                                return r(), t.abrupt("return", !0);
                              case 15:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "setCamera",
                value: (function () {
                  var e = Ye(
                    Ke().mark(function e(t) {
                      return Ke().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((e.t0 = t !== this._preferredCamera), !e.t0)
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                return (
                                  (this._preferredCamera = t),
                                  (e.next = 5),
                                  this._restartVideoStream()
                                );
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "setGrayscaleWeights",
                value: function (t, n, r) {
                  var a =
                    !(arguments.length > 3 && void 0 !== arguments[3]) ||
                    arguments[3];
                  e._postWorkerMessage(
                    this._qrEnginePromise,
                    "grayscaleWeights",
                    { red: t, green: n, blue: r, useIntegerApproximation: a }
                  );
                },
              },
              {
                key: "setInversionMode",
                value: function (t) {
                  e._postWorkerMessage(
                    this._qrEnginePromise,
                    "inversionMode",
                    t
                  );
                },
              },
              {
                key: "_onPlay",
                value: function () {
                  (this._scanRegion = this._calculateScanRegion(this.$video)),
                    this._updateOverlay(),
                    this.$overlay && (this.$overlay.style.display = ""),
                    this._scanFrame();
                },
              },
              {
                key: "_onLoadedMetaData",
                value: function () {
                  (this._scanRegion = this._calculateScanRegion(this.$video)),
                    this._updateOverlay();
                },
              },
              {
                key: "_onVisibilityChange",
                value: function () {
                  document.hidden ? this.pause() : this._active && this.start();
                },
              },
              {
                key: "_calculateScanRegion",
                value: function (e) {
                  var t = Math.round(
                    (2 / 3) * Math.min(e.videoWidth, e.videoHeight)
                  );
                  return {
                    x: Math.round((e.videoWidth - t) / 2),
                    y: Math.round((e.videoHeight - t) / 2),
                    width: t,
                    height: t,
                    downScaledWidth: this._legacyCanvasSize,
                    downScaledHeight: this._legacyCanvasSize,
                  };
                },
              },
              {
                key: "_updateOverlay",
                value: function () {
                  var e = this;
                  requestAnimationFrame(function () {
                    if (e.$overlay) {
                      var t = e.$video,
                        n = t.videoWidth,
                        r = t.videoHeight,
                        a = t.offsetWidth,
                        o = t.offsetHeight,
                        i = t.offsetLeft,
                        u = t.offsetTop,
                        c = window.getComputedStyle(t),
                        s = c.objectFit,
                        f = n / r,
                        d = a / o;
                      switch (s) {
                        case "none":
                          var p = n,
                            h = r;
                          break;
                        case "fill":
                          (p = a), (h = o);
                          break;
                        default:
                          ("cover" === s ? f > d : f < d)
                            ? (p = (h = o) * f)
                            : (h = (p = a) / f),
                            "scale-down" === s &&
                              ((p = Math.min(p, n)), (h = Math.min(h, r)));
                      }
                      var v = c.objectPosition.split(" ").map(function (e, t) {
                          var n = parseFloat(e);
                          return e.endsWith("%")
                            ? ((t ? o - h : a - p) * n) / 100
                            : n;
                        }),
                        m = l(v, 2),
                        y = m[0],
                        g = m[1];
                      (c = e._scanRegion.width || n),
                        (d = e._scanRegion.height || r),
                        (s = e._scanRegion.x || 0);
                      var b = e._scanRegion.y || 0;
                      ((f = e.$overlay.style).width = "".concat(
                        (c / n) * p,
                        "px"
                      )),
                        (f.height = "".concat((d / r) * h, "px")),
                        (f.top = "".concat(u + g + (b / r) * h, "px")),
                        (r = /scaleX\(-1\)/.test(t.style.transform)),
                        (f.left = "".concat(
                          i +
                            (r ? a - y - p : y) +
                            ((r ? n - s - c : s) / n) * p,
                          "px"
                        )),
                        (f.transform = t.style.transform);
                    }
                  });
                },
              },
              {
                key: "_scanFrame",
                value: function () {
                  var t = this;
                  !this._active ||
                    this.$video.paused ||
                    this.$video.ended ||
                    ("requestVideoFrameCallback" in this.$video
                      ? this.$video.requestVideoFrameCallback.bind(this.$video)
                      : requestAnimationFrame)(
                      Ye(
                        Ke().mark(function n() {
                          var r, a, o;
                          return Ke().wrap(
                            function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    if (1 >= t.$video.readyState) {
                                      n.next = 29;
                                      break;
                                    }
                                    if (
                                      ((r = Date.now() - t._lastScanTimestamp),
                                      (a = 1e3 / t._maxScansPerSecond),
                                      (n.t0 = r < a),
                                      !n.t0)
                                    ) {
                                      n.next = 6;
                                      break;
                                    }
                                    return (
                                      (n.next = 6),
                                      new Promise(function (e) {
                                        return setTimeout(e, a - r);
                                      })
                                    );
                                  case 6:
                                    return (
                                      (t._lastScanTimestamp = Date.now()),
                                      (n.prev = 7),
                                      (n.next = 10),
                                      e.scanImage(t.$video, {
                                        scanRegion: t._scanRegion,
                                        qrEngine: t._qrEnginePromise,
                                        canvas: t.$canvas,
                                      })
                                    );
                                  case 10:
                                    (o = n.sent), (n.next = 18);
                                    break;
                                  case 13:
                                    if (
                                      ((n.prev = 13),
                                      (n.t1 = n.catch(7)),
                                      t._active)
                                    ) {
                                      n.next = 17;
                                      break;
                                    }
                                    return n.abrupt("return");
                                  case 17:
                                    t._onDecodeError(n.t1);
                                  case 18:
                                    if (
                                      ((n.t2 = !e._disableBarcodeDetector),
                                      n.t2)
                                    ) {
                                      n.next = 25;
                                      break;
                                    }
                                    return (n.next = 22), t._qrEnginePromise;
                                  case 22:
                                    (n.t3 = n.sent),
                                      (n.t4 = Worker),
                                      (n.t2 = n.t3 instanceof n.t4);
                                  case 25:
                                    if (((n.t5 = n.t2), n.t5)) {
                                      n.next = 28;
                                      break;
                                    }
                                    t._qrEnginePromise = e.createQrEngine();
                                  case 28:
                                    o
                                      ? (t._onDecode
                                          ? t._onDecode(o)
                                          : t._legacyOnDecode &&
                                            t._legacyOnDecode(o.data),
                                        t.$codeOutlineHighlight &&
                                          (clearTimeout(
                                            t._codeOutlineHighlightRemovalTimeout
                                          ),
                                          (t._codeOutlineHighlightRemovalTimeout =
                                            void 0),
                                          t.$codeOutlineHighlight.setAttribute(
                                            "viewBox",
                                            "".concat(
                                              t._scanRegion.x || 0,
                                              " "
                                            ) +
                                              "".concat(
                                                t._scanRegion.y || 0,
                                                " "
                                              ) +
                                              "".concat(
                                                t._scanRegion.width ||
                                                  t.$video.videoWidth,
                                                " "
                                              ) +
                                              "".concat(
                                                t._scanRegion.height ||
                                                  t.$video.videoHeight
                                              )
                                          ),
                                          t.$codeOutlineHighlight.firstElementChild.setAttribute(
                                            "points",
                                            o.cornerPoints
                                              .map(function (e) {
                                                var t = e.x,
                                                  n = e.y;
                                                return ""
                                                  .concat(t, ",")
                                                  .concat(n);
                                              })
                                              .join(" ")
                                          ),
                                          (t.$codeOutlineHighlight.style.display =
                                            "")))
                                      : t.$codeOutlineHighlight &&
                                        !t._codeOutlineHighlightRemovalTimeout &&
                                        (t._codeOutlineHighlightRemovalTimeout =
                                          setTimeout(function () {
                                            return (t.$codeOutlineHighlight.style.display =
                                              "none");
                                          }, 100));
                                  case 29:
                                    t._scanFrame();
                                  case 30:
                                  case "end":
                                    return n.stop();
                                }
                            },
                            n,
                            null,
                            [[7, 13]]
                          );
                        })
                      )
                    );
                },
              },
              {
                key: "_onDecodeError",
                value: function (t) {
                  t !== e.NO_QR_CODE_FOUND && console.log(t);
                },
              },
              {
                key: "_getCameraStream",
                value: (function () {
                  var e = Ye(
                    Ke().mark(function e() {
                      var t,
                        n,
                        r,
                        a,
                        o,
                        i,
                        l,
                        c,
                        s = this;
                      return Ke().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (navigator.mediaDevices) {
                                  e.next = 2;
                                  break;
                                }
                                throw "Camera not found.";
                              case 2:
                                (t = /^(environment|user)$/.test(
                                  this._preferredCamera
                                )
                                  ? "facingMode"
                                  : "deviceId"),
                                  (r = (n = [
                                    { width: { min: 1024 } },
                                    { width: { min: 768 } },
                                    {},
                                  ]).map(function (e) {
                                    return Object.assign(
                                      {},
                                      e,
                                      qe({}, t, { exact: s._preferredCamera })
                                    );
                                  })),
                                  (a = 0),
                                  (o = [].concat(u(r), n));
                              case 4:
                                if (!(a < o.length)) {
                                  e.next = 19;
                                  break;
                                }
                                return (
                                  (i = o[a]),
                                  (e.prev = 6),
                                  (e.next = 9),
                                  navigator.mediaDevices.getUserMedia({
                                    video: i,
                                    audio: !1,
                                  })
                                );
                              case 9:
                                return (
                                  (l = e.sent),
                                  (c =
                                    this._getFacingMode(l) ||
                                    (i.facingMode
                                      ? this._preferredCamera
                                      : "environment" === this._preferredCamera
                                      ? "user"
                                      : "environment")),
                                  e.abrupt("return", {
                                    stream: l,
                                    facingMode: c,
                                  })
                                );
                              case 14:
                                (e.prev = 14), (e.t0 = e.catch(6));
                              case 16:
                                a++, (e.next = 4);
                                break;
                              case 19:
                                throw "Camera not found.";
                              case 20:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[6, 14]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_restartVideoStream",
                value: (function () {
                  var e = Ye(
                    Ke().mark(function e() {
                      var t;
                      return Ke().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = this._paused),
                                  (e.next = 3),
                                  this.pause(!0)
                                );
                              case 3:
                                if (((e.t1 = e.sent), !e.t1)) {
                                  e.next = 6;
                                  break;
                                }
                                e.t1 = !t;
                              case 6:
                                if (((e.t0 = e.t1), !e.t0)) {
                                  e.next = 9;
                                  break;
                                }
                                e.t0 = this._active;
                              case 9:
                                if (((e.t2 = e.t0), !e.t2)) {
                                  e.next = 13;
                                  break;
                                }
                                return (e.next = 13), this.start();
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_setVideoMirror",
                value: function (e) {
                  this.$video.style.transform =
                    "scaleX(" + ("user" === e ? -1 : 1) + ")";
                },
              },
              {
                key: "_getFacingMode",
                value: function (e) {
                  return (e = e.getVideoTracks()[0])
                    ? /rear|back|environment/i.test(e.label)
                      ? "environment"
                      : /front|user|face/i.test(e.label)
                      ? "user"
                      : null
                    : null;
                },
              },
            ],
            [
              {
                key: "WORKER_PATH",
                set: function (e) {
                  console.warn(
                    "Setting QrScanner.WORKER_PATH is not required and not supported anymore. Have a look at the README for new setup instructions."
                  );
                },
              },
              {
                key: "hasCamera",
                value: (function () {
                  var t = Ye(
                    Ke().mark(function t() {
                      return Ke().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0), (t.next = 3), e.listCameras(!1)
                                );
                              case 3:
                                return t.abrupt("return", !!t.sent.length);
                              case 6:
                                return (
                                  (t.prev = 6),
                                  (t.t0 = t.catch(0)),
                                  t.abrupt("return", !1)
                                );
                              case 9:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 6]]
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "listCameras",
                value: (function () {
                  var t = Ye(
                    Ke().mark(function t() {
                      var n,
                        r,
                        a,
                        o = arguments;
                      return Ke().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((n =
                                    o.length > 0 && void 0 !== o[0] && o[0]),
                                  navigator.mediaDevices)
                                ) {
                                  t.next = 3;
                                  break;
                                }
                                return t.abrupt("return", []);
                              case 3:
                                if (
                                  ((r = (function () {
                                    var e = Ye(
                                      Ke().mark(function e() {
                                        return Ke().wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (e.next = 2),
                                                  navigator.mediaDevices.enumerateDevices()
                                                );
                                              case 2:
                                                return e.abrupt(
                                                  "return",
                                                  e.sent.filter(function (e) {
                                                    return (
                                                      "videoinput" === e.kind
                                                    );
                                                  })
                                                );
                                              case 3:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                      })
                                    );
                                    return function () {
                                      return e.apply(this, arguments);
                                    };
                                  })()),
                                  (t.prev = 4),
                                  (t.t0 = n),
                                  !t.t0)
                                ) {
                                  t.next = 10;
                                  break;
                                }
                                return (t.next = 9), r();
                              case 9:
                                t.t0 = t.sent.every(function (e) {
                                  return !e.label;
                                });
                              case 10:
                                if (((t.t1 = t.t0), !t.t1)) {
                                  t.next = 15;
                                  break;
                                }
                                return (
                                  (t.next = 14),
                                  navigator.mediaDevices.getUserMedia({
                                    audio: !1,
                                    video: !0,
                                  })
                                );
                              case 14:
                                a = t.sent;
                              case 15:
                                t.next = 19;
                                break;
                              case 17:
                                (t.prev = 17), (t.t2 = t.catch(4));
                              case 19:
                                return (t.prev = 19), (t.next = 22), r();
                              case 22:
                                return t.abrupt(
                                  "return",
                                  t.sent.map(function (e, t) {
                                    return {
                                      id: e.deviceId,
                                      label:
                                        e.label ||
                                        (0 === t
                                          ? "Default Camera"
                                          : "Camera ".concat(t + 1)),
                                    };
                                  })
                                );
                              case 23:
                                return (
                                  (t.prev = 23),
                                  a &&
                                    (console.warn(
                                      "Call listCameras after successfully starting a QR scanner to avoid creating a temporary video stream"
                                    ),
                                    e._stopVideoStream(a)),
                                  t.finish(23)
                                );
                              case 26:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [
                          [4, 17],
                          [19, , 23, 26],
                        ]
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "scanImage",
                value: (function () {
                  var t = Ye(
                    Ke().mark(function t(n, r, a, o) {
                      var i,
                        u,
                        c,
                        s,
                        f,
                        d,
                        p,
                        h,
                        v,
                        m,
                        y,
                        g,
                        b,
                        w = arguments;
                      return Ke().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (i = w.length > 4 && void 0 !== w[4] && w[4]),
                                  (u = w.length > 5 && void 0 !== w[5] && w[5]),
                                  (s = !1),
                                  r &&
                                  ("scanRegion" in r ||
                                    "qrEngine" in r ||
                                    "canvas" in r ||
                                    "disallowCanvasResizing" in r ||
                                    "alsoTryWithoutScanRegion" in r ||
                                    "returnDetailedScanResult" in r)
                                    ? ((c = r.scanRegion),
                                      (a = r.qrEngine),
                                      (o = r.canvas),
                                      (i = r.disallowCanvasResizing || !1),
                                      (u = r.alsoTryWithoutScanRegion || !1),
                                      (s = !0))
                                    : r || a || o || i || u
                                    ? console.warn(
                                        "You're using a deprecated api for scanImage which will be removed in the future."
                                      )
                                    : console.warn(
                                        "Note that the return type of scanImage will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."
                                      ),
                                  (r = !!a),
                                  (t.prev = 5),
                                  (t.next = 8),
                                  Promise.all([
                                    a || e.createQrEngine(),
                                    e._loadImage(n),
                                  ])
                                );
                              case 8:
                                if (
                                  ((p = t.sent),
                                  (h = l(p, 2)),
                                  (a = h[0]),
                                  (f = h[1]),
                                  (v = e._drawToCanvas(f, c, o, i)),
                                  (m = l(v, 2)),
                                  (o = m[0]),
                                  (d = m[1]),
                                  !(a instanceof Worker))
                                ) {
                                  t.next = 24;
                                  break;
                                }
                                return (
                                  (g = a),
                                  r ||
                                    e._postWorkerMessageSync(
                                      g,
                                      "inversionMode",
                                      "both"
                                    ),
                                  (t.next = 21),
                                  new Promise(function (t, n) {
                                    var r,
                                      a,
                                      i,
                                      l = -1;
                                    (a = function (o) {
                                      o.data.id === l &&
                                        (g.removeEventListener("message", a),
                                        g.removeEventListener("error", i),
                                        clearTimeout(r),
                                        null !== o.data.data
                                          ? t({
                                              data: o.data.data,
                                              cornerPoints: e._convertPoints(
                                                o.data.cornerPoints,
                                                c
                                              ),
                                            })
                                          : n(e.NO_QR_CODE_FOUND));
                                    }),
                                      (i = function (e) {
                                        g.removeEventListener("message", a),
                                          g.removeEventListener("error", i),
                                          clearTimeout(r),
                                          n(
                                            "Scanner error: " +
                                              (e
                                                ? e.message || e
                                                : "Unknown Error")
                                          );
                                      }),
                                      g.addEventListener("message", a),
                                      g.addEventListener("error", i),
                                      (r = setTimeout(function () {
                                        return i("timeout");
                                      }, 1e4));
                                    var u = d.getImageData(
                                      0,
                                      0,
                                      o.width,
                                      o.height
                                    );
                                    l = e._postWorkerMessageSync(
                                      g,
                                      "decode",
                                      u,
                                      [u.data.buffer]
                                    );
                                  })
                                );
                              case 21:
                                (y = t.sent), (t.next = 27);
                                break;
                              case 24:
                                return (
                                  (t.next = 26),
                                  Promise.race([
                                    new Promise(function (e, t) {
                                      return window.setTimeout(function () {
                                        return t("Scanner error: timeout");
                                      }, 1e4);
                                    }),
                                    Ye(
                                      Ke().mark(function t() {
                                        var r, s, f;
                                        return Ke().wrap(
                                          function (t) {
                                            for (;;)
                                              switch ((t.prev = t.next)) {
                                                case 0:
                                                  return (
                                                    (t.prev = 0),
                                                    (t.next = 3),
                                                    a.detect(o)
                                                  );
                                                case 3:
                                                  if (
                                                    ((r = t.sent),
                                                    (s = l(r, 1)),
                                                    (f = s[0]))
                                                  ) {
                                                    t.next = 8;
                                                    break;
                                                  }
                                                  throw e.NO_QR_CODE_FOUND;
                                                case 8:
                                                  return t.abrupt("return", {
                                                    data: f.rawValue,
                                                    cornerPoints:
                                                      e._convertPoints(
                                                        f.cornerPoints,
                                                        c
                                                      ),
                                                  });
                                                case 11:
                                                  if (
                                                    ((t.prev = 11),
                                                    (t.t0 = t.catch(0)),
                                                    (f = t.t0.message || t.t0),
                                                    !/not implemented|service unavailable/.test(
                                                      f
                                                    ))
                                                  ) {
                                                    t.next = 16;
                                                    break;
                                                  }
                                                  return t.abrupt(
                                                    "return",
                                                    ((e._disableBarcodeDetector =
                                                      !0),
                                                    e.scanImage(n, {
                                                      scanRegion: c,
                                                      canvas: o,
                                                      disallowCanvasResizing: i,
                                                      alsoTryWithoutScanRegion:
                                                        u,
                                                    }))
                                                  );
                                                case 16:
                                                  throw "Scanner error: ".concat(
                                                    f
                                                  );
                                                case 17:
                                                case "end":
                                                  return t.stop();
                                              }
                                          },
                                          t,
                                          null,
                                          [[0, 11]]
                                        );
                                      })
                                    )(),
                                  ])
                                );
                              case 26:
                                y = t.sent;
                              case 27:
                                return t.abrupt("return", s ? y : y.data);
                              case 30:
                                if (
                                  ((t.prev = 30), (t.t0 = t.catch(5)), c && u)
                                ) {
                                  t.next = 34;
                                  break;
                                }
                                throw t.t0;
                              case 34:
                                return (
                                  (t.next = 36),
                                  e.scanImage(n, {
                                    qrEngine: a,
                                    canvas: o,
                                    disallowCanvasResizing: i,
                                  })
                                );
                              case 36:
                                return (
                                  (b = t.sent),
                                  t.abrupt("return", s ? b : b.data)
                                );
                              case 38:
                                return (
                                  (t.prev = 38),
                                  r || e._postWorkerMessage(a, "close"),
                                  t.finish(38)
                                );
                              case 41:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[5, 30, 38, 41]]
                      );
                    })
                  );
                  return function (e, n, r, a) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "createQrEngine",
                value: (function () {
                  var t = Ye(
                    Ke().mark(function t(r) {
                      return Ke().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                (r &&
                                  console.warn(
                                    "Specifying a worker path is not required and not supported anymore."
                                  ),
                                (t.t0 =
                                  !e._disableBarcodeDetector &&
                                  "BarcodeDetector" in window &&
                                  BarcodeDetector.getSupportedFormats),
                                !t.t0)
                              ) {
                                t.next = 6;
                                break;
                              }
                              return (
                                (t.next = 5),
                                BarcodeDetector.getSupportedFormats()
                              );
                            case 5:
                              t.t0 = t.sent.includes("qr_code");
                            case 6:
                              if (!t.t0) {
                                t.next = 10;
                                break;
                              }
                              (t.t1 = new BarcodeDetector({
                                formats: ["qr_code"],
                              })),
                                (t.next = 11);
                              break;
                            case 10:
                              t.t1 = n
                                .e(684)
                                .then(n.bind(n, 684))
                                .then(function (e) {
                                  return e.createWorker();
                                });
                            case 11:
                              return t.abrupt("return", t.t1);
                            case 12:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_convertPoints",
                value: function (e, t) {
                  if (!t) return e;
                  var n = t.x || 0,
                    r = t.y || 0,
                    a =
                      t.width && t.downScaledWidth
                        ? t.width / t.downScaledWidth
                        : 1;
                  t =
                    t.height && t.downScaledHeight
                      ? t.height / t.downScaledHeight
                      : 1;
                  var o,
                    i = Qe(e);
                  try {
                    for (i.s(); !(o = i.n()).done; ) {
                      var l = o.value;
                      (l.x = l.x * a + n), (l.y = l.y * t + r);
                    }
                  } catch (u) {
                    i.e(u);
                  } finally {
                    i.f();
                  }
                  return e;
                },
              },
              {
                key: "_stopVideoStream",
                value: function (e) {
                  var t,
                    n = Qe(e.getTracks());
                  try {
                    for (n.s(); !(t = n.n()).done; ) {
                      var r = t.value;
                      r.stop(), e.removeTrack(r);
                    }
                  } catch (a) {
                    n.e(a);
                  } finally {
                    n.f();
                  }
                },
              },
              {
                key: "_drawToCanvas",
                value: function (e, t, n) {
                  var r =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                  n = n || document.createElement("canvas");
                  var a = t && t.x ? t.x : 0,
                    o = t && t.y ? t.y : 0,
                    i = t && t.width ? t.width : e.videoWidth || e.width,
                    l = t && t.height ? t.height : e.videoHeight || e.height;
                  return (
                    r ||
                      ((r = t && t.downScaledWidth ? t.downScaledWidth : i),
                      (t = t && t.downScaledHeight ? t.downScaledHeight : l),
                      n.width !== r && (n.width = r),
                      n.height !== t && (n.height = t)),
                    ((t = n.getContext("2d", {
                      alpha: !1,
                    })).imageSmoothingEnabled = !1),
                    t.drawImage(e, a, o, i, l, 0, 0, n.width, n.height),
                    [n, t]
                  );
                },
              },
              {
                key: "_loadImage",
                value: (function () {
                  var t = Ye(
                    Ke().mark(function t(n) {
                      var r;
                      return Ke().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!(n instanceof Image)) {
                                  t.next = 4;
                                  break;
                                }
                                return (t.next = 3), e._awaitImageLoad(n);
                              case 3:
                                return t.abrupt("return", n);
                              case 4:
                                if (
                                  !(
                                    n instanceof HTMLVideoElement ||
                                    n instanceof HTMLCanvasElement ||
                                    n instanceof SVGImageElement ||
                                    ("OffscreenCanvas" in window &&
                                      n instanceof OffscreenCanvas) ||
                                    ("ImageBitmap" in window &&
                                      n instanceof ImageBitmap)
                                  )
                                ) {
                                  t.next = 6;
                                  break;
                                }
                                return t.abrupt("return", n);
                              case 6:
                                if (
                                  !(
                                    n instanceof File ||
                                    n instanceof Blob ||
                                    n instanceof URL ||
                                    "string" === typeof n
                                  )
                                ) {
                                  t.next = 18;
                                  break;
                                }
                                return (
                                  ((r = new Image()).src =
                                    n instanceof File || n instanceof Blob
                                      ? URL.createObjectURL(n)
                                      : n.toString()),
                                  (t.prev = 9),
                                  (t.next = 12),
                                  e._awaitImageLoad(r)
                                );
                              case 12:
                                return t.abrupt("return", r);
                              case 13:
                                return (
                                  (t.prev = 13),
                                  (n instanceof File || n instanceof Blob) &&
                                    URL.revokeObjectURL(r.src),
                                  t.finish(13)
                                );
                              case 16:
                                t.next = 19;
                                break;
                              case 18:
                                throw "Unsupported image type.";
                              case 19:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[9, , 13, 16]]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_awaitImageLoad",
                value: (function () {
                  var e = Ye(
                    Ke().mark(function e(t) {
                      return Ke().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((e.t0 = t.complete && 0 !== t.naturalWidth),
                                e.t0)
                              ) {
                                e.next = 4;
                                break;
                              }
                              return (
                                (e.next = 4),
                                new Promise(function (e, n) {
                                  var r = function r(a) {
                                    t.removeEventListener("load", r),
                                      t.removeEventListener("error", r),
                                      a instanceof ErrorEvent
                                        ? n("Image load error")
                                        : e();
                                  };
                                  t.addEventListener("load", r),
                                    t.addEventListener("error", r);
                                })
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_postWorkerMessage",
                value: (function () {
                  var t = Ye(
                    Ke().mark(function t(n, r, a, o) {
                      return Ke().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.t0 = e), (t.next = 3), n;
                            case 3:
                              return (
                                (t.t1 = t.sent),
                                (t.t2 = r),
                                (t.t3 = a),
                                (t.t4 = o),
                                t.abrupt(
                                  "return",
                                  t.t0._postWorkerMessageSync.call(
                                    t.t0,
                                    t.t1,
                                    t.t2,
                                    t.t3,
                                    t.t4
                                  )
                                )
                              );
                            case 8:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function (e, n, r, a) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_postWorkerMessageSync",
                value: function (t, n, r, a) {
                  if (!(t instanceof Worker)) return -1;
                  var o = e._workerMessageId++;
                  return t.postMessage({ id: o, type: n, data: r }, a), o;
                },
              },
            ]
          ),
          e
        );
      })();
      (Ge.DEFAULT_CANVAS_SIZE = 400),
        (Ge.NO_QR_CODE_FOUND = "No QR code found"),
        (Ge._disableBarcodeDetector = !1),
        (Ge._workerMessageId = 0);
      var Ze = Ge,
        Je = "style_scan-qr-page__27xOM",
        et = function () {
          var e = (0, t.useRef)(),
            n = (0, t.useRef)(null),
            r = me(),
            a = l((0, t.useState)(""), 2),
            o = a[0],
            i = a[1],
            u = l((0, t.useState)(!0), 2),
            c = u[0],
            s = u[1];
          return (
            (0, t.useEffect)(function () {
              return (
                (n.current = new Ze(e.current, function (e) {
                  i(e);
                })),
                function () {
                  n.current.destroy(), (n.current = null);
                }
              );
            }, []),
            (0, t.useEffect)(
              function () {
                c ? n.current.start() : n.current.stop();
              },
              [c]
            ),
            (0, t.useEffect)(
              function () {
                o && (s(!1), r("/product/".concat(o)));
              },
              [o, r]
            ),
            (0, je.jsxs)("div", {
              className: "".concat(Je, " page"),
              children: [
                (0, je.jsx)(Ne, { children: "Scan QR" }),
                (0, je.jsx)("video", { ref: e }),
                (0, je.jsx)(Fe, {
                  onClick: function () {
                    r("/verifyproduct");
                  },
                  children: "Verify with Ref Id",
                }),
              ],
            })
          );
        },
        tt = function () {
          return (0, je.jsx)(Re, {
            children: (0, je.jsxs)(Ce, {
              children: [
                (0, je.jsx)(_e, {
                  path: "/verifyproduct",
                  element: (0, je.jsx)(Be, {}),
                }),
                (0, je.jsx)(_e, {
                  path: "/verifyproduct/scan",
                  element: (0, je.jsx)(et, {}),
                }),
                (0, je.jsx)(_e, {
                  path: "/product/:refId",
                  element: (0, je.jsx)(He, {}),
                }),
              ],
            }),
          });
        },
        nt = n(248),
        rt = n(327),
        at = n(164);
      var ot = function (e) {
          e();
        },
        it = function () {
          return ot;
        },
        lt = (0, t.createContext)(null);
      n(110), n(900);
      var ut = {
        notify: function () {},
        get: function () {
          return [];
        },
      };
      function ct(e, t) {
        var n,
          r = ut;
        function a() {
          i.onStateChange && i.onStateChange();
        }
        function o() {
          n ||
            ((n = t ? t.addNestedSub(a) : e.subscribe(a)),
            (r = (function () {
              var e = it(),
                t = null,
                n = null;
              return {
                clear: function () {
                  (t = null), (n = null);
                },
                notify: function () {
                  e(function () {
                    for (var e = t; e; ) e.callback(), (e = e.next);
                  });
                },
                get: function () {
                  for (var e = [], n = t; n; ) e.push(n), (n = n.next);
                  return e;
                },
                subscribe: function (e) {
                  var r = !0,
                    a = (n = { callback: e, next: null, prev: n });
                  return (
                    a.prev ? (a.prev.next = a) : (t = a),
                    function () {
                      r &&
                        null !== t &&
                        ((r = !1),
                        a.next ? (a.next.prev = a.prev) : (n = a.prev),
                        a.prev ? (a.prev.next = a.next) : (t = a.next));
                    }
                  );
                },
              };
            })()));
        }
        var i = {
          addNestedSub: function (e) {
            return o(), r.subscribe(e);
          },
          notifyNestedSubs: function () {
            r.notify();
          },
          handleChangeWrapper: a,
          isSubscribed: function () {
            return Boolean(n);
          },
          trySubscribe: o,
          tryUnsubscribe: function () {
            n && (n(), (n = void 0), r.clear(), (r = ut));
          },
          getListeners: function () {
            return r;
          },
        };
        return i;
      }
      var st = !(
        "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        "undefined" === typeof window.document.createElement
      )
        ? t.useLayoutEffect
        : t.useEffect;
      var ft = function (e) {
        var n = e.store,
          r = e.context,
          a = e.children,
          o = e.serverState,
          i = (0, t.useMemo)(
            function () {
              var e = ct(n);
              return {
                store: n,
                subscription: e,
                getServerState: o
                  ? function () {
                      return o;
                    }
                  : void 0,
              };
            },
            [n, o]
          ),
          l = (0, t.useMemo)(
            function () {
              return n.getState();
            },
            [n]
          );
        st(
          function () {
            var e = i.subscription;
            return (
              (e.onStateChange = e.notifyNestedSubs),
              e.trySubscribe(),
              l !== n.getState() && e.notifyNestedSubs(),
              function () {
                e.tryUnsubscribe(), (e.onStateChange = void 0);
              }
            );
          },
          [i, l]
        );
        var u = r || lt;
        return t.createElement(u.Provider, { value: i }, a);
      };
      var dt;
      function pt(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        throw Error(
          "[Immer] minified error nr: " +
            e +
            (n.length
              ? " " +
                n
                  .map(function (e) {
                    return "'" + e + "'";
                  })
                  .join(",")
              : "") +
            ". Find the full error at: https://bit.ly/3cXEKWf"
        );
      }
      function ht(e) {
        return !!e && !!e[rn];
      }
      function vt(e) {
        var t;
        return (
          !!e &&
          ((function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var n =
              Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return (
              n === Object ||
              ("function" == typeof n && Function.toString.call(n) === an)
            );
          })(e) ||
            Array.isArray(e) ||
            !!e[nn] ||
            !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[nn]) ||
            St(e) ||
            xt(e))
        );
      }
      function mt(e, t, n) {
        void 0 === n && (n = !1),
          0 === yt(e)
            ? (n ? Object.keys : on)(e).forEach(function (r) {
                (n && "symbol" == typeof r) || t(r, e[r], e);
              })
            : e.forEach(function (n, r) {
                return t(r, n, e);
              });
      }
      function yt(e) {
        var t = e[rn];
        return t
          ? t.i > 3
            ? t.i - 4
            : t.i
          : Array.isArray(e)
          ? 1
          : St(e)
          ? 2
          : xt(e)
          ? 3
          : 0;
      }
      function gt(e, t) {
        return 2 === yt(e)
          ? e.has(t)
          : Object.prototype.hasOwnProperty.call(e, t);
      }
      function bt(e, t) {
        return 2 === yt(e) ? e.get(t) : e[t];
      }
      function wt(e, t, n) {
        var r = yt(e);
        2 === r ? e.set(t, n) : 3 === r ? (e.delete(t), e.add(n)) : (e[t] = n);
      }
      function kt(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      }
      function St(e) {
        return Zt && e instanceof Map;
      }
      function xt(e) {
        return Jt && e instanceof Set;
      }
      function Et(e) {
        return e.o || e.t;
      }
      function _t(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        var t = ln(e);
        delete t[rn];
        for (var n = on(t), r = 0; r < n.length; r++) {
          var a = n[r],
            o = t[a];
          !1 === o.writable && ((o.writable = !0), (o.configurable = !0)),
            (o.get || o.set) &&
              (t[a] = {
                configurable: !0,
                writable: !0,
                enumerable: o.enumerable,
                value: e[a],
              });
        }
        return Object.create(Object.getPrototypeOf(e), t);
      }
      function At(e, t) {
        return (
          void 0 === t && (t = !1),
          Pt(e) ||
            ht(e) ||
            !vt(e) ||
            (yt(e) > 1 && (e.set = e.add = e.clear = e.delete = Ct),
            Object.freeze(e),
            t &&
              mt(
                e,
                function (e, t) {
                  return At(t, !0);
                },
                !0
              )),
          e
        );
      }
      function Ct() {
        pt(2);
      }
      function Pt(e) {
        return null == e || "object" != typeof e || Object.isFrozen(e);
      }
      function Ot(e) {
        var t = un[e];
        return t || pt(18, e), t;
      }
      function Rt(e, t) {
        un[e] || (un[e] = t);
      }
      function Tt() {
        return Yt;
      }
      function Mt(e, t) {
        t && (Ot("Patches"), (e.u = []), (e.s = []), (e.v = t));
      }
      function Lt(e) {
        jt(e), e.p.forEach(Dt), (e.p = null);
      }
      function jt(e) {
        e === Yt && (Yt = e.l);
      }
      function Nt(e) {
        return (Yt = { p: [], l: Yt, h: e, m: !0, _: 0 });
      }
      function Dt(e) {
        var t = e[rn];
        0 === t.i || 1 === t.i ? t.j() : (t.O = !0);
      }
      function It(e, t) {
        t._ = t.p.length;
        var n = t.p[0],
          r = void 0 !== e && e !== n;
        return (
          t.h.g || Ot("ES5").S(t, e, r),
          r
            ? (n[rn].P && (Lt(t), pt(4)),
              vt(e) && ((e = zt(t, e)), t.l || Ut(t, e)),
              t.u && Ot("Patches").M(n[rn].t, e, t.u, t.s))
            : (e = zt(t, n, [])),
          Lt(t),
          t.u && t.v(t.u, t.s),
          e !== tn ? e : void 0
        );
      }
      function zt(e, t, n) {
        if (Pt(t)) return t;
        var r = t[rn];
        if (!r)
          return (
            mt(
              t,
              function (a, o) {
                return Ft(e, r, t, a, o, n);
              },
              !0
            ),
            t
          );
        if (r.A !== e) return t;
        if (!r.P) return Ut(e, r.t, !0), r.t;
        if (!r.I) {
          (r.I = !0), r.A._--;
          var a = 4 === r.i || 5 === r.i ? (r.o = _t(r.k)) : r.o;
          mt(3 === r.i ? new Set(a) : a, function (t, o) {
            return Ft(e, r, a, t, o, n);
          }),
            Ut(e, a, !1),
            n && e.u && Ot("Patches").R(r, n, e.u, e.s);
        }
        return r.o;
      }
      function Ft(e, t, n, r, a, o) {
        if (ht(a)) {
          var i = zt(
            e,
            a,
            o && t && 3 !== t.i && !gt(t.D, r) ? o.concat(r) : void 0
          );
          if ((wt(n, r, i), !ht(i))) return;
          e.m = !1;
        }
        if (vt(a) && !Pt(a)) {
          if (!e.h.F && e._ < 1) return;
          zt(e, a), (t && t.A.l) || Ut(e, a);
        }
      }
      function Ut(e, t, n) {
        void 0 === n && (n = !1), e.h.F && e.m && At(t, n);
      }
      function $t(e, t) {
        var n = e[rn];
        return (n ? Et(n) : e)[t];
      }
      function Vt(e, t) {
        if (t in e)
          for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n);
          }
      }
      function Wt(e) {
        e.P || ((e.P = !0), e.l && Wt(e.l));
      }
      function Bt(e) {
        e.o || (e.o = _t(e.t));
      }
      function Ht(e, t, n) {
        var r = St(t)
          ? Ot("MapSet").N(t, n)
          : xt(t)
          ? Ot("MapSet").T(t, n)
          : e.g
          ? (function (e, t) {
              var n = Array.isArray(e),
                r = {
                  i: n ? 1 : 0,
                  A: t ? t.A : Tt(),
                  P: !1,
                  I: !1,
                  D: {},
                  l: t,
                  t: e,
                  k: null,
                  o: null,
                  j: null,
                  C: !1,
                },
                a = r,
                o = cn;
              n && ((a = [r]), (o = sn));
              var i = Proxy.revocable(a, o),
                l = i.revoke,
                u = i.proxy;
              return (r.k = u), (r.j = l), u;
            })(t, n)
          : Ot("ES5").J(t, n);
        return (n ? n.A : Tt()).p.push(r), r;
      }
      function Qt(e) {
        return (
          ht(e) || pt(22, e),
          (function e(t) {
            if (!vt(t)) return t;
            var n,
              r = t[rn],
              a = yt(t);
            if (r) {
              if (!r.P && (r.i < 4 || !Ot("ES5").K(r))) return r.t;
              (r.I = !0), (n = qt(t, a)), (r.I = !1);
            } else n = qt(t, a);
            return (
              mt(n, function (t, a) {
                (r && bt(r.t, t) === a) || wt(n, t, e(a));
              }),
              3 === a ? new Set(n) : n
            );
          })(e)
        );
      }
      function qt(e, t) {
        switch (t) {
          case 2:
            return new Map(e);
          case 3:
            return Array.from(e);
        }
        return _t(e);
      }
      function Kt() {
        function e(e, t) {
          var n = a[e];
          return (
            n
              ? (n.enumerable = t)
              : (a[e] = n =
                  {
                    configurable: !0,
                    enumerable: t,
                    get: function () {
                      var t = this[rn];
                      return cn.get(t, e);
                    },
                    set: function (t) {
                      var n = this[rn];
                      cn.set(n, e, t);
                    },
                  }),
            n
          );
        }
        function t(e) {
          for (var t = e.length - 1; t >= 0; t--) {
            var a = e[t][rn];
            if (!a.P)
              switch (a.i) {
                case 5:
                  r(a) && Wt(a);
                  break;
                case 4:
                  n(a) && Wt(a);
              }
          }
        }
        function n(e) {
          for (var t = e.t, n = e.k, r = on(n), a = r.length - 1; a >= 0; a--) {
            var o = r[a];
            if (o !== rn) {
              var i = t[o];
              if (void 0 === i && !gt(t, o)) return !0;
              var l = n[o],
                u = l && l[rn];
              if (u ? u.t !== i : !kt(l, i)) return !0;
            }
          }
          var c = !!t[rn];
          return r.length !== on(t).length + (c ? 0 : 1);
        }
        function r(e) {
          var t = e.k;
          if (t.length !== e.t.length) return !0;
          var n = Object.getOwnPropertyDescriptor(t, t.length - 1);
          if (n && !n.get) return !0;
          for (var r = 0; r < t.length; r++)
            if (!t.hasOwnProperty(r)) return !0;
          return !1;
        }
        var a = {};
        Rt("ES5", {
          J: function (t, n) {
            var r = Array.isArray(t),
              a = (function (t, n) {
                if (t) {
                  for (var r = Array(n.length), a = 0; a < n.length; a++)
                    Object.defineProperty(r, "" + a, e(a, !0));
                  return r;
                }
                var o = ln(n);
                delete o[rn];
                for (var i = on(o), l = 0; l < i.length; l++) {
                  var u = i[l];
                  o[u] = e(u, t || !!o[u].enumerable);
                }
                return Object.create(Object.getPrototypeOf(n), o);
              })(r, t),
              o = {
                i: r ? 5 : 4,
                A: n ? n.A : Tt(),
                P: !1,
                I: !1,
                D: {},
                l: n,
                t: t,
                k: a,
                o: null,
                O: !1,
                C: !1,
              };
            return Object.defineProperty(a, rn, { value: o, writable: !0 }), a;
          },
          S: function (e, n, a) {
            a
              ? ht(n) && n[rn].A === e && t(e.p)
              : (e.u &&
                  (function e(t) {
                    if (t && "object" == typeof t) {
                      var n = t[rn];
                      if (n) {
                        var a = n.t,
                          o = n.k,
                          i = n.D,
                          l = n.i;
                        if (4 === l)
                          mt(o, function (t) {
                            t !== rn &&
                              (void 0 !== a[t] || gt(a, t)
                                ? i[t] || e(o[t])
                                : ((i[t] = !0), Wt(n)));
                          }),
                            mt(a, function (e) {
                              void 0 !== o[e] ||
                                gt(o, e) ||
                                ((i[e] = !1), Wt(n));
                            });
                        else if (5 === l) {
                          if (
                            (r(n) && (Wt(n), (i.length = !0)),
                            o.length < a.length)
                          )
                            for (var u = o.length; u < a.length; u++) i[u] = !1;
                          else
                            for (var c = a.length; c < o.length; c++) i[c] = !0;
                          for (
                            var s = Math.min(o.length, a.length), f = 0;
                            f < s;
                            f++
                          )
                            o.hasOwnProperty(f) || (i[f] = !0),
                              void 0 === i[f] && e(o[f]);
                        }
                      }
                    }
                  })(e.p[0]),
                t(e.p));
          },
          K: function (e) {
            return 4 === e.i ? n(e) : r(e);
          },
        });
      }
      !(function (e) {
        e;
      })(rt.useSyncExternalStoreWithSelector),
        (function (e) {
          e;
        })(nt.useSyncExternalStore),
        (dt = at.unstable_batchedUpdates),
        (ot = dt);
      var Xt,
        Yt,
        Gt = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
        Zt = "undefined" != typeof Map,
        Jt = "undefined" != typeof Set,
        en =
          "undefined" != typeof Proxy &&
          void 0 !== Proxy.revocable &&
          "undefined" != typeof Reflect,
        tn = Gt
          ? Symbol.for("immer-nothing")
          : (((Xt = {})["immer-nothing"] = !0), Xt),
        nn = Gt ? Symbol.for("immer-draftable") : "__$immer_draftable",
        rn = Gt ? Symbol.for("immer-state") : "__$immer_state",
        an =
          ("undefined" != typeof Symbol && Symbol.iterator,
          "" + Object.prototype.constructor),
        on =
          "undefined" != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e)
                );
              }
            : Object.getOwnPropertyNames,
        ln =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            var t = {};
            return (
              on(e).forEach(function (n) {
                t[n] = Object.getOwnPropertyDescriptor(e, n);
              }),
              t
            );
          },
        un = {},
        cn = {
          get: function (e, t) {
            if (t === rn) return e;
            var n = Et(e);
            if (!gt(n, t))
              return (function (e, t, n) {
                var r,
                  a = Vt(t, n);
                return a
                  ? "value" in a
                    ? a.value
                    : null === (r = a.get) || void 0 === r
                    ? void 0
                    : r.call(e.k)
                  : void 0;
              })(e, n, t);
            var r = n[t];
            return e.I || !vt(r)
              ? r
              : r === $t(e.t, t)
              ? (Bt(e), (e.o[t] = Ht(e.A.h, r, e)))
              : r;
          },
          has: function (e, t) {
            return t in Et(e);
          },
          ownKeys: function (e) {
            return Reflect.ownKeys(Et(e));
          },
          set: function (e, t, n) {
            var r = Vt(Et(e), t);
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
              var a = $t(Et(e), t),
                o = null == a ? void 0 : a[rn];
              if (o && o.t === n) return (e.o[t] = n), (e.D[t] = !1), !0;
              if (kt(n, a) && (void 0 !== n || gt(e.t, t))) return !0;
              Bt(e), Wt(e);
            }
            return (
              (e.o[t] === n &&
                "number" != typeof n &&
                (void 0 !== n || t in e.o)) ||
              ((e.o[t] = n), (e.D[t] = !0), !0)
            );
          },
          deleteProperty: function (e, t) {
            return (
              void 0 !== $t(e.t, t) || t in e.t
                ? ((e.D[t] = !1), Bt(e), Wt(e))
                : delete e.D[t],
              e.o && delete e.o[t],
              !0
            );
          },
          getOwnPropertyDescriptor: function (e, t) {
            var n = Et(e),
              r = Reflect.getOwnPropertyDescriptor(n, t);
            return r
              ? {
                  writable: !0,
                  configurable: 1 !== e.i || "length" !== t,
                  enumerable: r.enumerable,
                  value: n[t],
                }
              : r;
          },
          defineProperty: function () {
            pt(11);
          },
          getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
          },
          setPrototypeOf: function () {
            pt(12);
          },
        },
        sn = {};
      mt(cn, function (e, t) {
        sn[e] = function () {
          return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
        };
      }),
        (sn.deleteProperty = function (e, t) {
          return sn.set.call(this, e, t, void 0);
        }),
        (sn.set = function (e, t, n) {
          return cn.set.call(this, e[0], t, n, e[0]);
        });
      var fn = (function () {
          function e(e) {
            var t = this;
            (this.g = en),
              (this.F = !0),
              (this.produce = function (e, n, r) {
                if ("function" == typeof e && "function" != typeof n) {
                  var a = n;
                  n = e;
                  var o = t;
                  return function (e) {
                    var t = this;
                    void 0 === e && (e = a);
                    for (
                      var r = arguments.length,
                        i = Array(r > 1 ? r - 1 : 0),
                        l = 1;
                      l < r;
                      l++
                    )
                      i[l - 1] = arguments[l];
                    return o.produce(e, function (e) {
                      var r;
                      return (r = n).call.apply(r, [t, e].concat(i));
                    });
                  };
                }
                var i;
                if (
                  ("function" != typeof n && pt(6),
                  void 0 !== r && "function" != typeof r && pt(7),
                  vt(e))
                ) {
                  var l = Nt(t),
                    u = Ht(t, e, void 0),
                    c = !0;
                  try {
                    (i = n(u)), (c = !1);
                  } finally {
                    c ? Lt(l) : jt(l);
                  }
                  return "undefined" != typeof Promise && i instanceof Promise
                    ? i.then(
                        function (e) {
                          return Mt(l, r), It(e, l);
                        },
                        function (e) {
                          throw (Lt(l), e);
                        }
                      )
                    : (Mt(l, r), It(i, l));
                }
                if (!e || "object" != typeof e) {
                  if (
                    (void 0 === (i = n(e)) && (i = e),
                    i === tn && (i = void 0),
                    t.F && At(i, !0),
                    r)
                  ) {
                    var s = [],
                      f = [];
                    Ot("Patches").M(e, i, s, f), r(s, f);
                  }
                  return i;
                }
                pt(21, e);
              }),
              (this.produceWithPatches = function (e, n) {
                if ("function" == typeof e)
                  return function (n) {
                    for (
                      var r = arguments.length,
                        a = Array(r > 1 ? r - 1 : 0),
                        o = 1;
                      o < r;
                      o++
                    )
                      a[o - 1] = arguments[o];
                    return t.produceWithPatches(n, function (t) {
                      return e.apply(void 0, [t].concat(a));
                    });
                  };
                var r,
                  a,
                  o = t.produce(e, n, function (e, t) {
                    (r = e), (a = t);
                  });
                return "undefined" != typeof Promise && o instanceof Promise
                  ? o.then(function (e) {
                      return [e, r, a];
                    })
                  : [o, r, a];
              }),
              "boolean" == typeof (null == e ? void 0 : e.useProxies) &&
                this.setUseProxies(e.useProxies),
              "boolean" == typeof (null == e ? void 0 : e.autoFreeze) &&
                this.setAutoFreeze(e.autoFreeze);
          }
          var t = e.prototype;
          return (
            (t.createDraft = function (e) {
              vt(e) || pt(8), ht(e) && (e = Qt(e));
              var t = Nt(this),
                n = Ht(this, e, void 0);
              return (n[rn].C = !0), jt(t), n;
            }),
            (t.finishDraft = function (e, t) {
              var n = (e && e[rn]).A;
              return Mt(n, t), It(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
              this.F = e;
            }),
            (t.setUseProxies = function (e) {
              e && !en && pt(20), (this.g = e);
            }),
            (t.applyPatches = function (e, t) {
              var n;
              for (n = t.length - 1; n >= 0; n--) {
                var r = t[n];
                if (0 === r.path.length && "replace" === r.op) {
                  e = r.value;
                  break;
                }
              }
              n > -1 && (t = t.slice(n + 1));
              var a = Ot("Patches").$;
              return ht(e)
                ? a(e, t)
                : this.produce(e, function (e) {
                    return a(e, t);
                  });
            }),
            e
          );
        })(),
        dn = new fn(),
        pn = dn.produce,
        hn =
          (dn.produceWithPatches.bind(dn),
          dn.setAutoFreeze.bind(dn),
          dn.setUseProxies.bind(dn),
          dn.applyPatches.bind(dn),
          dn.createDraft.bind(dn),
          dn.finishDraft.bind(dn),
          pn);
      function vn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function mn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? vn(Object(n), !0).forEach(function (t) {
                qe(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : vn(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function yn(e) {
        return (
          "Minified Redux error #" +
          e +
          "; visit https://redux.js.org/Errors?code=" +
          e +
          " for the full message or use the non-minified dev environment for full errors. "
        );
      }
      var gn =
          ("function" === typeof Symbol && Symbol.observable) || "@@observable",
        bn = function () {
          return Math.random().toString(36).substring(7).split("").join(".");
        },
        wn = {
          INIT: "@@redux/INIT" + bn(),
          REPLACE: "@@redux/REPLACE" + bn(),
          PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + bn();
          },
        };
      function kn(e) {
        if ("object" !== typeof e || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t); )
          t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }
      function Sn(e, t, n) {
        var r;
        if (
          ("function" === typeof t && "function" === typeof n) ||
          ("function" === typeof n && "function" === typeof arguments[3])
        )
          throw new Error(yn(0));
        if (
          ("function" === typeof t &&
            "undefined" === typeof n &&
            ((n = t), (t = void 0)),
          "undefined" !== typeof n)
        ) {
          if ("function" !== typeof n) throw new Error(yn(1));
          return n(Sn)(e, t);
        }
        if ("function" !== typeof e) throw new Error(yn(2));
        var a = e,
          o = t,
          i = [],
          l = i,
          u = !1;
        function c() {
          l === i && (l = i.slice());
        }
        function s() {
          if (u) throw new Error(yn(3));
          return o;
        }
        function f(e) {
          if ("function" !== typeof e) throw new Error(yn(4));
          if (u) throw new Error(yn(5));
          var t = !0;
          return (
            c(),
            l.push(e),
            function () {
              if (t) {
                if (u) throw new Error(yn(6));
                (t = !1), c();
                var n = l.indexOf(e);
                l.splice(n, 1), (i = null);
              }
            }
          );
        }
        function d(e) {
          if (!kn(e)) throw new Error(yn(7));
          if ("undefined" === typeof e.type) throw new Error(yn(8));
          if (u) throw new Error(yn(9));
          try {
            (u = !0), (o = a(o, e));
          } finally {
            u = !1;
          }
          for (var t = (i = l), n = 0; n < t.length; n++) {
            (0, t[n])();
          }
          return e;
        }
        function p(e) {
          if ("function" !== typeof e) throw new Error(yn(10));
          (a = e), d({ type: wn.REPLACE });
        }
        function h() {
          var e,
            t = f;
          return (
            ((e = {
              subscribe: function (e) {
                if ("object" !== typeof e || null === e)
                  throw new Error(yn(11));
                function n() {
                  e.next && e.next(s());
                }
                return n(), { unsubscribe: t(n) };
              },
            })[gn] = function () {
              return this;
            }),
            e
          );
        }
        return (
          d({ type: wn.INIT }),
          ((r = { dispatch: d, subscribe: f, getState: s, replaceReducer: p })[
            gn
          ] = h),
          r
        );
      }
      function xn(e) {
        for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
          var a = t[r];
          0, "function" === typeof e[a] && (n[a] = e[a]);
        }
        var o,
          i = Object.keys(n);
        try {
          !(function (e) {
            Object.keys(e).forEach(function (t) {
              var n = e[t];
              if ("undefined" === typeof n(void 0, { type: wn.INIT }))
                throw new Error(yn(12));
              if (
                "undefined" ===
                typeof n(void 0, { type: wn.PROBE_UNKNOWN_ACTION() })
              )
                throw new Error(yn(13));
            });
          })(n);
        } catch (Ge) {
          o = Ge;
        }
        return function (e, t) {
          if ((void 0 === e && (e = {}), o)) throw o;
          for (var r = !1, a = {}, l = 0; l < i.length; l++) {
            var u = i[l],
              c = n[u],
              s = e[u],
              f = c(s, t);
            if ("undefined" === typeof f) {
              t && t.type;
              throw new Error(yn(14));
            }
            (a[u] = f), (r = r || f !== s);
          }
          return (r = r || i.length !== Object.keys(e).length) ? a : e;
        };
      }
      function En() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return 0 === t.length
          ? function (e) {
              return e;
            }
          : 1 === t.length
          ? t[0]
          : t.reduce(function (e, t) {
              return function () {
                return e(t.apply(void 0, arguments));
              };
            });
      }
      function _n() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function (e) {
          return function () {
            var n = e.apply(void 0, arguments),
              r = function () {
                throw new Error(yn(15));
              },
              a = {
                getState: n.getState,
                dispatch: function () {
                  return r.apply(void 0, arguments);
                },
              },
              o = t.map(function (e) {
                return e(a);
              });
            return (
              (r = En.apply(void 0, o)(n.dispatch)),
              mn(mn({}, n), {}, { dispatch: r })
            );
          };
        };
      }
      function An(e) {
        return function (t) {
          var n = t.dispatch,
            r = t.getState;
          return function (t) {
            return function (a) {
              return "function" === typeof a ? a(n, r, e) : t(a);
            };
          };
        };
      }
      var Cn = An();
      Cn.withExtraArgument = An;
      var Pn = Cn,
        On = (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null"
              );
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })(),
        Rn = function (e, t) {
          var n,
            r,
            a,
            o,
            i = {
              label: 0,
              sent: function () {
                if (1 & a[0]) throw a[1];
                return a[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: l(0), throw: l(1), return: l(2) }),
            "function" === typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function l(o) {
            return function (l) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (a =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((a = r.return) && a.call(r), 0)
                            : r.next) &&
                        !(a = a.call(r, o[1])).done)
                    )
                      return a;
                    switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                      case 0:
                      case 1:
                        a = o;
                        break;
                      case 4:
                        return i.label++, { value: o[1], done: !1 };
                      case 5:
                        i.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !(a = (a = i.trys).length > 0 && a[a.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!a || (o[1] > a[0] && o[1] < a[3]))
                        ) {
                          i.label = o[1];
                          break;
                        }
                        if (6 === o[0] && i.label < a[1]) {
                          (i.label = a[1]), (a = o);
                          break;
                        }
                        if (a && i.label < a[2]) {
                          (i.label = a[2]), i.ops.push(o);
                          break;
                        }
                        a[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    o = t.call(e, i);
                  } catch (Ge) {
                    (o = [6, Ge]), (r = 0);
                  } finally {
                    n = a = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, l]);
            };
          }
        },
        Tn = function (e, t) {
          for (var n = 0, r = t.length, a = e.length; n < r; n++, a++)
            e[a] = t[n];
          return e;
        },
        Mn = Object.defineProperty,
        Ln = Object.defineProperties,
        jn = Object.getOwnPropertyDescriptors,
        Nn = Object.getOwnPropertySymbols,
        Dn = Object.prototype.hasOwnProperty,
        In = Object.prototype.propertyIsEnumerable,
        zn = function (e, t, n) {
          return t in e
            ? Mn(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
        },
        Fn = function (e, t) {
          for (var n in t || (t = {})) Dn.call(t, n) && zn(e, n, t[n]);
          if (Nn)
            for (var r = 0, a = Nn(t); r < a.length; r++) {
              n = a[r];
              In.call(t, n) && zn(e, n, t[n]);
            }
          return e;
        },
        Un = function (e, t) {
          return Ln(e, jn(t));
        },
        $n = function (e, t, n) {
          return new Promise(function (r, a) {
            var o = function (e) {
                try {
                  l(n.next(e));
                } catch (Ge) {
                  a(Ge);
                }
              },
              i = function (e) {
                try {
                  l(n.throw(e));
                } catch (Ge) {
                  a(Ge);
                }
              },
              l = function (e) {
                return e.done
                  ? r(e.value)
                  : Promise.resolve(e.value).then(o, i);
              };
            l((n = n.apply(e, t)).next());
          });
        },
        Vn =
          "undefined" !== typeof window &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : function () {
                if (0 !== arguments.length)
                  return "object" === typeof arguments[0]
                    ? En
                    : En.apply(null, arguments);
              };
      "undefined" !== typeof window &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__;
      function Wn(e) {
        if ("object" !== typeof e || null === e) return !1;
        var t = Object.getPrototypeOf(e);
        if (null === t) return !0;
        for (var n = t; null !== Object.getPrototypeOf(n); )
          n = Object.getPrototypeOf(n);
        return t === n;
      }
      var Bn = (function (e) {
        function t() {
          for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          var a = e.apply(this, n) || this;
          return Object.setPrototypeOf(a, t.prototype), a;
        }
        return (
          On(t, e),
          Object.defineProperty(t, Symbol.species, {
            get: function () {
              return t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.concat = function () {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            return e.prototype.concat.apply(this, t);
          }),
          (t.prototype.prepend = function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            return 1 === e.length && Array.isArray(e[0])
              ? new (t.bind.apply(t, Tn([void 0], e[0].concat(this))))()
              : new (t.bind.apply(t, Tn([void 0], e.concat(this))))();
          }),
          t
        );
      })(Array);
      function Hn(e) {
        return vt(e) ? hn(e, function () {}) : e;
      }
      function Qn() {
        return function (e) {
          return (function (e) {
            void 0 === e && (e = {});
            var t = e.thunk,
              n = void 0 === t || t,
              r = (e.immutableCheck, e.serializableCheck, new Bn());
            n &&
              (!(function (e) {
                return "boolean" === typeof e;
              })(n)
                ? r.push(Pn.withExtraArgument(n.extraArgument))
                : r.push(Pn));
            0;
            return r;
          })(e);
        };
      }
      function qn(e, t) {
        function n() {
          for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          if (t) {
            var a = t.apply(void 0, n);
            if (!a) throw new Error("prepareAction did not return an object");
            return Fn(
              Fn(
                { type: e, payload: a.payload },
                "meta" in a && { meta: a.meta }
              ),
              "error" in a && { error: a.error }
            );
          }
          return { type: e, payload: n[0] };
        }
        return (
          (n.toString = function () {
            return "" + e;
          }),
          (n.type = e),
          (n.match = function (t) {
            return t.type === e;
          }),
          n
        );
      }
      function Kn(e) {
        var t,
          n = {},
          r = [],
          a = {
            addCase: function (e, t) {
              var r = "string" === typeof e ? e : e.type;
              if (r in n)
                throw new Error(
                  "addCase cannot be called with two reducers for the same action type"
                );
              return (n[r] = t), a;
            },
            addMatcher: function (e, t) {
              return r.push({ matcher: e, reducer: t }), a;
            },
            addDefaultCase: function (e) {
              return (t = e), a;
            },
          };
        return e(a), [n, r, t];
      }
      var Xn = function (e) {
          void 0 === e && (e = 21);
          for (var t = "", n = e; n--; )
            t +=
              "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[
                (64 * Math.random()) | 0
              ];
          return t;
        },
        Yn = ["name", "message", "stack", "code"],
        Gn = function (e, t) {
          (this.payload = e), (this.meta = t);
        },
        Zn = function (e, t) {
          (this.payload = e), (this.meta = t);
        },
        Jn = function (e) {
          if ("object" === typeof e && null !== e) {
            for (var t = {}, n = 0, r = Yn; n < r.length; n++) {
              var a = r[n];
              "string" === typeof e[a] && (t[a] = e[a]);
            }
            return t;
          }
          return { message: String(e) };
        };
      !(function () {
        function e(e, t, n) {
          var r = qn(e + "/fulfilled", function (e, t, n, r) {
              return {
                payload: e,
                meta: Un(Fn({}, r || {}), {
                  arg: n,
                  requestId: t,
                  requestStatus: "fulfilled",
                }),
              };
            }),
            a = qn(e + "/pending", function (e, t, n) {
              return {
                payload: void 0,
                meta: Un(Fn({}, n || {}), {
                  arg: t,
                  requestId: e,
                  requestStatus: "pending",
                }),
              };
            }),
            o = qn(e + "/rejected", function (e, t, r, a, o) {
              return {
                payload: a,
                error: ((n && n.serializeError) || Jn)(e || "Rejected"),
                meta: Un(Fn({}, o || {}), {
                  arg: r,
                  requestId: t,
                  rejectedWithValue: !!a,
                  requestStatus: "rejected",
                  aborted: "AbortError" === (null == e ? void 0 : e.name),
                  condition: "ConditionError" === (null == e ? void 0 : e.name),
                }),
              };
            }),
            i =
              "undefined" !== typeof AbortController
                ? AbortController
                : (function () {
                    function e() {
                      this.signal = {
                        aborted: !1,
                        addEventListener: function () {},
                        dispatchEvent: function () {
                          return !1;
                        },
                        onabort: function () {},
                        removeEventListener: function () {},
                        reason: void 0,
                        throwIfAborted: function () {},
                      };
                    }
                    return (
                      (e.prototype.abort = function () {
                        0;
                      }),
                      e
                    );
                  })();
          return Object.assign(
            function (e) {
              return function (l, u, c) {
                var s,
                  f = (null == n ? void 0 : n.idGenerator)
                    ? n.idGenerator(e)
                    : Xn(),
                  d = new i(),
                  p = new Promise(function (e, t) {
                    return d.signal.addEventListener("abort", function () {
                      return t({ name: "AbortError", message: s || "Aborted" });
                    });
                  }),
                  h = !1;
                function v(e) {
                  h && ((s = e), d.abort());
                }
                var m = (function () {
                  return $n(this, null, function () {
                    var i, s, m, y, g;
                    return Rn(this, function (b) {
                      switch (b.label) {
                        case 0:
                          return (
                            b.trys.push([0, 4, , 5]),
                            (y =
                              null == (i = null == n ? void 0 : n.condition)
                                ? void 0
                                : i.call(n, e, { getState: u, extra: c })),
                            null === (w = y) ||
                            "object" !== typeof w ||
                            "function" !== typeof w.then
                              ? [3, 2]
                              : [4, y]
                          );
                        case 1:
                          (y = b.sent()), (b.label = 2);
                        case 2:
                          if (!1 === y)
                            throw {
                              name: "ConditionError",
                              message:
                                "Aborted due to condition callback returning false.",
                            };
                          return (
                            (h = !0),
                            l(
                              a(
                                f,
                                e,
                                null ==
                                  (s = null == n ? void 0 : n.getPendingMeta)
                                  ? void 0
                                  : s.call(
                                      n,
                                      { requestId: f, arg: e },
                                      { getState: u, extra: c }
                                    )
                              )
                            ),
                            [
                              4,
                              Promise.race([
                                p,
                                Promise.resolve(
                                  t(e, {
                                    dispatch: l,
                                    getState: u,
                                    extra: c,
                                    requestId: f,
                                    signal: d.signal,
                                    abort: v,
                                    rejectWithValue: function (e, t) {
                                      return new Gn(e, t);
                                    },
                                    fulfillWithValue: function (e, t) {
                                      return new Zn(e, t);
                                    },
                                  })
                                ).then(function (t) {
                                  if (t instanceof Gn) throw t;
                                  return t instanceof Zn
                                    ? r(t.payload, f, e, t.meta)
                                    : r(t, f, e);
                                }),
                              ]),
                            ]
                          );
                        case 3:
                          return (m = b.sent()), [3, 5];
                        case 4:
                          return (
                            (g = b.sent()),
                            (m =
                              g instanceof Gn
                                ? o(null, f, e, g.payload, g.meta)
                                : o(g, f, e)),
                            [3, 5]
                          );
                        case 5:
                          return (
                            (n &&
                              !n.dispatchConditionRejection &&
                              o.match(m) &&
                              m.meta.condition) ||
                              l(m),
                            [2, m]
                          );
                      }
                      var w;
                    });
                  });
                })();
                return Object.assign(m, {
                  abort: v,
                  requestId: f,
                  arg: e,
                  unwrap: function () {
                    return m.then(er);
                  },
                });
              };
            },
            { pending: a, rejected: o, fulfilled: r, typePrefix: e }
          );
        }
        e.withTypes = e;
      })();
      function er(e) {
        if (e.meta && e.meta.rejectedWithValue) throw e.payload;
        if (e.error) throw e.error;
        return e.payload;
      }
      Object.assign;
      var tr = "listenerMiddleware";
      qn(tr + "/add"), qn(tr + "/removeAll"), qn(tr + "/remove");
      var nr;
      "function" === typeof queueMicrotask &&
        queueMicrotask.bind("undefined" !== typeof window ? window : n.g);
      Kt();
      var rr = (function (e) {
          var t = e.name;
          if (!t)
            throw new Error("`name` is a required option for createSlice");
          var n,
            r =
              "function" == typeof e.initialState
                ? e.initialState
                : Hn(e.initialState),
            a = e.reducers || {},
            o = Object.keys(a),
            i = {},
            l = {},
            u = {};
          function c() {
            var t =
                "function" === typeof e.extraReducers
                  ? Kn(e.extraReducers)
                  : [e.extraReducers],
              n = t[0],
              a = void 0 === n ? {} : n,
              o = t[1],
              i = void 0 === o ? [] : o,
              u = t[2],
              c = void 0 === u ? void 0 : u,
              s = Fn(Fn({}, a), l);
            return (function (e, t, n, r) {
              void 0 === n && (n = []);
              var a,
                o = "function" === typeof t ? Kn(t) : [t, n, r],
                i = o[0],
                l = o[1],
                u = o[2];
              if (
                (function (e) {
                  return "function" === typeof e;
                })(e)
              )
                a = function () {
                  return Hn(e());
                };
              else {
                var c = Hn(e);
                a = function () {
                  return c;
                };
              }
              function s(e, t) {
                void 0 === e && (e = a());
                var n = Tn(
                  [i[t.type]],
                  l
                    .filter(function (e) {
                      return (0, e.matcher)(t);
                    })
                    .map(function (e) {
                      return e.reducer;
                    })
                );
                return (
                  0 ===
                    n.filter(function (e) {
                      return !!e;
                    }).length && (n = [u]),
                  n.reduce(function (e, n) {
                    if (n) {
                      var r;
                      if (ht(e)) return void 0 === (r = n(e, t)) ? e : r;
                      if (vt(e))
                        return hn(e, function (e) {
                          return n(e, t);
                        });
                      if (void 0 === (r = n(e, t))) {
                        if (null === e) return e;
                        throw Error(
                          "A case reducer on a non-draftable value must not return undefined"
                        );
                      }
                      return r;
                    }
                    return e;
                  }, e)
                );
              }
              return (s.getInitialState = a), s;
            })(r, function (e) {
              for (var t in s) e.addCase(t, s[t]);
              for (var n = 0, r = i; n < r.length; n++) {
                var a = r[n];
                e.addMatcher(a.matcher, a.reducer);
              }
              c && e.addDefaultCase(c);
            });
          }
          return (
            o.forEach(function (e) {
              var n,
                r,
                o = a[e],
                c = t + "/" + e;
              "reducer" in o ? ((n = o.reducer), (r = o.prepare)) : (n = o),
                (i[e] = n),
                (l[c] = n),
                (u[e] = r ? qn(c, r) : qn(c));
            }),
            {
              name: t,
              reducer: function (e, t) {
                return n || (n = c()), n(e, t);
              },
              actions: u,
              caseReducers: i,
              getInitialState: function () {
                return n || (n = c()), n.getInitialState();
              },
            }
          );
        })({
          name: "user",
          initialState: { name: "", authenticated: !1, role: "user" },
          reducers: {
            setProfile: function (e, t) {
              (e.name = t.payload.name),
                (e.authenticated = t.payload.authenticated),
                (e.role = t.payload.role);
            },
          },
        }),
        ar =
          (rr.actions,
          (function (e) {
            var t,
              n = Qn(),
              r = e || {},
              a = r.reducer,
              o = void 0 === a ? void 0 : a,
              i = r.middleware,
              l = void 0 === i ? n() : i,
              u = r.devTools,
              c = void 0 === u || u,
              s = r.preloadedState,
              f = void 0 === s ? void 0 : s,
              d = r.enhancers,
              p = void 0 === d ? void 0 : d;
            if ("function" === typeof o) t = o;
            else {
              if (!Wn(o))
                throw new Error(
                  '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
                );
              t = xn(o);
            }
            var h = l;
            "function" === typeof h && (h = h(n));
            var v = _n.apply(void 0, h),
              m = En;
            c && (m = Vn(Fn({ trace: !1 }, "object" === typeof c && c)));
            var y = [v];
            return (
              Array.isArray(p)
                ? (y = Tn([v], p))
                : "function" === typeof p && (y = p(y)),
              Sn(t, f, m.apply(void 0, y))
            );
          })({ reducer: { user: rr.reducer } }));
      a.createRoot(document.getElementById("root")).render(
        (0, je.jsx)(t.StrictMode, {
          children: (0, je.jsx)(ft, {
            store: ar,
            children: (0, je.jsx)(tt, {}),
          }),
        })
      );
    })();
})();
//# sourceMappingURL=main.b6c299d9.js.map
