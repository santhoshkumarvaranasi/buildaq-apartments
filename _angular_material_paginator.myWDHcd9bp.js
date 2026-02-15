import { i as v, k as x } from "@nf-internal/chunk-JVXSST5N";
import { b as m, l as u } from "@nf-internal/chunk-G3RZESGD";
import "@nf-internal/chunk-AE2VQQRG";
import { b as h, i as b, k as f } from "@nf-internal/chunk-IBGF4LC7";
import "@nf-internal/chunk-HP7X34UI";
import "@nf-internal/chunk-G6LXKUAW";
import "@nf-internal/chunk-ON5JNFS5";
import "@nf-internal/chunk-4MZRILT7";
import "@nf-internal/chunk-3NHTYYND";
import "@nf-internal/chunk-HEQZYXO4";
import { o as _ } from "@nf-internal/chunk-PMOWQU6U";
import "@nf-internal/chunk-BMKAYT4V";
import "@nf-internal/chunk-7ZTCWLLR";
import "@nf-internal/chunk-PRCOYL4O";
import "@nf-internal/chunk-2H5YBILG";
import "@nf-internal/chunk-X7SFHLJ5";
import "@nf-internal/chunk-ZPLV3KDQ";
import "@nf-internal/chunk-QA6ELNH7";
import "@nf-internal/chunk-K3GOACLW";
import "@nf-internal/chunk-NCEIK542";
import "@nf-internal/chunk-7N7HFQKY";
import "@nf-internal/chunk-FSAIB72R";
import "@nf-internal/chunk-ZOYGA7KW";
import "@nf-internal/chunk-6BLY3LJ7";
import "@nf-internal/chunk-JYXTBF5A";
import "@nf-internal/chunk-DQM2BKPX";
import "@nf-internal/chunk-4CLCTAJ7";
import * as t from "@angular/core";
import { Optional as S, SkipSelf as z, InjectionToken as I, inject as l, ChangeDetectorRef as y, numberAttribute as p, EventEmitter as C, booleanAttribute as g } from "@angular/core";
import { Subject as T, ReplaySubject as D } from "rxjs";
import { _IdGenerator as M } from "@angular/cdk/a11y";
import "@angular/cdk/bidi";
import "@angular/cdk/platform";
import "@angular/common";
import "rxjs/operators";
import "@angular/cdk/overlay";
import "@angular/cdk/scrolling";
import "@angular/forms";
import "@angular/cdk/portal";
function O(a, r) { if (a & 1 && (t.\u0275\u0275elementStart(0, "mat-option", 17), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), a & 2) {
    let e = r.$implicit;
    t.\u0275\u0275property("value", e), t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate1(" ", e, " ");
} }
function w(a, r) { if (a & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "mat-form-field", 14)(1, "mat-select", 16, 0), t.\u0275\u0275listener("selectionChange", function (i) { t.\u0275\u0275restoreView(e); let o = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(o._changePageSize(i.value)); }), t.\u0275\u0275repeaterCreate(3, O, 2, 2, "mat-option", 17, t.\u0275\u0275repeaterTrackByIdentity), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(5, "div", 18), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275reference(2); return t.\u0275\u0275resetView(i.open()); }), t.\u0275\u0275elementEnd()();
} if (a & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275property("appearance", e._formFieldAppearance)("color", e.color), t.\u0275\u0275advance(), t.\u0275\u0275property("value", e.pageSize)("disabled", e.disabled), t.\u0275\u0275ariaProperty("aria-labelledby", e._pageSizeLabelId), t.\u0275\u0275property("panelClass", e.selectConfig.panelClass || "")("disableOptionCentering", e.selectConfig.disableOptionCentering), t.\u0275\u0275advance(2), t.\u0275\u0275repeater(e._displayedPageSizeOptions);
} }
function L(a, r) { if (a & 1 && (t.\u0275\u0275elementStart(0, "div", 15), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), a & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate(e.pageSize);
} }
function k(a, r) { if (a & 1 && (t.\u0275\u0275elementStart(0, "div", 3)(1, "div", 13), t.\u0275\u0275text(2), t.\u0275\u0275elementEnd(), t.\u0275\u0275conditionalCreate(3, w, 6, 7, "mat-form-field", 14), t.\u0275\u0275conditionalCreate(4, L, 2, 1, "div", 15), t.\u0275\u0275elementEnd()), a & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275attribute("id", e._pageSizeLabelId), t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate1(" ", e._intl.itemsPerPageLabel, " "), t.\u0275\u0275advance(), t.\u0275\u0275conditional(e._displayedPageSizeOptions.length > 1 ? 3 : -1), t.\u0275\u0275advance(), t.\u0275\u0275conditional(e._displayedPageSizeOptions.length <= 1 ? 4 : -1);
} }
function B(a, r) { if (a & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 19), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i._buttonClicked(0, i._previousButtonsDisabled())); }), t.\u0275\u0275namespaceSVG(), t.\u0275\u0275elementStart(1, "svg", 8), t.\u0275\u0275element(2, "path", 20), t.\u0275\u0275elementEnd()();
} if (a & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("matTooltip", e._intl.firstPageLabel)("matTooltipDisabled", e._previousButtonsDisabled())("disabled", e._previousButtonsDisabled())("tabindex", e._previousButtonsDisabled() ? -1 : null), t.\u0275\u0275attribute("aria-label", e._intl.firstPageLabel);
} }
function F(a, r) { if (a & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 21), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i._buttonClicked(i.getNumberOfPages() - 1, i._nextButtonsDisabled())); }), t.\u0275\u0275namespaceSVG(), t.\u0275\u0275elementStart(1, "svg", 8), t.\u0275\u0275element(2, "path", 22), t.\u0275\u0275elementEnd()();
} if (a & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("matTooltip", e._intl.lastPageLabel)("matTooltipDisabled", e._nextButtonsDisabled())("disabled", e._nextButtonsDisabled())("tabindex", e._nextButtonsDisabled() ? -1 : null), t.\u0275\u0275attribute("aria-label", e._intl.lastPageLabel);
} }
var d = (() => { class a {
    changes = new T;
    itemsPerPageLabel = "Items per page:";
    nextPageLabel = "Next page";
    previousPageLabel = "Previous page";
    firstPageLabel = "First page";
    lastPageLabel = "Last page";
    getRangeLabel = (e, n, i) => { if (i == 0 || n == 0)
        return `0 of ${i}`; i = Math.max(i, 0); let o = e * n, s = o < i ? Math.min(o + n, i) : o + n; return `${o + 1} \u2013 ${s} of ${i}`; };
    static \u0275fac = function (n) { return new (n || a); };
    static \u0275prov = t.\u0275\u0275defineInjectable({ token: a, factory: a.\u0275fac, providedIn: "root" });
} return a; })();
function A(a) { return a || new d; }
var E = { provide: d, deps: [[new S, new z, d]], useFactory: A }, R = 50, P = class {
    pageIndex;
    previousPageIndex;
    pageSize;
    length;
}, N = new I("MAT_PAGINATOR_DEFAULT_OPTIONS"), V = (() => {
    class a {
        _intl = l(d);
        _changeDetectorRef = l(y);
        _formFieldAppearance;
        _pageSizeLabelId = l(M).getId("mat-paginator-page-size-label-");
        _intlChanges;
        _isInitialized = !1;
        _initializedStream = new D(1);
        color;
        get pageIndex() { return this._pageIndex; }
        set pageIndex(e) { this._pageIndex = Math.max(e || 0, 0), this._changeDetectorRef.markForCheck(); }
        _pageIndex = 0;
        get length() { return this._length; }
        set length(e) { this._length = e || 0, this._changeDetectorRef.markForCheck(); }
        _length = 0;
        get pageSize() { return this._pageSize; }
        set pageSize(e) { this._pageSize = Math.max(e || 0, 0), this._updateDisplayedPageSizeOptions(); }
        _pageSize;
        get pageSizeOptions() { return this._pageSizeOptions; }
        set pageSizeOptions(e) { this._pageSizeOptions = (e || []).map(n => p(n, 0)), this._updateDisplayedPageSizeOptions(); }
        _pageSizeOptions = [];
        hidePageSize = !1;
        showFirstLastButtons = !1;
        selectConfig = {};
        disabled = !1;
        page = new C;
        _displayedPageSizeOptions;
        initialized = this._initializedStream;
        constructor() { let e = this._intl, n = l(N, { optional: !0 }); if (this._intlChanges = e.changes.subscribe(() => this._changeDetectorRef.markForCheck()), n) {
            let { pageSize: i, pageSizeOptions: o, hidePageSize: s, showFirstLastButtons: c } = n;
            i != null && (this._pageSize = i), o != null && (this._pageSizeOptions = o), s != null && (this.hidePageSize = s), c != null && (this.showFirstLastButtons = c);
        } this._formFieldAppearance = n?.formFieldAppearance || "outline"; }
        ngOnInit() { this._isInitialized = !0, this._updateDisplayedPageSizeOptions(), this._initializedStream.next(); }
        ngOnDestroy() { this._initializedStream.complete(), this._intlChanges.unsubscribe(); }
        nextPage() { this.hasNextPage() && this._navigate(this.pageIndex + 1); }
        previousPage() { this.hasPreviousPage() && this._navigate(this.pageIndex - 1); }
        firstPage() { this.hasPreviousPage() && this._navigate(0); }
        lastPage() { this.hasNextPage() && this._navigate(this.getNumberOfPages() - 1); }
        hasPreviousPage() { return this.pageIndex >= 1 && this.pageSize != 0; }
        hasNextPage() { let e = this.getNumberOfPages() - 1; return this.pageIndex < e && this.pageSize != 0; }
        getNumberOfPages() { return this.pageSize ? Math.ceil(this.length / this.pageSize) : 0; }
        _changePageSize(e) { let n = this.pageIndex * this.pageSize, i = this.pageIndex; this.pageIndex = Math.floor(n / e) || 0, this.pageSize = e, this._emitPageEvent(i); }
        _nextButtonsDisabled() { return this.disabled || !this.hasNextPage(); }
        _previousButtonsDisabled() { return this.disabled || !this.hasPreviousPage(); }
        _updateDisplayedPageSizeOptions() { this._isInitialized && (this.pageSize || (this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : R), this._displayedPageSizeOptions = this.pageSizeOptions.slice(), this._displayedPageSizeOptions.indexOf(this.pageSize) === -1 && this._displayedPageSizeOptions.push(this.pageSize), this._displayedPageSizeOptions.sort((e, n) => e - n), this._changeDetectorRef.markForCheck()); }
        _emitPageEvent(e) { this.page.emit({ previousPageIndex: e, pageIndex: this.pageIndex, pageSize: this.pageSize, length: this.length }); }
        _navigate(e) { let n = this.pageIndex; e !== n && (this.pageIndex = e, this._emitPageEvent(n)); }
        _buttonClicked(e, n) { n || this._navigate(e); }
        static \u0275fac = function (n) { return new (n || a); };
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: a, selectors: [["mat-paginator"]], hostAttrs: ["role", "group", 1, "mat-mdc-paginator"], inputs: { color: "color", pageIndex: [2, "pageIndex", "pageIndex", p], length: [2, "length", "length", p], pageSize: [2, "pageSize", "pageSize", p], pageSizeOptions: "pageSizeOptions", hidePageSize: [2, "hidePageSize", "hidePageSize", g], showFirstLastButtons: [2, "showFirstLastButtons", "showFirstLastButtons", g], selectConfig: "selectConfig", disabled: [2, "disabled", "disabled", g] }, outputs: { page: "page" }, exportAs: ["matPaginator"], decls: 14, vars: 14, consts: [["selectRef", ""], [1, "mat-mdc-paginator-outer-container"], [1, "mat-mdc-paginator-container"], [1, "mat-mdc-paginator-page-size"], [1, "mat-mdc-paginator-range-actions"], ["aria-live", "polite", 1, "mat-mdc-paginator-range-label"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-previous", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["viewBox", "0 0 24 24", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-next", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], [1, "mat-mdc-paginator-page-size-label"], [1, "mat-mdc-paginator-page-size-select", 3, "appearance", "color"], [1, "mat-mdc-paginator-page-size-value"], ["hideSingleSelectionIndicator", "", 3, "selectionChange", "value", "disabled", "aria-labelledby", "panelClass", "disableOptionCentering"], [3, "value"], [1, "mat-mdc-paginator-touch-target", 3, "click"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-first", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-last", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]], template: function (n, i) { n & 1 && (t.\u0275\u0275elementStart(0, "div", 1)(1, "div", 2), t.\u0275\u0275conditionalCreate(2, k, 5, 4, "div", 3), t.\u0275\u0275elementStart(3, "div", 4)(4, "div", 5), t.\u0275\u0275text(5), t.\u0275\u0275elementEnd(), t.\u0275\u0275conditionalCreate(6, B, 3, 5, "button", 6), t.\u0275\u0275elementStart(7, "button", 7), t.\u0275\u0275listener("click", function () { return i._buttonClicked(i.pageIndex - 1, i._previousButtonsDisabled()); }), t.\u0275\u0275namespaceSVG(), t.\u0275\u0275elementStart(8, "svg", 8), t.\u0275\u0275element(9, "path", 9), t.\u0275\u0275elementEnd()(), t.\u0275\u0275namespaceHTML(), t.\u0275\u0275elementStart(10, "button", 10), t.\u0275\u0275listener("click", function () { return i._buttonClicked(i.pageIndex + 1, i._nextButtonsDisabled()); }), t.\u0275\u0275namespaceSVG(), t.\u0275\u0275elementStart(11, "svg", 8), t.\u0275\u0275element(12, "path", 11), t.\u0275\u0275elementEnd()(), t.\u0275\u0275conditionalCreate(13, F, 3, 5, "button", 12), t.\u0275\u0275elementEnd()()()), n & 2 && (t.\u0275\u0275advance(2), t.\u0275\u0275conditional(i.hidePageSize ? -1 : 2), t.\u0275\u0275advance(3), t.\u0275\u0275textInterpolate1(" ", i._intl.getRangeLabel(i.pageIndex, i.pageSize, i.length), " "), t.\u0275\u0275advance(), t.\u0275\u0275conditional(i.showFirstLastButtons ? 6 : -1), t.\u0275\u0275advance(), t.\u0275\u0275property("matTooltip", i._intl.previousPageLabel)("matTooltipDisabled", i._previousButtonsDisabled())("disabled", i._previousButtonsDisabled())("tabindex", i._previousButtonsDisabled() ? -1 : null), t.\u0275\u0275attribute("aria-label", i._intl.previousPageLabel), t.\u0275\u0275advance(3), t.\u0275\u0275property("matTooltip", i._intl.nextPageLabel)("matTooltipDisabled", i._nextButtonsDisabled())("disabled", i._nextButtonsDisabled())("tabindex", i._nextButtonsDisabled() ? -1 : null), t.\u0275\u0275attribute("aria-label", i._intl.nextPageLabel), t.\u0275\u0275advance(3), t.\u0275\u0275conditional(i.showFirstLastButtons ? 13 : -1)); }, dependencies: [_, b, h, m, v], styles: [`.mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-sys-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));--mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);--mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size, 56px)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:var(--mat-paginator-page-size-select-width, 84px)}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}@media(forced-colors: active){.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,.mat-mdc-paginator-icon{fill:currentColor}.mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}.mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled]{color:GrayText}}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display, block);position:absolute;top:50%;left:50%;width:var(--mat-paginator-page-size-select-width, 84px);height:var(--mat-paginator-page-size-select-touch-target-height, 48px);background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}
`], encapsulation: 2, changeDetection: 0 });
    }
    return a;
})(), ct = (() => { class a {
    static \u0275fac = function (n) { return new (n || a); };
    static \u0275mod = t.\u0275\u0275defineNgModule({ type: a });
    static \u0275inj = t.\u0275\u0275defineInjector({ providers: [E], imports: [u, f, x, V] });
} return a; })();
export { N as MAT_PAGINATOR_DEFAULT_OPTIONS, E as MAT_PAGINATOR_INTL_PROVIDER, A as MAT_PAGINATOR_INTL_PROVIDER_FACTORY, V as MatPaginator, d as MatPaginatorIntl, ct as MatPaginatorModule, P as PageEvent };
