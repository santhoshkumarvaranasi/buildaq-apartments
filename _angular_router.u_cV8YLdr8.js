import { a as h, b as N, d as cr } from "@nf-internal/chunk-4CLCTAJ7";
import { DOCUMENT as En, Location as Gt } from "@angular/common";
import * as m from "@angular/core";
import { \u0275isPromise as On, \u0275RuntimeError as I, \u0275isNgModule as ds, isStandalone as fs, createEnvironmentInjector as Mn, InjectionToken as ie, EventEmitter as We, input as Dn, inject as p, ViewContainerRef as Nn, ChangeDetectorRef as Un, reflectComponentType as Pn, \u0275isInjectable as _n, runInInjectionContext as x, Compiler as xn, NgModuleFactory as Ln, afterNextRender as jn, signal as kn, EnvironmentInjector as Sr, DestroyRef as $n, untracked as Ae, \u0275Console as zn, \u0275PendingTasksInternal as Fn, \u0275INTERNAL_APPLICATION_ERROR_HANDLER as qn, \u0275formatRuntimeError as Bn } from "@angular/core";
import { isObservable as Hn, from as $, of as f, BehaviorSubject as U, combineLatest as Wt, EmptyError as Vn, concat as Gn, defer as Qt, pipe as Wn, throwError as Rt, EMPTY as W, ConnectableObservable as lr, Subject as Me, Observable as Qn, Subscription as Kn } from "rxjs";
import { map as R, switchMap as E, take as De, startWith as Yn, filter as he, mergeMap as _, first as oe, concatMap as Xe, tap as C, catchError as Te, scan as Zn, defaultIfEmpty as Cr, last as Jn, takeLast as wr, finalize as Nt, refCount as hr, takeUntil as dr } from "rxjs/operators";
import * as br from "@angular/platform-browser";
var d = "primary", $e = Symbol("RouteTitle"), Ut = class {
    params;
    constructor(n) { this.params = n || {}; }
    has(n) { return Object.prototype.hasOwnProperty.call(this.params, n); }
    get(n) { if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e[0] : e;
    } return null; }
    getAll(n) { if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e : [e];
    } return []; }
    get keys() { return Object.keys(this.params); }
};
function ne(t) { return new Ut(t); }
function Ir(t, n, e) { let r = e.path.split("/"); if (r.length > t.length || e.pathMatch === "full" && (n.hasChildren() || r.length < t.length))
    return null; let i = {}; for (let o = 0; o < r.length; o++) {
    let s = r[o], a = t[o];
    if (s[0] === ":")
        i[s.substring(1)] = a;
    else if (s !== a.path)
        return null;
} return { consumed: t.slice(0, r.length), posParams: i }; }
function Xn(t, n) { if (t.length !== n.length)
    return !1; for (let e = 0; e < t.length; ++e)
    if (!j(t[e], n[e]))
        return !1; return !0; }
function j(t, n) { let e = t ? Pt(t) : void 0, r = n ? Pt(n) : void 0; if (!e || !r || e.length != r.length)
    return !1; let i; for (let o = 0; o < e.length; o++)
    if (i = e[o], !Ar(t[i], n[i]))
        return !1; return !0; }
function Pt(t) { return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)]; }
function Ar(t, n) { if (Array.isArray(t) && Array.isArray(n)) {
    if (t.length !== n.length)
        return !1;
    let e = [...t].sort(), r = [...n].sort();
    return e.every((i, o) => r[o] === i);
}
else
    return t === n; }
function Tr(t) { return t.length > 0 ? t[t.length - 1] : null; }
function H(t) { return Hn(t) ? t : On(t) ? $(Promise.resolve(t)) : f(t); }
var ei = { exact: Or, subset: Mr }, Er = { exact: ti, subset: ri, ignored: () => !0 };
function fr(t, n, e) { return ei[e.paths](t.root, n.root, e.matrixParams) && Er[e.queryParams](t.queryParams, n.queryParams) && !(e.fragment === "exact" && t.fragment !== n.fragment); }
function ti(t, n) { return j(t, n); }
function Or(t, n, e) { if (!te(t.segments, n.segments) || !Ye(t.segments, n.segments, e) || t.numberOfChildren !== n.numberOfChildren)
    return !1; for (let r in n.children)
    if (!t.children[r] || !Or(t.children[r], n.children[r], e))
        return !1; return !0; }
function ri(t, n) { return Object.keys(n).length <= Object.keys(t).length && Object.keys(n).every(e => Ar(t[e], n[e])); }
function Mr(t, n, e) { return Dr(t, n, n.segments, e); }
function Dr(t, n, e, r) { if (t.segments.length > e.length) {
    let i = t.segments.slice(0, e.length);
    return !(!te(i, e) || n.hasChildren() || !Ye(i, e, r));
}
else if (t.segments.length === e.length) {
    if (!te(t.segments, e) || !Ye(t.segments, e, r))
        return !1;
    for (let i in n.children)
        if (!t.children[i] || !Mr(t.children[i], n.children[i], r))
            return !1;
    return !0;
}
else {
    let i = e.slice(0, t.segments.length), o = e.slice(t.segments.length);
    return !te(t.segments, i) || !Ye(t.segments, i, r) || !t.children[d] ? !1 : Dr(t.children[d], n, o, r);
} }
function Ye(t, n, e) { return n.every((r, i) => Er[e](t[i].parameters, r.parameters)); }
var z = class {
    root;
    queryParams;
    fragment;
    _queryParamMap;
    constructor(n = new v([], {}), e = {}, r = null) { this.root = n, this.queryParams = e, this.fragment = r; }
    get queryParamMap() { return this._queryParamMap ??= ne(this.queryParams), this._queryParamMap; }
    toString() { return oi.serialize(this); }
}, v = class {
    segments;
    children;
    parent = null;
    constructor(n, e) { this.segments = n, this.children = e, Object.values(e).forEach(r => r.parent = this); }
    hasChildren() { return this.numberOfChildren > 0; }
    get numberOfChildren() { return Object.keys(this.children).length; }
    toString() { return Ze(this); }
}, Q = class {
    path;
    parameters;
    _parameterMap;
    constructor(n, e) { this.path = n, this.parameters = e; }
    get parameterMap() { return this._parameterMap ??= ne(this.parameters), this._parameterMap; }
    toString() { return Ur(this); }
};
function ni(t, n) { return te(t, n) && t.every((e, r) => j(e.parameters, n[r].parameters)); }
function te(t, n) { return t.length !== n.length ? !1 : t.every((e, r) => e.path === n[r].path); }
function ii(t, n) { let e = []; return Object.entries(t.children).forEach(([r, i]) => { r === d && (e = e.concat(n(i, r))); }), Object.entries(t.children).forEach(([r, i]) => { r !== d && (e = e.concat(n(i, r))); }), e; }
var J = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: () => new K, providedIn: "root" });
} return t; })(), K = class {
    parse(n) { let e = new xt(n); return new z(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment()); }
    serialize(n) { let e = `/${be(n.root, !0)}`, r = ui(n.queryParams), i = typeof n.fragment == "string" ? `#${si(n.fragment)}` : ""; return `${e}${r}${i}`; }
}, oi = new K;
function Ze(t) { return t.segments.map(n => Ur(n)).join("/"); }
function be(t, n) { if (!t.hasChildren())
    return Ze(t); if (n) {
    let e = t.children[d] ? be(t.children[d], !1) : "", r = [];
    return Object.entries(t.children).forEach(([i, o]) => { i !== d && r.push(`${i}:${be(o, !1)}`); }), r.length > 0 ? `${e}(${r.join("//")})` : e;
}
else {
    let e = ii(t, (r, i) => i === d ? [be(t.children[d], !1)] : [`${i}:${be(r, !1)}`]);
    return Object.keys(t.children).length === 1 && t.children[d] != null ? `${Ze(t)}/${e[0]}` : `${Ze(t)}/(${e.join("//")})`;
} }
function Nr(t) { return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ","); }
function Qe(t) { return Nr(t).replace(/%3B/gi, ";"); }
function si(t) { return encodeURI(t); }
function _t(t) { return Nr(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&"); }
function Je(t) { return decodeURIComponent(t); }
function pr(t) { return Je(t.replace(/\+/g, "%20")); }
function Ur(t) { return `${_t(t.path)}${ai(t.parameters)}`; }
function ai(t) { return Object.entries(t).map(([n, e]) => `;${_t(n)}=${_t(e)}`).join(""); }
function ui(t) { let n = Object.entries(t).map(([e, r]) => Array.isArray(r) ? r.map(i => `${Qe(e)}=${Qe(i)}`).join("&") : `${Qe(e)}=${Qe(r)}`).filter(e => e); return n.length ? `?${n.join("&")}` : ""; }
var ci = /^[^\/()?;#]+/;
function Et(t) { let n = t.match(ci); return n ? n[0] : ""; }
var li = /^[^\/()?;=#]+/;
function hi(t) { let n = t.match(li); return n ? n[0] : ""; }
var di = /^[^=?&#]+/;
function fi(t) { let n = t.match(di); return n ? n[0] : ""; }
var pi = /^[^&#]+/;
function gi(t) { let n = t.match(pi); return n ? n[0] : ""; }
var xt = class {
    url;
    remaining;
    constructor(n) { this.url = n, this.remaining = n; }
    parseRootSegment() { return this.consumeOptional("/"), this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#") ? new v([], {}) : new v([], this.parseChildren()); }
    parseQueryParams() { let n = {}; if (this.consumeOptional("?"))
        do
            this.parseQueryParam(n);
        while (this.consumeOptional("&")); return n; }
    parseFragment() { return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null; }
    parseChildren() { if (this.remaining === "")
        return {}; this.consumeOptional("/"); let n = []; for (this.peekStartsWith("(") || n.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");)
        this.capture("/"), n.push(this.parseSegment()); let e = {}; this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0)); let r = {}; return this.peekStartsWith("(") && (r = this.parseParens(!1)), (n.length > 0 || Object.keys(e).length > 0) && (r[d] = new v(n, e)), r; }
    parseSegment() { let n = Et(this.remaining); if (n === "" && this.peekStartsWith(";"))
        throw new I(4009, !1); return this.capture(n), new Q(Je(n), this.parseMatrixParams()); }
    parseMatrixParams() { let n = {}; for (; this.consumeOptional(";");)
        this.parseParam(n); return n; }
    parseParam(n) { let e = hi(this.remaining); if (!e)
        return; this.capture(e); let r = ""; if (this.consumeOptional("=")) {
        let i = Et(this.remaining);
        i && (r = i, this.capture(r));
    } n[Je(e)] = Je(r); }
    parseQueryParam(n) { let e = fi(this.remaining); if (!e)
        return; this.capture(e); let r = ""; if (this.consumeOptional("=")) {
        let s = gi(this.remaining);
        s && (r = s, this.capture(r));
    } let i = pr(e), o = pr(r); if (n.hasOwnProperty(i)) {
        let s = n[i];
        Array.isArray(s) || (s = [s], n[i] = s), s.push(o);
    }
    else
        n[i] = o; }
    parseParens(n) { let e = {}; for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
        let r = Et(this.remaining), i = this.remaining[r.length];
        if (i !== "/" && i !== ")" && i !== ";")
            throw new I(4010, !1);
        let o;
        r.indexOf(":") > -1 ? (o = r.slice(0, r.indexOf(":")), this.capture(o), this.capture(":")) : n && (o = d);
        let s = this.parseChildren();
        e[o ?? d] = Object.keys(s).length === 1 && s[d] ? s[d] : new v([], s), this.consumeOptional("//");
    } return e; }
    peekStartsWith(n) { return this.remaining.startsWith(n); }
    consumeOptional(n) { return this.peekStartsWith(n) ? (this.remaining = this.remaining.substring(n.length), !0) : !1; }
    capture(n) { if (!this.consumeOptional(n))
        throw new I(4011, !1); }
};
function Pr(t) { return t.segments.length > 0 ? new v([], { [d]: t }) : t; }
function _r(t) { let n = {}; for (let [r, i] of Object.entries(t.children)) {
    let o = _r(i);
    if (r === d && o.segments.length === 0 && o.hasChildren())
        for (let [s, a] of Object.entries(o.children))
            n[s] = a;
    else
        (o.segments.length > 0 || o.hasChildren()) && (n[r] = o);
} let e = new v(t.segments, n); return vi(e); }
function vi(t) { if (t.numberOfChildren === 1 && t.children[d]) {
    let n = t.children[d];
    return new v(t.segments.concat(n.segments), n.children);
} return t; }
function Y(t) { return t instanceof z; }
function xr(t, n, e = null, r = null) { let i = Lr(t); return jr(i, n, e, r); }
function Lr(t) { let n; function e(o) { let s = {}; for (let u of o.children) {
    let c = e(u);
    s[u.outlet] = c;
} let a = new v(o.url, s); return o === t && (n = a), a; } let r = e(t.root), i = Pr(r); return n ?? i; }
function jr(t, n, e, r) { let i = t; for (; i.parent;)
    i = i.parent; if (n.length === 0)
    return Ot(i, i, i, e, r); let o = mi(n); if (o.toRoot())
    return Ot(i, i, new v([], {}), e, r); let s = Ri(o, i, t), a = s.processChildren ? Ee(s.segmentGroup, s.index, o.commands) : $r(s.segmentGroup, s.index, o.commands); return Ot(i, s.segmentGroup, a, e, r); }
function et(t) { return typeof t == "object" && t != null && !t.outlets && !t.segmentPath; }
function Ne(t) { return typeof t == "object" && t != null && t.outlets; }
function Ot(t, n, e, r, i) { let o = {}; r && Object.entries(r).forEach(([u, c]) => { o[u] = Array.isArray(c) ? c.map(g => `${g}`) : `${c}`; }); let s; t === n ? s = e : s = kr(t, n, e); let a = Pr(_r(s)); return new z(a, o, i); }
function kr(t, n, e) { let r = {}; return Object.entries(t.children).forEach(([i, o]) => { o === n ? r[i] = e : r[i] = kr(o, n, e); }), new v(t.segments, r); }
var tt = class {
    isAbsolute;
    numberOfDoubleDots;
    commands;
    constructor(n, e, r) { if (this.isAbsolute = n, this.numberOfDoubleDots = e, this.commands = r, n && r.length > 0 && et(r[0]))
        throw new I(4003, !1); let i = r.find(Ne); if (i && i !== Tr(r))
        throw new I(4004, !1); }
    toRoot() { return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"; }
};
function mi(t) { if (typeof t[0] == "string" && t.length === 1 && t[0] === "/")
    return new tt(!0, 0, t); let n = 0, e = !1, r = t.reduce((i, o, s) => { if (typeof o == "object" && o != null) {
    if (o.outlets) {
        let a = {};
        return Object.entries(o.outlets).forEach(([u, c]) => { a[u] = typeof c == "string" ? c.split("/") : c; }), [...i, { outlets: a }];
    }
    if (o.segmentPath)
        return [...i, o.segmentPath];
} return typeof o != "string" ? [...i, o] : s === 0 ? (o.split("/").forEach((a, u) => { u == 0 && a === "." || (u == 0 && a === "" ? e = !0 : a === ".." ? n++ : a != "" && i.push(a)); }), i) : [...i, o]; }, []); return new tt(e, n, r); }
var de = class {
    segmentGroup;
    processChildren;
    index;
    constructor(n, e, r) { this.segmentGroup = n, this.processChildren = e, this.index = r; }
};
function Ri(t, n, e) { if (t.isAbsolute)
    return new de(n, !0, 0); if (!e)
    return new de(n, !1, NaN); if (e.parent === null)
    return new de(e, !0, 0); let r = et(t.commands[0]) ? 0 : 1, i = e.segments.length - 1 + r; return yi(e, i, t.numberOfDoubleDots); }
function yi(t, n, e) { let r = t, i = n, o = e; for (; o > i;) {
    if (o -= i, r = r.parent, !r)
        throw new I(4005, !1);
    i = r.segments.length;
} return new de(r, !1, i - o); }
function Si(t) { return Ne(t[0]) ? t[0].outlets : { [d]: t }; }
function $r(t, n, e) { if (t ??= new v([], {}), t.segments.length === 0 && t.hasChildren())
    return Ee(t, n, e); let r = Ci(t, n, e), i = e.slice(r.commandIndex); if (r.match && r.pathIndex < t.segments.length) {
    let o = new v(t.segments.slice(0, r.pathIndex), {});
    return o.children[d] = new v(t.segments.slice(r.pathIndex), t.children), Ee(o, 0, i);
}
else
    return r.match && i.length === 0 ? new v(t.segments, {}) : r.match && !t.hasChildren() ? Lt(t, n, e) : r.match ? Ee(t, 0, i) : Lt(t, n, e); }
function Ee(t, n, e) { if (e.length === 0)
    return new v(t.segments, {}); {
    let r = Si(e), i = {};
    if (Object.keys(r).some(o => o !== d) && t.children[d] && t.numberOfChildren === 1 && t.children[d].segments.length === 0) {
        let o = Ee(t.children[d], n, e);
        return new v(t.segments, o.children);
    }
    return Object.entries(r).forEach(([o, s]) => { typeof s == "string" && (s = [s]), s !== null && (i[o] = $r(t.children[o], n, s)); }), Object.entries(t.children).forEach(([o, s]) => { r[o] === void 0 && (i[o] = s); }), new v(t.segments, i);
} }
function Ci(t, n, e) { let r = 0, i = n, o = { match: !1, pathIndex: 0, commandIndex: 0 }; for (; i < t.segments.length;) {
    if (r >= e.length)
        return o;
    let s = t.segments[i], a = e[r];
    if (Ne(a))
        break;
    let u = `${a}`, c = r < e.length - 1 ? e[r + 1] : null;
    if (i > 0 && u === void 0)
        break;
    if (u && c && typeof c == "object" && c.outlets === void 0) {
        if (!vr(u, c, s))
            return o;
        r += 2;
    }
    else {
        if (!vr(u, {}, s))
            return o;
        r++;
    }
    i++;
} return { match: !0, pathIndex: i, commandIndex: r }; }
function Lt(t, n, e) { let r = t.segments.slice(0, n), i = 0; for (; i < e.length;) {
    let o = e[i];
    if (Ne(o)) {
        let u = wi(o.outlets);
        return new v(r, u);
    }
    if (i === 0 && et(e[0])) {
        let u = t.segments[n];
        r.push(new Q(u.path, gr(e[0]))), i++;
        continue;
    }
    let s = Ne(o) ? o.outlets[d] : `${o}`, a = i < e.length - 1 ? e[i + 1] : null;
    s && a && et(a) ? (r.push(new Q(s, gr(a))), i += 2) : (r.push(new Q(s, {})), i++);
} return new v(r, {}); }
function wi(t) { let n = {}; return Object.entries(t).forEach(([e, r]) => { typeof r == "string" && (r = [r]), r !== null && (n[e] = Lt(new v([], {}), 0, r)); }), n; }
function gr(t) { let n = {}; return Object.entries(t).forEach(([e, r]) => n[e] = `${r}`), n; }
function vr(t, n, e) { return t == e.path && j(n, e.parameters); }
var fe = "imperative", y = (function (t) { return t[t.NavigationStart = 0] = "NavigationStart", t[t.NavigationEnd = 1] = "NavigationEnd", t[t.NavigationCancel = 2] = "NavigationCancel", t[t.NavigationError = 3] = "NavigationError", t[t.RoutesRecognized = 4] = "RoutesRecognized", t[t.ResolveStart = 5] = "ResolveStart", t[t.ResolveEnd = 6] = "ResolveEnd", t[t.GuardsCheckStart = 7] = "GuardsCheckStart", t[t.GuardsCheckEnd = 8] = "GuardsCheckEnd", t[t.RouteConfigLoadStart = 9] = "RouteConfigLoadStart", t[t.RouteConfigLoadEnd = 10] = "RouteConfigLoadEnd", t[t.ChildActivationStart = 11] = "ChildActivationStart", t[t.ChildActivationEnd = 12] = "ChildActivationEnd", t[t.ActivationStart = 13] = "ActivationStart", t[t.ActivationEnd = 14] = "ActivationEnd", t[t.Scroll = 15] = "Scroll", t[t.NavigationSkipped = 16] = "NavigationSkipped", t; })(y || {}), O = class {
    id;
    url;
    constructor(n, e) { this.id = n, this.url = e; }
}, Z = class extends O {
    type = y.NavigationStart;
    navigationTrigger;
    restoredState;
    constructor(n, e, r = "imperative", i = null) { super(n, e), this.navigationTrigger = r, this.restoredState = i; }
    toString() { return `NavigationStart(id: ${this.id}, url: '${this.url}')`; }
}, M = class extends O {
    urlAfterRedirects;
    type = y.NavigationEnd;
    constructor(n, e, r) { super(n, e), this.urlAfterRedirects = r; }
    toString() { return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`; }
}, w = (function (t) { return t[t.Redirect = 0] = "Redirect", t[t.SupersededByNewNavigation = 1] = "SupersededByNewNavigation", t[t.NoDataFromResolver = 2] = "NoDataFromResolver", t[t.GuardRejected = 3] = "GuardRejected", t[t.Aborted = 4] = "Aborted", t; })(w || {}), ge = (function (t) { return t[t.IgnoredSameUrlNavigation = 0] = "IgnoredSameUrlNavigation", t[t.IgnoredByUrlHandlingStrategy = 1] = "IgnoredByUrlHandlingStrategy", t; })(ge || {}), k = class extends O {
    reason;
    code;
    type = y.NavigationCancel;
    constructor(n, e, r, i) { super(n, e), this.reason = r, this.code = i; }
    toString() { return `NavigationCancel(id: ${this.id}, url: '${this.url}')`; }
}, F = class extends O {
    reason;
    code;
    type = y.NavigationSkipped;
    constructor(n, e, r, i) { super(n, e), this.reason = r, this.code = i; }
}, ve = class extends O {
    error;
    target;
    type = y.NavigationError;
    constructor(n, e, r, i) { super(n, e), this.error = r, this.target = i; }
    toString() { return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`; }
}, Ue = class extends O {
    urlAfterRedirects;
    state;
    type = y.RoutesRecognized;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, rt = class extends O {
    urlAfterRedirects;
    state;
    type = y.GuardsCheckStart;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, nt = class extends O {
    urlAfterRedirects;
    state;
    shouldActivate;
    type = y.GuardsCheckEnd;
    constructor(n, e, r, i, o) { super(n, e), this.urlAfterRedirects = r, this.state = i, this.shouldActivate = o; }
    toString() { return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`; }
}, it = class extends O {
    urlAfterRedirects;
    state;
    type = y.ResolveStart;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, ot = class extends O {
    urlAfterRedirects;
    state;
    type = y.ResolveEnd;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, st = class {
    route;
    type = y.RouteConfigLoadStart;
    constructor(n) { this.route = n; }
    toString() { return `RouteConfigLoadStart(path: ${this.route.path})`; }
}, at = class {
    route;
    type = y.RouteConfigLoadEnd;
    constructor(n) { this.route = n; }
    toString() { return `RouteConfigLoadEnd(path: ${this.route.path})`; }
}, ut = class {
    snapshot;
    type = y.ChildActivationStart;
    constructor(n) { this.snapshot = n; }
    toString() { return `ChildActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, ct = class {
    snapshot;
    type = y.ChildActivationEnd;
    constructor(n) { this.snapshot = n; }
    toString() { return `ChildActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, lt = class {
    snapshot;
    type = y.ActivationStart;
    constructor(n) { this.snapshot = n; }
    toString() { return `ActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, ht = class {
    snapshot;
    type = y.ActivationEnd;
    constructor(n) { this.snapshot = n; }
    toString() { return `ActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, me = class {
    routerEvent;
    position;
    anchor;
    type = y.Scroll;
    constructor(n, e, r) { this.routerEvent = n, this.position = e, this.anchor = r; }
    toString() { let n = this.position ? `${this.position[0]}, ${this.position[1]}` : null; return `Scroll(anchor: '${this.anchor}', position: '${n}')`; }
}, Pe = class {
}, Re = class {
    url;
    navigationBehaviorOptions;
    constructor(n, e) { this.url = n, this.navigationBehaviorOptions = e; }
};
function bi(t) { return !(t instanceof Pe) && !(t instanceof Re); }
function Ii(t, n) { return t.providers && !t._injector && (t._injector = Mn(t.providers, n, `Route: ${t.path}`)), t._injector ?? n; }
function P(t) { return t.outlet || d; }
function Ai(t, n) { let e = t.filter(r => P(r) === n); return e.push(...t.filter(r => P(r) !== n)), e; }
function Ce(t) { if (!t)
    return null; if (t.routeConfig?._injector)
    return t.routeConfig._injector; for (let n = t.parent; n; n = n.parent) {
    let e = n.routeConfig;
    if (e?._loadedInjector)
        return e._loadedInjector;
    if (e?._injector)
        return e._injector;
} return null; }
var dt = class {
    rootInjector;
    outlet = null;
    route = null;
    children;
    attachRef = null;
    get injector() { return Ce(this.route?.snapshot) ?? this.rootInjector; }
    constructor(n) { this.rootInjector = n, this.children = new se(this.rootInjector); }
}, se = (() => { class t {
    rootInjector;
    contexts = new Map;
    constructor(e) { this.rootInjector = e; }
    onChildOutletCreated(e, r) { let i = this.getOrCreateContext(e); i.outlet = r, this.contexts.set(e, i); }
    onChildOutletDestroyed(e) { let r = this.getContext(e); r && (r.outlet = null, r.attachRef = null); }
    onOutletDeactivated() { let e = this.contexts; return this.contexts = new Map, e; }
    onOutletReAttached(e) { this.contexts = e; }
    getOrCreateContext(e) { let r = this.getContext(e); return r || (r = new dt(this.rootInjector), this.contexts.set(e, r)), r; }
    getContext(e) { return this.contexts.get(e) || null; }
    static \u0275fac = function (r) { return new (r || t)(m.\u0275\u0275inject(m.EnvironmentInjector)); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), ft = class {
    _root;
    constructor(n) { this._root = n; }
    get root() { return this._root.value; }
    parent(n) { let e = this.pathFromRoot(n); return e.length > 1 ? e[e.length - 2] : null; }
    children(n) { let e = jt(n, this._root); return e ? e.children.map(r => r.value) : []; }
    firstChild(n) { let e = jt(n, this._root); return e && e.children.length > 0 ? e.children[0].value : null; }
    siblings(n) { let e = kt(n, this._root); return e.length < 2 ? [] : e[e.length - 2].children.map(i => i.value).filter(i => i !== n); }
    pathFromRoot(n) { return kt(n, this._root).map(e => e.value); }
};
function jt(t, n) { if (t === n.value)
    return n; for (let e of n.children) {
    let r = jt(t, e);
    if (r)
        return r;
} return null; }
function kt(t, n) { if (t === n.value)
    return [n]; for (let e of n.children) {
    let r = kt(t, e);
    if (r.length)
        return r.unshift(n), r;
} return []; }
var T = class {
    value;
    children;
    constructor(n, e) { this.value = n, this.children = e; }
    toString() { return `TreeNode(${this.value})`; }
};
function le(t) { let n = {}; return t && t.children.forEach(e => n[e.value.outlet] = e), n; }
var _e = class extends ft {
    snapshot;
    constructor(n, e) { super(n), this.snapshot = e, Kt(this, n); }
    toString() { return this.snapshot.toString(); }
};
function zr(t) { let n = Ti(t), e = new U([new Q("", {})]), r = new U({}), i = new U({}), o = new U({}), s = new U(""), a = new q(e, r, o, s, i, d, t, n.root); return a.snapshot = n.root, new _e(new T(a, []), n); }
function Ti(t) { let n = {}, e = {}, r = {}, o = new re([], n, r, "", e, d, t, null, {}); return new xe("", new T(o, [])); }
var q = class {
    urlSubject;
    paramsSubject;
    queryParamsSubject;
    fragmentSubject;
    dataSubject;
    outlet;
    component;
    snapshot;
    _futureSnapshot;
    _routerState;
    _paramMap;
    _queryParamMap;
    title;
    url;
    params;
    queryParams;
    fragment;
    data;
    constructor(n, e, r, i, o, s, a, u) { this.urlSubject = n, this.paramsSubject = e, this.queryParamsSubject = r, this.fragmentSubject = i, this.dataSubject = o, this.outlet = s, this.component = a, this._futureSnapshot = u, this.title = this.dataSubject?.pipe(R(c => c[$e])) ?? f(void 0), this.url = n, this.params = e, this.queryParams = r, this.fragment = i, this.data = o; }
    get routeConfig() { return this._futureSnapshot.routeConfig; }
    get root() { return this._routerState.root; }
    get parent() { return this._routerState.parent(this); }
    get firstChild() { return this._routerState.firstChild(this); }
    get children() { return this._routerState.children(this); }
    get pathFromRoot() { return this._routerState.pathFromRoot(this); }
    get paramMap() { return this._paramMap ??= this.params.pipe(R(n => ne(n))), this._paramMap; }
    get queryParamMap() { return this._queryParamMap ??= this.queryParams.pipe(R(n => ne(n))), this._queryParamMap; }
    toString() { return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`; }
};
function pt(t, n, e = "emptyOnly") { let r, { routeConfig: i } = t; return n !== null && (e === "always" || i?.path === "" || !n.component && !n.routeConfig?.loadComponent) ? r = { params: h(h({}, n.params), t.params), data: h(h({}, n.data), t.data), resolve: h(h(h(h({}, t.data), n.data), i?.data), t._resolvedData) } : r = { params: h({}, t.params), data: h({}, t.data), resolve: h(h({}, t.data), t._resolvedData ?? {}) }, i && qr(i) && (r.resolve[$e] = i.title), r; }
var re = class {
    url;
    params;
    queryParams;
    fragment;
    data;
    outlet;
    component;
    routeConfig;
    _resolve;
    _resolvedData;
    _routerState;
    _paramMap;
    _queryParamMap;
    get title() { return this.data?.[$e]; }
    constructor(n, e, r, i, o, s, a, u, c) { this.url = n, this.params = e, this.queryParams = r, this.fragment = i, this.data = o, this.outlet = s, this.component = a, this.routeConfig = u, this._resolve = c; }
    get root() { return this._routerState.root; }
    get parent() { return this._routerState.parent(this); }
    get firstChild() { return this._routerState.firstChild(this); }
    get children() { return this._routerState.children(this); }
    get pathFromRoot() { return this._routerState.pathFromRoot(this); }
    get paramMap() { return this._paramMap ??= ne(this.params), this._paramMap; }
    get queryParamMap() { return this._queryParamMap ??= ne(this.queryParams), this._queryParamMap; }
    toString() { let n = this.url.map(r => r.toString()).join("/"), e = this.routeConfig ? this.routeConfig.path : ""; return `Route(url:'${n}', path:'${e}')`; }
}, xe = class extends ft {
    url;
    constructor(n, e) { super(e), this.url = n, Kt(this, e); }
    toString() { return Fr(this._root); }
};
function Kt(t, n) { n.value._routerState = t, n.children.forEach(e => Kt(t, e)); }
function Fr(t) { let n = t.children.length > 0 ? ` { ${t.children.map(Fr).join(", ")} } ` : ""; return `${t.value}${n}`; }
function Mt(t) { if (t.snapshot) {
    let n = t.snapshot, e = t._futureSnapshot;
    t.snapshot = e, j(n.queryParams, e.queryParams) || t.queryParamsSubject.next(e.queryParams), n.fragment !== e.fragment && t.fragmentSubject.next(e.fragment), j(n.params, e.params) || t.paramsSubject.next(e.params), Xn(n.url, e.url) || t.urlSubject.next(e.url), j(n.data, e.data) || t.dataSubject.next(e.data);
}
else
    t.snapshot = t._futureSnapshot, t.dataSubject.next(t._futureSnapshot.data); }
function $t(t, n) { let e = j(t.params, n.params) && ni(t.url, n.url), r = !t.parent != !n.parent; return e && !r && (!t.parent || $t(t.parent, n.parent)); }
function qr(t) { return typeof t.title == "string" || t.title === null; }
var Br = new ie(""), Yt = (() => { class t {
    activated = null;
    get activatedComponentRef() { return this.activated; }
    _activatedRoute = null;
    name = d;
    activateEvents = new We;
    deactivateEvents = new We;
    attachEvents = new We;
    detachEvents = new We;
    routerOutletData = Dn();
    parentContexts = p(se);
    location = p(Nn);
    changeDetector = p(Un);
    inputBinder = p(ze, { optional: !0 });
    supportsBindingToComponentInputs = !0;
    ngOnChanges(e) { if (e.name) {
        let { firstChange: r, previousValue: i } = e.name;
        if (r)
            return;
        this.isTrackedInParentContexts(i) && (this.deactivate(), this.parentContexts.onChildOutletDestroyed(i)), this.initializeOutletWithName();
    } }
    ngOnDestroy() { this.isTrackedInParentContexts(this.name) && this.parentContexts.onChildOutletDestroyed(this.name), this.inputBinder?.unsubscribeFromRouteData(this); }
    isTrackedInParentContexts(e) { return this.parentContexts.getContext(e)?.outlet === this; }
    ngOnInit() { this.initializeOutletWithName(); }
    initializeOutletWithName() { if (this.parentContexts.onChildOutletCreated(this.name, this), this.activated)
        return; let e = this.parentContexts.getContext(this.name); e?.route && (e.attachRef ? this.attach(e.attachRef, e.route) : this.activateWith(e.route, e.injector)); }
    get isActivated() { return !!this.activated; }
    get component() { if (!this.activated)
        throw new I(4012, !1); return this.activated.instance; }
    get activatedRoute() { if (!this.activated)
        throw new I(4012, !1); return this._activatedRoute; }
    get activatedRouteData() { return this._activatedRoute ? this._activatedRoute.snapshot.data : {}; }
    detach() { if (!this.activated)
        throw new I(4012, !1); this.location.detach(); let e = this.activated; return this.activated = null, this._activatedRoute = null, this.detachEvents.emit(e.instance), e; }
    attach(e, r) { this.activated = e, this._activatedRoute = r, this.location.insert(e.hostView), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.attachEvents.emit(e.instance); }
    deactivate() { if (this.activated) {
        let e = this.component;
        this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(e);
    } }
    activateWith(e, r) { if (this.isActivated)
        throw new I(4013, !1); this._activatedRoute = e; let i = this.location, s = e.snapshot.component, a = this.parentContexts.getOrCreateContext(this.name).children, u = new zt(e, a, i.injector, this.routerOutletData); this.activated = i.createComponent(s, { index: i.length, injector: u, environmentInjector: r }), this.changeDetector.markForCheck(), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.activateEvents.emit(this.activated.instance); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275dir = m.\u0275\u0275defineDirective({ type: t, selectors: [["router-outlet"]], inputs: { name: "name", routerOutletData: [1, "routerOutletData"] }, outputs: { activateEvents: "activate", deactivateEvents: "deactivate", attachEvents: "attach", detachEvents: "detach" }, exportAs: ["outlet"], features: [m.\u0275\u0275NgOnChangesFeature] });
} return t; })(), zt = class {
    route;
    childContexts;
    parent;
    outletData;
    constructor(n, e, r, i) { this.route = n, this.childContexts = e, this.parent = r, this.outletData = i; }
    get(n, e) { return n === q ? this.route : n === se ? this.childContexts : n === Br ? this.outletData : this.parent.get(n, e); }
}, ze = new ie(""), Zt = (() => { class t {
    outletDataSubscriptions = new Map;
    bindActivatedRouteToOutletComponent(e) { this.unsubscribeFromRouteData(e), this.subscribeToRouteData(e); }
    unsubscribeFromRouteData(e) { this.outletDataSubscriptions.get(e)?.unsubscribe(), this.outletDataSubscriptions.delete(e); }
    subscribeToRouteData(e) { let { activatedRoute: r } = e, i = Wt([r.queryParams, r.params, r.data]).pipe(E(([o, s, a], u) => (a = h(h(h({}, o), s), a), u === 0 ? f(a) : Promise.resolve(a)))).subscribe(o => { if (!e.isActivated || !e.activatedComponentRef || e.activatedRoute !== r || r.component === null) {
        this.unsubscribeFromRouteData(e);
        return;
    } let s = Pn(r.component); if (!s) {
        this.unsubscribeFromRouteData(e);
        return;
    } for (let { templateName: a } of s.inputs)
        e.activatedComponentRef.setInput(a, o[a]); }); this.outletDataSubscriptions.set(e, i); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })(), Jt = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275cmp = m.\u0275\u0275defineComponent({ type: t, selectors: [["ng-component"]], exportAs: ["emptyRouterOutlet"], decls: 1, vars: 0, template: function (r, i) { r & 1 && m.\u0275\u0275element(0, "router-outlet"); }, dependencies: [Yt], encapsulation: 2 });
} return t; })();
function Xt(t) { let n = t.children && t.children.map(Xt), e = n ? N(h({}, t), { children: n }) : h({}, t); return !e.component && !e.loadComponent && (n || e.loadChildren) && e.outlet && e.outlet !== d && (e.component = Jt), e; }
function Ei(t, n, e) { let r = Le(t, n._root, e ? e._root : void 0); return new _e(r, n); }
function Le(t, n, e) { if (e && t.shouldReuseRoute(n.value, e.value.snapshot)) {
    let r = e.value;
    r._futureSnapshot = n.value;
    let i = Oi(t, n, e);
    return new T(r, i);
}
else {
    if (t.shouldAttach(n.value)) {
        let o = t.retrieve(n.value);
        if (o !== null) {
            let s = o.route;
            return s.value._futureSnapshot = n.value, s.children = n.children.map(a => Le(t, a)), s;
        }
    }
    let r = Mi(n.value), i = n.children.map(o => Le(t, o));
    return new T(r, i);
} }
function Oi(t, n, e) { return n.children.map(r => { for (let i of e.children)
    if (t.shouldReuseRoute(r.value, i.value.snapshot))
        return Le(t, r, i); return Le(t, r); }); }
function Mi(t) { return new q(new U(t.url), new U(t.params), new U(t.queryParams), new U(t.fragment), new U(t.data), t.outlet, t.component, t); }
var ye = class {
    redirectTo;
    navigationBehaviorOptions;
    constructor(n, e) { this.redirectTo = n, this.navigationBehaviorOptions = e; }
}, Hr = "ngNavigationCancelingError";
function gt(t, n) { let { redirectTo: e, navigationBehaviorOptions: r } = Y(n) ? { redirectTo: n, navigationBehaviorOptions: void 0 } : n, i = Vr(!1, w.Redirect); return i.url = e, i.navigationBehaviorOptions = r, i; }
function Vr(t, n) { let e = new Error(`NavigationCancelingError: ${t || ""}`); return e[Hr] = !0, e.cancellationCode = n, e; }
function Di(t) { return Gr(t) && Y(t.url); }
function Gr(t) { return !!t && t[Hr]; }
var Ni = (t, n, e, r) => R(i => (new Ft(n, i.targetRouterState, i.currentRouterState, e, r).activate(t), i)), Ft = class {
    routeReuseStrategy;
    futureState;
    currState;
    forwardEvent;
    inputBindingEnabled;
    constructor(n, e, r, i, o) { this.routeReuseStrategy = n, this.futureState = e, this.currState = r, this.forwardEvent = i, this.inputBindingEnabled = o; }
    activate(n) { let e = this.futureState._root, r = this.currState ? this.currState._root : null; this.deactivateChildRoutes(e, r, n), Mt(this.futureState.root), this.activateChildRoutes(e, r, n); }
    deactivateChildRoutes(n, e, r) { let i = le(e); n.children.forEach(o => { let s = o.value.outlet; this.deactivateRoutes(o, i[s], r), delete i[s]; }), Object.values(i).forEach(o => { this.deactivateRouteAndItsChildren(o, r); }); }
    deactivateRoutes(n, e, r) { let i = n.value, o = e ? e.value : null; if (i === o)
        if (i.component) {
            let s = r.getContext(i.outlet);
            s && this.deactivateChildRoutes(n, e, s.children);
        }
        else
            this.deactivateChildRoutes(n, e, r);
    else
        o && this.deactivateRouteAndItsChildren(e, r); }
    deactivateRouteAndItsChildren(n, e) { n.value.component && this.routeReuseStrategy.shouldDetach(n.value.snapshot) ? this.detachAndStoreRouteSubtree(n, e) : this.deactivateRouteAndOutlet(n, e); }
    detachAndStoreRouteSubtree(n, e) { let r = e.getContext(n.value.outlet), i = r && n.value.component ? r.children : e, o = le(n); for (let s of Object.values(o))
        this.deactivateRouteAndItsChildren(s, i); if (r && r.outlet) {
        let s = r.outlet.detach(), a = r.children.onOutletDeactivated();
        this.routeReuseStrategy.store(n.value.snapshot, { componentRef: s, route: n, contexts: a });
    } }
    deactivateRouteAndOutlet(n, e) { let r = e.getContext(n.value.outlet), i = r && n.value.component ? r.children : e, o = le(n); for (let s of Object.values(o))
        this.deactivateRouteAndItsChildren(s, i); r && (r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated()), r.attachRef = null, r.route = null); }
    activateChildRoutes(n, e, r) { let i = le(e); n.children.forEach(o => { this.activateRoutes(o, i[o.value.outlet], r), this.forwardEvent(new ht(o.value.snapshot)); }), n.children.length && this.forwardEvent(new ct(n.value.snapshot)); }
    activateRoutes(n, e, r) { let i = n.value, o = e ? e.value : null; if (Mt(i), i === o)
        if (i.component) {
            let s = r.getOrCreateContext(i.outlet);
            this.activateChildRoutes(n, e, s.children);
        }
        else
            this.activateChildRoutes(n, e, r);
    else if (i.component) {
        let s = r.getOrCreateContext(i.outlet);
        if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
            let a = this.routeReuseStrategy.retrieve(i.snapshot);
            this.routeReuseStrategy.store(i.snapshot, null), s.children.onOutletReAttached(a.contexts), s.attachRef = a.componentRef, s.route = a.route.value, s.outlet && s.outlet.attach(a.componentRef, a.route.value), Mt(a.route.value), this.activateChildRoutes(n, null, s.children);
        }
        else
            s.attachRef = null, s.route = i, s.outlet && s.outlet.activateWith(i, s.injector), this.activateChildRoutes(n, null, s.children);
    }
    else
        this.activateChildRoutes(n, null, r); }
}, vt = class {
    path;
    route;
    constructor(n) { this.path = n, this.route = this.path[this.path.length - 1]; }
}, pe = class {
    component;
    route;
    constructor(n, e) { this.component = n, this.route = e; }
};
function Ui(t, n, e) { let r = t._root, i = n ? n._root : null; return Ie(r, i, e, [r.value]); }
function Pi(t) { let n = t.routeConfig ? t.routeConfig.canActivateChild : null; return !n || n.length === 0 ? null : { node: t, guards: n }; }
function we(t, n) { let e = Symbol(), r = n.get(t, e); return r === e ? typeof t == "function" && !_n(t) ? t : n.get(t) : r; }
function Ie(t, n, e, r, i = { canDeactivateChecks: [], canActivateChecks: [] }) { let o = le(n); return t.children.forEach(s => { _i(s, o[s.value.outlet], e, r.concat([s.value]), i), delete o[s.value.outlet]; }), Object.entries(o).forEach(([s, a]) => Oe(a, e.getContext(s), i)), i; }
function _i(t, n, e, r, i = { canDeactivateChecks: [], canActivateChecks: [] }) { let o = t.value, s = n ? n.value : null, a = e ? e.getContext(t.value.outlet) : null; if (s && o.routeConfig === s.routeConfig) {
    let u = xi(s, o, o.routeConfig.runGuardsAndResolvers);
    u ? i.canActivateChecks.push(new vt(r)) : (o.data = s.data, o._resolvedData = s._resolvedData), o.component ? Ie(t, n, a ? a.children : null, r, i) : Ie(t, n, e, r, i), u && a && a.outlet && a.outlet.isActivated && i.canDeactivateChecks.push(new pe(a.outlet.component, s));
}
else
    s && Oe(n, a, i), i.canActivateChecks.push(new vt(r)), o.component ? Ie(t, null, a ? a.children : null, r, i) : Ie(t, null, e, r, i); return i; }
function xi(t, n, e) { if (typeof e == "function")
    return e(t, n); switch (e) {
    case "pathParamsChange": return !te(t.url, n.url);
    case "pathParamsOrQueryParamsChange": return !te(t.url, n.url) || !j(t.queryParams, n.queryParams);
    case "always": return !0;
    case "paramsOrQueryParamsChange": return !$t(t, n) || !j(t.queryParams, n.queryParams);
    case "paramsChange":
    default: return !$t(t, n);
} }
function Oe(t, n, e) { let r = le(t), i = t.value; Object.entries(r).forEach(([o, s]) => { i.component ? n ? Oe(s, n.children.getContext(o), e) : Oe(s, null, e) : Oe(s, n, e); }), i.component ? n && n.outlet && n.outlet.isActivated ? e.canDeactivateChecks.push(new pe(n.outlet.component, i)) : e.canDeactivateChecks.push(new pe(null, i)) : e.canDeactivateChecks.push(new pe(null, i)); }
function Fe(t) { return typeof t == "function"; }
function Li(t) { return typeof t == "boolean"; }
function ji(t) { return t && Fe(t.canLoad); }
function ki(t) { return t && Fe(t.canActivate); }
function $i(t) { return t && Fe(t.canActivateChild); }
function zi(t) { return t && Fe(t.canDeactivate); }
function Fi(t) { return t && Fe(t.canMatch); }
function Wr(t) { return t instanceof Vn || t?.name === "EmptyError"; }
var Ke = Symbol("INITIAL_VALUE");
function Se() { return E(t => Wt(t.map(n => n.pipe(De(1), Yn(Ke)))).pipe(R(n => { for (let e of n)
    if (e !== !0) {
        if (e === Ke)
            return Ke;
        if (e === !1 || qi(e))
            return e;
    } return !0; }), he(n => n !== Ke), De(1))); }
function qi(t) { return Y(t) || t instanceof ye; }
function Bi(t, n) { return _(e => { let { targetSnapshot: r, currentSnapshot: i, guards: { canActivateChecks: o, canDeactivateChecks: s } } = e; return s.length === 0 && o.length === 0 ? f(N(h({}, e), { guardsResult: !0 })) : Hi(s, r, i, t).pipe(_(a => a && Li(a) ? Vi(r, o, t, n) : f(a)), R(a => N(h({}, e), { guardsResult: a }))); }); }
function Hi(t, n, e, r) { return $(t).pipe(_(i => Yi(i.component, i.route, e, n, r)), oe(i => i !== !0, !0)); }
function Vi(t, n, e, r) { return $(n).pipe(Xe(i => Gn(Wi(i.route.parent, r), Gi(i.route, r), Ki(t, i.path, e), Qi(t, i.route, e))), oe(i => i !== !0, !0)); }
function Gi(t, n) { return t !== null && n && n(new lt(t)), f(!0); }
function Wi(t, n) { return t !== null && n && n(new ut(t)), f(!0); }
function Qi(t, n, e) { let r = n.routeConfig ? n.routeConfig.canActivate : null; if (!r || r.length === 0)
    return f(!0); let i = r.map(o => Qt(() => { let s = Ce(n) ?? e, a = we(o, s), u = ki(a) ? a.canActivate(n, t) : x(s, () => a(n, t)); return H(u).pipe(oe()); })); return f(i).pipe(Se()); }
function Ki(t, n, e) { let r = n[n.length - 1], o = n.slice(0, n.length - 1).reverse().map(s => Pi(s)).filter(s => s !== null).map(s => Qt(() => { let a = s.guards.map(u => { let c = Ce(s.node) ?? e, g = we(u, c), S = $i(g) ? g.canActivateChild(r, t) : x(c, () => g(r, t)); return H(S).pipe(oe()); }); return f(a).pipe(Se()); })); return f(o).pipe(Se()); }
function Yi(t, n, e, r, i) { let o = n && n.routeConfig ? n.routeConfig.canDeactivate : null; if (!o || o.length === 0)
    return f(!0); let s = o.map(a => { let u = Ce(n) ?? i, c = we(a, u), g = zi(c) ? c.canDeactivate(t, n, e, r) : x(u, () => c(t, n, e, r)); return H(g).pipe(oe()); }); return f(s).pipe(Se()); }
function Zi(t, n, e, r) { let i = n.canLoad; if (i === void 0 || i.length === 0)
    return f(!0); let o = i.map(s => { let a = we(s, t), u = ji(a) ? a.canLoad(n, e) : x(t, () => a(n, e)); return H(u); }); return f(o).pipe(Se(), Qr(r)); }
function Qr(t) { return Wn(C(n => { if (typeof n != "boolean")
    throw gt(t, n); }), R(n => n === !0)); }
function Ji(t, n, e, r) { let i = n.canMatch; if (!i || i.length === 0)
    return f(!0); let o = i.map(s => { let a = we(s, t), u = Fi(a) ? a.canMatch(n, e) : x(t, () => a(n, e)); return H(u); }); return f(o).pipe(Se(), Qr(r)); }
var je = class {
    segmentGroup;
    constructor(n) { this.segmentGroup = n || null; }
}, ke = class extends Error {
    urlTree;
    constructor(n) { super(), this.urlTree = n; }
};
function ce(t) { return Rt(new je(t)); }
function Xi(t) { return Rt(new I(4e3, !1)); }
function eo(t) { return Rt(Vr(!1, w.GuardRejected)); }
var qt = class {
    urlSerializer;
    urlTree;
    constructor(n, e) { this.urlSerializer = n, this.urlTree = e; }
    lineralizeSegments(n, e) { let r = [], i = e.root; for (;;) {
        if (r = r.concat(i.segments), i.numberOfChildren === 0)
            return f(r);
        if (i.numberOfChildren > 1 || !i.children[d])
            return Xi(`${n.redirectTo}`);
        i = i.children[d];
    } }
    applyRedirectCommands(n, e, r, i, o) { return to(e, i, o).pipe(R(s => { if (s instanceof z)
        throw new ke(s); let a = this.applyRedirectCreateUrlTree(s, this.urlSerializer.parse(s), n, r); if (s[0] === "/")
        throw new ke(a); return a; })); }
    applyRedirectCreateUrlTree(n, e, r, i) { let o = this.createSegmentGroup(n, e.root, r, i); return new z(o, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment); }
    createQueryParams(n, e) { let r = {}; return Object.entries(n).forEach(([i, o]) => { if (typeof o == "string" && o[0] === ":") {
        let a = o.substring(1);
        r[i] = e[a];
    }
    else
        r[i] = o; }), r; }
    createSegmentGroup(n, e, r, i) { let o = this.createSegments(n, e.segments, r, i), s = {}; return Object.entries(e.children).forEach(([a, u]) => { s[a] = this.createSegmentGroup(n, u, r, i); }), new v(o, s); }
    createSegments(n, e, r, i) { return e.map(o => o.path[0] === ":" ? this.findPosParam(n, o, i) : this.findOrReturn(o, r)); }
    findPosParam(n, e, r) { let i = r[e.path.substring(1)]; if (!i)
        throw new I(4001, !1); return i; }
    findOrReturn(n, e) { let r = 0; for (let i of e) {
        if (i.path === n.path)
            return e.splice(r), i;
        r++;
    } return n; }
};
function to(t, n, e) { if (typeof t == "string")
    return f(t); let r = t, { queryParams: i, fragment: o, routeConfig: s, url: a, outlet: u, params: c, data: g, title: S } = n; return H(x(e, () => r({ params: c, data: g, queryParams: i, fragment: o, routeConfig: s, url: a, outlet: u, title: S }))); }
var Bt = { matched: !1, consumedSegments: [], remainingSegments: [], parameters: {}, positionalParamSegments: {} };
function ro(t, n, e, r, i) { let o = Kr(t, n, e); return o.matched ? (r = Ii(n, r), Ji(r, n, e, i).pipe(R(s => s === !0 ? o : h({}, Bt)))) : f(o); }
function Kr(t, n, e) { if (n.path === "**")
    return no(e); if (n.path === "")
    return n.pathMatch === "full" && (t.hasChildren() || e.length > 0) ? h({}, Bt) : { matched: !0, consumedSegments: [], remainingSegments: e, parameters: {}, positionalParamSegments: {} }; let i = (n.matcher || Ir)(e, t, n); if (!i)
    return h({}, Bt); let o = {}; Object.entries(i.posParams ?? {}).forEach(([a, u]) => { o[a] = u.path; }); let s = i.consumed.length > 0 ? h(h({}, o), i.consumed[i.consumed.length - 1].parameters) : o; return { matched: !0, consumedSegments: i.consumed, remainingSegments: e.slice(i.consumed.length), parameters: s, positionalParamSegments: i.posParams ?? {} }; }
function no(t) { return { matched: !0, parameters: t.length > 0 ? Tr(t).parameters : {}, consumedSegments: t, remainingSegments: [], positionalParamSegments: {} }; }
function mr(t, n, e, r) { return e.length > 0 && so(t, e, r) ? { segmentGroup: new v(n, oo(r, new v(e, t.children))), slicedSegments: [] } : e.length === 0 && ao(t, e, r) ? { segmentGroup: new v(t.segments, io(t, e, r, t.children)), slicedSegments: e } : { segmentGroup: new v(t.segments, t.children), slicedSegments: e }; }
function io(t, n, e, r) { let i = {}; for (let o of e)
    if (yt(t, n, o) && !r[P(o)]) {
        let s = new v([], {});
        i[P(o)] = s;
    } return h(h({}, r), i); }
function oo(t, n) { let e = {}; e[d] = n; for (let r of t)
    if (r.path === "" && P(r) !== d) {
        let i = new v([], {});
        e[P(r)] = i;
    } return e; }
function so(t, n, e) { return e.some(r => yt(t, n, r) && P(r) !== d); }
function ao(t, n, e) { return e.some(r => yt(t, n, r)); }
function yt(t, n, e) { return (t.hasChildren() || n.length > 0) && e.pathMatch === "full" ? !1 : e.path === ""; }
function uo(t, n, e) { return n.length === 0 && !t.children[e]; }
var Ht = class {
};
function co(t, n, e, r, i, o, s = "emptyOnly") { return new Vt(t, n, e, r, i, s, o).recognize(); }
var lo = 31, Vt = class {
    injector;
    configLoader;
    rootComponentType;
    config;
    urlTree;
    paramsInheritanceStrategy;
    urlSerializer;
    applyRedirects;
    absoluteRedirectCount = 0;
    allowRedirects = !0;
    constructor(n, e, r, i, o, s, a) { this.injector = n, this.configLoader = e, this.rootComponentType = r, this.config = i, this.urlTree = o, this.paramsInheritanceStrategy = s, this.urlSerializer = a, this.applyRedirects = new qt(this.urlSerializer, this.urlTree); }
    noMatchError(n) { return new I(4002, `'${n.segmentGroup}'`); }
    recognize() { let n = mr(this.urlTree.root, [], [], this.config).segmentGroup; return this.match(n).pipe(R(({ children: e, rootSnapshot: r }) => { let i = new T(r, e), o = new xe("", i), s = xr(r, [], this.urlTree.queryParams, this.urlTree.fragment); return s.queryParams = this.urlTree.queryParams, o.url = this.urlSerializer.serialize(s), { state: o, tree: s }; })); }
    match(n) { let e = new re([], Object.freeze({}), Object.freeze(h({}, this.urlTree.queryParams)), this.urlTree.fragment, Object.freeze({}), d, this.rootComponentType, null, {}); return this.processSegmentGroup(this.injector, this.config, n, d, e).pipe(R(r => ({ children: r, rootSnapshot: e })), Te(r => { if (r instanceof ke)
        return this.urlTree = r.urlTree, this.match(r.urlTree.root); throw r instanceof je ? this.noMatchError(r) : r; })); }
    processSegmentGroup(n, e, r, i, o) { return r.segments.length === 0 && r.hasChildren() ? this.processChildren(n, e, r, o) : this.processSegment(n, e, r, r.segments, i, !0, o).pipe(R(s => s instanceof T ? [s] : [])); }
    processChildren(n, e, r, i) { let o = []; for (let s of Object.keys(r.children))
        s === "primary" ? o.unshift(s) : o.push(s); return $(o).pipe(Xe(s => { let a = r.children[s], u = Ai(e, s); return this.processSegmentGroup(n, u, a, s, i); }), Zn((s, a) => (s.push(...a), s)), Cr(null), Jn(), _(s => { if (s === null)
        return ce(r); let a = Yr(s); return ho(a), f(a); })); }
    processSegment(n, e, r, i, o, s, a) { return $(e).pipe(Xe(u => this.processSegmentAgainstRoute(u._injector ?? n, e, u, r, i, o, s, a).pipe(Te(c => { if (c instanceof je)
        return f(null); throw c; }))), oe(u => !!u), Te(u => { if (Wr(u))
        return uo(r, i, o) ? f(new Ht) : ce(r); throw u; })); }
    processSegmentAgainstRoute(n, e, r, i, o, s, a, u) { return P(r) !== s && (s === d || !yt(i, o, r)) ? ce(i) : r.redirectTo === void 0 ? this.matchSegmentAgainstRoute(n, i, r, o, s, u) : this.allowRedirects && a ? this.expandSegmentAgainstRouteUsingRedirect(n, i, e, r, o, s, u) : ce(i); }
    expandSegmentAgainstRouteUsingRedirect(n, e, r, i, o, s, a) { let { matched: u, parameters: c, consumedSegments: g, positionalParamSegments: S, remainingSegments: D } = Kr(e, i, o); if (!u)
        return ce(e); typeof i.redirectTo == "string" && i.redirectTo[0] === "/" && (this.absoluteRedirectCount++, this.absoluteRedirectCount > lo && (this.allowRedirects = !1)); let G = new re(o, c, Object.freeze(h({}, this.urlTree.queryParams)), this.urlTree.fragment, Rr(i), P(i), i.component ?? i._loadedComponent ?? null, i, yr(i)), A = pt(G, a, this.paramsInheritanceStrategy); return G.params = Object.freeze(A.params), G.data = Object.freeze(A.data), this.applyRedirects.applyRedirectCommands(g, i.redirectTo, S, G, n).pipe(E(ee => this.applyRedirects.lineralizeSegments(i, ee)), _(ee => this.processSegment(n, r, e, ee.concat(D), s, !1, a))); }
    matchSegmentAgainstRoute(n, e, r, i, o, s) { let a = ro(e, r, i, n, this.urlSerializer); return r.path === "**" && (e.children = {}), a.pipe(E(u => u.matched ? (n = r._injector ?? n, this.getChildConfig(n, r, i).pipe(E(({ routes: c }) => { let g = r._loadedInjector ?? n, { parameters: S, consumedSegments: D, remainingSegments: G } = u, A = new re(D, S, Object.freeze(h({}, this.urlTree.queryParams)), this.urlTree.fragment, Rr(r), P(r), r.component ?? r._loadedComponent ?? null, r, yr(r)), ue = pt(A, s, this.paramsInheritanceStrategy); A.params = Object.freeze(ue.params), A.data = Object.freeze(ue.data); let { segmentGroup: ee, slicedSegments: Tt } = mr(e, D, G, c); if (Tt.length === 0 && ee.hasChildren())
        return this.processChildren(g, c, ee, A).pipe(R(Ge => new T(A, Ge))); if (c.length === 0 && Tt.length === 0)
        return f(new T(A, [])); let Tn = P(r) === o; return this.processSegment(g, c, ee, Tt, Tn ? d : o, !0, A).pipe(R(Ge => new T(A, Ge instanceof T ? [Ge] : []))); }))) : ce(e))); }
    getChildConfig(n, e, r) { return e.children ? f({ routes: e.children, injector: n }) : e.loadChildren ? e._loadedRoutes !== void 0 ? f({ routes: e._loadedRoutes, injector: e._loadedInjector }) : Zi(n, e, r, this.urlSerializer).pipe(_(i => i ? this.configLoader.loadChildren(n, e).pipe(C(o => { e._loadedRoutes = o.routes, e._loadedInjector = o.injector; })) : eo(e))) : f({ routes: [], injector: n }); }
};
function ho(t) { t.sort((n, e) => n.value.outlet === d ? -1 : e.value.outlet === d ? 1 : n.value.outlet.localeCompare(e.value.outlet)); }
function fo(t) { let n = t.value.routeConfig; return n && n.path === ""; }
function Yr(t) { let n = [], e = new Set; for (let r of t) {
    if (!fo(r)) {
        n.push(r);
        continue;
    }
    let i = n.find(o => r.value.routeConfig === o.value.routeConfig);
    i !== void 0 ? (i.children.push(...r.children), e.add(i)) : n.push(r);
} for (let r of e) {
    let i = Yr(r.children);
    n.push(new T(r.value, i));
} return n.filter(r => !e.has(r)); }
function Rr(t) { return t.data || {}; }
function yr(t) { return t.resolve || {}; }
function po(t, n, e, r, i, o) { return _(s => co(t, n, e, r, s.extractedUrl, i, o).pipe(R(({ state: a, tree: u }) => N(h({}, s), { targetSnapshot: a, urlAfterRedirects: u })))); }
function go(t, n) { return _(e => { let { targetSnapshot: r, guards: { canActivateChecks: i } } = e; if (!i.length)
    return f(e); let o = new Set(i.map(u => u.route)), s = new Set; for (let u of o)
    if (!s.has(u))
        for (let c of Zr(u))
            s.add(c); let a = 0; return $(s).pipe(Xe(u => o.has(u) ? vo(u, r, t, n) : (u.data = pt(u, u.parent, t).resolve, f(void 0))), C(() => a++), wr(1), _(u => a === s.size ? f(e) : W)); }); }
function Zr(t) { let n = t.children.map(e => Zr(e)).flat(); return [t, ...n]; }
function vo(t, n, e, r) { let i = t.routeConfig, o = t._resolve; return i?.title !== void 0 && !qr(i) && (o[$e] = i.title), Qt(() => (t.data = pt(t, t.parent, e).resolve, mo(o, t, n, r).pipe(R(s => (t._resolvedData = s, t.data = h(h({}, t.data), s), null))))); }
function mo(t, n, e, r) { let i = Pt(t); if (i.length === 0)
    return f({}); let o = {}; return $(i).pipe(_(s => Ro(t[s], n, e, r).pipe(oe(), C(a => { if (a instanceof ye)
    throw gt(new K, a); o[s] = a; }))), wr(1), R(() => o), Te(s => Wr(s) ? W : Rt(s))); }
function Ro(t, n, e, r) { let i = Ce(n) ?? r, o = we(t, i), s = o.resolve ? o.resolve(n, e) : x(i, () => o(n, e)); return H(s); }
function Dt(t) { return E(n => { let e = t(n); return e ? $(e).pipe(R(() => n)) : f(n); }); }
var er = (() => { class t {
    buildTitle(e) { let r, i = e.root; for (; i !== void 0;)
        r = this.getResolvedTitleForRoute(i) ?? r, i = i.children.find(o => o.outlet === d); return r; }
    getResolvedTitleForRoute(e) { return e.data[$e]; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: () => p(Jr), providedIn: "root" });
} return t; })(), Jr = (() => { class t extends er {
    title;
    constructor(e) { super(), this.title = e; }
    updateTitle(e) { let r = this.buildTitle(e); r !== void 0 && this.title.setTitle(r); }
    static \u0275fac = function (r) { return new (r || t)(m.\u0275\u0275inject(br.Title)); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), V = new ie("", { providedIn: "root", factory: () => ({}) }), X = new ie(""), St = (() => { class t {
    componentLoaders = new WeakMap;
    childrenLoaders = new WeakMap;
    onLoadStartListener;
    onLoadEndListener;
    compiler = p(xn);
    loadComponent(e, r) { if (this.componentLoaders.get(r))
        return this.componentLoaders.get(r); if (r._loadedComponent)
        return f(r._loadedComponent); this.onLoadStartListener && this.onLoadStartListener(r); let i = H(x(e, () => r.loadComponent())).pipe(R(en), E(tn), C(s => { this.onLoadEndListener && this.onLoadEndListener(r), r._loadedComponent = s; }), Nt(() => { this.componentLoaders.delete(r); })), o = new lr(i, () => new Me).pipe(hr()); return this.componentLoaders.set(r, o), o; }
    loadChildren(e, r) { if (this.childrenLoaders.get(r))
        return this.childrenLoaders.get(r); if (r._loadedRoutes)
        return f({ routes: r._loadedRoutes, injector: r._loadedInjector }); this.onLoadStartListener && this.onLoadStartListener(r); let o = Xr(r, this.compiler, e, this.onLoadEndListener).pipe(Nt(() => { this.childrenLoaders.delete(r); })), s = new lr(o, () => new Me).pipe(hr()); return this.childrenLoaders.set(r, s), s; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function Xr(t, n, e, r) { return H(x(e, () => t.loadChildren())).pipe(R(en), E(tn), _(i => i instanceof Ln || Array.isArray(i) ? f(i) : $(n.compileModuleAsync(i))), R(i => { r && r(t); let o, s, a = !1; return Array.isArray(i) ? (s = i, a = !0) : (o = i.create(e).injector, s = o.get(X, [], { optional: !0, self: !0 }).flat()), { routes: s.map(Xt), injector: o }; })); }
function yo(t) { return t && typeof t == "object" && "default" in t; }
function en(t) { return yo(t) ? t.default : t; }
function tn(t) { return f(t); }
var Ct = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: () => p(So), providedIn: "root" });
} return t; })(), So = (() => { class t {
    shouldProcessUrl(e) { return !0; }
    extract(e) { return e; }
    merge(e, r) { return e; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), tr = new ie(""), rr = new ie("");
function rn(t, n, e) { let r = t.get(rr), i = t.get(En); if (!i.startViewTransition || r.skipNextTransition)
    return r.skipNextTransition = !1, new Promise(c => setTimeout(c)); let o, s = new Promise(c => { o = c; }), a = i.startViewTransition(() => (o(), Co(t))); a.ready.catch(c => { }); let { onViewTransitionCreated: u } = r; return u && x(t, () => u({ transition: a, from: n, to: e })), s; }
function Co(t) { return new Promise(n => { jn({ read: () => setTimeout(n) }, { injector: t }); }); }
var wt = new ie(""), qe = (() => { class t {
    currentNavigation = kn(null, { equal: () => !1 });
    currentTransition = null;
    lastSuccessfulNavigation = null;
    events = new Me;
    transitionAbortWithErrorSubject = new Me;
    configLoader = p(St);
    environmentInjector = p(Sr);
    destroyRef = p($n);
    urlSerializer = p(J);
    rootContexts = p(se);
    location = p(Gt);
    inputBindingEnabled = p(ze, { optional: !0 }) !== null;
    titleStrategy = p(er);
    options = p(V, { optional: !0 }) || {};
    paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
    urlHandlingStrategy = p(Ct);
    createViewTransition = p(tr, { optional: !0 });
    navigationErrorHandler = p(wt, { optional: !0 });
    navigationId = 0;
    get hasRequestedNavigation() { return this.navigationId !== 0; }
    transitions;
    afterPreactivation = () => f(void 0);
    rootComponentType = null;
    destroyed = !1;
    constructor() { let e = i => this.events.next(new st(i)), r = i => this.events.next(new at(i)); this.configLoader.onLoadEndListener = r, this.configLoader.onLoadStartListener = e, this.destroyRef.onDestroy(() => { this.destroyed = !0; }); }
    complete() { this.transitions?.complete(); }
    handleNavigationRequest(e) { let r = ++this.navigationId; Ae(() => { this.transitions?.next(N(h({}, e), { extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl), targetSnapshot: null, targetRouterState: null, guards: { canActivateChecks: [], canDeactivateChecks: [] }, guardsResult: null, abortController: new AbortController, id: r })); }); }
    setupNavigations(e) { return this.transitions = new U(null), this.transitions.pipe(he(r => r !== null), E(r => { let i = !1; return f(r).pipe(E(o => { if (this.navigationId > r.id)
        return this.cancelNavigationTransition(r, "", w.SupersededByNewNavigation), W; this.currentTransition = r, this.currentNavigation.set({ id: o.id, initialUrl: o.rawUrl, extractedUrl: o.extractedUrl, targetBrowserUrl: typeof o.extras.browserUrl == "string" ? this.urlSerializer.parse(o.extras.browserUrl) : o.extras.browserUrl, trigger: o.source, extras: o.extras, previousNavigation: this.lastSuccessfulNavigation ? N(h({}, this.lastSuccessfulNavigation), { previousNavigation: null }) : null, abort: () => o.abortController.abort() }); let s = !e.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl(), a = o.extras.onSameUrlNavigation ?? e.onSameUrlNavigation; if (!s && a !== "reload")
        return this.events.next(new F(o.id, this.urlSerializer.serialize(o.rawUrl), "", ge.IgnoredSameUrlNavigation)), o.resolve(!1), W; if (this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl))
        return f(o).pipe(E(u => (this.events.next(new Z(u.id, this.urlSerializer.serialize(u.extractedUrl), u.source, u.restoredState)), u.id !== this.navigationId ? W : Promise.resolve(u))), po(this.environmentInjector, this.configLoader, this.rootComponentType, e.config, this.urlSerializer, this.paramsInheritanceStrategy), C(u => { r.targetSnapshot = u.targetSnapshot, r.urlAfterRedirects = u.urlAfterRedirects, this.currentNavigation.update(g => (g.finalUrl = u.urlAfterRedirects, g)); let c = new Ue(u.id, this.urlSerializer.serialize(u.extractedUrl), this.urlSerializer.serialize(u.urlAfterRedirects), u.targetSnapshot); this.events.next(c); })); if (s && this.urlHandlingStrategy.shouldProcessUrl(o.currentRawUrl)) {
        let { id: u, extractedUrl: c, source: g, restoredState: S, extras: D } = o, G = new Z(u, this.urlSerializer.serialize(c), g, S);
        this.events.next(G);
        let A = zr(this.rootComponentType).snapshot;
        return this.currentTransition = r = N(h({}, o), { targetSnapshot: A, urlAfterRedirects: c, extras: N(h({}, D), { skipLocationChange: !1, replaceUrl: !1 }) }), this.currentNavigation.update(ue => (ue.finalUrl = c, ue)), f(r);
    }
    else
        return this.events.next(new F(o.id, this.urlSerializer.serialize(o.extractedUrl), "", ge.IgnoredByUrlHandlingStrategy)), o.resolve(!1), W; }), C(o => { let s = new rt(o.id, this.urlSerializer.serialize(o.extractedUrl), this.urlSerializer.serialize(o.urlAfterRedirects), o.targetSnapshot); this.events.next(s); }), R(o => (this.currentTransition = r = N(h({}, o), { guards: Ui(o.targetSnapshot, o.currentSnapshot, this.rootContexts) }), r)), Bi(this.environmentInjector, o => this.events.next(o)), C(o => { if (r.guardsResult = o.guardsResult, o.guardsResult && typeof o.guardsResult != "boolean")
        throw gt(this.urlSerializer, o.guardsResult); let s = new nt(o.id, this.urlSerializer.serialize(o.extractedUrl), this.urlSerializer.serialize(o.urlAfterRedirects), o.targetSnapshot, !!o.guardsResult); this.events.next(s); }), he(o => o.guardsResult ? !0 : (this.cancelNavigationTransition(o, "", w.GuardRejected), !1)), Dt(o => { if (o.guards.canActivateChecks.length !== 0)
        return f(o).pipe(C(s => { let a = new it(s.id, this.urlSerializer.serialize(s.extractedUrl), this.urlSerializer.serialize(s.urlAfterRedirects), s.targetSnapshot); this.events.next(a); }), E(s => { let a = !1; return f(s).pipe(go(this.paramsInheritanceStrategy, this.environmentInjector), C({ next: () => a = !0, complete: () => { a || this.cancelNavigationTransition(s, "", w.NoDataFromResolver); } })); }), C(s => { let a = new ot(s.id, this.urlSerializer.serialize(s.extractedUrl), this.urlSerializer.serialize(s.urlAfterRedirects), s.targetSnapshot); this.events.next(a); })); }), Dt(o => { let s = a => { let u = []; if (a.routeConfig?.loadComponent) {
        let c = Ce(a) ?? this.environmentInjector;
        u.push(this.configLoader.loadComponent(c, a.routeConfig).pipe(C(g => { a.component = g; }), R(() => { })));
    } for (let c of a.children)
        u.push(...s(c)); return u; }; return Wt(s(o.targetSnapshot.root)).pipe(Cr(null), De(1)); }), Dt(() => this.afterPreactivation()), E(() => { let { currentSnapshot: o, targetSnapshot: s } = r, a = this.createViewTransition?.(this.environmentInjector, o.root, s.root); return a ? $(a).pipe(R(() => r)) : f(r); }), R(o => { let s = Ei(e.routeReuseStrategy, o.targetSnapshot, o.currentRouterState); return this.currentTransition = r = N(h({}, o), { targetRouterState: s }), this.currentNavigation.update(a => (a.targetRouterState = s, a)), r; }), C(() => { this.events.next(new Pe); }), Ni(this.rootContexts, e.routeReuseStrategy, o => this.events.next(o), this.inputBindingEnabled), De(1), dr(new Qn(o => { let s = r.abortController.signal, a = () => o.next(); return s.addEventListener("abort", a), () => s.removeEventListener("abort", a); }).pipe(he(() => !i && !r.targetRouterState), C(() => { this.cancelNavigationTransition(r, r.abortController.signal.reason + "", w.Aborted); }))), C({ next: o => { i = !0, this.lastSuccessfulNavigation = Ae(this.currentNavigation), this.events.next(new M(o.id, this.urlSerializer.serialize(o.extractedUrl), this.urlSerializer.serialize(o.urlAfterRedirects))), this.titleStrategy?.updateTitle(o.targetRouterState.snapshot), o.resolve(!0); }, complete: () => { i = !0; } }), dr(this.transitionAbortWithErrorSubject.pipe(C(o => { throw o; }))), Nt(() => { i || this.cancelNavigationTransition(r, "", w.SupersededByNewNavigation), this.currentTransition?.id === r.id && (this.currentNavigation.set(null), this.currentTransition = null); }), Te(o => { if (this.destroyed)
        return r.resolve(!1), W; if (i = !0, Gr(o))
        this.events.next(new k(r.id, this.urlSerializer.serialize(r.extractedUrl), o.message, o.cancellationCode)), Di(o) ? this.events.next(new Re(o.url, o.navigationBehaviorOptions)) : r.resolve(!1);
    else {
        let s = new ve(r.id, this.urlSerializer.serialize(r.extractedUrl), o, r.targetSnapshot ?? void 0);
        try {
            let a = x(this.environmentInjector, () => this.navigationErrorHandler?.(s));
            if (a instanceof ye) {
                let { message: u, cancellationCode: c } = gt(this.urlSerializer, a);
                this.events.next(new k(r.id, this.urlSerializer.serialize(r.extractedUrl), u, c)), this.events.next(new Re(a.redirectTo, a.navigationBehaviorOptions));
            }
            else
                throw this.events.next(s), o;
        }
        catch (a) {
            this.options.resolveNavigationPromiseOnError ? r.resolve(!1) : r.reject(a);
        }
    } return W; })); })); }
    cancelNavigationTransition(e, r, i) { let o = new k(e.id, this.urlSerializer.serialize(e.extractedUrl), r, i); this.events.next(o), e.resolve(!1); }
    isUpdatingInternalState() { return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString(); }
    isUpdatedBrowserUrl() { let e = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))), r = Ae(this.currentNavigation), i = r?.targetBrowserUrl ?? r?.extractedUrl; return e.toString() !== i?.toString() && !r?.extras.skipLocationChange; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function wo(t) { return t !== fe; }
var nn = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: () => p(bo), providedIn: "root" });
} return t; })(), mt = class {
    shouldDetach(n) { return !1; }
    store(n, e) { }
    shouldAttach(n) { return !1; }
    retrieve(n) { return null; }
    shouldReuseRoute(n, e) { return n.routeConfig === e.routeConfig; }
}, bo = (() => { class t extends mt {
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = m.\u0275\u0275getInheritedFactory(t)))(i || t); }; })();
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), on = (() => { class t {
    urlSerializer = p(J);
    options = p(V, { optional: !0 }) || {};
    canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
    location = p(Gt);
    urlHandlingStrategy = p(Ct);
    urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    currentUrlTree = new z;
    getCurrentUrlTree() { return this.currentUrlTree; }
    rawUrlTree = this.currentUrlTree;
    getRawUrlTree() { return this.rawUrlTree; }
    createBrowserPath({ finalUrl: e, initialUrl: r, targetBrowserUrl: i }) { let o = e !== void 0 ? this.urlHandlingStrategy.merge(e, r) : r, s = i ?? o; return s instanceof z ? this.urlSerializer.serialize(s) : s; }
    commitTransition({ targetRouterState: e, finalUrl: r, initialUrl: i }) { r && e ? (this.currentUrlTree = r, this.rawUrlTree = this.urlHandlingStrategy.merge(r, i), this.routerState = e) : this.rawUrlTree = i; }
    routerState = zr(null);
    getRouterState() { return this.routerState; }
    stateMemento = this.createStateMemento();
    updateStateMemento() { this.stateMemento = this.createStateMemento(); }
    createStateMemento() { return { rawUrlTree: this.rawUrlTree, currentUrlTree: this.currentUrlTree, routerState: this.routerState }; }
    resetInternalState({ finalUrl: e }) { this.routerState = this.stateMemento.routerState, this.currentUrlTree = this.stateMemento.currentUrlTree, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, e ?? this.rawUrlTree); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: () => p(Io), providedIn: "root" });
} return t; })(), Io = (() => { class t extends on {
    currentPageId = 0;
    lastSuccessfulId = -1;
    restoredState() { return this.location.getState(); }
    get browserPageId() { return this.canceledNavigationResolution !== "computed" ? this.currentPageId : this.restoredState()?.\u0275routerPageId ?? this.currentPageId; }
    registerNonRouterCurrentEntryChangeListener(e) { return this.location.subscribe(r => { r.type === "popstate" && setTimeout(() => { e(r.url, r.state, "popstate"); }); }); }
    handleRouterEvent(e, r) { e instanceof Z ? this.updateStateMemento() : e instanceof F ? this.commitTransition(r) : e instanceof Ue ? this.urlUpdateStrategy === "eager" && (r.extras.skipLocationChange || this.setBrowserUrl(this.createBrowserPath(r), r)) : e instanceof Pe ? (this.commitTransition(r), this.urlUpdateStrategy === "deferred" && !r.extras.skipLocationChange && this.setBrowserUrl(this.createBrowserPath(r), r)) : e instanceof k && e.code !== w.SupersededByNewNavigation && e.code !== w.Redirect ? this.restoreHistory(r) : e instanceof ve ? this.restoreHistory(r, !0) : e instanceof M && (this.lastSuccessfulId = e.id, this.currentPageId = this.browserPageId); }
    setBrowserUrl(e, { extras: r, id: i }) { let { replaceUrl: o, state: s } = r; if (this.location.isCurrentPathEqualTo(e) || o) {
        let a = this.browserPageId, u = h(h({}, s), this.generateNgRouterState(i, a));
        this.location.replaceState(e, "", u);
    }
    else {
        let a = h(h({}, s), this.generateNgRouterState(i, this.browserPageId + 1));
        this.location.go(e, "", a);
    } }
    restoreHistory(e, r = !1) { if (this.canceledNavigationResolution === "computed") {
        let i = this.browserPageId, o = this.currentPageId - i;
        o !== 0 ? this.location.historyGo(o) : this.getCurrentUrlTree() === e.finalUrl && o === 0 && (this.resetInternalState(e), this.resetUrlToCurrentUrlTree());
    }
    else
        this.canceledNavigationResolution === "replace" && (r && this.resetInternalState(e), this.resetUrlToCurrentUrlTree()); }
    resetUrlToCurrentUrlTree() { this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)); }
    generateNgRouterState(e, r) { return this.canceledNavigationResolution === "computed" ? { navigationId: e, \u0275routerPageId: r } : { navigationId: e }; }
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = m.\u0275\u0275getInheritedFactory(t)))(i || t); }; })();
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function bt(t, n) { t.events.pipe(he(e => e instanceof M || e instanceof k || e instanceof ve || e instanceof F), R(e => e instanceof M || e instanceof F ? 0 : (e instanceof k ? e.code === w.Redirect || e.code === w.SupersededByNewNavigation : !1) ? 2 : 1), he(e => e !== 2), De(1)).subscribe(() => { n(); }); }
var Ao = { paths: "exact", fragment: "ignored", matrixParams: "ignored", queryParams: "exact" }, To = { paths: "subset", fragment: "ignored", matrixParams: "ignored", queryParams: "subset" }, L = (() => { class t {
    get currentUrlTree() { return this.stateManager.getCurrentUrlTree(); }
    get rawUrlTree() { return this.stateManager.getRawUrlTree(); }
    disposed = !1;
    nonRouterCurrentEntryChangeSubscription;
    console = p(zn);
    stateManager = p(on);
    options = p(V, { optional: !0 }) || {};
    pendingTasks = p(Fn);
    urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    navigationTransitions = p(qe);
    urlSerializer = p(J);
    location = p(Gt);
    urlHandlingStrategy = p(Ct);
    injector = p(Sr);
    _events = new Me;
    get events() { return this._events; }
    get routerState() { return this.stateManager.getRouterState(); }
    navigated = !1;
    routeReuseStrategy = p(nn);
    onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
    config = p(X, { optional: !0 })?.flat() ?? [];
    componentInputBindingEnabled = !!p(ze, { optional: !0 });
    currentNavigation = this.navigationTransitions.currentNavigation.asReadonly();
    constructor() { this.resetConfig(this.config), this.navigationTransitions.setupNavigations(this).subscribe({ error: e => { this.console.warn(e); } }), this.subscribeToNavigationEvents(); }
    eventsSubscription = new Kn;
    subscribeToNavigationEvents() { let e = this.navigationTransitions.events.subscribe(r => { try {
        let i = this.navigationTransitions.currentTransition, o = Ae(this.navigationTransitions.currentNavigation);
        if (i !== null && o !== null) {
            if (this.stateManager.handleRouterEvent(r, o), r instanceof k && r.code !== w.Redirect && r.code !== w.SupersededByNewNavigation)
                this.navigated = !0;
            else if (r instanceof M)
                this.navigated = !0;
            else if (r instanceof Re) {
                let s = r.navigationBehaviorOptions, a = this.urlHandlingStrategy.merge(r.url, i.currentRawUrl), u = h({ browserUrl: i.extras.browserUrl, info: i.extras.info, skipLocationChange: i.extras.skipLocationChange, replaceUrl: i.extras.replaceUrl || this.urlUpdateStrategy === "eager" || wo(i.source) }, s);
                this.scheduleNavigation(a, fe, null, u, { resolve: i.resolve, reject: i.reject, promise: i.promise });
            }
        }
        bi(r) && this._events.next(r);
    }
    catch (i) {
        this.navigationTransitions.transitionAbortWithErrorSubject.next(i);
    } }); this.eventsSubscription.add(e); }
    resetRootComponentType(e) { this.routerState.root.component = e, this.navigationTransitions.rootComponentType = e; }
    initialNavigation() { this.setUpLocationChangeListener(), this.navigationTransitions.hasRequestedNavigation || this.navigateToSyncWithBrowser(this.location.path(!0), fe, this.stateManager.restoredState()); }
    setUpLocationChangeListener() { this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((e, r, i) => { this.navigateToSyncWithBrowser(e, i, r); }); }
    navigateToSyncWithBrowser(e, r, i) { let o = { replaceUrl: !0 }, s = i?.navigationId ? i : null; if (i) {
        let u = h({}, i);
        delete u.navigationId, delete u.\u0275routerPageId, Object.keys(u).length !== 0 && (o.state = u);
    } let a = this.parseUrl(e); this.scheduleNavigation(a, r, s, o).catch(u => { this.disposed || this.injector.get(qn)(u); }); }
    get url() { return this.serializeUrl(this.currentUrlTree); }
    getCurrentNavigation() { return Ae(this.navigationTransitions.currentNavigation); }
    get lastSuccessfulNavigation() { return this.navigationTransitions.lastSuccessfulNavigation; }
    resetConfig(e) { this.config = e.map(Xt), this.navigated = !1; }
    ngOnDestroy() { this.dispose(); }
    dispose() { this._events.unsubscribe(), this.navigationTransitions.complete(), this.nonRouterCurrentEntryChangeSubscription && (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(), this.nonRouterCurrentEntryChangeSubscription = void 0), this.disposed = !0, this.eventsSubscription.unsubscribe(); }
    createUrlTree(e, r = {}) { let { relativeTo: i, queryParams: o, fragment: s, queryParamsHandling: a, preserveFragment: u } = r, c = u ? this.currentUrlTree.fragment : s, g = null; switch (a ?? this.options.defaultQueryParamsHandling) {
        case "merge":
            g = h(h({}, this.currentUrlTree.queryParams), o);
            break;
        case "preserve":
            g = this.currentUrlTree.queryParams;
            break;
        default: g = o || null;
    } g !== null && (g = this.removeEmptyProps(g)); let S; try {
        let D = i ? i.snapshot : this.routerState.snapshot.root;
        S = Lr(D);
    }
    catch {
        (typeof e[0] != "string" || e[0][0] !== "/") && (e = []), S = this.currentUrlTree.root;
    } return jr(S, e, g, c ?? null); }
    navigateByUrl(e, r = { skipLocationChange: !1 }) { let i = Y(e) ? e : this.parseUrl(e), o = this.urlHandlingStrategy.merge(i, this.rawUrlTree); return this.scheduleNavigation(o, fe, null, r); }
    navigate(e, r = { skipLocationChange: !1 }) { return Eo(e), this.navigateByUrl(this.createUrlTree(e, r), r); }
    serializeUrl(e) { return this.urlSerializer.serialize(e); }
    parseUrl(e) { try {
        return this.urlSerializer.parse(e);
    }
    catch {
        return this.console.warn(Bn(4018, !1)), this.urlSerializer.parse("/");
    } }
    isActive(e, r) { let i; if (r === !0 ? i = h({}, Ao) : r === !1 ? i = h({}, To) : i = r, Y(e))
        return fr(this.currentUrlTree, e, i); let o = this.parseUrl(e); return fr(this.currentUrlTree, o, i); }
    removeEmptyProps(e) { return Object.entries(e).reduce((r, [i, o]) => (o != null && (r[i] = o), r), {}); }
    scheduleNavigation(e, r, i, o, s) { if (this.disposed)
        return Promise.resolve(!1); let a, u, c; s ? (a = s.resolve, u = s.reject, c = s.promise) : c = new Promise((S, D) => { a = S, u = D; }); let g = this.pendingTasks.add(); return bt(this, () => { queueMicrotask(() => this.pendingTasks.remove(g)); }), this.navigationTransitions.handleNavigationRequest({ source: r, restoredState: i, currentUrlTree: this.currentUrlTree, currentRawUrl: this.currentUrlTree, rawUrl: e, extras: o, resolve: a, reject: u, promise: c, currentSnapshot: this.routerState.snapshot, currentRouterState: this.routerState }), c.catch(S => Promise.reject(S)); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function Eo(t) { for (let n = 0; n < t.length; n++)
    if (t[n] == null)
        throw new I(4008, !1); }
import * as sn from "@angular/common";
import { LOCATION_INITIALIZED as Oo, ViewportScroller as an, LocationStrategy as sr, HashLocationStrategy as un, Location as Mo, PathLocationStrategy as Do } from "@angular/common";
import * as l from "@angular/core";
import { signal as No, untracked as Uo, inject as b, \u0275INTERNAL_APPLICATION_ERROR_HANDLER as Po, HostAttributeToken as _o, \u0275RuntimeError as As, booleanAttribute as nr, EventEmitter as xo, createEnvironmentInjector as Lo, InjectionToken as He, makeEnvironmentProviders as jo, APP_BOOTSTRAP_LISTENER as cn, Injector as ln, ApplicationRef as ko, \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION as $o, provideAppInitializer as hn, \u0275performanceMarkFeature as zo, ENVIRONMENT_INITIALIZER as Ls, NgZone as dn } from "@angular/core";
import { Subject as fn, of as ae, from as ir } from "rxjs";
import { mergeAll as It, catchError as Fo, filter as qo, concatMap as Bo, mergeMap as Ho } from "rxjs/operators";
var At = (() => { class t {
    router;
    route;
    tabIndexAttribute;
    renderer;
    el;
    locationStrategy;
    reactiveHref = No(null);
    get href() { return Uo(this.reactiveHref); }
    set href(e) { this.reactiveHref.set(e); }
    target;
    queryParams;
    fragment;
    queryParamsHandling;
    state;
    info;
    relativeTo;
    isAnchorElement;
    subscription;
    onChanges = new fn;
    applicationErrorHandler = b(Po);
    options = b(V, { optional: !0 });
    constructor(e, r, i, o, s, a) { this.router = e, this.route = r, this.tabIndexAttribute = i, this.renderer = o, this.el = s, this.locationStrategy = a, this.reactiveHref.set(b(new _o("href"), { optional: !0 })); let u = s.nativeElement.tagName?.toLowerCase(); this.isAnchorElement = u === "a" || u === "area" || !!(typeof customElements == "object" && customElements.get(u)?.observedAttributes?.includes?.("href")), this.isAnchorElement ? this.setTabIndexIfNotOnNativeEl("0") : this.subscribeToNavigationEventsIfNecessary(); }
    subscribeToNavigationEventsIfNecessary() { if (this.subscription !== void 0 || !this.isAnchorElement)
        return; let e = this.preserveFragment, r = i => i === "merge" || i === "preserve"; e ||= r(this.queryParamsHandling), e ||= !this.queryParamsHandling && !r(this.options?.defaultQueryParamsHandling), e && (this.subscription = this.router.events.subscribe(i => { i instanceof M && this.updateHref(); })); }
    preserveFragment = !1;
    skipLocationChange = !1;
    replaceUrl = !1;
    setTabIndexIfNotOnNativeEl(e) { this.tabIndexAttribute != null || this.isAnchorElement || this.applyAttributeValue("tabindex", e); }
    ngOnChanges(e) { this.isAnchorElement && (this.updateHref(), this.subscribeToNavigationEventsIfNecessary()), this.onChanges.next(this); }
    routerLinkInput = null;
    set routerLink(e) { e == null ? (this.routerLinkInput = null, this.setTabIndexIfNotOnNativeEl(null)) : (Y(e) ? this.routerLinkInput = e : this.routerLinkInput = Array.isArray(e) ? e : [e], this.setTabIndexIfNotOnNativeEl("0")); }
    onClick(e, r, i, o, s) { let a = this.urlTree; if (a === null || this.isAnchorElement && (e !== 0 || r || i || o || s || typeof this.target == "string" && this.target != "_self"))
        return !0; let u = { skipLocationChange: this.skipLocationChange, replaceUrl: this.replaceUrl, state: this.state, info: this.info }; return this.router.navigateByUrl(a, u)?.catch(c => { this.applicationErrorHandler(c); }), !this.isAnchorElement; }
    ngOnDestroy() { this.subscription?.unsubscribe(); }
    updateHref() { let e = this.urlTree; this.reactiveHref.set(e !== null && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e)) ?? "" : null); }
    applyAttributeValue(e, r) { let i = this.renderer, o = this.el.nativeElement; r !== null ? i.setAttribute(o, e, r) : i.removeAttribute(o, e); }
    get urlTree() { return this.routerLinkInput === null ? null : Y(this.routerLinkInput) ? this.routerLinkInput : this.router.createUrlTree(this.routerLinkInput, { relativeTo: this.relativeTo !== void 0 ? this.relativeTo : this.route, queryParams: this.queryParams, fragment: this.fragment, queryParamsHandling: this.queryParamsHandling, preserveFragment: this.preserveFragment }); }
    static \u0275fac = function (r) { return new (r || t)(l.\u0275\u0275directiveInject(L), l.\u0275\u0275directiveInject(q), l.\u0275\u0275injectAttribute("tabindex"), l.\u0275\u0275directiveInject(l.Renderer2), l.\u0275\u0275directiveInject(l.ElementRef), l.\u0275\u0275directiveInject(sn.LocationStrategy)); };
    static \u0275dir = l.\u0275\u0275defineDirective({ type: t, selectors: [["", "routerLink", ""]], hostVars: 2, hostBindings: function (r, i) { r & 1 && l.\u0275\u0275listener("click", function (s) { return i.onClick(s.button, s.ctrlKey, s.shiftKey, s.altKey, s.metaKey); }), r & 2 && l.\u0275\u0275attribute("href", i.reactiveHref(), l.\u0275\u0275sanitizeUrlOrResourceUrl)("target", i.target); }, inputs: { target: "target", queryParams: "queryParams", fragment: "fragment", queryParamsHandling: "queryParamsHandling", state: "state", info: "info", relativeTo: "relativeTo", preserveFragment: [2, "preserveFragment", "preserveFragment", nr], skipLocationChange: [2, "skipLocationChange", "skipLocationChange", nr], replaceUrl: [2, "replaceUrl", "replaceUrl", nr], routerLink: "routerLink" }, features: [l.\u0275\u0275NgOnChangesFeature] });
} return t; })(), Vo = (() => { class t {
    router;
    element;
    renderer;
    cdr;
    link;
    links;
    classes = [];
    routerEventsSubscription;
    linkInputChangesSubscription;
    _isActive = !1;
    get isActive() { return this._isActive; }
    routerLinkActiveOptions = { exact: !1 };
    ariaCurrentWhenActive;
    isActiveChange = new xo;
    constructor(e, r, i, o, s) { this.router = e, this.element = r, this.renderer = i, this.cdr = o, this.link = s, this.routerEventsSubscription = e.events.subscribe(a => { a instanceof M && this.update(); }); }
    ngAfterContentInit() { ae(this.links.changes, ae(null)).pipe(It()).subscribe(e => { this.update(), this.subscribeToEachLinkOnChanges(); }); }
    subscribeToEachLinkOnChanges() { this.linkInputChangesSubscription?.unsubscribe(); let e = [...this.links.toArray(), this.link].filter(r => !!r).map(r => r.onChanges); this.linkInputChangesSubscription = ir(e).pipe(It()).subscribe(r => { this._isActive !== this.isLinkActive(this.router)(r) && this.update(); }); }
    set routerLinkActive(e) { let r = Array.isArray(e) ? e : e.split(" "); this.classes = r.filter(i => !!i); }
    ngOnChanges(e) { this.update(); }
    ngOnDestroy() { this.routerEventsSubscription.unsubscribe(), this.linkInputChangesSubscription?.unsubscribe(); }
    update() { !this.links || !this.router.navigated || queueMicrotask(() => { let e = this.hasActiveLinks(); this.classes.forEach(r => { e ? this.renderer.addClass(this.element.nativeElement, r) : this.renderer.removeClass(this.element.nativeElement, r); }), e && this.ariaCurrentWhenActive !== void 0 ? this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString()) : this.renderer.removeAttribute(this.element.nativeElement, "aria-current"), this._isActive !== e && (this._isActive = e, this.cdr.markForCheck(), this.isActiveChange.emit(e)); }); }
    isLinkActive(e) { let r = Go(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : this.routerLinkActiveOptions.exact || !1; return i => { let o = i.urlTree; return o ? e.isActive(o, r) : !1; }; }
    hasActiveLinks() { let e = this.isLinkActive(this.router); return this.link && e(this.link) || this.links.some(e); }
    static \u0275fac = function (r) { return new (r || t)(l.\u0275\u0275directiveInject(L), l.\u0275\u0275directiveInject(l.ElementRef), l.\u0275\u0275directiveInject(l.Renderer2), l.\u0275\u0275directiveInject(l.ChangeDetectorRef), l.\u0275\u0275directiveInject(At, 8)); };
    static \u0275dir = l.\u0275\u0275defineDirective({ type: t, selectors: [["", "routerLinkActive", ""]], contentQueries: function (r, i, o) { if (r & 1 && l.\u0275\u0275contentQuery(o, At, 5), r & 2) {
            let s;
            l.\u0275\u0275queryRefresh(s = l.\u0275\u0275loadQuery()) && (i.links = s);
        } }, inputs: { routerLinkActiveOptions: "routerLinkActiveOptions", ariaCurrentWhenActive: "ariaCurrentWhenActive", routerLinkActive: "routerLinkActive" }, outputs: { isActiveChange: "isActiveChange" }, exportAs: ["routerLinkActive"], features: [l.\u0275\u0275NgOnChangesFeature] });
} return t; })();
function Go(t) { return !!t.paths; }
var Be = class {
}, Wo = (() => { class t {
    preload(e, r) { return r().pipe(Fo(() => ae(null))); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), Qo = (() => { class t {
    preload(e, r) { return ae(null); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), pn = (() => { class t {
    router;
    injector;
    preloadingStrategy;
    loader;
    subscription;
    constructor(e, r, i, o) { this.router = e, this.injector = r, this.preloadingStrategy = i, this.loader = o; }
    setUpPreloading() { this.subscription = this.router.events.pipe(qo(e => e instanceof M), Bo(() => this.preload())).subscribe(() => { }); }
    preload() { return this.processRoutes(this.injector, this.router.config); }
    ngOnDestroy() { this.subscription && this.subscription.unsubscribe(); }
    processRoutes(e, r) { let i = []; for (let o of r) {
        o.providers && !o._injector && (o._injector = Lo(o.providers, e, `Route: ${o.path}`));
        let s = o._injector ?? e, a = o._loadedInjector ?? s;
        (o.loadChildren && !o._loadedRoutes && o.canLoad === void 0 || o.loadComponent && !o._loadedComponent) && i.push(this.preloadConfig(s, o)), (o.children || o._loadedRoutes) && i.push(this.processRoutes(a, o.children ?? o._loadedRoutes));
    } return ir(i).pipe(It()); }
    preloadConfig(e, r) { return this.preloadingStrategy.preload(r, () => { let i; r.loadChildren && r.canLoad === void 0 ? i = this.loader.loadChildren(e, r) : i = ae(null); let o = i.pipe(Ho(s => s === null ? ae(void 0) : (r._loadedRoutes = s.routes, r._loadedInjector = s.injector, this.processRoutes(s.injector ?? e, s.routes)))); if (r.loadComponent && !r._loadedComponent) {
        let s = this.loader.loadComponent(e, r);
        return ir([o, s]).pipe(It());
    }
    else
        return o; }); }
    static \u0275fac = function (r) { return new (r || t)(l.\u0275\u0275inject(L), l.\u0275\u0275inject(l.EnvironmentInjector), l.\u0275\u0275inject(Be), l.\u0275\u0275inject(St)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), ar = new He(""), gn = (() => { class t {
    urlSerializer;
    transitions;
    viewportScroller;
    zone;
    options;
    routerEventsSubscription;
    scrollEventsSubscription;
    lastId = 0;
    lastSource = fe;
    restoredId = 0;
    store = {};
    constructor(e, r, i, o, s = {}) { this.urlSerializer = e, this.transitions = r, this.viewportScroller = i, this.zone = o, this.options = s, s.scrollPositionRestoration ||= "disabled", s.anchorScrolling ||= "disabled"; }
    init() { this.options.scrollPositionRestoration !== "disabled" && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents(); }
    createScrollEvents() { return this.transitions.events.subscribe(e => { e instanceof Z ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = e.navigationTrigger, this.restoredId = e.restoredState ? e.restoredState.navigationId : 0) : e instanceof M ? (this.lastId = e.id, this.scheduleScrollEvent(e, this.urlSerializer.parse(e.urlAfterRedirects).fragment)) : e instanceof F && e.code === ge.IgnoredSameUrlNavigation && (this.lastSource = void 0, this.restoredId = 0, this.scheduleScrollEvent(e, this.urlSerializer.parse(e.url).fragment)); }); }
    consumeScrollEvents() { return this.transitions.events.subscribe(e => { if (!(e instanceof me))
        return; let r = { behavior: "instant" }; e.position ? this.options.scrollPositionRestoration === "top" ? this.viewportScroller.scrollToPosition([0, 0], r) : this.options.scrollPositionRestoration === "enabled" && this.viewportScroller.scrollToPosition(e.position, r) : e.anchor && this.options.anchorScrolling === "enabled" ? this.viewportScroller.scrollToAnchor(e.anchor) : this.options.scrollPositionRestoration !== "disabled" && this.viewportScroller.scrollToPosition([0, 0]); }); }
    scheduleScrollEvent(e, r) { this.zone.runOutsideAngular(() => cr(this, null, function* () { yield new Promise(i => { setTimeout(i), typeof requestAnimationFrame < "u" && requestAnimationFrame(i); }), this.zone.run(() => { this.transitions.events.next(new me(e, this.lastSource === "popstate" ? this.store[this.restoredId] : null, r)); }); })); }
    ngOnDestroy() { this.routerEventsSubscription?.unsubscribe(), this.scrollEventsSubscription?.unsubscribe(); }
    static \u0275fac = function (r) { l.\u0275\u0275invalidFactory(); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })();
function Ko(t, ...n) { return jo([{ provide: X, multi: !0, useValue: t }, [], { provide: q, useFactory: vn, deps: [L] }, { provide: cn, multi: !0, useFactory: mn }, n.map(e => e.\u0275providers)]); }
function vn(t) { return t.routerState.root; }
function B(t, n) { return { \u0275kind: t, \u0275providers: n }; }
function Yo(t) { return [{ provide: X, multi: !0, useValue: t }, []]; }
function Zo(t = {}) { return B(4, [{ provide: ar, useFactory: () => { let e = b(an), r = b(dn), i = b(qe), o = b(J); return new gn(o, i, e, r, t); } }]); }
function mn() { let t = b(ln); return n => { let e = t.get(ko); if (n !== e.components[0])
    return; let r = t.get(L), i = t.get(Rn); t.get(ur) === 1 && r.initialNavigation(), t.get(Cn, null, { optional: !0 })?.setUpPreloading(), t.get(ar, null, { optional: !0 })?.init(), r.resetRootComponentType(e.componentTypes[0]), i.closed || (i.next(), i.complete(), i.unsubscribe()); }; }
var Rn = new He("", { factory: () => new fn }), ur = new He("", { providedIn: "root", factory: () => 1 });
function yn() { let t = [{ provide: $o, useValue: !0 }, { provide: ur, useValue: 0 }, hn(() => { let n = b(ln); return n.get(Oo, Promise.resolve()).then(() => new Promise(r => { let i = n.get(L), o = n.get(Rn); bt(i, () => { r(!0); }), n.get(qe).afterPreactivation = () => (r(!0), o.closed ? ae(void 0) : o), i.initialNavigation(); })); })]; return B(2, t); }
function Sn() { let t = [hn(() => { b(L).setUpLocationChangeListener(); }), { provide: ur, useValue: 2 }]; return B(3, t); }
function Jo() { let t = []; return t = [], B(1, t); }
var Cn = new He("");
function wn(t) { return B(0, [{ provide: Cn, useExisting: pn }, { provide: Be, useExisting: t }]); }
function Xo(t) { return B(5, [{ provide: V, useValue: t }]); }
function es() { return B(6, [{ provide: sr, useClass: un }]); }
function ts(t) { return B(7, [{ provide: wt, useValue: t }]); }
function bn() { return B(8, [Zt, { provide: ze, useExisting: Zt }]); }
function In(t) { zo("NgRouterViewTransitions"); let n = [{ provide: tr, useValue: rn }, { provide: rr, useValue: h({ skipNextTransition: !!t?.skipInitialTransition }, t) }]; return B(9, n); }
var An = [Mo, { provide: J, useClass: K }, L, se, { provide: q, useFactory: vn, deps: [L] }, St, []], rs = (() => { class t {
    constructor() { }
    static forRoot(e, r) { return { ngModule: t, providers: [An, [], { provide: X, multi: !0, useValue: e }, [], r?.errorHandler ? { provide: wt, useValue: r.errorHandler } : [], { provide: V, useValue: r || {} }, r?.useHash ? is() : os(), ns(), r?.preloadingStrategy ? wn(r.preloadingStrategy).\u0275providers : [], r?.initialNavigation ? ss(r) : [], r?.bindToComponentInputs ? bn().\u0275providers : [], r?.enableViewTransitions ? In().\u0275providers : [], as()] }; }
    static forChild(e) { return { ngModule: t, providers: [{ provide: X, multi: !0, useValue: e }] }; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275mod = l.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = l.\u0275\u0275defineInjector({});
} return t; })();
function ns() { return { provide: ar, useFactory: () => { let t = b(an), n = b(dn), e = b(V), r = b(qe), i = b(J); return e.scrollOffset && t.setOffset(e.scrollOffset), new gn(i, r, t, n, e); } }; }
function is() { return { provide: sr, useClass: un }; }
function os() { return { provide: sr, useClass: Do }; }
function ss(t) { return [t.initialNavigation === "disabled" ? Sn().\u0275providers : [], t.initialNavigation === "enabledBlocking" ? yn().\u0275providers : []]; }
var or = new He("");
function as() { return [{ provide: or, useFactory: mn }, { provide: cn, multi: !0, useExisting: or }]; }
import { inject as Ve, Version as us } from "@angular/core";
import "@angular/common";
import "rxjs";
import "rxjs/operators";
import "@angular/platform-browser";
function Ys(t) { return t.map(n => (...e) => Ve(n).canMatch(...e)); }
function Zs(t) { return t.map(n => (...e) => Ve(n).canActivate(...e)); }
function Js(t) { return t.map(n => (...e) => Ve(n).canActivateChild(...e)); }
function Xs(t) { return t.map(n => (...e) => Ve(n).canDeactivate(...e)); }
function ea(t) { return (...n) => Ve(t).resolve(...n); }
var ta = new us("20.3.16");
export { q as ActivatedRoute, re as ActivatedRouteSnapshot, ht as ActivationEnd, lt as ActivationStart, mt as BaseRouteReuseStrategy, ct as ChildActivationEnd, ut as ChildActivationStart, se as ChildrenOutletContexts, Jr as DefaultTitleStrategy, K as DefaultUrlSerializer, y as EventType, nt as GuardsCheckEnd, rt as GuardsCheckStart, k as NavigationCancel, w as NavigationCancellationCode, M as NavigationEnd, ve as NavigationError, F as NavigationSkipped, ge as NavigationSkippedCode, Z as NavigationStart, Qo as NoPreloading, dt as OutletContext, d as PRIMARY_OUTLET, Wo as PreloadAllModules, Be as PreloadingStrategy, V as ROUTER_CONFIGURATION, or as ROUTER_INITIALIZER, Br as ROUTER_OUTLET_DATA, X as ROUTES, ye as RedirectCommand, ot as ResolveEnd, it as ResolveStart, at as RouteConfigLoadEnd, st as RouteConfigLoadStart, nn as RouteReuseStrategy, L as Router, O as RouterEvent, At as RouterLink, Vo as RouterLinkActive, At as RouterLinkWithHref, rs as RouterModule, Yt as RouterOutlet, pn as RouterPreloader, _e as RouterState, xe as RouterStateSnapshot, Ue as RoutesRecognized, me as Scroll, er as TitleStrategy, Ct as UrlHandlingStrategy, Q as UrlSegment, v as UrlSegmentGroup, J as UrlSerializer, z as UrlTree, ta as VERSION, ne as convertToParamMap, xr as createUrlTreeFromSnapshot, Ir as defaultUrlMatcher, Zs as mapToCanActivate, Js as mapToCanActivateChild, Xs as mapToCanDeactivate, Ys as mapToCanMatch, ea as mapToResolve, Ko as provideRouter, Yo as provideRoutes, bn as withComponentInputBinding, Jo as withDebugTracing, Sn as withDisabledInitialNavigation, yn as withEnabledBlockingInitialNavigation, es as withHashLocation, Zo as withInMemoryScrolling, ts as withNavigationErrorHandler, wn as withPreloading, Xo as withRouterConfig, In as withViewTransitions, Jt as \u0275EmptyOutletComponent, An as \u0275ROUTER_PROVIDERS, bt as \u0275afterNextNavigation, Xr as \u0275loadChildren };
/*! Bundled license information:

@angular/router/fesm2022/router2.mjs:
@angular/router/fesm2022/router_module.mjs:
@angular/router/fesm2022/router.mjs:
  (**
   * @license Angular v20.3.16
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
