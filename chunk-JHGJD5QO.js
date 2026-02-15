import * as l from "@angular/core";
import { InjectionToken as c, inject as s, DOCUMENT as g, signal as v, EventEmitter as f } from "@angular/core";
var d = new c("cdk-dir-doc", { providedIn: "root", factory: p });
function p() { return s(g); }
var D = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function o(e) { let a = e?.toLowerCase() || ""; return a === "auto" && typeof navigator < "u" && navigator?.language ? D.test(navigator.language) ? "rtl" : "ltr" : a === "rtl" ? "rtl" : "ltr"; }
var u = (() => { class e {
    get value() { return this.valueSignal(); }
    valueSignal = v("ltr");
    change = new f;
    constructor() { let t = s(d, { optional: !0 }); if (t) {
        let i = t.body ? t.body.dir : null, r = t.documentElement ? t.documentElement.dir : null;
        this.valueSignal.set(o(i || r || "ltr"));
    } }
    ngOnDestroy() { this.change.complete(); }
    static \u0275fac = function (i) { return new (i || e); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
import * as n from "@angular/core";
import { EventEmitter as h, signal as m } from "@angular/core";
var N = (() => { class e {
    _isInitialized = !1;
    _rawDir;
    change = new h;
    get dir() { return this.valueSignal(); }
    set dir(t) { let i = this.valueSignal(); this.valueSignal.set(o(t)), this._rawDir = t, i !== this.valueSignal() && this._isInitialized && this.change.emit(this.valueSignal()); }
    get value() { return this.dir; }
    valueSignal = m("ltr");
    ngAfterContentInit() { this._isInitialized = !0; }
    ngOnDestroy() { this.change.complete(); }
    static \u0275fac = function (i) { return new (i || e); };
    static \u0275dir = n.\u0275\u0275defineDirective({ type: e, selectors: [["", "dir", ""]], hostVars: 1, hostBindings: function (i, r) { i & 2 && n.\u0275\u0275attribute("dir", r._rawDir); }, inputs: { dir: "dir" }, outputs: { change: "dirChange" }, exportAs: ["dir"], features: [n.\u0275\u0275ProvidersFeature([{ provide: u, useExisting: e }])] });
} return e; })(), T = (() => { class e {
    static \u0275fac = function (i) { return new (i || e); };
    static \u0275mod = n.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = n.\u0275\u0275defineInjector({});
} return e; })();
export { d as a, u as b, N as c, T as d };
