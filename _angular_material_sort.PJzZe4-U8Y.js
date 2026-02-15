import { a as p } from "@nf-internal/chunk-4MZRILT7";
import { b as m } from "@nf-internal/chunk-BMKAYT4V";
import { a as h } from "@nf-internal/chunk-2H5YBILG";
import "@nf-internal/chunk-X7SFHLJ5";
import "@nf-internal/chunk-QA6ELNH7";
import "@nf-internal/chunk-NCEIK542";
import { a as l } from "@nf-internal/chunk-7N7HFQKY";
import "@nf-internal/chunk-FSAIB72R";
import "@nf-internal/chunk-DQM2BKPX";
import "@nf-internal/chunk-4CLCTAJ7";
import * as e from "@angular/core";
import { InjectionToken as _, EventEmitter as g, booleanAttribute as n, Optional as b, SkipSelf as v, inject as s, ChangeDetectorRef as D, ElementRef as S, signal as w } from "@angular/core";
import { FocusMonitor as C, AriaDescriber as M } from "@angular/cdk/a11y";
import { ReplaySubject as E, Subject as f, merge as A } from "rxjs";
import "@angular/cdk/bidi";
var O = ["mat-sort-header", ""], I = ["*"];
function x(r, c) { r & 1 && (e.\u0275\u0275domElementStart(0, "div", 2), e.\u0275\u0275namespaceSVG(), e.\u0275\u0275domElementStart(1, "svg", 3), e.\u0275\u0275domElement(2, "path", 4), e.\u0275\u0275domElementEnd()()); }
var u = new _("MAT_SORT_DEFAULT_OPTIONS"), H = (() => { class r {
    _defaultOptions;
    _initializedStream = new E(1);
    sortables = new Map;
    _stateChanges = new f;
    active;
    start = "asc";
    get direction() { return this._direction; }
    set direction(t) { this._direction = t; }
    _direction = "";
    disableClear;
    disabled = !1;
    sortChange = new g;
    initialized = this._initializedStream;
    constructor(t) { this._defaultOptions = t; }
    register(t) { this.sortables.set(t.id, t); }
    deregister(t) { this.sortables.delete(t.id); }
    sort(t) { this.active != t.id ? (this.active = t.id, this.direction = t.start ? t.start : this.start) : this.direction = this.getNextSortDirection(t), this.sortChange.emit({ active: this.active, direction: this.direction }); }
    getNextSortDirection(t) { if (!t)
        return ""; let o = t?.disableClear ?? this.disableClear ?? !!this._defaultOptions?.disableClear, i = R(t.start || this.start, o), a = i.indexOf(this.direction) + 1; return a >= i.length && (a = 0), i[a]; }
    ngOnInit() { this._initializedStream.next(); }
    ngOnChanges() { this._stateChanges.next(); }
    ngOnDestroy() { this._stateChanges.complete(), this._initializedStream.complete(); }
    static \u0275fac = function (o) { return new (o || r)(e.\u0275\u0275directiveInject(u, 8)); };
    static \u0275dir = e.\u0275\u0275defineDirective({ type: r, selectors: [["", "matSort", ""]], hostAttrs: [1, "mat-sort"], inputs: { active: [0, "matSortActive", "active"], start: [0, "matSortStart", "start"], direction: [0, "matSortDirection", "direction"], disableClear: [2, "matSortDisableClear", "disableClear", n], disabled: [2, "matSortDisabled", "disabled", n] }, outputs: { sortChange: "matSortChange" }, exportAs: ["matSort"], features: [e.\u0275\u0275NgOnChangesFeature] });
} return r; })();
function R(r, c) { let t = ["asc", "desc"]; return r == "desc" && t.reverse(), c || t.push(""), t; }
var d = (() => { class r {
    changes = new f;
    static \u0275fac = function (o) { return new (o || r); };
    static \u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" });
} return r; })();
function P(r) { return r || new d; }
var T = { provide: d, deps: [[new b, new v, d]], useFactory: P }, tt = (() => {
    class r {
        _intl = s(d);
        _sort = s(H, { optional: !0 });
        _columnDef = s("MAT_SORT_HEADER_COLUMN_DEF", { optional: !0 });
        _changeDetectorRef = s(D);
        _focusMonitor = s(C);
        _elementRef = s(S);
        _ariaDescriber = s(M, { optional: !0 });
        _renderChanges;
        _animationsDisabled = m();
        _recentlyCleared = w(null);
        _sortButton;
        id;
        arrowPosition = "after";
        start;
        disabled = !1;
        get sortActionDescription() { return this._sortActionDescription; }
        set sortActionDescription(t) { this._updateSortActionDescription(t); }
        _sortActionDescription = "Sort";
        disableClear;
        constructor() { s(l).load(p); let t = s(u, { optional: !0 }); this._sort, t?.arrowPosition && (this.arrowPosition = t?.arrowPosition); }
        ngOnInit() { !this.id && this._columnDef && (this.id = this._columnDef.name), this._sort.register(this), this._renderChanges = A(this._sort._stateChanges, this._sort.sortChange).subscribe(() => this._changeDetectorRef.markForCheck()), this._sortButton = this._elementRef.nativeElement.querySelector(".mat-sort-header-container"), this._updateSortActionDescription(this._sortActionDescription); }
        ngAfterViewInit() { this._focusMonitor.monitor(this._elementRef, !0).subscribe(() => { Promise.resolve().then(() => this._recentlyCleared.set(null)); }); }
        ngOnDestroy() { this._focusMonitor.stopMonitoring(this._elementRef), this._sort.deregister(this), this._renderChanges?.unsubscribe(), this._sortButton && this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription); }
        _toggleOnInteraction() { if (!this._isDisabled()) {
            let t = this._isSorted(), o = this._sort.direction;
            this._sort.sort(this), this._recentlyCleared.set(t && !this._isSorted() ? o : null);
        } }
        _handleKeydown(t) { (t.keyCode === 32 || t.keyCode === 13) && (t.preventDefault(), this._toggleOnInteraction()); }
        _isSorted() { return this._sort.active == this.id && (this._sort.direction === "asc" || this._sort.direction === "desc"); }
        _isDisabled() { return this._sort.disabled || this.disabled; }
        _getAriaSortAttribute() { return this._isSorted() ? this._sort.direction == "asc" ? "ascending" : "descending" : "none"; }
        _renderArrow() { return !this._isDisabled() || this._isSorted(); }
        _updateSortActionDescription(t) { this._sortButton && (this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription), this._ariaDescriber?.describe(this._sortButton, t)), this._sortActionDescription = t; }
        static \u0275fac = function (o) { return new (o || r); };
        static \u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["", "mat-sort-header", ""]], hostAttrs: [1, "mat-sort-header"], hostVars: 3, hostBindings: function (o, i) { o & 1 && e.\u0275\u0275listener("click", function () { return i._toggleOnInteraction(); })("keydown", function (y) { return i._handleKeydown(y); })("mouseleave", function () { return i._recentlyCleared.set(null); }), o & 2 && (e.\u0275\u0275attribute("aria-sort", i._getAriaSortAttribute()), e.\u0275\u0275classProp("mat-sort-header-disabled", i._isDisabled())); }, inputs: { id: [0, "mat-sort-header", "id"], arrowPosition: "arrowPosition", start: "start", disabled: [2, "disabled", "disabled", n], sortActionDescription: "sortActionDescription", disableClear: [2, "disableClear", "disableClear", n] }, exportAs: ["matSortHeader"], attrs: O, ngContentSelectors: I, decls: 4, vars: 17, consts: [[1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], [1, "mat-sort-header-arrow"], ["viewBox", "0 -960 960 960", "focusable", "false", "aria-hidden", "true"], ["d", "M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]], template: function (o, i) { o & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275domElementStart(0, "div", 0)(1, "div", 1), e.\u0275\u0275projection(2), e.\u0275\u0275domElementEnd(), e.\u0275\u0275conditionalCreate(3, x, 3, 0, "div", 2), e.\u0275\u0275domElementEnd()), o & 2 && (e.\u0275\u0275classProp("mat-sort-header-sorted", i._isSorted())("mat-sort-header-position-before", i.arrowPosition === "before")("mat-sort-header-descending", i._sort.direction === "desc")("mat-sort-header-ascending", i._sort.direction === "asc")("mat-sort-header-recently-cleared-ascending", i._recentlyCleared() === "asc")("mat-sort-header-recently-cleared-descending", i._recentlyCleared() === "desc")("mat-sort-header-animations-disabled", i._animationsDisabled), e.\u0275\u0275attribute("tabindex", i._isDisabled() ? null : 0)("role", i._isDisabled() ? null : "button"), e.\u0275\u0275advance(3), e.\u0275\u0275conditional(i._renderArrow() ? 3 : -1)); }, styles: [`.mat-sort-header{cursor:pointer}.mat-sort-header-disabled{cursor:default}.mat-sort-header-container{display:flex;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}@keyframes _mat-sort-header-recently-cleared-ascending{from{transform:translateY(0);opacity:1}to{transform:translateY(-25%);opacity:0}}@keyframes _mat-sort-header-recently-cleared-descending{from{transform:translateY(0) rotate(180deg);opacity:1}to{transform:translateY(25%) rotate(180deg);opacity:0}}.mat-sort-header-arrow{height:12px;width:12px;position:relative;transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1),opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;overflow:visible;color:var(--mat-sort-arrow-color, var(--mat-sys-on-surface))}.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow,.mat-sort-header.cdk-program-focused .mat-sort-header-arrow,.mat-sort-header:hover .mat-sort-header-arrow{opacity:.54}.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow{opacity:1}.mat-sort-header-descending .mat-sort-header-arrow{transform:rotate(180deg)}.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow{transform:translateY(-25%)}.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow{transition:none;animation:_mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards}.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow{transition:none;animation:_mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards}.mat-sort-header-animations-disabled .mat-sort-header-arrow{transition-duration:0ms;animation-duration:0ms}.mat-sort-header-arrow svg{width:24px;height:24px;fill:currentColor;position:absolute;top:50%;left:50%;margin:-12px 0 0 -12px;transform:translateZ(0)}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}
`], encapsulation: 2, changeDetection: 0 });
    }
    return r;
})(), et = (() => { class r {
    static \u0275fac = function (o) { return new (o || r); };
    static \u0275mod = e.\u0275\u0275defineNgModule({ type: r });
    static \u0275inj = e.\u0275\u0275defineInjector({ providers: [T], imports: [h] });
} return r; })(), rt = { indicator: { type: 7, name: "indicator", definitions: [{ type: 0, name: "active-asc, asc", styles: { type: 6, styles: { transform: "translateY(0px)" }, offset: null } }, { type: 0, name: "active-desc, desc", styles: { type: 6, styles: { transform: "translateY(10px)" }, offset: null } }, { type: 1, expr: "active-asc <=> active-desc", animation: { type: 4, styles: null, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }, options: null }], options: {} }, leftPointer: { type: 7, name: "leftPointer", definitions: [{ type: 0, name: "active-asc, asc", styles: { type: 6, styles: { transform: "rotate(-45deg)" }, offset: null } }, { type: 0, name: "active-desc, desc", styles: { type: 6, styles: { transform: "rotate(45deg)" }, offset: null } }, { type: 1, expr: "active-asc <=> active-desc", animation: { type: 4, styles: null, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }, options: null }], options: {} }, rightPointer: { type: 7, name: "rightPointer", definitions: [{ type: 0, name: "active-asc, asc", styles: { type: 6, styles: { transform: "rotate(45deg)" }, offset: null } }, { type: 0, name: "active-desc, desc", styles: { type: 6, styles: { transform: "rotate(-45deg)" }, offset: null } }, { type: 1, expr: "active-asc <=> active-desc", animation: { type: 4, styles: null, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }, options: null }], options: {} }, arrowOpacity: { type: 7, name: "arrowOpacity", definitions: [{ type: 0, name: "desc-to-active, asc-to-active, active", styles: { type: 6, styles: { opacity: 1 }, offset: null } }, { type: 0, name: "desc-to-hint, asc-to-hint, hint", styles: { type: 6, styles: { opacity: .54 }, offset: null } }, { type: 0, name: "hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void", styles: { type: 6, styles: { opacity: 0 }, offset: null } }, { type: 1, expr: "* => asc, * => desc, * => active, * => hint, * => void", animation: { type: 4, styles: null, timings: "0ms" }, options: null }, { type: 1, expr: "* <=> *", animation: { type: 4, styles: null, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }, options: null }], options: {} }, arrowPosition: { type: 7, name: "arrowPosition", definitions: [{ type: 1, expr: "* => desc-to-hint, * => desc-to-active", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { transform: "translateY(-25%)" }, offset: null }, { type: 6, styles: { transform: "translateY(0)" }, offset: null }] }, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }, options: null }, { type: 1, expr: "* => hint-to-desc, * => active-to-desc", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { transform: "translateY(0)" }, offset: null }, { type: 6, styles: { transform: "translateY(25%)" }, offset: null }] }, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }, options: null }, { type: 1, expr: "* => asc-to-hint, * => asc-to-active", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { transform: "translateY(25%)" }, offset: null }, { type: 6, styles: { transform: "translateY(0)" }, offset: null }] }, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }, options: null }, { type: 1, expr: "* => hint-to-asc, * => active-to-asc", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { transform: "translateY(0)" }, offset: null }, { type: 6, styles: { transform: "translateY(-25%)" }, offset: null }] }, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }, options: null }, { type: 0, name: "desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active", styles: { type: 6, styles: { transform: "translateY(0)" }, offset: null } }, { type: 0, name: "hint-to-desc, active-to-desc, desc", styles: { type: 6, styles: { transform: "translateY(-25%)" }, offset: null } }, { type: 0, name: "hint-to-asc, active-to-asc, asc", styles: { type: 6, styles: { transform: "translateY(25%)" }, offset: null } }], options: {} }, allowChildren: { type: 7, name: "allowChildren", definitions: [{ type: 1, expr: "* <=> *", animation: [{ type: 11, selector: "@*", animation: { type: 9, options: null }, options: { optional: !0 } }], options: null }], options: {} } };
export { u as MAT_SORT_DEFAULT_OPTIONS, T as MAT_SORT_HEADER_INTL_PROVIDER, P as MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, H as MatSort, tt as MatSortHeader, d as MatSortHeaderIntl, et as MatSortModule, rt as matSortAnimations };
