import { a as M, b as V } from "@nf-internal/chunk-4CLCTAJ7";
import { DOCUMENT as L, \u0275getDOM as ae } from "@angular/common";
import * as l from "@angular/core";
import { InjectionToken as Y, \u0275RuntimeError as I, APP_ID as K, CSP_NONCE as W, PLATFORM_ID as le, ViewEncapsulation as w, \u0275TracingService as ce, RendererStyleFlags2 as R, \u0275allLeavingAnimations as de } from "@angular/core";
var v = class {
    _doc;
    constructor(n) { this._doc = n; }
    manager;
}, A = (() => { class o extends v {
    constructor(e) { super(e); }
    supports(e) { return !0; }
    addEventListener(e, t, r, s) { return e.addEventListener(t, r, s), () => this.removeEventListener(e, t, r, s); }
    removeEventListener(e, t, r, s) { return e.removeEventListener(t, r, s); }
    static \u0275fac = function (t) { return new (t || o)(l.\u0275\u0275inject(L)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac });
} return o; })(), C = new Y(""), N = (() => { class o {
    _zone;
    _plugins;
    _eventNameToPlugin = new Map;
    constructor(e, t) { this._zone = t, e.forEach(i => { i.manager = this; }); let r = e.filter(i => !(i instanceof A)); this._plugins = r.slice().reverse(); let s = e.find(i => i instanceof A); s && this._plugins.push(s); }
    addEventListener(e, t, r, s) { return this._findPluginFor(t).addEventListener(e, t, r, s); }
    getZone() { return this._zone; }
    _findPluginFor(e) { let t = this._eventNameToPlugin.get(e); if (t)
        return t; if (t = this._plugins.find(s => s.supports(e)), !t)
        throw new I(5101, !1); return this._eventNameToPlugin.set(e, t), t; }
    static \u0275fac = function (t) { return new (t || o)(l.\u0275\u0275inject(C), l.\u0275\u0275inject(l.NgZone)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac });
} return o; })(), D = "ng-app-id";
function $(o) { for (let n of o)
    n.remove(); }
function G(o, n) { let e = n.createElement("style"); return e.textContent = o, e; }
function ue(o, n, e, t) { let r = o.head?.querySelectorAll(`style[${D}="${n}"],link[${D}="${n}"]`); if (r)
    for (let s of r)
        s.removeAttribute(D), s instanceof HTMLLinkElement ? t.set(s.href.slice(s.href.lastIndexOf("/") + 1), { usage: 0, elements: [s] }) : s.textContent && e.set(s.textContent, { usage: 0, elements: [s] }); }
function b(o, n) { let e = n.createElement("link"); return e.setAttribute("rel", "stylesheet"), e.setAttribute("href", o), e; }
var k = (() => { class o {
    doc;
    appId;
    nonce;
    inline = new Map;
    external = new Map;
    hosts = new Set;
    constructor(e, t, r, s = {}) { this.doc = e, this.appId = t, this.nonce = r, ue(e, t, this.inline, this.external), this.hosts.add(e.head); }
    addStyles(e, t) { for (let r of e)
        this.addUsage(r, this.inline, G); t?.forEach(r => this.addUsage(r, this.external, b)); }
    removeStyles(e, t) { for (let r of e)
        this.removeUsage(r, this.inline); t?.forEach(r => this.removeUsage(r, this.external)); }
    addUsage(e, t, r) { let s = t.get(e); s ? s.usage++ : t.set(e, { usage: 1, elements: [...this.hosts].map(i => this.addElement(i, r(e, this.doc))) }); }
    removeUsage(e, t) { let r = t.get(e); r && (r.usage--, r.usage <= 0 && ($(r.elements), t.delete(e))); }
    ngOnDestroy() { for (let [, { elements: e }] of [...this.inline, ...this.external])
        $(e); this.hosts.clear(); }
    addHost(e) { this.hosts.add(e); for (let [t, { elements: r }] of this.inline)
        r.push(this.addElement(e, G(t, this.doc))); for (let [t, { elements: r }] of this.external)
        r.push(this.addElement(e, b(t, this.doc))); }
    removeHost(e) { this.hosts.delete(e); }
    addElement(e, t) { return this.nonce && t.setAttribute("nonce", this.nonce), typeof ngServerMode < "u" && ngServerMode && t.setAttribute(D, this.appId), e.appendChild(t); }
    static \u0275fac = function (t) { return new (t || o)(l.\u0275\u0275inject(L), l.\u0275\u0275inject(K), l.\u0275\u0275inject(W, 8), l.\u0275\u0275inject(le)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac });
} return o; })(), _ = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/", math: "http://www.w3.org/1998/Math/MathML" }, x = /%COMP%/g;
var z = "%COMP%", fe = `_nghost-${z}`, he = `_ngcontent-${z}`, pe = !0, me = new Y("", { providedIn: "root", factory: () => pe });
function ge(o) { return he.replace(x, o); }
function ve(o) { return fe.replace(x, o); }
function X(o, n) { return n.map(e => e.replace(x, o)); }
var U = (() => { class o {
    eventManager;
    sharedStylesHost;
    appId;
    removeStylesOnCompDestroy;
    doc;
    ngZone;
    nonce;
    tracingService;
    rendererByCompId = new Map;
    defaultRenderer;
    platformIsServer;
    constructor(e, t, r, s, i, a, u = null, c = null) { this.eventManager = e, this.sharedStylesHost = t, this.appId = r, this.removeStylesOnCompDestroy = s, this.doc = i, this.ngZone = a, this.nonce = u, this.tracingService = c, this.platformIsServer = typeof ngServerMode < "u" && ngServerMode, this.defaultRenderer = new y(e, i, a, this.platformIsServer, this.tracingService); }
    createRenderer(e, t) { if (!e || !t)
        return this.defaultRenderer; typeof ngServerMode < "u" && ngServerMode && t.encapsulation === w.ShadowDom && (t = V(M({}, t), { encapsulation: w.Emulated })); let r = this.getOrCreateRenderer(e, t); return r instanceof T ? r.applyToHost(e) : r instanceof E && r.applyStyles(), r; }
    getOrCreateRenderer(e, t) { let r = this.rendererByCompId, s = r.get(t.id); if (!s) {
        let i = this.doc, a = this.ngZone, u = this.eventManager, c = this.sharedStylesHost, d = this.removeStylesOnCompDestroy, p = this.platformIsServer, h = this.tracingService;
        switch (t.encapsulation) {
            case w.Emulated:
                s = new T(u, c, t, this.appId, d, i, a, p, h);
                break;
            case w.ShadowDom: return new P(u, c, e, t, i, a, this.nonce, p, h);
            default:
                s = new E(u, c, t, d, i, a, p, h);
                break;
        }
        r.set(t.id, s);
    } return s; }
    ngOnDestroy() { this.rendererByCompId.clear(); }
    componentReplaced(e) { this.rendererByCompId.delete(e); }
    static \u0275fac = function (t) { return new (t || o)(l.\u0275\u0275inject(N), l.\u0275\u0275inject(k), l.\u0275\u0275inject(K), l.\u0275\u0275inject(me), l.\u0275\u0275inject(L), l.\u0275\u0275inject(l.NgZone), l.\u0275\u0275inject(W), l.\u0275\u0275inject(ce, 8)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac });
} return o; })(), y = class {
    eventManager;
    doc;
    ngZone;
    platformIsServer;
    tracingService;
    data = Object.create(null);
    throwOnSyntheticProps = !0;
    constructor(n, e, t, r, s) { this.eventManager = n, this.doc = e, this.ngZone = t, this.platformIsServer = r, this.tracingService = s; }
    destroy() { }
    destroyNode = null;
    createElement(n, e) { return e ? this.doc.createElementNS(_[e] || e, n) : this.doc.createElement(n); }
    createComment(n) { return this.doc.createComment(n); }
    createText(n) { return this.doc.createTextNode(n); }
    appendChild(n, e) { (Z(n) ? n.content : n).appendChild(e); }
    insertBefore(n, e, t) { n && (Z(n) ? n.content : n).insertBefore(e, t); }
    removeChild(n, e) { e.remove(); }
    selectRootElement(n, e) { let t = typeof n == "string" ? this.doc.querySelector(n) : n; if (!t)
        throw new I(-5104, !1); return e || (t.textContent = ""), t; }
    parentNode(n) { return n.parentNode; }
    nextSibling(n) { return n.nextSibling; }
    setAttribute(n, e, t, r) { if (r) {
        e = r + ":" + e;
        let s = _[r];
        s ? n.setAttributeNS(s, e, t) : n.setAttribute(e, t);
    }
    else
        n.setAttribute(e, t); }
    removeAttribute(n, e, t) { if (t) {
        let r = _[t];
        r ? n.removeAttributeNS(r, e) : n.removeAttribute(`${t}:${e}`);
    }
    else
        n.removeAttribute(e); }
    addClass(n, e) { n.classList.add(e); }
    removeClass(n, e) { n.classList.remove(e); }
    setStyle(n, e, t, r) { r & (R.DashCase | R.Important) ? n.style.setProperty(e, t, r & R.Important ? "important" : "") : n.style[e] = t; }
    removeStyle(n, e, t) { t & R.DashCase ? n.style.removeProperty(e) : n.style[e] = ""; }
    setProperty(n, e, t) { n != null && (n[e] = t); }
    setValue(n, e) { n.nodeValue = e; }
    listen(n, e, t, r) { if (typeof n == "string" && (n = ae().getGlobalEventTarget(this.doc, n), !n))
        throw new I(5102, !1); let s = this.decoratePreventDefault(t); return this.tracingService?.wrapEventListener && (s = this.tracingService.wrapEventListener(n, e, s)), this.eventManager.addEventListener(n, e, s, r); }
    decoratePreventDefault(n) { return e => { if (e === "__ngUnwrap__")
        return n; (typeof ngServerMode < "u" && ngServerMode ? this.ngZone.runGuarded(() => n(e)) : n(e)) === !1 && e.preventDefault(); }; }
};
function Z(o) { return o.tagName === "TEMPLATE" && o.content !== void 0; }
var P = class extends y {
    sharedStylesHost;
    hostEl;
    shadowRoot;
    constructor(n, e, t, r, s, i, a, u, c) { super(n, s, i, u, c), this.sharedStylesHost = e, this.hostEl = t, this.shadowRoot = t.attachShadow({ mode: "open" }), this.sharedStylesHost.addHost(this.shadowRoot); let d = r.styles; d = X(r.id, d); for (let h of d) {
        let g = document.createElement("style");
        a && g.setAttribute("nonce", a), g.textContent = h, this.shadowRoot.appendChild(g);
    } let p = r.getExternalStyles?.(); if (p)
        for (let h of p) {
            let g = b(h, s);
            a && g.setAttribute("nonce", a), this.shadowRoot.appendChild(g);
        } }
    nodeOrShadowRoot(n) { return n === this.hostEl ? this.shadowRoot : n; }
    appendChild(n, e) { return super.appendChild(this.nodeOrShadowRoot(n), e); }
    insertBefore(n, e, t) { return super.insertBefore(this.nodeOrShadowRoot(n), e, t); }
    removeChild(n, e) { return super.removeChild(null, e); }
    parentNode(n) { return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n))); }
    destroy() { this.sharedStylesHost.removeHost(this.shadowRoot); }
}, E = class extends y {
    sharedStylesHost;
    removeStylesOnCompDestroy;
    styles;
    styleUrls;
    constructor(n, e, t, r, s, i, a, u, c) { super(n, s, i, a, u), this.sharedStylesHost = e, this.removeStylesOnCompDestroy = r; let d = t.styles; this.styles = c ? X(c, d) : d, this.styleUrls = t.getExternalStyles?.(c); }
    applyStyles() { this.sharedStylesHost.addStyles(this.styles, this.styleUrls); }
    destroy() { this.removeStylesOnCompDestroy && de.size === 0 && this.sharedStylesHost.removeStyles(this.styles, this.styleUrls); }
}, T = class extends E {
    contentAttr;
    hostAttr;
    constructor(n, e, t, r, s, i, a, u, c) { let d = r + "-" + t.id; super(n, e, t, s, i, a, u, c, d), this.contentAttr = ge(d), this.hostAttr = ve(d); }
    applyToHost(n) { this.applyStyles(), this.setAttribute(n, this.hostAttr, ""); }
    createElement(n, e) { let t = super.createElement(n, e); return super.setAttribute(t, this.contentAttr, ""), t; }
};
import { \u0275DomAdapter as ye, \u0275setRootDomAdapter as Ee, \u0275parseCookieValue as Se, \u0275getDOM as ee, DOCUMENT as O, \u0275PLATFORM_BROWSER_ID as Me, XhrFactory as we, CommonModule as Re } from "@angular/common";
import * as f from "@angular/core";
import { \u0275global as m, \u0275RuntimeError as De, \u0275internalCreateApplication as te, PLATFORM_ID as Ae, PLATFORM_INITIALIZER as Te, createPlatformFactory as Ce, platformCore as Oe, InjectionToken as tt, \u0275TESTABILITY_GETTER as B, \u0275TESTABILITY as _e, Testability as H, NgZone as q, TestabilityRegistry as J, \u0275INJECTOR_SCOPE as Ie, ErrorHandler as ne, RendererFactory2 as be, ApplicationModule as Pe, \u0275setDocument as Le } from "@angular/core";
var j = class o extends ye {
    supportsDOMEvents = !0;
    static makeCurrent() { Ee(new o); }
    onAndCancel(n, e, t, r) { return n.addEventListener(e, t, r), () => { n.removeEventListener(e, t, r); }; }
    dispatchEvent(n, e) { n.dispatchEvent(e); }
    remove(n) { n.remove(); }
    createElement(n, e) { return e = e || this.getDefaultDocument(), e.createElement(n); }
    createHtmlDocument() { return document.implementation.createHTMLDocument("fakeTitle"); }
    getDefaultDocument() { return document; }
    isElementNode(n) { return n.nodeType === Node.ELEMENT_NODE; }
    isShadowRoot(n) { return n instanceof DocumentFragment; }
    getGlobalEventTarget(n, e) { return e === "window" ? window : e === "document" ? n : e === "body" ? n.body : null; }
    getBaseHref(n) { let e = Ne(); return e == null ? null : ke(e); }
    resetBaseElement() { S = null; }
    getUserAgent() { return window.navigator.userAgent; }
    getCookie(n) { return Se(document.cookie, n); }
}, S = null;
function Ne() { return S = S || document.head.querySelector("base"), S ? S.getAttribute("href") : null; }
function ke(o) { return new URL(o, document.baseURI).pathname; }
var F = class {
    addToWindow(n) { m.getAngularTestability = (t, r = !0) => { let s = n.findTestabilityInTree(t, r); if (s == null)
        throw new De(5103, !1); return s; }, m.getAllAngularTestabilities = () => n.getAllTestabilities(), m.getAllAngularRootElements = () => n.getAllRootElements(); let e = t => { let r = m.getAllAngularTestabilities(), s = r.length, i = function () { s--, s == 0 && t(); }; r.forEach(a => { a.whenStable(i); }); }; m.frameworkStabilizers || (m.frameworkStabilizers = []), m.frameworkStabilizers.push(e); }
    findTestabilityInTree(n, e, t) { if (e == null)
        return null; let r = n.getTestability(e); return r ?? (t ? ee().isShadowRoot(e) ? this.findTestabilityInTree(n, e.host, !0) : this.findTestabilityInTree(n, e.parentElement, !0) : null); }
}, xe = (() => { class o {
    build() { return new XMLHttpRequest; }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275prov = f.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac });
} return o; })(), Q = ["alt", "control", "meta", "shift"], Ue = { "\b": "Backspace", "	": "Tab", "\x7F": "Delete", "\x1B": "Escape", Del: "Delete", Esc: "Escape", Left: "ArrowLeft", Right: "ArrowRight", Up: "ArrowUp", Down: "ArrowDown", Menu: "ContextMenu", Scroll: "ScrollLock", Win: "OS" }, Be = { alt: o => o.altKey, control: o => o.ctrlKey, meta: o => o.metaKey, shift: o => o.shiftKey }, He = (() => { class o extends v {
    constructor(e) { super(e); }
    supports(e) { return o.parseEventName(e) != null; }
    addEventListener(e, t, r, s) { let i = o.parseEventName(t), a = o.eventCallback(i.fullKey, r, this.manager.getZone()); return this.manager.getZone().runOutsideAngular(() => ee().onAndCancel(e, i.domEventName, a, s)); }
    static parseEventName(e) { let t = e.toLowerCase().split("."), r = t.shift(); if (t.length === 0 || !(r === "keydown" || r === "keyup"))
        return null; let s = o._normalizeKey(t.pop()), i = "", a = t.indexOf("code"); if (a > -1 && (t.splice(a, 1), i = "code."), Q.forEach(c => { let d = t.indexOf(c); d > -1 && (t.splice(d, 1), i += c + "."); }), i += s, t.length != 0 || s.length === 0)
        return null; let u = {}; return u.domEventName = r, u.fullKey = i, u; }
    static matchEventFullKeyCode(e, t) { let r = Ue[e.key] || e.key, s = ""; return t.indexOf("code.") > -1 && (r = e.code, s = "code."), r == null || !r ? !1 : (r = r.toLowerCase(), r === " " ? r = "space" : r === "." && (r = "dot"), Q.forEach(i => { if (i !== r) {
        let a = Be[i];
        a(e) && (s += i + ".");
    } }), s += r, s === t); }
    static eventCallback(e, t, r) { return s => { o.matchEventFullKeyCode(s, e) && r.runGuarded(() => t(s)); }; }
    static _normalizeKey(e) { return e === "esc" ? "escape" : e; }
    static \u0275fac = function (t) { return new (t || o)(f.\u0275\u0275inject(O)); };
    static \u0275prov = f.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac });
} return o; })();
function st(o, n, e) { let t = M({ rootComponent: o, platformRef: e?.platformRef }, re(n)); return te(t); }
function it(o) { return te(re(o)); }
function re(o) { return { appProviders: [...ie, ...o?.providers ?? []], platformProviders: oe }; }
function at() { return [...se]; }
function je() { j.makeCurrent(); }
function Fe() { return new ne; }
function Ve() { return Le(document), document; }
var oe = [{ provide: Ae, useValue: Me }, { provide: Te, useValue: je, multi: !0 }, { provide: O, useFactory: Ve }], lt = Ce(Oe, "browser", oe);
var se = [{ provide: B, useClass: F }, { provide: _e, useClass: H, deps: [q, J, B] }, { provide: H, useClass: H, deps: [q, J, B] }], ie = [{ provide: Ie, useValue: "root" }, { provide: ne, useFactory: Fe }, { provide: C, useClass: A, multi: !0, deps: [O] }, { provide: C, useClass: He, multi: !0, deps: [O] }, U, k, N, { provide: be, useExisting: U }, { provide: we, useClass: xe }, []], ct = (() => { class o {
    constructor() { }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275mod = f.\u0275\u0275defineNgModule({ type: o });
    static \u0275inj = f.\u0275\u0275defineInjector({ providers: [...ie, ...se], imports: [Re, Pe] });
} return o; })();
export { v as a, A as b, C as c, N as d, k as e, me as f, U as g, j as h, F as i, He as j, st as k, it as l, at as m, lt as n, ct as o };
/*! Bundled license information:

@angular/platform-browser/fesm2022/dom_renderer.mjs:
@angular/platform-browser/fesm2022/browser.mjs:
  (**
   * @license Angular v20.3.16
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
