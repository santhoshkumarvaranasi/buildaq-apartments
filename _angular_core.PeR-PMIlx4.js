import { a as Ec, b as Ke, f as Ic } from "@nf-internal/chunk-5FY5NHQF";
import { B as Tc, E as Cc, F as Mc, G as Gp, H as Wp, I as zp, J as Qp, K as Zp, L as oM, a as re, b as A, c as Di, f as Dc, g as Ti, n as qo, p as Ci, r as Mi, s as kt, w as Ni, x as $p, y as qp } from "@nf-internal/chunk-WIVEKJOH";
import { a as G, b as Te, d as xt } from "@nf-internal/chunk-4CLCTAJ7";
import { BehaviorSubject as rM, Observable as iM } from "rxjs";
import { setActiveConsumer as On } from "@angular/core/primitives/signals";
import { isNotFound as sM } from "@angular/core/primitives/di";
var _i = class {
    full;
    major;
    minor;
    patch;
    constructor(t) { this.full = t; let n = t.split("."); this.major = n[0], this.minor = n[1], this.patch = n.slice(2).join("."); }
}, aM = new _i("20.3.14");
var bi = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss", T = class extends Error {
    code;
    constructor(t, n) { super(Zo(t, n)), this.code = t; }
};
function cM(e) { return `NG0${Math.abs(e)}`; }
function Zo(e, t) { return `${cM(e)}${t ? ": " + t : ""}`; }
var Se = globalThis;
function F(e) { for (let t in e)
    if (e[t] === F)
        return t; throw Error(""); }
function Xp(e, t) { for (let n in t)
    t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]); }
function Be(e) {
    if (typeof e == "string")
        return e;
    if (Array.isArray(e))
        return `[${e.map(Be).join(", ")}]`;
    if (e == null)
        return "" + e;
    let t = e.overriddenName || e.name;
    if (t)
        return `${t}`;
    let n = e.toString();
    if (n == null)
        return "" + n;
    let o = n.indexOf(`
`);
    return o >= 0 ? n.slice(0, o) : n;
}
function Ri(e, t) { return e ? t ? `${e} ${t}` : e : t || ""; }
function lM(e, t = 100) { if (!e || t < 1 || e.length <= t)
    return e; if (t == 1)
    return e.substring(0, 1) + "..."; let n = Math.round(t / 2); return e.substring(0, n) + "..." + e.substring(e.length - n); }
var uM = F({ __forward_ref__: F });
function Yo(e) { return e.__forward_ref__ = Yo, e.toString = function () { return Be(this()); }, e; }
function x(e) { return Ko(e) ? e() : e; }
function Ko(e) { return typeof e == "function" && e.hasOwnProperty(uM) && e.__forward_ref__ === Yo; }
function eh(e, t, n) { e != t && Lc(n, e, t, "=="); }
function Lc(e, t, n, o) { throw new Error(`ASSERTION ERROR: ${e}` + (o == null ? "" : ` [Expected=> ${n} ${o} ${t} <=Actual]`)); }
function j(e) { return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 }; }
var dM = j;
function Jo(e) { return { providers: e.providers || [], imports: e.imports || [] }; }
function Xo(e) { return pM(e, kn); }
function fM(e) { return Xo(e) !== null; }
function pM(e, t) { return e.hasOwnProperty(t) && e[t] || null; }
function hM(e) { let t = e?.[kn] ?? null; return t || null; }
function wc(e) { return e && e.hasOwnProperty(Wo) ? e[Wo] : null; }
var kn = F({ \u0275prov: F }), Wo = F({ \u0275inj: F }), C = class {
    _desc;
    ngMetadataName = "InjectionToken";
    \u0275prov;
    constructor(t, n) { this._desc = t, this.\u0275prov = void 0, typeof n == "number" ? this.__NG_ELEMENT_ID__ = n : n !== void 0 && (this.\u0275prov = j({ token: this, providedIn: n.providedIn || "root", factory: n.factory })); }
    get multi() { return this; }
    toString() { return `InjectionToken ${this._desc}`; }
}, Yp;
function gM(e) { Lc("setInjectorProfilerContext should never be called in production mode"); let t = Yp; return Yp = e, t; }
function Fc(e) { return e && !!e.\u0275providers; }
var en = F({ \u0275cmp: F }), er = F({ \u0275dir: F }), tr = F({ \u0275pipe: F }), Ai = F({ \u0275mod: F }), Je = F({ \u0275fac: F }), tn = F({ __NG_ELEMENT_ID__: F }), Kp = F({ __NG_ENV_ID__: F });
function b(e) { return typeof e == "string" ? e : e == null ? "" : String(e); }
function be(e) { return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : b(e); }
var th = F({ ngErrorCode: F }), mM = F({ ngErrorMessage: F }), vM = F({ ngTokenPath: F });
function jc(e, t) { return nh("", -200, t); }
function Oi(e, t) { throw new T(-201, !1); }
function nh(e, t, n) { let o = new T(t, e); return o[th] = t, o[mM] = e, n && (o[vM] = n), o; }
function yM(e) { return e[th]; }
var _c;
function oh() { return _c; }
function Ee(e) { let t = _c; return _c = e, t; }
function Vc(e, t, n) { let o = Xo(e); if (o && o.providedIn == "root")
    return o.value === void 0 ? o.value = o.factory() : o.value; if (n & 8)
    return null; if (t !== void 0)
    return t; Oi(e, "Injector"); }
var EM = {}, Yt = EM, Sc = "__NG_DI_FLAG__", bc = class {
    injector;
    constructor(t) { this.injector = t; }
    retrieve(t, n) { let o = Kt(n) || 0; try {
        return this.injector.get(t, o & 8 ? null : Yt, o);
    }
    catch (r) {
        if (Ic(r))
            return r;
        throw r;
    } }
};
function IM(e, t = 0) { let n = Ec(); if (n === void 0)
    throw new T(-203, !1); if (n === null)
    return Vc(e, void 0, t); {
    let o = DM(t), r = n.retrieve(e, o);
    if (Ic(r)) {
        if (o.optional)
            return null;
        throw r;
    }
    return r;
} }
function de(e, t = 0) { return (oh() || IM)(x(e), t); }
function xi(e) { throw new T(202, !1); }
function E(e, t) { return de(e, Kt(t)); }
function Kt(e) { return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4); }
function DM(e) { return { optional: !!(e & 8), host: !!(e & 1), self: !!(e & 2), skipSelf: !!(e & 4) }; }
function Rc(e) { let t = []; for (let n = 0; n < e.length; n++) {
    let o = x(e[n]);
    if (Array.isArray(o)) {
        if (o.length === 0)
            throw new T(900, !1);
        let r, i = 0;
        for (let s = 0; s < o.length; s++) {
            let a = o[s], c = TM(a);
            typeof c == "number" ? c === -1 ? r = a.token : i |= c : r = a;
        }
        t.push(de(r, i));
    }
    else
        t.push(de(o));
} return t; }
function Pn(e, t) { return e[Sc] = t, e.prototype[Sc] = t, e; }
function TM(e) { return e[Sc]; }
function Pt(e, t) { let n = e.hasOwnProperty(Je); return n ? e[Je] : null; }
function rh(e, t, n) { if (e.length !== t.length)
    return !1; for (let o = 0; o < e.length; o++) {
    let r = e[o], i = t[o];
    if (n && (r = n(r), i = n(i)), i !== r)
        return !1;
} return !0; }
function Ue(e) { return e.flat(Number.POSITIVE_INFINITY); }
function ki(e, t) { e.forEach(n => Array.isArray(n) ? ki(n, t) : t(n)); }
function Hc(e, t, n) { t >= e.length ? e.push(n) : e.splice(t, 0, n); }
function nr(e, t) { return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]; }
function or(e, t) { let n = []; for (let o = 0; o < e; o++)
    n.push(t); return n; }
function Bc(e, t, n) { let o = e.length - n; for (; t < o;)
    e[t] = e[t + n], t++; for (; n--;)
    e.pop(); }
function Uc(e, t, n, o) { let r = e.length; if (r == t)
    e.push(n, o);
else if (r === 1)
    e.push(o, e[0]), e[0] = n;
else {
    for (r--, e.push(e[r - 1], e[r]); r > t;) {
        let i = r - 2;
        e[r] = e[i], r--;
    }
    e[t] = n, e[t + 1] = o;
} }
function rr(e, t, n) { let o = Ln(e, t); return o >= 0 ? e[o | 1] = n : (o = ~o, Uc(e, o, t, n)), o; }
function Pi(e, t) { let n = Ln(e, t); if (n >= 0)
    return e[n | 1]; }
function Ln(e, t) { return CM(e, t, 1); }
function CM(e, t, n) { let o = 0, r = e.length >> n; for (; r !== o;) {
    let i = o + (r - o >> 1), s = e[i << n];
    if (t === s)
        return i << n;
    s > t ? r = i : o = i + 1;
} return ~(r << n); }
var ke = {}, L = [], Pe = new C(""), $c = new C("", -1), qc = new C(""), zo = class {
    get(t, n = Yt) { if (n === Yt) {
        let r = nh("", -201);
        throw r.name = "\u0275NotFound", r;
    } return n; }
};
function nn(e) { return e[Ai] || null; }
function Li(e) { let t = nn(e); if (!t)
    throw new T(915, !1); return t; }
function W(e) { return e[en] || null; }
function Re(e) { return e[er] || null; }
function $e(e) { return e[tr] || null; }
function ir(e) { let t = W(e) || Re(e) || $e(e); return t !== null && t.standalone; }
function qe(e) { return { \u0275providers: e }; }
function ih(e) { return qe([{ provide: Pe, multi: !0, useValue: e }]); }
function sh(...e) { return { \u0275providers: Fi(!0, e), \u0275fromNgModule: !0 }; }
function Fi(e, ...t) { let n = [], o = new Set, r, i = s => { n.push(s); }; return ki(t, s => { let a = s; Si(a, i, [], o) && (r ||= [], r.push(a)); }), r !== void 0 && ah(r, i), n; }
function ah(e, t) { for (let n = 0; n < e.length; n++) {
    let { ngModule: o, providers: r } = e[n];
    Gc(r, i => { t(i, o); });
} }
function Si(e, t, n, o) { if (e = x(e), !e)
    return !1; let r = null, i = wc(e), s = !i && W(e); if (!i && !s) {
    let c = e.ngModule;
    if (i = wc(c), i)
        r = c;
    else
        return !1;
}
else {
    if (s && !s.standalone)
        return !1;
    r = e;
} let a = o.has(r); if (s) {
    if (a)
        return !1;
    if (o.add(r), s.dependencies) {
        let c = typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
        for (let l of c)
            Si(l, t, n, o);
    }
}
else if (i) {
    if (i.imports != null && !a) {
        o.add(r);
        let l;
        try {
            ki(i.imports, u => { Si(u, t, n, o) && (l ||= [], l.push(u)); });
        }
        finally { }
        l !== void 0 && ah(l, t);
    }
    if (!a) {
        let l = Pt(r) || (() => new r);
        t({ provide: r, useFactory: l, deps: L }, r), t({ provide: qc, useValue: r, multi: !0 }, r), t({ provide: Pe, useValue: () => de(r), multi: !0 }, r);
    }
    let c = i.providers;
    if (c != null && !a) {
        let l = e;
        Gc(c, u => { t(u, l); });
    }
}
else
    return !1; return r !== e && e.providers !== void 0; }
function Gc(e, t) { for (let n of e)
    Fc(n) && (n = n.\u0275providers), Array.isArray(n) ? Gc(n, t) : t(n); }
var MM = F({ provide: String, useValue: F });
function ch(e) { return e !== null && typeof e == "object" && MM in e; }
function NM(e) { return !!(e && e.useExisting); }
function wM(e) { return !!(e && e.useFactory); }
function Jt(e) { return typeof e == "function"; }
function lh(e) { return !!e.useClass; }
var Wc = new C(""), wi = {}, Jp = {}, Nc;
function Fn() { return Nc === void 0 && (Nc = new zo), Nc; }
var _e = class {
}, Xt = class extends _e {
    parent;
    source;
    scopes;
    records = new Map;
    _ngOnDestroyHooks = new Set;
    _onDestroyHooks = [];
    get destroyed() { return this._destroyed; }
    _destroyed = !1;
    injectorDefTypes;
    constructor(t, n, o, r) { super(), this.parent = n, this.source = o, this.scopes = r, Oc(t, s => this.processProvider(s)), this.records.set($c, xn(void 0, this)), r.has("environment") && this.records.set(_e, xn(void 0, this)); let i = this.records.get(Wc); i != null && typeof i.value == "string" && this.scopes.add(i.value), this.injectorDefTypes = new Set(this.get(qc, L, { self: !0 })); }
    retrieve(t, n) { let o = Kt(n) || 0; try {
        return this.get(t, Yt, o);
    }
    catch (r) {
        if (sM(r))
            return r;
        throw r;
    } }
    destroy() { Go(this), this._destroyed = !0; let t = On(null); try {
        for (let o of this._ngOnDestroyHooks)
            o.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let o of n)
            o();
    }
    finally {
        this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), On(t);
    } }
    onDestroy(t) { return Go(this), this._onDestroyHooks.push(t), () => this.removeOnDestroy(t); }
    runInContext(t) { Go(this); let n = Ke(this), o = Ee(void 0), r; try {
        return t();
    }
    finally {
        Ke(n), Ee(o);
    } }
    get(t, n = Yt, o) { if (Go(this), t.hasOwnProperty(Kp))
        return t[Kp](this); let r = Kt(o), i, s = Ke(this), a = Ee(void 0); try {
        if (!(r & 4)) {
            let l = this.records.get(t);
            if (l === void 0) {
                let u = AM(t) && Xo(t);
                u && this.injectableDefInScope(u) ? l = xn(Ac(t), wi) : l = null, this.records.set(t, l);
            }
            if (l != null)
                return this.hydrate(t, l, r);
        }
        let c = r & 2 ? Fn() : this.parent;
        return n = r & 8 && n === Yt ? null : n, c.get(t, n);
    }
    catch (c) {
        let l = yM(c);
        throw l === -200 || l === -201 ? new T(l, null) : c;
    }
    finally {
        Ee(a), Ke(s);
    } }
    resolveInjectorInitializers() { let t = On(null), n = Ke(this), o = Ee(void 0), r; try {
        let i = this.get(Pe, L, { self: !0 });
        for (let s of i)
            s();
    }
    finally {
        Ke(n), Ee(o), On(t);
    } }
    toString() { let t = [], n = this.records; for (let o of n.keys())
        t.push(Be(o)); return `R3Injector[${t.join(", ")}]`; }
    processProvider(t) { t = x(t); let n = Jt(t) ? t : x(t && t.provide), o = SM(t); if (!Jt(t) && t.multi === !0) {
        let r = this.records.get(n);
        r || (r = xn(void 0, wi, !0), r.factory = () => Rc(r.multi), this.records.set(n, r)), n = t, r.multi.push(t);
    } this.records.set(n, o); }
    hydrate(t, n, o) { let r = On(null); try {
        if (n.value === Jp)
            throw jc(Be(t));
        return n.value === wi && (n.value = Jp, n.value = n.factory(void 0, o)), typeof n.value == "object" && n.value && RM(n.value) && this._ngOnDestroyHooks.add(n.value), n.value;
    }
    finally {
        On(r);
    } }
    injectableDefInScope(t) { if (!t.providedIn)
        return !1; let n = x(t.providedIn); return typeof n == "string" ? n === "any" || this.scopes.has(n) : this.injectorDefTypes.has(n); }
    removeOnDestroy(t) { let n = this._onDestroyHooks.indexOf(t); n !== -1 && this._onDestroyHooks.splice(n, 1); }
};
function Ac(e) { let t = Xo(e), n = t !== null ? t.factory : Pt(e); if (n !== null)
    return n; if (e instanceof C)
    throw new T(204, !1); if (e instanceof Function)
    return _M(e); throw new T(204, !1); }
function _M(e) { if (e.length > 0)
    throw new T(204, !1); let n = hM(e); return n !== null ? () => n.factory(e) : () => new e; }
function SM(e) { if (ch(e))
    return xn(void 0, e.useValue); {
    let t = zc(e);
    return xn(t, wi);
} }
function zc(e, t, n) { let o; if (Jt(e)) {
    let r = x(e);
    return Pt(r) || Ac(r);
}
else if (ch(e))
    o = () => x(e.useValue);
else if (wM(e))
    o = () => e.useFactory(...Rc(e.deps || []));
else if (NM(e))
    o = (r, i) => de(x(e.useExisting), i !== void 0 && i & 8 ? 8 : void 0);
else {
    let r = x(e && (e.useClass || e.provide));
    if (bM(e))
        o = () => new r(...Rc(e.deps));
    else
        return Pt(r) || Ac(r);
} return o; }
function Go(e) { if (e.destroyed)
    throw new T(205, !1); }
function xn(e, t, n = !1) { return { factory: e, value: t, multi: n ? [] : void 0 }; }
function bM(e) { return !!e.deps; }
function RM(e) { return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"; }
function AM(e) { return typeof e == "function" || typeof e == "object" && e.ngMetadataName === "InjectionToken"; }
function Oc(e, t) { for (let n of e)
    Array.isArray(n) ? Oc(n, t) : n && Fc(n) ? Oc(n.\u0275providers, t) : t(n); }
function ji(e, t) { let n; e instanceof Xt ? (Go(e), n = e) : n = new bc(e); let o, r = Ke(n), i = Ee(void 0); try {
    return t();
}
finally {
    Ke(r), Ee(i);
} }
function Vi() { return oh() !== void 0 || Ec() != null; }
function OM(e) { if (!Vi())
    throw new T(-203, !1); }
var U = 0, m = 1, M = 2, z = 3, fe = 4, se = 5, ae = 6, Lt = 7, H = 8, k = 9, Ge = 10, w = 11, Ft = 12, sr = 13, on = 14, J = 15, pt = 16, rn = 17, et = 18, jn = 19, Qc = 20, dt = 21, Hi = 22, ht = 23, Ae = 24, sn = 25, gt = 26, I = 27, Zc = 1, Oe = 6, We = 7, ar = 8, an = 9, $ = 10;
function X(e) { return Array.isArray(e) && typeof e[Zc] == "object"; }
function Y(e) { return Array.isArray(e) && e[Zc] === !0; }
function Yc(e) { return (e.flags & 4) !== 0; }
function Me(e) { return e.componentOffset > -1; }
function Vn(e) { return (e.flags & 1) === 1; }
function Ne(e) { return !!e.template; }
function tt(e) { return (e[M] & 512) !== 0; }
function Kc(e) { return (e.type & 16) === 16; }
function uh(e) { return (e[M] & 32) === 32; }
function nt(e) { return (e[M] & 256) === 256; }
var Jc = "svg", Xc = "math";
function P(e) { for (; Array.isArray(e);)
    e = e[U]; return e; }
function cr(e) { for (; Array.isArray(e);) {
    if (typeof e[Zc] == "object")
        return e;
    e = e[U];
} return null; }
function cn(e, t) { return P(t[e]); }
function ce(e, t) { return P(t[e.index]); }
function dh(e, t) { let n = e === null ? -1 : e.index; return n !== -1 ? P(t[n]) : null; }
function mt(e, t) { return e.data[t]; }
function jt(e, t) { return e[t]; }
function lr(e, t, n, o) { n >= e.data.length && (e.data[n] = null, e.blueprint[n] = null), t[n] = o; }
function ge(e, t) { let n = t[e]; return X(n) ? n : n[U]; }
function fh(e) { return (e[M] & 4) === 4; }
function Bi(e) { return (e[M] & 128) === 128; }
function ph(e) { return Y(e[z]); }
function pe(e, t) { return t == null ? null : e[t]; }
function el(e) { e[rn] = 0; }
function Ui(e) { e[M] & 1024 || (e[M] |= 1024, Bi(e) && Vt(e)); }
function tl(e, t) { for (; e > 0;)
    t = t[on], e--; return t; }
function Hn(e) { return !!(e[M] & 9216 || e[Ae]?.dirty); }
function $i(e) { e[Ge].changeDetectionScheduler?.notify(8), e[M] & 64 && (e[M] |= 1024), Hn(e) && Vt(e); }
function Vt(e) { e[Ge].changeDetectionScheduler?.notify(0); let t = ft(e); for (; t !== null && !(t[M] & 8192 || (t[M] |= 8192, !Bi(t)));)
    t = ft(t); }
function ur(e, t) { if (nt(e))
    throw new T(911, !1); e[dt] === null && (e[dt] = []), e[dt].push(t); }
function qi(e, t) { if (e[dt] === null)
    return; let n = e[dt].indexOf(t); n !== -1 && e[dt].splice(n, 1); }
function ft(e) { let t = e[z]; return Y(t) ? t[z] : t; }
function nl(e) { return e[Lt] ??= []; }
function ol(e) { return e.cleanup ??= []; }
function hh(e, t, n, o) { let r = nl(t); r.push(n), e.firstCreatePass && ol(e).push(o, r.length - 1); }
var S = { lFrame: Th(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var xc = !1;
function gh() { return S.lFrame.elementDepthCount; }
function mh() { S.lFrame.elementDepthCount++; }
function rl() { S.lFrame.elementDepthCount--; }
function Gi() { return S.bindingsEnabled; }
function dr() { return S.skipHydrationRootTNode !== null; }
function il(e) { return S.skipHydrationRootTNode === e; }
function sl() { S.bindingsEnabled = !0; }
function vh(e) { S.skipHydrationRootTNode = e; }
function al() { S.bindingsEnabled = !1; }
function cl() { S.skipHydrationRootTNode = null; }
function g() { return S.lFrame.lView; }
function R() { return S.lFrame.tView; }
function ll(e) { return S.lFrame.contextLView = e, e[H]; }
function ul(e) { return S.lFrame.contextLView = null, e; }
function _() { let e = dl(); for (; e !== null && e.type === 64;)
    e = e.parent; return e; }
function dl() { return S.lFrame.currentTNode; }
function Bn() { let e = S.lFrame, t = e.currentTNode; return e.isParent ? t : t.parent; }
function ot(e, t) { let n = S.lFrame; n.currentTNode = e, n.isParent = t; }
function fl() { return S.lFrame.isParent; }
function pl() { S.lFrame.isParent = !1; }
function hl() { return S.lFrame.contextLView; }
function gl() { return xc; }
function Un(e) { let t = xc; return xc = e, t; }
function me() { let e = S.lFrame, t = e.bindingRootIndex; return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t; }
function rt() { return S.lFrame.bindingIndex; }
function ml(e) { return S.lFrame.bindingIndex = e; }
function ve() { return S.lFrame.bindingIndex++; }
function it(e) { let t = S.lFrame, n = t.bindingIndex; return t.bindingIndex = t.bindingIndex + e, n; }
function yh() { return S.lFrame.inI18n; }
function vl(e) { S.lFrame.inI18n = e; }
function Eh(e, t) { let n = S.lFrame; n.bindingIndex = n.bindingRootIndex = e, Wi(t); }
function Ih() { return S.lFrame.currentDirectiveIndex; }
function Wi(e) { S.lFrame.currentDirectiveIndex = e; }
function zi(e) { let t = S.lFrame.currentDirectiveIndex; return t === -1 ? null : e[t]; }
function Qi() { return S.lFrame.currentQueryIndex; }
function fr(e) { S.lFrame.currentQueryIndex = e; }
function xM(e) { let t = e[m]; return t.type === 2 ? t.declTNode : t.type === 1 ? e[se] : null; }
function yl(e, t, n) { if (n & 4) {
    let r = t, i = e;
    for (; r = r.parent, r === null && !(n & 1);)
        if (r = xM(i), r === null || (i = i[on], r.type & 10))
            break;
    if (r === null)
        return !1;
    t = r, e = i;
} let o = S.lFrame = Dh(); return o.currentTNode = t, o.lView = e, !0; }
function Zi(e) { let t = Dh(), n = e[m]; S.lFrame = t, t.currentTNode = n.firstChild, t.lView = e, t.tView = n, t.contextLView = e, t.bindingIndex = n.bindingStartIndex, t.inI18n = !1; }
function Dh() { let e = S.lFrame, t = e === null ? null : e.child; return t === null ? Th(e) : t; }
function Th(e) { let t = { currentTNode: null, isParent: !0, lView: null, tView: null, selectedIndex: -1, contextLView: null, elementDepthCount: 0, currentNamespace: null, currentDirectiveIndex: -1, bindingRootIndex: -1, bindingIndex: -1, currentQueryIndex: 0, parent: e, child: null, inI18n: !1 }; return e !== null && (e.child = t), t; }
function Ch() { let e = S.lFrame; return S.lFrame = e.parent, e.currentTNode = null, e.lView = null, e; }
var El = Ch;
function Yi() { let e = Ch(); e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0; }
function Mh(e) { return (S.lFrame.contextLView = tl(e, S.lFrame.contextLView))[H]; }
function le() { return S.lFrame.selectedIndex; }
function Ht(e) { S.lFrame.selectedIndex = e; }
function Le() { let e = S.lFrame; return mt(e.tView, e.selectedIndex); }
function Il() { S.lFrame.currentNamespace = Jc; }
function Dl() { S.lFrame.currentNamespace = Xc; }
function Tl() { kM(); }
function kM() { S.lFrame.currentNamespace = null; }
function Cl() { return S.lFrame.currentNamespace; }
var Nh = !0;
function pr() { return Nh; }
function ze(e) { Nh = e; }
function kc(e, t = null, n = null, o) { let r = Ml(e, t, n, o); return r.resolveInjectorInitializers(), r; }
function Ml(e, t = null, n = null, o, r = new Set) { let i = [n || L, sh(e)]; return o = o || (typeof e == "object" ? void 0 : Be(e)), new Xt(i, t || Fn(), o || null, r); }
var ie = class e {
    static THROW_IF_NOT_FOUND = Yt;
    static NULL = new zo;
    static create(t, n) { if (Array.isArray(t))
        return kc({ name: "" }, n, t, ""); {
        let o = t.name ?? "";
        return kc({ name: o }, t.parent, t.providers, o);
    } }
    static \u0275prov = j({ token: e, providedIn: "any", factory: () => de($c) });
    static __NG_ELEMENT_ID__ = -1;
}, wh = new C(""), Fe = (() => { class e {
    static __NG_ELEMENT_ID__ = PM;
    static __NG_ENV_ID__ = n => n;
} return e; })(), Qo = class extends Fe {
    _lView;
    constructor(t) { super(), this._lView = t; }
    get destroyed() { return nt(this._lView); }
    onDestroy(t) { let n = this._lView; return ur(n, t), () => qi(n, t); }
};
function PM() { return new Qo(g()); }
var Xe = class {
    _console = console;
    handleError(t) { this._console.error("ERROR", t); }
}, st = new C("", { providedIn: "root", factory: () => { let e = E(_e), t; return n => { e.destroyed && !t ? setTimeout(() => { throw n; }) : (t ??= e.get(Xe), t.handleError(n)); }; } }), Nl = { provide: Pe, useValue: () => void E(Xe), multi: !0 }, LM = new C("", { providedIn: "root", factory: () => { if (typeof ngServerMode < "u" && ngServerMode)
        return; let e = E(wh).defaultView; if (!e)
        return; let t = E(st), n = i => { t(i.reason), i.preventDefault(); }, o = i => { i.error ? t(i.error) : t(new Error(i.message, { cause: i })), i.preventDefault(); }, r = () => { e.addEventListener("unhandledrejection", n), e.addEventListener("error", o); }; typeof Zone < "u" ? Zone.root.run(r) : r(), E(Fe).onDestroy(() => { e.removeEventListener("error", o), e.removeEventListener("unhandledrejection", n); }); } });
function FM() { return qe([ih(() => void E(LM))]); }
function wl(e) { return typeof e == "function" && e[re] !== void 0; }
function jM(e) { return null; }
function Bt(e, t) { let [n, o, r] = qp(e, t?.equal), i = n, s = i[re]; return i.set = o, i.update = r, i.asReadonly = $n.bind(i), i; }
function $n() { let e = this[re]; if (e.readonlyFn === void 0) {
    let t = () => this();
    t[re] = e, e.readonlyFn = t;
} return e.readonlyFn; }
function _l(e) { return wl(e) && typeof e.set == "function"; }
function VM(e, t) { if (Di() !== null)
    throw new T(-602, !1); }
var ln = (() => { class e {
    view;
    node;
    constructor(n, o) { this.view = n, this.node = o; }
    static __NG_ELEMENT_ID__ = HM;
} return e; })();
function HM() { return new ln(g(), _()); }
var Ce = class {
}, qn = new C("", { providedIn: "root", factory: () => !1 });
var Sl = new C(""), Ki = new C(""), vt = (() => { class e {
    taskId = 0;
    pendingTasks = new Set;
    destroyed = !1;
    pendingTask = new rM(!1);
    get hasPendingTasks() { return this.destroyed ? !1 : this.pendingTask.value; }
    get hasPendingTasksObservable() { return this.destroyed ? new iM(n => { n.next(!1), n.complete(); }) : this.pendingTask; }
    add() { !this.hasPendingTasks && !this.destroyed && this.pendingTask.next(!0); let n = this.taskId++; return this.pendingTasks.add(n), n; }
    has(n) { return this.pendingTasks.has(n); }
    remove(n) { this.pendingTasks.delete(n), this.pendingTasks.size === 0 && this.hasPendingTasks && this.pendingTask.next(!1); }
    ngOnDestroy() { this.pendingTasks.clear(), this.hasPendingTasks && this.pendingTask.next(!1), this.destroyed = !0, this.pendingTask.unsubscribe(); }
    static \u0275prov = j({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), hr = (() => { class e {
    internalPendingTasks = E(vt);
    scheduler = E(Ce);
    errorHandler = E(st);
    add() { let n = this.internalPendingTasks.add(); return () => { this.internalPendingTasks.has(n) && (this.scheduler.notify(11), this.internalPendingTasks.remove(n)); }; }
    run(n) { let o = this.add(); n().catch(this.errorHandler).finally(o); }
    static \u0275prov = j({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function un(...e) { }
var gr = (() => { class e {
    static \u0275prov = j({ token: e, providedIn: "root", factory: () => new Pc });
} return e; })(), Pc = class {
    dirtyEffectCount = 0;
    queues = new Map;
    add(t) { this.enqueue(t), this.schedule(t); }
    schedule(t) { t.dirty && this.dirtyEffectCount++; }
    remove(t) { let n = t.zone, o = this.queues.get(n); o.has(t) && (o.delete(t), t.dirty && this.dirtyEffectCount--); }
    enqueue(t) { let n = t.zone; this.queues.has(n) || this.queues.set(n, new Set); let o = this.queues.get(n); o.has(t) || o.add(t); }
    flush() { for (; this.dirtyEffectCount > 0;) {
        let t = !1;
        for (let [n, o] of this.queues)
            n === null ? t ||= this.flushQueue(o) : t ||= n.run(() => this.flushQueue(o));
        t || (this.dirtyEffectCount = 0);
    } }
    flushQueue(t) { let n = !1; for (let o of t)
        o.dirty && (this.dirtyEffectCount--, n = !0, o.run()); return n; }
};
import { Subject as od, Subscription as rd } from "rxjs";
import { setActiveConsumer as _h } from "@angular/core/primitives/signals";
import { map as BM } from "rxjs/operators";
var Gn = { JSACTION: "jsaction" };
function ct(e) { return { toString: e }.toString(); }
var Qn = "__annotations__", Zn = "__parameters__", Yn = "__prop__metadata__";
function zr(e, t, n, o, r) { return ct(() => { let i = id(t); function s(...a) { if (this instanceof s)
    return i.call(this, ...a), this; let c = new s(...a); return function (u) { return r && r(u, ...a), (u.hasOwnProperty(Qn) ? u[Qn] : Object.defineProperty(u, Qn, { value: [] })[Qn]).push(c), u; }; } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s; }); }
function id(e) { return function (...n) { if (e) {
    let o = e(...n);
    for (let r in o)
        this[r] = o[r];
} }; }
function Co(e, t, n) { return ct(() => { let o = id(t); function r(...i) { if (this instanceof r)
    return o.apply(this, i), this; let s = new r(...i); return a.annotation = s, a; function a(c, l, u) { let d = c.hasOwnProperty(Zn) ? c[Zn] : Object.defineProperty(c, Zn, { value: [] })[Zn]; for (; d.length <= u;)
    d.push(null); return (d[u] = d[u] || []).push(s), c; } } return r.prototype.ngMetadataName = e, r.annotationCls = r, r; }); }
function Mt(e, t, n, o) { return ct(() => { let r = id(t); function i(...s) { if (this instanceof i)
    return r.apply(this, s), this; let a = new i(...s); function c(l, u) { if (l === void 0)
    throw new Error("Standard Angular field decorators are not supported in JIT mode."); let d = l.constructor, f = d.hasOwnProperty(Yn) ? d[Yn] : Object.defineProperty(d, Yn, { value: {} })[Yn]; f[u] = f.hasOwnProperty(u) && f[u] || [], f[u].unshift(a); } return c; } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i; }); }
var Vg = Pn(Co("Inject", e => ({ token: e })), -1), Hg = Pn(Co("Optional"), 8), Bg = Pn(Co("Self"), 2), Ug = Pn(Co("SkipSelf"), 4), $g = Pn(Co("Host"), 1);
function ne(e) { let t = Se.ng; if (t && t.\u0275compilerFacade)
    return t.\u0275compilerFacade; throw new Error("JIT compiler unavailable"); }
var Sh = { \u0275\u0275defineInjectable: j, \u0275\u0275defineInjector: Jo, \u0275\u0275inject: de, \u0275\u0275invalidFactoryDep: xi, resolveForwardRef: x }, qg = Function;
function vr(e) { return typeof e == "function"; }
var UM = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/, $M = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/, qM = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/, GM = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function WM(e) { return UM.test(e) || GM.test(e) || $M.test(e) && !qM.test(e); }
var ys = class {
    _reflect;
    constructor(t) { this._reflect = t || Se.Reflect; }
    factory(t) { return (...n) => new t(...n); }
    _zipTypesAndAnnotations(t, n) { let o; typeof t > "u" ? o = or(n.length) : o = or(t.length); for (let r = 0; r < o.length; r++)
        typeof t > "u" ? o[r] = [] : t[r] && t[r] != Object ? o[r] = [t[r]] : o[r] = [], n && n[r] != null && (o[r] = o[r].concat(n[r])); return o; }
    _ownParameters(t, n) { let o = t.toString(); if (WM(o))
        return null; if (t.parameters && t.parameters !== n.parameters)
        return t.parameters; let r = t.ctorParameters; if (r && r !== n.ctorParameters) {
        let a = typeof r == "function" ? r() : r, c = a.map(u => u && u.type), l = a.map(u => u && bl(u.decorators));
        return this._zipTypesAndAnnotations(c, l);
    } let i = t.hasOwnProperty(Zn) && t[Zn], s = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t); return s || i ? this._zipTypesAndAnnotations(s, i) : or(t.length); }
    parameters(t) { if (!vr(t))
        return []; let n = Ji(t), o = this._ownParameters(t, n); return !o && n !== Object && (o = this.parameters(n)), o || []; }
    _ownAnnotations(t, n) { if (t.annotations && t.annotations !== n.annotations) {
        let o = t.annotations;
        return typeof o == "function" && o.annotations && (o = o.annotations), o;
    } return t.decorators && t.decorators !== n.decorators ? bl(t.decorators) : t.hasOwnProperty(Qn) ? t[Qn] : null; }
    annotations(t) { if (!vr(t))
        return []; let n = Ji(t), o = this._ownAnnotations(t, n) || []; return (n !== Object ? this.annotations(n) : []).concat(o); }
    _ownPropMetadata(t, n) { if (t.propMetadata && t.propMetadata !== n.propMetadata) {
        let o = t.propMetadata;
        return typeof o == "function" && o.propMetadata && (o = o.propMetadata), o;
    } if (t.propDecorators && t.propDecorators !== n.propDecorators) {
        let o = t.propDecorators, r = {};
        return Object.keys(o).forEach(i => { r[i] = bl(o[i]); }), r;
    } return t.hasOwnProperty(Yn) ? t[Yn] : null; }
    propMetadata(t) { if (!vr(t))
        return {}; let n = Ji(t), o = {}; if (n !== Object) {
        let i = this.propMetadata(n);
        Object.keys(i).forEach(s => { o[s] = i[s]; });
    } let r = this._ownPropMetadata(t, n); return r && Object.keys(r).forEach(i => { let s = []; o.hasOwnProperty(i) && s.push(...o[i]), s.push(...r[i]), o[i] = s; }), o; }
    ownPropMetadata(t) { return vr(t) ? this._ownPropMetadata(t, Ji(t)) || {} : {}; }
    hasLifecycleHook(t, n) { return t instanceof qg && n in t.prototype; }
};
function bl(e) { return e ? e.map(t => { let o = t.type.annotationCls, r = t.args ? t.args : []; return new o(...r); }) : []; }
function Ji(e) { let t = e.prototype ? Object.getPrototypeOf(e.prototype) : null; return (t ? t.constructor : null) || Object; }
var Es = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, o) { this.previousValue = t, this.currentValue = n, this.firstChange = o; }
    isFirstChange() { return this.firstChange; }
};
function Gg(e, t, n, o) { t !== null ? t.applyValueToInputSignal(t, o) : e[n] = o; }
var Wg = (() => { let e = () => zg; return e.ngInherit = !0, e; })();
function zg(e) { return e.type.prototype.ngOnChanges && (e.setInput = QM), zM; }
function zM() { let e = Zg(this), t = e?.current; if (t) {
    let n = e.previous;
    if (n === ke)
        e.previous = t;
    else
        for (let o in t)
            n[o] = t[o];
    e.current = null, this.ngOnChanges(t);
} }
function QM(e, t, n, o, r) { let i = this.declaredInputs[o], s = Zg(e) || ZM(e, { previous: ke, current: null }), a = s.current || (s.current = {}), c = s.previous, l = c[i]; a[i] = new Es(l && l.currentValue, n, c === ke), Gg(e, t, r, n); }
var Qg = "__ngSimpleChanges__";
function Zg(e) { return e[Qg] || null; }
function ZM(e, t) { return e[Qg] = t; }
var bh = [];
var V = function (e, t = null, n) { for (let o = 0; o < bh.length; o++) {
    let r = bh[o];
    r(e, t, n);
} };
function YM(e, t, n) { let { ngOnChanges: o, ngOnInit: r, ngDoCheck: i } = t.type.prototype; if (o) {
    let s = zg(t);
    (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s);
} r && (n.preOrderHooks ??= []).push(0 - e, r), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i)); }
function Yg(e, t) { for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
    let i = e.data[n].type.prototype, { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: l, ngOnDestroy: u } = i;
    s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), c && (e.viewHooks ??= []).push(-n, c), l && ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)), u != null && (e.destroyHooks ??= []).push(n, u);
} }
function cs(e, t, n) { Kg(e, t, 3, n); }
function ls(e, t, n, o) { (e[M] & 3) === n && Kg(e, t, n, o); }
function Rl(e, t) { let n = e[M]; (n & 3) === t && (n &= 16383, n += 1, e[M] = n); }
function Kg(e, t, n, o) { let r = o !== void 0 ? e[rn] & 65535 : 0, i = o ?? -1, s = t.length - 1, a = 0; for (let c = r; c < s; c++)
    if (typeof t[c + 1] == "number") {
        if (a = t[c], o != null && a >= o)
            break;
    }
    else
        t[c] < 0 && (e[rn] += 65536), (a < i || i == -1) && (KM(e, n, t, c), e[rn] = (e[rn] & 4294901760) + c + 2), c++; }
function Rh(e, t) { V(4, e, t); let n = A(null); try {
    t.call(e);
}
finally {
    A(n), V(5, e, t);
} }
function KM(e, t, n, o) { let r = n[o] < 0, i = n[o + 1], s = r ? -n[o] : n[o], a = e[s]; r ? e[M] >> 14 < e[rn] >> 16 && (e[M] & 3) === t && (e[M] += 16384, Rh(a, i)) : Rh(a, i); }
var to = -1, mn = class {
    factory;
    name;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, o, r) { this.factory = t, this.name = r, this.canSeeViewProviders = n, this.injectImpl = o; }
};
function Zs(e) { return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex)); }
function Jg(e) { return !!(e.type & 128); }
function JM(e) { return (e.flags & 8) !== 0; }
function XM(e) { return (e.flags & 16) !== 0; }
function eN(e, t, n) { let o = 0; for (; o < n.length;) {
    let r = n[o];
    if (typeof r == "number") {
        if (r !== 0)
            break;
        o++;
        let i = n[o++], s = n[o++], a = n[o++];
        e.setAttribute(t, s, a, i);
    }
    else {
        let i = r, s = n[++o];
        tN(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), o++;
    }
} return o; }
function Xg(e) { return e === 3 || e === 4 || e === 6; }
function tN(e) { return e.charCodeAt(0) === 64; }
function lo(e, t) { if (!(t === null || t.length === 0))
    if (e === null || e.length === 0)
        e = t.slice();
    else {
        let n = -1;
        for (let o = 0; o < t.length; o++) {
            let r = t[o];
            typeof r == "number" ? n = r : n === 0 || (n === -1 || n === 2 ? Ah(e, n, r, null, t[++o]) : Ah(e, n, r, null, null));
        }
    } return e; }
function Ah(e, t, n, o, r) { let i = 0, s = e.length; if (t === -1)
    s = -1;
else
    for (; i < e.length;) {
        let a = e[i++];
        if (typeof a == "number") {
            if (a === t) {
                s = -1;
                break;
            }
            else if (a > t) {
                s = i - 1;
                break;
            }
        }
    } for (; i < e.length;) {
    let a = e[i];
    if (typeof a == "number")
        break;
    if (a === n) {
        r !== null && (e[i + 1] = r);
        return;
    }
    i++, r !== null && i++;
} s !== -1 && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), r !== null && e.splice(i++, 0, r); }
function em(e) { return e !== to; }
function Is(e) { return e & 32767; }
function nN(e) { return e >> 16; }
function Ds(e, t) { let n = nN(e), o = t; for (; n > 0;)
    o = o[on], n--; return o; }
var tu = !0;
function Ts(e) { let t = tu; return tu = e, t; }
var oN = 256, tm = oN - 1, nm = 5, rN = 0, at = {};
function iN(e, t, n) { let o; typeof n == "string" ? o = n.charCodeAt(0) || 0 : n.hasOwnProperty(tn) && (o = n[tn]), o == null && (o = n[tn] = rN++); let r = o & tm, i = 1 << r; t.data[e + (r >> nm)] |= i; }
function Cs(e, t) { let n = om(e, t); if (n !== -1)
    return n; let o = t[m]; o.firstCreatePass && (e.injectorIndex = t.length, Al(o.data, e), Al(t, null), Al(o.blueprint, null)); let r = sd(e, t), i = e.injectorIndex; if (em(r)) {
    let s = Is(r), a = Ds(r, t), c = a[m].data;
    for (let l = 0; l < 8; l++)
        t[i + l] = a[s + l] | c[s + l];
} return t[i + 8] = r, i; }
function Al(e, t) { e.push(0, 0, 0, 0, 0, 0, 0, 0, t); }
function om(e, t) { return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex; }
function sd(e, t) { if (e.parent && e.parent.injectorIndex !== -1)
    return e.parent.injectorIndex; let n = 0, o = null, r = t; for (; r !== null;) {
    if (o = lm(r), o === null)
        return to;
    if (n++, r = r[on], o.injectorIndex !== -1)
        return o.injectorIndex | n << 16;
} return to; }
function nu(e, t, n) { iN(e, t, n); }
function sN(e, t) { if (t === "class")
    return e.classes; if (t === "style")
    return e.styles; let n = e.attrs; if (n) {
    let o = n.length, r = 0;
    for (; r < o;) {
        let i = n[r];
        if (Xg(i))
            break;
        if (i === 0)
            r = r + 2;
        else if (typeof i == "number")
            for (r++; r < o && typeof n[r] == "string";)
                r++;
        else {
            if (i === t)
                return n[r + 1];
            r = r + 2;
        }
    }
} return null; }
function rm(e, t, n) { if (n & 8 || e !== void 0)
    return e; Oi(t, "NodeInjector"); }
function im(e, t, n, o) { if (n & 8 && o === void 0 && (o = null), (n & 3) === 0) {
    let r = e[k], i = Ee(void 0);
    try {
        return r ? r.get(t, o, n & 8) : Vc(t, o, n & 8);
    }
    finally {
        Ee(i);
    }
} return rm(o, t, n); }
function sm(e, t, n, o = 0, r) { if (e !== null) {
    if (t[M] & 2048 && !(o & 2)) {
        let s = uN(e, t, n, o, at);
        if (s !== at)
            return s;
    }
    let i = am(e, t, n, o, at);
    if (i !== at)
        return i;
} return im(t, n, o, r); }
function am(e, t, n, o, r) { let i = cN(n); if (typeof i == "function") {
    if (!yl(t, e, o))
        return o & 1 ? rm(r, n, o) : im(t, n, o, r);
    try {
        let s;
        if (s = i(o), s == null && !(o & 8))
            Oi(n);
        else
            return s;
    }
    finally {
        El();
    }
}
else if (typeof i == "number") {
    let s = null, a = om(e, t), c = to, l = o & 1 ? t[J][se] : null;
    for ((a === -1 || o & 4) && (c = a === -1 ? sd(e, t) : t[a + 8], c === to || !xh(o, !1) ? a = -1 : (s = t[m], a = Is(c), t = Ds(c, t))); a !== -1;) {
        let u = t[m];
        if (Oh(i, a, u.data)) {
            let d = aN(a, t, n, s, o, l);
            if (d !== at)
                return d;
        }
        c = t[a + 8], c !== to && xh(o, t[m].data[a + 8] === l) && Oh(i, a, t) ? (s = u, a = Is(c), t = Ds(c, t)) : a = -1;
    }
} return r; }
function aN(e, t, n, o, r, i) { let s = t[m], a = s.data[e + 8], c = o == null ? Me(a) && tu : o != s && (a.type & 3) !== 0, l = r & 1 && i === a, u = us(a, s, n, c, l); return u !== null ? Ar(t, s, u, a, r) : at; }
function us(e, t, n, o, r) { let i = e.providerIndexes, s = t.data, a = i & 1048575, c = e.directiveStart, l = e.directiveEnd, u = i >> 20, d = o ? a : a + u, f = r ? a + u : l; for (let p = d; p < f; p++) {
    let h = s[p];
    if (p < c && n === h || p >= c && h.type === n)
        return p;
} if (r) {
    let p = s[c];
    if (p && Ne(p) && p.type === n)
        return c;
} return null; }
function Ar(e, t, n, o, r) { let i = e[n], s = t.data; if (i instanceof mn) {
    let a = i;
    if (a.resolving) {
        let p = be(s[n]);
        throw jc(p);
    }
    let c = Ts(a.canSeeViewProviders);
    a.resolving = !0;
    let l = s[n].type || s[n], u, d = a.injectImpl ? Ee(a.injectImpl) : null, f = yl(e, o, 0);
    try {
        i = e[n] = a.factory(void 0, r, s, e, o), t.firstCreatePass && n >= o.directiveStart && YM(n, s[n], t);
    }
    finally {
        d !== null && Ee(d), Ts(c), a.resolving = !1, El();
    }
} return i; }
function cN(e) { if (typeof e == "string")
    return e.charCodeAt(0) || 0; let t = e.hasOwnProperty(tn) ? e[tn] : void 0; return typeof t == "number" ? t >= 0 ? t & tm : lN : t; }
function Oh(e, t, n) { let o = 1 << e; return !!(n[t + (e >> nm)] & o); }
function xh(e, t) { return !(e & 2) && !(e & 1 && t); }
var $t = class {
    _tNode;
    _lView;
    constructor(t, n) { this._tNode = t, this._lView = n; }
    get(t, n, o) { return sm(this._tNode, this._lView, t, Kt(o), n); }
};
function lN() { return new $t(_(), g()); }
function cm(e) { return ct(() => { let t = e.prototype.constructor, n = t[Je] || ou(t), o = Object.prototype, r = Object.getPrototypeOf(e.prototype).constructor; for (; r && r !== o;) {
    let i = r[Je] || ou(r);
    if (i && i !== n)
        return i;
    r = Object.getPrototypeOf(r);
} return i => new i; }); }
function ou(e) { return Ko(e) ? () => { let t = ou(x(e)); return t && t(); } : Pt(e); }
function uN(e, t, n, o, r) { let i = e, s = t; for (; i !== null && s !== null && s[M] & 2048 && !tt(s);) {
    let a = am(i, s, n, o | 2, at);
    if (a !== at)
        return a;
    let c = i.parent;
    if (!c) {
        let l = s[Qc];
        if (l) {
            let u = l.get(n, at, o);
            if (u !== at)
                return u;
        }
        c = lm(s), s = s[on];
    }
    i = c;
} return r; }
function lm(e) { let t = e[m], n = t.type; return n === 2 ? t.declTNode : n === 1 ? e[se] : null; }
function Ys(e) { return sN(_(), e); }
var um = Co("Attribute", e => ({ attributeName: e, __NG_ELEMENT_ID__: () => Ys(e) })), kh = null;
function ad() { return kh = kh || new ys; }
function Ks(e) { return dm(ad().parameters(e)); }
function dm(e) { return e.map(t => dN(t)); }
function dN(e) { let t = { token: null, attribute: null, host: !1, optional: !1, self: !1, skipSelf: !1 }; if (Array.isArray(e) && e.length > 0)
    for (let n = 0; n < e.length; n++) {
        let o = e[n];
        if (o === void 0)
            continue;
        let r = Object.getPrototypeOf(o);
        if (o instanceof Hg || r.ngMetadataName === "Optional")
            t.optional = !0;
        else if (o instanceof Ug || r.ngMetadataName === "SkipSelf")
            t.skipSelf = !0;
        else if (o instanceof Bg || r.ngMetadataName === "Self")
            t.self = !0;
        else if (o instanceof $g || r.ngMetadataName === "Host")
            t.host = !0;
        else if (o instanceof Vg)
            t.token = o.token;
        else if (o instanceof um) {
            if (o.attributeName === void 0)
                throw new T(204, !1);
            t.attribute = o.attributeName;
        }
        else
            t.token = o;
    }
else
    e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e; return t; }
function fN(e, t) { let n = null, o = null; e.hasOwnProperty(kn) || Object.defineProperty(e, kn, { get: () => (n === null && (n = ne({ usage: 0, kind: "injectable", type: e }).compileInjectable(Sh, `ng:///${e.name}/\u0275prov.js`, mN(e, t))), n) }), e.hasOwnProperty(Je) || Object.defineProperty(e, Je, { get: () => { if (o === null) {
        let r = ne({ usage: 0, kind: "injectable", type: e });
        o = r.compileFactory(Sh, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, typeArgumentCount: 0, deps: Ks(e), target: r.FactoryTarget.Injectable });
    } return o; }, configurable: !0 }); }
var pN = F({ provide: String, useValue: F });
function Ph(e) { return e.useClass !== void 0; }
function hN(e) { return pN in e; }
function Lh(e) { return e.useFactory !== void 0; }
function gN(e) { return e.useExisting !== void 0; }
function mN(e, t) { let n = t || { providedIn: null }, o = { name: e.name, type: e, typeArgumentCount: 0, providedIn: n.providedIn }; return (Ph(n) || Lh(n)) && n.deps !== void 0 && (o.deps = dm(n.deps)), Ph(n) ? o.useClass = n.useClass : hN(n) ? o.useValue = n.useValue : Lh(n) ? o.useFactory = n.useFactory : gN(n) && (o.useExisting = n.useExisting), o; }
var vN = zr("Injectable", void 0, void 0, void 0, (e, t) => fN(e, t));
function yN() { return Mo(_(), g()); }
function Mo(e, t) { return new Qr(ce(e, t)); }
var Qr = (() => { class e {
    nativeElement;
    constructor(n) { this.nativeElement = n; }
    static __NG_ELEMENT_ID__ = yN;
} return e; })();
function fm(e) { return e instanceof Qr ? e.nativeElement : e; }
function EN() { return this._results[Symbol.iterator](); }
var Ms = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() { return this._changes ??= new od; }
    constructor(t = !1) { this._emitDistinctChangesOnly = t; }
    get(t) { return this._results[t]; }
    map(t) { return this._results.map(t); }
    filter(t) { return this._results.filter(t); }
    find(t) { return this._results.find(t); }
    reduce(t, n) { return this._results.reduce(t, n); }
    forEach(t) { this._results.forEach(t); }
    some(t) { return this._results.some(t); }
    toArray() { return this._results.slice(); }
    toString() { return this._results.toString(); }
    reset(t, n) { this.dirty = !1; let o = Ue(t); (this._changesDetected = !rh(this._results, o, n)) && (this._results = o, this.length = o.length, this.last = o[this.length - 1], this.first = o[0]); }
    notifyOnChanges() { this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this); }
    onDirty(t) { this._onDirty = t; }
    setDirty() { this.dirty = !0, this._onDirty?.(); }
    destroy() { this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe()); }
    [Symbol.iterator] = EN;
}, No = "ngSkipHydration", IN = "ngskiphydration";
function cd(e) { let t = e.mergedAttrs; if (t === null)
    return !1; for (let n = 0; n < t.length; n += 2) {
    let o = t[n];
    if (typeof o == "number")
        return !1;
    if (typeof o == "string" && o.toLowerCase() === IN)
        return !0;
} return !1; }
function pm(e) { return e.hasAttribute(No); }
function Or(e) { return (e.flags & 128) === 128; }
function wo(e) { if (Or(e))
    return !0; let t = e.parent; for (; t;) {
    if (Or(e) || cd(t))
        return !0;
    t = t.parent;
} return !1; }
function hm(e) { return Or(e) || cd(e) || wo(e); }
var Js = (function (e) { return e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default", e; })(Js || {}), Xs = new Map, DN = 0;
function TN() { return DN++; }
function CN(e) { Xs.set(e[jn], e); }
function gm(e) { return Xs.get(e) || null; }
function ru(e) { Xs.delete(e[jn]); }
function MN() { return Xs; }
var Ns = class {
    lViewId;
    nodeIndex;
    native;
    component;
    directives;
    localRefs;
    get lView() { return gm(this.lViewId); }
    constructor(t, n, o) { this.lViewId = t, this.nodeIndex = n, this.native = o; }
};
function we(e) { let t = ds(e); if (t) {
    if (X(t)) {
        let n = t, o, r, i;
        if (vm(e)) {
            if (o = _N(n, e), o == -1)
                throw new Error("The provided component was not found in the application");
            r = e;
        }
        else if (NN(e)) {
            if (o = SN(n, e), o == -1)
                throw new Error("The provided directive was not found in the application");
            i = ym(o, n);
        }
        else if (o = jh(n, e), o == -1)
            return null;
        let s = P(n[o]), a = ds(s), c = a && !Array.isArray(a) ? a : Fh(n, o, s);
        if (r && c.component === void 0 && (c.component = r, je(c.component, c)), i && c.directives === void 0) {
            c.directives = i;
            for (let l = 0; l < i.length; l++)
                je(i[l], c);
        }
        je(c.native, c), t = c;
    }
}
else {
    let n = e, o = n;
    for (; o = o.parentNode;) {
        let r = ds(o);
        if (r) {
            let i = Array.isArray(r) ? r : r.lView;
            if (!i)
                return null;
            let s = jh(i, n);
            if (s >= 0) {
                let a = P(i[s]), c = Fh(i, s, a);
                je(a, c), t = c;
                break;
            }
        }
    }
} return t || null; }
function Fh(e, t, n) { return new Ns(e[jn], t, n); }
var iu = "__ngContext__";
function je(e, t) { X(t) ? (e[iu] = t[jn], CN(t)) : e[iu] = t; }
function ds(e) { let t = e[iu]; return typeof t == "number" ? gm(t) : t || null; }
function mm(e) { let t = ds(e); return t ? X(t) ? t : t.lView : null; }
function vm(e) { return e && e.constructor && e.constructor.\u0275cmp; }
function NN(e) { return e && e.constructor && e.constructor.\u0275dir; }
function jh(e, t) { let n = e[m]; for (let o = I; o < n.bindingStartIndex; o++)
    if (P(e[o]) === t)
        return o; return -1; }
function wN(e) { if (e.child)
    return e.child; if (e.next)
    return e.next; for (; e.parent && !e.parent.next;)
    e = e.parent; return e.parent && e.parent.next; }
function _N(e, t) { let n = e[m].components; if (n)
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        if (ge(r, e)[H] === t)
            return r;
    }
else if (ge(I, e)[H] === t)
    return I; return -1; }
function SN(e, t) { let n = e[m].firstChild; for (; n;) {
    let o = n.directiveStart, r = n.directiveEnd;
    for (let i = o; i < r; i++)
        if (e[i] === t)
            return n.index;
    n = wN(n);
} return -1; }
function ym(e, t) { let n = t[m].data[e]; if (n.directiveStart === 0)
    return L; let o = []; for (let r = n.directiveStart; r < n.directiveEnd; r++) {
    let i = t[r];
    vm(i) || o.push(i);
} return o; }
function bN(e, t) { let n = t[m].data[e]; return Me(n) ? t[n.directiveStart + n.componentOffset] : null; }
function RN(e, t) { let n = e[m].data[t]; if (n && n.localNames) {
    let o = {}, r = n.index + 1;
    for (let i = 0; i < n.localNames.length; i += 2)
        o[n.localNames[i]] = e[r], r++;
    return o;
} return null; }
function Em(e) { return Dm(e[Ft]); }
function Im(e) { return Dm(e[fe]); }
function Dm(e) { for (; e !== null && !Y(e);)
    e = e[fe]; return e; }
function Vh(e) { let t = we(e); if (t === null)
    return null; if (t.component === void 0) {
    let n = t.lView;
    if (n === null)
        return null;
    t.component = bN(t.nodeIndex, n);
} return t.component; }
function AN(e) { BN(e); let t = we(e), n = t ? t.lView : null; return n === null ? null : n[H]; }
function ON(e) { let t = we(e), n = t ? t.lView : null; if (n === null)
    return null; let o; for (; n[m].type === 2 && (o = ft(n));)
    n = o; return tt(n) ? null : n[H]; }
function xN(e) { let t = we(e), n = t ? t.lView : null; if (n === null)
    return ie.NULL; let o = n[m].data[t.nodeIndex]; return new $t(o, n); }
function kN(e) { let t = we(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[m], r = o.data[t.nodeIndex], i = [], s = r.providerIndexes & 1048575, a = r.directiveEnd; for (let c = s; c < a; c++) {
    let l = o.data[c];
    HN(l) && (l = l.type), i.push(l);
} return i; }
function PN(e) { if (e instanceof Text)
    return []; let t = we(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[m], r = t.nodeIndex; return o?.data[r] ? (t.directives === void 0 && (t.directives = ym(r, n)), t.directives === null ? [] : [...t.directives]) : []; }
var Tm = (function (e) { return e.Angular = "angular", e.ACX = "acx", e.Wiz = "wiz", e; })(Tm || {}), Cm = (function (e) { return e[e.Default = 0] = "Default", e[e.OnPush = 1] = "OnPush", e; })(Cm || {}), Mm = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 1] = "None", e; })(Mm || {});
function LN(e) { let t = we(e); if (t === null)
    return {}; if (t.localRefs === void 0) {
    let n = t.lView;
    if (n === null)
        return {};
    t.localRefs = RN(n, t.nodeIndex);
} return t.localRefs || {}; }
function FN(e) { return we(e).native; }
function jN(e) { let t = we(e), n = t === null ? null : t.lView; if (n === null)
    return []; let o = n[m], r = n[Lt], i = o.cleanup, s = []; if (i && r)
    for (let a = 0; a < i.length;) {
        let c = i[a++], l = i[a++];
        if (typeof c == "string") {
            let u = c, d = P(n[l]), f = r[i[a++]], p = i[a++], h = typeof p == "boolean" || p >= 0 ? "dom" : "output", v = typeof p == "boolean" ? p : !1;
            e == d && s.push({ element: e, name: u, callback: f, useCapture: v, type: h });
        }
    } return s.sort(VN), s; }
function VN(e, t) { return e.name == t.name ? 0 : e.name < t.name ? -1 : 1; }
function HN(e) { return e.type !== void 0 && e.declaredInputs !== void 0 && e.resolveHostDirectives !== void 0; }
function BN(e) { if (typeof Element < "u" && !(e instanceof Element))
    throw new Error("Expecting instance of DOM Element"); }
var su;
function UN(e) { su = e; }
function Nt() { if (su !== void 0)
    return su; if (typeof document < "u")
    return document; throw new T(210, !1); }
var wt = new C("", { providedIn: "root", factory: () => $N }), $N = "ng", ld = new C(""), qN = new C("", { providedIn: "platform", factory: () => "unknown" }), GN = new C(""), WN = new C(""), zN = new C("", { providedIn: "root", factory: () => Nt().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), Nm = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, QN = new C("", { providedIn: "root", factory: () => Nm });
function ZN(e) { return e; }
function YN() { let e = new Nn; return (typeof ngServerMode > "u" || !ngServerMode) && (e.store = wm(Nt(), E(wt))), e; }
var Nn = (() => { class e {
    static \u0275prov = j({ token: e, providedIn: "root", factory: YN });
    store = {};
    onSerializeCallbacks = {};
    get(n, o) { return this.store[n] !== void 0 ? this.store[n] : o; }
    set(n, o) { this.store[n] = o; }
    remove(n) { delete this.store[n]; }
    hasKey(n) { return this.store.hasOwnProperty(n); }
    get isEmpty() { return Object.keys(this.store).length === 0; }
    onSerialize(n, o) { this.onSerializeCallbacks[n] = o; }
    toJson() { for (let n in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(n))
            try {
                this.store[n] = this.onSerializeCallbacks[n]();
            }
            catch (o) {
                console.warn("Exception in onSerialize callback: ", o);
            } return JSON.stringify(this.store).replace(/</g, "\\u003C"); }
} return e; })();
function wm(e, t) { let n = e.getElementById(t + "-state"); if (n?.textContent)
    try {
        return JSON.parse(n.textContent);
    }
    catch (o) {
        console.warn("Exception while restoring TransferState for app " + t, o);
    } return {}; }
var ud = "h", dd = "b", _m = "f", Sm = "n", Zr = "e", ea = "t", _o = "c", Yr = "x", Dt = "r", ta = "i", Kr = "n", So = "d", na = "l", oa = "di", Jr = "s", fd = "p", ra = "t", wn = new C(""), bm = !1, pd = new C("", { providedIn: "root", factory: () => bm }), hd = new C(""), ia = new C(""), gd = !1, md = new C(""), Xr = new C("", { providedIn: "root", factory: () => new Map }), KN = new C("");
var ws = { passive: !0, capture: !0 }, Ol = new WeakMap, xl = new WeakMap, Kn = new WeakMap, _s = ["click", "keydown"], Ss = ["mouseenter", "mouseover", "focusin"], Wn = null, kl = 0, xr = class {
    callbacks = new Set;
    listener = () => { for (let t of this.callbacks)
        t(); };
};
function Rm(e, t) { let n = xl.get(e); if (!n) {
    n = new xr, xl.set(e, n);
    for (let o of _s)
        e.addEventListener(o, n.listener, ws);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    xl.delete(e);
    for (let i of _s)
        e.removeEventListener(i, r, ws);
} }; }
function Am(e, t) { let n = Ol.get(e); if (!n) {
    n = new xr, Ol.set(e, n);
    for (let o of Ss)
        e.addEventListener(o, n.listener, ws);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    for (let i of Ss)
        e.removeEventListener(i, r, ws);
    Ol.delete(e);
} }; }
function JN() { return new IntersectionObserver(e => { for (let t of e)
    t.isIntersecting && Kn.has(t.target) && Kn.get(t.target).listener(); }); }
function XN(e, t, n) { let o = Kn.get(e); return Wn = Wn || n(), o || (o = new xr, Wn.observe(e), Kn.set(e, o), kl++), o.callbacks.add(t), () => { Kn.has(e) && (o.callbacks.delete(t), o.callbacks.size === 0 && (Wn?.unobserve(e), Kn.delete(e), kl--), kl === 0 && (Wn?.disconnect(), Wn = null)); }; }
var bo = "ngb";
function vd(e, t, n = null) { if (t.length === 0 || e.nodeType !== Node.ELEMENT_NODE)
    return; let o = e.getAttribute(Gn.JSACTION), r = t.reduce((s, a) => (o?.indexOf(a) ?? -1) === -1 ? s + a + ":;" : s, ""); e.setAttribute(Gn.JSACTION, `${o ?? ""}${r}`); let i = n ?? ""; i !== "" && r.length > 0 && e.setAttribute(bo, i); }
var Om = (e, t, n) => { let o = e, r = o.__jsaction_fns ?? new Map, i = r.get(t) ?? []; i.push(n), r.set(t, i), o.__jsaction_fns = r; }, yd = (e, t) => { let n = e, o = n.getAttribute(bo) ?? "", r = t.get(o) ?? new Set; r.has(n) || r.add(n), t.set(o, r); };
function ew(e, t) { if (e.length > 0) {
    let n = [];
    for (let r of e)
        t.has(r) && (n = [...n, ...t.get(r)]);
    new Set(n).forEach(Ed);
} }
var Ed = e => { e.removeAttribute(Gn.JSACTION), e.removeAttribute(bo), e.__jsaction_fns = void 0; }, Id = new C("", { providedIn: "root", factory: () => ({}) });
function Dd(e, t) { let n = t?.__jsaction_fns?.get(e.type); if (!(!n || !t?.isConnected))
    for (let o of n)
        o(e); }
var au = new Map;
function xm(e, t) { return au.set(e, t), () => au.delete(e); }
var Hh = !1, km = (e, t, n, o) => { };
function tw(e, t, n, o) { km(e, t, n, o); }
function Pm() { Hh || (km = (e, t, n, o) => { let r = e[k].get(wt); au.get(r)?.(t, n, o); }, Hh = !0); }
var _t = new C(""), Lm = (() => { class e {
    registry = new Map;
    cleanupFns = new Map;
    jsActionMap = E(Xr);
    contract = E(Id);
    add(n, o) { if (this.registry.set(n, o), this.awaitingCallbacks.has(n)) {
        let r = this.awaitingCallbacks.get(n);
        for (let i of r)
            i();
    } }
    get(n) { return this.registry.get(n) ?? null; }
    has(n) { return this.registry.has(n); }
    cleanup(n) { ew(n, this.jsActionMap); for (let o of n)
        this.registry.delete(o), this.jsActionMap.delete(o), this.invokeTriggerCleanupFns(o), this.hydrating.delete(o), this.awaitingCallbacks.delete(o); this.size === 0 && this.contract.instance?.cleanUp(); }
    get size() { return this.registry.size; }
    addCleanupFn(n, o) { let r = []; this.cleanupFns.has(n) && (r = this.cleanupFns.get(n)), r.push(o), this.cleanupFns.set(n, r); }
    invokeTriggerCleanupFns(n) { let o = this.cleanupFns.get(n) ?? []; for (let r of o)
        r(); this.cleanupFns.delete(n); }
    hydrating = new Map;
    awaitingCallbacks = new Map;
    awaitParentBlock(n, o) { let r = this.awaitingCallbacks.get(n) ?? []; r.push(o), this.awaitingCallbacks.set(n, r); }
    static \u0275prov = j({ token: e, providedIn: null, factory: () => new e });
} return e; })();
function Ro(e) { return (e.flags & 32) === 32; }
var Fm = "__nghData__", sa = Fm, jm = "__nghDeferData__", aa = jm;
function nw(e) { return e === Fm || e === jm; }
var no = "ngh", Vm = "nghm", Hm = () => null;
function ow(e, t, n = !1) { let o = e.getAttribute(no); if (o == null)
    return null; let [r, i] = o.split("|"); if (o = n ? i : r, !o)
    return null; let s = i ? `|${i}` : "", a = n ? r : s, c = {}; if (o !== "") {
    let u = t.get(Nn, null, { optional: !0 });
    u !== null && (c = u.get(sa, [])[Number(o)]);
} let l = { data: c, firstChild: e.firstChild ?? null }; return n && (l.firstChild = e, ca(l, 0, e.nextSibling)), a ? e.setAttribute(no, a) : e.removeAttribute(no), l; }
function Bm() { Hm = ow; }
function Um(e, t, n = !1) { return Hm(e, t, n); }
function Td(e) { let t = e._lView; return t[m].type === 2 ? null : (tt(t) && (t = t[I]), t); }
function rw(e) { return e.textContent?.replace(/\s/gm, ""); }
function iw(e) { let t = Nt(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, { acceptNode(i) { let s = rw(i); return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } }), o, r = []; for (; o = n.nextNode();)
    r.push(o); for (let i of r)
    i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove(); }
var $m = (function (e) { return e.Hydrated = "hydrated", e.Skipped = "skipped", e.Mismatched = "mismatched", e; })($m || {}), sw = "__ngDebugHydrationInfo__";
function aw(e) { return e[sw] ?? null; }
function ca(e, t, n) { e.segmentHeads ??= {}, e.segmentHeads[t] = n; }
function cu(e, t) { return e.segmentHeads?.[t] ?? null; }
function ei(e) { return e.get(md, !1, { optional: !0 }); }
var cw = !1;
function lw() { cw = !1; }
function qm(e, t) { let n = e.data, o = n[Zr]?.[t] ?? null; return o === null && n[_o]?.[t] && (o = Cd(e, t)), o; }
function uw(e, t) { return e.data[Zr]?.[t] !== void 0; }
function Gm(e, t) { return e.data[_o]?.[t] ?? null; }
function Cd(e, t) { let n = Gm(e, t) ?? [], o = 0; for (let r of n)
    o += r[Dt] * (r[Yr] ?? 1); return o; }
function Wm(e) { if (typeof e.disconnectedNodes > "u") {
    let t = e.data[So];
    e.disconnectedNodes = t ? new Set(t) : null;
} return e.disconnectedNodes; }
function la(e, t) { if (typeof e.disconnectedNodes > "u") {
    let n = e.data[So];
    e.disconnectedNodes = n ? new Set(n) : null;
} return !!Wm(e)?.has(t); }
function ua(e, t) { let n = e[ae]; return n !== null && !dr() && !Ro(t) && !la(n, t.index - I); }
function Md(e, t) { let n = t, o = e.corruptedTextNodes; n.textContent === "" ? o.set(n, "ngetn") : n.nextSibling?.nodeType === Node.TEXT_NODE && o.set(n, "ngtns"); }
function zm(e) { let t = []; return e !== null && (e.has(4) && t.push(...Ss), e.has(3) && t.push(..._s)), t; }
function dw(e, t) { let n = t.get(_t), r = t.get(Nn).get(aa, {}), i = !1, s = e, a = null, c = []; for (; !i && s;) {
    i = n.has(s);
    let l = n.hydrating.get(s);
    if (a === null && l != null) {
        a = l.promise;
        break;
    }
    c.unshift(s), s = r[s][fd];
} return { parentBlockPromise: a, hydrationQueue: c }; }
function fw(e) { let t = e.body.querySelectorAll("[jsaction]"), n = new Set, o = [Ss.join(":;"), _s.join(":;")].join("|"); for (let r of t) {
    let i = r.getAttribute("jsaction"), s = r.getAttribute("ngb");
    i?.match(o) && s !== null && n.add(r);
} return n; }
function Qm(e, t) { let n = fw(e), o = t.get(Xr); for (let r of n)
    yd(r, o); }
var Zm = () => ({});
function pw(e) { let t = e.get(Nn, null, { optional: !0 }); return t !== null ? t.get(aa, {}) : {}; }
function Ym() { Zm = pw; }
function hw(e) { return Zm(e); }
function gw(e) { return typeof e == "object" && e.trigger === 5; }
function mw(e) { return e[ra]?.find(n => gw(n))?.delay ?? null; }
function Pl(e, t) { return e[ra]?.includes(t) ?? !1; }
function vw(e) { return { data: e, hydrate: { idle: Pl(e, 0), immediate: Pl(e, 1), timer: mw(e), viewport: Pl(e, 2) } }; }
function Km(e) { let t = hw(e), n = new Map; for (let o in t)
    n.set(o, vw(t[o])); return n; }
function Ll(e) { return !!e && e.nodeType === Node.COMMENT_NODE && e.textContent?.trim() === Vm; }
function Bh(e) { for (; e && e.nodeType === Node.TEXT_NODE;)
    e = e.previousSibling; return e; }
function Jm(e) { for (let o of e.body.childNodes)
    if (Ll(o))
        return; let t = Bh(e.body.previousSibling); if (Ll(t))
    return; let n = Bh(e.head.lastChild); if (!Ll(n))
    throw new T(-507, !1); }
function Xm(e, t) { let n = e.contentQueries; if (n !== null) {
    let o = A(null);
    try {
        for (let r = 0; r < n.length; r += 2) {
            let i = n[r], s = n[r + 1];
            if (s !== -1) {
                let a = e.data[s];
                fr(i), a.contentQueries(2, t[s], s);
            }
        }
    }
    finally {
        A(o);
    }
} }
function lu(e, t, n) { fr(0); let o = A(null); try {
    t(e, n);
}
finally {
    A(o);
} }
function Nd(e, t, n) { if (Yc(t)) {
    let o = A(null);
    try {
        let r = t.directiveStart, i = t.directiveEnd;
        for (let s = r; s < i; s++) {
            let a = e.data[s];
            if (a.contentQueries) {
                let c = n[s];
                a.contentQueries(1, c, s);
            }
        }
    }
    finally {
        A(o);
    }
} }
var Tt = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e; })(Tt || {}), Xi;
function ev() { if (Xi === void 0 && (Xi = null, Se.trustedTypes))
    try {
        Xi = Se.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return Xi; }
function Ao(e) { return ev()?.createHTML(e) || e; }
function yw(e) { return ev()?.createScriptURL(e) || e; }
var es;
function wd() { if (es === void 0 && (es = null, Se.trustedTypes))
    try {
        es = Se.trustedTypes.createPolicy("angular#unsafe-bypass", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return es; }
function Uh(e) { return wd()?.createHTML(e) || e; }
function $h(e) { return wd()?.createScript(e) || e; }
function qh(e) { return wd()?.createScriptURL(e) || e; }
var Ct = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) { this.changingThisBreaksApplicationSecurity = t; }
    toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${bi})`; }
}, uu = class extends Ct {
    getTypeName() { return "HTML"; }
}, du = class extends Ct {
    getTypeName() { return "Style"; }
}, fu = class extends Ct {
    getTypeName() { return "Script"; }
}, pu = class extends Ct {
    getTypeName() { return "URL"; }
}, hu = class extends Ct {
    getTypeName() { return "ResourceURL"; }
};
function St(e) { return e instanceof Ct ? e.changingThisBreaksApplicationSecurity : e; }
function Oo(e, t) { let n = tv(e); if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL")
        return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${bi})`);
} return n === t; }
function tv(e) { return e instanceof Ct && e.getTypeName() || null; }
function Ew(e) { return new uu(e); }
function Iw(e) { return new du(e); }
function Dw(e) { return new fu(e); }
function Tw(e) { return new pu(e); }
function Cw(e) { return new hu(e); }
function nv(e) { let t = new mu(e); return Mw() ? new gu(t) : t; }
var gu = class {
    inertDocumentHelper;
    constructor(t) { this.inertDocumentHelper = t; }
    getInertBodyElement(t) { t = "<body><remove></remove>" + t; try {
        let n = new window.DOMParser().parseFromString(Ao(t), "text/html").body;
        return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(), n);
    }
    catch {
        return null;
    } }
}, mu = class {
    defaultDoc;
    inertDocument;
    constructor(t) { this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"); }
    getInertBodyElement(t) { let n = this.inertDocument.createElement("template"); return n.innerHTML = Ao(t), n; }
};
function Mw() { try {
    return !!new window.DOMParser().parseFromString(Ao(""), "text/html");
}
catch {
    return !1;
} }
var Nw = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function da(e) { return e = String(e), e.match(Nw) ? e : "unsafe:" + e; }
function bt(e) { let t = {}; for (let n of e.split(","))
    t[n] = !0; return t; }
function ti(...e) { let t = {}; for (let n of e)
    for (let o in n)
        n.hasOwnProperty(o) && (t[o] = !0); return t; }
var ov = bt("area,br,col,hr,img,wbr"), rv = bt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), iv = bt("rp,rt"), ww = ti(iv, rv), _w = ti(rv, bt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), Sw = ti(iv, bt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), vu = ti(ov, _w, Sw, ww), _d = bt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), bw = bt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), Rw = bt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"), sv = ti(_d, bw, Rw), Aw = bt("script,style,template"), yu = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) { let n = t.firstChild, o = !0, r = []; for (; n;) {
        if (n.nodeType === Node.ELEMENT_NODE ? o = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, o && n.firstChild) {
            r.push(n), n = kw(n);
            continue;
        }
        for (; n;) {
            n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
            let i = xw(n);
            if (i) {
                n = i;
                break;
            }
            n = r.pop();
        }
    } return this.buf.join(""); }
    startElement(t) { let n = Gh(t).toLowerCase(); if (!vu.hasOwnProperty(n))
        return this.sanitizedSomething = !0, !Aw.hasOwnProperty(n); this.buf.push("<"), this.buf.push(n); let o = t.attributes; for (let r = 0; r < o.length; r++) {
        let i = o.item(r), s = i.name, a = s.toLowerCase();
        if (!sv.hasOwnProperty(a)) {
            this.sanitizedSomething = !0;
            continue;
        }
        let c = i.value;
        _d[a] && (c = da(c)), this.buf.push(" ", s, '="', Wh(c), '"');
    } return this.buf.push(">"), !0; }
    endElement(t) { let n = Gh(t).toLowerCase(); vu.hasOwnProperty(n) && !ov.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">")); }
    chars(t) { this.buf.push(Wh(t)); }
};
function Ow(e, t) { return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY; }
function xw(e) { let t = e.nextSibling; if (t && e !== t.previousSibling)
    throw av(t); return t; }
function kw(e) { let t = e.firstChild; if (t && Ow(e, t))
    throw av(t); return t; }
function Gh(e) { let t = e.nodeName; return typeof t == "string" ? t : "FORM"; }
function av(e) { return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`); }
var Pw = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, Lw = /([^\#-~ |!])/g;
function Wh(e) { return e.replace(/&/g, "&amp;").replace(Pw, function (t) { let n = t.charCodeAt(0), o = t.charCodeAt(1); return "&#" + ((n - 55296) * 1024 + (o - 56320) + 65536) + ";"; }).replace(Lw, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
var ts;
function cv(e, t) { let n = null; try {
    ts = ts || nv(e);
    let o = t ? String(t) : "";
    n = ts.getInertBodyElement(o);
    let r = 5, i = o;
    do {
        if (r === 0)
            throw new Error("Failed to sanitize html because the input is unstable");
        r--, o = i, i = n.innerHTML, n = ts.getInertBodyElement(o);
    } while (o !== i);
    let a = new yu().sanitizeChildren(Eu(n) || n);
    return Ao(a);
}
finally {
    if (n) {
        let o = Eu(n) || n;
        for (; o.firstChild;)
            o.firstChild.remove();
    }
} }
function Eu(e) { return "content" in e && Fw(e) ? e.content : null; }
function Fw(e) { return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"; }
var _n = (function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e; })(_n || {});
function lv(e) { let t = ni(); return t ? Uh(t.sanitize(_n.HTML, e) || "") : Oo(e, "HTML") ? Uh(St(e)) : cv(Nt(), b(e)); }
function uv(e) { let t = ni(); return t ? t.sanitize(_n.STYLE, e) || "" : Oo(e, "Style") ? St(e) : b(e); }
function Sd(e) { let t = ni(); return t ? t.sanitize(_n.URL, e) || "" : Oo(e, "URL") ? St(e) : da(b(e)); }
function bd(e) { let t = ni(); if (t)
    return qh(t.sanitize(_n.RESOURCE_URL, e) || ""); if (Oo(e, "ResourceURL"))
    return qh(St(e)); throw new T(904, !1); }
function dv(e) { let t = ni(); if (t)
    return $h(t.sanitize(_n.SCRIPT, e) || ""); if (Oo(e, "Script"))
    return $h(St(e)); throw new T(905, !1); }
function fv(e) { return Ao(e[0]); }
function pv(e) { return yw(e[0]); }
function jw(e, t) { return t === "src" && (e === "embed" || e === "frame" || e === "iframe" || e === "media" || e === "script") || t === "href" && (e === "base" || e === "link") ? bd : Sd; }
function hv(e, t, n) { return jw(t, n)(e); }
function ni() { let e = g(); return e && e[Ge].sanitizer; }
var Vw = /^>|^->|<!--|-->|--!>|<!-$/g, Hw = /(<|>)/g, Bw = "\u200B$1\u200B";
function Uw(e) { return e.replace(Vw, t => t.replace(Hw, Bw)); }
function $w() { return qe([]); }
var qw = { name: "custom-elements" }, Gw = { name: "no-errors-schema" }, gv = !1;
function Ww(e) { gv = e; }
function zw() { return gv; }
var mv = !1;
function Qw(e) { mv = e; }
function Zw() { return mv; }
function vv(e) { return e.ownerDocument.defaultView; }
function yv(e) { return e.ownerDocument; }
function Rd(e) { return e.ownerDocument.body; }
var Yw = "\uFFFD";
function Jn(e) { return e instanceof Function ? e() : e; }
function Kw(e, t, n) { let o = e.length; for (;;) {
    let r = e.indexOf(t, n);
    if (r === -1)
        return r;
    if (r === 0 || e.charCodeAt(r - 1) <= 32) {
        let i = t.length;
        if (r + i === o || e.charCodeAt(r + i) <= 32)
            return r;
    }
    n = r + 1;
} }
var Ev = "ng-template";
function Jw(e, t, n, o) { let r = 0; if (o) {
    for (; r < t.length && typeof t[r] == "string"; r += 2)
        if (t[r] === "class" && Kw(t[r + 1].toLowerCase(), n, 0) !== -1)
            return !0;
}
else if (Ad(e))
    return !1; if (r = t.indexOf(1, r), r > -1) {
    let i;
    for (; ++r < t.length && typeof (i = t[r]) == "string";)
        if (i.toLowerCase() === n)
            return !0;
} return !1; }
function Ad(e) { return e.type === 4 && e.value !== Ev; }
function Xw(e, t, n) { let o = e.type === 4 && !n ? Ev : e.value; return t === o; }
function e_(e, t, n) { let o = 4, r = e.attrs, i = r !== null ? o_(r) : 0, s = !1; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
        if (!s && !Qe(o) && !Qe(c))
            return !1;
        if (s && Qe(c))
            continue;
        s = !1, o = c | o & 1;
        continue;
    }
    if (!s)
        if (o & 4) {
            if (o = 2 | o & 1, c !== "" && !Xw(e, c, n) || c === "" && t.length === 1) {
                if (Qe(o))
                    return !1;
                s = !0;
            }
        }
        else if (o & 8) {
            if (r === null || !Jw(e, r, c, n)) {
                if (Qe(o))
                    return !1;
                s = !0;
            }
        }
        else {
            let l = t[++a], u = t_(c, r, Ad(e), n);
            if (u === -1) {
                if (Qe(o))
                    return !1;
                s = !0;
                continue;
            }
            if (l !== "") {
                let d;
                if (u > i ? d = "" : d = r[u + 1].toLowerCase(), o & 2 && l !== d) {
                    if (Qe(o))
                        return !1;
                    s = !0;
                }
            }
        }
} return Qe(o) || s; }
function Qe(e) { return (e & 1) === 0; }
function t_(e, t, n, o) { if (t === null)
    return -1; let r = 0; if (o || !n) {
    let i = !1;
    for (; r < t.length;) {
        let s = t[r];
        if (s === e)
            return r;
        if (s === 3 || s === 6)
            i = !0;
        else if (s === 1 || s === 2) {
            let a = t[++r];
            for (; typeof a == "string";)
                a = t[++r];
            continue;
        }
        else {
            if (s === 4)
                break;
            if (s === 0) {
                r += 4;
                continue;
            }
        }
        r += i ? 1 : 2;
    }
    return -1;
}
else
    return r_(t, e); }
function Iv(e, t, n = !1) { for (let o = 0; o < t.length; o++)
    if (e_(e, t[o], n))
        return !0; return !1; }
function n_(e) { let t = e.attrs; if (t != null) {
    let n = t.indexOf(5);
    if ((n & 1) === 0)
        return t[n + 1];
} return null; }
function o_(e) { for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (Xg(n))
        return t;
} return e.length; }
function r_(e, t) { let n = e.indexOf(4); if (n > -1)
    for (n++; n < e.length;) {
        let o = e[n];
        if (typeof o == "number")
            return -1;
        if (o === t)
            return n;
        n++;
    } return -1; }
function i_(e, t) { e: for (let n = 0; n < t.length; n++) {
    let o = t[n];
    if (e.length === o.length) {
        for (let r = 0; r < e.length; r++)
            if (e[r] !== o[r])
                continue e;
        return !0;
    }
} return !1; }
function zh(e, t) { return e ? ":not(" + t.trim() + ")" : t; }
function s_(e) { let t = e[0], n = 1, o = 2, r = "", i = !1; for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string")
        if (o & 2) {
            let a = e[++n];
            r += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
        }
        else
            o & 8 ? r += "." + s : o & 4 && (r += " " + s);
    else
        r !== "" && !Qe(s) && (t += zh(i, r), r = ""), o = s, i = i || !Qe(o);
    n++;
} return r !== "" && (t += zh(i, r)), t; }
function a_(e) { return e.map(s_).join(","); }
function c_(e) { let t = [], n = [], o = 1, r = 2; for (; o < e.length;) {
    let i = e[o];
    if (typeof i == "string")
        r === 2 ? i !== "" && t.push(i, e[++o]) : r === 8 && n.push(i);
    else {
        if (!Qe(r))
            break;
        r = i;
    }
    o++;
} return n.length && t.push(1, ...n), t; }
var B = {};
function Od(e, t) { return e.createText(t); }
function Dv(e, t, n) { e.setValue(t, n); }
function xd(e, t) { return e.createComment(Uw(t)); }
function fa(e, t, n) { return e.createElement(t, n); }
function vn(e, t, n, o, r) { e.insertBefore(t, n, o, r); }
function Tv(e, t, n) { e.appendChild(t, n); }
function Qh(e, t, n, o, r) { o !== null ? vn(e, t, n, o, r) : Tv(e, t, n); }
function oi(e, t, n, o) { e.removeChild(null, t, n, o); }
function Cv(e) { e.textContent = ""; }
function l_(e, t, n) { e.setAttribute(t, "style", n); }
function u_(e, t, n) { n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n); }
function Mv(e, t, n) { let { mergedAttrs: o, classes: r, styles: i } = n; o !== null && eN(e, t, o), r !== null && u_(e, t, r), i !== null && l_(e, t, i); }
function kd(e, t, n, o, r, i, s, a, c, l, u) { let d = I + o, f = d + r, p = d_(d, f), h = typeof l == "function" ? l() : l; return p[m] = { type: e, blueprint: p, template: n, queries: null, viewQuery: a, declTNode: t, data: p.slice().fill(null, d), bindingStartIndex: d, expandoStartIndex: f, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: typeof i == "function" ? i() : i, pipeRegistry: typeof s == "function" ? s() : s, firstChild: null, schemas: c, consts: h, incompleteFirstPass: !1, ssrId: u }; }
function d_(e, t) { let n = []; for (let o = 0; o < t; o++)
    n.push(o < e ? null : B); return n; }
function Nv(e) { let t = e.tView; return t === null || t.incompleteFirstPass ? e.tView = kd(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t; }
function pa(e, t, n, o, r, i, s, a, c, l, u) { let d = t.blueprint.slice(); return d[U] = r, d[M] = o | 4 | 128 | 8 | 64 | 1024, (l !== null || e && e[M] & 2048) && (d[M] |= 2048), el(d), d[z] = d[on] = e, d[H] = n, d[Ge] = s || e && e[Ge], d[w] = a || e && e[w], d[k] = c || e && e[k] || null, d[se] = i, d[jn] = TN(), d[ae] = u, d[Qc] = l, d[J] = t.type == 2 ? e[J] : d, d; }
function f_(e, t, n) { let o = ce(t, e), r = Nv(n), i = e[Ge].rendererFactory, s = Ld(e, pa(e, r, null, Pd(n), o, t, null, i.createRenderer(o, n), null, null, null)); return e[t.index] = s; }
function Pd(e) { let t = 16; return e.signals ? t = 4096 : e.onPush && (t = 64), t; }
function ri(e, t, n, o) { if (n === 0)
    return -1; let r = t.length; for (let i = 0; i < n; i++)
    t.push(o), e.blueprint.push(o), e.data.push(null); return r; }
function Ld(e, t) { return e[Ft] ? e[sr][fe] = t : e[Ft] = t, e[sr] = t, t; }
function wv(e = 1) { _v(R(), g(), le() + e, !1); }
function _v(e, t, n, o) { if (!o)
    if ((t[M] & 3) === 3) {
        let i = e.preOrderCheckHooks;
        i !== null && cs(t, i, n);
    }
    else {
        let i = e.preOrderHooks;
        i !== null && ls(t, i, 0, n);
    } Ht(n); }
var ha = (function (e) { return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e; })(ha || {});
function kr(e, t, n, o) { let r = A(null); try {
    let [i, s, a] = e.inputs[n], c = null;
    (s & ha.SignalBased) !== 0 && (c = t[i][re]), c !== null && c.transformFn !== void 0 ? o = c.transformFn(o) : a !== null && (o = a.call(t, o)), e.setInput !== null ? e.setInput(t, c, o, n, i) : Gg(t, c, i, o);
}
finally {
    A(r);
} }
var bs = (function (e) { return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e; })(bs || {}), Iu;
function Fd(e, t) { return Iu(e, t); }
function p_(e) { Iu === void 0 && (Iu = e()); }
function Rs(e) { if (!e)
    return 0; let t = e.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3; return parseFloat(e) * t; }
function oo(e, t) { return e.getPropertyValue(t).split(",").map(o => o.trim()); }
function h_(e) { let t = oo(e, "transition-property"), n = oo(e, "transition-duration"), o = oo(e, "transition-delay"), r = { propertyName: "", duration: 0, animationName: void 0 }; for (let i = 0; i < t.length; i++) {
    let s = Rs(o[i]) + Rs(n[i]);
    s > r.duration && (r.propertyName = t[i], r.duration = s);
} return r; }
function g_(e) { let t = oo(e, "animation-name"), n = oo(e, "animation-delay"), o = oo(e, "animation-duration"), r = { animationName: "", propertyName: void 0, duration: 0 }; for (let i = 0; i < t.length; i++) {
    let s = Rs(n[i]) + Rs(o[i]);
    s > r.duration && (r.animationName = t[i], r.duration = s);
} return r; }
function Sv(e, t) { return e !== void 0 && e.duration > t.duration; }
function bv(e) { return (e.animationName != null || e.propertyName != null) && e.duration > 0; }
function m_(e, t) { let n = getComputedStyle(e), o = g_(n), r = h_(n), i = o.duration > r.duration ? o : r; Sv(t.get(e), i) || bv(i) && t.set(e, i); }
function Rv(e, t, n) { if (!n)
    return; let o = e.getAnimations(); return o.length === 0 ? m_(e, t) : v_(e, t, o); }
function v_(e, t, n) { let o = { animationName: void 0, propertyName: void 0, duration: 0 }; for (let r of n) {
    let i = r.effect?.getTiming(), s = typeof i?.duration == "number" ? i.duration : 0, a = (i?.delay ?? 0) + s, c, l;
    r.animationName ? l = r.animationName : c = r.transitionProperty, a >= o.duration && (o = { animationName: l, propertyName: c, duration: a });
} Sv(t.get(e), o) || bv(o) && t.set(e, o); }
var yn = new Set, ga = (function (e) { return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e; })(ga || {}), xo = new C(""), Zh = new Set;
function ee(e) { Zh.has(e) || (Zh.add(e), performance?.mark?.("mark_feature_usage", { detail: { feature: e } })); }
var Av = !1, Du = class extends od {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t = !1) { super(), this.__isAsync = t, Vi() && (this.destroyRef = E(Fe, { optional: !0 }) ?? void 0, this.pendingTasks = E(vt, { optional: !0 }) ?? void 0); }
    emit(t) { let n = A(null); try {
        super.next(t);
    }
    finally {
        A(n);
    } }
    subscribe(t, n, o) { let r = t, i = n || (() => null), s = o; if (t && typeof t == "object") {
        let c = t;
        r = c.next?.bind(c), i = c.error?.bind(c), s = c.complete?.bind(c);
    } this.__isAsync && (i = this.wrapInTimeout(i), r && (r = this.wrapInTimeout(r)), s && (s = this.wrapInTimeout(s))); let a = super.subscribe({ next: r, error: i, complete: s }); return t instanceof rd && t.add(a), a; }
    wrapInTimeout(t) { return n => { let o = this.pendingTasks?.add(); setTimeout(() => { try {
        t(n);
    }
    finally {
        o !== void 0 && this.pendingTasks?.remove(o);
    } }); }; }
}, Et = Du;
function Ov(e) { let t, n; function o() { e = un; try {
    n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n), t !== void 0 && clearTimeout(t);
}
catch { } } return t = setTimeout(() => { e(), o(); }), typeof requestAnimationFrame == "function" && (n = requestAnimationFrame(() => { e(), o(); })), () => o(); }
function Yh(e) { return queueMicrotask(() => e()), () => { e = un; }; }
var jd = "isAngularZone", As = jd + "_ID", y_ = 0, q = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new Et(!1);
    onMicrotaskEmpty = new Et(!1);
    onStable = new Et(!1);
    onError = new Et(!1);
    constructor(t) { let { enableLongStackTrace: n = !1, shouldCoalesceEventChangeDetection: o = !1, shouldCoalesceRunChangeDetection: r = !1, scheduleInRootZone: i = Av } = t; if (typeof Zone > "u")
        throw new T(908, !1); Zone.assertZonePatched(); let s = this; s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), n && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !r && o, s.shouldCoalesceRunChangeDetection = r, s.callbackScheduled = !1, s.scheduleInRootZone = i, D_(s); }
    static isInAngularZone() { return typeof Zone < "u" && Zone.current.get(jd) === !0; }
    static assertInAngularZone() { if (!e.isInAngularZone())
        throw new T(909, !1); }
    static assertNotInAngularZone() { if (e.isInAngularZone())
        throw new T(909, !1); }
    run(t, n, o) { return this._inner.run(t, n, o); }
    runTask(t, n, o, r) { let i = this._inner, s = i.scheduleEventTask("NgZoneEvent: " + r, t, E_, un, un); try {
        return i.runTask(s, n, o);
    }
    finally {
        i.cancelTask(s);
    } }
    runGuarded(t, n, o) { return this._inner.runGuarded(t, n, o); }
    runOutsideAngular(t) { return this._outer.run(t); }
}, E_ = {};
function Vd(e) { if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
        e._nesting++, e.onMicrotaskEmpty.emit(null);
    }
    finally {
        if (e._nesting--, !e.hasPendingMicrotasks)
            try {
                e.runOutsideAngular(() => e.onStable.emit(null));
            }
            finally {
                e.isStable = !0;
            }
    } }
function I_(e) { if (e.isCheckStableRunning || e.callbackScheduled)
    return; e.callbackScheduled = !0; function t() { Ov(() => { e.callbackScheduled = !1, Tu(e), e.isCheckStableRunning = !0, Vd(e), e.isCheckStableRunning = !1; }); } e.scheduleInRootZone ? Zone.root.run(() => { t(); }) : e._outer.run(() => { t(); }), Tu(e); }
function D_(e) { let t = () => { I_(e); }, n = y_++; e._inner = e._inner.fork({ name: "angular", properties: { [jd]: !0, [As]: n, [As + n]: !0 }, onInvokeTask: (o, r, i, s, a, c) => { if (T_(c))
        return o.invokeTask(i, s, a, c); try {
        return Kh(e), o.invokeTask(i, s, a, c);
    }
    finally {
        (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(), Jh(e);
    } }, onInvoke: (o, r, i, s, a, c, l) => { try {
        return Kh(e), o.invoke(i, s, a, c, l);
    }
    finally {
        e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !C_(c) && t(), Jh(e);
    } }, onHasTask: (o, r, i, s) => { o.hasTask(i, s), r === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, Tu(e), Vd(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask)); }, onHandleError: (o, r, i, s) => (o.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1) }); }
function Tu(e) { e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1; }
function Kh(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)); }
function Jh(e) { e._nesting--, Vd(e); }
var uo = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new Et;
    onMicrotaskEmpty = new Et;
    onStable = new Et;
    onError = new Et;
    run(t, n, o) { return t.apply(n, o); }
    runGuarded(t, n, o) { return t.apply(n, o); }
    runOutsideAngular(t) { return t(); }
    runTask(t, n, o, r) { return t.apply(n, o); }
};
function T_(e) { return xv(e, "__ignore_ng_zone__"); }
function C_(e) { return xv(e, "__scheduler_tick__"); }
function xv(e, t) { return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0; }
function kv(e = "zone.js", t) { return e === "noop" ? new uo : e === "zone.js" ? new q(t) : e; }
var ma = (() => { class e {
    impl = null;
    execute() { this.impl?.execute(); }
    static \u0275prov = j({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Hd = [0, 1, 2, 3], Bd = (() => { class e {
    ngZone = E(q);
    scheduler = E(Ce);
    errorHandler = E(Xe, { optional: !0 });
    sequences = new Set;
    deferredRegistrations = new Set;
    executing = !1;
    constructor() { E(xo, { optional: !0 }); }
    execute() { let n = this.sequences.size > 0; n && V(16), this.executing = !0; for (let o of Hd)
        for (let r of this.sequences)
            if (!(r.erroredOrDestroyed || !r.hooks[o]))
                try {
                    r.pipelinedValue = this.ngZone.runOutsideAngular(() => this.maybeTrace(() => { let i = r.hooks[o]; return i(r.pipelinedValue); }, r.snapshot));
                }
                catch (i) {
                    r.erroredOrDestroyed = !0, this.errorHandler?.handleError(i);
                } this.executing = !1; for (let o of this.sequences)
        o.afterRun(), o.once && (this.sequences.delete(o), o.destroy()); for (let o of this.deferredRegistrations)
        this.sequences.add(o); this.deferredRegistrations.size > 0 && this.scheduler.notify(7), this.deferredRegistrations.clear(), n && V(17); }
    register(n) { let { view: o } = n; o !== void 0 ? ((o[sn] ??= []).push(n), Vt(o), o[M] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n); }
    addSequence(n) { this.sequences.add(n), this.scheduler.notify(7); }
    unregister(n) { this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0) : (this.sequences.delete(n), this.deferredRegistrations.delete(n)); }
    maybeTrace(n, o) { return o ? o.run(ga.AFTER_NEXT_RENDER, n) : n(); }
    static \u0275prov = j({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Pr = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, o, r, i, s = null) { this.impl = t, this.hooks = n, this.view = o, this.once = r, this.snapshot = s, this.unregisterOnDestroy = i?.onDestroy(() => this.destroy()); }
    afterRun() { this.erroredOrDestroyed = !1, this.pipelinedValue = void 0, this.snapshot?.dispose(), this.snapshot = null; }
    destroy() { this.impl.unregister(this), this.unregisterOnDestroy?.(); let t = this.view?.[sn]; t && (this.view[sn] = t.filter(n => n !== this)); }
};
function Pv(e, t) { let n = t?.injector ?? E(ie); return typeof ngServerMode < "u" && ngServerMode ? va : (ee("NgAfterRender"), Lv(e, n, t, !1)); }
function Ud(e, t) { let n = t?.injector ?? E(ie); return typeof ngServerMode < "u" && ngServerMode ? va : (ee("NgAfterNextRender"), Lv(e, n, t, !0)); }
function M_(e) { return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]; }
function Lv(e, t, n, o) { let r = t.get(ma); r.impl ??= t.get(Bd); let i = t.get(xo, null, { optional: !0 }), s = n?.manualCleanup !== !0 ? t.get(Fe) : null, a = t.get(ln, null, { optional: !0 }), c = new Pr(r.impl, M_(e), a?.view, o, s, i?.snapshot(null)); return r.impl.register(c), c; }
var va = { destroy() { } }, ya = new C("", { providedIn: "root", factory: () => ({ queue: new Set, isScheduled: !1, scheduler: null }) });
function Fv(e, t, n) { let o = e.get(ya); if (Array.isArray(t))
    for (let r of t)
        o.queue.add(r), n?.detachedLeaveAnimationFns?.push(r);
else
    o.queue.add(t), n?.detachedLeaveAnimationFns?.push(t); o.scheduler && o.scheduler(e); }
function N_(e, t) { let n = e.get(ya); if (t.detachedLeaveAnimationFns) {
    for (let o of t.detachedLeaveAnimationFns)
        n.queue.delete(o);
    t.detachedLeaveAnimationFns = void 0;
} }
function w_(e) { let t = e.get(ya); t.isScheduled || (Ud(() => { t.isScheduled = !1; for (let n of t.queue)
    n(); t.queue.clear(); }, { injector: e }), t.isScheduled = !0); }
function Ea(e) { let t = e.get(ya); t.scheduler = w_, t.scheduler(e); }
function $d(e, t) { for (let [n, o] of t)
    Fv(e, o.animateFns); }
function Xh(e, t, n, o) { let r = e?.[gt]?.enter; t !== null && r && r.has(n.index) && $d(o, r); }
function Xn(e, t, n, o, r, i, s, a) { if (r != null) {
    let c, l = !1;
    Y(r) ? c = r : X(r) && (l = !0, r = r[U]);
    let u = P(r);
    e === 0 && o !== null ? (Xh(a, o, i, n), s == null ? Tv(t, o, u) : vn(t, o, u, s || null, !0)) : e === 1 && o !== null ? (Xh(a, o, i, n), vn(t, o, u, s || null, !0)) : e === 2 ? eg(a, i, n, d => { oi(t, u, l, d); }) : e === 3 && eg(a, i, n, () => { t.destroyNode(u); }), c != null && x_(t, e, n, c, i, o, s);
} }
function jv(e, t) { Vv(e, t), t[U] = null, t[se] = null; }
function __(e, t, n, o, r, i) { o[U] = r, o[se] = t, Ia(e, o, n, 1, r, i); }
function Vv(e, t) { t[Ge].changeDetectionScheduler?.notify(9), Ia(e, t, t[w], 2, null, null); }
function S_(e) { let t = e[Ft]; if (!t)
    return Fl(e[m], e); for (; t;) {
    let n = null;
    if (X(t))
        n = t[Ft];
    else {
        let o = t[$];
        o && (n = o);
    }
    if (!n) {
        for (; t && !t[fe] && t !== e;)
            X(t) && Fl(t[m], t), t = t[z];
        t === null && (t = e), X(t) && Fl(t[m], t), n = t && t[fe];
    }
    t = n;
} }
function qd(e, t) { let n = e[an], o = n.indexOf(t); n.splice(o, 1); }
function ii(e, t) { if (nt(t))
    return; let n = t[w]; n.destroyNode && Ia(e, t, n, 3, null, null), S_(t); }
function Fl(e, t) { if (nt(t))
    return; let n = A(null); try {
    t[M] &= -129, t[M] |= 256, t[Ae] && kt(t[Ae]), A_(e, t), R_(e, t), t[m].type === 1 && t[w].destroy();
    let o = t[pt];
    if (o !== null && Y(t[z])) {
        o !== t[z] && qd(o, t);
        let r = t[et];
        r !== null && r.detachView(e);
    }
    ru(t);
}
finally {
    A(n);
} }
function eg(e, t, n, o) { let r = e?.[gt]; if (r == null || r.leave == null || !r.leave.has(t.index))
    return o(!1); e && yn.add(e), Fv(n, () => { if (r.leave && r.leave.has(t.index)) {
    let s = r.leave.get(t.index), a = [];
    if (s) {
        for (let c = 0; c < s.animateFns.length; c++) {
            let l = s.animateFns[c], { promise: u } = l();
            a.push(u);
        }
        r.detachedLeaveAnimationFns = void 0;
    }
    r.running = Promise.allSettled(a), b_(e, o);
}
else
    e && yn.delete(e), o(!1); }, r); }
function b_(e, t) { let n = e[gt]?.running; if (n) {
    n.then(() => { e[gt].running = void 0, yn.delete(e), t(!0); });
    return;
} t(!1); }
function R_(e, t) { let n = e.cleanup, o = t[Lt]; if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
        if (typeof n[s] == "string") {
            let a = n[s + 3];
            a >= 0 ? o[a]() : o[-a].unsubscribe(), s += 2;
        }
        else {
            let a = o[n[s + 1]];
            n[s].call(a);
        } o !== null && (t[Lt] = null); let r = t[dt]; if (r !== null) {
    t[dt] = null;
    for (let s = 0; s < r.length; s++) {
        let a = r[s];
        a();
    }
} let i = t[ht]; if (i !== null) {
    t[ht] = null;
    for (let s of i)
        s.destroy();
} }
function A_(e, t) { let n; if (e != null && (n = e.destroyHooks) != null)
    for (let o = 0; o < n.length; o += 2) {
        let r = t[n[o]];
        if (!(r instanceof mn)) {
            let i = n[o + 1];
            if (Array.isArray(i))
                for (let s = 0; s < i.length; s += 2) {
                    let a = r[i[s]], c = i[s + 1];
                    V(4, a, c);
                    try {
                        c.call(a);
                    }
                    finally {
                        V(5, a, c);
                    }
                }
            else {
                V(4, r, i);
                try {
                    i.call(r);
                }
                finally {
                    V(5, r, i);
                }
            }
        }
    } }
function Gd(e, t, n) { return Hv(e, t.parent, n); }
function Hv(e, t, n) { let o = t; for (; o !== null && o.type & 168;)
    t = o, o = t.parent; if (o === null)
    return n[U]; if (Me(o)) {
    let { encapsulation: r } = e.data[o.directiveStart + o.componentOffset];
    if (r === Tt.None || r === Tt.Emulated)
        return null;
} return ce(o, n); }
function Bv(e, t, n) { return $v(e, t, n); }
function Uv(e, t, n) { return e.type & 40 ? ce(e, n) : null; }
var $v = Uv, Cu;
function qv(e, t) { $v = e, Cu = t; }
function Wd(e, t, n, o) { let r = Gd(e, o, t), i = t[w], s = o.parent || t[se], a = Bv(s, o, t); if (r != null)
    if (Array.isArray(n))
        for (let c = 0; c < n.length; c++)
            Qh(i, r, n[c], a, !1);
    else
        Qh(i, r, n, a, !1); Cu !== void 0 && Cu(i, o, t, n, r); }
function hn(e, t) { if (t !== null) {
    let n = t.type;
    if (n & 3)
        return ce(t, e);
    if (n & 4)
        return Os(-1, e[t.index]);
    if (n & 8) {
        let o = t.child;
        if (o !== null)
            return hn(e, o);
        {
            let r = e[t.index];
            return Y(r) ? Os(-1, r) : P(r);
        }
    }
    else {
        if (n & 128)
            return hn(e, t.next);
        if (n & 32)
            return Fd(t, e)() || P(e[t.index]);
        {
            let o = Gv(e, t);
            if (o !== null) {
                if (Array.isArray(o))
                    return o[0];
                let r = ft(e[J]);
                return hn(r, o);
            }
            else
                return hn(e, t.next);
        }
    }
} return null; }
function Gv(e, t) { if (t !== null) {
    let o = e[J][se], r = t.projection;
    return o.projection[r];
} return null; }
function Os(e, t) { let n = $ + e + 1; if (n < t.length) {
    let o = t[n], r = o[m].firstChild;
    if (r !== null)
        return hn(o, r);
} return t[We]; }
function zd(e, t, n, o, r, i, s) { for (; n != null;) {
    let a = o[k];
    if (n.type === 128) {
        n = n.next;
        continue;
    }
    let c = o[n.index], l = n.type;
    if (s && t === 0 && (c && je(P(c), o), n.flags |= 2), !Ro(n))
        if (l & 8)
            zd(e, t, n.child, o, r, i, !1), Xn(t, e, a, r, c, n, i, o);
        else if (l & 32) {
            let u = Fd(n, o), d;
            for (; d = u();)
                Xn(t, e, a, r, d, n, i, o);
            Xn(t, e, a, r, c, n, i, o);
        }
        else
            l & 16 ? Wv(e, t, o, n, r, i) : Xn(t, e, a, r, c, n, i, o);
    n = s ? n.projectionNext : n.next;
} }
function Ia(e, t, n, o, r, i) { zd(n, o, e.firstChild, t, r, i, !1); }
function O_(e, t, n) { let o = t[w], r = Gd(e, n, t), i = n.parent || t[se], s = Bv(i, n, t); Wv(o, 0, t, n, r, s); }
function Wv(e, t, n, o, r, i) { let s = n[J], c = s[se].projection[o.projection]; if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
        let u = c[l];
        Xn(t, e, n[k], r, u, o, i, n);
    }
else {
    let l = c, u = s[z];
    Or(o) && (l.flags |= 128), zd(e, t, l, u, r, i, !0);
} }
function x_(e, t, n, o, r, i, s) { let a = o[We], c = P(o); a !== c && Xn(t, e, n, i, a, r, s); for (let l = $; l < o.length; l++) {
    let u = o[l];
    Ia(u[m], u, e, t, i, a);
} }
function k_(e, t, n, o, r) { if (t)
    r ? e.addClass(n, o) : e.removeClass(n, o);
else {
    let i = o.indexOf("-") === -1 ? void 0 : bs.DashCase;
    r == null ? e.removeStyle(n, o, i) : (typeof r == "string" && r.endsWith("!important") && (r = r.slice(0, -10), i |= bs.Important), e.setStyle(n, o, r, i));
} }
function zv(e, t, n, o, r) { let i = le(), s = o & 2; try {
    Ht(-1), s && t.length > I && _v(e, t, I, !1), V(s ? 2 : 0, r, n), n(o, r);
}
finally {
    Ht(i), V(s ? 3 : 1, r, n);
} }
function Da(e, t, n) { V_(e, t, n), (n.flags & 64) === 64 && H_(e, t, n); }
function ko(e, t, n = ce) { let o = t.localNames; if (o !== null) {
    let r = t.index + 1;
    for (let i = 0; i < o.length; i += 2) {
        let s = o[i + 1], a = s === -1 ? n(t, e) : e[s];
        e[r++] = a;
    }
} }
function P_(e, t, n, o) { let i = o.get(pd, bm) || n === Tt.ShadowDom, s = e.selectRootElement(t, i); return L_(s), s; }
function L_(e) { Qv(e); }
var Qv = () => null;
function F_(e) { pm(e) ? Cv(e) : iw(e); }
function Zv() { Qv = F_; }
function j_(e) { return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e; }
function Qd(e, t, n, o, r, i) { let s = t[m]; if (Na(e, s, t, n, o)) {
    Me(e) && Yv(t, e.index);
    return;
} e.type & 3 && (n = j_(n)), Zd(e, t, n, o, r, i); }
function Zd(e, t, n, o, r, i) { if (e.type & 3) {
    let s = ce(e, t);
    o = i != null ? i(o, e.value || "", n) : o, r.setProperty(s, n, o);
}
else
    e.type & 12; }
function Yv(e, t) { let n = ge(t, e); n[M] & 16 || (n[M] |= 64); }
function V_(e, t, n) { let o = n.directiveStart, r = n.directiveEnd; Me(n) && f_(t, n, e.data[o + n.componentOffset]), e.firstCreatePass || Cs(n, t); let i = n.initialInputs; for (let s = o; s < r; s++) {
    let a = e.data[s], c = Ar(t, e, s, n);
    if (je(c, t), i !== null && $_(t, s - o, c, a, n, i), Ne(a)) {
        let l = ge(n.index, t);
        l[H] = Ar(t, e, s, n);
    }
} }
function H_(e, t, n) { let o = n.directiveStart, r = n.directiveEnd, i = n.index, s = Ih(); try {
    Ht(i);
    for (let a = o; a < r; a++) {
        let c = e.data[a], l = t[a];
        Wi(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && B_(c, l);
    }
}
finally {
    Ht(-1), Wi(s);
} }
function B_(e, t) { e.hostBindings !== null && e.hostBindings(1, t); }
function Yd(e, t) { let n = e.directiveRegistry, o = null; if (n)
    for (let r = 0; r < n.length; r++) {
        let i = n[r];
        Iv(t, i.selectors, !1) && (o ??= [], Ne(i) ? o.unshift(i) : o.push(i));
    } return o; }
function U_(e, t, n, o, r, i) { let s = ce(e, t); Ta(t[w], s, i, e.value, n, o, r); }
function Ta(e, t, n, o, r, i, s) { if (i == null)
    e.removeAttribute(t, r, n);
else {
    let a = s == null ? b(i) : s(i, o || "", r);
    e.setAttribute(t, r, a, n);
} }
function $_(e, t, n, o, r, i) { let s = i[t]; if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
        let c = s[a], l = s[a + 1];
        kr(o, n, c, l);
    } }
function Ca(e, t, n, o, r) { let i = I + n, s = t[m], a = r(s, t, e, o, n); t[i] = a, ot(e, !0); let c = e.type === 2; return c ? (Mv(t[w], a, e), (gh() === 0 || Vn(e)) && je(a, t), mh()) : je(a, t), pr() && (!c || !Ro(e)) && Wd(s, t, a, e), e; }
function Ma(e) { let t = e; return fl() ? pl() : (t = t.parent, ot(t, !1)), t; }
function Kv(e, t, n) { return (e === null || Ne(e)) && (n = cr(n[t.index])), n[w]; }
function Kd(e, t) { let n = e[k]; if (!n)
    return; let o; try {
    o = n.get(st, null);
}
catch {
    o = null;
} o?.(t); }
function Na(e, t, n, o, r) { let i = e.inputs?.[o], s = e.hostDirectiveInputs?.[o], a = !1; if (s)
    for (let c = 0; c < s.length; c += 2) {
        let l = s[c], u = s[c + 1], d = t.data[l];
        kr(d, n[l], u, r), a = !0;
    } if (i)
    for (let c of i) {
        let l = n[c], u = t.data[c];
        kr(u, l, o, r), a = !0;
    } return a; }
function q_(e, t, n, o, r, i) { let s = null, a = null, c = null, l = !1, u = e.directiveToIndex.get(o.type); if (typeof u == "number" ? s = u : [s, a, c] = u, a !== null && c !== null && e.hostDirectiveInputs?.hasOwnProperty(r)) {
    let d = e.hostDirectiveInputs[r];
    for (let f = 0; f < d.length; f += 2) {
        let p = d[f];
        if (p >= a && p <= c) {
            let h = t.data[p], v = d[f + 1];
            kr(h, n[p], v, i), l = !0;
        }
        else if (p > c)
            break;
    }
} return s !== null && o.inputs.hasOwnProperty(r) && (kr(o, n[s], r, i), l = !0), l; }
function G_(e, t) { let n = ge(t, e), o = n[m]; W_(o, n); let r = n[U]; r !== null && n[ae] === null && (n[ae] = Um(r, n[k])), V(18), wa(o, n, n[H]), V(19, n[H]); }
function W_(e, t) { for (let n = t.length; n < e.blueprint.length; n++)
    t.push(e.blueprint[n]); }
function wa(e, t, n) { Zi(t); try {
    let o = e.viewQuery;
    o !== null && lu(1, o, n);
    let r = e.template;
    r !== null && zv(e, t, r, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[et]?.finishViewCreation(e), e.staticContentQueries && Xm(e, t), e.staticViewQueries && lu(2, e.viewQuery, n);
    let i = e.components;
    i !== null && z_(t, i);
}
catch (o) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), o;
}
finally {
    t[M] &= -5, Yi();
} }
function z_(e, t) { for (let n = 0; n < t.length; n++)
    G_(e, t[n]); }
function Po(e, t, n, o) { let r = A(null); try {
    let i = t.tView, a = e[M] & 4096 ? 4096 : 16, c = pa(e, i, n, a, null, t, null, null, o?.injector ?? null, o?.embeddedViewInjector ?? null, o?.dehydratedView ?? null), l = e[t.index];
    c[pt] = l;
    let u = e[et];
    return u !== null && (c[et] = u.createEmbeddedView(i)), wa(i, c, n), c;
}
finally {
    A(r);
} }
function En(e, t) { return !t || t.firstChild === null || Or(e); }
function fo(e, t, n, o, r = !1) { for (; n !== null;) {
    if (n.type === 128) {
        n = r ? n.projectionNext : n.next;
        continue;
    }
    let i = t[n.index];
    i !== null && o.push(P(i)), Y(i) && _a(i, o);
    let s = n.type;
    if (s & 8)
        fo(e, t, n.child, o);
    else if (s & 32) {
        let a = Fd(n, t), c;
        for (; c = a();)
            o.push(c);
    }
    else if (s & 16) {
        let a = Gv(t, n);
        if (Array.isArray(a))
            o.push(...a);
        else {
            let c = ft(t[J]);
            fo(c[m], c, a, o, !0);
        }
    }
    n = r ? n.projectionNext : n.next;
} return o; }
function _a(e, t) { for (let n = $; n < e.length; n++) {
    let o = e[n], r = o[m].firstChild;
    r !== null && fo(o[m], o, r, t);
} e[We] !== e[U] && t.push(e[We]); }
function Jv(e) { if (e[sn] !== null) {
    for (let t of e[sn])
        t.impl.addSequence(t);
    e[sn].length = 0;
} }
var Xv = [];
function Q_(e) { return e[Ae] ?? Z_(e); }
function Z_(e) { let t = Xv.pop() ?? Object.create(K_); return t.lView = e, t; }
function Y_(e) { e.lView[Ae] !== e && (e.lView = null, Xv.push(e)); }
var K_ = Te(G({}, Dc), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { Vt(e.lView); }, consumerOnSignalRead() { this.lView[Ae] = this; } });
function J_(e) { let t = e[Ae] ?? Object.create(X_); return t.lView = e, t; }
var X_ = Te(G({}, Dc), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { let t = ft(e.lView); for (; t && !ey(t[m]);)
        t = ft(t); t && Ui(t); }, consumerOnSignalRead() { this.lView[Ae] = this; } });
function ey(e) { return e.type !== 2; }
function ty(e) { if (e[ht] === null)
    return; let t = !0; for (; t;) {
    let n = !1;
    for (let o of e[ht])
        o.dirty && (n = !0, o.zone === null || Zone.current === o.zone ? o.run() : o.zone.run(() => o.run()));
    t = n && !!(e[M] & 8192);
} }
var eS = 100;
function ny(e, t = 0) { let o = e[Ge].rendererFactory, r = !1; r || o.begin?.(); try {
    tS(e, t);
}
finally {
    r || o.end?.();
} }
function tS(e, t) { let n = gl(); try {
    Un(!0), Mu(e, t);
    let o = 0;
    for (; Hn(e);) {
        if (o === eS)
            throw new T(103, !1);
        o++, Mu(e, 1);
    }
}
finally {
    Un(n);
} }
function oy(e, t, n, o) { if (nt(t))
    return; let r = t[M], i = !1, s = !1; Zi(t); let a = !0, c = null, l = null; i || (ey(e) ? (l = Q_(t), c = qo(l)) : Di() === null ? (a = !1, l = J_(t), c = qo(l)) : t[Ae] && (kt(t[Ae]), t[Ae] = null)); try {
    el(t), ml(e.bindingStartIndex), n !== null && zv(e, t, n, 2, o);
    let u = (r & 3) === 3;
    if (!i)
        if (u) {
            let p = e.preOrderCheckHooks;
            p !== null && cs(t, p, null);
        }
        else {
            let p = e.preOrderHooks;
            p !== null && ls(t, p, 0, null), Rl(t, 0);
        }
    if (s || nS(t), ty(t), ry(t, 0), e.contentQueries !== null && Xm(e, t), !i)
        if (u) {
            let p = e.contentCheckHooks;
            p !== null && cs(t, p);
        }
        else {
            let p = e.contentHooks;
            p !== null && ls(t, p, 1), Rl(t, 1);
        }
    rS(e, t);
    let d = e.components;
    d !== null && sy(t, d, 0);
    let f = e.viewQuery;
    if (f !== null && lu(2, f, o), !i)
        if (u) {
            let p = e.viewCheckHooks;
            p !== null && cs(t, p);
        }
        else {
            let p = e.viewHooks;
            p !== null && ls(t, p, 2), Rl(t, 2);
        }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[Hi]) {
        for (let p of t[Hi])
            p();
        t[Hi] = null;
    }
    i || (Jv(t), t[M] &= -73);
}
catch (u) {
    throw i || Vt(t), u;
}
finally {
    l !== null && (Ci(l, c), a && Y_(l)), Yi();
} }
function ry(e, t) { for (let n = Em(e); n !== null; n = Im(n))
    for (let o = $; o < n.length; o++) {
        let r = n[o];
        iy(r, t);
    } }
function nS(e) { for (let t = Em(e); t !== null; t = Im(t)) {
    if (!(t[M] & 2))
        continue;
    let n = t[an];
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        Ui(r);
    }
} }
function oS(e, t, n) { V(18); let o = ge(t, e); iy(o, n), V(19, o[H]); }
function iy(e, t) { Bi(e) && Mu(e, t); }
function Mu(e, t) { let o = e[m], r = e[M], i = e[Ae], s = !!(t === 0 && r & 16); if (s ||= !!(r & 64 && t === 0), s ||= !!(r & 1024), s ||= !!(i?.dirty && Mi(i)), s ||= !1, i && (i.dirty = !1), e[M] &= -9217, s)
    oy(o, e, o.template, e[H]);
else if (r & 8192) {
    let a = A(null);
    try {
        ty(e), ry(e, 1);
        let c = o.components;
        c !== null && sy(e, c, 1), Jv(e);
    }
    finally {
        A(a);
    }
} }
function sy(e, t, n) { for (let o = 0; o < t.length; o++)
    oS(e, t[o], n); }
function rS(e, t) { let n = e.hostBindingOpCodes; if (n !== null)
    try {
        for (let o = 0; o < n.length; o++) {
            let r = n[o];
            if (r < 0)
                Ht(~r);
            else {
                let i = r, s = n[++o], a = n[++o];
                Eh(s, i);
                let c = t[i];
                V(24, c), a(2, c), V(25, c);
            }
        }
    }
    finally {
        Ht(-1);
    } }
function si(e, t) { let n = gl() ? 64 : 1088; for (e[Ge].changeDetectionScheduler?.notify(t); e;) {
    e[M] |= n;
    let o = ft(e);
    if (tt(e) && !o)
        return e;
    e = o;
} return null; }
function ay(e, t, n, o) { return [e, !0, 0, t, null, o, null, n, null, null]; }
function cy(e, t) { let n = $ + t; if (n < e.length)
    return e[n]; }
function Lo(e, t, n, o = !0) { let r = t[m]; if (iS(r, t, e, n), o) {
    let s = Os(n, e), a = t[w], c = a.parentNode(e[We]);
    c !== null && __(r, e[se], a, t, c, s);
} let i = t[ae]; i !== null && i.firstChild !== null && (i.firstChild = null); }
function Jd(e, t) { let n = Lr(e, t); return n !== void 0 && ii(n[m], n), n; }
function Lr(e, t) { if (e.length <= $)
    return; let n = $ + t, o = e[n]; if (o) {
    let r = o[pt];
    r !== null && r !== e && qd(r, o), t > 0 && (e[n - 1][fe] = o[fe]);
    let i = nr(e, $ + t);
    jv(o[m], o);
    let s = i[et];
    s !== null && s.detachView(i[m]), o[z] = null, o[fe] = null, o[M] &= -129;
} return o; }
function iS(e, t, n, o) { let r = $ + o, i = n.length; o > 0 && (n[r - 1][fe] = t), o < i - $ ? (t[fe] = n[r], Hc(n, $ + o, t)) : (n.push(t), t[fe] = null), t[z] = n; let s = t[pt]; s !== null && n !== s && ly(s, t); let a = t[et]; a !== null && a.insertView(e), $i(t), t[M] |= 128; }
function ly(e, t) { let n = e[an], o = t[z]; if (X(o))
    e[M] |= 2;
else {
    let r = o[z][J];
    t[J] !== r && (e[M] |= 2);
} n === null ? e[an] = [t] : n.push(t); }
var Gt = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() { let t = this._lView, n = t[m]; return fo(n, t, n.firstChild, []); }
    constructor(t, n) { this._lView = t, this._cdRefInjectingView = n; }
    get context() { return this._lView[H]; }
    set context(t) { this._lView[H] = t; }
    get destroyed() { return nt(this._lView); }
    destroy() { if (this._appRef)
        this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
        let t = this._lView[z];
        if (Y(t)) {
            let n = t[ar], o = n ? n.indexOf(this) : -1;
            o > -1 && (Lr(t, o), nr(n, o));
        }
        this._attachedToViewContainer = !1;
    } ii(this._lView[m], this._lView); }
    onDestroy(t) { ur(this._lView, t); }
    markForCheck() { si(this._cdRefInjectingView || this._lView, 4); }
    detach() { this._lView[M] &= -129; }
    reattach() { $i(this._lView), this._lView[M] |= 128; }
    detectChanges() { this._lView[M] |= 1024, ny(this._lView); }
    checkNoChanges() { }
    attachToViewContainerRef() { if (this._appRef)
        throw new T(902, !1); this._attachedToViewContainer = !0; }
    detachFromAppRef() { this._appRef = null; let t = tt(this._lView), n = this._lView[pt]; n !== null && !t && qd(n, this._lView), Vv(this._lView[m], this._lView); }
    attachToAppRef(t) { if (this._attachedToViewContainer)
        throw new T(902, !1); this._appRef = t; let n = tt(this._lView), o = this._lView[pt]; o !== null && !n && ly(o, this._lView), $i(this._lView); }
};
function sS(e) { return Hn(e._lView) || !!(e._lView[M] & 64); }
function aS(e) { Ui(e._lView); }
var Fr = (() => { class e {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    static __NG_ELEMENT_ID__ = cS;
    constructor(n, o, r) { this._declarationLView = n, this._declarationTContainer = o, this.elementRef = r; }
    get ssrId() { return this._declarationTContainer.tView?.ssrId || null; }
    createEmbeddedView(n, o) { return this.createEmbeddedViewImpl(n, o); }
    createEmbeddedViewImpl(n, o, r) { let i = Po(this._declarationLView, this._declarationTContainer, n, { embeddedViewInjector: o, dehydratedView: r }); return new Gt(i); }
} return e; })();
function cS() { return Sa(_(), g()); }
function Sa(e, t) { return e.type & 4 ? new Fr(t, e, Mo(e, t)) : null; }
var Nu = "<-- AT THIS LOCATION";
function lS(e) { switch (e) {
    case 4: return "view container";
    case 2: return "element";
    case 8: return "ng-container";
    case 32: return "icu";
    case 64: return "i18n";
    case 16: return "projection";
    case 1: return "text";
    case 128: return "@let";
    default: return "<unknown>";
} }
function uS(e, t) {
    let n = `During serialization, Angular was unable to find an element in the DOM:

`, o = `${hS(e, t, !1)}

`, r = mS();
    throw new T(-502, n + o + r);
}
function uy(e) {
    let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n", n = `${gS(e)}

`, o = t + n + vS();
    return new T(-503, o);
}
function dS(e) { let t = []; if (e.attrs)
    for (let n = 0; n < e.attrs.length;) {
        let o = e.attrs[n++];
        if (typeof o == "number")
            break;
        let r = e.attrs[n++];
        t.push(`${o}="${xs(r)}"`);
    } return t.join(" "); }
var fS = new Set(["ngh", "ng-version", "ng-server-context"]);
function pS(e) { let t = []; for (let n = 0; n < e.attributes.length; n++) {
    let o = e.attributes[n];
    fS.has(o.name) || t.push(`${o.name}="${xs(o.value)}"`);
} return t.join(" "); }
function jl(e, t = "\u2026") { switch (e.type) {
    case 1: return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
        let o = dS(e), r = e.value.toLowerCase();
        return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case 8: return "<!-- ng-container -->";
    case 4: return "<!-- container -->";
    default: return `#node(${lS(e.type)})`;
} }
function fs(e, t = "\u2026") { let n = e; switch (n.nodeType) {
    case Node.ELEMENT_NODE:
        let o = n.tagName.toLowerCase(), r = pS(n);
        return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case Node.TEXT_NODE:
        let i = n.textContent ? xs(n.textContent) : "";
        return `#text${i ? `(${i})` : ""}`;
    case Node.COMMENT_NODE: return `<!-- ${xs(n.textContent ?? "")} -->`;
    default: return `#node(${n.nodeType})`;
} }
function hS(e, t, n) {
    let r = "";
    t.prev ? (r += `  \u2026
`, r += "  " + jl(t.prev) + `
`) : t.type && t.type & 12 && (r += `  \u2026
`), n ? (r += "  " + jl(t) + `
`, r += `  <!-- container -->  ${Nu}
`) : r += "  " + jl(t) + `  ${Nu}
`, r += `  \u2026
`;
    let i = t.type ? Gd(e[m], t, e) : null;
    return i && (r = fs(i, `
` + r)), r;
}
function gS(e) {
    let n = "", o = e;
    return o.previousSibling && (n += `  \u2026
`, n += "  " + fs(o.previousSibling) + `
`), n += "  " + fs(o) + `  ${Nu}
`, e.nextSibling && (n += `  \u2026
`), e.parentNode && (n = fs(o.parentNode, `
` + n)), n;
}
function mS(e) {
    return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related issues
  * check to see if your template has valid HTML structure
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}
function vS() {
    return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}
function yS(e) { return e.replace(/\s+/gm, ""); }
function xs(e, t = 50) { return e ? (e = yS(e), e.length > t ? `${e.substring(0, t - 1)}\u2026` : e) : ""; }
function dy(e, t, n) { let o = t.insertBeforeIndex, r = Array.isArray(o) ? o[0] : o; return r === null ? Uv(e, t, n) : P(n[r]); }
function fy(e, t, n, o, r) { let i = t.insertBeforeIndex; if (Array.isArray(i)) {
    let s = o, a = null;
    if (t.type & 3 || (a = s, s = r), s !== null && t.componentOffset === -1)
        for (let c = 1; c < i.length; c++) {
            let l = n[i[c]];
            vn(e, s, l, a, !1);
        }
} }
function Sn(e, t, n, o, r) { let i = e.data[t]; if (i === null)
    i = Xd(e, t, n, o, r), yh() && (i.flags |= 32);
else if (i.type & 64) {
    i.type = n, i.value = o, i.attrs = r;
    let s = Bn();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
} return ot(i, !0), i; }
function Xd(e, t, n, o, r) { let i = dl(), s = fl(), a = s ? i : i && i.parent, c = e.data[t] = IS(e, a, n, t, o, r); return ES(e, c, i, s), c; }
function ES(e, t, n, o) { e.firstChild === null && (e.firstChild = t), n !== null && (o ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n)); }
function IS(e, t, n, o, r, i) { let s = t ? t.injectorIndex : -1, a = 0; return dr() && (a |= 128), { type: n, index: o, insertBeforeIndex: null, injectorIndex: s, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, componentOffset: -1, propertyBindings: null, flags: a, providerIndexes: 0, value: r, attrs: i, mergedAttrs: null, localNames: null, initialInputs: null, inputs: null, hostDirectiveInputs: null, outputs: null, hostDirectiveOutputs: null, directiveToIndex: null, tView: null, next: null, prev: null, projectionNext: null, child: null, parent: t, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }
function py(e, t) { if (e.push(t), e.length > 1)
    for (let n = e.length - 2; n >= 0; n--) {
        let o = e[n];
        hy(o) || DS(o, t) && TS(o) === null && CS(o, t.index);
    } }
function hy(e) { return !(e.type & 64); }
function DS(e, t) { return hy(t) || e.index > t.index; }
function TS(e) { let t = e.insertBeforeIndex; return Array.isArray(t) ? t[0] : t; }
function CS(e, t) { let n = e.insertBeforeIndex; Array.isArray(n) ? n[0] = t : (qv(dy, fy), e.insertBeforeIndex = t); }
function Er(e, t) { let n = e.data[t]; return n === null || typeof n == "string" ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value; }
function MS(e, t, n) { let o = e.data[t]; o === null ? e.data[t] = n : o.value = n; }
function NS(e, t) { let n = e.insertBeforeIndex; n === null ? (qv(dy, fy), n = e.insertBeforeIndex = [null, t]) : (eh(Array.isArray(n), !0, "Expecting array here"), n.push(t)); }
function wS(e, t, n) { let o = Xd(e, n, 64, null, null); return py(t, o), o; }
function ba(e, t) { let n = t[e.currentCaseLViewIndex]; return n === null ? n : n < 0 ? ~n : n; }
function _S(e) { return e >>> 17; }
function SS(e) { return (e & 131070) >>> 1; }
function bS(e, t, n) { return e | t << 17 | n << 1; }
function gy(e) { return e === -1; }
function ef(e, t, n) { e.index = 0; let o = ba(t, n); o !== null ? e.removes = t.remove[o] : e.removes = L; }
function ks(e) { if (e.index < e.removes.length) {
    let t = e.removes[e.index++];
    if (t > 0)
        return e.lView[t];
    {
        e.stack.push(e.index, e.removes);
        let n = ~t, o = e.lView[m].data[n];
        return ef(e, o, e.lView), ks(e);
    }
}
else
    return e.stack.length === 0 ? (e.lView = void 0, null) : (e.removes = e.stack.pop(), e.index = e.stack.pop(), ks(e)); }
function RS() { let e = { stack: [], index: -1 }; function t(n, o) { for (e.lView = o; e.stack.length;)
    e.stack.pop(); return ef(e, n.value, o), ks.bind(null, e); } return t; }
function AS(e, t) { let n = { stack: [], index: -1, lView: t }; return ef(n, e, t), ks.bind(null, n); }
var OS = new RegExp(`^(\\d+)*(${dd}|${ud})*(.*)`);
function xS(e, t) { let n = [e]; for (let o of t) {
    let r = n.length - 1;
    if (r > 0 && n[r - 1] === o) {
        let i = n[r] || 1;
        n[r] = i + 1;
    }
    else
        n.push(o, "");
} return n.join(""); }
function kS(e) { let t = e.match(OS), [n, o, r, i] = t, s = o ? parseInt(o, 10) : r, a = []; for (let [c, l, u] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(u, 10) || 1;
    a.push(l, d);
} return [s, ...a]; }
function PS(e) { return !e.prev && e.parent?.type === 8; }
function Vl(e) { return e.index - I; }
function Fo(e, t) { return !(e.type & 144) && !!t[e.index] && my(P(t[e.index])); }
function my(e) { return !!e && !e.isConnected; }
function vy(e, t) { let n = e.i18nNodes; if (n)
    return n.get(t); }
function LS(e, t, n) { let r = e.data[Kr]?.[n]; return r ? yy(r, t) : null; }
function ai(e, t, n, o) { let r = Vl(o), i = vy(e, r); if (i === void 0) {
    let s = e.data[Kr];
    if (s?.[r])
        i = yy(s[r], n);
    else if (t.firstChild === o)
        i = e.firstChild;
    else {
        let a = o.prev === null, c = o.prev ?? o.parent;
        if (PS(o)) {
            let l = Vl(o.parent);
            i = cu(e, l);
        }
        else {
            let l = ce(c, n);
            if (a)
                i = l.firstChild;
            else {
                let u = Vl(c), d = cu(e, u);
                if (c.type === 2 && d) {
                    let p = Cd(e, u) + 1;
                    i = Ra(p, d);
                }
                else
                    i = l.nextSibling;
            }
        }
    }
} return i; }
function Ra(e, t) { let n = t; for (let o = 0; o < e; o++)
    n = n.nextSibling; return n; }
function FS(e, t) { let n = e; for (let o = 0; o < t.length; o += 2) {
    let r = t[o], i = t[o + 1];
    for (let s = 0; s < i; s++)
        switch (r) {
            case _m:
                n = n.firstChild;
                break;
            case Sm:
                n = n.nextSibling;
                break;
        }
} return n; }
function yy(e, t) { let [n, ...o] = kS(e), r; if (n === ud)
    r = t[J][U];
else if (n === dd)
    r = Rd(t[J][U]);
else {
    let i = Number(n);
    r = P(t[i + I]);
} return FS(r, o); }
function wu(e, t) { if (e === t)
    return []; if (e.parentElement == null || t.parentElement == null)
    return null; if (e.parentElement === t.parentElement)
    return jS(e, t); {
    let n = t.parentElement, o = wu(e, n), r = wu(n.firstChild, t);
    return !o || !r ? null : [...o, _m, ...r];
} }
function jS(e, t) { let n = [], o = null; for (o = e; o != null && o !== t; o = o.nextSibling)
    n.push(Sm); return o == null ? null : n; }
function tg(e, t, n) { let o = wu(e, t); return o === null ? null : xS(n, o); }
function Ey(e, t, n) { let o = e.parent, r, i, s; for (; o !== null && (Fo(o, t) || n?.has(o.index));)
    o = o.parent; o === null || !(o.type & 3) ? (r = s = ud, i = t[J][U]) : (r = o.index, i = P(t[r]), s = b(r - I)); let a = P(t[e.index]); if (e.type & 44) {
    let l = hn(t, e);
    l && (a = l);
} let c = tg(i, a, s); if (c === null && i !== a) {
    let l = i.ownerDocument.body;
    if (c = tg(l, a, dd), c === null)
        throw uS(t, e);
} return c; }
function Iy(e, t) { let n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, { acceptNode: VS }), o, r = new Map; for (; o = n.nextNode();) {
    let i = "ngh=", s = o?.textContent, a = s?.indexOf(i) ?? -1;
    if (a > -1) {
        let c = s.substring(a + i.length).trim();
        r.set(c, o);
    }
} return r; }
function VS(e) { return e.textContent?.trimStart().startsWith("ngh=") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
var Dy = !1, Ty = () => { };
function tf(e) { Dy = e; }
function Aa() { return Dy; }
function HS(e, t, n, o) { Ty(e, t, n, o); }
function Cy() { Ty = GS; }
function My(e) { return e = e ?? E(ie), e.get(hd, !1); }
function Ny(e, t) { let n = t.i18nChildren.get(e); return n === void 0 && (n = BS(e), t.i18nChildren.set(e, n)), n; }
function BS(e) { let t = new Set; function n(o) { switch (t.add(o.index), o.kind) {
    case 1:
    case 2: {
        for (let r of o.children)
            n(r);
        break;
    }
    case 3: {
        for (let r of o.cases)
            for (let i of r)
                n(i);
        break;
    }
} } for (let o = I; o < e.bindingStartIndex; o++) {
    let r = e.data[o];
    if (!(!r || !r.ast))
        for (let i of r.ast)
            n(i);
} return t.size === 0 ? null : t; }
function wy(e, t, n) { if (!n.isI18nHydrationEnabled)
    return null; let o = e[m], r = o.data[t]; if (!r || !r.ast)
    return null; let i = o.data[r.parentTNodeIndex]; if (i && hm(i))
    return null; let s = { caseQueue: [], disconnectedNodes: new Set, disjointNodes: new Set }; return _u(e, s, n, r.ast), s.caseQueue.length === 0 && s.disconnectedNodes.size === 0 && s.disjointNodes.size === 0 ? null : s; }
function _u(e, t, n, o) { let r = null; for (let i of o) {
    let s = $S(e, t, n, i);
    s && (US(r, s) && t.disjointNodes.add(i.index - I), r = s);
} return r; }
function US(e, t) { return e && e.nextSibling !== t; }
function $S(e, t, n, o) { let r = P(e[o.index]); if (!r || my(r))
    return t.disconnectedNodes.add(o.index - I), null; let i = r; switch (o.kind) {
    case 0: {
        Md(n, i);
        break;
    }
    case 1:
    case 2: {
        _u(e, t, n, o.children);
        break;
    }
    case 3: {
        let s = e[o.currentCaseLViewIndex];
        if (s != null) {
            let a = s < 0 ? ~s : s;
            t.caseQueue.push(a), _u(e, t, n, o.cases[a]);
        }
        break;
    }
} return qS(e, o); }
function qS(e, t) { let o = e[m].data[t.index]; return Zs(o) ? hn(e, o) : t.kind === 3 ? AS(o, e)() ?? P(e[t.index]) : P(e[t.index]) ?? null; }
function dn(e, t) { e.currentNode = t; }
function mr(e, t, n) { let o = n.index - I, { disconnectedNodes: r } = e, i = t.currentNode; return t.isConnected ? (e.i18nNodes.set(o, i), r.delete(o)) : r.add(o), i; }
function Hl(e, t) { let n = e.currentNode; for (let o = 0; o < t && n; o++)
    n = n?.nextSibling ?? null; return n; }
function Bl(e, t) { return { currentNode: t, isConnected: e.isConnected }; }
function GS(e, t, n, o) { let r = e[ae]; if (!r || !Aa() || n && (hm(n) || la(r, n.index - I)))
    return; let i = e[m], s = i.data[t]; function a() { if (gy(o)) {
    let p = ai(r, i, e, n);
    return n.type & 8 ? p : p.firstChild;
} return r?.firstChild; } let c = a(), l = Wm(r) ?? new Set, u = r.i18nNodes ??= new Map, d = r.data[na]?.[t - I] ?? [], f = r.dehydratedIcuData ??= new Map; zn({ hydrationInfo: r, lView: e, i18nNodes: u, disconnectedNodes: l, caseQueue: d, dehydratedIcuData: f }, { currentNode: c, isConnected: !0 }, s.ast), r.disconnectedNodes = l.size === 0 ? null : l; }
function zn(e, t, n) { if (Array.isArray(n)) {
    let o = t;
    for (let r of n) {
        let i = LS(e.hydrationInfo, e.lView, r.index - I);
        i && (o = Bl(t, i)), zn(e, o, r);
    }
}
else {
    if (e.disconnectedNodes.has(n.index - I))
        return;
    switch (n.kind) {
        case 0: {
            let o = mr(e, t, n);
            dn(t, o?.nextSibling ?? null);
            break;
        }
        case 1: {
            zn(e, Bl(t, t.currentNode?.firstChild ?? null), n.children);
            let o = mr(e, t, n);
            dn(t, o?.nextSibling ?? null);
            break;
        }
        case 2: {
            let o = n.index - I, { hydrationInfo: r } = e, i = qm(r, o);
            switch (n.type) {
                case 0: {
                    let s = mr(e, t, n);
                    if (uw(r, o)) {
                        zn(e, t, n.children);
                        let a = Hl(t, 1);
                        dn(t, a);
                    }
                    else if (zn(e, Bl(t, t.currentNode?.firstChild ?? null), n.children), dn(t, s?.nextSibling ?? null), i !== null) {
                        let a = Hl(t, i + 1);
                        dn(t, a);
                    }
                    break;
                }
                case 1: {
                    mr(e, t, n);
                    let s = Hl(t, i + 1);
                    dn(t, s);
                    break;
                }
            }
            break;
        }
        case 3: {
            let o = t.isConnected ? e.caseQueue.shift() : null, r = { currentNode: null, isConnected: !1 };
            for (let s = 0; s < n.cases.length; s++)
                zn(e, s === o ? t : r, n.cases[s]);
            o !== null && e.dehydratedIcuData.set(n.index, { case: o, node: n });
            let i = mr(e, t, n);
            dn(t, i?.nextSibling ?? null);
            break;
        }
    }
} }
var _y = () => { };
function WS(e, t, n) { _y(e, t, n); }
function Sy() { _y = zS; }
function zS(e, t, n) { let o = e[ae]?.dehydratedIcuData; o && o.get(t)?.case === n && o.delete(t); }
function QS(e) { let t = e[ae]; if (t) {
    let { i18nNodes: n, dehydratedIcuData: o } = t;
    if (n && o) {
        let r = e[w];
        for (let i of o.values())
            ZS(r, n, i);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
} }
function ZS(e, t, n) { for (let o of n.node.cases[n.case]) {
    let r = t.get(o.index - I);
    r && oi(e, r, !1);
} }
function Oa(e) { let t = e[Oe] ?? [], o = e[z][w], r = []; for (let i of t)
    i.data[oa] !== void 0 ? r.push(i) : by(i, o); e[Oe] = r; }
function YS(e) { let { lContainer: t } = e, n = t[Oe]; if (n === null)
    return; let r = t[z][w]; for (let i of n)
    by(i, r); }
function by(e, t) { let n = 0, o = e.firstChild; if (o) {
    let r = e.data[Dt];
    for (; n < r;) {
        let i = o.nextSibling;
        oi(t, o, !1), o = i, n++;
    }
} }
function xa(e) { Oa(e); let t = e[U]; X(t) && Ps(t); for (let n = $; n < e.length; n++)
    Ps(e[n]); }
function Ps(e) { QS(e); let t = e[m]; for (let n = I; n < t.bindingStartIndex; n++)
    if (Y(e[n])) {
        let o = e[n];
        xa(o);
    }
    else
        X(e[n]) && Ps(e[n]); }
function nf(e) { let t = e._views; for (let n of t) {
    let o = Td(n);
    o !== null && o[U] !== null && (X(o) ? Ps(o) : xa(o));
} }
function KS(e, t, n, o) { e !== null && (n.cleanup(t), xa(e.lContainer), nf(o)); }
function JS(e, t) { let n = []; for (let o of t)
    for (let r = 0; r < (o[Yr] ?? 1); r++) {
        let i = { data: o, firstChild: null };
        o[Dt] > 0 && (i.firstChild = e, e = Ra(o[Dt], e)), n.push(i);
    } return [e, n]; }
var Ry = () => null, Ay = () => null;
function Oy() { Ry = XS, Ay = eb; }
function XS(e, t) { return ky(e, t) ? e[Oe].shift() : (Oa(e), null); }
function jr(e, t) { return Ry(e, t); }
function eb(e, t, n) { if (t.tView.ssrId === null)
    return null; let o = jr(e, t.tView.ssrId); return n[m].firstUpdatePass && o === null && tb(n, t), o; }
function xy(e, t, n) { return Ay(e, t, n); }
function tb(e, t) { let n = t; for (; n;) {
    if (ng(e, n))
        return;
    if ((n.flags & 256) === 256)
        break;
    n = n.prev;
} for (n = t.next; n && (n.flags & 512) === 512;) {
    if (ng(e, n))
        return;
    n = n.next;
} }
function ky(e, t) { let n = e[Oe]; return !t || n === null || n.length === 0 ? !1 : n[0].data[ta] === t; }
function ng(e, t) { let n = t.tView?.ssrId; if (n == null)
    return !1; let o = e[t.index]; return Y(o) && ky(o, n) ? (Oa(o), !0) : !1; }
var Py = class {
}, ka = class {
}, Su = class {
    resolveComponentFactory(t) { throw new T(917, !1); }
}, ci = class {
    static NULL = new Su;
}, Vr = class {
}, nb = (() => { class e {
    destroyNode = null;
    static __NG_ELEMENT_ID__ = () => ob();
} return e; })();
function ob() { let e = g(), t = _(), n = ge(t.index, e); return (X(n) ? n : e)[w]; }
var Ly = (() => { class e {
    static \u0275prov = j({ token: e, providedIn: "root", factory: () => null });
} return e; })();
function of(e) { return e.ngModule !== void 0; }
function fn(e) { return !!nn(e); }
function ns(e) { return !!$e(e); }
function og(e) { return !!Re(e); }
function Ir(e) { return !!W(e); }
function rb(e) { return W(e) ? "component" : Re(e) ? "directive" : $e(e) ? "pipe" : "type"; }
function ib(e, t) { if (Ko(e) && (e = x(e), !e))
    throw new Error(`Expected forwardRef function, imported from "${be(t)}", to return a standalone entity or NgModule but got "${be(e) || e}".`); if (nn(e) == null) {
    let n = W(e) || Re(e) || $e(e);
    if (n != null) {
        if (!n.standalone)
            throw new Error(`The "${be(e)}" ${rb(e)}, imported from "${be(t)}", is not standalone. Did you forget to add the standalone: true flag?`);
    }
    else
        throw of(e) ? new Error(`A module with providers was imported from "${be(t)}". Modules with providers are not supported in standalone components imports.`) : new Error(`The "${be(e)}" type, imported from "${be(t)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
} }
var bu = class {
    ownerNgModule = new Map;
    ngModulesWithSomeUnresolvedDecls = new Set;
    ngModulesScopeCache = new Map;
    standaloneComponentsScopeCache = new Map;
    resolveNgModulesDecls() { if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
        for (let t of this.ngModulesWithSomeUnresolvedDecls) {
            let n = nn(t);
            if (n?.declarations)
                for (let o of Jn(n.declarations))
                    Ir(o) && this.ownerNgModule.set(o, t);
        }
        this.ngModulesWithSomeUnresolvedDecls.clear();
    } }
    getComponentDependencies(t, n) { this.resolveNgModulesDecls(); let o = W(t); if (o === null)
        throw new Error(`Attempting to get component dependencies for a type that is not a component: ${t}`); if (o.standalone) {
        let r = this.getStandaloneComponentScope(t, n);
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes, ...r.compilation.ngModules] };
    }
    else {
        if (!this.ownerNgModule.has(t))
            return { dependencies: [] };
        let r = this.getNgModuleScope(this.ownerNgModule.get(t));
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes] };
    } }
    registerNgModule(t, n) { if (!fn(t))
        throw new Error(`Attempting to register a Type which is not NgModule as NgModule: ${t}`); this.ngModulesWithSomeUnresolvedDecls.add(t); }
    clearScopeCacheFor(t) { this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t); }
    getNgModuleScope(t) { if (this.ngModulesScopeCache.has(t))
        return this.ngModulesScopeCache.get(t); let n = this.computeNgModuleScope(t); return this.ngModulesScopeCache.set(t, n), n; }
    computeNgModuleScope(t) { let n = Li(t), o = { exported: { directives: new Set, pipes: new Set }, compilation: { directives: new Set, pipes: new Set } }; for (let r of Jn(n.imports))
        if (fn(r)) {
            let i = this.getNgModuleScope(r);
            Ut(i.exported.directives, o.compilation.directives), Ut(i.exported.pipes, o.compilation.pipes);
        }
        else if (ir(r))
            if (og(r) || Ir(r))
                o.compilation.directives.add(r);
            else if (ns(r))
                o.compilation.pipes.add(r);
            else
                throw new T(980, "The standalone imported type is neither a component nor a directive nor a pipe");
        else {
            o.compilation.isPoisoned = !0;
            break;
        } if (!o.compilation.isPoisoned)
        for (let r of Jn(n.declarations)) {
            if (fn(r) || ir(r)) {
                o.compilation.isPoisoned = !0;
                break;
            }
            ns(r) ? o.compilation.pipes.add(r) : o.compilation.directives.add(r);
        } for (let r of Jn(n.exports))
        if (fn(r)) {
            let i = this.getNgModuleScope(r);
            Ut(i.exported.directives, o.exported.directives), Ut(i.exported.pipes, o.exported.pipes), Ut(i.exported.directives, o.compilation.directives), Ut(i.exported.pipes, o.compilation.pipes);
        }
        else
            ns(r) ? o.exported.pipes.add(r) : o.exported.directives.add(r); return o; }
    getStandaloneComponentScope(t, n) { if (this.standaloneComponentsScopeCache.has(t))
        return this.standaloneComponentsScopeCache.get(t); let o = this.computeStandaloneComponentScope(t, n); return this.standaloneComponentsScopeCache.set(t, o), o; }
    computeStandaloneComponentScope(t, n) { let o = { compilation: { directives: new Set([t]), pipes: new Set, ngModules: new Set } }; for (let r of Ue(n ?? [])) {
        let i = x(r);
        try {
            ib(i, t);
        }
        catch {
            return o.compilation.isPoisoned = !0, o;
        }
        if (fn(i)) {
            o.compilation.ngModules.add(i);
            let s = this.getNgModuleScope(i);
            if (s.exported.isPoisoned)
                return o.compilation.isPoisoned = !0, o;
            Ut(s.exported.directives, o.compilation.directives), Ut(s.exported.pipes, o.compilation.pipes);
        }
        else if (ns(i))
            o.compilation.pipes.add(i);
        else if (og(i) || Ir(i))
            o.compilation.directives.add(i);
        else
            return o.compilation.isPoisoned = !0, o;
    } return o; }
    isOrphanComponent(t) { let n = W(t); return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t)); }
};
function Ut(e, t) { for (let n of e)
    t.add(n); }
var po = new bu, ps = {}, ro = class {
    injector;
    parentInjector;
    constructor(t, n) { this.injector = t, this.parentInjector = n; }
    get(t, n, o) { let r = this.injector.get(t, ps, o); return r !== ps || n === ps ? r : this.parentInjector.get(t, n, o); }
};
function Ls(e, t, n) { let o = n ? e.styles : null, r = n ? e.classes : null, i = 0; if (t !== null)
    for (let s = 0; s < t.length; s++) {
        let a = t[s];
        if (typeof a == "number")
            i = a;
        else if (i == 1)
            r = Ri(r, a);
        else if (i == 2) {
            let c = a, l = t[++s];
            o = Ri(o, c + ": " + l + ";");
        }
    } n ? e.styles = o : e.stylesWithoutHost = o, n ? e.classes = r : e.classesWithoutHost = r; }
function jo(e, t = 0) { let n = g(); if (n === null)
    return de(e, t); let o = _(); return sm(o, n, x(e), t); }
function Fy() { let e = "invalid"; throw new Error(e); }
function jy(e, t, n, o, r) { let i = o === null ? null : { "": -1 }, s = r(e, n); if (s !== null) {
    let a = s, c = null, l = null;
    for (let u of s)
        if (u.resolveHostDirectives !== null) {
            [a, c, l] = u.resolveHostDirectives(s);
            break;
        }
    cb(e, t, n, a, i, c, l);
} i !== null && o !== null && sb(n, o, i); }
function sb(e, t, n) { let o = e.localNames = []; for (let r = 0; r < t.length; r += 2) {
    let i = n[t[r + 1]];
    if (i == null)
        throw new T(-301, !1);
    o.push(t[r], i);
} }
function ab(e, t, n) { t.componentOffset = n, (e.components ??= []).push(t.index); }
function cb(e, t, n, o, r, i, s) { let a = o.length, c = !1; for (let f = 0; f < a; f++) {
    let p = o[f];
    !c && Ne(p) && (c = !0, ab(e, n, f)), nu(Cs(n, t), e, p.type);
} hb(n, e.data.length, a); for (let f = 0; f < a; f++) {
    let p = o[f];
    p.providersResolver && p.providersResolver(p);
} let l = !1, u = !1, d = ri(e, t, a, null); a > 0 && (n.directiveToIndex = new Map); for (let f = 0; f < a; f++) {
    let p = o[f];
    if (n.mergedAttrs = lo(n.mergedAttrs, p.hostAttrs), ub(e, n, t, d, p), pb(d, p, r), s !== null && s.has(p)) {
        let [v, y] = s.get(p);
        n.directiveToIndex.set(p.type, [d, v + n.directiveStart, y + n.directiveStart]);
    }
    else
        (i === null || !i.has(p)) && n.directiveToIndex.set(p.type, d);
    p.contentQueries !== null && (n.flags |= 4), (p.hostBindings !== null || p.hostAttrs !== null || p.hostVars !== 0) && (n.flags |= 64);
    let h = p.type.prototype;
    !l && (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), l = !0), !u && (h.ngOnChanges || h.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), u = !0), d++;
} lb(e, n, i); }
function lb(e, t, n) { for (let o = t.directiveStart; o < t.directiveEnd; o++) {
    let r = e.data[o];
    if (n === null || !n.has(r))
        rg(0, t, r, o), rg(1, t, r, o), sg(t, o, !1);
    else {
        let i = n.get(r);
        ig(0, t, i, o), ig(1, t, i, o), sg(t, o, !0);
    }
} }
function rg(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s;
        e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {}, s[i] ??= [], s[i].push(o), Vy(t, i);
    } }
function ig(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s = r[i], a;
        e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {}, a[s] ??= [], a[s].push(o, i), Vy(t, s);
    } }
function Vy(e, t) { t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16); }
function sg(e, t, n) { let { attrs: o, inputs: r, hostDirectiveInputs: i } = e; if (o === null || !n && r === null || n && i === null || Ad(e)) {
    e.initialInputs ??= [], e.initialInputs.push(null);
    return;
} let s = null, a = 0; for (; a < o.length;) {
    let c = o[a];
    if (c === 0) {
        a += 4;
        continue;
    }
    else if (c === 5) {
        a += 2;
        continue;
    }
    else if (typeof c == "number")
        break;
    if (!n && r.hasOwnProperty(c)) {
        let l = r[c];
        for (let u of l)
            if (u === t) {
                s ??= [], s.push(c, o[a + 1]);
                break;
            }
    }
    else if (n && i.hasOwnProperty(c)) {
        let l = i[c];
        for (let u = 0; u < l.length; u += 2)
            if (l[u] === t) {
                s ??= [], s.push(l[u + 1], o[a + 1]);
                break;
            }
    }
    a += 2;
} e.initialInputs ??= [], e.initialInputs.push(s); }
function ub(e, t, n, o, r) { e.data[o] = r; let i = r.factory || (r.factory = Pt(r.type, !0)), s = new mn(i, Ne(r), jo, null); e.blueprint[o] = s, n[o] = s, db(e, t, o, ri(e, n, r.hostVars, B), r); }
function db(e, t, n, o, r) { let i = r.hostBindings; if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    fb(s) != a && s.push(a), s.push(n, o, i);
} }
function fb(e) { let t = e.length; for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0)
        return n;
} return 0; }
function pb(e, t, n) { if (n) {
    if (t.exportAs)
        for (let o = 0; o < t.exportAs.length; o++)
            n[t.exportAs[o]] = e;
    Ne(t) && (n[""] = e);
} }
function hb(e, t, n) { e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t; }
function rf(e, t, n, o, r, i, s, a) { let c = t[m], l = c.consts, u = pe(l, s), d = Sn(c, e, n, o, u); return i && jy(c, t, d, pe(l, a), r), d.mergedAttrs = lo(d.mergedAttrs, d.attrs), d.attrs !== null && Ls(d, d.attrs, !1), d.mergedAttrs !== null && Ls(d, d.mergedAttrs, !0), c.queries !== null && c.queries.elementStart(c, d), d; }
function sf(e, t) { Yg(e, t), Yc(t) && e.queries.elementEnd(t); }
function Hy(e, t, n, o, r, i) { let s = t.consts, a = pe(s, r), c = Sn(t, e, n, o, a); if (c.mergedAttrs = lo(c.mergedAttrs, c.attrs), i != null) {
    let l = pe(s, i);
    c.localNames = [];
    for (let u = 0; u < l.length; u += 2)
        c.localNames.push(l[u], -1);
} return c.attrs !== null && Ls(c, c.attrs, !1), c.mergedAttrs !== null && Ls(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c; }
function Hr(e) { return Pa(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1; }
function gb(e, t, n) { let o = e[Symbol.iterator](), r = t[Symbol.iterator](); for (;;) {
    let i = o.next(), s = r.next();
    if (i.done && s.done)
        return !0;
    if (i.done || s.done || !n(i.value, s.value))
        return !1;
} }
function By(e, t) { if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
        t(e[n]);
else {
    let n = e[Symbol.iterator](), o;
    for (; !(o = n.next()).done;)
        t(o.value);
} }
function Pa(e) { return e !== null && (typeof e == "function" || typeof e == "object"); }
function Uy(e, t) { let n = Hr(e), o = Hr(t); return n && o ? gb(e, t, Uy) : !n && (e && (typeof e == "object" || typeof e == "function")) && !o && (t && (typeof t == "object" || typeof t == "function")) ? !0 : Object.is(e, t); }
function lt(e, t, n) { return e[t] = n; }
function li(e, t) { return e[t]; }
function Z(e, t, n) { if (n === B)
    return !1; let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function In(e, t, n, o) { let r = Z(e, t, n); return Z(e, t + 1, o) || r; }
function La(e, t, n, o, r) { let i = In(e, t, n, o); return Z(e, t + 2, r) || i; }
function Ve(e, t, n, o, r, i) { let s = In(e, t, n, o); return In(e, t + 2, r, i) || s; }
function Dr(e, t, n) { return function o(r) { let i = Me(e) ? ge(e.index, t) : t; si(i, 5); let s = t[H], a = ag(t, s, n, r), c = o.__ngNextListenerFn__; for (; c;)
    a = ag(t, s, c, r) && a, c = c.__ngNextListenerFn__; return a; }; }
function ag(e, t, n, o) { let r = _h(null); try {
    return V(6, t, n), n(o) !== !1;
}
catch (i) {
    return Kd(e, i), !1;
}
finally {
    V(7, t, n), _h(r);
} }
function $y(e, t, n, o, r, i, s, a) { let c = Vn(e), l = !1, u = null; if (!o && c && (u = vb(t, n, i, e.index)), u !== null) {
    let d = u.__ngLastListenerFn__ || u;
    d.__ngNextListenerFn__ = s, u.__ngLastListenerFn__ = s, l = !0;
}
else {
    let d = ce(e, n), f = o ? o(d) : d;
    tw(n, f, i, a);
    let p = r.listen(f, i, a);
    if (!mb(i)) {
        let h = o ? v => o(P(v[e.index])) : e.index;
        qy(h, t, n, i, a, p, !1);
    }
} return l; }
function mb(e) { return e.startsWith("animation") || e.startsWith("transition"); }
function vb(e, t, n, o) { let r = e.cleanup; if (r != null)
    for (let i = 0; i < r.length - 1; i += 2) {
        let s = r[i];
        if (s === n && r[i + 1] === o) {
            let a = t[Lt], c = r[i + 2];
            return a && a.length > c ? a[c] : null;
        }
        typeof s == "string" && (i += 2);
    } return null; }
function qy(e, t, n, o, r, i, s) { let a = t.firstCreatePass ? ol(t) : null, c = nl(n), l = c.length; c.push(r, i), a && a.push(o, e, l, (l + 1) * (s ? -1 : 1)); }
function yb(e, t, n, o, r) { let i = Dr(e, t, n), s = Eb(e, t, o, r, i); }
function Eb(e, t, n, o, r) { let i = null, s = null, a = null, c = !1, l = e.directiveToIndex.get(n.type); if (typeof l == "number" ? i = l : [i, s, a] = l, s !== null && a !== null && e.hostDirectiveOutputs?.hasOwnProperty(o)) {
    let u = e.hostDirectiveOutputs[o];
    for (let d = 0; d < u.length; d += 2) {
        let f = u[d];
        if (f >= s && f <= a)
            c = !0, Fs(e, t, f, u[d + 1], o, r);
        else if (f > a)
            break;
    }
} return n.outputs.hasOwnProperty(o) && (c = !0, Fs(e, t, i, o, o, r)), c; }
function Fs(e, t, n, o, r, i) { let s = t[n], a = t[m], l = a.data[n].outputs[o], d = s[l].subscribe(i); qy(e.index, a, t, r, i, d, !0); }
var qt = Symbol("BINDING"), Ib = { kind: "input", requiredVars: 1 }, Db = { kind: "output", requiredVars: 0 };
function Tb(e, t, n) { let o = g(), r = ve(); if (Z(o, r, n)) {
    let i = o[m], s = Le(), a = ge(s.index, o);
    si(a, 1);
    let c = i.directiveRegistry[e], l = q_(s, i, o, c, t, n);
} }
function Gy(e, t) { let n = { [qt]: Ib, update: () => Tb(n.targetIdx, e, t()) }; return n; }
function Wy(e, t) { let n = { [qt]: Db, create: () => { let o = g(), r = _(), s = o[m].directiveRegistry[n.targetIdx]; yb(r, o, t, s, e); } }; return n; }
function Cb(e, t) { let n = Gy(e, t), o = Wy(e + "Change", i => t.set(i)); return { [qt]: { kind: "twoWay", requiredVars: n[qt].requiredVars + o[qt].requiredVars }, set targetIdx(i) { n.targetIdx = i, o.targetIdx = i; }, create: o.create, update: n.update }; }
var js = class extends ci {
    ngModule;
    constructor(t) { super(), this.ngModule = t; }
    resolveComponentFactory(t) { let n = W(t); return new Wt(n, this.ngModule); }
};
function Mb(e) { return Object.keys(e).map(t => { let [n, o, r] = e[t], i = { propName: n, templateName: t, isSignal: (o & ha.SignalBased) !== 0 }; return r && (i.transform = r), i; }); }
function Nb(e) { return Object.keys(e).map(t => ({ propName: e[t], templateName: t })); }
function wb(e, t, n) { let o = t instanceof _e ? t : t?.injector; return o && e.getStandaloneInjector !== null && (o = e.getStandaloneInjector(o) || o), o ? new ro(n, o) : n; }
function _b(e) { let t = e.get(Vr, null); if (t === null)
    throw new T(407, !1); let n = e.get(Ly, null), o = e.get(Ce, null); return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: o, ngReflect: !1 }; }
function Sb(e, t) { let n = zy(e); return fa(t, n, n === "svg" ? Jc : n === "math" ? Xc : null); }
function zy(e) { return (e.selectors[0][0] || "div").toLowerCase(); }
var Wt = class extends ka {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() { return this.cachedInputs ??= Mb(this.componentDef.inputs), this.cachedInputs; }
    get outputs() { return this.cachedOutputs ??= Nb(this.componentDef.outputs), this.cachedOutputs; }
    constructor(t, n) { super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = a_(t.selectors), this.ngContentSelectors = t.ngContentSelectors ?? [], this.isBoundToModule = !!n; }
    create(t, n, o, r, i, s) { V(22); let a = A(null); try {
        let c = this.componentDef, l = bb(o, c, s, i), u = wb(c, r || this.ngModule, t), d = _b(u), f = d.rendererFactory.createRenderer(null, c), p = o ? P_(f, o, c.encapsulation, u) : Sb(c, f), h = s?.some(cg) || i?.some(D => typeof D != "function" && D.bindings.some(cg)), v = pa(null, l, null, 512 | Pd(c), null, null, d, f, u, null, Um(p, u, !0));
        v[I] = p, Zi(v);
        let y = null;
        try {
            let D = rf(I, v, 2, "#host", () => l.directiveRegistry, !0, 0);
            Mv(f, p, D), je(p, v), Da(l, v, D), Nd(l, D, v), sf(l, D), n !== void 0 && Ab(D, this.ngContentSelectors, n), y = ge(D.index, v), v[H] = y[H], wa(l, v, null);
        }
        catch (D) {
            throw y !== null && ru(y), ru(v), D;
        }
        finally {
            V(23), Yi();
        }
        return new Vs(this.componentType, v, !!h);
    }
    finally {
        A(a);
    } }
};
function bb(e, t, n, o) { let r = e ? ["ng-version", "20.3.14"] : c_(t.selectors[0]), i = null, s = null, a = 0; if (n)
    for (let u of n)
        a += u[qt].requiredVars, u.create && (u.targetIdx = 0, (i ??= []).push(u)), u.update && (u.targetIdx = 0, (s ??= []).push(u)); if (o)
    for (let u = 0; u < o.length; u++) {
        let d = o[u];
        if (typeof d != "function")
            for (let f of d.bindings) {
                a += f[qt].requiredVars;
                let p = u + 1;
                f.create && (f.targetIdx = p, (i ??= []).push(f)), f.update && (f.targetIdx = p, (s ??= []).push(f));
            }
    } let c = [t]; if (o)
    for (let u of o) {
        let d = typeof u == "function" ? u : u.type, f = Re(d);
        c.push(f);
    } return kd(0, null, Rb(i, s), 1, a, c, null, null, null, [r], null); }
function Rb(e, t) { return !e && !t ? null : n => { if (n & 1 && e)
    for (let o of e)
        o.create(); if (n & 2 && t)
    for (let o of t)
        o.update(); }; }
function cg(e) { let t = e[qt].kind; return t === "input" || t === "twoWay"; }
var Vs = class extends Py {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, o) { super(), this._rootLView = n, this._hasInputBindings = o, this._tNode = mt(n[m], I), this.location = Mo(this._tNode, n), this.instance = ge(this._tNode.index, n)[H], this.hostView = this.changeDetectorRef = new Gt(n, void 0), this.componentType = t; }
    setInput(t, n) { this._hasInputBindings; let o = this._tNode; if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
        return; let r = this._rootLView, i = Na(o, r[m], r, t, n); this.previousInputValues.set(t, n); let s = ge(o.index, r); si(s, 1); }
    get injector() { return new $t(this._tNode, this._rootLView); }
    destroy() { this.hostView.destroy(); }
    onDestroy(t) { this.hostView.onDestroy(t); }
};
function Ab(e, t, n) { let o = e.projection = []; for (let r = 0; r < t.length; r++) {
    let i = n[r];
    o.push(i != null && i.length ? Array.from(i) : null);
} }
var Fa = (() => { class e {
    static __NG_ELEMENT_ID__ = Ob;
} return e; })();
function Ob() { let e = _(); return Zy(e, g()); }
var xb = Fa, Qy = class extends xb {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, o) { super(), this._lContainer = t, this._hostTNode = n, this._hostLView = o; }
    get element() { return Mo(this._hostTNode, this._hostLView); }
    get injector() { return new $t(this._hostTNode, this._hostLView); }
    get parentInjector() { let t = sd(this._hostTNode, this._hostLView); if (em(t)) {
        let n = Ds(t, this._hostLView), o = Is(t), r = n[m].data[o + 8];
        return new $t(r, n);
    }
    else
        return new $t(null, this._hostLView); }
    clear() { for (; this.length > 0;)
        this.remove(this.length - 1); }
    get(t) { let n = lg(this._lContainer); return n !== null && n[t] || null; }
    get length() { return this._lContainer.length - $; }
    createEmbeddedView(t, n, o) { let r, i; typeof o == "number" ? r = o : o != null && (r = o.index, i = o.injector); let s = jr(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, i, s); return this.insertImpl(a, r, En(this._hostTNode, s)), a; }
    createComponent(t, n, o, r, i, s, a) { let c = t && !vr(t), l; if (c)
        l = n;
    else {
        let y = n || {};
        l = y.index, o = y.injector, r = y.projectableNodes, i = y.environmentInjector || y.ngModuleRef, s = y.directives, a = y.bindings;
    } let u = c ? t : new Wt(W(t)), d = o || this.parentInjector; if (!i && u.ngModule == null) {
        let D = (c ? d : this.parentInjector).get(_e, null);
        D && (i = D);
    } let f = W(u.componentType ?? {}), p = jr(this._lContainer, f?.id ?? null), h = p?.firstChild ?? null, v = u.create(d, r, h, i, s, a); return this.insertImpl(v.hostView, l, En(this._hostTNode, p)), v; }
    insert(t, n) { return this.insertImpl(t, n, !0); }
    insertImpl(t, n, o) { let r = t._lView; if (ph(r)) {
        let a = this.indexOf(t);
        if (a !== -1)
            this.detach(a);
        else {
            let c = r[z], l = new Qy(c, c[se], c[z]);
            l.detach(l.indexOf(t));
        }
    } let i = this._adjustIndex(n), s = this._lContainer; return Lo(s, r, i, o), t.attachToViewContainerRef(), Hc(Ul(s), i, t), t; }
    move(t, n) { return this.insert(t, n); }
    indexOf(t) { let n = lg(this._lContainer); return n !== null ? n.indexOf(t) : -1; }
    remove(t) { let n = this._adjustIndex(t, -1), o = Lr(this._lContainer, n); o && (nr(Ul(this._lContainer), n), ii(o[m], o)); }
    detach(t) { let n = this._adjustIndex(t, -1), o = Lr(this._lContainer, n); return o && nr(Ul(this._lContainer), n) != null ? new Gt(o) : null; }
    _adjustIndex(t, n = 0) { return t ?? this.length + n; }
};
function lg(e) { return e[ar]; }
function Ul(e) { return e[ar] || (e[ar] = []); }
function Zy(e, t) { let n, o = t[e.index]; return Y(o) ? n = o : (n = ay(o, t, null, e), t[e.index] = n, Ld(t, n)), Yy(n, t, e, o), new Qy(n, e, t); }
function kb(e, t) { let n = e[w], o = n.createComment(""), r = ce(t, e), i = n.parentNode(r); return vn(n, i, o, n.nextSibling(r), !1), o; }
var Yy = Jy, af = () => !1;
function Ky(e, t, n) { return af(e, t, n); }
function Jy(e, t, n, o) { if (e[We])
    return; let r; n.type & 8 ? r = P(o) : r = kb(t, n), e[We] = r; }
function Pb(e, t, n) { if (e[We] && e[Oe])
    return !0; let o = n[ae], r = t.index - I; if (!o || wo(t) || la(o, r))
    return !1; let s = cu(o, r), a = o.data[_o]?.[r], [c, l] = JS(s, a); return e[We] = c, e[Oe] = l, !0; }
function Lb(e, t, n, o) { af(e, n, t) || Jy(e, t, n, o); }
function Xy() { Yy = Lb, af = Pb; }
var Ru = class e {
    queryList;
    matches = null;
    constructor(t) { this.queryList = t; }
    clone() { return new e(this.queryList); }
    setDirty() { this.queryList.setDirty(); }
}, Au = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    createEmbeddedView(t) { let n = t.queries; if (n !== null) {
        let o = t.contentQueries !== null ? t.contentQueries[0] : n.length, r = [];
        for (let i = 0; i < o; i++) {
            let s = n.getByIndex(i), a = this.queries[s.indexInDeclarationView];
            r.push(a.clone());
        }
        return new e(r);
    } return null; }
    insertView(t) { this.dirtyQueriesWithMatches(t); }
    detachView(t) { this.dirtyQueriesWithMatches(t); }
    finishViewCreation(t) { this.dirtyQueriesWithMatches(t); }
    dirtyQueriesWithMatches(t) { for (let n = 0; n < this.queries.length; n++)
        lf(t, n).matches !== null && this.queries[n].setDirty(); }
}, Hs = class {
    flags;
    read;
    predicate;
    constructor(t, n, o = null) { this.flags = n, this.read = o, typeof t == "string" ? this.predicate = Bb(t) : this.predicate = t; }
}, Ou = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    elementStart(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].elementStart(t, n); }
    elementEnd(t) { for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t); }
    embeddedTView(t) { let n = null; for (let o = 0; o < this.length; o++) {
        let r = n !== null ? n.length : 0, i = this.getByIndex(o).embeddedTView(t, r);
        i && (i.indexInDeclarationView = o, n !== null ? n.push(i) : n = [i]);
    } return n !== null ? new e(n) : null; }
    template(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].template(t, n); }
    getByIndex(t) { return this.queries[t]; }
    get length() { return this.queries.length; }
    track(t) { this.queries.push(t); }
}, xu = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) { this.metadata = t, this._declarationNodeIndex = n; }
    elementStart(t, n) { this.isApplyingToNode(n) && this.matchTNode(t, n); }
    elementEnd(t) { this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1); }
    template(t, n) { this.elementStart(t, n); }
    embeddedTView(t, n) { return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null; }
    isApplyingToNode(t) { if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex, o = t.parent;
        for (; o !== null && o.type & 8 && o.index !== n;)
            o = o.parent;
        return n === (o !== null ? o.index : -1);
    } return this._appliesToNextNode; }
    matchTNode(t, n) { let o = this.metadata.predicate; if (Array.isArray(o))
        for (let r = 0; r < o.length; r++) {
            let i = o[r];
            this.matchTNodeWithReadOption(t, n, Fb(n, i)), this.matchTNodeWithReadOption(t, n, us(n, t, i, !1, !1));
        }
    else
        o === Fr ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, us(n, t, o, !1, !1)); }
    matchTNodeWithReadOption(t, n, o) { if (o !== null) {
        let r = this.metadata.read;
        if (r !== null)
            if (r === Qr || r === Fa || r === Fr && n.type & 4)
                this.addMatch(n.index, -2);
            else {
                let i = us(n, t, r, !1, !1);
                i !== null && this.addMatch(n.index, i);
            }
        else
            this.addMatch(n.index, o);
    } }
    addMatch(t, n) { this.matches === null ? this.matches = [t, n] : this.matches.push(t, n); }
};
function Fb(e, t) { let n = e.localNames; if (n !== null) {
    for (let o = 0; o < n.length; o += 2)
        if (n[o] === t)
            return n[o + 1];
} return null; }
function jb(e, t) { return e.type & 11 ? Mo(e, t) : e.type & 4 ? Sa(e, t) : null; }
function Vb(e, t, n, o) { return n === -1 ? jb(t, e) : n === -2 ? Hb(e, t, o) : Ar(e, e[m], n, t); }
function Hb(e, t, n) { if (n === Qr)
    return Mo(t, e); if (n === Fr)
    return Sa(t, e); if (n === Fa)
    return Zy(t, e); }
function eE(e, t, n, o) { let r = t[et].queries[o]; if (r.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
        let l = s[c];
        if (l < 0)
            a.push(null);
        else {
            let u = i[l];
            a.push(Vb(t, u, s[c + 1], n.metadata.read));
        }
    }
    r.matches = a;
} return r.matches; }
function ku(e, t, n, o) { let r = e.queries.getByIndex(n), i = r.matches; if (i !== null) {
    let s = eE(e, t, r, n);
    for (let a = 0; a < i.length; a += 2) {
        let c = i[a];
        if (c > 0)
            o.push(s[a / 2]);
        else {
            let l = i[a + 1], u = t[-c];
            for (let d = $; d < u.length; d++) {
                let f = u[d];
                f[pt] === f[z] && ku(f[m], f, l, o);
            }
            if (u[an] !== null) {
                let d = u[an];
                for (let f = 0; f < d.length; f++) {
                    let p = d[f];
                    ku(p[m], p, l, o);
                }
            }
        }
    }
} return o; }
function cf(e, t) { return e[et].queries[t].queryList; }
function tE(e, t, n) { let o = new Ms((n & 4) === 4); return hh(e, t, o, o.destroy), (t[et] ??= new Au).queries.push(new Ru(o)) - 1; }
function nE(e, t, n) { let o = R(); return o.firstCreatePass && (rE(o, new Hs(e, t, n), -1), (t & 2) === 2 && (o.staticViewQueries = !0)), tE(o, g(), t); }
function oE(e, t, n, o) { let r = R(); if (r.firstCreatePass) {
    let i = _();
    rE(r, new Hs(t, n, o), i.index), Ub(r, e), (n & 2) === 2 && (r.staticContentQueries = !0);
} return tE(r, g(), n); }
function Bb(e) { return e.split(",").map(t => t.trim()); }
function rE(e, t, n) { e.queries === null && (e.queries = new Ou), e.queries.track(new xu(t, n)); }
function Ub(e, t) { let n = e.contentQueries || (e.contentQueries = []), o = n.length ? n[n.length - 1] : -1; t !== o && n.push(e.queries.length - 1, t); }
function lf(e, t) { return e.queries.getByIndex(t); }
function iE(e, t) { let n = e[m], o = lf(n, t); return o.crossesNgTemplate ? ku(n, e, t, []) : eE(n, e, o, t); }
function uf(e, t, n) { let o, r = Ni(() => { o._dirtyCounter(); let i = $b(o, e); if (t && i === void 0)
    throw new T(-951, !1); return i; }); return o = r[re], o._dirtyCounter = Bt(0), o._flatValue = void 0, r; }
function df(e) { return uf(!0, !1, e); }
function ff(e) { return uf(!0, !0, e); }
function pf(e) { return uf(!1, !1, e); }
function sE(e, t) { let n = e[re]; n._lView = g(), n._queryIndex = t, n._queryList = cf(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update(o => o + 1)); }
function $b(e, t) { let n = e._lView, o = e._queryIndex; if (n === void 0 || o === void 0 || n[M] & 4)
    return t ? void 0 : L; let r = cf(n, o), i = iE(n, o); return r.reset(i, fm), t ? r.first : r._changesDetected || e._flatValue === void 0 ? e._flatValue = r.toArray() : e._flatValue; }
function aE(e) { let t = [], n = new Map; function o(r) { let i = n.get(r); if (!i) {
    let s = e(r);
    n.set(r, i = s.then(a => zb(r, a)));
} return i; } return ho.forEach((r, i) => { let s = []; r.templateUrl && s.push(o(r.templateUrl).then(l => { r.template = l; })); let a = typeof r.styles == "string" ? [r.styles] : r.styles || []; if (r.styles = a, r.styleUrl && r.styleUrls?.length)
    throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple"); if (r.styleUrls?.length) {
    let l = r.styles.length, u = r.styleUrls;
    r.styleUrls.forEach((d, f) => { a.push(""), s.push(o(d).then(p => { a[l + f] = p, u.splice(u.indexOf(d), 1), u.length == 0 && (r.styleUrls = void 0); })); });
}
else
    r.styleUrl && s.push(o(r.styleUrl).then(l => { a.push(l), r.styleUrl = void 0; })); let c = Promise.all(s).then(() => Qb(i)); t.push(c); }), lE(), Promise.all(t).then(() => { }); }
var ho = new Map, Br = new Set;
function qb(e, t) { cE(t) && (ho.set(e, t), Br.add(e)); }
function Gb(e) { return Br.has(e); }
function cE(e) { return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls && e.styleUrls.length || e.styleUrl); }
function lE() { let e = ho; return ho = new Map, e; }
function Wb(e) { Br.clear(), e.forEach((t, n) => Br.add(n)), ho = e; }
function uE() { return ho.size === 0; }
function zb(e, t) { return typeof t == "string" ? t : t.status !== void 0 && t.status !== 200 ? Promise.reject(new T(918, !1)) : t.text(); }
function Qb(e) { Br.delete(e); }
var Pu = new Map, dE = !0;
function Zb(e, t, n) { if (t && t !== n && dE)
    throw new Error(`Duplicate module registered for ${e} - ${Be(t)} vs ${Be(t.name)}`); }
function hf(e, t) { let n = Pu.get(t) || null; Zb(t, n, e), Pu.set(t, e); }
function gf(e) { return Pu.get(e); }
function Yb(e) { dE = !e; }
function fE(e, t, n) { let o = g(), r = Le(), i = ce(r, o); if (r.type === 2 && t.toLowerCase() === "iframe") {
    let s = i;
    s.src = "", s.srcdoc = Ao(""), oi(o[w], s);
    let a = !1;
    throw new T(-910, a);
} return e; }
var go = class {
}, pE = class {
};
function hE(e, t) { return new mo(e, t ?? null, []); }
var Kb = hE, mo = class extends go {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new js(this);
    constructor(t, n, o, r = !0) { super(), this.ngModuleType = t, this._parent = n; let i = nn(t); this._bootstrapComponents = Jn(i.bootstrap), this._r3Injector = Ml(t, n, [{ provide: go, useValue: this }, { provide: ci, useValue: this.componentFactoryResolver }, ...o], Be(t), new Set(["environment"])), r && this.resolveInjectorInitializers(); }
    resolveInjectorInitializers() { this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType); }
    get injector() { return this._r3Injector; }
    destroy() { let t = this._r3Injector; !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null; }
    onDestroy(t) { this.destroyCbs.push(t); }
}, vo = class extends pE {
    moduleType;
    constructor(t) { super(), this.moduleType = t; }
    create(t) { return new mo(this.moduleType, t, []); }
};
function gE(e, t, n) { return new mo(e, t, n, !1); }
var Ur = class extends go {
    injector;
    componentFactoryResolver = new js(this);
    instance = null;
    constructor(t) { super(); let n = new Xt([...t.providers, { provide: go, useValue: this }, { provide: ci, useValue: this.componentFactoryResolver }], t.parent || Fn(), t.debugName, new Set(["environment"])); this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers(); }
    destroy() { this.injector.destroy(); }
    onDestroy(t) { this.injector.onDestroy(t); }
};
function mf(e, t, n = null) { return new Ur({ providers: e, parent: t, debugName: n, runEnvironmentInitializers: !0 }).injector; }
var Jb = (() => { class e {
    _injector;
    cachedInjectors = new Map;
    constructor(n) { this._injector = n; }
    getOrCreateStandaloneInjector(n) { if (!n.standalone)
        return null; if (!this.cachedInjectors.has(n)) {
        let o = Fi(!1, n.type), r = o.length > 0 ? mf([o], this._injector, `Standalone[${n.type.name}]`) : null;
        this.cachedInjectors.set(n, r);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = j({ token: e, providedIn: "environment", factory: () => new e(de(_e)) });
} return e; })();
function mE(e) { return ct(() => { let t = IE(e), n = Te(G({}, t), { decls: e.decls, vars: e.vars, template: e.template, consts: e.consts || null, ngContentSelectors: e.ngContentSelectors, onPush: e.changeDetection === Js.OnPush, directiveDefs: null, pipeDefs: null, dependencies: t.standalone && e.dependencies || null, getStandaloneInjector: t.standalone ? r => r.get(Jb).getOrCreateStandaloneInjector(n) : null, getExternalStyles: null, signals: e.signals ?? !1, data: e.data || {}, encapsulation: e.encapsulation || Tt.Emulated, styles: e.styles || L, _: null, schemas: e.schemas || null, tView: null, id: "" }); t.standalone && ee("NgStandalone"), DE(n); let o = e.dependencies; return n.directiveDefs = Bs(o, vE), n.pipeDefs = Bs(o, $e), n.id = nR(n), n; }); }
function vE(e) { return W(e) || Re(e); }
function vf(e) { return ct(() => ({ type: e.type, bootstrap: e.bootstrap || L, declarations: e.declarations || L, imports: e.imports || L, exports: e.exports || L, transitiveCompileScopes: null, schemas: e.schemas || null, id: e.id || null })); }
function Xb(e, t) { if (e == null)
    return ke; let n = {}; for (let o in e)
    if (e.hasOwnProperty(o)) {
        let r = e[o], i, s, a, c;
        Array.isArray(r) ? (a = r[0], i = r[1], s = r[2] ?? i, c = r[3] || null) : (i = r, s = r, a = ha.None, c = null), n[i] = [o, a, c], t[i] = s;
    } return n; }
function eR(e) { if (e == null)
    return ke; let t = {}; for (let n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n); return t; }
function yE(e) { return ct(() => { let t = IE(e); return DE(t), t; }); }
function EE(e) { return { type: e.type, name: e.name, factory: null, pure: e.pure !== !1, standalone: e.standalone ?? !0, onDestroy: e.type.prototype.ngOnDestroy || null }; }
function IE(e) { let t = {}; return { type: e.type, providersResolver: null, factory: null, hostBindings: e.hostBindings || null, hostVars: e.hostVars || 0, hostAttrs: e.hostAttrs || null, contentQueries: e.contentQueries || null, declaredInputs: t, inputConfig: e.inputs || ke, exportAs: e.exportAs || null, standalone: e.standalone ?? !0, signals: e.signals === !0, selectors: e.selectors || L, viewQuery: e.viewQuery || null, features: e.features || null, setInput: null, resolveHostDirectives: null, hostDirectives: null, inputs: Xb(e.inputs, t), outputs: eR(e.outputs), debugInfo: null }; }
function DE(e) { e.features?.forEach(t => t(e)); }
function Bs(e, t) { return e ? () => { let n = typeof e == "function" ? e() : e, o = []; for (let r of n) {
    let i = t(r);
    i !== null && o.push(i);
} return o; } : null; }
var tR = new Map;
function nR(e) { let t = 0, n = typeof e.consts == "function" ? "" : e.consts, o = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery]; for (let i of o.join("|"))
    t = Math.imul(31, t) + i.charCodeAt(0) << 0; return t += 2147483648, "c" + t; }
function TE(e) { return Object.getPrototypeOf(e.prototype).constructor; }
function yf(e) { let t = TE(e.type), n = !0, o = [e]; for (; t;) {
    let r;
    if (Ne(e))
        r = t.\u0275cmp || t.\u0275dir;
    else {
        if (t.\u0275cmp)
            throw new T(903, !1);
        r = t.\u0275dir;
    }
    if (r) {
        if (n) {
            o.push(r);
            let s = e;
            s.inputs = $l(e.inputs), s.declaredInputs = $l(e.declaredInputs), s.outputs = $l(e.outputs);
            let a = r.hostBindings;
            a && aR(e, a);
            let c = r.viewQuery, l = r.contentQueries;
            if (c && iR(e, c), l && sR(e, l), oR(e, r), Xp(e.outputs, r.outputs), Ne(r) && r.data.animation) {
                let u = e.data;
                u.animation = (u.animation || []).concat(r.data.animation);
            }
        }
        let i = r.features;
        if (i)
            for (let s = 0; s < i.length; s++) {
                let a = i[s];
                a && a.ngInherit && a(e), a === yf && (n = !1);
            }
    }
    t = Object.getPrototypeOf(t);
} rR(o); }
function oR(e, t) { for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
        continue;
    let o = t.inputs[n];
    o !== void 0 && (e.inputs[n] = o, e.declaredInputs[n] = t.declaredInputs[n]);
} }
function rR(e) { let t = 0, n = null; for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    r.hostVars = t += r.hostVars, r.hostAttrs = lo(r.hostAttrs, n = lo(n, r.hostAttrs));
} }
function $l(e) { return e === ke ? {} : e === L ? [] : e; }
function iR(e, t) { let n = e.viewQuery; n ? e.viewQuery = (o, r) => { t(o, r), n(o, r); } : e.viewQuery = t; }
function sR(e, t) { let n = e.contentQueries; n ? e.contentQueries = (o, r, i) => { t(o, r, i), n(o, r, i); } : e.contentQueries = t; }
function aR(e, t) { let n = e.hostBindings; n ? e.hostBindings = (o, r) => { t(o, r), n(o, r); } : e.hostBindings = t; }
var cR = ["providersResolver"], lR = ["template", "decls", "consts", "vars", "onPush", "ngContentSelectors", "styles", "encapsulation", "schemas"];
function CE(e) { let t = TE(e.type), n; Ne(e) ? n = t.\u0275cmp : n = t.\u0275dir; let o = e; for (let r of cR)
    o[r] = n[r]; if (Ne(n))
    for (let r of lR)
        o[r] = n[r]; }
function ME(e) { let t = n => { let o = Array.isArray(e); n.hostDirectives === null ? (n.resolveHostDirectives = uR, n.hostDirectives = o ? e.map(Lu) : [e]) : o ? n.hostDirectives.unshift(...e.map(Lu)) : n.hostDirectives.unshift(e); }; return t.ngInherit = !0, t; }
function uR(e) { let t = [], n = !1, o = null, r = null; for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (s.hostDirectives !== null) {
        let a = t.length;
        o ??= new Map, r ??= new Map, NE(s, t, o), r.set(s, [a, t.length - 1]);
    }
    i === 0 && Ne(s) && (n = !0, t.push(s));
} for (let i = n ? 1 : 0; i < e.length; i++)
    t.push(e[i]); return [t, o, r]; }
function NE(e, t, n) { if (e.hostDirectives !== null)
    for (let o of e.hostDirectives)
        if (typeof o == "function") {
            let r = o();
            for (let i of r)
                ug(Lu(i), t, n);
        }
        else
            ug(o, t, n); }
function ug(e, t, n) { let o = Re(e.directive); dR(o.declaredInputs, e.inputs), NE(o, t, n), n.set(o, e), t.push(o); }
function Lu(e) { return typeof e == "function" ? { directive: x(e), inputs: ke, outputs: ke } : { directive: x(e.directive), inputs: dg(e.inputs), outputs: dg(e.outputs) }; }
function dg(e) { if (e === void 0 || e.length === 0)
    return ke; let t = {}; for (let n = 0; n < e.length; n += 2)
    t[e[n]] = e[n + 1]; return t; }
function dR(e, t) { for (let n in t)
    if (t.hasOwnProperty(n)) {
        let o = t[n], r = e[n];
        e[o] = r;
    } }
function wE(e, t, n, o, r, i, s, a) { if (n.firstCreatePass) {
    e.mergedAttrs = lo(e.mergedAttrs, e.attrs);
    let u = e.tView = kd(2, e, r, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
    n.queries !== null && (n.queries.template(n, e), u.queries = n.queries.embeddedTView(e));
} a && (e.flags |= a), ot(e, !1); let c = _E(n, t, e, o); pr() && Wd(n, t, c, e), je(c, t); let l = ay(c, t, c, e); t[o + I] = l, Ld(t, l), Ky(l, e, t); }
function fR(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; return t.firstCreatePass ? (f = Sn(t, d, 4, s || null, a || null), Gi() && jy(t, e, f, pe(t.consts, l), Yd), Yg(t, f)) : f = t.data[d], wE(f, e, t, n, o, r, i, c), Vn(f) && Da(t, e, f), l != null && ko(e, f, u), f; }
function Dn(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; if (t.firstCreatePass) {
    if (f = Sn(t, d, 4, s || null, a || null), l != null) {
        let p = pe(t.consts, l);
        f.localNames = [];
        for (let h = 0; h < p.length; h += 2)
            f.localNames.push(p[h], -1);
    }
}
else
    f = t.data[d]; return wE(f, e, t, n, o, r, i, c), l != null && ko(e, f, u), f; }
function Ef(e, t, n, o, r, i, s, a) { let c = g(), l = R(), u = pe(l.consts, i); return fR(c, l, e, t, n, o, r, u, void 0, s, a), Ef; }
function If(e, t, n, o, r, i, s, a) { let c = g(), l = R(), u = pe(l.consts, i); return Dn(c, l, e, t, n, o, r, u, void 0, s, a), If; }
var _E = SE;
function SE(e, t, n, o) { return ze(!0), t[w].createComment(""); }
function pR(e, t, n, o) { let r = !ua(t, n); ze(r); let i = t[ae]?.data[ea]?.[o] ?? null; if (i !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = i), r)
    return SE(e, t); let s = t[ae], a = ai(s, e, t, n); ca(s, o, a); let c = Cd(s, o); return Ra(c, a); }
function bE() { _E = pR; }
var te = (function (e) { return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e; })(te || {}), fg = 0, hR = 1, Q = (function (e) { return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e; })(Q || {}), $r = (function (e) { return e[e.Initial = -1] = "Initial", e; })($r || {}), io = 0, Rt = 1, yr = 2, os = 3, gR = 4, mR = 5, ja = 6, vR = 7, so = 8, yR = 9, Df = (function (e) { return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e; })(Df || {});
function ui(e, t, n) { let o = AE(e); t[o] === null && (t[o] = []), t[o].push(n); }
function hs(e, t) { let n = AE(e), o = t[n]; if (o !== null) {
    for (let r of o)
        r();
    t[n] = null;
} }
function RE(e) { hs(1, e), hs(0, e), hs(2, e); }
function AE(e) { let t = gR; return e === 1 ? t = mR : e === 2 && (t = yR), t; }
function di(e) { return e + 1; }
function Ie(e, t) { let n = e[m], o = di(t.index); return e[o]; }
function ER(e, t, n) { let o = e[m], r = di(t); e[r] = n; }
function ue(e, t) { let n = di(t.index); return e.data[n]; }
function IR(e, t, n) { let o = di(t); e.data[o] = n; }
function DR(e, t, n) { let o = t[m], r = ue(o, n); switch (e) {
    case Q.Complete: return r.primaryTmplIndex;
    case Q.Loading: return r.loadingTmplIndex;
    case Q.Error: return r.errorTmplIndex;
    case Q.Placeholder: return r.placeholderTmplIndex;
    default: return null;
} }
function Fu(e, t) { return t === Q.Placeholder ? e.placeholderBlockConfig?.[fg] ?? null : t === Q.Loading ? e.loadingBlockConfig?.[fg] ?? null : null; }
function OE(e) { return e.loadingBlockConfig?.[hR] ?? null; }
function pg(e, t) { if (!e || e.length === 0)
    return t; let n = new Set(e); for (let o of t)
    n.add(o); return e.length === n.size ? e : Array.from(n); }
function TR(e, t) { let n = t.primaryTmplIndex + I; return mt(e, n); }
function xE(e) { return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number"; }
function kE(e, t) { let n = null, o = di(t.index); return I < o && o < e.bindingStartIndex && (n = ue(e, t)), !!n && xE(n); }
function Tf(e, t, n) { let o = n.get(q); return XN(e, () => o.run(t), () => o.runOutsideAngular(() => JN())); }
function CR(e, t, n) { return n == null ? e : n >= 0 ? tl(n, e) : e[t.index][$] ?? null; }
function MR(e, t) { return cn(I + t, e); }
function Vo(e, t, n, o, r, i, s) { let a = e[k], c = a.get(q), l; function u() { if (nt(e)) {
    l.destroy();
    return;
} let d = Ie(e, t), f = d[Rt]; if (f !== $r.Initial && f !== Q.Placeholder) {
    l.destroy();
    return;
} let p = CR(e, t, o); if (!p || (l.destroy(), nt(p)))
    return; let h = MR(p, n), v = r(h, () => { c.run(() => { e !== p && qi(p, v), i(); }); }, a); e !== p && ur(p, v), ui(s, d, v); } l = Pv({ read: u }, { injector: a }); }
function Va(e, t) { let n = t.get(_R), o = () => n.remove(e); return n.add(e), o; }
var NR = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout, wR = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout, _R = (() => { class e {
    executingCallbacks = !1;
    idleId = null;
    current = new Set;
    deferred = new Set;
    ngZone = E(q);
    requestIdleCallbackFn = NR().bind(globalThis);
    cancelIdleCallbackFn = wR().bind(globalThis);
    add(n) { (this.executingCallbacks ? this.deferred : this.current).add(n), this.idleId === null && this.scheduleIdleCallback(); }
    remove(n) { let { current: o, deferred: r } = this; o.delete(n), r.delete(n), o.size === 0 && r.size === 0 && this.cancelIdleCallback(); }
    scheduleIdleCallback() { let n = () => { this.cancelIdleCallback(), this.executingCallbacks = !0; for (let o of this.current)
        o(); if (this.current.clear(), this.executingCallbacks = !1, this.deferred.size > 0) {
        for (let o of this.deferred)
            this.current.add(o);
        this.deferred.clear(), this.scheduleIdleCallback();
    } }; this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(n)); }
    cancelIdleCallback() { this.idleId !== null && (this.cancelIdleCallbackFn(this.idleId), this.idleId = null); }
    ngOnDestroy() { this.cancelIdleCallback(), this.current.clear(), this.deferred.clear(); }
    static \u0275prov = j({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function Ha(e) { return (t, n) => PE(e, t, n); }
function PE(e, t, n) { let o = n.get(LE), r = n.get(q), i = () => o.remove(t); return o.add(e, t, r), i; }
var LE = (() => { class e {
    executingCallbacks = !1;
    timeoutId = null;
    invokeTimerAt = null;
    current = [];
    deferred = [];
    add(n, o, r) { let i = this.executingCallbacks ? this.deferred : this.current; this.addToQueue(i, Date.now() + n, o), this.scheduleTimer(r); }
    remove(n) { let { current: o, deferred: r } = this; this.removeFromQueue(o, n) === -1 && this.removeFromQueue(r, n), o.length === 0 && r.length === 0 && this.clearTimeout(); }
    addToQueue(n, o, r) { let i = n.length; for (let s = 0; s < n.length; s += 2)
        if (n[s] > o) {
            i = s;
            break;
        } Uc(n, i, o, r); }
    removeFromQueue(n, o) { let r = -1; for (let i = 0; i < n.length; i += 2)
        if (n[i + 1] === o) {
            r = i;
            break;
        } return r > -1 && Bc(n, r, 2), r; }
    scheduleTimer(n) { let o = () => { this.clearTimeout(), this.executingCallbacks = !0; let i = [...this.current], s = Date.now(); for (let c = 0; c < i.length; c += 2) {
        let l = i[c], u = i[c + 1];
        if (l <= s)
            u();
        else
            break;
    } let a = -1; for (let c = 0; c < this.current.length && this.current[c] <= s; c += 2)
        a = c + 1; if (a >= 0 && Bc(this.current, 0, a + 1), this.executingCallbacks = !1, this.deferred.length > 0) {
        for (let c = 0; c < this.deferred.length; c += 2) {
            let l = this.deferred[c], u = this.deferred[c + 1];
            this.addToQueue(this.current, l, u);
        }
        this.deferred.length = 0;
    } this.scheduleTimer(n); }; if (this.current.length > 0) {
        let i = Date.now(), s = this.current[0];
        if (this.timeoutId === null || this.invokeTimerAt && this.invokeTimerAt - s > 16) {
            this.clearTimeout();
            let a = Math.max(s - i, 16);
            this.invokeTimerAt = s, this.timeoutId = n.runOutsideAngular(() => setTimeout(() => n.run(o), a));
        }
    } }
    clearTimeout() { this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null); }
    ngOnDestroy() { this.clearTimeout(), this.current.length = 0, this.deferred.length = 0; }
    static \u0275prov = j({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), SR = (() => { class e {
    cachedInjectors = new Map;
    getOrCreateInjector(n, o, r, i) { if (!this.cachedInjectors.has(n)) {
        let s = r.length > 0 ? mf(r, o, i) : null;
        this.cachedInjectors.set(n, s);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = j({ token: e, providedIn: "environment", factory: () => new e });
} return e; })(), bR = new C("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"), FE = new C("");
function ql(e, t, n) { return e.get(SR).getOrCreateInjector(t, e, n, ""); }
function RR(e, t, n) { if (e instanceof ro) {
    let r = e.injector, i = e.parentInjector, s = ql(i, t, n);
    return new ro(r, s);
} let o = e.get(_e); if (o !== e) {
    let r = ql(o, t, n);
    return new ro(e, r);
} return ql(e, t, n); }
function It(e, t, n, o = !1) { let r = n[z], i = r[m]; if (nt(r))
    return; let s = Ie(r, t), a = s[Rt], c = s[vR]; if (!(c !== null && e < c) && gg(a, e) && gg(s[io] ?? -1, e)) {
    let l = ue(i, t), d = !o && (typeof ngServerMode > "u" || !ngServerMode) && (OE(l) !== null || Fu(l, Q.Loading) !== null || Fu(l, Q.Placeholder)) ? ju : jE;
    try {
        d(e, s, n, t, r);
    }
    catch (f) {
        Kd(r, f);
    }
} }
function AR(e, t) { let n = e[Oe]?.findIndex(r => r.data[Jr] === t[Rt]) ?? -1; return { dehydratedView: n > -1 ? e[Oe][n] : null, dehydratedViewIx: n }; }
function jE(e, t, n, o, r) { V(20); let i = DR(e, r, o); if (i !== null) {
    t[Rt] = e;
    let s = r[m], a = i + I, c = mt(s, a), l = 0;
    Jd(n, l);
    let u;
    if (e === Q.Complete) {
        let h = ue(s, o), v = h.providers;
        v && v.length > 0 && (u = RR(r[k], h, v));
    }
    let { dehydratedView: d, dehydratedViewIx: f } = AR(n, t), p = Po(r, c, null, { injector: u, dehydratedView: d });
    if (Lo(n, p, l, En(c, d)), si(p, 2), f > -1 && n[Oe]?.splice(f, 1), (e === Q.Complete || e === Q.Error) && Array.isArray(t[so])) {
        for (let h of t[so])
            h();
        t[so] = null;
    }
} V(21); }
function OR(e, t, n, o, r) { let i = Date.now(), s = r[m], a = ue(s, o); if (t[yr] === null || t[yr] <= i) {
    t[yr] = null;
    let c = OE(a), l = t[os] !== null;
    if (e === Q.Loading && c !== null && !l) {
        t[io] = e;
        let u = hg(c, t, o, n, r);
        t[os] = u;
    }
    else {
        e > Q.Loading && l && (t[os](), t[os] = null, t[io] = null), jE(e, t, n, o, r);
        let u = Fu(a, e);
        u !== null && (t[yr] = i + u, hg(u, t, o, n, r));
    }
}
else
    t[io] = e; }
function hg(e, t, n, o, r) { return PE(e, () => { let s = t[io]; t[yr] = null, t[io] = null, s !== null && It(s, n, o); }, r[k]); }
function gg(e, t) { return e < t; }
function Ho(e, t) { let n = e[t.index]; It(Q.Placeholder, t, n); }
function mg(e, t, n) { e.loadingPromise.then(() => { e.loadingState === te.COMPLETE ? It(Q.Complete, t, n) : e.loadingState === te.FAILED && It(Q.Error, t, n); }); }
var ju = null;
function VE(e, t, n, o) { let r = e.consts; n != null && (t.placeholderBlockConfig = pe(r, n)), o != null && (t.loadingBlockConfig = pe(r, o)), ju === null && (ju = OR); }
var gs = "__ngAsyncComponentMetadataFn__";
function xR(e) { return e[gs] ?? null; }
function HE(e, t, n) { let o = e; return o[gs] = () => Promise.all(t()).then(r => (n(...r), o[gs] = null, r)), o[gs]; }
function Cf(e, t, n, o) { return ct(() => { let r = e; t !== null && (r.hasOwnProperty("decorators") && r.decorators !== void 0 ? r.decorators.push(...t) : r.decorators = t), n !== null && (r.ctorParameters = n), o !== null && (r.hasOwnProperty("propDecorators") && r.propDecorators !== void 0 ? r.propDecorators = G(G({}, r.propDecorators), o) : r.propDecorators = o); }); }
var kR = (() => { class e {
    log(n) { console.log(n); }
    warn(n) { console.warn(n); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function ms(e, t) { let n = e[m]; for (let o = I; o < n.bindingStartIndex; o++)
    if (Y(e[o])) {
        let r = e[o];
        if (!(o === n.bindingStartIndex - 1)) {
            let s = n.data[o], a = ue(n, s);
            if (xE(a)) {
                t.push({ lContainer: r, lView: e, tNode: s, tDetails: a });
                continue;
            }
        }
        X(r[U]) && ms(r[U], t);
        for (let s = $; s < r.length; s++)
            ms(r[s], t);
    }
    else
        X(e[o]) && ms(e[o], t); }
function PR() { return ee("Chrome DevTools profiling"), () => { }; }
function LR(e) { let t = Nt(), n = e.get(wt), o = wm(t, n), r = {}; for (let [i, s] of Object.entries(o))
    nw(i) || (r[i] = s); return r; }
var vg = "ng";
function FR(e, t) { jR(e, t); }
function jR(e, t) { if (typeof COMPILED > "u" || !COMPILED) {
    let n = Se;
    n[vg] ??= {}, n[vg][e] = t;
} }
var BE = new C(""), UE = new C(""), VR = (() => { class e {
    _ngZone;
    registry;
    _isZoneStable = !0;
    _callbacks = [];
    _taskTrackingZone = null;
    _destroyRef;
    constructor(n, o, r) { this._ngZone = n, this.registry = o, Vi() && (this._destroyRef = E(Fe, { optional: !0 }) ?? void 0), Mf || (qE(r), r.addToWindow(o)), this._watchAngularEvents(), n.run(() => { this._taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone"); }); }
    _watchAngularEvents() { let n = this._ngZone.onUnstable.subscribe({ next: () => { this._isZoneStable = !1; } }), o = this._ngZone.runOutsideAngular(() => this._ngZone.onStable.subscribe({ next: () => { q.assertNotInAngularZone(), queueMicrotask(() => { this._isZoneStable = !0, this._runCallbacksIfReady(); }); } })); this._destroyRef?.onDestroy(() => { n.unsubscribe(), o.unsubscribe(); }); }
    isStable() { return this._isZoneStable && !this._ngZone.hasPendingMacrotasks; }
    _runCallbacksIfReady() { if (this.isStable())
        queueMicrotask(() => { for (; this._callbacks.length !== 0;) {
            let n = this._callbacks.pop();
            clearTimeout(n.timeoutId), n.doneCb();
        } });
    else {
        let n = this.getPendingTasks();
        this._callbacks = this._callbacks.filter(o => o.updateCb && o.updateCb(n) ? (clearTimeout(o.timeoutId), !1) : !0);
    } }
    getPendingTasks() { return this._taskTrackingZone ? this._taskTrackingZone.macroTasks.map(n => ({ source: n.source, creationLocation: n.creationLocation, data: n.data })) : []; }
    addCallback(n, o, r) { let i = -1; o && o > 0 && (i = setTimeout(() => { this._callbacks = this._callbacks.filter(s => s.timeoutId !== i), n(); }, o)), this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: r }); }
    whenStable(n, o, r) { if (r && !this._taskTrackingZone)
        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'); this.addCallback(n, o, r), this._runCallbacksIfReady(); }
    registerApplication(n) { this.registry.registerApplication(n, this); }
    unregisterApplication(n) { this.registry.unregisterApplication(n); }
    findProviders(n, o, r) { return []; }
    static \u0275fac = function (o) { return new (o || e)(de(q), de($E), de(UE)); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac });
} return e; })(), $E = (() => { class e {
    _applications = new Map;
    registerApplication(n, o) { this._applications.set(n, o); }
    unregisterApplication(n) { this._applications.delete(n); }
    unregisterAllApplications() { this._applications.clear(); }
    getTestability(n) { return this._applications.get(n) || null; }
    getAllTestabilities() { return Array.from(this._applications.values()); }
    getAllRootElements() { return Array.from(this._applications.keys()); }
    findTestabilityInTree(n, o = !0) { return Mf?.findTestabilityInTree(this, n, o) ?? null; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function qE(e) { Mf = e; }
var Mf;
function Nf(e) { return !!e && typeof e.then == "function"; }
function GE(e) { return !!e && typeof e.subscribe == "function"; }
var wf = new C("");
function HR(e) { return qe([{ provide: wf, multi: !0, useValue: e }]); }
var _f = (() => { class e {
    resolve;
    reject;
    initialized = !1;
    done = !1;
    donePromise = new Promise((n, o) => { this.resolve = n, this.reject = o; });
    appInits = E(wf, { optional: !0 }) ?? [];
    injector = E(ie);
    constructor() { }
    runInitializers() { if (this.initialized)
        return; let n = []; for (let r of this.appInits) {
        let i = ji(this.injector, r);
        if (Nf(i))
            n.push(i);
        else if (GE(i)) {
            let s = new Promise((a, c) => { i.subscribe({ complete: a, error: c }); });
            n.push(s);
        }
    } let o = () => { this.done = !0, this.resolve(); }; Promise.all(n).then(() => { o(); }).catch(r => { this.reject(r); }), n.length === 0 && o(), this.initialized = !0; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), fi = new C("");
function Sf() { $p(() => { let e = ""; throw new T(600, e); }); }
function WE(e) { return e.isBoundToModule; }
var Vu = class {
    name;
    token;
    constructor(t, n) { this.name = t, this.token = n; }
}, BR = 10;
function bf(e, t) { return Array.isArray(t) ? t.reduce(bf, e) : G(G({}, e), t); }
var Ze = (() => { class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = E(st);
    afterRenderManager = E(ma);
    zonelessEnabled = E(qn);
    rootEffectScheduler = E(gr);
    dirtyFlags = 0;
    tracingSnapshot = null;
    allTestViews = new Set;
    autoDetectTestViews = new Set;
    includeAllTestViews = !1;
    afterTick = new od;
    get allViews() { return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]; }
    get destroyed() { return this._destroyed; }
    componentTypes = [];
    components = [];
    internalPendingTask = E(vt);
    get isStable() { return this.internalPendingTask.hasPendingTasksObservable.pipe(BM(n => !n)); }
    constructor() { E(xo, { optional: !0 }); }
    whenStable() { let n; return new Promise(o => { n = this.isStable.subscribe({ next: r => { r && o(); } }); }).finally(() => { n.unsubscribe(); }); }
    _injector = E(_e);
    _rendererFactory = null;
    get injector() { return this._injector; }
    bootstrap(n, o) { return this.bootstrapImpl(n, o); }
    bootstrapImpl(n, o, r = ie.NULL) { return this._injector.get(q).run(() => { V(10); let s = n instanceof ka; if (!this._injector.get(_f).done) {
        let h = "";
        throw new T(405, h);
    } let c; s ? c = n : c = this._injector.get(ci).resolveComponentFactory(n), this.componentTypes.push(c.componentType); let l = WE(c) ? void 0 : this._injector.get(go), u = o || c.selector, d = c.create(r, [], u, l), f = d.location.nativeElement, p = d.injector.get(BE, null); return p?.registerApplication(f), d.onDestroy(() => { this.detachView(d.hostView), Tr(this.components, d), p?.unregisterApplication(f); }), this._loadComponent(d), V(11, d), d; }); }
    tick() { this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick(); }
    _tick() { V(12), this.tracingSnapshot !== null ? this.tracingSnapshot.run(ga.CHANGE_DETECTION, this.tickImpl) : this.tickImpl(); }
    tickImpl = () => { if (this._runningTick)
        throw new T(101, !1); let n = A(null); try {
        this._runningTick = !0, this.synchronize();
    }
    finally {
        this._runningTick = !1, this.tracingSnapshot?.dispose(), this.tracingSnapshot = null, A(n), this.afterTick.next(), V(13);
    } };
    synchronize() { this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(Vr, null, { optional: !0 })); let n = 0; for (; this.dirtyFlags !== 0 && n++ < BR;)
        V(14), this.synchronizeOnce(), V(15); }
    synchronizeOnce() { this.dirtyFlags & 16 && (this.dirtyFlags &= -17, this.rootEffectScheduler.flush()); let n = !1; if (this.dirtyFlags & 7) {
        let o = !!(this.dirtyFlags & 1);
        this.dirtyFlags &= -8, this.dirtyFlags |= 8;
        for (let { _lView: r } of this.allViews) {
            if (!o && !Hn(r))
                continue;
            let i = o && !this.zonelessEnabled ? 0 : 1;
            ny(r, i), n = !0;
        }
        if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23)
            return;
    } n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()), this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews(); }
    syncDirtyFlagsWithViews() { if (this.allViews.some(({ _lView: n }) => Hn(n))) {
        this.dirtyFlags |= 2;
        return;
    }
    else
        this.dirtyFlags &= -8; }
    attachView(n) { let o = n; this._views.push(o), o.attachToAppRef(this); }
    detachView(n) { let o = n; Tr(this._views, o), o.detachFromAppRef(); }
    _loadComponent(n) { this.attachView(n.hostView); try {
        this.tick();
    }
    catch (r) {
        this.internalErrorHandler(r);
    } this.components.push(n), this._injector.get(fi, []).forEach(r => r(n)); }
    ngOnDestroy() { if (!this._destroyed)
        try {
            this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy());
        }
        finally {
            this._destroyed = !0, this._views = [], this._destroyListeners = [];
        } }
    onDestroy(n) { return this._destroyListeners.push(n), () => Tr(this._destroyListeners, n); }
    destroy() { if (this._destroyed)
        throw new T(406, !1); let n = this._injector; n.destroy && !n.destroyed && n.destroy(); }
    get viewCount() { return this._views.length; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function Tr(e, t) { let n = e.indexOf(t); n > -1 && e.splice(n, 1); }
function Rf() { let e, t; return { promise: new Promise((o, r) => { e = o, t = r; }), resolve: e, reject: t }; }
function zE(e) { let t = g(), n = _(); if (Ho(t, n), !YE(0, t))
    return; let o = t[k], r = Ie(t, n), i = e(() => De(0, t, n), o); ui(0, r, i); }
function QE(e) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let t = g(), n = t[k], o = _(), r = t[m], i = ue(r, o); if (i.loadingState === te.NOT_STARTED) {
    let s = Ie(t, o), c = e(() => pi(i, t, o), n);
    ui(1, s, c);
} }
function ZE(e, t, n) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let o = t[k], r = Ie(t, n), i = r[ja], s = e(() => At(o, i), o); ui(2, r, s); }
function pi(e, t, n) { Ba(e, t, n); }
function Ba(e, t, n) { let o = t[k], r = t[m]; if (e.loadingState !== te.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve(); let i = Ie(t, n), s = TR(r, e); e.loadingState = te.IN_PROGRESS, hs(1, i); let a = e.dependencyResolverFn, c = o.get(hr).add(); return a ? (e.loadingPromise = Promise.allSettled(a()).then(l => { let u = !1, d = [], f = []; for (let p of l)
    if (p.status === "fulfilled") {
        let h = p.value, v = W(h) || Re(h);
        if (v)
            d.push(v);
        else {
            let y = $e(h);
            y && f.push(y);
        }
    }
    else {
        u = !0;
        break;
    } if (u) {
    if (e.loadingState = te.FAILED, e.errorTmplIndex === null) {
        let h = new T(-750, !1);
        Kd(t, h);
    }
}
else {
    e.loadingState = te.COMPLETE;
    let p = s.tView;
    if (d.length > 0) {
        p.directiveRegistry = pg(p.directiveRegistry, d);
        let h = d.map(y => y.type), v = Fi(!1, ...h);
        e.providers = v;
    }
    f.length > 0 && (p.pipeRegistry = pg(p.pipeRegistry, f));
} }), e.loadingPromise.finally(() => { e.loadingPromise = null, c(); })) : (e.loadingPromise = Promise.resolve().then(() => { e.loadingPromise = null, e.loadingState = te.COMPLETE, c(); }), e.loadingPromise); }
function YE(e, t) { return !(e === 0 && typeof ngServerMode < "u" && ngServerMode || t[k].get(FE, null, { optional: !0 })?.behavior === Df.Manual); }
function De(e, t, n) { let o = t[m], r = t[n.index]; if (!YE(e, t))
    return; let i = Ie(t, n), s = ue(o, n); switch (RE(i), s.loadingState) {
    case te.NOT_STARTED:
        It(Q.Loading, n, r), Ba(s, t, n), s.loadingState === te.IN_PROGRESS && mg(s, n, r);
        break;
    case te.IN_PROGRESS:
        It(Q.Loading, n, r), mg(s, n, r);
        break;
    case te.COMPLETE:
        It(Q.Complete, n, r);
        break;
    case te.FAILED:
        It(Q.Error, n, r);
        break;
    default:
} }
function At(e, t, n) { return xt(this, null, function* () { let o = e.get(_t); if (o.hydrating.has(t))
    return; let { parentBlockPromise: i, hydrationQueue: s } = dw(t, e); if (s.length === 0)
    return; i !== null && s.shift(), qR(o, s), i !== null && (yield i); let a = s[0]; o.has(a) ? yield yg(e, s, n) : o.awaitParentBlock(a, () => xt(null, null, function* () { return yield yg(e, s, n); })); }); }
function yg(e, t, n) { return xt(this, null, function* () { let o = e.get(_t), r = o.hydrating, i = e.get(vt), s = i.add(); for (let c = 0; c < t.length; c++) {
    let l = t[c], u = o.get(l);
    if (u != null) {
        if (yield WR(u), yield GR(e), UR(u)) {
            YS(u), Eg(t.slice(c), o);
            break;
        }
        r.get(l).resolve();
    }
    else {
        $R(c, t, o), Eg(t.slice(c), o);
        break;
    }
} let a = t[t.length - 1]; yield r.get(a)?.promise, i.remove(s), n && n(t), KS(o.get(a), t, o, e.get(Ze)); }); }
function UR(e) { return Ie(e.lView, e.tNode)[Rt] === Q.Error; }
function $R(e, t, n) { let o = e - 1, r = o > -1 ? n.get(t[o]) : null; r && xa(r.lContainer); }
function Eg(e, t) { let n = t.hydrating; for (let o in e)
    n.get(o)?.reject(); t.cleanup(e); }
function qR(e, t) { for (let n of t)
    e.hydrating.set(n, Rf()); }
function GR(e) { return new Promise(t => Ud(t, { injector: e })); }
function WR(e) { return xt(this, null, function* () { let { tNode: t, lView: n } = e, o = Ie(n, t); return new Promise(r => { zR(o, r), De(2, n, t); }); }); }
function zR(e, t) { Array.isArray(e[so]) || (e[so] = []), e[so].push(t); }
function K(e, t, n) { return e === 0 ? Ig(t, n) : e === 2 ? !Ig(t, n) : !(typeof ngServerMode < "u" && ngServerMode); }
function QR(e) { return e != null && (e & 1) === 1; }
function Ig(e, t) { let n = e[k], o = ue(e[m], t), r = ei(n), i = QR(o.flags); if (typeof ngServerMode < "u" && ngServerMode)
    return !r || !i; let a = Ie(e, t)[ja] !== null; return !(i && a && r); }
function zt(e, t) { let n = ue(e, t); return n.hydrateTriggers ??= new Map; }
function KE(e, t, n) { let o = [], r = [], i = [], s = []; for (let [a, c] of t) {
    let l = n.get(a);
    if (l !== void 0) {
        let u = c.data[Dt], d = l;
        for (let f = 0; f < u; f++) {
            if (d = d.previousSibling, d.nodeType !== Node.ELEMENT_NODE)
                continue;
            let p = { el: d, blockName: a };
            c.hydrate.idle && o.push(p), c.hydrate.immediate && s.push(p), c.hydrate.timer !== null && (p.delay = c.hydrate.timer, r.push(p)), c.hydrate.viewport && i.push(p);
        }
    }
} ZR(e, o), JR(e, s), YR(e, i), KR(e, r); }
function ZR(e, t) { for (let n of t) {
    let o = e.get(_t), i = Va(() => At(e, n.blockName), e);
    o.addCleanupFn(n.blockName, i);
} }
function YR(e, t) { if (t.length > 0) {
    let n = e.get(_t);
    for (let o of t) {
        let r = Tf(o.el, () => At(e, o.blockName), e);
        n.addCleanupFn(o.blockName, r);
    }
} }
function KR(e, t) { for (let n of t) {
    let o = e.get(_t), r = () => At(e, n.blockName), s = Ha(n.delay)(r, e);
    o.addCleanupFn(n.blockName, s);
} }
function JR(e, t) { for (let n of t)
    At(e, n.blockName); }
function JE(e, t, n, o, r, i, s, a, c, l) { let u = g(), d = R(), f = e + I, p = Dn(u, d, e, null, 0, 0), h = u[k], v = ei(h); if (d.firstCreatePass) {
    ee("NgDefer");
    let ut = { primaryTmplIndex: t, loadingTmplIndex: o ?? null, placeholderTmplIndex: r ?? null, errorTmplIndex: i ?? null, placeholderBlockConfig: null, loadingBlockConfig: null, dependencyResolverFn: n ?? null, loadingState: te.NOT_STARTED, loadingPromise: null, providers: null, hydrateTriggers: null, debug: null, flags: l ?? 0 };
    c?.(d, ut, a, s), IR(d, f, ut);
} let y = u[f]; Ky(y, p, u); let D = null, O = null; if (y[Oe]?.length > 0) {
    let ut = y[Oe][0].data;
    O = ut[oa] ?? null, D = ut[Jr];
} let he = [null, $r.Initial, null, null, null, null, O, D, null, null]; ER(u, f, he); let He = null; O !== null && v && (He = h.get(_t), He.add(O, { lView: u, tNode: p, lContainer: y })); let xe = () => { RE(he), O !== null && He?.cleanup([O]); }; ui(0, he, () => qi(u, xe)), ur(u, xe); }
function XE(e) { let t = g(), n = Le(); if (!K(0, t, n))
    return; let o = ve(); if (Z(t, o, e)) {
    let r = A(null);
    try {
        let i = !!e, a = Ie(t, n)[Rt];
        i === !1 && a === $r.Initial ? Ho(t, n) : i === !0 && (a === $r.Initial || a === Q.Placeholder) && De(0, t, n);
    }
    finally {
        A(r);
    }
} }
function eI(e) { let t = g(), n = Le(); if (!K(1, t, n))
    return; let o = ve(); if (Z(t, o, e)) {
    let r = A(null);
    try {
        let i = !!e, s = t[m], a = ue(s, n);
        i === !0 && a.loadingState === te.NOT_STARTED && pi(a, t, n);
    }
    finally {
        A(r);
    }
} }
function tI(e) { let t = g(), n = Le(); if (!K(2, t, n))
    return; let o = ve(), r = R(); if (zt(r, n).set(6, null), Z(t, o, e))
    if (typeof ngServerMode < "u" && ngServerMode)
        De(2, t, n);
    else {
        let s = t[k], a = A(null);
        try {
            if (!!e === !0) {
                let u = Ie(t, n)[ja];
                At(s, u);
            }
        }
        finally {
            A(a);
        }
    } }
function nI() { let e = g(), t = _(); if (!K(2, e, t))
    return; zt(R(), t).set(7, null), typeof ngServerMode < "u" && ngServerMode && De(2, e, t); }
function oI() { let e = g(), t = _(); K(0, e, t) && zE(Va); }
function rI() { let e = g(), t = _(); K(1, e, t) && QE(Va); }
function iI() { let e = g(), t = _(); if (!K(2, e, t))
    return; zt(R(), t).set(0, null), typeof ngServerMode < "u" && ngServerMode ? De(2, e, t) : ZE(Va, e, t); }
function sI() { let e = g(), t = _(); if (!K(0, e, t))
    return; ue(e[m], t).loadingTmplIndex === null && Ho(e, t), De(0, e, t); }
function aI() { let e = g(), t = _(); if (!K(1, e, t))
    return; let n = e[m], o = ue(n, t); o.loadingState === te.NOT_STARTED && Ba(o, e, t); }
function cI() { let e = g(), t = _(); if (!K(2, e, t))
    return; if (zt(R(), t).set(1, null), typeof ngServerMode < "u" && ngServerMode)
    De(2, e, t);
else {
    let o = e[k], i = Ie(e, t)[ja];
    At(o, i);
} }
function lI(e) { let t = g(), n = _(); K(0, t, n) && zE(Ha(e)); }
function uI(e) { let t = g(), n = _(); K(1, t, n) && QE(Ha(e)); }
function dI(e) { let t = g(), n = _(); if (!K(2, t, n))
    return; zt(R(), n).set(5, { delay: e }), typeof ngServerMode < "u" && ngServerMode ? De(2, t, n) : ZE(Ha(e), t, n); }
function fI(e, t) { let n = g(), o = _(); K(0, n, o) && (Ho(n, o), typeof ngServerMode < "u" && ngServerMode || Vo(n, o, e, t, Am, () => De(0, n, o), 0)); }
function pI(e, t) { let n = g(), o = _(); if (!K(1, n, o))
    return; let r = n[m], i = ue(r, o); i.loadingState === te.NOT_STARTED && Vo(n, o, e, t, Am, () => pi(i, n, o), 1); }
function hI() { let e = g(), t = _(); if (!K(2, e, t))
    return; zt(R(), t).set(4, null), typeof ngServerMode < "u" && ngServerMode && De(2, e, t); }
function gI(e, t) { let n = g(), o = _(); K(0, n, o) && (Ho(n, o), typeof ngServerMode < "u" && ngServerMode || Vo(n, o, e, t, Rm, () => De(0, n, o), 0)); }
function mI(e, t) { let n = g(), o = _(); if (!K(1, n, o))
    return; let r = n[m], i = ue(r, o); i.loadingState === te.NOT_STARTED && Vo(n, o, e, t, Rm, () => pi(i, n, o), 1); }
function vI() { let e = g(), t = _(); if (!K(2, e, t))
    return; zt(R(), t).set(3, null), typeof ngServerMode < "u" && ngServerMode && De(2, e, t); }
function yI(e, t) { let n = g(), o = _(); K(0, n, o) && (Ho(n, o), typeof ngServerMode < "u" && ngServerMode || Vo(n, o, e, t, Tf, () => De(0, n, o), 0)); }
function EI(e, t) { let n = g(), o = _(); if (!K(1, n, o))
    return; let r = n[m], i = ue(r, o); i.loadingState === te.NOT_STARTED && Vo(n, o, e, t, Tf, () => pi(i, n, o), 1); }
function II() { let e = g(), t = _(); if (!K(2, e, t))
    return; zt(R(), t).set(2, null), typeof ngServerMode < "u" && ngServerMode && De(2, e, t); }
function Af(e, t) { let n = g(), o = ve(); if (Z(n, o, t)) {
    let r = R(), i = Le();
    if (Na(i, r, n, e, t))
        Me(i) && Yv(n, i.index);
    else {
        let a = ce(i, n);
        Ta(n[w], a, null, i.value, e, t, null);
    }
} return Af; }
function Of(e, t, n, o) { let r = g(), i = ve(); if (Z(r, i, t)) {
    let s = R(), a = Le();
    U_(a, r, e, t, n, o);
} return Of; }
var DI = new C("", { providedIn: "root", factory: () => !1 }), TI = new C("", { providedIn: "root", factory: () => XR }), XR = 4e3, eA = !1, bn = (typeof ngServerMode > "u" || !ngServerMode) && typeof document < "u" && typeof document?.documentElement?.getAnimations == "function";
function Ua(e) { return e[k].get(DI, eA); }
function tA(e, t, n) { let o = yo.get(e); if (o) {
    for (let r of t)
        o.classList.push(r);
    for (let r of n)
        o.cleanupFns.push(r);
}
else
    yo.set(e, { classList: t, cleanupFns: n }); }
function xf(e) { let t = yo.get(e); if (t) {
    for (let n of t.cleanupFns)
        n();
    yo.delete(e);
} gn.delete(e); }
var nA = () => { }, yo = new WeakMap, gn = new WeakMap, ao = new WeakMap;
function Hu(e, t) { let n = ao.get(e); if (n && n.length > 0) {
    let o = n.findIndex(r => r === t);
    o > -1 && n.splice(o, 1);
} n?.length === 0 && ao.delete(e); }
function $a(e, t) { let n = ao.get(e)?.shift(), o = t[pt]; if (o) {
    let i = Os(e.index, o)?.previousSibling;
    n && i && n === i && n.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } }));
} }
function CI(e, t) { ao.has(e) ? ao.get(e)?.push(t) : ao.set(e, [t]); }
function Us(e) { let t = e[gt] ??= {}; return t.enter ??= new Map; }
function Tn(e) { let t = e[gt] ??= {}; return t.leave ??= new Map; }
function MI(e) { let t = typeof e == "function" ? e() : e, n = Array.isArray(t) ? t : null; return typeof t == "string" && (n = t.trim().split(/\s+/).filter(o => o)), n; }
function oA(e, t) { if (!bn)
    return; let n = yo.get(e); if (n && n.classList.length > 0 && rA(e, n.classList))
    for (let o of n.classList)
        t.removeClass(e, o); xf(e); }
function rA(e, t) { for (let n of t)
    if (e.classList.contains(n))
        return !0; return !1; }
function NI(e, t) { let n = gn.get(t); return n === void 0 ? !0 : t === e.target && (n.animationName !== void 0 && e.animationName === n.animationName || n.propertyName !== void 0 && e.propertyName === n.propertyName); }
function qa(e, t, n) { let o = e.get(t.index) ?? { animateFns: [] }; o.animateFns.push(n), e.set(t.index, o); }
function Bu(e, t) { if (e)
    for (let n of e)
        n(); for (let n of t)
    n(); }
function Uu(e, t) { let n = Tn(e).get(t.index); n && (n.resolvers = void 0); }
function rs(e, t, n, o, r) { Hu(t, n), Bu(o, r), Uu(e, t); }
function Cr(e) { if (ee("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !bn)
    return Cr; let t = g(); if (Ua(t))
    return Cr; let n = _(); return $a(n, t), qa(Us(t), n, () => iA(t, n, e)), Ea(t[k]), $d(t[k], Us(t)), Cr; }
function iA(e, t, n) { let o = ce(t, e), r = e[w], i = e[k].get(q), s = MI(n), a = [], c = u => { if (u.target !== o)
    return; let d = u instanceof AnimationEvent ? "animationend" : "transitionend"; i.runOutsideAngular(() => { r.listen(o, d, l); }); }, l = u => { u.target === o && sA(u, o, r); }; if (s && s.length > 0) {
    i.runOutsideAngular(() => { a.push(r.listen(o, "animationstart", c)), a.push(r.listen(o, "transitionstart", c)); }), tA(o, s, a);
    for (let u of s)
        r.addClass(o, u);
    i.runOutsideAngular(() => { requestAnimationFrame(() => { if (Rv(o, gn, bn), !gn.has(o)) {
        for (let u of s)
            r.removeClass(o, u);
        xf(o);
    } }); });
} }
function sA(e, t, n) { let o = yo.get(t); if (!(e.target !== t || !o) && NI(e, t)) {
    e.stopImmediatePropagation();
    for (let r of o.classList)
        n.removeClass(t, r);
    xf(t);
} }
function Mr(e) { if (ee("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !bn)
    return Mr; let t = g(); if (Ua(t))
    return Mr; let n = _(); return $a(n, t), qa(Us(t), n, () => aA(t, n, e)), Ea(t[k]), $d(t[k], Us(t)), Mr; }
function aA(e, t, n) { let o = ce(t, e); n.call(e[H], { target: o, animationComplete: nA }); }
function Nr(e) { if (ee("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !bn)
    return Nr; let t = g(); if (Ua(t))
    return Nr; let o = _(); return $a(o, t), qa(Tn(t), o, () => cA(t, o, e)), Ea(t[k]), Nr; }
function cA(e, t, n) { let { promise: o, resolve: r } = Rf(), i = ce(t, e), s = e[w], a = e[k].get(q); yn.add(e), (Tn(e).get(t.index).resolvers ??= []).push(r); let c = MI(n); return c && c.length > 0 ? lA(i, t, e, c, s, a) : r(), { promise: o, resolve: r }; }
function lA(e, t, n, o, r, i) { oA(e, r); let s = [], a = Tn(n).get(t.index)?.resolvers, c = l => { if (l.target === e && (l instanceof CustomEvent || NI(l, e))) {
    if (l.stopImmediatePropagation(), gn.delete(e), Hu(t, e), Array.isArray(t.projection))
        for (let u of o)
            r.removeClass(e, u);
    Bu(a, s), Uu(n, t);
} }; i.runOutsideAngular(() => { s.push(r.listen(e, "animationend", c)), s.push(r.listen(e, "transitionend", c)); }), CI(t, e); for (let l of o)
    r.addClass(e, l); i.runOutsideAngular(() => { requestAnimationFrame(() => { Rv(e, gn, bn), gn.has(e) || (Hu(t, e), Bu(a, s), Uu(n, t)); }); }); }
function $s(e) { if (ee("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !bn)
    return $s; let t = g(), n = _(); return $a(n, t), yn.add(t), qa(Tn(t), n, () => uA(t, n, e)), Ea(t[k]), $s; }
function uA(e, t, n) { let { promise: o, resolve: r } = Rf(), i = ce(t, e), s = [], a = e[w], c = Ua(e), l = e[k].get(q), u = e[k].get(TI); (Tn(e).get(t.index).resolvers ??= []).push(r); let d = Tn(e).get(t.index)?.resolvers; if (c)
    rs(e, t, i, d, s);
else {
    let f = setTimeout(() => rs(e, t, i, d, s), u), p = { target: i, animationComplete: () => { rs(e, t, i, d, s), clearTimeout(f); } };
    CI(t, i), l.runOutsideAngular(() => { s.push(a.listen(i, "animationend", () => { rs(e, t, i, d, s), clearTimeout(f); }, { once: !0 })); }), n.call(e[H], p);
} return { promise: o, resolve: r }; }
function wI() { return g()[J][H]; }
var $u = class {
    destroy(t) { }
    updateValue(t, n) { }
    swap(t, n) { let o = Math.min(t, n), r = Math.max(t, n), i = this.detach(r); if (r - o > 1) {
        let s = this.detach(o);
        this.attach(o, i), this.attach(r, s);
    }
    else
        this.attach(o, i); }
    move(t, n) { this.attach(n, this.detach(t)); }
};
function Gl(e, t, n, o, r) { return e === n && Object.is(t, o) ? 1 : Object.is(r(e, t), r(n, o)) ? -1 : 0; }
function dA(e, t, n) { let o, r, i = 0, s = e.length - 1, a = void 0; if (Array.isArray(t)) {
    let c = t.length - 1;
    for (; i <= s && i <= c;) {
        let l = e.at(i), u = t[i], d = Gl(i, l, i, u, n);
        if (d !== 0) {
            d < 0 && e.updateValue(i, u), i++;
            continue;
        }
        let f = e.at(s), p = t[c], h = Gl(s, f, c, p, n);
        if (h !== 0) {
            h < 0 && e.updateValue(s, p), s--, c--;
            continue;
        }
        let v = n(i, l), y = n(s, f), D = n(i, u);
        if (Object.is(D, y)) {
            let O = n(c, p);
            Object.is(O, v) ? (e.swap(i, s), e.updateValue(s, p), c--, s--) : e.move(s, i), e.updateValue(i, u), i++;
            continue;
        }
        if (o ??= new qs, r ??= Tg(e, i, s, n), qu(e, o, i, D))
            e.updateValue(i, u), i++, s++;
        else if (r.has(D))
            o.set(v, e.detach(i)), s--;
        else {
            let O = e.create(i, t[i]);
            e.attach(i, O), i++, s++;
        }
    }
    for (; i <= c;)
        Dg(e, o, n, i, t[i]), i++;
}
else if (t != null) {
    let c = t[Symbol.iterator](), l = c.next();
    for (; !l.done && i <= s;) {
        let u = e.at(i), d = l.value, f = Gl(i, u, i, d, n);
        if (f !== 0)
            f < 0 && e.updateValue(i, d), i++, l = c.next();
        else {
            o ??= new qs, r ??= Tg(e, i, s, n);
            let p = n(i, d);
            if (qu(e, o, i, p))
                e.updateValue(i, d), i++, s++, l = c.next();
            else if (!r.has(p))
                e.attach(i, e.create(i, d)), i++, s++, l = c.next();
            else {
                let h = n(i, u);
                o.set(h, e.detach(i)), s--;
            }
        }
    }
    for (; !l.done;)
        Dg(e, o, n, e.length, l.value), l = c.next();
} for (; i <= s;)
    e.destroy(e.detach(s--)); o?.forEach(c => { e.destroy(c); }); }
function qu(e, t, n, o) { return t !== void 0 && t.has(o) ? (e.attach(n, t.get(o)), t.delete(o), !0) : !1; }
function Dg(e, t, n, o, r) { if (qu(e, t, o, n(o, r)))
    e.updateValue(o, r);
else {
    let i = e.create(o, r);
    e.attach(o, i);
} }
function Tg(e, t, n, o) { let r = new Set; for (let i = t; i <= n; i++)
    r.add(o(i, e.at(i))); return r; }
var qs = class {
    kvMap = new Map;
    _vMap = void 0;
    has(t) { return this.kvMap.has(t); }
    delete(t) { if (!this.has(t))
        return !1; let n = this.kvMap.get(t); return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(t), !0; }
    get(t) { return this.kvMap.get(t); }
    set(t, n) { if (this.kvMap.has(t)) {
        let o = this.kvMap.get(t);
        this._vMap === void 0 && (this._vMap = new Map);
        let r = this._vMap;
        for (; r.has(o);)
            o = r.get(o);
        r.set(o, n);
    }
    else
        this.kvMap.set(t, n); }
    forEach(t) { for (let [n, o] of this.kvMap)
        if (t(o, n), this._vMap !== void 0) {
            let r = this._vMap;
            for (; r.has(o);)
                o = r.get(o), t(o, n);
        } }
};
function _I(e, t, n, o, r, i, s, a) { ee("NgControlFlow"); let c = g(), l = R(), u = pe(l.consts, i); return Dn(c, l, e, t, n, o, r, u, 256, s, a), Ga; }
function Ga(e, t, n, o, r, i, s, a) { ee("NgControlFlow"); let c = g(), l = R(), u = pe(l.consts, i); return Dn(c, l, e, t, n, o, r, u, 512, s, a), Ga; }
function SI(e, t) { ee("NgControlFlow"); let n = g(), o = ve(), r = n[o] !== B ? n[o] : -1, i = r !== -1 ? Gs(n, I + r) : void 0, s = 0; if (Z(n, o, e)) {
    let a = A(null);
    try {
        if (i !== void 0 && Jd(i, s), e !== -1) {
            let c = I + e, l = Gs(n, c), u = Qu(n[m], c), d = xy(l, u, n), f = Po(n, u, t, { dehydratedView: d });
            Lo(l, f, s, En(u, d));
        }
    }
    finally {
        A(a);
    }
}
else if (i !== void 0) {
    let a = cy(i, s);
    a !== void 0 && (a[H] = t);
} }
var Gu = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, o) { this.lContainer = t, this.$implicit = n, this.$index = o; }
    get $count() { return this.lContainer.length - $; }
};
function bI(e) { return e; }
function RI(e, t) { return t; }
var Wu = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, o) { this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = o; }
};
function AI(e, t, n, o, r, i, s, a, c, l, u, d, f) { ee("NgControlFlow"); let p = g(), h = R(), v = c !== void 0, y = g(), D = a ? s.bind(y[J][H]) : s, O = new Wu(v, D); y[I + e] = O, Dn(p, h, e + 1, t, n, o, r, pe(h.consts, i), 256), v && Dn(p, h, e + 2, c, l, u, d, pe(h.consts, f), 512); }
var zu = class extends $u {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, o) { super(), this.lContainer = t, this.hostLView = n, this.templateTNode = o; }
    get length() { return this.lContainer.length - $; }
    at(t) { return this.getLView(t)[H].$implicit; }
    attach(t, n) { let o = n[ae]; this.needsIndexUpdate ||= t !== this.length, Lo(this.lContainer, n, t, En(this.templateTNode, o)), fA(this.lContainer, t); }
    detach(t) { return this.needsIndexUpdate ||= t !== this.length - 1, pA(this.lContainer, t), hA(this.lContainer, t); }
    create(t, n) { let o = jr(this.lContainer, this.templateTNode.tView.ssrId), r = Po(this.hostLView, this.templateTNode, new Gu(this.lContainer, n, t), { dehydratedView: o }); return this.operationsCounter?.recordCreate(), r; }
    destroy(t) { ii(t[m], t), this.operationsCounter?.recordDestroy(); }
    updateValue(t, n) { this.getLView(t)[H].$implicit = n; }
    reset() { this.needsIndexUpdate = !1, this.operationsCounter?.reset(); }
    updateIndexes() { if (this.needsIndexUpdate)
        for (let t = 0; t < this.length; t++)
            this.getLView(t)[H].$index = t; }
    getLView(t) { return gA(this.lContainer, t); }
};
function OI(e) { let t = A(null), n = le(); try {
    let o = g(), r = o[m], i = o[n], s = n + 1, a = Gs(o, s);
    if (i.liveCollection === void 0) {
        let l = Qu(r, s);
        i.liveCollection = new zu(a, o, l);
    }
    else
        i.liveCollection.reset();
    let c = i.liveCollection;
    if (dA(c, e, i.trackByFn), c.updateIndexes(), i.hasEmptyBlock) {
        let l = ve(), u = c.length === 0;
        if (Z(o, l, u)) {
            let d = n + 2, f = Gs(o, d);
            if (u) {
                let p = Qu(r, d), h = xy(f, p, o), v = Po(o, p, void 0, { dehydratedView: h });
                Lo(f, v, 0, En(p, h));
            }
            else
                r.firstUpdatePass && Oa(f), Jd(f, 0);
        }
    }
}
finally {
    A(t);
} }
function Gs(e, t) { return e[t]; }
function fA(e, t) { if (e.length <= $)
    return; let n = $ + t, o = e[n], r = o ? o[gt] : void 0; if (o && r && r.detachedLeaveAnimationFns && r.detachedLeaveAnimationFns.length > 0) {
    let i = o[k];
    N_(i, r), yn.delete(o), r.detachedLeaveAnimationFns = void 0;
} }
function pA(e, t) { if (e.length <= $)
    return; let n = $ + t, o = e[n], r = o ? o[gt] : void 0; r && r.leave && r.leave.size > 0 && (r.detachedLeaveAnimationFns = []); }
function hA(e, t) { return Lr(e, t); }
function gA(e, t) { return cy(e, t); }
function Qu(e, t) { return mt(e, t); }
function kf(e, t, n) { let o = g(), r = ve(); if (Z(o, r, t)) {
    let i = R(), s = Le();
    Qd(s, o, e, t, o[w], n);
} return kf; }
function Zu(e, t, n, o, r) { Na(t, e, n, r ? "class" : "style", o); }
function Wa(e, t, n, o) { let r = g(), i = r[m], s = e + I, a = i.firstCreatePass ? rf(s, r, 2, t, Yd, Gi(), n, o) : i.data[s]; if (Ca(a, r, e, t, Ff), Vn(a)) {
    let c = r[m];
    Da(c, r, a), Nd(c, a, r);
} return o != null && ko(r, a), Wa; }
function za() { let e = R(), t = _(), n = Ma(t); return e.firstCreatePass && sf(e, n), il(n) && cl(), rl(), n.classesWithoutHost != null && JM(n) && Zu(e, n, g(), n.classesWithoutHost, !0), n.stylesWithoutHost != null && XM(n) && Zu(e, n, g(), n.stylesWithoutHost, !1), za; }
function Pf(e, t, n, o) { return Wa(e, t, n, o), za(), Pf; }
function Qa(e, t, n, o) { let r = g(), i = r[m], s = e + I, a = i.firstCreatePass ? Hy(s, i, 2, t, n, o) : i.data[s]; return Ca(a, r, e, t, Ff), o != null && ko(r, a), Qa; }
function Za() { let e = _(), t = Ma(e); return il(t) && cl(), rl(), Za; }
function Lf(e, t, n, o) { return Qa(e, t, n, o), Za(), Lf; }
var Ff = (e, t, n, o, r) => (ze(!0), fa(t[w], o, Cl()));
function mA(e, t, n, o, r) { let i = !ua(t, n); if (ze(i), i)
    return fa(t[w], o, Cl()); let s = t[ae], a = ai(s, e, t, n); return Gm(s, r) && ca(s, r, a.nextSibling), s && (cd(n) || pm(a)) && Me(n) && (vh(n), Cv(a)), a; }
function xI() { Ff = mA; }
function Ya(e, t, n) { let o = g(), r = o[m], i = e + I, s = r.firstCreatePass ? rf(i, o, 8, "ng-container", Yd, Gi(), t, n) : r.data[i]; if (Ca(s, o, e, "ng-container", Bf), Vn(s)) {
    let a = o[m];
    Da(a, o, s), Nd(a, s, o);
} return n != null && ko(o, s), Ya; }
function hi() { let e = R(), t = _(), n = Ma(t); return e.firstCreatePass && sf(e, n), hi; }
function jf(e, t, n) { return Ya(e, t, n), hi(), jf; }
function Ka(e, t, n) { let o = g(), r = o[m], i = e + I, s = r.firstCreatePass ? Hy(i, r, 8, "ng-container", t, n) : r.data[i]; return Ca(s, o, e, "ng-container", Bf), n != null && ko(o, s), Ka; }
function Vf() { let e = _(), t = Ma(e); return hi; }
function Hf(e, t, n) { return Ka(e, t, n), Vf(), Hf; }
var Bf = (e, t, n, o, r) => (ze(!0), xd(t[w], ""));
function vA(e, t, n, o, r) { let i, s = !ua(t, n); if (ze(s), s)
    return xd(t[w], ""); let a = t[ae], c = ai(a, e, t, n), l = qm(a, r); return ca(a, r, c), i = Ra(l, c), i; }
function kI() { Bf = vA; }
function PI() { return g(); }
function Uf(e, t, n) { let o = g(), r = ve(); if (Z(o, r, t)) {
    let i = R(), s = Le();
    Zd(s, o, e, t, o[w], n);
} return Uf; }
function $f(e, t, n) { let o = g(), r = ve(); if (Z(o, r, t)) {
    let i = R(), s = Le(), a = zi(i.data), c = Kv(a, s, o);
    Zd(s, o, e, t, c, n);
} return $f; }
var is = void 0;
function yA(e) { let t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length; return t === 1 && n === 0 ? 1 : 5; }
var EA = ["en", [["a", "p"], ["AM", "PM"]], [["AM", "PM"]], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], is, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], is, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", is, "{1} 'at' {0}", is], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", yA], co = {};
function IA(e, t, n) { typeof t != "string" && (n = t, t = e[Eo.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), co[t] = e, n && (co[t][Eo.ExtraData] = n); }
function qf(e) { let t = CA(e), n = Cg(t); if (n)
    return n; let o = t.split("-")[0]; if (n = Cg(o), n)
    return n; if (o === "en")
    return EA; throw new T(701, !1); }
function DA(e) { return qf(e)[Eo.CurrencyCode] || null; }
function LI(e) { return qf(e)[Eo.PluralCase]; }
function Cg(e) { return e in co || (co[e] = Se.ng && Se.ng.common && Se.ng.common.locales && Se.ng.common.locales[e]), co[e]; }
function TA() { co = {}; }
var Eo = (function (e) { return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e; })(Eo || {});
function CA(e) { return e.toLowerCase().replace(/_/g, "-"); }
var MA = ["zero", "one", "two", "few", "many"];
function NA(e, t) { let n = LI(t)(parseInt(e, 10)), o = MA[n]; return o !== void 0 ? o : "other"; }
var gi = "en-US", wA = "USD", FI = { marker: "element" }, jI = { marker: "ICU" }, yt = (function (e) { return e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT", e; })(yt || {}), VI = gi;
function HI(e) { typeof e == "string" && (VI = e.toLowerCase().replace(/_/g, "-")); }
function _A() { return VI; }
var qr = 0, wr = 0;
function SA(e) { e && (qr = qr | 1 << Math.min(wr, 31)), wr++; }
function bA(e, t, n) { if (wr > 0) {
    let o = e.data[n], r = Array.isArray(o) ? o : o.update, i = rt() - wr - 1;
    qI(e, t, r, i, qr);
} qr = 0, wr = 0; }
function BI(e, t, n) { let o = e[w]; switch (n) {
    case Node.COMMENT_NODE: return xd(o, t);
    case Node.TEXT_NODE: return Od(o, t);
    case Node.ELEMENT_NODE: return fa(o, t, null);
} }
var _r = (e, t, n, o) => (ze(!0), BI(e, n, o));
function RA(e, t, n, o) { let r = e[ae], i = t - I, s = !Aa() || !r || dr() || la(r, i); return ze(s), s ? BI(e, n, o) : vy(r, i); }
function UI() { _r = RA; }
function AA(e, t, n, o) { let r = e[w]; for (let i = 0; i < t.length; i++) {
    let s = t[i++], a = t[i], c = (s & yt.COMMENT) === yt.COMMENT, l = (s & yt.APPEND_EAGERLY) === yt.APPEND_EAGERLY, u = s >>> yt.SHIFT, d = e[u], f = !1;
    d === null && (d = e[u] = _r(e, u, a, c ? Node.COMMENT_NODE : Node.TEXT_NODE), f = pr()), l && n !== null && f && vn(r, n, d, o, !1);
} }
function $I(e, t, n, o) { let r = n[w], i = null, s; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "string") {
        let l = t[++a];
        n[l] === null && (n[l] = _r(n, l, c, Node.TEXT_NODE));
    }
    else if (typeof c == "number")
        switch (c & 1) {
            case 0:
                let l = _S(c);
                i === null && (i = l, s = r.parentNode(o));
                let u, d;
                if (l === i ? (u = o, d = s) : (u = null, d = P(n[l])), d !== null) {
                    let v = SS(c), y = n[v];
                    vn(r, d, y, u, !1);
                    let D = Er(e, v);
                    if (D !== null && typeof D == "object") {
                        let O = ba(D, n);
                        O !== null && $I(e, D.create[O], n, n[D.anchorIdx]);
                    }
                }
                break;
            case 1:
                let f = c >>> 1, p = t[++a], h = t[++a];
                Ta(r, cn(f, n), null, null, p, h, null);
                break;
            default:
        }
    else
        switch (c) {
            case jI:
                let l = t[++a], u = t[++a];
                if (n[u] === null) {
                    let p = n[u] = _r(n, u, l, Node.COMMENT_NODE);
                    je(p, n);
                }
                break;
            case FI:
                let d = t[++a], f = t[++a];
                if (n[f] === null) {
                    let p = n[f] = _r(n, f, d, Node.ELEMENT_NODE);
                    je(p, n);
                }
                break;
            default:
        }
} }
function qI(e, t, n, o, r) { for (let i = 0; i < n.length; i++) {
    let s = n[i], a = n[++i];
    if (s & r) {
        let c = "";
        for (let l = i + 1; l <= i + a; l++) {
            let u = n[l];
            if (typeof u == "string")
                c += u;
            else if (typeof u == "number")
                if (u < 0)
                    c += b(t[o - u]);
                else {
                    let d = u >>> 2;
                    switch (u & 3) {
                        case 1:
                            let f = n[++l], p = n[++l], h = e.data[d];
                            typeof h == "string" ? Ta(t[w], t[d], null, h, f, c, p) : Qd(h, t, f, c, t[w], p);
                            break;
                        case 0:
                            let v = t[d];
                            v !== null && Dv(t[w], v, c);
                            break;
                        case 2:
                            OA(e, Er(e, d), t, c);
                            break;
                        case 3:
                            Mg(e, Er(e, d), o, t);
                            break;
                    }
                }
        }
    }
    else {
        let c = n[i + 1];
        if (c > 0 && (c & 3) === 3) {
            let l = c >>> 2, u = Er(e, l);
            t[u.currentCaseLViewIndex] < 0 && Mg(e, u, o, t);
        }
    }
    i += a;
} }
function Mg(e, t, n, o) { let r = o[t.currentCaseLViewIndex]; if (r !== null) {
    let i = qr;
    r < 0 && (r = o[t.currentCaseLViewIndex] = ~r, i = -1), qI(e, o, t.update[r], n, i);
} }
function OA(e, t, n, o) { let r = xA(t, o); if (ba(t, n) !== r && (GI(e, t, n), n[t.currentCaseLViewIndex] = r === null ? null : ~r, r !== null)) {
    let s = n[t.anchorIdx];
    s && $I(e, t.create[r], n, s), WS(n, t.anchorIdx, r);
} }
function GI(e, t, n) { let o = ba(t, n); if (o !== null) {
    let r = t.remove[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i];
        if (s > 0) {
            let a = cn(s, n);
            a !== null && oi(n[w], a);
        }
        else
            GI(e, Er(e, ~s), n);
    }
} }
function xA(e, t) { let n = e.cases.indexOf(t); if (n === -1)
    switch (e.type) {
        case 1: {
            let o = NA(t, _A());
            n = e.cases.indexOf(o), n === -1 && o !== "other" && (n = e.cases.indexOf("other"));
            break;
        }
        case 0: {
            n = e.cases.indexOf("other");
            break;
        }
    } return n === -1 ? null : n; }
var Ws = /�(\d+):?\d*�/gi, kA = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi, PA = /�(\d+)�/, WI = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/, Sr = "\uFFFD", LA = /�\/?\*(\d+:\d+)�/gi, FA = /�(\/?[#*]\d+):?\d*�/gi, jA = /\uE500/g;
function VA(e) { return e.replace(jA, " "); }
function HA(e, t, n, o, r, i) { let s = Bn(), a = [], c = [], l = [[]], u = [[]]; r = qA(r, i); let d = VA(r).split(FA); for (let f = 0; f < d.length; f++) {
    let p = d[f];
    if ((f & 1) === 0) {
        let h = Yu(p);
        for (let v = 0; v < h.length; v++) {
            let y = h[v];
            if ((v & 1) === 0) {
                let D = y;
                D !== "" && BA(u[0], e, s, l[0], a, c, n, D);
            }
            else {
                let D = y;
                if (typeof D != "object")
                    throw new Error(`Unable to parse ICU expression in "${r}" message.`);
                let he = zI(e, s, l[0], n, a, "", !0).index;
                ZI(u[0], e, n, c, t, D, he);
            }
        }
    }
    else {
        let h = p.charCodeAt(0) === 47, v = p.charCodeAt(h ? 1 : 0), y = I + Number.parseInt(p.substring(h ? 2 : 1));
        if (h)
            l.shift(), u.shift(), ot(Bn(), !1);
        else {
            let D = wS(e, l[0], y);
            l.unshift([]), ot(D, !0);
            let O = { kind: 2, index: y, children: [], type: v === 35 ? 0 : 1 };
            u[0].push(O), u.unshift(O.children);
        }
    }
} e.data[o] = { create: a, update: c, ast: u[0], parentTNodeIndex: t }; }
function zI(e, t, n, o, r, i, s) { let a = ri(e, o, 1, null), c = a << yt.SHIFT, l = Bn(); t === l && (l = null), l === null && (c |= yt.APPEND_EAGERLY), s && (c |= yt.COMMENT, p_(RS)), r.push(c, i === null ? "" : i); let u = Xd(e, a, s ? 32 : 1, i === null ? "" : i, null); py(n, u); let d = u.index; return ot(u, !1), l !== null && t !== l && NS(l, d), u; }
function BA(e, t, n, o, r, i, s, a) { let c = a.match(Ws), u = zI(t, n, o, s, r, c ? null : a, !1).index; c && br(i, a, u, null, 0, null), e.push({ kind: 0, index: u }); }
function UA(e, t, n) { let r = _().index, i = []; if (e.firstCreatePass && e.data[t] === null) {
    for (let s = 0; s < n.length; s += 2) {
        let a = n[s], c = n[s + 1];
        if (c !== "") {
            if (kA.test(c))
                throw new Error(`ICU expressions are not supported in attributes. Message: "${c}".`);
            br(i, c, r, a, $A(i), null);
        }
    }
    e.data[t] = i;
} }
function br(e, t, n, o, r, i) { let s = e.length, a = s + 1; e.push(null, null); let c = s + 2, l = t.split(Ws), u = 0; for (let d = 0; d < l.length; d++) {
    let f = l[d];
    if (d & 1) {
        let p = r + parseInt(f, 10);
        e.push(-1 - p), u = u | QI(p);
    }
    else
        f !== "" && e.push(f);
} return e.push(n << 2 | (o ? 1 : 0)), o && e.push(o, i), e[s] = u, e[a] = e.length - c, u; }
function $A(e) { let t = 0; for (let n = 0; n < e.length; n++) {
    let o = e[n];
    typeof o == "number" && o < 0 && t++;
} return t; }
function QI(e) { return 1 << Math.min(e, 31); }
function Ng(e) { let t, n = "", o = 0, r = !1, i; for (; (t = LA.exec(e)) !== null;)
    r ? t[0] === `${Sr}/*${i}${Sr}` && (o = t.index, r = !1) : (n += e.substring(o, t.index + t[0].length), i = t[1], r = !0); return n += e.slice(o), n; }
function qA(e, t) { if (gy(t))
    return Ng(e); {
    let n = e.indexOf(`:${t}${Sr}`) + 2 + t.toString().length, o = e.search(new RegExp(`${Sr}\\/\\*\\d+:${t}${Sr}`));
    return Ng(e.substring(n, o));
} }
function ZI(e, t, n, o, r, i, s) { let a = 0, c = { type: i.type, currentCaseLViewIndex: ri(t, n, 1, null), anchorIdx: s, cases: [], create: [], remove: [], update: [] }; QA(o, i, s), MS(t, s, c); let l = i.values, u = []; for (let d = 0; d < l.length; d++) {
    let f = l[d], p = [];
    for (let v = 0; v < f.length; v++) {
        let y = f[v];
        if (typeof y != "string") {
            let D = p.push(y) - 1;
            f[v] = `<!--\uFFFD${D}\uFFFD-->`;
        }
    }
    let h = [];
    u.push(h), a = WA(h, t, c, n, o, r, i.cases[d], f.join(""), p) | a;
} a && ZA(o, a, s), e.push({ kind: 3, index: s, cases: u, currentCaseLViewIndex: c.currentCaseLViewIndex }); }
function GA(e) { let t = [], n = [], o = 1, r = 0; e = e.replace(WI, function (s, a, c) { return c === "select" ? o = 0 : o = 1, r = parseInt(a.slice(1), 10), ""; }); let i = Yu(e); for (let s = 0; s < i.length;) {
    let a = i[s++].trim();
    o === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
    let c = Yu(i[s++]);
    t.length > n.length && n.push(c);
} return { type: o, mainBinding: r, cases: t, values: n }; }
function Yu(e) { if (!e)
    return []; let t = 0, n = [], o = [], r = /[{}]/g; r.lastIndex = 0; let i; for (; i = r.exec(e);) {
    let a = i.index;
    if (i[0] == "}") {
        if (n.pop(), n.length == 0) {
            let c = e.substring(t, a);
            WI.test(c) ? o.push(GA(c)) : o.push(c), t = a + 1;
        }
    }
    else {
        if (n.length == 0) {
            let c = e.substring(t, a);
            o.push(c), t = a + 1;
        }
        n.push("{");
    }
} let s = e.substring(t); return o.push(s), o; }
function WA(e, t, n, o, r, i, s, a, c) { let l = [], u = [], d = []; n.cases.push(s), n.create.push(l), n.remove.push(u), n.update.push(d); let p = nv(Nt()).getInertBodyElement(a), h = Eu(p) || p; return h ? YI(e, t, n, o, r, l, u, d, h, i, c, 0) : 0; }
function YI(e, t, n, o, r, i, s, a, c, l, u, d) { let f = 0, p = c.firstChild; for (; p;) {
    let h = ri(t, o, 1, null);
    switch (p.nodeType) {
        case Node.ELEMENT_NODE:
            let v = p, y = v.tagName.toLowerCase();
            if (vu.hasOwnProperty(y)) {
                Wl(i, FI, y, l, h), t.data[h] = y;
                let He = v.attributes;
                for (let ut = 0; ut < He.length; ut++) {
                    let Zt = He.item(ut), Up = Zt.name.toLowerCase();
                    !!Zt.value.match(Ws) ? sv.hasOwnProperty(Up) && (_d[Up] ? br(a, Zt.value, h, Zt.name, 0, da) : br(a, Zt.value, h, Zt.name, 0, null)) : YA(i, h, Zt);
                }
                let xe = { kind: 1, index: h, children: [] };
                e.push(xe), f = YI(xe.children, t, n, o, r, i, s, a, p, h, u, d + 1) | f, wg(s, h, d);
            }
            break;
        case Node.TEXT_NODE:
            let D = p.textContent || "", O = D.match(Ws);
            Wl(i, null, O ? "" : D, l, h), wg(s, h, d), O && (f = br(a, D, h, null, 0, null) | f), e.push({ kind: 0, index: h });
            break;
        case Node.COMMENT_NODE:
            let he = PA.exec(p.textContent || "");
            if (he) {
                let He = parseInt(he[1], 10), xe = u[He];
                Wl(i, jI, "", l, h), ZI(e, t, o, r, l, xe, h), zA(s, h, d);
            }
            break;
    }
    p = p.nextSibling;
} return f; }
function wg(e, t, n) { n === 0 && e.push(t); }
function zA(e, t, n) { n === 0 && (e.push(~t), e.push(t)); }
function QA(e, t, n) { e.push(QI(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2); }
function ZA(e, t, n) { e.push(t, 1, n << 2 | 3); }
function Wl(e, t, n, o, r) { t !== null && e.push(t), e.push(n, r, bS(0, o, r)); }
function YA(e, t, n) { e.push(t << 1 | 1, n.name, n.value); }
var _g = 0, KA = /\[(�.+?�?)\]/, JA = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g, XA = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g, eO = /{([A-Z0-9_]+)}/g, tO = /�I18N_EXP_(ICU(_\d+)?)�/g, nO = /\/\*/, oO = /\d+\:(\d+)/;
function rO(e, t = {}) { let n = e; if (KA.test(e)) {
    let o = {}, r = [_g];
    n = n.replace(JA, (i, s, a) => { let c = s || a, l = o[c] || []; if (l.length || (c.split("|").forEach(v => { let y = v.match(oO), D = y ? parseInt(y[1], 10) : _g, O = nO.test(v); l.push([D, O, v]); }), o[c] = l), !l.length)
        throw new Error(`i18n postprocess: unmatched placeholder - ${c}`); let u = r[r.length - 1], d = 0; for (let v = 0; v < l.length; v++)
        if (l[v][0] === u) {
            d = v;
            break;
        } let [f, p, h] = l[d]; return p ? r.pop() : u !== f && r.push(f), l.splice(d, 1), h; });
} return Object.keys(t).length && (n = n.replace(XA, (o, r, i, s, a, c) => t.hasOwnProperty(i) ? `${r}${t[i]}${c}` : o), n = n.replace(eO, (o, r) => t.hasOwnProperty(r) ? t[r] : o), n = n.replace(tO, (o, r) => { if (t.hasOwnProperty(r)) {
    let i = t[r];
    if (!i.length)
        throw new Error(`i18n postprocess: unmatched ICU - ${o} with key: ${r}`);
    return i.shift();
} return o; })), n; }
function Gf(e, t, n = -1) { let o = R(), r = g(), i = I + e, s = pe(o.consts, t), a = Bn(); if (o.firstCreatePass && HA(o, a === null ? 0 : a.index, r, i, s, n), o.type === 2) {
    let f = r[J];
    f[M] |= 32;
}
else
    r[M] |= 32; let c = o.data[i], l = a === r[se] ? null : a, u = Hv(o, l, r), d = a && a.type & 8 ? r[a.index] : null; HS(r, i, a, n), AA(r, c.create, u, d), vl(!0); }
function Wf() { vl(!1); }
function KI(e, t, n) { Gf(e, t, n), Wf(); }
function JI(e, t) { let n = R(), o = pe(n.consts, t); UA(n, e + I, o); }
function zf(e) { let t = g(); return SA(Z(t, ve(), e)), zf; }
function XI(e) { bA(R(), g(), e + I); }
function eD(e, t = {}) { return rO(e, t); }
function Qf(e, t, n) { let o = g(), r = R(), i = _(); return Kf(r, o, o[w], i, e, t, n), Qf; }
function Zf(e, t) { let n = _(), o = g(), r = R(), i = zi(r.data), s = Kv(i, n, o); return Kf(r, o, s, n, e, t), Zf; }
function Yf(e, t, n) { let o = g(), r = R(), i = _(); return (i.type & 3 || n) && $y(i, r, o, n, o[w], e, t, Dr(i, o, t)), Yf; }
function Kf(e, t, n, o, r, i, s) { let a = !0, c = null; if ((o.type & 3 || s) && (c ??= Dr(o, t, i), $y(o, e, t, s, n, r, i, c) && (a = !1)), a) {
    let l = o.outputs?.[r], u = o.hostDirectiveOutputs?.[r];
    if (u && u.length)
        for (let d = 0; d < u.length; d += 2) {
            let f = u[d], p = u[d + 1];
            c ??= Dr(o, t, i), Fs(o, t, f, p, r, c);
        }
    if (l && l.length)
        for (let d of l)
            c ??= Dr(o, t, i), Fs(o, t, d, r, r, c);
} }
function tD(e = 1) { return Mh(e); }
function iO(e, t) { let n = null, o = n_(e); for (let r = 0; r < t.length; r++) {
    let i = t[r];
    if (i === "*") {
        n = r;
        continue;
    }
    if (o === null ? Iv(e, i, !0) : i_(o, i))
        return r;
} return n; }
function nD(e) { let t = g()[J][se]; if (!t.projection) {
    let n = e ? e.length : 1, o = t.projection = or(n, null), r = o.slice(), i = t.child;
    for (; i !== null;) {
        if (i.type !== 128) {
            let s = e ? iO(i, e) : 0;
            s !== null && (r[s] ? r[s].projectionNext = i : o[s] = i, r[s] = i);
        }
        i = i.next;
    }
} }
function oD(e, t = 0, n, o, r, i) { let s = g(), a = R(), c = o ? e + 1 : null; c !== null && Dn(s, a, c, o, r, i, null, n); let l = Sn(a, I + e, 16, null, n || null); l.projection === null && (l.projection = t), pl(); let d = !s[ae] || dr(); s[J][se].projection[l.projection] === null && c !== null ? sO(s, a, c) : d && !Ro(l) && O_(a, s, l); }
function sO(e, t, n) { let o = I + n, r = t.data[o], i = e[o], s = jr(i, r.tView.ssrId), a = Po(e, r, void 0, { dehydratedView: s }); Lo(i, a, 0, En(r, s)); }
function rD(e, t, n, o) { oE(e, t, n, o); }
function iD(e, t, n) { nE(e, t, n); }
function sD(e) { let t = g(), n = R(), o = Qi(); fr(o + 1); let r = lf(n, o); if (e.dirty && fh(t) === ((r.metadata.flags & 2) === 2)) {
    if (r.matches === null)
        e.reset([]);
    else {
        let i = iE(t, o);
        e.reset(i, fm), e.notifyOnChanges();
    }
    return !0;
} return !1; }
function aD() { return cf(g(), Qi()); }
function cD(e, t, n, o, r) { sE(t, oE(e, n, o, r)); }
function lD(e, t, n, o) { sE(e, nE(t, n, o)); }
function uD(e = 1) { fr(Qi() + e); }
function dD(e) { let t = hl(); return jt(t, I + e); }
function ss(e, t) { return e << 17 | t << 2; }
function Cn(e) { return e >> 17 & 32767; }
function aO(e) { return (e & 2) == 2; }
function cO(e, t) { return e & 131071 | t << 17; }
function Ku(e) { return e | 2; }
function Io(e) { return (e & 131068) >> 2; }
function zl(e, t) { return e & -131069 | t << 2; }
function lO(e) { return (e & 1) === 1; }
function Ju(e) { return e | 1; }
function uO(e, t, n, o, r, i) { let s = i ? t.classBindings : t.styleBindings, a = Cn(s), c = Io(s); e[o] = n; let l = !1, u; if (Array.isArray(n)) {
    let d = n;
    u = d[1], (u === null || Ln(d, u) > 0) && (l = !0);
}
else
    u = n; if (r)
    if (c !== 0) {
        let f = Cn(e[a + 1]);
        e[o + 1] = ss(f, a), f !== 0 && (e[f + 1] = zl(e[f + 1], o)), e[a + 1] = cO(e[a + 1], o);
    }
    else
        e[o + 1] = ss(a, 0), a !== 0 && (e[a + 1] = zl(e[a + 1], o)), a = o;
else
    e[o + 1] = ss(c, 0), a === 0 ? a = o : e[c + 1] = zl(e[c + 1], o), c = o; l && (e[o + 1] = Ku(e[o + 1])), Sg(e, u, o, !0), Sg(e, u, o, !1), dO(t, u, e, o, i), s = ss(a, c), i ? t.classBindings = s : t.styleBindings = s; }
function dO(e, t, n, o, r) { let i = r ? e.residualClasses : e.residualStyles; i != null && typeof t == "string" && Ln(i, t) >= 0 && (n[o + 1] = Ju(n[o + 1])); }
function Sg(e, t, n, o) { let r = e[n + 1], i = t === null, s = o ? Cn(r) : Io(r), a = !1; for (; s !== 0 && (a === !1 || i);) {
    let c = e[s], l = e[s + 1];
    fO(c, t) && (a = !0, e[s + 1] = o ? Ju(l) : Ku(l)), s = o ? Cn(l) : Io(l);
} a && (e[n + 1] = o ? Ku(r) : Ju(r)); }
function fO(e, t) { return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? Ln(e, t) >= 0 : !1; }
var oe = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function fD(e) { return e.substring(oe.key, oe.keyEnd); }
function pO(e) { return e.substring(oe.value, oe.valueEnd); }
function hO(e) { return gD(e), pD(e, Do(e, 0, oe.textEnd)); }
function pD(e, t) { let n = oe.textEnd; return n === t ? -1 : (t = oe.keyEnd = mO(e, oe.key = t, n), Do(e, t, n)); }
function gO(e) { return gD(e), hD(e, Do(e, 0, oe.textEnd)); }
function hD(e, t) { let n = oe.textEnd, o = oe.key = Do(e, t, n); return n === o ? -1 : (o = oe.keyEnd = vO(e, o, n), o = bg(e, o, n, 58), o = oe.value = Do(e, o, n), o = oe.valueEnd = yO(e, o, n), bg(e, o, n, 59)); }
function gD(e) { oe.key = 0, oe.keyEnd = 0, oe.value = 0, oe.valueEnd = 0, oe.textEnd = e.length; }
function Do(e, t, n) { for (; t < n && e.charCodeAt(t) <= 32;)
    t++; return t; }
function mO(e, t, n) { for (; t < n && e.charCodeAt(t) > 32;)
    t++; return t; }
function vO(e, t, n) { let o; for (; t < n && ((o = e.charCodeAt(t)) === 45 || o === 95 || (o & -33) >= 65 && (o & -33) <= 90 || o >= 48 && o <= 57);)
    t++; return t; }
function bg(e, t, n, o) { return t = Do(e, t, n), t < n && t++, t; }
function yO(e, t, n) { let o = -1, r = -1, i = -1, s = t, a = s; for (; s < n;) {
    let c = e.charCodeAt(s++);
    if (c === 59)
        return a;
    c === 34 || c === 39 ? a = s = Rg(e, c, s, n) : t === s - 4 && i === 85 && r === 82 && o === 76 && c === 40 ? a = s = Rg(e, 41, s, n) : c > 32 && (a = s), i = r, r = o, o = c & -33;
} return a; }
function Rg(e, t, n, o) { let r = -1, i = n; for (; i < o;) {
    let s = e.charCodeAt(i++);
    if (s == t && r !== 92)
        return i;
    s == 92 && r === 92 ? r = 0 : r = s;
} throw new Error; }
function Jf(e, t, n) { return yD(e, t, n, !1), Jf; }
function Xf(e, t) { return yD(e, t, null, !0), Xf; }
function mD(e) { ED(TD, EO, e, !1); }
function EO(e, t) { for (let n = gO(t); n >= 0; n = hD(t, n))
    TD(e, fD(t), pO(t)); }
function vD(e) { ED(wO, IO, e, !0); }
function IO(e, t) { for (let n = hO(t); n >= 0; n = pD(t, n))
    rr(e, fD(t), !0); }
function yD(e, t, n, o) { let r = g(), i = R(), s = it(2); if (i.firstUpdatePass && DD(i, e, s, o), t !== B && Z(r, s, t)) {
    let a = i.data[le()];
    CD(i, a, r, r[w], e, r[s + 1] = SO(t, n), o, s);
} }
function ED(e, t, n, o) { let r = R(), i = it(2); r.firstUpdatePass && DD(r, null, i, o); let s = g(); if (n !== B && Z(s, i, n)) {
    let a = r.data[le()];
    if (MD(a, o) && !ID(r, i)) {
        let c = o ? a.classesWithoutHost : a.stylesWithoutHost;
        c !== null && (n = Ri(c, n || "")), Zu(r, a, s, n, o);
    }
    else
        _O(r, a, s, s[w], s[i + 1], s[i + 1] = NO(e, t, n), o, i);
} }
function ID(e, t) { return t >= e.expandoStartIndex; }
function DD(e, t, n, o) { let r = e.data; if (r[n + 1] === null) {
    let i = r[le()], s = ID(e, n);
    MD(i, o) && t === null && !s && (t = !1), t = DO(r, i, t, o), uO(r, i, t, n, s, o);
} }
function DO(e, t, n, o) { let r = zi(e), i = o ? t.residualClasses : t.residualStyles; if (r === null)
    (o ? t.classBindings : t.styleBindings) === 0 && (n = Ql(null, e, t, n, o), n = Gr(n, t.attrs, o), i = null);
else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== r)
        if (n = Ql(r, e, t, n, o), i === null) {
            let c = TO(e, t, o);
            c !== void 0 && Array.isArray(c) && (c = Ql(null, e, t, c[1], o), c = Gr(c, t.attrs, o), CO(e, t, o, c));
        }
        else
            i = MO(e, t, o);
} return i !== void 0 && (o ? t.residualClasses = i : t.residualStyles = i), n; }
function TO(e, t, n) { let o = n ? t.classBindings : t.styleBindings; if (Io(o) !== 0)
    return e[Cn(o)]; }
function CO(e, t, n, o) { let r = n ? t.classBindings : t.styleBindings; e[Cn(r)] = o; }
function MO(e, t, n) { let o, r = t.directiveEnd; for (let i = 1 + t.directiveStylingLast; i < r; i++) {
    let s = e[i].hostAttrs;
    o = Gr(o, s, n);
} return Gr(o, t.attrs, n); }
function Ql(e, t, n, o, r) { let i = null, s = n.directiveEnd, a = n.directiveStylingLast; for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], o = Gr(o, i.hostAttrs, r), i !== e);)
    a++; return e !== null && (n.directiveStylingLast = a), o; }
function Gr(e, t, n) { let o = n ? 1 : 2, r = -1; if (t !== null)
    for (let i = 0; i < t.length; i++) {
        let s = t[i];
        typeof s == "number" ? r = s : r === o && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), rr(e, s, n ? !0 : t[++i]));
    } return e === void 0 ? null : e; }
function NO(e, t, n) { if (n == null || n === "")
    return L; let o = [], r = St(n); if (Array.isArray(r))
    for (let i = 0; i < r.length; i++)
        e(o, r[i], !0);
else if (typeof r == "object")
    for (let i in r)
        r.hasOwnProperty(i) && e(o, i, r[i]);
else
    typeof r == "string" && t(o, r); return o; }
function TD(e, t, n) { rr(e, t, St(n)); }
function wO(e, t, n) { let o = String(t); o !== "" && !o.includes(" ") && rr(e, o, n); }
function _O(e, t, n, o, r, i, s, a) { r === B && (r = L); let c = 0, l = 0, u = 0 < r.length ? r[0] : null, d = 0 < i.length ? i[0] : null; for (; u !== null || d !== null;) {
    let f = c < r.length ? r[c + 1] : void 0, p = l < i.length ? i[l + 1] : void 0, h = null, v;
    u === d ? (c += 2, l += 2, f !== p && (h = d, v = p)) : d === null || u !== null && u < d ? (c += 2, h = u) : (l += 2, h = d, v = p), h !== null && CD(e, t, n, o, h, v, s, a), u = c < r.length ? r[c] : null, d = l < i.length ? i[l] : null;
} }
function CD(e, t, n, o, r, i, s, a) { if (!(t.type & 3))
    return; let c = e.data, l = c[a + 1], u = lO(l) ? Ag(c, t, n, r, Io(l), s) : void 0; if (!zs(u)) {
    zs(i) || aO(l) && (i = Ag(c, null, n, r, a, s));
    let d = cn(le(), n);
    k_(o, s, d, r, i);
} }
function Ag(e, t, n, o, r, i) { let s = t === null, a; for (; r > 0;) {
    let c = e[r], l = Array.isArray(c), u = l ? c[1] : c, d = u === null, f = n[r + 1];
    f === B && (f = d ? L : void 0);
    let p = d ? Pi(f, o) : u === o ? f : void 0;
    if (l && !zs(p) && (p = Pi(c, o)), zs(p) && (a = p, s))
        return a;
    let h = e[r + 1];
    r = s ? Cn(h) : Io(h);
} if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = Pi(c, o));
} return a; }
function zs(e) { return e !== void 0; }
function SO(e, t) { return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = Be(St(e)))), e; }
function MD(e, t) { return (e.flags & (t ? 8 : 16)) !== 0; }
function ND(e, t = "") { let n = g(), o = R(), r = e + I, i = o.firstCreatePass ? Sn(o, r, 1, t, null) : o.data[r], s = wD(o, n, i, t, e); n[r] = s, pr() && Wd(o, n, s, i), ot(i, !1); }
var wD = (e, t, n, o, r) => (ze(!0), Od(t[w], o));
function bO(e, t, n, o, r) { let i = !ua(t, n); if (ze(i), i)
    return Od(t[w], o); let s = t[ae]; return ai(s, e, t, n); }
function _D() { wD = bO; }
function SD(e, t) { let n = !1, o = rt(); for (let i = 1; i < t.length; i += 2)
    n = Z(e, o++, t[i]) || n; if (ml(o), !n)
    return B; let r = t[0]; for (let i = 1; i < t.length; i += 2)
    r += b(t[i]) + (i + 1 !== t.length ? t[i + 1] : ""); return r; }
function bD(e, t, n, o = "") { return Z(e, ve(), n) ? t + b(n) + o : B; }
function RD(e, t, n, o, r, i = "") { let s = rt(), a = In(e, s, n, r); return it(2), a ? t + b(n) + o + b(r) + i : B; }
function AD(e, t, n, o, r, i, s, a = "") { let c = rt(), l = La(e, c, n, r, s); return it(3), l ? t + b(n) + o + b(r) + i + b(s) + a : B; }
function OD(e, t, n, o, r, i, s, a, c, l = "") { let u = rt(), d = Ve(e, u, n, r, s, c); return it(4), d ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l : B; }
function xD(e, t, n, o, r, i, s, a, c, l, u, d = "") { let f = rt(), p = Ve(e, f, n, r, s, c); return p = Z(e, f + 4, u) || p, it(5), p ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l + b(u) + d : B; }
function kD(e, t, n, o, r, i, s, a, c, l, u, d, f, p = "") { let h = rt(), v = Ve(e, h, n, r, s, c); return v = In(e, h + 4, u, f) || v, it(6), v ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l + b(u) + d + b(f) + p : B; }
function PD(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, v = "") { let y = rt(), D = Ve(e, y, n, r, s, c); return D = La(e, y + 4, u, f, h) || D, it(7), D ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l + b(u) + d + b(f) + p + b(h) + v : B; }
function LD(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, v, y, D = "") { let O = rt(), he = Ve(e, O, n, r, s, c); return he = Ve(e, O + 4, u, f, h, y) || he, it(8), he ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l + b(u) + d + b(f) + p + b(h) + v + b(y) + D : B; }
function ep(e) { return Ja("", e), ep; }
function Ja(e, t, n) { let o = g(), r = bD(o, e, t, n); return r !== B && Ot(o, le(), r), Ja; }
function tp(e, t, n, o, r) { let i = g(), s = RD(i, e, t, n, o, r); return s !== B && Ot(i, le(), s), tp; }
function np(e, t, n, o, r, i, s) { let a = g(), c = AD(a, e, t, n, o, r, i, s); return c !== B && Ot(a, le(), c), np; }
function op(e, t, n, o, r, i, s, a, c) { let l = g(), u = OD(l, e, t, n, o, r, i, s, a, c); return u !== B && Ot(l, le(), u), op; }
function rp(e, t, n, o, r, i, s, a, c, l, u) { let d = g(), f = xD(d, e, t, n, o, r, i, s, a, c, l, u); return f !== B && Ot(d, le(), f), rp; }
function ip(e, t, n, o, r, i, s, a, c, l, u, d, f) { let p = g(), h = kD(p, e, t, n, o, r, i, s, a, c, l, u, d, f); return h !== B && Ot(p, le(), h), ip; }
function sp(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h) { let v = g(), y = PD(v, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); return y !== B && Ot(v, le(), y), sp; }
function ap(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, v, y) { let D = g(), O = LD(D, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, v, y); return O !== B && Ot(D, le(), O), ap; }
function cp(e) { let t = g(), n = SD(t, e); return n !== B && Ot(t, le(), n), cp; }
function Ot(e, t, n) { let o = cn(t, e); Dv(e[w], o, n); }
function lp(e, t, n) { _l(t) && (t = t()); let o = g(), r = ve(); if (Z(o, r, t)) {
    let i = R(), s = Le();
    Qd(s, o, e, t, o[w], n);
} return lp; }
function FD(e, t) { let n = _l(e); return n && e.set(t), n; }
function up(e, t) { let n = g(), o = R(), r = _(); return Kf(o, n, n[w], r, e, t), up; }
var jD = {};
function dp(e) { let t = R(), n = g(), o = e + I, r = Sn(t, o, 128, null, null); return ot(r, !1), lr(t, n, o, jD), dp; }
function VD(e) { ee("NgLet"); let t = R(), n = g(), o = le(); return lr(t, n, o, e), e; }
function HD(e) { let t = hl(), n = jt(t, I + e); if (n === jD)
    throw new T(314, !1); return n; }
function BD(e, t) { let n = R(), o = g(), r = o[w], i = "data-ng-source-location"; for (let [s, a, c, l] of t) {
    let u = mt(n, s + I), d = cn(s + I, o);
    if (!d.hasAttribute(i)) {
        let f = `${e}@o:${a},l:${c},c:${l}`;
        r.setAttribute(d, i, f);
    }
} }
function UD(e) { return Z(g(), ve(), e) ? b(e) : B; }
function $D(e, t, n = "") { return bD(g(), e, t, n); }
function qD(e, t, n, o, r = "") { return RD(g(), e, t, n, o, r); }
function GD(e, t, n, o, r, i, s = "") { return AD(g(), e, t, n, o, r, i, s); }
function WD(e, t, n, o, r, i, s, a, c = "") { return OD(g(), e, t, n, o, r, i, s, a, c); }
function zD(e, t, n, o, r, i, s, a, c, l, u = "") { return xD(g(), e, t, n, o, r, i, s, a, c, l, u); }
function QD(e, t, n, o, r, i, s, a, c, l, u, d, f = "") { return kD(g(), e, t, n, o, r, i, s, a, c, l, u, d, f); }
function ZD(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h = "") { return PD(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); }
function YD(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, v, y = "") { return LD(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, v, y); }
function KD(e) { return SD(g(), e); }
function RO(e, t, n) { let o = R(); if (o.firstCreatePass) {
    let r = Ne(e);
    Xu(n, o.data, o.blueprint, r, !0), Xu(t, o.data, o.blueprint, r, !1);
} }
function Xu(e, t, n, o, r) { if (e = x(e), Array.isArray(e))
    for (let i = 0; i < e.length; i++)
        Xu(e[i], t, n, o, r);
else {
    let i = R(), s = g(), a = _(), c = Jt(e) ? e : x(e.provide), l = zc(e), u = a.providerIndexes & 1048575, d = a.directiveStart, f = a.providerIndexes >> 20;
    if (Jt(e) || !e.multi) {
        let p = new mn(l, r, jo, null), h = Yl(c, t, r ? u : u + f, d);
        h === -1 ? (nu(Cs(a, s), i, c), Zl(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(p), s.push(p)) : (n[h] = p, s[h] = p);
    }
    else {
        let p = Yl(c, t, u + f, d), h = Yl(c, t, u, u + f), v = p >= 0 && n[p], y = h >= 0 && n[h];
        if (r && !y || !r && !v) {
            nu(Cs(a, s), i, c);
            let D = xO(r ? OO : AO, n.length, r, o, l, e);
            !r && y && (n[h].providerFactory = D), Zl(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(D), s.push(D);
        }
        else {
            let D = JD(n[r ? h : p], l, !r && o);
            Zl(i, e, p > -1 ? p : h, D);
        }
        !r && o && y && n[h].componentProviders++;
    }
} }
function Zl(e, t, n, o) { let r = Jt(t), i = lh(t); if (r || i) {
    let c = (i ? x(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
        let l = e.destroyHooks || (e.destroyHooks = []);
        if (!r && t.multi) {
            let u = l.indexOf(n);
            u === -1 ? l.push(n, [o, c]) : l[u + 1].push(o, c);
        }
        else
            l.push(n, c);
    }
} }
function JD(e, t, n) { return n && e.componentProviders++, e.multi.push(t) - 1; }
function Yl(e, t, n, o) { for (let r = n; r < o; r++)
    if (t[r] === e)
        return r; return -1; }
function AO(e, t, n, o, r) { return ed(this.multi, []); }
function OO(e, t, n, o, r) { let i = this.multi, s; if (this.providerFactory) {
    let a = this.providerFactory.componentProviders, c = Ar(o, o[m], this.providerFactory.index, r);
    s = c.slice(0, a), ed(i, s);
    for (let l = a; l < c.length; l++)
        s.push(c[l]);
}
else
    s = [], ed(i, s); return s; }
function ed(e, t) { for (let n = 0; n < e.length; n++) {
    let o = e[n];
    t.push(o());
} return t; }
function xO(e, t, n, o, r, i) { let s = new mn(e, n, jo, null); return s.multi = [], s.index = t, s.componentProviders = 0, JD(s, r, o && !n), s; }
function XD(e, t = []) { return n => { n.providersResolver = (o, r) => RO(o, r ? r(e) : e, t); }; }
function eT(e) { return t => { e.length < 1 || (t.getExternalStyles = n => e.map(r => r + "?ngcomp" + (n ? "=" + encodeURIComponent(n) : "") + "&e=" + t.encapsulation)); }; }
function tT(e, t, n) { let o = e.\u0275cmp; o.directiveDefs = Bs(t, vE), o.pipeDefs = Bs(n, $e); }
function nT(e, t) { return ct(() => { let n = Li(e); n.declarations = as(t.declarations || L), n.imports = as(t.imports || L), n.exports = as(t.exports || L), t.bootstrap && (n.bootstrap = as(t.bootstrap)), po.registerNgModule(e, t); }); }
function as(e) { if (typeof e == "function")
    return e; let t = Ue(e); return t.some(Ko) ? () => t.map(x).map(Og) : t.map(Og); }
function Og(e) { return of(e) ? e.ngModule : e; }
function oT(e, t, n) { let o = me() + e, r = g(); return r[o] === B ? lt(r, o, n ? t.call(n) : t()) : li(r, o); }
function rT(e, t, n, o) { return pT(g(), me(), e, t, n, o); }
function iT(e, t, n, o, r) { return hT(g(), me(), e, t, n, o, r); }
function sT(e, t, n, o, r, i) { return gT(g(), me(), e, t, n, o, r, i); }
function aT(e, t, n, o, r, i, s) { return mT(g(), me(), e, t, n, o, r, i, s); }
function cT(e, t, n, o, r, i, s, a) { let c = me() + e, l = g(), u = Ve(l, c, n, o, r, i); return Z(l, c + 4, s) || u ? lt(l, c + 5, a ? t.call(a, n, o, r, i, s) : t(n, o, r, i, s)) : li(l, c + 5); }
function lT(e, t, n, o, r, i, s, a, c) { let l = me() + e, u = g(), d = Ve(u, l, n, o, r, i); return In(u, l + 4, s, a) || d ? lt(u, l + 6, c ? t.call(c, n, o, r, i, s, a) : t(n, o, r, i, s, a)) : li(u, l + 6); }
function uT(e, t, n, o, r, i, s, a, c, l) { let u = me() + e, d = g(), f = Ve(d, u, n, o, r, i); return La(d, u + 4, s, a, c) || f ? lt(d, u + 7, l ? t.call(l, n, o, r, i, s, a, c) : t(n, o, r, i, s, a, c)) : li(d, u + 7); }
function dT(e, t, n, o, r, i, s, a, c, l, u) { let d = me() + e, f = g(), p = Ve(f, d, n, o, r, i); return Ve(f, d + 4, s, a, c, l) || p ? lt(f, d + 8, u ? t.call(u, n, o, r, i, s, a, c, l) : t(n, o, r, i, s, a, c, l)) : li(f, d + 8); }
function fT(e, t, n, o) { return vT(g(), me(), e, t, n, o); }
function mi(e, t) { let n = e[t]; return n === B ? void 0 : n; }
function pT(e, t, n, o, r, i) { let s = t + n; return Z(e, s, r) ? lt(e, s + 1, i ? o.call(i, r) : o(r)) : mi(e, s + 1); }
function hT(e, t, n, o, r, i, s) { let a = t + n; return In(e, a, r, i) ? lt(e, a + 2, s ? o.call(s, r, i) : o(r, i)) : mi(e, a + 2); }
function gT(e, t, n, o, r, i, s, a) { let c = t + n; return La(e, c, r, i, s) ? lt(e, c + 3, a ? o.call(a, r, i, s) : o(r, i, s)) : mi(e, c + 3); }
function mT(e, t, n, o, r, i, s, a, c) { let l = t + n; return Ve(e, l, r, i, s, a) ? lt(e, l + 4, c ? o.call(c, r, i, s, a) : o(r, i, s, a)) : mi(e, l + 4); }
function vT(e, t, n, o, r, i) { let s = t + n, a = !1; for (let c = 0; c < r.length; c++)
    Z(e, s++, r[c]) && (a = !0); return a ? lt(e, s, o.apply(i, r)) : mi(e, s); }
function yT(e, t) { let n = R(), o, r = e + I; n.firstCreatePass ? (o = kO(t, n.pipeRegistry), n.data[r] = o, o.onDestroy && (n.destroyHooks ??= []).push(r, o.onDestroy)) : o = n.data[r]; let i = o.factory || (o.factory = Pt(o.type, !0)), s, a = Ee(jo); try {
    let c = Ts(!1), l = i();
    return Ts(c), lr(n, g(), r, l), l;
}
finally {
    Ee(a);
} }
function kO(e, t) { if (t)
    for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (e === o.name)
            return o;
    } }
function ET(e, t, n) { let o = e + I, r = g(), i = jt(r, o); return vi(r, o) ? pT(r, me(), t, i.transform, n, i) : i.transform(n); }
function IT(e, t, n, o) { let r = e + I, i = g(), s = jt(i, r); return vi(i, r) ? hT(i, me(), t, s.transform, n, o, s) : s.transform(n, o); }
function DT(e, t, n, o, r) { let i = e + I, s = g(), a = jt(s, i); return vi(s, i) ? gT(s, me(), t, a.transform, n, o, r, a) : a.transform(n, o, r); }
function TT(e, t, n, o, r, i) { let s = e + I, a = g(), c = jt(a, s); return vi(a, s) ? mT(a, me(), t, c.transform, n, o, r, i, c) : c.transform(n, o, r, i); }
function CT(e, t, n) { let o = e + I, r = g(), i = jt(r, o); return vi(r, o) ? vT(r, me(), t, i.transform, n, i) : i.transform.apply(i, n); }
function vi(e, t) { return e[m].data[t].pure; }
function MT(e, t) { return Sa(e, t); }
function NT(e, t) { return () => { try {
    return po.getComponentDependencies(e, t).dependencies;
}
catch (n) {
    throw console.error(`Computing dependencies in local compilation mode for the component "${e.name}" failed with the exception:`, n), n;
} }; }
function wT(e, t) { let n = W(e); n !== null && (n.debugInfo = t); }
function _T(e, t, n) { let o = `./@ng/component?c=${e}&t=${encodeURIComponent(t)}`; return new URL(o, n).href; }
function ST(e, t, n, o, r = null, i = null) { let s = W(e); t.apply(null, [e, n, ...o]); let { newDef: a, oldDef: c } = PO(s, W(e)); if (e[en] = a, c.tView) {
    let l = MN().values();
    for (let u of l)
        tt(u) && u[z] === null && vs(r, i, a, c, u);
} }
function PO(e, t) { let n = G({}, e); return { newDef: Object.assign(e, t, { directiveDefs: n.directiveDefs, pipeDefs: n.pipeDefs, setInput: n.setInput, type: n.type }), oldDef: n }; }
function vs(e, t, n, o, r) { let i = r[m]; if (i === o.tView) {
    FO(e, t, n, o, r);
    return;
} for (let s = I; s < i.bindingStartIndex; s++) {
    let a = r[s];
    if (Y(a)) {
        X(a[U]) && vs(e, t, n, o, a[U]);
        for (let c = $; c < a.length; c++)
            vs(e, t, n, o, a[c]);
    }
    else
        X(a) && vs(e, t, n, o, a);
} }
function LO(e, t) { e.componentReplaced?.(t.id); }
function FO(e, t, n, o, r) { let i = r[H], s = r[U], a = r[z], c = r[se], l = r[k].get(q, null), u = () => { if (o.encapsulation === Tt.ShadowDom) {
    let h = s.cloneNode(!1);
    s.replaceWith(h), s = h;
} let d = Nv(n), f = pa(a, d, i, Pd(n), s, c, null, null, null, null, null); jO(a, r, f, c.index), ii(r[m], r); let p = r[Ge].rendererFactory; LO(p, o), f[w] = p.createRenderer(s, n), jv(r[m], r), VO(c), wa(d, f, i), oy(d, f, d.template, i); }; l === null ? xg(e, t, u) : l.run(() => xg(e, t, u)); }
function xg(e, t, n) {
    try {
        n();
    }
    catch (o) {
        let r = o;
        if (t !== null && r.message) {
            let i = r.message + (r.stack ? `
` + r.stack : "");
            e?.hot?.send?.("angular:invalidate", { id: t, message: i, error: !0 });
        }
        throw o;
    }
}
function jO(e, t, n, o) { for (let r = I; r < e[m].bindingStartIndex; r++) {
    let i = e[r];
    if ((X(i) || Y(i)) && i[fe] === t) {
        i[fe] = n;
        break;
    }
} e[Ft] === t && (e[Ft] = n), e[sr] === t && (e[sr] = n), n[fe] = t[fe], t[fe] = null, e[o] = n; }
function VO(e) { if (e.projection !== null) {
    for (let t of e.projection)
        Zs(t) && (t.projectionNext = null, t.flags &= -3);
    e.projection = null;
} }
var ye = { \u0275\u0275animateEnter: Cr, \u0275\u0275animateEnterListener: Mr, \u0275\u0275animateLeave: Nr, \u0275\u0275animateLeaveListener: $s, \u0275\u0275attribute: Of, \u0275\u0275defineComponent: mE, \u0275\u0275defineDirective: yE, \u0275\u0275defineInjectable: j, \u0275\u0275defineInjector: Jo, \u0275\u0275defineNgModule: vf, \u0275\u0275definePipe: EE, \u0275\u0275directiveInject: jo, \u0275\u0275getInheritedFactory: cm, \u0275\u0275inject: de, \u0275\u0275injectAttribute: Ys, \u0275\u0275invalidFactory: Fy, \u0275\u0275invalidFactoryDep: xi, \u0275\u0275templateRefExtractor: MT, \u0275\u0275resetView: ul, \u0275\u0275HostDirectivesFeature: ME, \u0275\u0275NgOnChangesFeature: Wg, \u0275\u0275ProvidersFeature: XD, \u0275\u0275CopyDefinitionFeature: CE, \u0275\u0275InheritDefinitionFeature: yf, \u0275\u0275ExternalStylesFeature: eT, \u0275\u0275nextContext: tD, \u0275\u0275namespaceHTML: Tl, \u0275\u0275namespaceMathML: Dl, \u0275\u0275namespaceSVG: Il, \u0275\u0275enableBindings: sl, \u0275\u0275disableBindings: al, \u0275\u0275elementStart: Wa, \u0275\u0275elementEnd: za, \u0275\u0275element: Pf, \u0275\u0275elementContainerStart: Ya, \u0275\u0275elementContainerEnd: hi, \u0275\u0275domElement: Lf, \u0275\u0275domElementStart: Qa, \u0275\u0275domElementEnd: Za, \u0275\u0275domElementContainer: Hf, \u0275\u0275domElementContainerStart: Ka, \u0275\u0275domElementContainerEnd: Vf, \u0275\u0275domTemplate: If, \u0275\u0275domListener: Yf, \u0275\u0275elementContainer: jf, \u0275\u0275pureFunction0: oT, \u0275\u0275pureFunction1: rT, \u0275\u0275pureFunction2: iT, \u0275\u0275pureFunction3: sT, \u0275\u0275pureFunction4: aT, \u0275\u0275pureFunction5: cT, \u0275\u0275pureFunction6: lT, \u0275\u0275pureFunction7: uT, \u0275\u0275pureFunction8: dT, \u0275\u0275pureFunctionV: fT, \u0275\u0275getCurrentView: PI, \u0275\u0275restoreView: ll, \u0275\u0275listener: Qf, \u0275\u0275projection: oD, \u0275\u0275syntheticHostProperty: $f, \u0275\u0275syntheticHostListener: Zf, \u0275\u0275pipeBind1: ET, \u0275\u0275pipeBind2: IT, \u0275\u0275pipeBind3: DT, \u0275\u0275pipeBind4: TT, \u0275\u0275pipeBindV: CT, \u0275\u0275projectionDef: nD, \u0275\u0275domProperty: Uf, \u0275\u0275ariaProperty: Af, \u0275\u0275property: kf, \u0275\u0275pipe: yT, \u0275\u0275queryRefresh: sD, \u0275\u0275queryAdvance: uD, \u0275\u0275viewQuery: iD, \u0275\u0275viewQuerySignal: lD, \u0275\u0275loadQuery: aD, \u0275\u0275contentQuery: rD, \u0275\u0275contentQuerySignal: cD, \u0275\u0275reference: dD, \u0275\u0275classMap: vD, \u0275\u0275styleMap: mD, \u0275\u0275styleProp: Jf, \u0275\u0275classProp: Xf, \u0275\u0275advance: wv, \u0275\u0275template: Ef, \u0275\u0275conditional: SI, \u0275\u0275conditionalCreate: _I, \u0275\u0275conditionalBranchCreate: Ga, \u0275\u0275defer: JE, \u0275\u0275deferWhen: XE, \u0275\u0275deferOnIdle: oI, \u0275\u0275deferOnImmediate: sI, \u0275\u0275deferOnTimer: lI, \u0275\u0275deferOnHover: fI, \u0275\u0275deferOnInteraction: gI, \u0275\u0275deferOnViewport: yI, \u0275\u0275deferPrefetchWhen: eI, \u0275\u0275deferPrefetchOnIdle: rI, \u0275\u0275deferPrefetchOnImmediate: aI, \u0275\u0275deferPrefetchOnTimer: uI, \u0275\u0275deferPrefetchOnHover: pI, \u0275\u0275deferPrefetchOnInteraction: mI, \u0275\u0275deferPrefetchOnViewport: EI, \u0275\u0275deferHydrateWhen: tI, \u0275\u0275deferHydrateNever: nI, \u0275\u0275deferHydrateOnIdle: iI, \u0275\u0275deferHydrateOnImmediate: cI, \u0275\u0275deferHydrateOnTimer: dI, \u0275\u0275deferHydrateOnHover: hI, \u0275\u0275deferHydrateOnInteraction: vI, \u0275\u0275deferHydrateOnViewport: II, \u0275\u0275deferEnableTimerScheduling: VE, \u0275\u0275repeater: OI, \u0275\u0275repeaterCreate: AI, \u0275\u0275repeaterTrackByIndex: bI, \u0275\u0275repeaterTrackByIdentity: RI, \u0275\u0275componentInstance: wI, \u0275\u0275text: ND, \u0275\u0275textInterpolate: ep, \u0275\u0275textInterpolate1: Ja, \u0275\u0275textInterpolate2: tp, \u0275\u0275textInterpolate3: np, \u0275\u0275textInterpolate4: op, \u0275\u0275textInterpolate5: rp, \u0275\u0275textInterpolate6: ip, \u0275\u0275textInterpolate7: sp, \u0275\u0275textInterpolate8: ap, \u0275\u0275textInterpolateV: cp, \u0275\u0275i18n: KI, \u0275\u0275i18nAttributes: JI, \u0275\u0275i18nExp: zf, \u0275\u0275i18nStart: Gf, \u0275\u0275i18nEnd: Wf, \u0275\u0275i18nApply: XI, \u0275\u0275i18nPostprocess: eD, \u0275\u0275resolveWindow: vv, \u0275\u0275resolveDocument: yv, \u0275\u0275resolveBody: Rd, \u0275\u0275setComponentScope: tT, \u0275\u0275setNgModuleScope: nT, \u0275\u0275registerNgModuleType: hf, \u0275\u0275getComponentDepsFactory: NT, \u0275setClassDebugInfo: wT, \u0275\u0275declareLet: dp, \u0275\u0275storeLet: VD, \u0275\u0275readContextLet: HD, \u0275\u0275attachSourceLocations: BD, \u0275\u0275interpolate: UD, \u0275\u0275interpolate1: $D, \u0275\u0275interpolate2: qD, \u0275\u0275interpolate3: GD, \u0275\u0275interpolate4: WD, \u0275\u0275interpolate5: zD, \u0275\u0275interpolate6: QD, \u0275\u0275interpolate7: ZD, \u0275\u0275interpolate8: YD, \u0275\u0275interpolateV: KD, \u0275\u0275sanitizeHtml: lv, \u0275\u0275sanitizeStyle: uv, \u0275\u0275sanitizeResourceUrl: bd, \u0275\u0275sanitizeScript: dv, \u0275\u0275sanitizeUrl: Sd, \u0275\u0275sanitizeUrlOrResourceUrl: hv, \u0275\u0275trustConstantHtml: fv, \u0275\u0275trustConstantResourceUrl: pv, \u0275\u0275validateIframeAttribute: fE, forwardRef: Yo, resolveForwardRef: x, \u0275\u0275twoWayProperty: lp, \u0275\u0275twoWayBindingSet: FD, \u0275\u0275twoWayListener: up, \u0275\u0275replaceMetadata: ST, \u0275\u0275getReplaceMetadataURL: _T }, eo = null;
function bT(e) { eo !== null && (e.defaultEncapsulation !== eo.defaultEncapsulation || e.preserveWhitespaces !== eo.preserveWhitespaces) || (eo = e); }
function HO() { return eo; }
function BO() { eo = null; }
var Rr = [];
function UO(e, t) { Rr.push({ moduleType: e, ngModule: t }); }
var Kl = !1;
function RT() { if (!Kl) {
    Kl = !0;
    try {
        for (let e = Rr.length - 1; e >= 0; e--) {
            let { moduleType: t, ngModule: n } = Rr[e];
            n.declarations && n.declarations.every(AT) && (Rr.splice(e, 1), zO(t, n));
        }
    }
    finally {
        Kl = !1;
    }
} }
function AT(e) { return Array.isArray(e) ? e.every(AT) : !!x(e); }
function OT(e, t = {}) { xT(e, t), t.id !== void 0 && hf(e, t.id), UO(e, t); }
function xT(e, t, n = !1) { let o = Ue(t.declarations || L), r = null; Object.defineProperty(e, Ai, { configurable: !0, get: () => (r === null && (r = ne({ usage: 0, kind: "NgModule", type: e }).compileNgModule(ye, `ng:///${e.name}/\u0275mod.js`, { type: e, bootstrap: Ue(t.bootstrap || L).map(x), declarations: o.map(x), imports: Ue(t.imports || L).map(x).map(kg), exports: Ue(t.exports || L).map(x).map(kg), schemas: t.schemas ? Ue(t.schemas) : null, id: t.id || null }), r.schemas || (r.schemas = [])), r) }); let i = null; Object.defineProperty(e, Je, { get: () => { if (i === null) {
        let a = ne({ usage: 0, kind: "NgModule", type: e });
        i = a.compileFactory(ye, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, deps: Ks(e), target: a.FactoryTarget.NgModule, typeArgumentCount: 0 });
    } return i; }, configurable: !1 }); let s = null; Object.defineProperty(e, Wo, { get: () => { if (s === null) {
        let a = { name: e.name, type: e, providers: t.providers || L, imports: [(t.imports || L).map(x), (t.exports || L).map(x)] };
        s = ne({ usage: 0, kind: "NgModule", type: e }).compileInjector(ye, `ng:///${e.name}/\u0275inj.js`, a);
    } return s; }, configurable: !1 }); }
function $O(e, t) { let n = `Unexpected "${be(e)}" found in the "declarations" array of the`, o = `"${be(e)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`; return `${n} ${t}, ${o}`; }
var qO = new WeakMap, GO = new WeakMap;
function WO() { qO = new WeakMap, GO = new WeakMap, Rr.length = 0, tR.clear(); }
function zO(e, t) { let n = Ue(t.declarations || L), o = pp(e); n.forEach(r => { if (r = x(r), r.hasOwnProperty(en)) {
    let s = W(r);
    fp(s, o);
}
else
    !r.hasOwnProperty(er) && !r.hasOwnProperty(tr) && (r.ngSelectorScope = e); }); }
function fp(e, t) { e.directiveDefs = () => Array.from(t.compilation.directives).map(n => n.hasOwnProperty(en) ? W(n) : Re(n)).filter(n => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map(n => $e(n)), e.schemas = t.schemas, e.tView = null; }
function pp(e) { if (fn(e)) {
    let t = po.getNgModuleScope(e), n = Li(e);
    return G({ schemas: n.schemas || null }, t);
}
else if (ir(e)) {
    if ((W(e) || Re(e)) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set([e]), pipes: new Set } };
    if ($e(e) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set, pipes: new Set([e]) } };
} throw new Error(`${e.name} does not have a module def (\u0275mod property)`); }
function kg(e) { return of(e) ? e.ngModule : e; }
var Jl = 0;
function kT(e, t) {
    let n = null;
    qb(e, t), LT(e, t), Object.defineProperty(e, en, { get: () => {
            if (n === null) {
                let o = ne({ usage: 0, kind: "component", type: e });
                if (cE(t)) {
                    let u = [`Component '${e.name}' is not resolved:`];
                    throw t.templateUrl && u.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && u.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), t.styleUrl && u.push(` - styleUrl: ${t.styleUrl}`), u.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(u.join(`
`));
                }
                let r = HO(), i = t.preserveWhitespaces;
                i === void 0 && (r !== null && r.preserveWhitespaces !== void 0 ? i = r.preserveWhitespaces : i = !1);
                let s = t.encapsulation;
                s === void 0 && (r !== null && r.defaultEncapsulation !== void 0 ? s = r.defaultEncapsulation : s = Tt.Emulated);
                let a = t.templateUrl || `ng:///${e.name}/template.html`, c = FT(e, t), l = Te(G({}, c), { typeSourceSpan: o.createParseSourceSpan("Component", e.name, a), template: t.template || "", preserveWhitespaces: i, styles: typeof t.styles == "string" ? [t.styles] : t.styles || L, animations: t.animations, declarations: [], changeDetection: t.changeDetection, encapsulation: s, interpolation: t.interpolation, viewProviders: t.viewProviders || null, hasDirectiveDependencies: !c.isStandalone || t.imports != null && t.imports.length > 0 });
                Jl++;
                try {
                    if (l.usesInheritance && jT(e), n = o.compileComponent(ye, a, l), l.isStandalone) {
                        let u = Ue(t.imports || L), { directiveDefs: d, pipeDefs: f } = QO(e, u);
                        n.directiveDefs = d, n.pipeDefs = f, n.dependencies = () => u.map(x);
                    }
                }
                finally {
                    Jl--;
                }
                if (Jl === 0 && RT(), ZO(e)) {
                    let u = pp(e.ngSelectorScope);
                    fp(n, u);
                }
                if (t.schemas)
                    if (l.isStandalone)
                        n.schemas = t.schemas;
                    else
                        throw new Error(`The 'schemas' was specified for the ${be(e)} but is only valid on a component that is standalone.`);
                else
                    l.isStandalone && (n.schemas = []);
            }
            return n;
        }, set: o => { n = o; }, configurable: !1 });
}
function QO(e, t) { return { directiveDefs: () => Ir(e) ? [...po.getStandaloneComponentScope(e, t).compilation.directives].map(i => W(i) || Re(i)).filter(i => i !== null) : [], pipeDefs: () => Ir(e) ? [...po.getStandaloneComponentScope(e, t).compilation.pipes].map(i => $e(i)).filter(i => i !== null) : [] }; }
function ZO(e) { return e.ngSelectorScope !== void 0; }
function hp(e, t) { let n = null; LT(e, t || {}), Object.defineProperty(e, er, { get: () => { if (n === null) {
        let o = PT(e, t || {});
        n = ne({ usage: 0, kind: "directive", type: e }).compileDirective(ye, o.sourceMapUrl, o.metadata);
    } return n; }, configurable: !1 }); }
function PT(e, t) { let n = e && e.name, o = `ng:///${n}/\u0275dir.js`, r = ne({ usage: 0, kind: "directive", type: e }), i = FT(e, t); return i.typeSourceSpan = r.createParseSourceSpan("Directive", n, o), i.usesInheritance && jT(e), { metadata: i, sourceMapUrl: o }; }
function LT(e, t) { let n = null; Object.defineProperty(e, Je, { get: () => { if (n === null) {
        let o = PT(e, t), r = ne({ usage: 0, kind: "directive", type: e });
        n = r.compileFactory(ye, `ng:///${e.name}/\u0275fac.js`, { name: o.metadata.name, type: o.metadata.type, typeArgumentCount: 0, deps: Ks(e), target: r.FactoryTarget.Directive });
    } return n; }, configurable: !1 }); }
function YO(e) { return Object.getPrototypeOf(e.prototype) === Object.prototype; }
function FT(e, t) { let n = ad(), o = n.ownPropMetadata(e); return { name: e.name, type: e, selector: t.selector !== void 0 ? t.selector : null, host: t.host || ke, propMetadata: o, inputs: t.inputs || L, outputs: t.outputs || L, queries: Pg(e, o, VT), lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") }, typeSourceSpan: null, usesInheritance: !YO(e), exportAs: XO(t.exportAs), providers: t.providers || null, viewQueries: Pg(e, o, HT), isStandalone: t.standalone === void 0 ? !0 : !!t.standalone, isSignal: !!t.signals, hostDirectives: t.hostDirectives?.map(r => typeof r == "function" ? { directive: r } : r) || null }; }
function jT(e) { let t = Object.prototype, n = Object.getPrototypeOf(e.prototype).constructor; for (; n && n !== t;)
    !Re(n) && !W(n) && tx(n) && hp(n, null), n = Object.getPrototypeOf(n); }
function KO(e) { return typeof e == "string" ? UT(e) : x(e); }
function JO(e, t) { return { propertyName: e, predicate: KO(t.selector), descendants: t.descendants, first: t.first, read: t.read ? t.read : null, static: !!t.static, emitDistinctChangesOnly: !!t.emitDistinctChangesOnly, isSignal: !!t.isSignal }; }
function Pg(e, t, n) { let o = []; for (let r in t)
    if (t.hasOwnProperty(r)) {
        let i = t[r];
        i.forEach(s => { if (n(s)) {
            if (!s.selector)
                throw new Error(`Can't construct a query for the property "${r}" of "${be(e)}" since the query selector wasn't defined.`);
            if (i.some(BT))
                throw new Error("Cannot combine @Input decorators with query decorators");
            o.push(JO(r, s));
        } });
    } return o; }
function XO(e) { return e === void 0 ? null : UT(e); }
function VT(e) { let t = e.ngMetadataName; return t === "ContentChild" || t === "ContentChildren"; }
function HT(e) { let t = e.ngMetadataName; return t === "ViewChild" || t === "ViewChildren"; }
function BT(e) { return e.ngMetadataName === "Input"; }
function UT(e) { return e.split(",").map(t => t.trim()); }
var ex = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];
function tx(e) { let t = ad(); if (ex.some(o => t.hasLifecycleHook(e, o)))
    return !0; let n = t.propMetadata(e); for (let o in n) {
    let r = n[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i], a = s.ngMetadataName;
        if (BT(s) || VT(s) || HT(s) || a === "Output" || a === "HostBinding" || a === "HostListener")
            return !0;
    }
} return !1; }
function $T(e, t) { let n = null, o = null; Object.defineProperty(e, Je, { get: () => { if (o === null) {
        let r = Lg(e, t), i = ne({ usage: 0, kind: "pipe", type: r.type });
        o = i.compileFactory(ye, `ng:///${r.name}/\u0275fac.js`, { name: r.name, type: r.type, typeArgumentCount: 0, deps: Ks(e), target: i.FactoryTarget.Pipe });
    } return o; }, configurable: !1 }), Object.defineProperty(e, tr, { get: () => { if (n === null) {
        let r = Lg(e, t);
        n = ne({ usage: 0, kind: "pipe", type: r.type }).compilePipe(ye, `ng:///${r.name}/\u0275pipe.js`, r);
    } return n; }, configurable: !1 }); }
function Lg(e, t) { return { type: e, name: e.name, pipeName: t.name, pure: t.pure !== void 0 ? t.pure : !0, isStandalone: t.standalone === void 0 ? !0 : !!t.standalone }; }
var qT = zr("Directive", (e = {}) => e, void 0, void 0, (e, t) => hp(e, t)), nx = zr("Component", (e = {}) => G({ changeDetection: Js.Default }, e), qT, void 0, (e, t) => kT(e, t)), ox = zr("Pipe", e => G({ pure: !0 }, e), void 0, void 0, (e, t) => $T(e, t)), rx = Mt("Input", e => e ? typeof e == "string" ? { alias: e } : e : {}), ix = Mt("Output", e => ({ alias: e })), sx = Mt("HostBinding", e => ({ hostPropertyName: e })), ax = Mt("HostListener", (e, t) => ({ eventName: e, args: t })), cx = zr("NgModule", e => e, void 0, void 0, (e, t) => OT(e, t)), Qs = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) { this.ngModuleFactory = t, this.componentFactories = n; }
}, lx = (() => { class e {
    compileModuleSync(n) { return new vo(n); }
    compileModuleAsync(n) { return Promise.resolve(this.compileModuleSync(n)); }
    compileModuleAndAllComponentsSync(n) { let o = this.compileModuleSync(n), r = nn(n), i = Jn(r.declarations).reduce((s, a) => { let c = W(a); return c && s.push(new Wt(c)), s; }, []); return new Qs(o, i); }
    compileModuleAndAllComponentsAsync(n) { return Promise.resolve(this.compileModuleAndAllComponentsSync(n)); }
    clearCache() { }
    clearCacheFor(n) { }
    getModuleId(n) { }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), GT = new C(""), td = class {
}, ux = (() => { class e {
    zone = E(q);
    changeDetectionScheduler = E(Ce);
    applicationRef = E(Ze);
    applicationErrorHandler = E(st);
    _onMicrotaskEmptySubscription;
    initialize() { this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({ next: () => { this.changeDetectionScheduler.runningTick || this.zone.run(() => { try {
            this.applicationRef.dirtyFlags |= 1, this.applicationRef._tick();
        }
        catch (n) {
            this.applicationErrorHandler(n);
        } }); } })); }
    ngOnDestroy() { this._onMicrotaskEmptySubscription?.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), WT = new C("", { factory: () => !1 });
function Xa({ ngZoneFactory: e, ignoreChangesOutsideZone: t, scheduleInRootZone: n }) { return e ??= () => new q(Te(G({}, ec()), { scheduleInRootZone: n })), [{ provide: q, useFactory: e }, { provide: Pe, multi: !0, useFactory: () => { let o = E(ux, { optional: !0 }); return () => o.initialize(); } }, { provide: Pe, multi: !0, useFactory: () => { let o = E(fx); return () => { o.initialize(); }; } }, t === !0 ? { provide: Sl, useValue: !0 } : [], { provide: Ki, useValue: n ?? Av }, { provide: st, useFactory: () => { let o = E(q), r = E(_e), i; return s => { o.runOutsideAngular(() => { r.destroyed && !i ? setTimeout(() => { throw s; }) : (i ??= r.get(Xe), i.handleError(s)); }); }; } }]; }
function dx(e) { let t = e?.ignoreChangesOutsideZone, n = e?.scheduleInRootZone, o = Xa({ ngZoneFactory: () => { let r = ec(e); return r.scheduleInRootZone = n, r.shouldCoalesceEventChangeDetection && ee("NgZone_CoalesceEvent"), new q(r); }, ignoreChangesOutsideZone: t, scheduleInRootZone: n }); return qe([{ provide: WT, useValue: !0 }, { provide: qn, useValue: !1 }, o]); }
function ec(e) { return { enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1, shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1 }; }
var fx = (() => { class e {
    subscription = new rd;
    initialized = !1;
    zone = E(q);
    pendingTasks = E(vt);
    initialize() { if (this.initialized)
        return; this.initialized = !0; let n = null; !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => { this.subscription.add(this.zone.onStable.subscribe(() => { q.assertNotInAngularZone(), queueMicrotask(() => { n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null); }); })); }), this.subscription.add(this.zone.onUnstable.subscribe(() => { q.assertInAngularZone(), n ??= this.pendingTasks.add(); })); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
var tc = (() => { class e {
    applicationErrorHandler = E(st);
    appRef = E(Ze);
    taskService = E(vt);
    ngZone = E(q);
    zonelessEnabled = E(qn);
    tracing = E(xo, { optional: !0 });
    disableScheduling = E(Sl, { optional: !0 }) ?? !1;
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new rd;
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(As) : null;
    scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (E(Ki, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() { this.subscriptions.add(this.appRef.afterTick.subscribe(() => { this.runningTick || this.cleanup(); })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => { this.runningTick || this.cleanup(); })), this.disableScheduling ||= !this.zonelessEnabled && (this.ngZone instanceof uo || !this.zoneIsDefined); }
    notify(n) { if (!this.zonelessEnabled && n === 5)
        return; let o = !1; switch (n) {
        case 0: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
            this.appRef.dirtyFlags |= 4;
            break;
        }
        case 6: {
            this.appRef.dirtyFlags |= 2, o = !0;
            break;
        }
        case 12: {
            this.appRef.dirtyFlags |= 16, o = !0;
            break;
        }
        case 13: {
            this.appRef.dirtyFlags |= 2, o = !0;
            break;
        }
        case 11: {
            o = !0;
            break;
        }
        case 9:
        case 8:
        case 7:
        case 10:
        default: this.appRef.dirtyFlags |= 8;
    } if (this.appRef.tracingSnapshot = this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null, !this.shouldScheduleTick(o))
        return; let r = this.useMicrotaskScheduler ? Yh : Ov; this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => r(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => r(() => this.tick())); }
    shouldScheduleTick(n) { return !(this.disableScheduling && !n || this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(As + this.angularZoneId)); }
    tick() { if (this.runningTick || this.appRef.destroyed)
        return; if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
    } !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1); let n = this.taskService.add(); try {
        this.ngZone.run(() => { this.runningTick = !0, this.appRef._tick(); }, void 0, this.schedulerTickApplyArgs);
    }
    catch (o) {
        this.taskService.remove(n), this.applicationErrorHandler(o);
    }
    finally {
        this.cleanup();
    } this.useMicrotaskScheduler = !0, Yh(() => { this.useMicrotaskScheduler = !1, this.taskService.remove(n); }); }
    ngOnDestroy() { this.subscriptions.unsubscribe(), this.cleanup(); }
    cleanup() { if (this.runningTick = !1, this.cancelScheduledCallback?.(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
        let n = this.pendingRenderTaskId;
        this.pendingRenderTaskId = null, this.taskService.remove(n);
    } }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function px() { return ee("NgZoneless"), qe([{ provide: Ce, useExisting: tc }, { provide: q, useClass: uo }, { provide: qn, useValue: !0 }, { provide: Ki, useValue: !1 }, []]); }
function hx() { return typeof $localize < "u" && $localize.locale || gi; }
var gp = new C("", { providedIn: "root", factory: () => E(gp, { optional: !0, skipSelf: !0 }) || hx() }), gx = new C("", { providedIn: "root", factory: () => wA }), mx = new C(""), vx = new C(""), zT = (function (e) { return e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore", e; })(zT || {}), nd = class {
    name;
    callback;
    constructor(t, n) { this.name = t, this.callback = n; }
};
function yx(e) { return e.map(t => t.nativeElement); }
var Wr = class {
    nativeNode;
    constructor(t) { this.nativeNode = t; }
    get parent() { let t = this.nativeNode.parentNode; return t ? new Mn(t) : null; }
    get injector() { return xN(this.nativeNode); }
    get componentInstance() { let t = this.nativeNode; return t && (Vh(t) || ON(t)); }
    get context() { return Vh(this.nativeNode) || AN(this.nativeNode); }
    get listeners() { return jN(this.nativeNode).filter(t => t.type === "dom"); }
    get references() { return LN(this.nativeNode); }
    get providerTokens() { return kN(this.nativeNode); }
}, Mn = class extends Wr {
    constructor(t) { super(t); }
    get nativeElement() { return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null; }
    get name() { let t = we(this.nativeNode), n = t ? t.lView : null; return n !== null ? n[m].data[t.nodeIndex].value : this.nativeNode.nodeName; }
    get properties() { let t = we(this.nativeNode), n = t ? t.lView : null; if (n === null)
        return {}; let o = n[m].data, r = o[t.nodeIndex], i = {}; return Ex(this.nativeElement, i), Dx(i, r, n, o), i; }
    get attributes() { let t = {}, n = this.nativeElement; if (!n)
        return t; let o = we(n), r = o ? o.lView : null; if (r === null)
        return {}; let i = r[m].data[o.nodeIndex].attrs, s = []; if (i) {
        let a = 0;
        for (; a < i.length;) {
            let c = i[a];
            if (typeof c != "string")
                break;
            let l = i[a + 1];
            t[c] = l, s.push(c.toLowerCase()), a += 2;
        }
    } for (let a of n.attributes)
        s.includes(a.name) || (t[a.name] = a.value); return t; }
    get styles() { return this.nativeElement?.style ?? {}; }
    get classes() { let t = {}, o = this.nativeElement.className; return (typeof o != "string" ? o.baseVal.split(" ") : o.split(" ")).forEach(i => t[i] = !0), t; }
    get childNodes() { let t = this.nativeNode.childNodes, n = []; for (let o = 0; o < t.length; o++) {
        let r = t[o];
        n.push(To(r));
    } return n; }
    get children() { let t = this.nativeElement; if (!t)
        return []; let n = t.children, o = []; for (let r = 0; r < n.length; r++) {
        let i = n[r];
        o.push(To(i));
    } return o; }
    query(t) { return this.queryAll(t)[0] || null; }
    queryAll(t) { let n = []; return Fg(this, t, n, !0), n; }
    queryAllNodes(t) { let n = []; return Fg(this, t, n, !1), n; }
    triggerEventHandler(t, n) { let o = this.nativeNode, r = []; this.listeners.forEach(i => { if (i.name === t) {
        let s = i.callback;
        s.call(o, n), r.push(s);
    } }), typeof o.eventListeners == "function" && o.eventListeners(t).forEach(i => { if (i.toString().indexOf("__ngUnwrap__") !== -1) {
        let s = i("__ngUnwrap__");
        return r.indexOf(s) === -1 && s.call(o, n);
    } }); }
};
function Ex(e, t) { if (e) {
    let n = Object.getPrototypeOf(e), o = Node.prototype;
    for (; n !== null && n !== o;) {
        let r = Object.getOwnPropertyDescriptors(n);
        for (let i in r)
            if (!i.startsWith("__") && !i.startsWith("on")) {
                let s = e[i];
                Ix(s) && (t[i] = s);
            }
        n = Object.getPrototypeOf(n);
    }
} }
function Ix(e) { return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null; }
function Fg(e, t, n, o) { let r = we(e.nativeNode), i = r ? r.lView : null; if (i !== null) {
    let s = i[m].data[r.nodeIndex];
    pn(s, i, t, n, o, e.nativeNode);
}
else
    mp(e.nativeNode, t, n, o); }
function pn(e, t, n, o, r, i) { let s = dh(e, t); if (e.type & 11) {
    if (Xl(s, n, o, r, i), Me(e)) {
        let c = ge(e.index, t);
        c && c[m].firstChild && pn(c[m].firstChild, c, n, o, r, i);
    }
    else
        e.child && pn(e.child, t, n, o, r, i), s && mp(s, n, o, r);
    let a = t[e.index];
    Y(a) && jg(a, n, o, r, i);
}
else if (e.type & 4) {
    let a = t[e.index];
    Xl(a[We], n, o, r, i), jg(a, n, o, r, i);
}
else if (e.type & 16) {
    let a = t[J], l = a[se].projection[e.projection];
    if (Array.isArray(l))
        for (let u of l)
            Xl(u, n, o, r, i);
    else if (l) {
        let u = a[z], d = u[m].data[l.index];
        pn(d, u, n, o, r, i);
    }
}
else
    e.child && pn(e.child, t, n, o, r, i); if (i !== s) {
    let a = e.flags & 2 ? e.projectionNext : e.next;
    a && pn(a, t, n, o, r, i);
} }
function jg(e, t, n, o, r) { for (let i = $; i < e.length; i++) {
    let s = e[i], a = s[m].firstChild;
    a && pn(a, s, t, n, o, r);
} }
function Xl(e, t, n, o, r) { if (r !== e) {
    let i = To(e);
    if (!i)
        return;
    (o && i instanceof Mn && t(i) && n.indexOf(i) === -1 || !o && t(i) && n.indexOf(i) === -1) && n.push(i);
} }
function mp(e, t, n, o) { let r = e.childNodes, i = r.length; for (let s = 0; s < i; s++) {
    let a = r[s], c = To(a);
    c && ((o && c instanceof Mn && t(c) && n.indexOf(c) === -1 || !o && t(c) && n.indexOf(c) === -1) && n.push(c), mp(a, t, n, o));
} }
function Dx(e, t, n, o) { let r = t.propertyBindings; if (r !== null)
    for (let i = 0; i < r.length; i++) {
        let s = r[i], c = o[s].split(Yw), l = c[0];
        if (c.length > 1) {
            let u = c[1];
            for (let d = 1; d < c.length - 1; d++)
                u += b(n[s + d - 1]) + c[d + 1];
            e[l] = u;
        }
        else
            e[l] = n[s];
    } }
var eu = "__ng_debug__";
function To(e) { return e instanceof Node ? (e.hasOwnProperty(eu) || (e[eu] = e.nodeType == Node.ELEMENT_NODE ? new Mn(e) : new Wr(e)), e[eu]) : null; }
var yi = class {
    destroyed = !1;
    listeners = null;
    errorHandler = E(Xe, { optional: !0 });
    destroyRef = E(Fe);
    constructor() { this.destroyRef.onDestroy(() => { this.destroyed = !0, this.listeners = null; }); }
    subscribe(t) { if (this.destroyed)
        throw new T(953, !1); return (this.listeners ??= []).push(t), { unsubscribe: () => { let n = this.listeners?.indexOf(t); n !== void 0 && n !== -1 && this.listeners?.splice(n, 1); } }; }
    emit(t) { if (this.destroyed) {
        console.warn(Zo(953, !1));
        return;
    } if (this.listeners === null)
        return; let n = A(null); try {
        for (let o of this.listeners)
            try {
                o(t);
            }
            catch (r) {
                this.errorHandler?.handleError(r);
            }
    }
    finally {
        A(n);
    } }
};
function Tx(e) { return e.destroyRef; }
function Ye(e) { return zp(e); }
function Rn(e, t) { return Ni(e, t?.equal); }
var vp = class {
    [re];
    constructor(t) { this[re] = t; }
    destroy() { this[re].destroy(); }
};
function YT(e, t) { let n = t?.injector ?? E(ie), o = t?.manualCleanup !== !0 ? n.get(Fe) : null, r, i = n.get(ln, null, { optional: !0 }), s = n.get(Ce); return i !== null ? (r = Nx(i.view, s, e), o instanceof Qo && o._lView === i.view && (o = null)) : r = wx(e, n.get(gr), s), r.injector = n, o !== null && (r.onDestroyFn = o.onDestroy(() => r.destroy())), new vp(r); }
var KT = Te(G({}, Qp), { cleanupFns: void 0, zone: null, onDestroyFn: un, run() { let e = Un(!1); try {
        Zp(this);
    }
    finally {
        Un(e);
    } }, cleanup() { if (!this.cleanupFns?.length)
        return; let e = A(null); try {
        for (; this.cleanupFns.length;)
            this.cleanupFns.pop()();
    }
    finally {
        this.cleanupFns = [], A(e);
    } } }), Cx = Te(G({}, KT), { consumerMarkedDirty() { this.scheduler.schedule(this), this.notifier.notify(12); }, destroy() { kt(this), this.onDestroyFn(), this.cleanup(), this.scheduler.remove(this); } }), Mx = Te(G({}, KT), { consumerMarkedDirty() { this.view[M] |= 8192, Vt(this.view), this.notifier.notify(13); }, destroy() { kt(this), this.onDestroyFn(), this.cleanup(), this.view[ht]?.delete(this); } });
function Nx(e, t, n) { let o = Object.create(Mx); return o.view = e, o.zone = typeof Zone < "u" ? Zone.current : null, o.notifier = t, o.fn = JT(o, n), e[ht] ??= new Set, e[ht].add(o), o.consumerMarkedDirty(o), o; }
function wx(e, t, n) { let o = Object.create(Cx); return o.fn = JT(o, e), o.scheduler = t, o.notifier = n, o.zone = typeof Zone < "u" ? Zone.current : null, o.scheduler.add(o), o.notifier.notify(12), o; }
function JT(e, t) { return () => { t(n => (e.cleanupFns ??= []).push(n)); }; }
var _x = e => e;
function yp(e, t) { if (typeof e == "function") {
    let n = Mc(e, _x, t?.equal);
    return QT(n, t?.debugName);
}
else {
    let n = Mc(e.source, e.computation, e.equal);
    return QT(n, e.debugName);
} }
function QT(e, t) { let n = e[re], o = e; return o.set = r => Gp(n, r), o.update = r => Wp(n, r), o.asReadonly = $n.bind(e), o; }
function Sx(e) { let t = e.request, n = e.params ?? t ?? (() => null); return new nc(n, Rx(e), e.defaultValue, e.equal ? bx(e.equal) : void 0, e.injector ?? E(ie)); }
var Ep = class {
    value;
    constructor(t) { this.value = t, this.value.set = this.set.bind(this), this.value.update = this.update.bind(this), this.value.asReadonly = $n; }
    isError = Rn(() => this.status() === "error");
    update(t) { this.set(t(Ye(this.value))); }
    isLoading = Rn(() => this.status() === "loading" || this.status() === "reloading");
    isValueDefined = Rn(() => this.isError() ? !1 : this.value() !== void 0);
    hasValue() { return this.isValueDefined(); }
    asReadonly() { return this; }
}, nc = class extends Ep {
    loaderFn;
    equal;
    pendingTasks;
    state;
    extRequest;
    effectRef;
    pendingController;
    resolvePendingTask = void 0;
    destroyed = !1;
    unregisterOnDestroy;
    constructor(t, n, o, r, i) { super(Rn(() => { let s = this.state().stream?.(); if (!s || this.state().status === "loading" && this.error())
        return o; if (!Ip(s))
        throw new Dp(this.error()); return s.value; }, { equal: r })), this.loaderFn = n, this.equal = r, this.extRequest = yp({ source: t, computation: s => ({ request: s, reload: 0 }) }), this.state = yp({ source: this.extRequest, computation: (s, a) => { let c = s.request === void 0 ? "idle" : "loading"; return a ? { extRequest: s, status: c, previousStatus: ZT(a.value), stream: a.value.extRequest.request === s.request ? a.value.stream : void 0 } : { extRequest: s, status: c, previousStatus: "idle", stream: void 0 }; } }), this.effectRef = YT(this.loadEffect.bind(this), { injector: i, manualCleanup: !0 }), this.pendingTasks = i.get(hr), this.unregisterOnDestroy = i.get(Fe).onDestroy(() => this.destroy()); }
    status = Rn(() => ZT(this.state()));
    error = Rn(() => { let t = this.state().stream?.(); return t && !Ip(t) ? t.error : void 0; });
    set(t) { if (this.destroyed)
        return; let n = Ye(this.error), o = Ye(this.state); if (!n) {
        let r = Ye(this.value);
        if (o.status === "local" && (this.equal ? this.equal(r, t) : r === t))
            return;
    } this.state.set({ extRequest: o.extRequest, status: "local", previousStatus: "local", stream: Bt({ value: t }) }), this.abortInProgressLoad(); }
    reload() { let { status: t } = Ye(this.state); return t === "idle" || t === "loading" ? !1 : (this.extRequest.update(({ request: n, reload: o }) => ({ request: n, reload: o + 1 })), !0); }
    destroy() { this.destroyed = !0, this.unregisterOnDestroy(), this.effectRef.destroy(), this.abortInProgressLoad(), this.state.set({ extRequest: { request: void 0, reload: 0 }, status: "idle", previousStatus: "idle", stream: void 0 }); }
    loadEffect() { return xt(this, null, function* () { let t = this.extRequest(), { status: n, previousStatus: o } = Ye(this.state); if (t.request === void 0)
        return; if (n !== "loading")
        return; this.abortInProgressLoad(); let r = this.resolvePendingTask = this.pendingTasks.add(), { signal: i } = this.pendingController = new AbortController; try {
        let s = yield Ye(() => this.loaderFn({ params: t.request, request: t.request, abortSignal: i, previous: { status: o } }));
        if (i.aborted || Ye(this.extRequest) !== t)
            return;
        this.state.set({ extRequest: t, status: "resolved", previousStatus: "resolved", stream: s });
    }
    catch (s) {
        if (i.aborted || Ye(this.extRequest) !== t)
            return;
        this.state.set({ extRequest: t, status: "resolved", previousStatus: "error", stream: Bt({ error: Cp(s) }) });
    }
    finally {
        r?.(), r = void 0;
    } }); }
    abortInProgressLoad() { Ye(() => this.pendingController?.abort()), this.pendingController = void 0, this.resolvePendingTask?.(), this.resolvePendingTask = void 0; }
};
function bx(e) { return (t, n) => t === void 0 || n === void 0 ? t === n : e(t, n); }
function Rx(e) { return Ax(e) ? e.stream : t => xt(null, null, function* () { try {
    return Bt({ value: yield e.loader(t) });
}
catch (n) {
    return Bt({ error: Cp(n) });
} }); }
function Ax(e) { return !!e.stream; }
function ZT(e) { switch (e.status) {
    case "loading": return e.extRequest.reload === 0 ? "loading" : "reloading";
    case "resolved": return Ip(e.stream()) ? "resolved" : "error";
    default: return e.status;
} }
function Ip(e) { return e.error === void 0; }
function Cp(e) { return e instanceof Error ? e : new Tp(e); }
var Dp = class extends Error {
    constructor(t) { super(t.message, { cause: t }); }
}, Tp = class extends Error {
    constructor(t) { super(String(t), { cause: t }); }
};
var Sp = { JSACTION: "__jsaction", OWNER: "__owner" }, nC = {};
function Ox(e) { return e[Sp.JSACTION]; }
function XT(e, t) { e[Sp.JSACTION] = t; }
function xx(e) { return nC[e]; }
function kx(e, t) { nC[e] = t; }
var N = { AUXCLICK: "auxclick", CHANGE: "change", CLICK: "click", CLICKMOD: "clickmod", CLICKONLY: "clickonly", DBLCLICK: "dblclick", FOCUS: "focus", FOCUSIN: "focusin", BLUR: "blur", FOCUSOUT: "focusout", SUBMIT: "submit", KEYDOWN: "keydown", KEYPRESS: "keypress", KEYUP: "keyup", MOUSEUP: "mouseup", MOUSEDOWN: "mousedown", MOUSEOVER: "mouseover", MOUSEOUT: "mouseout", MOUSEENTER: "mouseenter", MOUSELEAVE: "mouseleave", MOUSEMOVE: "mousemove", POINTERUP: "pointerup", POINTERDOWN: "pointerdown", POINTEROVER: "pointerover", POINTEROUT: "pointerout", POINTERENTER: "pointerenter", POINTERLEAVE: "pointerleave", POINTERMOVE: "pointermove", POINTERCANCEL: "pointercancel", GOTPOINTERCAPTURE: "gotpointercapture", LOSTPOINTERCAPTURE: "lostpointercapture", ERROR: "error", LOAD: "load", UNLOAD: "unload", TOUCHSTART: "touchstart", TOUCHEND: "touchend", TOUCHMOVE: "touchmove", INPUT: "input", SCROLL: "scroll", TOGGLE: "toggle", CUSTOM: "_custom" }, Px = [N.MOUSEENTER, N.MOUSELEAVE, "pointerenter", "pointerleave"], Lx = [N.CLICK, N.DBLCLICK, N.FOCUSIN, N.FOCUSOUT, N.KEYDOWN, N.KEYUP, N.KEYPRESS, N.MOUSEOVER, N.MOUSEOUT, N.SUBMIT, N.TOUCHSTART, N.TOUCHEND, N.TOUCHMOVE, "touchcancel", "auxclick", "change", "compositionstart", "compositionupdate", "compositionend", "beforeinput", "input", "select", "copy", "cut", "paste", "mousedown", "mouseup", "wheel", "contextmenu", "dragover", "dragenter", "dragleave", "drop", "dragstart", "dragend", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture", "ended", "loadedmetadata", "pagehide", "pageshow", "visibilitychange", "beforematch"], oC = [N.FOCUS, N.BLUR, N.ERROR, N.LOAD, N.TOGGLE], cc = e => oC.indexOf(e) >= 0, Fx = Lx.concat(oC), rC = e => Fx.indexOf(e) >= 0;
function jx(e) { return e === N.MOUSEENTER ? N.MOUSEOVER : e === N.MOUSELEAVE ? N.MOUSEOUT : e === N.POINTERENTER ? N.POINTEROVER : e === N.POINTERLEAVE ? N.POINTEROUT : e; }
function Vx(e, t, n, o) { let r = !1; cc(t) && (r = !0); let i = typeof o == "boolean" ? { capture: r, passive: o } : r; return e.addEventListener(t, n, i), { eventType: t, handler: n, capture: r, passive: o }; }
function Hx(e, t) { if (e.removeEventListener) {
    let n = typeof t.passive == "boolean" ? { capture: t.capture } : t.capture;
    e.removeEventListener(t.eventType, t.handler, n);
}
else
    e.detachEvent && e.detachEvent(`on${t.eventType}`, t.handler); }
function Bx(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1; }
var eC = typeof navigator < "u" && /Macintosh/.test(navigator.userAgent);
function Ux(e) { return e.which === 2 || e.which == null && e.button === 4; }
function $x(e) { return eC && e.metaKey || !eC && e.ctrlKey || Ux(e) || e.shiftKey; }
function qx(e, t, n) { let o = e.relatedTarget; return (e.type === N.MOUSEOVER && t === N.MOUSEENTER || e.type === N.MOUSEOUT && t === N.MOUSELEAVE || e.type === N.POINTEROVER && t === N.POINTERENTER || e.type === N.POINTEROUT && t === N.POINTERLEAVE) && (!o || o !== n && !n.contains(o)); }
function Gx(e, t) { let n = {}; for (let o in e) {
    if (o === "srcElement" || o === "target")
        continue;
    let r = o, i = e[r];
    typeof i != "function" && (n[r] = i);
} return e.type === N.MOUSEOVER ? n.type = N.MOUSEENTER : e.type === N.MOUSEOUT ? n.type = N.MOUSELEAVE : e.type === N.POINTEROVER ? n.type = N.POINTERENTER : n.type = N.POINTERLEAVE, n.target = n.srcElement = t, n.bubbles = !1, n._originalEvent = e, n; }
var Wx = typeof navigator < "u" && /iPhone|iPad|iPod/.test(navigator.userAgent), sc = class {
    element;
    handlerInfos = [];
    constructor(t) { this.element = t; }
    addEventListener(t, n, o) { Wx && (this.element.style.cursor = "pointer"), this.handlerInfos.push(Vx(this.element, t, n(this.element), o)); }
    cleanUp() { for (let t = 0; t < this.handlerInfos.length; t++)
        Hx(this.element, this.handlerInfos[t]); this.handlerInfos = []; }
}, zx = { NAMESPACE_ACTION_SEPARATOR: ".", EVENT_ACTION_SEPARATOR: ":" };
function Qt(e) { return e.eventType; }
function bp(e, t) { e.eventType = t; }
function rc(e) { return e.event; }
function iC(e, t) { e.event = t; }
function sC(e) { return e.targetElement; }
function aC(e, t) { e.targetElement = t; }
function cC(e) { return e.eic; }
function Qx(e, t) { e.eic = t; }
function Zx(e) { return e.timeStamp; }
function Yx(e, t) { e.timeStamp = t; }
function ic(e) { return e.eia; }
function lC(e, t, n) { e.eia = [t, n]; }
function Mp(e) { e.eia = void 0; }
function oc(e) { return e[1]; }
function Kx(e) { return e.eirp; }
function uC(e, t) { e.eirp = t; }
function dC(e) { return e.eir; }
function fC(e, t) { e.eir = t; }
function pC(e) { return { eventType: e.eventType, event: e.event, targetElement: e.targetElement, eic: e.eic, eia: e.eia, timeStamp: e.timeStamp, eirp: e.eirp, eiack: e.eiack, eir: e.eir }; }
function Jx(e, t, n, o, r, i, s, a) { return { eventType: e, event: t, targetElement: n, eic: o, timeStamp: r, eia: i, eirp: s, eiack: a }; }
var Np = class e {
    eventInfo;
    constructor(t) { this.eventInfo = t; }
    getEventType() { return Qt(this.eventInfo); }
    setEventType(t) { bp(this.eventInfo, t); }
    getEvent() { return rc(this.eventInfo); }
    setEvent(t) { iC(this.eventInfo, t); }
    getTargetElement() { return sC(this.eventInfo); }
    setTargetElement(t) { aC(this.eventInfo, t); }
    getContainer() { return cC(this.eventInfo); }
    setContainer(t) { Qx(this.eventInfo, t); }
    getTimestamp() { return Zx(this.eventInfo); }
    setTimestamp(t) { Yx(this.eventInfo, t); }
    getAction() { let t = ic(this.eventInfo); if (t)
        return { name: t[0], element: t[1] }; }
    setAction(t) { if (!t) {
        Mp(this.eventInfo);
        return;
    } lC(this.eventInfo, t.name, t.element); }
    getIsReplay() { return Kx(this.eventInfo); }
    setIsReplay(t) { uC(this.eventInfo, t); }
    getResolved() { return dC(this.eventInfo); }
    setResolved(t) { fC(this.eventInfo, t); }
    clone() { return new e(pC(this.eventInfo)); }
}, Xx = {}, ek = /\s*;\s*/, tk = N.CLICK, wp = class {
    a11yClickSupport = !1;
    clickModSupport = !0;
    syntheticMouseEventSupport;
    updateEventInfoForA11yClick = void 0;
    preventDefaultForA11yClick = void 0;
    populateClickOnlyAction = void 0;
    constructor({ syntheticMouseEventSupport: t = !1, clickModSupport: n = !0 } = {}) { this.syntheticMouseEventSupport = t, this.clickModSupport = n; }
    resolveEventType(t) { this.clickModSupport && Qt(t) === N.CLICK && $x(rc(t)) ? bp(t, N.CLICKMOD) : this.a11yClickSupport && this.updateEventInfoForA11yClick(t); }
    resolveAction(t) { dC(t) || (this.populateAction(t, sC(t)), fC(t, !0)); }
    resolveParentAction(t) { let n = ic(t), o = n && oc(n); Mp(t); let r = o && this.getParentNode(o); r && this.populateAction(t, r); }
    populateAction(t, n) { let o = n; for (; o && o !== cC(t) && (o.nodeType === Node.ELEMENT_NODE && this.populateActionOnElement(o, t), !ic(t));)
        o = this.getParentNode(o); let r = ic(t); if (r && (this.a11yClickSupport && this.preventDefaultForA11yClick(t), this.syntheticMouseEventSupport && (Qt(t) === N.MOUSEENTER || Qt(t) === N.MOUSELEAVE || Qt(t) === N.POINTERENTER || Qt(t) === N.POINTERLEAVE)))
        if (qx(rc(t), Qt(t), oc(r))) {
            let i = Gx(rc(t), oc(r));
            iC(t, i), aC(t, oc(r));
        }
        else
            Mp(t); }
    getParentNode(t) { let n = t[Sp.OWNER]; if (n)
        return n; let o = t.parentNode; return o?.nodeName === "#document-fragment" ? o?.host ?? null : o; }
    populateActionOnElement(t, n) { let o = this.parseActions(t), r = o[Qt(n)]; r !== void 0 && lC(n, r, t), this.a11yClickSupport && this.populateClickOnlyAction(t, n, o); }
    parseActions(t) { let n = Ox(t); if (!n) {
        let o = t.getAttribute(Gn.JSACTION);
        if (!o)
            n = Xx, XT(t, n);
        else {
            if (n = xx(o), !n) {
                n = {};
                let r = o.split(ek);
                for (let i = 0; i < r.length; i++) {
                    let s = r[i];
                    if (!s)
                        continue;
                    let a = s.indexOf(zx.EVENT_ACTION_SEPARATOR), c = a !== -1, l = c ? s.substr(0, a).trim() : tk, u = c ? s.substr(a + 1).trim() : s;
                    n[l] = u;
                }
                kx(o, n);
            }
            XT(t, n);
        }
    } return n; }
    addA11yClickSupport(t, n, o) { this.a11yClickSupport = !0, this.updateEventInfoForA11yClick = t, this.preventDefaultForA11yClick = n, this.populateClickOnlyAction = o; }
}, hC = (function (e) { return e[e.I_AM_THE_JSACTION_FRAMEWORK = 0] = "I_AM_THE_JSACTION_FRAMEWORK", e; })(hC || {}), _p = class {
    dispatchDelegate;
    actionResolver;
    eventReplayer;
    eventReplayScheduled = !1;
    replayEventInfoWrappers = [];
    constructor(t, { actionResolver: n, eventReplayer: o } = {}) { this.dispatchDelegate = t, this.actionResolver = n, this.eventReplayer = o; }
    dispatch(t) { let n = new Np(t); this.actionResolver?.resolveEventType(t), this.actionResolver?.resolveAction(t); let o = n.getAction(); if (o && nk(o.element, n) && Bx(n.getEvent()), this.eventReplayer && n.getIsReplay()) {
        this.scheduleEventInfoWrapperReplay(n);
        return;
    } this.dispatchDelegate(n); }
    scheduleEventInfoWrapperReplay(t) { this.replayEventInfoWrappers.push(t), !this.eventReplayScheduled && (this.eventReplayScheduled = !0, Promise.resolve().then(() => { this.eventReplayScheduled = !1, this.eventReplayer(this.replayEventInfoWrappers); })); }
};
function nk(e, t) { return e.tagName === "A" && (t.getEventType() === N.CLICK || t.getEventType() === N.CLICKMOD); }
var gC = Symbol.for("propagationStopped"), Rp = { REPLAY: 101 };
var ok = "`preventDefault` called during event replay.";
var rk = "`composedPath` called during event replay.", ac = class {
    dispatchDelegate;
    clickModSupport;
    actionResolver;
    dispatcher;
    constructor(t, n = !0) { this.dispatchDelegate = t, this.clickModSupport = n, this.actionResolver = new wp({ clickModSupport: n }), this.dispatcher = new _p(o => { this.dispatchToDelegate(o); }, { actionResolver: this.actionResolver }); }
    dispatch(t) { this.dispatcher.dispatch(t); }
    dispatchToDelegate(t) { for (t.getIsReplay() && ak(t), ik(t); t.getAction();) {
        if (ck(t), cc(t.getEventType()) && t.getAction().element !== t.getTargetElement() || (this.dispatchDelegate(t.getEvent(), t.getAction().name), sk(t)))
            return;
        this.actionResolver.resolveParentAction(t.eventInfo);
    } }
};
function ik(e) { let t = e.getEvent(), n = e.getEvent().stopPropagation.bind(t), o = () => { t[gC] = !0, n(); }; An(t, "stopPropagation", o), An(t, "stopImmediatePropagation", o); }
function sk(e) { return !!e.getEvent()[gC]; }
function ak(e) { let t = e.getEvent(), n = e.getTargetElement(), o = t.preventDefault.bind(t); An(t, "target", n), An(t, "eventPhase", Rp.REPLAY), An(t, "preventDefault", () => { throw o(), new Error(ok + ""); }), An(t, "composedPath", () => { throw new Error(rk + ""); }); }
function ck(e) { let t = e.getEvent(), n = e.getAction()?.element; n && An(t, "currentTarget", n, { configurable: !0 }); }
function An(e, t, n, { configurable: o = !1 } = {}) { Object.defineProperty(e, t, { value: n, configurable: o }); }
function mC(e, t) { e.ecrd(n => { t.dispatch(n); }, hC.I_AM_THE_JSACTION_FRAMEWORK); }
function lk(e) { return e?.q ?? []; }
function uk(e) { e && (tC(e.c, e.et, e.h), tC(e.c, e.etc, e.h, !0)); }
function tC(e, t, n, o) { for (let r = 0; r < t.length; r++)
    e.removeEventListener(t[r], n, o); }
var dk = !1, vC = (() => { class e {
    static MOUSE_SPECIAL_SUPPORT = dk;
    containerManager;
    eventHandlers = {};
    browserEventTypeToExtraEventTypes = {};
    dispatcher = null;
    queuedEventInfos = [];
    constructor(n) { this.containerManager = n; }
    handleEvent(n, o, r) { let i = Jx(n, o, o.target, r, Date.now()); this.handleEventInfo(i); }
    handleEventInfo(n) { if (!this.dispatcher) {
        uC(n, !0), this.queuedEventInfos?.push(n);
        return;
    } this.dispatcher(n); }
    addEvent(n, o, r) { if (n in this.eventHandlers || !this.containerManager || !e.MOUSE_SPECIAL_SUPPORT && Px.indexOf(n) >= 0)
        return; let i = (a, c, l) => { this.handleEvent(a, c, l); }; this.eventHandlers[n] = i; let s = jx(o || n); if (s !== n) {
        let a = this.browserEventTypeToExtraEventTypes[s] || [];
        a.push(n), this.browserEventTypeToExtraEventTypes[s] = a;
    } this.containerManager.addEventListener(s, a => c => { i(n, c, a); }, r); }
    replayEarlyEvents(n = window._ejsa) { n && (this.replayEarlyEventInfos(n.q), uk(n), delete window._ejsa); }
    replayEarlyEventInfos(n) { for (let o = 0; o < n.length; o++) {
        let r = n[o], i = this.getEventTypesForBrowserEventType(r.eventType);
        for (let s = 0; s < i.length; s++) {
            let a = pC(r);
            bp(a, i[s]), this.handleEventInfo(a);
        }
    } }
    getEventTypesForBrowserEventType(n) { let o = []; return this.eventHandlers[n] && o.push(n), this.browserEventTypeToExtraEventTypes[n] && o.push(...this.browserEventTypeToExtraEventTypes[n]), o; }
    handler(n) { return this.eventHandlers[n]; }
    cleanUp() { this.containerManager?.cleanUp(), this.containerManager = null, this.eventHandlers = {}, this.browserEventTypeToExtraEventTypes = {}, this.dispatcher = null, this.queuedEventInfos = []; }
    registerDispatcher(n, o) { this.ecrd(n, o); }
    ecrd(n, o) { if (this.dispatcher = n, this.queuedEventInfos?.length) {
        for (let r = 0; r < this.queuedEventInfos.length; r++)
            this.handleEventInfo(this.queuedEventInfos[r]);
        this.queuedEventInfos = null;
    } }
} return e; })();
function yC(e, t = window) { return lk(t._ejsas?.[e]); }
function Ap(e, t = window) { t._ejsas && (t._ejsas[e] = void 0); }
import "rxjs";
import "@angular/core/primitives/signals";
import "@angular/core/primitives/di";
import "rxjs/operators";
typeof globalThis.ngServerMode > "u" && (globalThis.ngServerMode = typeof window > "u");
var mc = Symbol("InputSignalNode#UNSET"), jC = Te(G({}, Cc), { transformFn: void 0, applyValueToInputSignal(e, t) { Tc(e, t); } }), XL = Symbol();
function VC(e, t) { let n = Object.create(jC); n.value = e, n.transformFn = t?.transform; function o() { if (Ti(n), n.value === mc) {
    let r = null;
    throw new T(-950, r);
} return n.value; } return o[re] = n, o; }
var Bo = (function (e) { return e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule", e; })(Bo || {});
var EC = class {
    attributeName;
    constructor(t) { this.attributeName = t; }
    __NG_ELEMENT_ID__ = () => Ys(this.attributeName);
    toString() { return `HostAttributeToken ${this.attributeName}`; }
}, fk = new C("");
fk.__NG_ELEMENT_ID__ = e => { let t = _(); if (t === null)
    throw new T(204, !1); if (t.type & 2)
    return t.value; if (e & 8)
    return null; throw new T(204, !1); };
function eF(e) { return new yi; }
function IC(e, t) { return VC(e, t); }
function pk(e) { return VC(mc, e); }
var tF = (IC.required = pk, IC);
function DC(e, t) { return df(t); }
function hk(e, t) { return ff(t); }
var nF = (DC.required = hk, DC);
function oF(e, t) { return pf(t); }
function TC(e, t) { return df(t); }
function gk(e, t) { return ff(t); }
var rF = (TC.required = gk, TC);
function iF(e, t) { return pf(t); }
function HC(e, t) { let n = Object.create(jC), o = new yi; n.value = e; function r() { return Ti(n), CC(n.value), n.value; } return r[re] = n, r.asReadonly = $n.bind(r), r.set = i => { n.equal(n.value, i) || (Tc(n, i), o.emit(i)); }, r.update = i => { CC(n.value), r.set(i(n.value)); }, r.subscribe = o.subscribe.bind(o), r.destroyRef = o.destroyRef, r; }
function CC(e) { if (e === mc)
    throw new T(952, !1); }
function MC(e, t) { return HC(e, t); }
function mk(e) { return HC(mc, e); }
var sF = (MC.required = mk, MC), BC = !0, $o = class {
}, aF = Mt("ContentChildren", (e, t = {}) => G({ selector: e, first: !1, isViewQuery: !1, descendants: !1, emitDistinctChangesOnly: BC }, t), $o), cF = Mt("ContentChild", (e, t = {}) => G({ selector: e, first: !0, isViewQuery: !1, descendants: !0 }, t), $o), lF = Mt("ViewChildren", (e, t = {}) => G({ selector: e, first: !1, isViewQuery: !0, descendants: !0, emitDistinctChangesOnly: BC }, t), $o), uF = Mt("ViewChild", (e, t) => G({ selector: e, first: !0, isViewQuery: !0, descendants: !0 }, t), $o);
function vk(e, t, n) { let o = new vo(n); return Promise.resolve(o); }
function NC(e) { for (let t = e.length - 1; t >= 0; t--)
    if (e[t] !== void 0)
        return e[t]; }
var dc = new C(""), yk = new C("");
function Ei(e) { return !e.moduleRef; }
function UC(e) { let t = Ei(e) ? e.r3Injector : e.moduleRef.injector, n = t.get(q); return n.run(() => { Ei(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers(); let o = t.get(st), r; if (n.runOutsideAngular(() => { r = n.onError.subscribe({ next: o }); }), Ei(e)) {
    let i = () => t.destroy(), s = e.platformInjector.get(dc);
    s.add(i), t.onDestroy(() => { r.unsubscribe(), s.delete(i); });
}
else {
    let i = () => e.moduleRef.destroy(), s = e.platformInjector.get(dc);
    s.add(i), e.moduleRef.onDestroy(() => { Tr(e.allPlatformModules, e.moduleRef), r.unsubscribe(), s.delete(i); });
} return Ik(o, n, () => { let i = t.get(vt), s = i.add(), a = t.get(_f); return a.runInitializers(), a.donePromise.then(() => { let c = t.get(gp, gi); if (HI(c || gi), !t.get(yk, !0))
    return Ei(e) ? t.get(Ze) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef); if (Ei(e)) {
    let u = t.get(Ze);
    return e.rootComponent !== void 0 && u.bootstrap(e.rootComponent), u;
}
else
    return $C?.(e.moduleRef, e.allPlatformModules), e.moduleRef; }).finally(() => void i.remove(s)); }); }); }
var $C;
function wC() { $C = Ek; }
function Ek(e, t) { let n = e.injector.get(Ze); if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach(o => n.bootstrap(o));
else if (e.instance.ngDoBootstrap)
    e.instance.ngDoBootstrap(n);
else
    throw new T(-403, !1); t.push(e); }
function Ik(e, t, n) { try {
    let o = n();
    return Nf(o) ? o.catch(r => { throw t.runOutsideAngular(() => e(r)), r; }) : o;
}
catch (o) {
    throw t.runOutsideAngular(() => e(o)), o;
} }
var qC = (() => { class e {
    _injector;
    _modules = [];
    _destroyListeners = [];
    _destroyed = !1;
    constructor(n) { this._injector = n; }
    bootstrapModuleFactory(n, o) { let r = o?.scheduleInRootZone, i = () => kv(o?.ngZone, Te(G({}, ec({ eventCoalescing: o?.ngZoneEventCoalescing, runCoalescing: o?.ngZoneRunCoalescing })), { scheduleInRootZone: r })), s = o?.ignoreChangesOutsideZone, a = [Xa({ ngZoneFactory: i, ignoreChangesOutsideZone: s }), { provide: Ce, useExisting: tc }, Nl], c = gE(n.moduleType, this.injector, a); return wC(), UC({ moduleRef: c, allPlatformModules: this._modules, platformInjector: this.injector }); }
    bootstrapModule(n, o = []) { let r = bf({}, o); return wC(), vk(this.injector, r, n).then(i => this.bootstrapModuleFactory(i, r)); }
    onDestroy(n) { this._destroyListeners.push(n); }
    get injector() { return this._injector; }
    destroy() { if (this._destroyed)
        throw new T(404, !1); this._modules.slice().forEach(o => o.destroy()), this._destroyListeners.forEach(o => o()); let n = this._injector.get(dc, null); n && (n.forEach(o => o()), n.clear()), this._destroyed = !0; }
    get destroyed() { return this._destroyed; }
    static \u0275fac = function (o) { return new (o || e)(de(ie)); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })(), Uo = null;
function Dk(e) { if (vc())
    throw new T(400, !1); Sf(), Uo = typeof ngServerMode > "u" || !ngServerMode ? e : null; let t = e.get(qC); return WC(e), t; }
function Tk(e, t, n = []) { let o = `Platform: ${t}`, r = new C(o); return (i = []) => { let s = vc(); if (!s) {
    let a = [...n, ...i, { provide: r, useValue: !0 }];
    s = e?.(a) ?? Dk(GC(a, o));
} return typeof ngServerMode < "u" && ngServerMode ? s : Ck(r); }; }
function GC(e = [], t) { return ie.create({ name: t, providers: [{ provide: Wc, useValue: "platform" }, { provide: dc, useValue: new Set([() => Uo = null]) }, ...e] }); }
function Ck(e) { let t = vc(); if (!t)
    throw new T(-401, !1); return t; }
function vc() { return typeof ngServerMode < "u" && ngServerMode ? null : Uo?.get(qC) ?? null; }
function dF() { vc()?.destroy(); }
function Mk(e = []) { if (Uo)
    return Uo; let t = GC(e); return (typeof ngServerMode > "u" || !ngServerMode) && (Uo = t), Sf(), WC(t), t; }
function fF(e) { return qe([{ provide: ld, useValue: e, multi: !0 }]); }
function WC(e) { let t = e.get(ld, null); ji(e, () => { t?.forEach(n => n()); }); }
function pF(e) { return qe([]); }
function hF() { return !1; }
function gF() { }
function mF(e) { let t = gf(e); if (!t)
    throw zC(e); return new vo(t); }
function vF(e) { let t = gf(e); if (!t)
    throw zC(e); return t; }
function zC(e) { return new Error(`No module with ID ${e} loaded`); }
var Nk = (() => { class e {
    static __NG_ELEMENT_ID__ = wk;
} return e; })();
function wk(e) { return _k(_(), g(), (e & 16) === 16); }
function _k(e, t, n) { if (Me(e) && !n) {
    let o = ge(e.index, t);
    return new Gt(o, o);
}
else if (e.type & 175) {
    let o = t[J];
    return new Gt(o, t);
} return null; }
var kp = class extends Nk {
}, _C = class extends kp {
}, fc = class {
    constructor() { }
    supports(t) { return Hr(t); }
    create(t) { return new Pp(t); }
}, Sk = (e, t) => t, Pp = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) { this._trackByFn = t || Sk; }
    forEachItem(t) { let n; for (n = this._itHead; n !== null; n = n._next)
        t(n); }
    forEachOperation(t) { let n = this._itHead, o = this._removalsHead, r = 0, i = null; for (; n || o;) {
        let s = !o || n && n.currentIndex < SC(o, r, i) ? n : o, a = SC(s, r, i), c = s.currentIndex;
        if (s === o)
            r--, o = o._nextRemoved;
        else if (n = n._next, s.previousIndex == null)
            r++;
        else {
            i || (i = []);
            let l = a - r, u = c - r;
            if (l != u) {
                for (let f = 0; f < l; f++) {
                    let p = f < i.length ? i[f] : i[f] = 0, h = p + f;
                    u <= h && h < l && (i[f] = p + 1);
                }
                let d = s.previousIndex;
                i[d] = u - l;
            }
        }
        a !== c && t(s, a, c);
    } }
    forEachPreviousItem(t) { let n; for (n = this._previousItHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachMovedItem(t) { let n; for (n = this._movesHead; n !== null; n = n._nextMoved)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    forEachIdentityChange(t) { let n; for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n); }
    diff(t) { if (t == null && (t = []), !Hr(t))
        throw new T(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._itHead, o = !1, r, i, s; if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
            i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), o = !0) : (o && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next;
    }
    else
        r = 0, By(t, a => { s = this._trackByFn(r, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, r), o = !0) : (o && (n = this._verifyReinsertion(n, a, s, r)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, r++; }), this.length = r; return this._truncate(n), this.collection = t, this.isDirty; }
    get isDirty() { return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null; }
    _reset() { if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
            t.previousIndex = t.currentIndex;
        for (this._additionsHead = this._additionsTail = null, t = this._movesHead; t !== null; t = t._nextMoved)
            t.previousIndex = t.currentIndex;
        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
    } }
    _mismatch(t, n, o, r) { let i; return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, r)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(o, r), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, r)) : t = this._addAfter(new Lp(n, o), i, r)), t; }
    _verifyReinsertion(t, n, o, r) { let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null); return i !== null ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t; }
    _truncate(t) { for (; t !== null;) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), t = n;
    } this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null); }
    _reinsertAfter(t, n, o) { this._unlinkedRecords !== null && this._unlinkedRecords.remove(t); let r = t._prevRemoved, i = t._nextRemoved; return r === null ? this._removalsHead = i : r._nextRemoved = i, i === null ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _moveAfter(t, n, o) { return this._unlink(t), this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _addAfter(t, n, o) { return this._insertAfter(t, n, o), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t; }
    _insertAfter(t, n, o) { let r = n === null ? this._itHead : n._next; return t._next = r, t._prev = n, r === null ? this._itTail = t : r._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new pc), this._linkedRecords.put(t), t.currentIndex = o, t; }
    _remove(t) { return this._addToRemovals(this._unlink(t)); }
    _unlink(t) { this._linkedRecords !== null && this._linkedRecords.remove(t); let n = t._prev, o = t._next; return n === null ? this._itHead = o : n._next = o, o === null ? this._itTail = n : o._prev = n, t; }
    _addToMoves(t, n) { return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t; }
    _addToRemovals(t) { return this._unlinkedRecords === null && (this._unlinkedRecords = new pc), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }
    _addIdentityChange(t, n) { return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t; }
}, Lp = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) { this.item = t, this.trackById = n; }
}, Fp = class {
    _head = null;
    _tail = null;
    add(t) { this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }
    get(t, n) { let o; for (o = this._head; o !== null; o = o._nextDup)
        if ((n === null || n <= o.currentIndex) && Object.is(o.trackById, t))
            return o; return null; }
    remove(t) { let n = t._prevDup, o = t._nextDup; return n === null ? this._head = o : n._nextDup = o, o === null ? this._tail = n : o._prevDup = n, this._head === null; }
}, pc = class {
    map = new Map;
    put(t) { let n = t.trackById, o = this.map.get(n); o || (o = new Fp, this.map.set(n, o)), o.add(t); }
    get(t, n) { let o = t, r = this.map.get(o); return r ? r.get(t, n) : null; }
    remove(t) { let n = t.trackById; return this.map.get(n).remove(t) && this.map.delete(n), t; }
    get isEmpty() { return this.map.size === 0; }
    clear() { this.map.clear(); }
};
function SC(e, t, n) { let o = e.previousIndex; if (o === null)
    return o; let r = 0; return n && o < n.length && (r = n[o]), o + t + r; }
var hc = class {
    constructor() { }
    supports(t) { return t instanceof Map || Pa(t); }
    create() { return new jp; }
}, jp = class {
    _records = new Map;
    _mapHead = null;
    _appendAfter = null;
    _previousMapHead = null;
    _changesHead = null;
    _changesTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _removalsHead = null;
    _removalsTail = null;
    get isDirty() { return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null; }
    forEachItem(t) { let n; for (n = this._mapHead; n !== null; n = n._next)
        t(n); }
    forEachPreviousItem(t) { let n; for (n = this._previousMapHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachChangedItem(t) { let n; for (n = this._changesHead; n !== null; n = n._nextChanged)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    diff(t) { if (!t)
        t = new Map;
    else if (!(t instanceof Map || Pa(t)))
        throw new T(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._mapHead; if (this._appendAfter = null, this._forEach(t, (o, r) => { if (n && n.key === r)
        this._maybeAddToChanges(n, o), this._appendAfter = n, n = n._next;
    else {
        let i = this._getOrCreateRecordForKey(r, o);
        n = this._insertBeforeOrAppend(n, i);
    } }), n) {
        n._prev && (n._prev._next = null), this._removalsHead = n;
        for (let o = n; o !== null; o = o._nextRemoved)
            o === this._mapHead && (this._mapHead = null), this._records.delete(o.key), o._nextRemoved = o._next, o.previousValue = o.currentValue, o.currentValue = null, o._prev = null, o._next = null;
    } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty; }
    _insertBeforeOrAppend(t, n) { if (t) {
        let o = t._prev;
        return n._next = t, n._prev = o, t._prev = n, o && (o._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t;
    } return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null; }
    _getOrCreateRecordForKey(t, n) { if (this._records.has(t)) {
        let r = this._records.get(t);
        this._maybeAddToChanges(r, n);
        let i = r._prev, s = r._next;
        return i && (i._next = s), s && (s._prev = i), r._next = null, r._prev = null, r;
    } let o = new Vp(t); return this._records.set(t, o), o.currentValue = n, this._addToAdditions(o), o; }
    _reset() { if (this.isDirty) {
        let t;
        for (this._previousMapHead = this._mapHead, t = this._previousMapHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
            t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
            t.previousValue = t.currentValue;
        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
    } }
    _maybeAddToChanges(t, n) { Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t)); }
    _addToAdditions(t) { this._additionsHead === null ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t); }
    _addToChanges(t) { this._changesHead === null ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t); }
    _forEach(t, n) { t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(o => n(t[o], o)); }
}, Vp = class {
    key;
    previousValue = null;
    currentValue = null;
    _nextPrevious = null;
    _next = null;
    _prev = null;
    _nextAdded = null;
    _nextRemoved = null;
    _nextChanged = null;
    constructor(t) { this.key = t; }
};
function bC() { return new QC([new fc]); }
var QC = (() => { class e {
    factories;
    static \u0275prov = j({ token: e, providedIn: "root", factory: bC });
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o != null) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = E(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || bC()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o != null)
        return o; throw new T(901, !1); }
} return e; })();
function RC() { return new ZC([new hc]); }
var ZC = (() => { class e {
    static \u0275prov = j({ token: e, providedIn: "root", factory: RC });
    factories;
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = E(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || RC()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o)
        return o; throw new T(901, !1); }
} return e; })(), bk = [new hc], Rk = [new fc], yF = new QC(Rk), EF = new ZC(bk), IF = Tk(null, "core", []), DF = (() => { class e {
    constructor(n) { }
    static \u0275fac = function (o) { return new (o || e)(de(Ze)); };
    static \u0275mod = vf({ type: e });
    static \u0275inj = Jo({});
} return e; })();
function TF(e) { let { rootComponent: t, appProviders: n, platformProviders: o, platformRef: r } = e; if (V(8), typeof ngServerMode < "u" && ngServerMode && !r)
    throw new T(-401, !1); try {
    let i = r?.injector ?? Mk(o), s = [Xa({}), { provide: Ce, useExisting: tc }, Nl, ...n || []], a = new Ur({ providers: s, parent: i, debugName: "", runEnvironmentInitializers: !1 });
    return UC({ r3Injector: a.injector, platformInjector: i, rootComponent: t });
}
catch (i) {
    return Promise.reject(i);
}
finally {
    V(9);
} }
var lc = new WeakSet, AC = "", uc = [];
function OC(e) { return e.get(ia, gd); }
function Ak() { let e = [{ provide: ia, useFactory: () => { let t = !0; if (typeof ngServerMode > "u" || !ngServerMode) {
            let n = E(wt);
            t = !!window._ejsas?.[n];
        } return t && ee("NgEventReplay"), t; } }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: Pe, useValue: () => { let t = E(Ze), { injector: n } = t; if (!lc.has(t)) {
        let o = E(Xr);
        if (OC(n)) {
            Pm();
            let r = n.get(wt), i = xm(r, (s, a, c) => { s.nodeType === Node.ELEMENT_NODE && (Om(s, a, c), yd(s, o)); });
            t.onDestroy(i);
        }
    } }, multi: !0 }, { provide: fi, useFactory: () => { let t = E(Ze), { injector: n } = t; return () => { if (!OC(n) || lc.has(t))
        return; lc.add(t); let o = n.get(wt); t.onDestroy(() => { lc.delete(t), typeof ngServerMode < "u" && !ngServerMode && Ap(o); }), t.whenStable().then(() => { if (t.destroyed)
        return; let r = n.get(Id); Ok(r, n); let i = n.get(Xr); i.get(AC)?.forEach(Ed), i.delete(AC); let s = r.instance; ei(n) ? t.onDestroy(() => s.cleanUp()) : s.cleanUp(); }); }; }, multi: !0 }), e; }
var Ok = (e, t) => { let n = t.get(wt), o = window._ejsas[n], r = e.instance = new vC(new sc(o.c)); for (let a of o.et)
    r.addEvent(a); for (let a of o.etc)
    r.addEvent(a); let i = yC(n); r.replayEarlyEventInfos(i), Ap(n); let s = new ac(a => { kk(t, a, a.currentTarget); }); mC(r, s); };
function xk(e, t, n) { let o = new Map, r = t[Lt], i = e.cleanup; if (!i || !r)
    return o; for (let s = 0; s < i.length;) {
    let a = i[s++], c = i[s++];
    if (typeof a != "string")
        continue;
    let l = a;
    if (!rC(l))
        continue;
    cc(l) ? n.capture.add(l) : n.regular.add(l);
    let u = P(t[c]);
    s++;
    let d = i[s++];
    (typeof d == "boolean" || d >= 0) && (o.has(u) ? o.get(u).push(l) : o.set(u, [l]));
} return o; }
function kk(e, t, n) { let o = (n && n.getAttribute(bo)) ?? ""; /d\d+/.test(o) ? Pk(o, e, t, n) : t.eventPhase === Rp.REPLAY && Dd(t, n); }
function Pk(e, t, n, o) { uc.push({ event: n, currentTarget: o }), At(t, e, Lk); }
function Lk(e) { let t = [...uc], n = new Set(e); uc = []; for (let { event: o, currentTarget: r } of t) {
    let i = r.getAttribute(bo);
    n.has(i) ? Dd(o, r) : uc.push({ event: o, currentTarget: r });
} }
var Hp = class {
    views = [];
    indexByContent = new Map;
    add(t) { let n = JSON.stringify(t); if (!this.indexByContent.has(n)) {
        let o = this.views.length;
        return this.views.push(t), this.indexByContent.set(n, o), o;
    } return this.indexByContent.get(n); }
    getAll() { return this.views; }
}, Fk = 0;
function YC(e) { return e.ssrId || (e.ssrId = `t${Fk++}`), e.ssrId; }
function KC(e, t, n) { let o = []; return fo(e, t, n, o), o.length; }
function jk(e) { let t = []; return _a(e, t), t.length; }
function JC(e, t, n) { let o = e[U]; return o && !o.hasAttribute(No) ? gc(o, e, null, t) : null; }
function XC(e, t, n) { let o = cr(e[U]), r = JC(o, t); if (r === null)
    return; let i = P(o[U]), s = e[z], a = gc(i, s, null, t), c = o[w], l = `${r}|${a}`; c.setAttribute(i, no, l); }
function CF(e, t) { let n = e.injector, o = My(n), r = ei(n), i = new Hp, s = new Map, a = e._views, c = n.get(ia, gd), l = { regular: new Set, capture: new Set }, u = new Map, d = e.injector.get(wt); for (let h of a) {
    let v = Td(h);
    if (v !== null) {
        let y = { serializedViewCollection: i, corruptedTextNodes: s, isI18nHydrationEnabled: o, isIncrementalHydrationEnabled: r, i18nChildren: new Map, eventTypesToReplay: l, shouldReplayEvents: c, appId: d, deferBlocks: u };
        Y(v) ? XC(v, y) : JC(v, y), $k(s, t);
    }
} let f = i.getAll(), p = n.get(Nn); if (p.set(sa, f), u.size > 0) {
    let h = {};
    for (let [v, y] of u.entries())
        h[v] = y;
    p.set(aa, h);
} return l; }
function Vk(e, t, n, o, r) { let i = [], s = ""; for (let a = $; a < e.length; a++) {
    let c = e[a], l, u, d;
    if (tt(c) && (c = c[I], Y(c))) {
        u = jk(c) + 1, XC(c, r);
        let p = cr(c[U]);
        d = { [ta]: p[m].ssrId, [Dt]: u };
    }
    if (!d) {
        let p = c[m];
        p.type === 1 ? (l = p.ssrId, u = 1) : (l = YC(p), u = KC(p, c, p.firstChild)), d = { [ta]: l, [Dt]: u };
        let h = !1;
        if (kE(n[m], t)) {
            let v = Ie(n, t), y = ue(n[m], t);
            if (r.isIncrementalHydrationEnabled && y.hydrateTriggers !== null) {
                let D = `d${r.deferBlocks.size}`;
                y.hydrateTriggers.has(7) && (h = !0);
                let O = [];
                _a(e, O);
                let he = { [Dt]: O.length, [Jr]: v[Rt] }, He = Hk(y.hydrateTriggers);
                He.length > 0 && (he[ra] = He), o !== null && (he[fd] = o), r.deferBlocks.set(D, he);
                let xe = P(e);
                xe !== void 0 ? xe.nodeType === Node.COMMENT_NODE && xC(xe, D) : xC(xe, D), h || Gk(y, O, D, r), o = D, d[oa] = D;
            }
            d[Jr] = v[Rt];
        }
        h || Object.assign(d, eM(e[a], o, r));
    }
    let f = JSON.stringify(d);
    if (i.length > 0 && f === s) {
        let p = i[i.length - 1];
        p[Yr] ??= 1, p[Yr]++;
    }
    else
        s = f, i.push(d);
} return i; }
function Hk(e) { let t = new Set([0, 1, 2, 5]), n = []; for (let [o, r] of e)
    t.has(o) && (r === null ? n.push(o) : n.push({ trigger: o, delay: r.delay })); return n; }
function Ii(e, t, n, o) { let r = t.index - I; e[Kr] ??= {}, e[Kr][r] ??= Ey(t, n, o); }
function Op(e, t) { let n = typeof t == "number" ? t : t.index - I; e[So] ??= [], e[So].includes(n) || e[So].push(n); }
function eM(e, t = null, n) { let o = {}, r = e[m], i = Ny(r, n), s = n.shouldReplayEvents ? xk(r, e, n.eventTypesToReplay) : null; for (let a = I; a < r.bindingStartIndex; a++) {
    let c = r.data[a], l = a - I, u = wy(e, a, n);
    if (u) {
        o[na] ??= {}, o[na][l] = u.caseQueue;
        for (let d of u.disconnectedNodes)
            Op(o, d);
        for (let d of u.disjointNodes) {
            let f = r.data[d + I];
            Ii(o, f, e, i);
        }
        continue;
    }
    if (Zs(c) && !Ro(c)) {
        if (Y(e[a]) && c.tView && (o[ea] ??= {}, o[ea][l] = YC(c.tView)), Fo(c, e) && qk(c)) {
            Op(o, c);
            continue;
        }
        if (Array.isArray(c.projection)) {
            for (let d of c.projection)
                if (d)
                    if (!Array.isArray(d))
                        !Kc(d) && !wo(d) && (Fo(d, e) ? Op(o, d) : Ii(o, d, e, i));
                    else
                        throw uy(P(e[a]));
        }
        if (Bk(o, c, e, i), Y(e[a])) {
            let d = e[a][U];
            if (Array.isArray(d)) {
                let f = P(d);
                f.hasAttribute(No) || gc(f, d, t, n);
            }
            o[_o] ??= {}, o[_o][l] = Vk(e[a], c, e, t, n);
        }
        else if (Array.isArray(e[a]) && !Jg(c)) {
            let d = P(e[a][U]);
            d.hasAttribute(No) || gc(d, e[a], t, n);
        }
        else if (c.type & 8)
            o[Zr] ??= {}, o[Zr][l] = KC(r, e, c.child);
        else if (c.type & 144) {
            let d = c.next;
            for (; d !== null && d.type & 144;)
                d = d.next;
            d && !wo(d) && Ii(o, d, e, i);
        }
        else if (c.type & 1) {
            let d = P(e[a]);
            Md(n, d);
        }
        if (s && c.type & 2) {
            let d = P(e[a]);
            s.has(d) && vd(d, s.get(d), t);
        }
    }
} return o; }
function Bk(e, t, n, o) { Kc(t) || (t.projectionNext && t.projectionNext !== t.next && !wo(t.projectionNext) && Ii(e, t.projectionNext, n, o), t.prev === null && t.parent !== null && Fo(t.parent, n) && !Fo(t, n) && Ii(e, t, n, o)); }
function Uk(e) { let t = e[H]; return t?.constructor ? W(t.constructor)?.encapsulation === Tt.ShadowDom : !1; }
function gc(e, t, n, o) { let r = t[w]; if (uh(t) && !Aa() || Uk(t))
    return r.setAttribute(e, No, ""), null; {
    let i = eM(t, n, o), s = o.serializedViewCollection.add(i);
    return r.setAttribute(e, no, s.toString()), s;
} }
function xC(e, t) { e.textContent = `ngh=${t}`; }
function $k(e, t) { for (let [n, o] of e)
    n.after(t.createComment(o)); }
function qk(e) { let t = e; for (; t != null;) {
    if (Me(t))
        return !0;
    t = t.parent;
} return !1; }
function Gk(e, t, n, o) { let r = zm(e.hydrateTriggers); for (let i of r)
    o.eventTypesToReplay.regular.add(i); if (r.length > 0) {
    let i = t.filter(s => s.nodeType === Node.ELEMENT_NODE);
    for (let s of i)
        vd(s, r, n);
} }
var kC = !1, PC = !1, LC = !1;
function Wk() { kC || (kC = !0, Bm(), xI(), _D(), kI(), bE(), Xy(), Oy(), Zv()); }
function zk() { PC || (PC = !0, UI(), Cy(), Sy()); }
function Qk() { LC || (LC = !0, Ym()); }
function Zk(e) { return e.whenStable(); }
var MF = "ngcm";
function NF() { let e = [{ provide: wn, useFactory: () => { let t = !0; return (typeof ngServerMode > "u" || !ngServerMode) && (t = !!E(Nn, { optional: !0 })?.get(sa, null)), t && ee("NgHydration"), t; } }, { provide: Pe, useValue: () => { tf(!1), !(typeof ngServerMode < "u" && ngServerMode) && E(wn) && (Jm(Nt()), Wk()); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: pd, useFactory: () => E(wn) }, { provide: fi, useFactory: () => { if (E(wn)) {
        let t = E(Ze);
        return () => { Zk(t).then(() => { t.destroyed || nf(t); }); };
    } return () => { }; }, multi: !0 }), qe(e); }
function wF() { return [{ provide: hd, useFactory: () => E(wn) }, { provide: Pe, useValue: () => { E(wn) && (zk(), tf(!0), ee("NgI18nHydration")); }, multi: !0 }]; }
function _F() { let e = [Ak(), { provide: md, useValue: !0 }, { provide: _t, useClass: Lm }, { provide: Pe, useValue: () => { Qk(), ee("NgIncrementalHydration"); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: fi, useFactory: () => { let t = E(ie), n = Nt(); return () => { let o = Km(t), r = Iy(n, n.body); KE(t, o, r), Qm(n, t); }; }, multi: !0 }), e; }
function SF(e) { return typeof e == "boolean" ? e : e != null && e !== "false"; }
function bF(e, t = NaN) { return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t; }
var Yk = "\u{1F170}\uFE0F", yc = !1;
function RF(e) { if (!yc)
    return; let { startLabel: t } = tM(e); performance.mark(t); }
function AF(e) { if (!yc)
    return; let { startLabel: t, labelName: n, endLabel: o } = tM(e); performance.mark(o), performance.measure(n, t, o), performance.clearMarks(t), performance.clearMarks(o); }
function tM(e) { let t = `${Yk}:${e}`; return { labelName: t, startLabel: `start:${t}`, endLabel: `end:${t}` }; }
var FC = !1;
function OF() { if (!FC && (typeof performance > "u" || !performance.mark || !performance.measure)) {
    FC = !0, console.warn("Performance API is not supported on this platform");
    return;
} yc = !0; }
function xF() { yc = !1; }
function kF(e) { let t = e; for (; t;) {
    let n = mm(t);
    if (n !== null)
        for (let o = I; o < n.length; o++) {
            let r = n[o];
            if (!X(r) && !Y(r) || r[U] !== t)
                continue;
            let i = n[m], s = mt(i, o);
            if (Me(s)) {
                let a = i.data[s.directiveStart + s.componentOffset], c = a.debugInfo?.className || a.type.name;
                if (c)
                    return c;
                break;
            }
        }
    t = t.parentNode;
} return null; }
function PF(e) { }
function LF(e) { return ne({ usage: 1, kind: "directive", type: e.type }).compileDirectiveDeclaration(ye, `ng:///${e.type.name}/\u0275fac.js`, e); }
function FF(e) { Cf(e.type, e.decorators, e.ctorParameters ?? null, e.propDecorators ?? null); }
function jF(e) { HE(e.type, e.resolveDeferredDeps, (...t) => { let n = e.resolveMetadata(...t); Cf(e.type, n.decorators, n.ctorParameters, n.propDecorators); }); }
function VF(e) { return ne({ usage: 1, kind: "component", type: e.type }).compileComponentDeclaration(ye, `ng:///${e.type.name}/\u0275cmp.js`, e); }
function HF(e) { return ne({ usage: 1, kind: Kk(e.target), type: e.type }).compileFactoryDeclaration(ye, `ng:///${e.type.name}/\u0275fac.js`, e); }
function Kk(e) { switch (e) {
    case Bo.Directive: return "directive";
    case Bo.Component: return "component";
    case Bo.Injectable: return "injectable";
    case Bo.Pipe: return "pipe";
    case Bo.NgModule: return "NgModule";
} }
function BF(e) { return ne({ usage: 1, kind: "injectable", type: e.type }).compileInjectableDeclaration(ye, `ng:///${e.type.name}/\u0275prov.js`, e); }
function UF(e) { return ne({ usage: 1, kind: "NgModule", type: e.type }).compileInjectorDeclaration(ye, `ng:///${e.type.name}/\u0275inj.js`, e); }
function $F(e) { return ne({ usage: 1, kind: "NgModule", type: e.type }).compileNgModuleDeclaration(ye, `ng:///${e.type.name}/\u0275mod.js`, e); }
function qF(e) { return ne({ usage: 1, kind: "pipe", type: e.type }).compilePipeDeclaration(ye, `ng:///${e.type.name}/\u0275pipe.js`, e); }
var xp = Symbol("NOT_SET"), nM = new Set, Jk = Te(G({}, Cc), { consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, value: xp, cleanup: null, consumerMarkedDirty() { if (this.sequence.impl.executing) {
        if (this.sequence.lastPhase === null || this.sequence.lastPhase < this.phase)
            return;
        this.sequence.erroredOrDestroyed = !0;
    } this.sequence.scheduler.notify(7); }, phaseFn(e) { if (this.sequence.lastPhase = this.phase, !this.dirty)
        return this.signal; if (this.dirty = !1, this.value !== xp && !Mi(this))
        return this.signal; try {
        for (let r of this.cleanup ?? nM)
            r();
    }
    finally {
        this.cleanup?.clear();
    } let t = []; e !== void 0 && t.push(e), t.push(this.registerCleanupFn); let n = qo(this), o; try {
        o = this.userFn.apply(null, t);
    }
    finally {
        Ci(this, n);
    } return (this.value === xp || !this.equal(this.value, o)) && (this.value = o, this.version++), this.signal; } }), Bp = class extends Pr {
    scheduler;
    lastPhase = null;
    nodes = [void 0, void 0, void 0, void 0];
    constructor(t, n, o, r, i, s = null) { super(t, [void 0, void 0, void 0, void 0], o, !1, i.get(Fe), s), this.scheduler = r; for (let a of Hd) {
        let c = n[a];
        if (c === void 0)
            continue;
        let l = Object.create(Jk);
        l.sequence = this, l.phase = a, l.userFn = c, l.dirty = !0, l.signal = () => (Ti(l), l.value), l.signal[re] = l, l.registerCleanupFn = u => (l.cleanup ??= new Set).add(u), this.nodes[a] = l, this.hooks[a] = u => l.phaseFn(u);
    } }
    afterRun() { super.afterRun(), this.lastPhase = null; }
    destroy() { super.destroy(); for (let t of this.nodes)
        if (t)
            try {
                for (let n of t.cleanup ?? nM)
                    n();
            }
            finally {
                kt(t);
            } }
};
function GF(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return va; let n = t?.injector ?? E(ie), o = n.get(Ce), r = n.get(ma), i = n.get(xo, null, { optional: !0 }); r.impl ??= n.get(Bd); let s = e; typeof s == "function" && (s = { mixedReadWrite: e }); let a = n.get(ln, null, { optional: !0 }), c = new Bp(r.impl, [s.earlyRead, s.write, s.mixedReadWrite, s.read], a?.view, o, n, i?.snapshot(null)); return r.impl.register(c), c; }
function WF(e, t) { let n = W(e), o = t.elementInjector || Fn(); return new Wt(n).create(o, t.projectableNodes, t.hostElement, t.environmentInjector, t.directives, t.bindings); }
function zF(e) { let t = W(e); if (!t)
    return null; let n = new Wt(t); return { get selector() { return n.selector; }, get type() { return n.componentType; }, get inputs() { return n.inputs; }, get outputs() { return n.outputs; }, get ngContentSelectors() { return n.ngContentSelectors; }, get isStandalone() { return t.standalone; }, get isSignal() { return t.signals; } }; }
function QF(...e) { return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] }); }
var ZF = new C("", { providedIn: "platform", factory: () => null }), YF = new C("", { providedIn: "platform", factory: () => null }), KF = new C("", { providedIn: "platform", factory: () => null });
export { WN as ANIMATION_MODULE_TYPE, fi as APP_BOOTSTRAP_LISTENER, wt as APP_ID, wf as APP_INITIALIZER, _f as ApplicationInitStatus, DF as ApplicationModule, Ze as ApplicationRef, um as Attribute, GT as COMPILER_OPTIONS, zN as CSP_NONCE, qw as CUSTOM_ELEMENTS_SCHEMA, Js as ChangeDetectionStrategy, Nk as ChangeDetectorRef, lx as Compiler, td as CompilerFactory, nx as Component, ka as ComponentFactory, ci as ComponentFactoryResolver, Py as ComponentRef, cF as ContentChild, aF as ContentChildren, gx as DEFAULT_CURRENCY_CODE, wh as DOCUMENT, Mn as DebugElement, nd as DebugEventListener, Wr as DebugNode, Pp as DefaultIterableDiffer, Fe as DestroyRef, qT as Directive, Pe as ENVIRONMENT_INITIALIZER, Qr as ElementRef, _C as EmbeddedViewRef, _e as EnvironmentInjector, Xe as ErrorHandler, Et as EventEmitter, fk as HOST_TAG_NAME, $g as Host, EC as HostAttributeToken, sx as HostBinding, ax as HostListener, $c as INJECTOR, Vg as Inject, vN as Injectable, C as InjectionToken, ie as Injector, rx as Input, QC as IterableDiffers, ZC as KeyValueDiffers, gp as LOCALE_ID, TI as MAX_ANIMATION_TIMEOUT, zT as MissingTranslationStrategy, Qs as ModuleWithComponentFactories, Gw as NO_ERRORS_SCHEMA, cx as NgModule, pE as NgModuleFactory, go as NgModuleRef, Vu as NgProbeToken, q as NgZone, Hg as Optional, ix as Output, yi as OutputEmitterRef, GN as PACKAGE_ROOT_URL, qN as PLATFORM_ID, ld as PLATFORM_INITIALIZER, hr as PendingTasks, ox as Pipe, qC as PlatformRef, $o as Query, Ms as QueryList, ZF as REQUEST, KF as REQUEST_CONTEXT, YF as RESPONSE_INIT, nb as Renderer2, Vr as RendererFactory2, bs as RendererStyleFlags2, Ly as Sanitizer, _n as SecurityContext, Bg as Self, Es as SimpleChange, Ug as SkipSelf, mx as TRANSLATIONS, vx as TRANSLATIONS_FORMAT, Fr as TemplateRef, VR as Testability, $E as TestabilityRegistry, Nn as TransferState, qg as Type, aM as VERSION, _i as Version, uF as ViewChild, lF as ViewChildren, Fa as ViewContainerRef, Tt as ViewEncapsulation, kp as ViewRef, Pv as afterEveryRender, Ud as afterNextRender, GF as afterRenderEffect, yx as asNativeElements, OM as assertInInjectionContext, VM as assertNotInReactiveContext, Ck as assertPlatform, SF as booleanAttribute, Rn as computed, rF as contentChild, iF as contentChildren, WF as createComponent, mf as createEnvironmentInjector, hE as createNgModule, Kb as createNgModuleRef, Dk as createPlatform, Tk as createPlatformFactory, dM as defineInjectable, dF as destroyPlatform, YT as effect, gF as enableProdMode, PR as enableProfiling, Yo as forwardRef, To as getDebugNode, mF as getModuleFactory, vF as getNgModuleById, vc as getPlatform, sh as importProvidersFrom, E as inject, tF as input, Gy as inputBinding, hF as isDevMode, wl as isSignal, ir as isStandalone, yp as linkedSignal, qe as makeEnvironmentProviders, ZN as makeStateKey, QF as mergeApplicationConfig, sF as model, bF as numberAttribute, eF as output, Wy as outputBinding, IF as platformCore, HR as provideAppInitializer, FM as provideBrowserGlobalErrorListeners, pF as provideCheckNoChangesConfig, ih as provideEnvironmentInitializer, $w as provideNgReflectAttributes, fF as providePlatformInitializer, dx as provideZoneChangeDetection, px as provideZonelessChangeDetection, zF as reflectComponentType, x as resolveForwardRef, Sx as resource, ji as runInInjectionContext, qE as setTestabilityGetter, Bt as signal, Cb as twoWayBinding, Ye as untracked, nF as viewChild, oF as viewChildren, DI as \u0275ANIMATIONS_DISABLED, Cm as \u0275AcxChangeDetectionStrategy, Mm as \u0275AcxViewEncapsulation, ma as \u0275AfterRenderManager, MF as \u0275CLIENT_RENDER_MODE_FLAG, $ as \u0275CONTAINER_HEADER_OFFSET, Ce as \u0275ChangeDetectionScheduler, tc as \u0275ChangeDetectionSchedulerImpl, ka as \u0275ComponentFactory, kR as \u0275Console, gi as \u0275DEFAULT_LOCALE_ID, FE as \u0275DEFER_BLOCK_CONFIG, bR as \u0275DEFER_BLOCK_DEPENDENCY_INTERCEPTOR, _t as \u0275DEHYDRATED_BLOCK_REGISTRY, Df as \u0275DeferBlockBehavior, Q as \u0275DeferBlockState, yk as \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP, gr as \u0275EffectScheduler, Tm as \u0275Framework, $m as \u0275HydrationStatus, QN as \u0275IMAGE_CONFIG, Nm as \u0275IMAGE_CONFIG_DEFAULTS, Wc as \u0275INJECTOR_SCOPE, XL as \u0275INPUT_SIGNAL_BRAND_WRITE_TYPE, st as \u0275INTERNAL_APPLICATION_ERROR_HANDLER, KN as \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, wn as \u0275IS_HYDRATION_DOM_REUSE_ENABLED, md as \u0275IS_INCREMENTAL_HYDRATION_ENABLED, Xr as \u0275JSACTION_BLOCK_ELEMENT_MAP, Id as \u0275JSACTION_EVENT_CONTRACT, Ns as \u0275LContext, Eo as \u0275LocaleDataIndex, en as \u0275NG_COMP_DEF, er as \u0275NG_DIR_DEF, tn as \u0275NG_ELEMENT_ID, Wo as \u0275NG_INJ_DEF, Ai as \u0275NG_MOD_DEF, tr as \u0275NG_PIPE_DEF, kn as \u0275NG_PROV_DEF, ps as \u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, B as \u0275NO_CHANGE, vo as \u0275NgModuleFactory, uo as \u0275NoopNgZone, Yk as \u0275PERFORMANCE_MARK_PREFIX, WT as \u0275PROVIDED_NG_ZONE, vt as \u0275PendingTasksInternal, Xt as \u0275R3Injector, ys as \u0275ReflectionCapabilities, Wt as \u0275Render3ComponentFactory, Vs as \u0275Render3ComponentRef, mo as \u0275Render3NgModuleRef, nc as \u0275ResourceImpl, T as \u0275RuntimeError, re as \u0275SIGNAL, Vm as \u0275SSR_CONTENT_INTEGRITY_MARKER, BE as \u0275TESTABILITY, UE as \u0275TESTABILITY_GETTER, LE as \u0275TimerScheduler, ga as \u0275TracingAction, xo as \u0275TracingService, Gt as \u0275ViewRef, bi as \u0275XSS_SECURITY_URL, qn as \u0275ZONELESS_ENABLED, cv as \u0275_sanitizeHtml, da as \u0275_sanitizeUrl, yn as \u0275allLeavingAnimations, Oo as \u0275allowSanitizationBypassAndThrow, CF as \u0275annotateForHydration, PF as \u0275assertType, Ew as \u0275bypassSanitizationTrustHtml, Cw as \u0275bypassSanitizationTrustResourceUrl, Dw as \u0275bypassSanitizationTrustScript, Iw as \u0275bypassSanitizationTrustStyle, Tw as \u0275bypassSanitizationTrustUrl, lE as \u0275clearResolutionOfComponentResourcesQueue, kT as \u0275compileComponent, hp as \u0275compileDirective, OT as \u0275compileNgModule, xT as \u0275compileNgModuleDefs, vk as \u0275compileNgModuleFactory, $T as \u0275compilePipe, Kt as \u0275convertToBitFlags, kc as \u0275createInjector, Mk as \u0275createOrReusePlatformInjector, yF as \u0275defaultIterableDiffers, EF as \u0275defaultKeyValueDiffers, po as \u0275depsTracker, Uy as \u0275devModeEqual, xF as \u0275disableProfiling, OF as \u0275enableProfiling, Cp as \u0275encapsulateResourceError, qf as \u0275findLocaleData, RT as \u0275flushModuleScopingQueueAsMuchAsPossible, Zo as \u0275formatRuntimeError, $O as \u0275generateStandaloneInDeclarationsError, xR as \u0275getAsyncClassMetadataFn, kF as \u0275getClosestComponentName, W as \u0275getComponentDef, To as \u0275getDebugNode, ms as \u0275getDeferBlocks, PN as \u0275getDirectives, Nt as \u0275getDocument, FN as \u0275getHostElement, Xo as \u0275getInjectableDef, we as \u0275getLContext, DA as \u0275getLocaleCurrencyCode, LI as \u0275getLocalePluralCase, Tx as \u0275getOutputDestroyRef, tv as \u0275getSanitizationBypassType, LR as \u0275getTransferState, zw as \u0275getUnknownElementStrictMode, Zw as \u0275getUnknownPropertyStrictMode, Se as \u0275global, zy as \u0275inferTagNameFromDefinition, wk as \u0275injectChangeDetectorRef, TF as \u0275internalCreateApplication, Xa as \u0275internalProvideZoneChangeDetection, WE as \u0275isBoundToModule, Gb as \u0275isComponentDefPendingResolution, Fc as \u0275isEnvironmentProviders, fM as \u0275isInjectable, fn as \u0275isNgModule, Nf as \u0275isPromise, GE as \u0275isSubscribable, sS as \u0275isViewDirty, aS as \u0275markForRefresh, ct as \u0275noSideEffects, fp as \u0275patchComponentDefWithScope, ee as \u0275performanceMarkFeature, FR as \u0275publishExternalGlobalUtil, aw as \u0275readHydrationInfo, IA as \u0275registerLocaleData, It as \u0275renderDeferBlockState, WO as \u0275resetCompiledComponents, lw as \u0275resetIncrementalHydrationEnabledWarnedForTests, BO as \u0275resetJitOptions, aE as \u0275resolveComponentResources, Wb as \u0275restoreComponentResolutionQueue, Yb as \u0275setAllowDuplicateNgModuleIdsForTest, oM as \u0275setAlternateWeakRefImpl, wT as \u0275setClassDebugInfo, Cf as \u0275setClassMetadata, HE as \u0275setClassMetadataAsync, Ke as \u0275setCurrentInjector, UN as \u0275setDocument, gM as \u0275setInjectorProfilerContext, HI as \u0275setLocaleId, Ww as \u0275setUnknownElementStrictMode, Qw as \u0275setUnknownPropertyStrictMode, RF as \u0275startMeasuring, AF as \u0275stopMeasuring, lr as \u0275store, Be as \u0275stringify, pp as \u0275transitiveScopesFor, Ba as \u0275triggerResourceLoading, lM as \u0275truncateMiddle, TA as \u0275unregisterLocaleData, St as \u0275unwrapSafeValue, jM as \u0275unwrapWritableSignal, NF as \u0275withDomHydration, Ak as \u0275withEventReplay, wF as \u0275withI18nSupport, _F as \u0275withIncrementalHydration, CE as \u0275\u0275CopyDefinitionFeature, eT as \u0275\u0275ExternalStylesFeature, Bo as \u0275\u0275FactoryTarget, ME as \u0275\u0275HostDirectivesFeature, yf as \u0275\u0275InheritDefinitionFeature, Wg as \u0275\u0275NgOnChangesFeature, XD as \u0275\u0275ProvidersFeature, wv as \u0275\u0275advance, Cr as \u0275\u0275animateEnter, Mr as \u0275\u0275animateEnterListener, Nr as \u0275\u0275animateLeave, $s as \u0275\u0275animateLeaveListener, Af as \u0275\u0275ariaProperty, BD as \u0275\u0275attachSourceLocations, Of as \u0275\u0275attribute, vD as \u0275\u0275classMap, Xf as \u0275\u0275classProp, wI as \u0275\u0275componentInstance, SI as \u0275\u0275conditional, Ga as \u0275\u0275conditionalBranchCreate, _I as \u0275\u0275conditionalCreate, rD as \u0275\u0275contentQuery, cD as \u0275\u0275contentQuerySignal, dp as \u0275\u0275declareLet, JE as \u0275\u0275defer, VE as \u0275\u0275deferEnableTimerScheduling, nI as \u0275\u0275deferHydrateNever, hI as \u0275\u0275deferHydrateOnHover, iI as \u0275\u0275deferHydrateOnIdle, cI as \u0275\u0275deferHydrateOnImmediate, vI as \u0275\u0275deferHydrateOnInteraction, dI as \u0275\u0275deferHydrateOnTimer, II as \u0275\u0275deferHydrateOnViewport, tI as \u0275\u0275deferHydrateWhen, fI as \u0275\u0275deferOnHover, oI as \u0275\u0275deferOnIdle, sI as \u0275\u0275deferOnImmediate, gI as \u0275\u0275deferOnInteraction, lI as \u0275\u0275deferOnTimer, yI as \u0275\u0275deferOnViewport, pI as \u0275\u0275deferPrefetchOnHover, rI as \u0275\u0275deferPrefetchOnIdle, aI as \u0275\u0275deferPrefetchOnImmediate, mI as \u0275\u0275deferPrefetchOnInteraction, uI as \u0275\u0275deferPrefetchOnTimer, EI as \u0275\u0275deferPrefetchOnViewport, eI as \u0275\u0275deferPrefetchWhen, XE as \u0275\u0275deferWhen, mE as \u0275\u0275defineComponent, yE as \u0275\u0275defineDirective, j as \u0275\u0275defineInjectable, Jo as \u0275\u0275defineInjector, vf as \u0275\u0275defineNgModule, EE as \u0275\u0275definePipe, jo as \u0275\u0275directiveInject, al as \u0275\u0275disableBindings, Lf as \u0275\u0275domElement, Hf as \u0275\u0275domElementContainer, Vf as \u0275\u0275domElementContainerEnd, Ka as \u0275\u0275domElementContainerStart, Za as \u0275\u0275domElementEnd, Qa as \u0275\u0275domElementStart, Yf as \u0275\u0275domListener, Uf as \u0275\u0275domProperty, If as \u0275\u0275domTemplate, Pf as \u0275\u0275element, jf as \u0275\u0275elementContainer, hi as \u0275\u0275elementContainerEnd, Ya as \u0275\u0275elementContainerStart, za as \u0275\u0275elementEnd, Wa as \u0275\u0275elementStart, sl as \u0275\u0275enableBindings, NT as \u0275\u0275getComponentDepsFactory, PI as \u0275\u0275getCurrentView, cm as \u0275\u0275getInheritedFactory, _T as \u0275\u0275getReplaceMetadataURL, KI as \u0275\u0275i18n, XI as \u0275\u0275i18nApply, JI as \u0275\u0275i18nAttributes, Wf as \u0275\u0275i18nEnd, zf as \u0275\u0275i18nExp, eD as \u0275\u0275i18nPostprocess, Gf as \u0275\u0275i18nStart, de as \u0275\u0275inject, Ys as \u0275\u0275injectAttribute, UD as \u0275\u0275interpolate, $D as \u0275\u0275interpolate1, qD as \u0275\u0275interpolate2, GD as \u0275\u0275interpolate3, WD as \u0275\u0275interpolate4, zD as \u0275\u0275interpolate5, QD as \u0275\u0275interpolate6, ZD as \u0275\u0275interpolate7, YD as \u0275\u0275interpolate8, KD as \u0275\u0275interpolateV, Fy as \u0275\u0275invalidFactory, xi as \u0275\u0275invalidFactoryDep, Qf as \u0275\u0275listener, aD as \u0275\u0275loadQuery, Tl as \u0275\u0275namespaceHTML, Dl as \u0275\u0275namespaceMathML, Il as \u0275\u0275namespaceSVG, tD as \u0275\u0275nextContext, FF as \u0275\u0275ngDeclareClassMetadata, jF as \u0275\u0275ngDeclareClassMetadataAsync, VF as \u0275\u0275ngDeclareComponent, LF as \u0275\u0275ngDeclareDirective, HF as \u0275\u0275ngDeclareFactory, BF as \u0275\u0275ngDeclareInjectable, UF as \u0275\u0275ngDeclareInjector, $F as \u0275\u0275ngDeclareNgModule, qF as \u0275\u0275ngDeclarePipe, yT as \u0275\u0275pipe, ET as \u0275\u0275pipeBind1, IT as \u0275\u0275pipeBind2, DT as \u0275\u0275pipeBind3, TT as \u0275\u0275pipeBind4, CT as \u0275\u0275pipeBindV, oD as \u0275\u0275projection, nD as \u0275\u0275projectionDef, kf as \u0275\u0275property, oT as \u0275\u0275pureFunction0, rT as \u0275\u0275pureFunction1, iT as \u0275\u0275pureFunction2, sT as \u0275\u0275pureFunction3, aT as \u0275\u0275pureFunction4, cT as \u0275\u0275pureFunction5, lT as \u0275\u0275pureFunction6, uT as \u0275\u0275pureFunction7, dT as \u0275\u0275pureFunction8, fT as \u0275\u0275pureFunctionV, uD as \u0275\u0275queryAdvance, sD as \u0275\u0275queryRefresh, HD as \u0275\u0275readContextLet, dD as \u0275\u0275reference, hf as \u0275\u0275registerNgModuleType, OI as \u0275\u0275repeater, AI as \u0275\u0275repeaterCreate, RI as \u0275\u0275repeaterTrackByIdentity, bI as \u0275\u0275repeaterTrackByIndex, ST as \u0275\u0275replaceMetadata, ul as \u0275\u0275resetView, Rd as \u0275\u0275resolveBody, yv as \u0275\u0275resolveDocument, vv as \u0275\u0275resolveWindow, ll as \u0275\u0275restoreView, lv as \u0275\u0275sanitizeHtml, bd as \u0275\u0275sanitizeResourceUrl, dv as \u0275\u0275sanitizeScript, uv as \u0275\u0275sanitizeStyle, Sd as \u0275\u0275sanitizeUrl, hv as \u0275\u0275sanitizeUrlOrResourceUrl, tT as \u0275\u0275setComponentScope, nT as \u0275\u0275setNgModuleScope, VD as \u0275\u0275storeLet, mD as \u0275\u0275styleMap, Jf as \u0275\u0275styleProp, Zf as \u0275\u0275syntheticHostListener, $f as \u0275\u0275syntheticHostProperty, Ef as \u0275\u0275template, MT as \u0275\u0275templateRefExtractor, ND as \u0275\u0275text, ep as \u0275\u0275textInterpolate, Ja as \u0275\u0275textInterpolate1, tp as \u0275\u0275textInterpolate2, np as \u0275\u0275textInterpolate3, op as \u0275\u0275textInterpolate4, rp as \u0275\u0275textInterpolate5, ip as \u0275\u0275textInterpolate6, sp as \u0275\u0275textInterpolate7, ap as \u0275\u0275textInterpolate8, cp as \u0275\u0275textInterpolateV, fv as \u0275\u0275trustConstantHtml, pv as \u0275\u0275trustConstantResourceUrl, FD as \u0275\u0275twoWayBindingSet, up as \u0275\u0275twoWayListener, lp as \u0275\u0275twoWayProperty, fE as \u0275\u0275validateIframeAttribute, iD as \u0275\u0275viewQuery, lD as \u0275\u0275viewQuerySignal };
/*! Bundled license information:

@angular/core/fesm2022/root_effect_scheduler.mjs:
@angular/core/fesm2022/attribute.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/resource.mjs:
@angular/core/fesm2022/primitives/event-dispatch.mjs:
@angular/core/fesm2022/core.mjs:
  (**
   * @license Angular v20.3.14
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)

@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/core.mjs:
@angular/core/fesm2022/core.mjs:
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
