import { a as l } from "@nf-internal/chunk-WLM6SLJD";
import { b as c } from "@nf-internal/chunk-U6VGVGKT";
import "@nf-internal/chunk-4CLCTAJ7";
import { BidiModule as f } from "@angular/cdk/bidi";
import * as t from "@angular/core";
import { InjectionToken as _, EventEmitter as p, booleanAttribute as s, inject as a, ChangeDetectorRef as g, ElementRef as b, signal as S } from "@angular/core";
import { FocusMonitor as D, AriaDescriber as v } from "@angular/cdk/a11y";
import { SPACE as y, ENTER as w } from "@angular/cdk/keycodes";
import { ReplaySubject as C, Subject as h, merge as M } from "rxjs";
import { _CdkPrivateStyleLoader as E } from "@angular/cdk/private";
import "@angular/cdk/layout";
var A = ["mat-sort-header", ""], H = ["*", [["", "matSortHeaderIcon", ""]]], I = ["*", "[matSortHeaderIcon]"];
function O(r, d) { r & 1 && (t.\u0275\u0275namespaceSVG(), t.\u0275\u0275domElementStart(0, "svg", 3), t.\u0275\u0275domElement(1, "path", 4), t.\u0275\u0275domElementEnd()); }
function k(r, d) { r & 1 && (t.\u0275\u0275domElementStart(0, "div", 2), t.\u0275\u0275projection(1, 1, null, O, 2, 0), t.\u0275\u0275domElementEnd()); }
var m = new _("MAT_SORT_DEFAULT_OPTIONS"), x = (() => { class r {
    _defaultOptions;
    _initializedStream = new C(1);
    sortables = new Map;
    _stateChanges = new h;
    active;
    start = "asc";
    get direction() { return this._direction; }
    set direction(e) { this._direction = e; }
    _direction = "";
    disableClear;
    disabled = !1;
    sortChange = new p;
    initialized = this._initializedStream;
    constructor(e) { this._defaultOptions = e; }
    register(e) { this.sortables.set(e.id, e); }
    deregister(e) { this.sortables.delete(e.id); }
    sort(e) { this.active != e.id ? (this.active = e.id, this.direction = e.start ? e.start : this.start) : this.direction = this.getNextSortDirection(e), this.sortChange.emit({ active: this.active, direction: this.direction }); }
    getNextSortDirection(e) { if (!e)
        return ""; let o = e?.disableClear ?? this.disableClear ?? !!this._defaultOptions?.disableClear, i = P(e.start || this.start, o), n = i.indexOf(this.direction) + 1; return n >= i.length && (n = 0), i[n]; }
    ngOnInit() { this._initializedStream.next(); }
    ngOnChanges() { this._stateChanges.next(); }
    ngOnDestroy() { this._stateChanges.complete(), this._initializedStream.complete(); }
    static \u0275fac = function (o) { return new (o || r)(t.\u0275\u0275directiveInject(m, 8)); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: r, selectors: [["", "matSort", ""]], hostAttrs: [1, "mat-sort"], inputs: { active: [0, "matSortActive", "active"], start: [0, "matSortStart", "start"], direction: [0, "matSortDirection", "direction"], disableClear: [2, "matSortDisableClear", "disableClear", s], disabled: [2, "matSortDisabled", "disabled", s] }, outputs: { sortChange: "matSortChange" }, exportAs: ["matSort"], features: [t.\u0275\u0275NgOnChangesFeature] });
} return r; })();
function P(r, d) { let e = ["asc", "desc"]; return r == "desc" && e.reverse(), d || e.push(""), e; }
var T = (() => { class r {
    changes = new h;
    static \u0275fac = function (o) { return new (o || r); };
    static \u0275prov = t.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" });
} return r; })(), tt = (() => {
    class r {
        _intl = a(T);
        _sort = a(x, { optional: !0 });
        _columnDef = a("MAT_SORT_HEADER_COLUMN_DEF", { optional: !0 });
        _changeDetectorRef = a(g);
        _focusMonitor = a(D);
        _elementRef = a(b);
        _ariaDescriber = a(v, { optional: !0 });
        _renderChanges;
        _animationsDisabled = c();
        _recentlyCleared = S(null);
        _sortButton;
        id;
        arrowPosition = "after";
        start;
        disabled = !1;
        get sortActionDescription() { return this._sortActionDescription; }
        set sortActionDescription(e) { this._updateSortActionDescription(e); }
        _sortActionDescription = "Sort";
        disableClear;
        constructor() { a(E).load(l); let e = a(m, { optional: !0 }); this._sort, e?.arrowPosition && (this.arrowPosition = e?.arrowPosition); }
        ngOnInit() { !this.id && this._columnDef && (this.id = this._columnDef.name), this._sort.register(this), this._renderChanges = M(this._sort._stateChanges, this._sort.sortChange).subscribe(() => this._changeDetectorRef.markForCheck()), this._sortButton = this._elementRef.nativeElement.querySelector(".mat-sort-header-container"), this._updateSortActionDescription(this._sortActionDescription); }
        ngAfterViewInit() { this._focusMonitor.monitor(this._elementRef, !0).subscribe(() => { Promise.resolve().then(() => this._recentlyCleared.set(null)); }); }
        ngOnDestroy() { this._focusMonitor.stopMonitoring(this._elementRef), this._sort.deregister(this), this._renderChanges?.unsubscribe(), this._sortButton && this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription); }
        _toggleOnInteraction() { if (!this._isDisabled()) {
            let e = this._isSorted(), o = this._sort.direction;
            this._sort.sort(this), this._recentlyCleared.set(e && !this._isSorted() ? o : null);
        } }
        _handleKeydown(e) { (e.keyCode === y || e.keyCode === w) && (e.preventDefault(), this._toggleOnInteraction()); }
        _isSorted() { return this._sort.active == this.id && (this._sort.direction === "asc" || this._sort.direction === "desc"); }
        _isDisabled() { return this._sort.disabled || this.disabled; }
        _getAriaSortAttribute() { return this._isSorted() ? this._sort.direction == "asc" ? "ascending" : "descending" : "none"; }
        _renderArrow() { return !this._isDisabled() || this._isSorted(); }
        _updateSortActionDescription(e) { this._sortButton && (this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription), this._ariaDescriber?.describe(this._sortButton, e)), this._sortActionDescription = e; }
        static \u0275fac = function (o) { return new (o || r); };
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: r, selectors: [["", "mat-sort-header", ""]], hostAttrs: [1, "mat-sort-header"], hostVars: 3, hostBindings: function (o, i) { o & 1 && t.\u0275\u0275listener("click", function () { return i._toggleOnInteraction(); })("keydown", function (u) { return i._handleKeydown(u); })("mouseleave", function () { return i._recentlyCleared.set(null); }), o & 2 && (t.\u0275\u0275attribute("aria-sort", i._getAriaSortAttribute()), t.\u0275\u0275classProp("mat-sort-header-disabled", i._isDisabled())); }, inputs: { id: [0, "mat-sort-header", "id"], arrowPosition: "arrowPosition", start: "start", disabled: [2, "disabled", "disabled", s], sortActionDescription: "sortActionDescription", disableClear: [2, "disableClear", "disableClear", s] }, exportAs: ["matSortHeader"], attrs: A, ngContentSelectors: I, decls: 4, vars: 17, consts: [[1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], [1, "mat-sort-header-arrow"], ["viewBox", "0 -960 960 960", "focusable", "false", "aria-hidden", "true"], ["d", "M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]], template: function (o, i) { o & 1 && (t.\u0275\u0275projectionDef(H), t.\u0275\u0275domElementStart(0, "div", 0)(1, "div", 1), t.\u0275\u0275projection(2), t.\u0275\u0275domElementEnd(), t.\u0275\u0275conditionalCreate(3, k, 3, 0, "div", 2), t.\u0275\u0275domElementEnd()), o & 2 && (t.\u0275\u0275classProp("mat-sort-header-sorted", i._isSorted())("mat-sort-header-position-before", i.arrowPosition === "before")("mat-sort-header-descending", i._sort.direction === "desc")("mat-sort-header-ascending", i._sort.direction === "asc")("mat-sort-header-recently-cleared-ascending", i._recentlyCleared() === "asc")("mat-sort-header-recently-cleared-descending", i._recentlyCleared() === "desc")("mat-sort-header-animations-disabled", i._animationsDisabled), t.\u0275\u0275attribute("tabindex", i._isDisabled() ? null : 0)("role", i._isDisabled() ? null : "button"), t.\u0275\u0275advance(3), t.\u0275\u0275conditional(i._renderArrow() ? 3 : -1)); }, styles: [`.mat-sort-header{cursor:pointer}.mat-sort-header-disabled{cursor:default}.mat-sort-header-container{display:flex;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}@keyframes _mat-sort-header-recently-cleared-ascending{from{transform:translateY(0);opacity:1}to{transform:translateY(-25%);opacity:0}}@keyframes _mat-sort-header-recently-cleared-descending{from{transform:translateY(0) rotate(180deg);opacity:1}to{transform:translateY(25%) rotate(180deg);opacity:0}}.mat-sort-header-arrow{height:12px;width:12px;position:relative;transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1),opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;overflow:visible;color:var(--mat-sort-arrow-color, var(--mat-sys-on-surface))}.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow,.mat-sort-header.cdk-program-focused .mat-sort-header-arrow,.mat-sort-header:hover .mat-sort-header-arrow{opacity:.54}.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow{opacity:1}.mat-sort-header-descending .mat-sort-header-arrow{transform:rotate(180deg)}.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow{transform:translateY(-25%)}.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow{transition:none;animation:_mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards}.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow{transition:none;animation:_mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards}.mat-sort-header-animations-disabled .mat-sort-header-arrow{transition-duration:0ms;animation-duration:0ms}.mat-sort-header-arrow>svg,.mat-sort-header-arrow [matSortHeaderIcon]{width:24px;height:24px;fill:currentColor;position:absolute;top:50%;left:50%;margin:-12px 0 0 -12px;transform:translateZ(0)}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}
`], encapsulation: 2, changeDetection: 0 });
    }
    return r;
})(), et = (() => { class r {
    static \u0275fac = function (o) { return new (o || r); };
    static \u0275mod = t.\u0275\u0275defineNgModule({ type: r });
    static \u0275inj = t.\u0275\u0275defineInjector({ imports: [f] });
} return r; })();
export { m as MAT_SORT_DEFAULT_OPTIONS, x as MatSort, tt as MatSortHeader, T as MatSortHeaderIntl, et as MatSortModule };
