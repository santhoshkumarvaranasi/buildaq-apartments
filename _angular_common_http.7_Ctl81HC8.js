import { a as be, b as Pe } from "@nf-internal/chunk-TPMJASNU";
import { a as V, c as we, d as re } from "@nf-internal/chunk-4CLCTAJ7";
import * as l from "@angular/core";
import { \u0275RuntimeError as A, InjectionToken as D, inject as v, NgZone as dt, DestroyRef as lt, \u0275formatRuntimeError as lr, PendingTasks as xe, runInInjectionContext as de, DOCUMENT as Fe, makeEnvironmentProviders as ut } from "@angular/core";
import { concatMap as ht, filter as ft, map as $, finalize as je, switchMap as pt } from "rxjs/operators";
import { of as Le, Observable as le, from as mt } from "rxjs";
var j = class {
}, L = class {
}, w = class e {
    headers;
    normalizedNames = new Map;
    lazyInit;
    lazyUpdate = null;
    constructor(r) {
        r ? typeof r == "string" ? this.lazyInit = () => {
            this.headers = new Map, r.split(`
`).forEach(t => { let n = t.indexOf(":"); if (n > 0) {
                let s = t.slice(0, n), i = t.slice(n + 1).trim();
                this.addHeaderEntry(s, i);
            } });
        } : typeof Headers < "u" && r instanceof Headers ? (this.headers = new Map, r.forEach((t, n) => { this.addHeaderEntry(n, t); })) : this.lazyInit = () => { this.headers = new Map, Object.entries(r).forEach(([t, n]) => { this.setHeaderEntries(t, n); }); } : this.headers = new Map;
    }
    has(r) { return this.init(), this.headers.has(r.toLowerCase()); }
    get(r) { this.init(); let t = this.headers.get(r.toLowerCase()); return t && t.length > 0 ? t[0] : null; }
    keys() { return this.init(), Array.from(this.normalizedNames.values()); }
    getAll(r) { return this.init(), this.headers.get(r.toLowerCase()) || null; }
    append(r, t) { return this.clone({ name: r, value: t, op: "a" }); }
    set(r, t) { return this.clone({ name: r, value: t, op: "s" }); }
    delete(r, t) { return this.clone({ name: r, value: t, op: "d" }); }
    maybeSetNormalizedName(r, t) { this.normalizedNames.has(t) || this.normalizedNames.set(t, r); }
    init() { this.lazyInit && (this.lazyInit instanceof e ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(r => this.applyUpdate(r)), this.lazyUpdate = null)); }
    copyFrom(r) { r.init(), Array.from(r.headers.keys()).forEach(t => { this.headers.set(t, r.headers.get(t)), this.normalizedNames.set(t, r.normalizedNames.get(t)); }); }
    clone(r) { let t = new e; return t.lazyInit = this.lazyInit && this.lazyInit instanceof e ? this.lazyInit : this, t.lazyUpdate = (this.lazyUpdate || []).concat([r]), t; }
    applyUpdate(r) { let t = r.name.toLowerCase(); switch (r.op) {
        case "a":
        case "s":
            let n = r.value;
            if (typeof n == "string" && (n = [n]), n.length === 0)
                return;
            this.maybeSetNormalizedName(r.name, t);
            let s = (r.op === "a" ? this.headers.get(t) : void 0) || [];
            s.push(...n), this.headers.set(t, s);
            break;
        case "d":
            let i = r.value;
            if (!i)
                this.headers.delete(t), this.normalizedNames.delete(t);
            else {
                let o = this.headers.get(t);
                if (!o)
                    return;
                o = o.filter(d => i.indexOf(d) === -1), o.length === 0 ? (this.headers.delete(t), this.normalizedNames.delete(t)) : this.headers.set(t, o);
            }
            break;
    } }
    addHeaderEntry(r, t) { let n = r.toLowerCase(); this.maybeSetNormalizedName(r, n), this.headers.has(n) ? this.headers.get(n).push(t) : this.headers.set(n, [t]); }
    setHeaderEntries(r, t) { let n = (Array.isArray(t) ? t : [t]).map(i => i.toString()), s = r.toLowerCase(); this.headers.set(s, n), this.maybeSetNormalizedName(r, s); }
    forEach(r) { this.init(), Array.from(this.normalizedNames.keys()).forEach(t => r(this.normalizedNames.get(t), this.headers.get(t))); }
};
var K = class {
    encodeKey(r) { return Ne(r); }
    encodeValue(r) { return Ne(r); }
    decodeKey(r) { return decodeURIComponent(r); }
    decodeValue(r) { return decodeURIComponent(r); }
};
function yt(e, r) { let t = new Map; return e.length > 0 && e.replace(/^\?/, "").split("&").forEach(s => { let i = s.indexOf("="), [o, d] = i == -1 ? [r.decodeKey(s), ""] : [r.decodeKey(s.slice(0, i)), r.decodeValue(s.slice(i + 1))], a = t.get(o) || []; a.push(d), t.set(o, a); }), t; }
var gt = /%(\d[a-f0-9])/gi, Tt = { 40: "@", "3A": ":", 24: "$", "2C": ",", "3B": ";", "3D": "=", "3F": "?", "2F": "/" };
function Ne(e) { return encodeURIComponent(e).replace(gt, (r, t) => Tt[t] ?? r); }
function G(e) { return `${e}`; }
var O = class e {
    map;
    encoder;
    updates = null;
    cloneFrom = null;
    constructor(r = {}) { if (this.encoder = r.encoder || new K, r.fromString) {
        if (r.fromObject)
            throw new A(2805, !1);
        this.map = yt(r.fromString, this.encoder);
    }
    else
        r.fromObject ? (this.map = new Map, Object.keys(r.fromObject).forEach(t => { let n = r.fromObject[t], s = Array.isArray(n) ? n.map(G) : [G(n)]; this.map.set(t, s); })) : this.map = null; }
    has(r) { return this.init(), this.map.has(r); }
    get(r) { this.init(); let t = this.map.get(r); return t ? t[0] : null; }
    getAll(r) { return this.init(), this.map.get(r) || null; }
    keys() { return this.init(), Array.from(this.map.keys()); }
    append(r, t) { return this.clone({ param: r, value: t, op: "a" }); }
    appendAll(r) { let t = []; return Object.keys(r).forEach(n => { let s = r[n]; Array.isArray(s) ? s.forEach(i => { t.push({ param: n, value: i, op: "a" }); }) : t.push({ param: n, value: s, op: "a" }); }), this.clone(t); }
    set(r, t) { return this.clone({ param: r, value: t, op: "s" }); }
    delete(r, t) { return this.clone({ param: r, value: t, op: "d" }); }
    toString() { return this.init(), this.keys().map(r => { let t = this.encoder.encodeKey(r); return this.map.get(r).map(n => t + "=" + this.encoder.encodeValue(n)).join("&"); }).filter(r => r !== "").join("&"); }
    clone(r) { let t = new e({ encoder: this.encoder }); return t.cloneFrom = this.cloneFrom || this, t.updates = (this.updates || []).concat(r), t; }
    init() { this.map === null && (this.map = new Map), this.cloneFrom !== null && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(r => this.map.set(r, this.cloneFrom.map.get(r))), this.updates.forEach(r => { switch (r.op) {
        case "a":
        case "s":
            let t = (r.op === "a" ? this.map.get(r.param) : void 0) || [];
            t.push(G(r.value)), this.map.set(r.param, t);
            break;
        case "d": if (r.value !== void 0) {
            let n = this.map.get(r.param) || [], s = n.indexOf(G(r.value));
            s !== -1 && n.splice(s, 1), n.length > 0 ? this.map.set(r.param, n) : this.map.delete(r.param);
        }
        else {
            this.map.delete(r.param);
            break;
        }
    } }), this.cloneFrom = this.updates = null); }
}, se = class {
    defaultValue;
    constructor(r) { this.defaultValue = r; }
}, Y = class {
    map = new Map;
    set(r, t) { return this.map.set(r, t), this; }
    get(r) { return this.map.has(r) || this.map.set(r, r.defaultValue()), this.map.get(r); }
    delete(r) { return this.map.delete(r), this; }
    has(r) { return this.map.has(r); }
    keys() { return this.map.keys(); }
};
function Et(e) { switch (e) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP": return !1;
    default: return !0;
} }
function Me(e) { return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer; }
function Oe(e) { return typeof Blob < "u" && e instanceof Blob; }
function Ae(e) { return typeof FormData < "u" && e instanceof FormData; }
function vt(e) { return typeof URLSearchParams < "u" && e instanceof URLSearchParams; }
var z = "Content-Type", q = "Accept", ue = "X-Request-URL", Ue = "text/plain", Ce = "application/json", Be = `${Ce}, ${Ue}, */*`, F = class e {
    url;
    body = null;
    headers;
    context;
    reportProgress = !1;
    withCredentials = !1;
    credentials;
    keepalive = !1;
    cache;
    priority;
    mode;
    redirect;
    referrer;
    integrity;
    responseType = "json";
    method;
    params;
    urlWithParams;
    transferCache;
    timeout;
    constructor(r, t, n, s) { this.url = t, this.method = r.toUpperCase(); let i; if (Et(this.method) || s ? (this.body = n !== void 0 ? n : null, i = s) : i = n, i) {
        if (this.reportProgress = !!i.reportProgress, this.withCredentials = !!i.withCredentials, this.keepalive = !!i.keepalive, i.responseType && (this.responseType = i.responseType), i.headers && (this.headers = i.headers), i.context && (this.context = i.context), i.params && (this.params = i.params), i.priority && (this.priority = i.priority), i.cache && (this.cache = i.cache), i.credentials && (this.credentials = i.credentials), typeof i.timeout == "number") {
            if (i.timeout < 1 || !Number.isInteger(i.timeout))
                throw new A(2822, "");
            this.timeout = i.timeout;
        }
        i.mode && (this.mode = i.mode), i.redirect && (this.redirect = i.redirect), i.integrity && (this.integrity = i.integrity), i.referrer && (this.referrer = i.referrer), this.transferCache = i.transferCache;
    } if (this.headers ??= new w, this.context ??= new Y, !this.params)
        this.params = new O, this.urlWithParams = t;
    else {
        let o = this.params.toString();
        if (o.length === 0)
            this.urlWithParams = t;
        else {
            let d = t.indexOf("?"), a = d === -1 ? "?" : d < t.length - 1 ? "&" : "";
            this.urlWithParams = t + a + o;
        }
    } }
    serializeBody() { return this.body === null ? null : typeof this.body == "string" || Me(this.body) || Oe(this.body) || Ae(this.body) || vt(this.body) ? this.body : this.body instanceof O ? this.body.toString() : typeof this.body == "object" || typeof this.body == "boolean" || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString(); }
    detectContentTypeHeader() { return this.body === null || Ae(this.body) ? null : Oe(this.body) ? this.body.type || null : Me(this.body) ? null : typeof this.body == "string" ? Ue : this.body instanceof O ? "application/x-www-form-urlencoded;charset=UTF-8" : typeof this.body == "object" || typeof this.body == "number" || typeof this.body == "boolean" ? Ce : null; }
    clone(r = {}) { let t = r.method || this.method, n = r.url || this.url, s = r.responseType || this.responseType, i = r.keepalive ?? this.keepalive, o = r.priority || this.priority, d = r.cache || this.cache, a = r.mode || this.mode, f = r.redirect || this.redirect, y = r.credentials || this.credentials, p = r.referrer || this.referrer, g = r.integrity || this.integrity, E = r.transferCache ?? this.transferCache, c = r.timeout ?? this.timeout, M = r.body !== void 0 ? r.body : this.body, u = r.withCredentials ?? this.withCredentials, h = r.reportProgress ?? this.reportProgress, T = r.headers || this.headers, b = r.params || this.params, m = r.context ?? this.context; return r.setHeaders !== void 0 && (T = Object.keys(r.setHeaders).reduce((P, _) => P.set(_, r.setHeaders[_]), T)), r.setParams && (b = Object.keys(r.setParams).reduce((P, _) => P.set(_, r.setParams[_]), b)), new e(t, n, M, { params: b, headers: T, context: m, reportProgress: h, responseType: s, withCredentials: u, transferCache: E, keepalive: i, cache: d, priority: o, timeout: c, mode: a, redirect: f, credentials: y, referrer: p, integrity: g }); }
}, N = (function (e) { return e[e.Sent = 0] = "Sent", e[e.UploadProgress = 1] = "UploadProgress", e[e.ResponseHeader = 2] = "ResponseHeader", e[e.DownloadProgress = 3] = "DownloadProgress", e[e.Response = 4] = "Response", e[e.User = 5] = "User", e; })(N || {}), C = class {
    headers;
    status;
    statusText;
    url;
    ok;
    type;
    redirected;
    constructor(r, t = 200, n = "OK") { this.headers = r.headers || new w, this.status = r.status !== void 0 ? r.status : t, this.statusText = r.statusText || n, this.url = r.url || null, this.redirected = r.redirected, this.ok = this.status >= 200 && this.status < 300; }
}, X = class e extends C {
    constructor(r = {}) { super(r); }
    type = N.ResponseHeader;
    clone(r = {}) { return new e({ headers: r.headers || this.headers, status: r.status !== void 0 ? r.status : this.status, statusText: r.statusText || this.statusText, url: r.url || this.url || void 0 }); }
}, I = class e extends C {
    body;
    constructor(r = {}) { super(r), this.body = r.body !== void 0 ? r.body : null; }
    type = N.Response;
    clone(r = {}) { return new e({ body: r.body !== void 0 ? r.body : this.body, headers: r.headers || this.headers, status: r.status !== void 0 ? r.status : this.status, statusText: r.statusText || this.statusText, url: r.url || this.url || void 0, redirected: r.redirected ?? this.redirected }); }
}, R = class extends C {
    name = "HttpErrorResponse";
    message;
    error;
    ok = !1;
    constructor(r) { super(r, 0, "Unknown Error"), this.status >= 200 && this.status < 300 ? this.message = `Http failure during parsing for ${r.url || "(unknown url)"}` : this.message = `Http failure response for ${r.url || "(unknown url)"}: ${r.status} ${r.statusText}`, this.error = r.error || null; }
}, he = 200, Rt = 204, Se = (function (e) { return e[e.Continue = 100] = "Continue", e[e.SwitchingProtocols = 101] = "SwitchingProtocols", e[e.Processing = 102] = "Processing", e[e.EarlyHints = 103] = "EarlyHints", e[e.Ok = 200] = "Ok", e[e.Created = 201] = "Created", e[e.Accepted = 202] = "Accepted", e[e.NonAuthoritativeInformation = 203] = "NonAuthoritativeInformation", e[e.NoContent = 204] = "NoContent", e[e.ResetContent = 205] = "ResetContent", e[e.PartialContent = 206] = "PartialContent", e[e.MultiStatus = 207] = "MultiStatus", e[e.AlreadyReported = 208] = "AlreadyReported", e[e.ImUsed = 226] = "ImUsed", e[e.MultipleChoices = 300] = "MultipleChoices", e[e.MovedPermanently = 301] = "MovedPermanently", e[e.Found = 302] = "Found", e[e.SeeOther = 303] = "SeeOther", e[e.NotModified = 304] = "NotModified", e[e.UseProxy = 305] = "UseProxy", e[e.Unused = 306] = "Unused", e[e.TemporaryRedirect = 307] = "TemporaryRedirect", e[e.PermanentRedirect = 308] = "PermanentRedirect", e[e.BadRequest = 400] = "BadRequest", e[e.Unauthorized = 401] = "Unauthorized", e[e.PaymentRequired = 402] = "PaymentRequired", e[e.Forbidden = 403] = "Forbidden", e[e.NotFound = 404] = "NotFound", e[e.MethodNotAllowed = 405] = "MethodNotAllowed", e[e.NotAcceptable = 406] = "NotAcceptable", e[e.ProxyAuthenticationRequired = 407] = "ProxyAuthenticationRequired", e[e.RequestTimeout = 408] = "RequestTimeout", e[e.Conflict = 409] = "Conflict", e[e.Gone = 410] = "Gone", e[e.LengthRequired = 411] = "LengthRequired", e[e.PreconditionFailed = 412] = "PreconditionFailed", e[e.PayloadTooLarge = 413] = "PayloadTooLarge", e[e.UriTooLong = 414] = "UriTooLong", e[e.UnsupportedMediaType = 415] = "UnsupportedMediaType", e[e.RangeNotSatisfiable = 416] = "RangeNotSatisfiable", e[e.ExpectationFailed = 417] = "ExpectationFailed", e[e.ImATeapot = 418] = "ImATeapot", e[e.MisdirectedRequest = 421] = "MisdirectedRequest", e[e.UnprocessableEntity = 422] = "UnprocessableEntity", e[e.Locked = 423] = "Locked", e[e.FailedDependency = 424] = "FailedDependency", e[e.TooEarly = 425] = "TooEarly", e[e.UpgradeRequired = 426] = "UpgradeRequired", e[e.PreconditionRequired = 428] = "PreconditionRequired", e[e.TooManyRequests = 429] = "TooManyRequests", e[e.RequestHeaderFieldsTooLarge = 431] = "RequestHeaderFieldsTooLarge", e[e.UnavailableForLegalReasons = 451] = "UnavailableForLegalReasons", e[e.InternalServerError = 500] = "InternalServerError", e[e.NotImplemented = 501] = "NotImplemented", e[e.BadGateway = 502] = "BadGateway", e[e.ServiceUnavailable = 503] = "ServiceUnavailable", e[e.GatewayTimeout = 504] = "GatewayTimeout", e[e.HttpVersionNotSupported = 505] = "HttpVersionNotSupported", e[e.VariantAlsoNegotiates = 506] = "VariantAlsoNegotiates", e[e.InsufficientStorage = 507] = "InsufficientStorage", e[e.LoopDetected = 508] = "LoopDetected", e[e.NotExtended = 510] = "NotExtended", e[e.NetworkAuthenticationRequired = 511] = "NetworkAuthenticationRequired", e; })(Se || {});
function ne(e, r) { return { body: r, headers: e.headers, context: e.context, observe: e.observe, params: e.params, reportProgress: e.reportProgress, responseType: e.responseType, withCredentials: e.withCredentials, credentials: e.credentials, transferCache: e.transferCache, timeout: e.timeout, keepalive: e.keepalive, priority: e.priority, cache: e.cache, mode: e.mode, redirect: e.redirect, integrity: e.integrity, referrer: e.referrer }; }
var fe = (() => { class e {
    handler;
    constructor(t) { this.handler = t; }
    request(t, n, s = {}) { let i; if (t instanceof F)
        i = t;
    else {
        let a;
        s.headers instanceof w ? a = s.headers : a = new w(s.headers);
        let f;
        s.params && (s.params instanceof O ? f = s.params : f = new O({ fromObject: s.params })), i = new F(t, n, s.body !== void 0 ? s.body : null, { headers: a, context: s.context, params: f, reportProgress: s.reportProgress, responseType: s.responseType || "json", withCredentials: s.withCredentials, transferCache: s.transferCache, keepalive: s.keepalive, priority: s.priority, cache: s.cache, mode: s.mode, redirect: s.redirect, credentials: s.credentials, referrer: s.referrer, integrity: s.integrity, timeout: s.timeout });
    } let o = Le(i).pipe(ht(a => this.handler.handle(a))); if (t instanceof F || s.observe === "events")
        return o; let d = o.pipe(ft(a => a instanceof I)); switch (s.observe || "body") {
        case "body": switch (i.responseType) {
            case "arraybuffer": return d.pipe($(a => { if (a.body !== null && !(a.body instanceof ArrayBuffer))
                throw new A(2806, !1); return a.body; }));
            case "blob": return d.pipe($(a => { if (a.body !== null && !(a.body instanceof Blob))
                throw new A(2807, !1); return a.body; }));
            case "text": return d.pipe($(a => { if (a.body !== null && typeof a.body != "string")
                throw new A(2808, !1); return a.body; }));
            case "json":
            default: return d.pipe($(a => a.body));
        }
        case "response": return d;
        default: throw new A(2809, !1);
    } }
    delete(t, n = {}) { return this.request("DELETE", t, n); }
    get(t, n = {}) { return this.request("GET", t, n); }
    head(t, n = {}) { return this.request("HEAD", t, n); }
    jsonp(t, n) { return this.request("JSONP", t, { params: new O().append(n, "JSONP_CALLBACK"), observe: "body", responseType: "json" }); }
    options(t, n = {}) { return this.request("OPTIONS", t, n); }
    patch(t, n, s = {}) { return this.request("PATCH", t, ne(s, n)); }
    post(t, n, s = {}) { return this.request("POST", t, ne(s, n)); }
    put(t, n, s = {}) { return this.request("PUT", t, ne(s, n)); }
    static \u0275fac = function (n) { return new (n || e)(l.\u0275\u0275inject(j)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), wt = /^\)\]\}',?\n/;
function _e(e) { if (e.url)
    return e.url; let r = ue.toLocaleLowerCase(); return e.headers.get(r); }
var ze = new D(""), W = (() => { class e {
    fetchImpl = v(oe, { optional: !0 })?.fetch ?? ((...t) => globalThis.fetch(...t));
    ngZone = v(dt);
    destroyRef = v(lt);
    handle(t) { return new le(n => { let s = new AbortController; this.doRequest(t, s.signal, n).then(ie, o => n.error(new R({ error: o }))); let i; return t.timeout && (i = this.ngZone.runOutsideAngular(() => setTimeout(() => { s.signal.aborted || s.abort(new DOMException("signal timed out", "TimeoutError")); }, t.timeout))), () => { i !== void 0 && clearTimeout(i), s.abort(); }; }); }
    doRequest(t, n, s) { return re(this, null, function* () { let i = this.createRequestInit(t), o; try {
        let c = this.ngZone.runOutsideAngular(() => this.fetchImpl(t.urlWithParams, V({ signal: n }, i)));
        bt(c), s.next({ type: N.Sent }), o = yield c;
    }
    catch (c) {
        s.error(new R({ error: c, status: c.status ?? 0, statusText: c.statusText, url: t.urlWithParams, headers: c.headers }));
        return;
    } let d = new w(o.headers), a = o.statusText, f = _e(o) ?? t.urlWithParams, y = o.status, p = null; if (t.reportProgress && s.next(new X({ headers: d, status: y, statusText: a, url: f })), o.body) {
        let c = o.headers.get("content-length"), M = [], u = o.body.getReader(), h = 0, T, b, m = typeof Zone < "u" && Zone.current, P = !1;
        if (yield this.ngZone.runOutsideAngular(() => re(this, null, function* () { for (;;) {
            if (this.destroyRef.destroyed) {
                yield u.cancel(), P = !0;
                break;
            }
            let { done: x, value: te } = yield u.read();
            if (x)
                break;
            if (M.push(te), h += te.length, t.reportProgress) {
                b = t.responseType === "text" ? (b ?? "") + (T ??= new TextDecoder).decode(te, { stream: !0 }) : void 0;
                let Re = () => s.next({ type: N.DownloadProgress, total: c ? +c : void 0, loaded: h, partialText: b });
                m ? m.run(Re) : Re();
            }
        } })), P) {
            s.complete();
            return;
        }
        let _ = this.concatChunks(M, h);
        try {
            let x = o.headers.get(z) ?? "";
            p = this.parseBody(t, _, x, y);
        }
        catch (x) {
            s.error(new R({ error: x, headers: new w(o.headers), status: o.status, statusText: o.statusText, url: _e(o) ?? t.urlWithParams }));
            return;
        }
    } y === 0 && (y = p ? he : 0); let g = y >= 200 && y < 300, E = o.redirected; g ? (s.next(new I({ body: p, headers: d, status: y, statusText: a, url: f, redirected: E })), s.complete()) : s.error(new R({ error: p, headers: d, status: y, statusText: a, url: f, redirected: E })); }); }
    parseBody(t, n, s, i) { switch (t.responseType) {
        case "json":
            let o = new TextDecoder().decode(n).replace(wt, "");
            if (o === "")
                return null;
            try {
                return JSON.parse(o);
            }
            catch (d) {
                if (i < 200 || i >= 300)
                    return o;
                throw d;
            }
        case "text": return new TextDecoder().decode(n);
        case "blob": return new Blob([n], { type: s });
        case "arraybuffer": return n.buffer;
    } }
    createRequestInit(t) { let n = {}, s; if (s = t.credentials, t.withCredentials && (s = "include"), t.headers.forEach((i, o) => n[i] = o.join(",")), t.headers.has(q) || (n[q] = Be), !t.headers.has(z)) {
        let i = t.detectContentTypeHeader();
        i !== null && (n[z] = i);
    } return { body: t.serializeBody(), method: t.method, headers: n, credentials: s, keepalive: t.keepalive, cache: t.cache, priority: t.priority, mode: t.mode, redirect: t.redirect, referrer: t.referrer, integrity: t.integrity }; }
    concatChunks(t, n) { let s = new Uint8Array(n), i = 0; for (let o of t)
        s.set(o, i), i += o.length; return s; }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), oe = class {
};
function ie() { }
function bt(e) { e.then(ie, ie); }
function Xe(e, r) { return r(e); }
function Pt(e, r) { return (t, n) => r.intercept(t, { handle: s => e(s, n) }); }
function Nt(e, r, t) { return (n, s) => de(t, () => r(n, i => e(i, s))); }
var pe = new D(""), J = new D(""), me = new D(""), ye = new D("", { providedIn: "root", factory: () => !0 });
function Mt() { let e = null; return (r, t) => { e === null && (e = (v(pe, { optional: !0 }) ?? []).reduceRight(Pt, Xe)); let n = v(xe); if (v(ye)) {
    let i = n.add();
    return e(r, t).pipe(je(i));
}
else
    return e(r, t); }; }
var Z = (() => { class e extends j {
    backend;
    injector;
    chain = null;
    pendingTasks = v(xe);
    contributeToStability = v(ye);
    constructor(t, n) { super(), this.backend = t, this.injector = n; }
    handle(t) { if (this.chain === null) {
        let n = Array.from(new Set([...this.injector.get(J), ...this.injector.get(me, [])]));
        this.chain = n.reduceRight((s, i) => Nt(s, i, this.injector), Xe);
    } if (this.contributeToStability) {
        let n = this.pendingTasks.add();
        return this.chain(t, s => this.backend.handle(s)).pipe(je(n));
    }
    else
        return this.chain(t, n => this.backend.handle(n)); }
    static \u0275fac = function (n) { return new (n || e)(l.\u0275\u0275inject(L), l.\u0275\u0275inject(l.EnvironmentInjector)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), Ot = 0, Ie, At = "JSONP injected script did not invoke callback.";
var Q = class {
};
function _t() { return typeof window == "object" ? window : {}; }
var ge = (() => { class e {
    callbackMap;
    document;
    resolvedPromise = Promise.resolve();
    constructor(t, n) { this.callbackMap = t, this.document = n; }
    nextCallback() { return `ng_jsonp_callback_${Ot++}`; }
    handle(t) { if (t.method !== "JSONP")
        throw new A(2810, !1); if (t.responseType !== "json")
        throw new A(2811, !1); if (t.headers.keys().length > 0)
        throw new A(2812, !1); return new le(n => { let s = this.nextCallback(), i = t.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${s}$1`), o = this.document.createElement("script"); o.src = i; let d = null, a = !1; this.callbackMap[s] = g => { delete this.callbackMap[s], d = g, a = !0; }; let f = () => { o.removeEventListener("load", y), o.removeEventListener("error", p), o.remove(), delete this.callbackMap[s]; }, y = () => { this.resolvedPromise.then(() => { if (f(), !a) {
        n.error(new R({ url: i, status: 0, statusText: "JSONP Error", error: new Error(At) }));
        return;
    } n.next(new I({ body: d, status: he, statusText: "OK", url: i })), n.complete(); }); }, p = g => { f(), n.error(new R({ error: g, status: 0, statusText: "JSONP Error", url: i })); }; return o.addEventListener("load", y), o.addEventListener("error", p), this.document.body.appendChild(o), n.next({ type: N.Sent }), () => { a || this.removeListeners(o), f(); }; }); }
    removeListeners(t) { Ie ??= this.document.implementation.createHTMLDocument(), Ie.adoptNode(t); }
    static \u0275fac = function (n) { return new (n || e)(l.\u0275\u0275inject(Q), l.\u0275\u0275inject(Fe)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })();
function Je(e, r) { return e.method === "JSONP" ? v(ge).handle(e) : r(e); }
var It = (() => { class e {
    injector;
    constructor(t) { this.injector = t; }
    intercept(t, n) { return de(this.injector, () => Je(t, s => n.handle(s))); }
    static \u0275fac = function (n) { return new (n || e)(l.\u0275\u0275inject(l.EnvironmentInjector)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), Dt = /^\)\]\}',?\n/, kt = RegExp(`^${ue}:`, "m");
function xt(e) { return "responseURL" in e && e.responseURL ? e.responseURL : kt.test(e.getAllResponseHeaders()) ? e.getResponseHeader(ue) : null; }
var ae = (() => { class e {
    xhrFactory;
    constructor(t) { this.xhrFactory = t; }
    handle(t) { if (t.method === "JSONP")
        throw new A(-2800, !1); let n = this.xhrFactory; return (typeof ngServerMode < "u" && ngServerMode && n.\u0275loadImpl ? mt(n.\u0275loadImpl()) : Le(null)).pipe(pt(() => new le(i => { let o = n.build(); if (o.open(t.method, t.urlWithParams), t.withCredentials && (o.withCredentials = !0), t.headers.forEach((u, h) => o.setRequestHeader(u, h.join(","))), t.headers.has(q) || o.setRequestHeader(q, Be), !t.headers.has(z)) {
        let u = t.detectContentTypeHeader();
        u !== null && o.setRequestHeader(z, u);
    } if (t.timeout && (o.timeout = t.timeout), t.responseType) {
        let u = t.responseType.toLowerCase();
        o.responseType = u !== "json" ? u : "text";
    } let d = t.serializeBody(), a = null, f = () => { if (a !== null)
        return a; let u = o.statusText || "OK", h = new w(o.getAllResponseHeaders()), T = xt(o) || t.url; return a = new X({ headers: h, status: o.status, statusText: u, url: T }), a; }, y = () => { let { headers: u, status: h, statusText: T, url: b } = f(), m = null; h !== Rt && (m = typeof o.response > "u" ? o.responseText : o.response), h === 0 && (h = m ? he : 0); let P = h >= 200 && h < 300; if (t.responseType === "json" && typeof m == "string") {
        let _ = m;
        m = m.replace(Dt, "");
        try {
            m = m !== "" ? JSON.parse(m) : null;
        }
        catch (x) {
            m = _, P && (P = !1, m = { error: x, text: m });
        }
    } P ? (i.next(new I({ body: m, headers: u, status: h, statusText: T, url: b || void 0 })), i.complete()) : i.error(new R({ error: m, headers: u, status: h, statusText: T, url: b || void 0 })); }, p = u => { let { url: h } = f(), T = new R({ error: u, status: o.status || 0, statusText: o.statusText || "Unknown Error", url: h || void 0 }); i.error(T); }, g = p; t.timeout && (g = u => { let { url: h } = f(), T = new R({ error: new DOMException("Request timed out", "TimeoutError"), status: o.status || 0, statusText: o.statusText || "Request timeout", url: h || void 0 }); i.error(T); }); let E = !1, c = u => { E || (i.next(f()), E = !0); let h = { type: N.DownloadProgress, loaded: u.loaded }; u.lengthComputable && (h.total = u.total), t.responseType === "text" && o.responseText && (h.partialText = o.responseText), i.next(h); }, M = u => { let h = { type: N.UploadProgress, loaded: u.loaded }; u.lengthComputable && (h.total = u.total), i.next(h); }; return o.addEventListener("load", y), o.addEventListener("error", p), o.addEventListener("timeout", g), o.addEventListener("abort", p), t.reportProgress && (o.addEventListener("progress", c), d !== null && o.upload && o.upload.addEventListener("progress", M)), o.send(d), i.next({ type: N.Sent }), () => { o.removeEventListener("error", p), o.removeEventListener("abort", p), o.removeEventListener("load", y), o.removeEventListener("timeout", g), t.reportProgress && (o.removeEventListener("progress", c), d !== null && o.upload && o.upload.removeEventListener("progress", M)), o.readyState !== o.DONE && o.abort(); }; }))); }
    static \u0275fac = function (n) { return new (n || e)(l.\u0275\u0275inject(Pe)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), H = new D(""), Ve = "XSRF-TOKEN", $e = new D("", { providedIn: "root", factory: () => Ve }), Ge = "X-XSRF-TOKEN", We = new D("", { providedIn: "root", factory: () => Ge }), B = class {
}, Ke = (() => { class e {
    doc;
    cookieName;
    lastCookieString = "";
    lastToken = null;
    parseCount = 0;
    constructor(t, n) { this.doc = t, this.cookieName = n; }
    getToken() { if (typeof ngServerMode < "u" && ngServerMode)
        return null; let t = this.doc.cookie || ""; return t !== this.lastCookieString && (this.parseCount++, this.lastToken = be(t, this.cookieName), this.lastCookieString = t), this.lastToken; }
    static \u0275fac = function (n) { return new (n || e)(l.\u0275\u0275inject(Fe), l.\u0275\u0275inject($e)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), Ft = /^(?:https?:)?\/\//i;
function Ye(e, r) { if (!v(H) || e.method === "GET" || e.method === "HEAD" || Ft.test(e.url))
    return r(e); let t = v(B).getToken(), n = v(We); return t != null && !e.headers.has(n) && (e = e.clone({ headers: e.headers.set(n, t) })), r(e); }
var De = (() => { class e {
    injector;
    constructor(t) { this.injector = t; }
    intercept(t, n) { return de(this.injector, () => Ye(t, s => n.handle(s))); }
    static \u0275fac = function (n) { return new (n || e)(l.\u0275\u0275inject(l.EnvironmentInjector)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), k = (function (e) { return e[e.Interceptors = 0] = "Interceptors", e[e.LegacyInterceptors = 1] = "LegacyInterceptors", e[e.CustomXsrfConfiguration = 2] = "CustomXsrfConfiguration", e[e.NoXsrfProtection = 3] = "NoXsrfProtection", e[e.JsonpSupport = 4] = "JsonpSupport", e[e.RequestsMadeViaParent = 5] = "RequestsMadeViaParent", e[e.Fetch = 6] = "Fetch", e; })(k || {});
function U(e, r) { return { \u0275kind: e, \u0275providers: r }; }
function qe(...e) { let r = [fe, ae, Z, { provide: j, useExisting: Z }, { provide: L, useFactory: () => v(ze, { optional: !0 }) ?? v(ae) }, { provide: J, useValue: Ye, multi: !0 }, { provide: H, useValue: !0 }, { provide: B, useClass: Ke }]; for (let t of e)
    r.push(...t.\u0275providers); return ut(r); }
function jt(e) { return U(k.Interceptors, e.map(r => ({ provide: J, useValue: r, multi: !0 }))); }
var ke = new D("");
function Ze() { return U(k.LegacyInterceptors, [{ provide: ke, useFactory: Mt }, { provide: J, useExisting: ke, multi: !0 }]); }
function ce({ cookieName: e, headerName: r }) { let t = []; return e !== void 0 && t.push({ provide: $e, useValue: e }), r !== void 0 && t.push({ provide: We, useValue: r }), U(k.CustomXsrfConfiguration, t); }
function Qe() { return U(k.NoXsrfProtection, [{ provide: H, useValue: !1 }]); }
function He() { return U(k.JsonpSupport, [ge, { provide: Q, useFactory: _t }, { provide: J, useValue: Je, multi: !0 }]); }
function Lt() { return U(k.RequestsMadeViaParent, [{ provide: L, useFactory: () => v(j, { skipSelf: !0, optional: !0 }) }]); }
function Ut() { return U(k.Fetch, [W, { provide: ze, useExisting: W }, { provide: L, useExisting: W }]); }
var Ct = (() => { class e {
    static disable() { return { ngModule: e, providers: [Qe().\u0275providers] }; }
    static withOptions(t = {}) { return { ngModule: e, providers: ce(t).\u0275providers }; }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275mod = l.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = l.\u0275\u0275defineInjector({ providers: [De, { provide: pe, useExisting: De, multi: !0 }, { provide: B, useClass: Ke }, ce({ cookieName: Ve, headerName: Ge }).\u0275providers, { provide: H, useValue: !0 }] });
} return e; })(), Bt = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275mod = l.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = l.\u0275\u0275defineInjector({ providers: [qe(Ze())] });
} return e; })(), St = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275mod = l.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = l.\u0275\u0275defineInjector({ providers: [He().\u0275providers] });
} return e; })();
import { inject as S, Injector as zt, \u0275ResourceImpl as Xt, linkedSignal as Te, computed as Jt, signal as Vt, \u0275encapsulateResourceError as $t, \u0275RuntimeError as at, InjectionToken as ct, \u0275performanceMarkFeature as Gt, APP_BOOTSTRAP_LISTENER as Wt, ApplicationRef as Kt, TransferState as Yt, makeStateKey as qt, \u0275truncateMiddle as wr, \u0275formatRuntimeError as br } from "@angular/core";
import { of as Zt } from "rxjs";
import { tap as Qt } from "rxjs/operators";
var Mr = (() => { let e = ee("json"); return e.arrayBuffer = ee("arraybuffer"), e.blob = ee("blob"), e.text = ee("text"), e; })();
function ee(e) { return function (t, n) { let s = n?.injector ?? S(zt); return new Ee(s, () => Ht(t, e), n?.defaultValue, n?.parse, n?.equal); }; }
function Ht(e, r) { let t = typeof e == "function" ? e() : e; if (t === void 0)
    return; typeof t == "string" && (t = { url: t }); let n = t.headers instanceof w ? t.headers : new w(t.headers), s = t.params instanceof O ? t.params : new O({ fromObject: t.params }); return new F(t.method ?? "GET", t.url, t.body ?? null, { headers: n, params: s, reportProgress: t.reportProgress, withCredentials: t.withCredentials, keepalive: t.keepalive, cache: t.cache, priority: t.priority, mode: t.mode, redirect: t.redirect, responseType: r, context: t.context, transferCache: t.transferCache, credentials: t.credentials, referrer: t.referrer, integrity: t.integrity, timeout: t.timeout }); }
var Ee = class extends Xt {
    client;
    _headers = Te({ source: this.extRequest, computation: () => { } });
    _progress = Te({ source: this.extRequest, computation: () => { } });
    _statusCode = Te({ source: this.extRequest, computation: () => { } });
    headers = Jt(() => this.status() === "resolved" || this.status() === "error" ? this._headers() : void 0);
    progress = this._progress.asReadonly();
    statusCode = this._statusCode.asReadonly();
    constructor(r, t, n, s, i) { super(t, ({ params: o, abortSignal: d }) => { let a, f = () => a.unsubscribe(); d.addEventListener("abort", f); let y = Vt({ value: void 0 }), p, g = new Promise(c => p = c), E = c => { y.set(c), p?.(y), p = void 0; }; return a = this.client.request(o).subscribe({ next: c => { switch (c.type) {
            case N.Response:
                this._headers.set(c.headers), this._statusCode.set(c.status);
                try {
                    E({ value: s ? s(c.body) : c.body });
                }
                catch (M) {
                    E({ error: $t(M) });
                }
                break;
            case N.DownloadProgress:
                this._progress.set(c);
                break;
        } }, error: c => { c instanceof R && (this._headers.set(c.headers), this._statusCode.set(c.status)), E({ error: c }), d.removeEventListener("abort", f); }, complete: () => { p && E({ error: new at(991, !1) }), d.removeEventListener("abort", f); } }), g; }, n, i, r), this.client = r.get(fe); }
    set(r) { super.set(r), this._headers.set(void 0), this._progress.set(void 0), this._statusCode.set(void 0); }
}, er = new ct(""), et = "b", tt = "h", rt = "s", nt = "st", st = "u", ot = "rt", ve = new ct(""), tr = ["GET", "HEAD"];
function rr(e, r) { let E = S(ve), { isCacheActive: t } = E, n = we(E, ["isCacheActive"]), { transferCache: s, method: i } = e; if (!t || s === !1 || i === "POST" && !n.includePostRequests && !s || i !== "POST" && !tr.includes(i) || !n.includeRequestsWithAuthHeaders && nr(e) || n.filter?.(e) === !1)
    return r(e); let o = S(Yt), d = S(er, { optional: !0 }); if (typeof ngServerMode < "u" && !ngServerMode && d)
    throw new at(2803, !1); let a = typeof ngServerMode < "u" && ngServerMode && d ? ar(e.url, d) : e.url, f = or(e, a), y = o.get(f, null), p = n.includeHeaders; if (typeof s == "object" && s.includeHeaders && (p = s.includeHeaders), y) {
    let { [et]: c, [ot]: M, [tt]: u, [rt]: h, [nt]: T, [st]: b } = y, m = c;
    switch (M) {
        case "arraybuffer":
            m = new TextEncoder().encode(c).buffer;
            break;
        case "blob":
            m = new Blob([c]);
            break;
    }
    let P = new w(u);
    return Zt(new I({ body: m, headers: P, status: h, statusText: T, url: b }));
} let g = r(e); return typeof ngServerMode < "u" && ngServerMode ? g.pipe(Qt(c => { c instanceof I && o.set(f, { [et]: c.body, [tt]: sr(c.headers, p), [rt]: c.status, [nt]: c.statusText, [st]: a, [ot]: e.responseType }); })) : g; }
function nr(e) { return e.headers.has("authorization") || e.headers.has("proxy-authorization"); }
function sr(e, r) { if (!r)
    return {}; let t = {}; for (let n of r) {
    let s = e.getAll(n);
    s !== null && (t[n] = s);
} return t; }
function it(e) { return [...e.keys()].sort().map(r => `${r}=${e.getAll(r)}`).join("&"); }
function or(e, r) { let { params: t, method: n, responseType: s } = e, i = it(t), o = e.serializeBody(); o instanceof URLSearchParams ? o = it(o) : typeof o != "string" && (o = ""); let d = [n, s, r, o, i].join("|"), a = ir(d); return qt(a); }
function ir(e) { let r = 0; for (let t of e)
    r = Math.imul(31, r) + t.charCodeAt(0) << 0; return r += 2147483648, r.toString(); }
function Or(e) { return [{ provide: ve, useFactory: () => (Gt("NgHttpTransferCache"), V({ isCacheActive: !0 }, e)) }, { provide: me, useValue: rr, multi: !0 }, { provide: Wt, multi: !0, useFactory: () => { let r = S(Kt), t = S(ve); return () => { r.whenStable().then(() => { t.isCacheActive = !1; }); }; } }]; }
function ar(e, r) { let t = new URL(e, "resolve://").origin, n = r[t]; return n ? e.replace(t, n) : e; }
export { W as FetchBackend, pe as HTTP_INTERCEPTORS, er as HTTP_TRANSFER_CACHE_ORIGIN_MAP, L as HttpBackend, fe as HttpClient, St as HttpClientJsonpModule, Bt as HttpClientModule, Ct as HttpClientXsrfModule, Y as HttpContext, se as HttpContextToken, R as HttpErrorResponse, N as HttpEventType, k as HttpFeatureKind, j as HttpHandler, X as HttpHeaderResponse, w as HttpHeaders, O as HttpParams, F as HttpRequest, I as HttpResponse, C as HttpResponseBase, Se as HttpStatusCode, K as HttpUrlEncodingCodec, ae as HttpXhrBackend, B as HttpXsrfTokenExtractor, ge as JsonpClientBackend, It as JsonpInterceptor, Mr as httpResource, qe as provideHttpClient, Ut as withFetch, jt as withInterceptors, Ze as withInterceptorsFromDi, He as withJsonpSupport, Qe as withNoXsrfProtection, Lt as withRequestsMadeViaParent, ce as withXsrfConfiguration, me as \u0275HTTP_ROOT_INTERCEPTOR_FNS, Z as \u0275HttpInterceptingHandler, Z as \u0275HttpInterceptorHandler, ye as \u0275REQUESTS_CONTRIBUTE_TO_STABILITY, Or as \u0275withHttpTransferCache };
/*! Bundled license information:

@angular/common/fesm2022/module.mjs:
@angular/common/fesm2022/http.mjs:
  (**
   * @license Angular v20.3.16
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
