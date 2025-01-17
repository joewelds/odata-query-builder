!function (t, e) {
	if ("object" == typeof exports && "object" == typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
		var r = e();
		for (var n in r) ("object" == typeof exports ? exports : t)[n] = r[n]
	}
}(global, (function () {
	return function (t) {
		var e = {};

		function r(n) {
			if (e[n]) return e[n].exports;
			var o = e[n] = {i: n, l: !1, exports: {}};
			return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
		}

		return r.m = t, r.c = e, r.d = function (t, e, n) {
			r.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
		}, r.r = function (t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
		}, r.t = function (t, e) {
			if (1 & e && (t = r(t)), 8 & e) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var n = Object.create(null);
			if (r.r(n), Object.defineProperty(n, "default", {enumerable: !0, value: t}), 2 & e && "string" != typeof t) for (var o in t) r.d(n, o, function (e) {
				return t[e]
			}.bind(null, o));
			return n
		}, r.n = function (t) {
			var e = t && t.__esModule ? function () {
				return t.default
			} : function () {
				return t
			};
			return r.d(e, "a", e), e
		}, r.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, r.p = "", r(r.s = 3)
	}([function (t, e, r) {
		(function (t, r) {
			var n = "[object Arguments]", o = "[object Map]", i = "[object Object]", u = "[object Set]", a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, c = /^\w*$/, f = /^\./,
				s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, l = /\\(\\)?/g, h = /^\[object .+?Constructor\]$/, p = /^(?:0|[1-9]\d*)$/,
				d = {};
			d["[object Float32Array]"] = d["[object Float64Array]"] = d["[object Int8Array]"] = d["[object Int16Array]"] = d["[object Int32Array]"] = d["[object Uint8Array]"] = d["[object Uint8ClampedArray]"] = d["[object Uint16Array]"] = d["[object Uint32Array]"] = !0, d[n] = d["[object Array]"] = d["[object ArrayBuffer]"] = d["[object Boolean]"] = d["[object DataView]"] = d["[object Date]"] = d["[object Error]"] = d["[object Function]"] = d[o] = d["[object Number]"] = d[i] = d["[object RegExp]"] = d[u] = d["[object String]"] = d["[object WeakMap]"] = !1;
			var y = "object" == typeof t && t && t.Object === Object && t, v = "object" == typeof self && self && self.Object === Object && self, _ = y || v || Function("return this")(),
				b = e && !e.nodeType && e, g = b && "object" == typeof r && r && !r.nodeType && r, j = g && g.exports === b && y.process, m = function () {
					try {
						return j && j.binding("util")
					} catch (t) {
					}
				}(), w = m && m.isTypedArray;

			function O(t, e) {
				for (var r = -1, n = t ? t.length : 0, o = Array(n); ++r < n;) o[r] = e(t[r], r, t);
				return o
			}

			function $(t, e) {
				for (var r = -1, n = t ? t.length : 0; ++r < n;) if (e(t[r], r, t)) return !0;
				return !1
			}

			function x(t) {
				return function (e) {
					return t(e)
				}
			}

			function S(t) {
				var e = !1;
				if (null != t && "function" != typeof t.toString) try {
					e = !!(t + "")
				} catch (t) {
				}
				return e
			}

			function A(t) {
				var e = -1, r = Array(t.size);
				return t.forEach((function (t, n) {
					r[++e] = [n, t]
				})), r
			}

			function k(t) {
				var e = -1, r = Array(t.size);
				return t.forEach((function (t) {
					r[++e] = t
				})), r
			}

			var F, E, P, B = Array.prototype, T = Function.prototype, M = Object.prototype, C = _["__core-js_shared__"],
				D = (F = /[^.]+$/.exec(C && C.keys && C.keys.IE_PROTO || "")) ? "Symbol(src)_1." + F : "", V = T.toString, I = M.hasOwnProperty, Q = M.toString,
				U = RegExp("^" + V.call(I).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), z = _.Symbol, L = _.Uint8Array,
				R = M.propertyIsEnumerable, W = B.splice, N = (E = Object.keys, P = Object, function (t) {
					return E(P(t))
				}), G = kt(_, "DataView"), q = kt(_, "Map"), H = kt(_, "Promise"), J = kt(_, "Set"), K = kt(_, "WeakMap"), X = kt(Object, "create"), Y = Dt(G), Z = Dt(q), tt = Dt(H), et = Dt(J),
				rt = Dt(K), nt = z ? z.prototype : void 0, ot = nt ? nt.valueOf : void 0, it = nt ? nt.toString : void 0;

			function ut(t) {
				var e = -1, r = t ? t.length : 0;
				for (this.clear(); ++e < r;) {
					var n = t[e];
					this.set(n[0], n[1])
				}
			}

			function at(t) {
				var e = -1, r = t ? t.length : 0;
				for (this.clear(); ++e < r;) {
					var n = t[e];
					this.set(n[0], n[1])
				}
			}

			function ct(t) {
				var e = -1, r = t ? t.length : 0;
				for (this.clear(); ++e < r;) {
					var n = t[e];
					this.set(n[0], n[1])
				}
			}

			function ft(t) {
				var e = -1, r = t ? t.length : 0;
				for (this.__data__ = new ct; ++e < r;) this.add(t[e])
			}

			function st(t) {
				this.__data__ = new at(t)
			}

			function lt(t, e) {
				var r = Ut(t) || Qt(t) ? function (t, e) {
					for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
					return n
				}(t.length, String) : [], n = r.length, o = !!n;
				for (var i in t) !e && !I.call(t, i) || o && ("length" == i || Et(i, n)) || r.push(i);
				return r
			}

			function ht(t, e) {
				for (var r = t.length; r--;) if (It(t[r][0], e)) return r;
				return -1
			}

			ut.prototype.clear = function () {
				this.__data__ = X ? X(null) : {}
			}, ut.prototype.delete = function (t) {
				return this.has(t) && delete this.__data__[t]
			}, ut.prototype.get = function (t) {
				var e = this.__data__;
				if (X) {
					var r = e[t];
					return "__lodash_hash_undefined__" === r ? void 0 : r
				}
				return I.call(e, t) ? e[t] : void 0
			}, ut.prototype.has = function (t) {
				var e = this.__data__;
				return X ? void 0 !== e[t] : I.call(e, t)
			}, ut.prototype.set = function (t, e) {
				return this.__data__[t] = X && void 0 === e ? "__lodash_hash_undefined__" : e, this
			}, at.prototype.clear = function () {
				this.__data__ = []
			}, at.prototype.delete = function (t) {
				var e = this.__data__, r = ht(e, t);
				return !(r < 0) && (r == e.length - 1 ? e.pop() : W.call(e, r, 1), !0)
			}, at.prototype.get = function (t) {
				var e = this.__data__, r = ht(e, t);
				return r < 0 ? void 0 : e[r][1]
			}, at.prototype.has = function (t) {
				return ht(this.__data__, t) > -1
			}, at.prototype.set = function (t, e) {
				var r = this.__data__, n = ht(r, t);
				return n < 0 ? r.push([t, e]) : r[n][1] = e, this
			}, ct.prototype.clear = function () {
				this.__data__ = {hash: new ut, map: new (q || at), string: new ut}
			}, ct.prototype.delete = function (t) {
				return At(this, t).delete(t)
			}, ct.prototype.get = function (t) {
				return At(this, t).get(t)
			}, ct.prototype.has = function (t) {
				return At(this, t).has(t)
			}, ct.prototype.set = function (t, e) {
				return At(this, t).set(t, e), this
			}, ft.prototype.add = ft.prototype.push = function (t) {
				return this.__data__.set(t, "__lodash_hash_undefined__"), this
			}, ft.prototype.has = function (t) {
				return this.__data__.has(t)
			}, st.prototype.clear = function () {
				this.__data__ = new at
			}, st.prototype.delete = function (t) {
				return this.__data__.delete(t)
			}, st.prototype.get = function (t) {
				return this.__data__.get(t)
			}, st.prototype.has = function (t) {
				return this.__data__.has(t)
			}, st.prototype.set = function (t, e) {
				var r = this.__data__;
				if (r instanceof at) {
					var n = r.__data__;
					if (!q || n.length < 199) return n.push([t, e]), this;
					r = this.__data__ = new ct(n)
				}
				return r.set(t, e), this
			};
			var pt, dt, yt = (pt = function (t, e) {
				return t && vt(t, e, Ht)
			}, function (t, e) {
				if (null == t) return t;
				if (!zt(t)) return pt(t, e);
				for (var r = t.length, n = dt ? r : -1, o = Object(t); (dt ? n-- : ++n < r) && !1 !== e(o[n], n, o);) ;
				return t
			}), vt = function (t) {
				return function (e, r, n) {
					for (var o = -1, i = Object(e), u = n(e), a = u.length; a--;) {
						var c = u[t ? a : ++o];
						if (!1 === r(i[c], c, i)) break
					}
					return e
				}
			}();

			function _t(t, e) {
				for (var r = 0, n = (e = Pt(e, t) ? [e] : $t(e)).length; null != t && r < n;) t = t[Ct(e[r++])];
				return r && r == n ? t : void 0
			}

			function bt(t, e) {
				return null != t && e in Object(t)
			}

			function gt(t, e, r, a, c) {
				return t === e || (null == t || null == e || !Wt(t) && !Nt(e) ? t != t && e != e : function (t, e, r, a, c, f) {
					var s = Ut(t), l = Ut(e), h = "[object Array]", p = "[object Array]";
					s || (h = (h = Ft(t)) == n ? i : h);
					l || (p = (p = Ft(e)) == n ? i : p);
					var d = h == i && !S(t), y = p == i && !S(e), v = h == p;
					if (v && !d) return f || (f = new st), s || qt(t) ? St(t, e, r, a, c, f) : function (t, e, r, n, i, a, c) {
						switch (r) {
							case"[object DataView]":
								if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
								t = t.buffer, e = e.buffer;
							case"[object ArrayBuffer]":
								return !(t.byteLength != e.byteLength || !n(new L(t), new L(e)));
							case"[object Boolean]":
							case"[object Date]":
							case"[object Number]":
								return It(+t, +e);
							case"[object Error]":
								return t.name == e.name && t.message == e.message;
							case"[object RegExp]":
							case"[object String]":
								return t == e + "";
							case o:
								var f = A;
							case u:
								var s = 2 & a;
								if (f || (f = k), t.size != e.size && !s) return !1;
								var l = c.get(t);
								if (l) return l == e;
								a |= 1, c.set(t, e);
								var h = St(f(t), f(e), n, i, a, c);
								return c.delete(t), h;
							case"[object Symbol]":
								if (ot) return ot.call(t) == ot.call(e)
						}
						return !1
					}(t, e, h, r, a, c, f);
					if (!(2 & c)) {
						var _ = d && I.call(t, "__wrapped__"), b = y && I.call(e, "__wrapped__");
						if (_ || b) {
							var g = _ ? t.value() : t, j = b ? e.value() : e;
							return f || (f = new st), r(g, j, a, c, f)
						}
					}
					if (!v) return !1;
					return f || (f = new st), function (t, e, r, n, o, i) {
						var u = 2 & o, a = Ht(t), c = a.length, f = Ht(e).length;
						if (c != f && !u) return !1;
						var s = c;
						for (; s--;) {
							var l = a[s];
							if (!(u ? l in e : I.call(e, l))) return !1
						}
						var h = i.get(t);
						if (h && i.get(e)) return h == e;
						var p = !0;
						i.set(t, e), i.set(e, t);
						var d = u;
						for (; ++s < c;) {
							l = a[s];
							var y = t[l], v = e[l];
							if (n) var _ = u ? n(v, y, l, e, t, i) : n(y, v, l, t, e, i);
							if (!(void 0 === _ ? y === v || r(y, v, n, o, i) : _)) {
								p = !1;
								break
							}
							d || (d = "constructor" == l)
						}
						if (p && !d) {
							var b = t.constructor, g = e.constructor;
							b != g && "constructor" in t && "constructor" in e && !("function" == typeof b && b instanceof b && "function" == typeof g && g instanceof g) && (p = !1)
						}
						return i.delete(t), i.delete(e), p
					}(t, e, r, a, c, f)
				}(t, e, gt, r, a, c))
			}

			function jt(t) {
				return !(!Wt(t) || function (t) {
					return !!D && D in t
				}(t)) && (Lt(t) || S(t) ? U : h).test(Dt(t))
			}

			function mt(t) {
				return "function" == typeof t ? t : null == t ? Jt : "object" == typeof t ? Ut(t) ? function (t, e) {
					if (Pt(t) && Bt(e)) return Tt(Ct(t), e);
					return function (r) {
						var n = function (t, e, r) {
							var n = null == t ? void 0 : _t(t, e);
							return void 0 === n ? r : n
						}(r, t);
						return void 0 === n && n === e ? function (t, e) {
							return null != t && function (t, e, r) {
								e = Pt(e, t) ? [e] : $t(e);
								var n, o = -1, i = e.length;
								for (; ++o < i;) {
									var u = Ct(e[o]);
									if (!(n = null != t && r(t, u))) break;
									t = t[u]
								}
								if (n) return n;
								return !!(i = t ? t.length : 0) && Rt(i) && Et(u, i) && (Ut(t) || Qt(t))
							}(t, e, bt)
						}(r, t) : gt(e, n, void 0, 3)
					}
				}(t[0], t[1]) : function (t) {
					var e = function (t) {
						var e = Ht(t), r = e.length;
						for (; r--;) {
							var n = e[r], o = t[n];
							e[r] = [n, o, Bt(o)]
						}
						return e
					}(t);
					if (1 == e.length && e[0][2]) return Tt(e[0][0], e[0][1]);
					return function (r) {
						return r === t || function (t, e, r, n) {
							var o = r.length, i = o, u = !n;
							if (null == t) return !i;
							for (t = Object(t); o--;) {
								var a = r[o];
								if (u && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1
							}
							for (; ++o < i;) {
								var c = (a = r[o])[0], f = t[c], s = a[1];
								if (u && a[2]) {
									if (void 0 === f && !(c in t)) return !1
								} else {
									var l = new st;
									if (n) var h = n(f, s, c, t, e, l);
									if (!(void 0 === h ? gt(s, f, n, 3, l) : h)) return !1
								}
							}
							return !0
						}(r, t, e)
					}
				}(t) : Pt(e = t) ? (r = Ct(e), function (t) {
					return null == t ? void 0 : t[r]
				}) : function (t) {
					return function (e) {
						return _t(e, t)
					}
				}(e);
				var e, r
			}

			function wt(t) {
				if (r = (e = t) && e.constructor, n = "function" == typeof r && r.prototype || M, e !== n) return N(t);
				var e, r, n, o = [];
				for (var i in Object(t)) I.call(t, i) && "constructor" != i && o.push(i);
				return o
			}

			function Ot(t, e, r) {
				var n = -1;
				return e = O(e.length ? e : [Jt], x(mt)), function (t, e) {
					var r = t.length;
					for (t.sort(e); r--;) t[r] = t[r].value;
					return t
				}(function (t, e) {
					var r = -1, n = zt(t) ? Array(t.length) : [];
					return yt(t, (function (t, o, i) {
						n[++r] = e(t, o, i)
					})), n
				}(t, (function (t, r, o) {
					return {
						criteria: O(e, (function (e) {
							return e(t)
						})), index: ++n, value: t
					}
				})), (function (t, e) {
					return function (t, e, r) {
						var n = -1, o = t.criteria, i = e.criteria, u = o.length, a = r.length;
						for (; ++n < u;) {
							var c = xt(o[n], i[n]);
							if (c) {
								if (n >= a) return c;
								var f = r[n];
								return c * ("desc" == f ? -1 : 1)
							}
						}
						return t.index - e.index
					}(t, e, r)
				}))
			}

			function $t(t) {
				return Ut(t) ? t : Mt(t)
			}

			function xt(t, e) {
				if (t !== e) {
					var r = void 0 !== t, n = null === t, o = t == t, i = Gt(t), u = void 0 !== e, a = null === e, c = e == e, f = Gt(e);
					if (!a && !f && !i && t > e || i && u && c && !a && !f || n && u && c || !r && c || !o) return 1;
					if (!n && !i && !f && t < e || f && r && o && !n && !i || a && r && o || !u && o || !c) return -1
				}
				return 0
			}

			function St(t, e, r, n, o, i) {
				var u = 2 & o, a = t.length, c = e.length;
				if (a != c && !(u && c > a)) return !1;
				var f = i.get(t);
				if (f && i.get(e)) return f == e;
				var s = -1, l = !0, h = 1 & o ? new ft : void 0;
				for (i.set(t, e), i.set(e, t); ++s < a;) {
					var p = t[s], d = e[s];
					if (n) var y = u ? n(d, p, s, e, t, i) : n(p, d, s, t, e, i);
					if (void 0 !== y) {
						if (y) continue;
						l = !1;
						break
					}
					if (h) {
						if (!$(e, (function (t, e) {
							if (!h.has(e) && (p === t || r(p, t, n, o, i))) return h.add(e)
						}))) {
							l = !1;
							break
						}
					} else if (p !== d && !r(p, d, n, o, i)) {
						l = !1;
						break
					}
				}
				return i.delete(t), i.delete(e), l
			}

			function At(t, e) {
				var r, n, o = t.__data__;
				return ("string" == (n = typeof (r = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? o["string" == typeof e ? "string" : "hash"] : o.map
			}

			function kt(t, e) {
				var r = function (t, e) {
					return null == t ? void 0 : t[e]
				}(t, e);
				return jt(r) ? r : void 0
			}

			var Ft = function (t) {
				return Q.call(t)
			};

			function Et(t, e) {
				return !!(e = null == e ? 9007199254740991 : e) && ("number" == typeof t || p.test(t)) && t > -1 && t % 1 == 0 && t < e
			}

			function Pt(t, e) {
				if (Ut(t)) return !1;
				var r = typeof t;
				return !("number" != r && "symbol" != r && "boolean" != r && null != t && !Gt(t)) || (c.test(t) || !a.test(t) || null != e && t in Object(e))
			}

			function Bt(t) {
				return t == t && !Wt(t)
			}

			function Tt(t, e) {
				return function (r) {
					return null != r && (r[t] === e && (void 0 !== e || t in Object(r)))
				}
			}

			(G && "[object DataView]" != Ft(new G(new ArrayBuffer(1))) || q && Ft(new q) != o || H && "[object Promise]" != Ft(H.resolve()) || J && Ft(new J) != u || K && "[object WeakMap]" != Ft(new K)) && (Ft = function (t) {
				var e = Q.call(t), r = e == i ? t.constructor : void 0, n = r ? Dt(r) : void 0;
				if (n) switch (n) {
					case Y:
						return "[object DataView]";
					case Z:
						return o;
					case tt:
						return "[object Promise]";
					case et:
						return u;
					case rt:
						return "[object WeakMap]"
				}
				return e
			});
			var Mt = Vt((function (t) {
				var e;
				t = null == (e = t) ? "" : function (t) {
					if ("string" == typeof t) return t;
					if (Gt(t)) return it ? it.call(t) : "";
					var e = t + "";
					return "0" == e && 1 / t == -1 / 0 ? "-0" : e
				}(e);
				var r = [];
				return f.test(t) && r.push(""), t.replace(s, (function (t, e, n, o) {
					r.push(n ? o.replace(l, "$1") : e || t)
				})), r
			}));

			function Ct(t) {
				if ("string" == typeof t || Gt(t)) return t;
				var e = t + "";
				return "0" == e && 1 / t == -1 / 0 ? "-0" : e
			}

			function Dt(t) {
				if (null != t) {
					try {
						return V.call(t)
					} catch (t) {
					}
					try {
						return t + ""
					} catch (t) {
					}
				}
				return ""
			}

			function Vt(t, e) {
				if ("function" != typeof t || e && "function" != typeof e) throw new TypeError("Expected a function");
				var r = function () {
					var n = arguments, o = e ? e.apply(this, n) : n[0], i = r.cache;
					if (i.has(o)) return i.get(o);
					var u = t.apply(this, n);
					return r.cache = i.set(o, u), u
				};
				return r.cache = new (Vt.Cache || ct), r
			}

			function It(t, e) {
				return t === e || t != t && e != e
			}

			function Qt(t) {
				return function (t) {
					return Nt(t) && zt(t)
				}(t) && I.call(t, "callee") && (!R.call(t, "callee") || Q.call(t) == n)
			}

			Vt.Cache = ct;
			var Ut = Array.isArray;

			function zt(t) {
				return null != t && Rt(t.length) && !Lt(t)
			}

			function Lt(t) {
				var e = Wt(t) ? Q.call(t) : "";
				return "[object Function]" == e || "[object GeneratorFunction]" == e
			}

			function Rt(t) {
				return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
			}

			function Wt(t) {
				var e = typeof t;
				return !!t && ("object" == e || "function" == e)
			}

			function Nt(t) {
				return !!t && "object" == typeof t
			}

			function Gt(t) {
				return "symbol" == typeof t || Nt(t) && "[object Symbol]" == Q.call(t)
			}

			var qt = w ? x(w) : function (t) {
				return Nt(t) && Rt(t.length) && !!d[Q.call(t)]
			};

			function Ht(t) {
				return zt(t) ? lt(t) : wt(t)
			}

			function Jt(t) {
				return t
			}

			r.exports = function (t, e, r, n) {
				return null == t ? [] : (Ut(e) || (e = null == e ? [] : [e]), Ut(r = n ? void 0 : r) || (r = null == r ? [] : [r]), Ot(t, e, r))
			}
		}).call(this, r(1), r(2)(t))
	}, function (t, e) {
		var r;
		r = function () {
			return this
		}();
		try {
			r = r || new Function("return this")()
		} catch (t) {
			"object" == typeof global && (r = global)
		}
		t.exports = r
	}, function (t, e) {
		t.exports = function (t) {
			return t.webpackPolyfill || (t.deprecate = function () {
			}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
				enumerable: !0, get: function () {
					return t.l
				}
			}), Object.defineProperty(t, "id", {
				enumerable: !0, get: function () {
					return t.i
				}
			}), t.webpackPolyfill = 1), t
		}
	}, function (t, e, r) {
		"use strict";
		var n;
		r.r(e), function (t) {
			t[t.OrderBy = 1] = "OrderBy", t[t.Top = 2] = "Top", t[t.Skip = 3] = "Skip", t[t.Count = 4] = "Count", t[t.Expand = 5] = "Expand", t[t.Filter = 6] = "Filter", t[t.Select = 7] = "Select"
		}(n || (n = {}));

		class o {
			constructor(t, e) {
				this.type = t, this.value = e
			}
		}

		r.d(e, "default", (function () {
			return u
		})), r.d(e, "QueryBuilder", (function () {
			return a
		}));
		const i = r(0);

		class u {
			constructor() {
				this.fragments = [], this.filterExpression = (t, e, r) => (this.fragments.push(new o(n.Filter, `${t} ${e} ${this.getValue(r)}`)), this), this.filterPhrase = t => (this.fragments.push(new o(n.Filter, t)), this), this.and = t => (this.fragments.push(new o(n.Filter, `(${t(new u).toQuery("and")})`)), this), this.or = t => (this.fragments.push(new o(n.Filter, `(${t(new u).toQuery("or")})`)), this), this.toQuery = t => !this.fragments || this.fragments.length < 1 ? "" : this.fragments.map(t => t.value).join(` ${t} `)
			}

			getValue(t) {
				let e = typeof t;
				switch (t instanceof Date && (e = "date"), e) {
					case"string":
						return `'${t}'`;
					case"date":
						return `${t.toISOString()}`;
					default:
						return `${t}`
				}
			}
		}

		class a {
			constructor() {
				this.fragments = [], this.orderBy = t => (this.clear(n.OrderBy), this.fragments.push(new o(n.OrderBy, `$orderby=${t}`)), this), this.top = t => (this.clear(n.Top), this.fragments.push(new o(n.Top, `$top=${t}`)), this), this.skip = t => (this.clear(n.Skip), this.fragments.push(new o(n.Skip, `$skip=${t}`)), this), this.count = () => (this.clear(n.Count), this.fragments.push(new o(n.Count, "$count=true")), this), this.expand = t => (this.clear(n.Expand), this.fragments.push(new o(n.Expand, `$expand=${t}`)), this), this.select = t => (this.clear(n.Select), this.fragments.push(new o(n.Select, `$select=${t}`)), this), this.filter = (t, e = "and") => (this.clear(n.Filter), this.fragments.push(new o(n.Filter, t(new u).toQuery(e))), this), this.clear = t => (this.fragments = this.fragments.filter(e => e.type !== t), this), this.toQuery = () => {
					if (this.fragments.length < 1) return "";
					const t = i(this.fragments, t => t.type), e = t.filter(t => t.type !== n.Filter), r = t.filter(t => t.type === n.Filter);
					let o = "?" + t.filter(t => t.type !== n.Filter).map(t => t.value).join("&");
					return r.length < 1 ? o : (e.length > 0 && (o += "&"), o += this.parseFilters(r, "and").trim(), o)
				}
			}

			parseFilters(t, e) {
				return null === !t || t.length < 1 ? "" : "$filter=" + t.map(t => t.value).join(` ${e} `)
			}
		}
	}])
}));
//# sourceMappingURL=odata-qb.js.map
