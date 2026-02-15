import { a as $ } from "@nf-internal/chunk-ZOYGA7KW";
import { i as V, q as W } from "@nf-internal/chunk-7DWQP4SD";
import { a as J, b as T, d as j, e as O, f as U } from "@nf-internal/chunk-6BLY3LJ7";
import "@nf-internal/chunk-JYXTBF5A";
import { b as Q } from "@nf-internal/chunk-JHGJD5QO";
import "@nf-internal/chunk-OH3XPIE7";
import { a as B } from "@nf-internal/chunk-DQM2BKPX";
import "@nf-internal/chunk-4CLCTAJ7";
import * as s from "@angular/core";
import { InjectionToken as A, inject as l, TemplateRef as p, booleanAttribute as D, ElementRef as R, IterableDiffers as v, ViewContainerRef as b, afterNextRender as E, ChangeDetectorRef as ae, DOCUMENT as le, EventEmitter as ce, Injector as de, HostAttributeToken as ue } from "@angular/core";
import { Subject as fe, BehaviorSubject as he, isObservable as _e, of as q } from "rxjs";
import { takeUntil as x } from "rxjs/operators";
import "@angular/common";
var ee = [[["caption"]], [["colgroup"], ["col"]], "*"], te = ["caption", "colgroup, col", "*"];
function ie(o, r) { o & 1 && s.\u0275\u0275projection(0, 2); }
function oe(o, r) { o & 1 && (s.\u0275\u0275elementStart(0, "thead", 0), s.\u0275\u0275elementContainer(1, 1), s.\u0275\u0275elementEnd(), s.\u0275\u0275elementStart(2, "tbody", 0), s.\u0275\u0275elementContainer(3, 2)(4, 3), s.\u0275\u0275elementEnd(), s.\u0275\u0275elementStart(5, "tfoot", 0), s.\u0275\u0275elementContainer(6, 4), s.\u0275\u0275elementEnd()); }
function se(o, r) { o & 1 && s.\u0275\u0275elementContainer(0, 1)(1, 2)(2, 3)(3, 4); }
function ne(o, r) { if (o & 1 && (s.\u0275\u0275elementStart(0, "th", 3), s.\u0275\u0275text(1), s.\u0275\u0275elementEnd()), o & 2) {
    let e = s.\u0275\u0275nextContext();
    s.\u0275\u0275styleProp("text-align", e.justify), s.\u0275\u0275advance(), s.\u0275\u0275textInterpolate1(" ", e.headerText, " ");
} }
function re(o, r) { if (o & 1 && (s.\u0275\u0275elementStart(0, "td", 4), s.\u0275\u0275text(1), s.\u0275\u0275elementEnd()), o & 2) {
    let e = r.$implicit, t = s.\u0275\u0275nextContext();
    s.\u0275\u0275styleProp("text-align", t.justify), s.\u0275\u0275advance(), s.\u0275\u0275textInterpolate1(" ", t.dataAccessor(e, t.name), " ");
} }
var w = new A("CDK_TABLE"), me = new A("text-column-options"), N = (() => { class o {
    template = l(p);
    constructor() { }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdkCellDef", ""]] });
} return o; })(), F = (() => { class o {
    template = l(p);
    constructor() { }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdkHeaderCellDef", ""]] });
} return o; })(), ye = (() => { class o {
    template = l(p);
    constructor() { }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdkFooterCellDef", ""]] });
} return o; })(), g = (() => { class o {
    _table = l(w, { optional: !0 });
    _hasStickyChanged = !1;
    get name() { return this._name; }
    set name(e) { this._setNameInput(e); }
    _name;
    get sticky() { return this._sticky; }
    set sticky(e) { e !== this._sticky && (this._sticky = e, this._hasStickyChanged = !0); }
    _sticky = !1;
    get stickyEnd() { return this._stickyEnd; }
    set stickyEnd(e) { e !== this._stickyEnd && (this._stickyEnd = e, this._hasStickyChanged = !0); }
    _stickyEnd = !1;
    cell;
    headerCell;
    footerCell;
    cssClassFriendlyName;
    _columnCssClassName;
    constructor() { }
    hasStickyChanged() { let e = this._hasStickyChanged; return this.resetStickyChanged(), e; }
    resetStickyChanged() { this._hasStickyChanged = !1; }
    _updateColumnCssClassName() { this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`]; }
    _setNameInput(e) { e && (this._name = e, this.cssClassFriendlyName = e.replace(/[^a-z0-9_-]/gi, "-"), this._updateColumnCssClassName()); }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdkColumnDef", ""]], contentQueries: function (t, i, n) { if (t & 1 && (s.\u0275\u0275contentQuery(n, N, 5), s.\u0275\u0275contentQuery(n, F, 5), s.\u0275\u0275contentQuery(n, ye, 5)), t & 2) {
            let a;
            s.\u0275\u0275queryRefresh(a = s.\u0275\u0275loadQuery()) && (i.cell = a.first), s.\u0275\u0275queryRefresh(a = s.\u0275\u0275loadQuery()) && (i.headerCell = a.first), s.\u0275\u0275queryRefresh(a = s.\u0275\u0275loadQuery()) && (i.footerCell = a.first);
        } }, inputs: { name: [0, "cdkColumnDef", "name"], sticky: [2, "sticky", "sticky", D], stickyEnd: [2, "stickyEnd", "stickyEnd", D] }, features: [s.\u0275\u0275ProvidersFeature([{ provide: "MAT_SORT_HEADER_COLUMN_DEF", useExisting: o }])] });
} return o; })(), k = class {
    constructor(r, e) { e.nativeElement.classList.add(...r._columnCssClassName); }
}, we = (() => { class o extends k {
    constructor() { super(l(g), l(R)); }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"], features: [s.\u0275\u0275InheritDefinitionFeature] });
} return o; })(), qe = (() => { class o extends k {
    constructor() { let e = l(g), t = l(R); super(e, t); let i = e._table?._getCellRole(); i && t.nativeElement.setAttribute("role", i); }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]], hostAttrs: [1, "cdk-footer-cell"], features: [s.\u0275\u0275InheritDefinitionFeature] });
} return o; })(), Ce = (() => { class o extends k {
    constructor() { let e = l(g), t = l(R); super(e, t); let i = e._table?._getCellRole(); i && t.nativeElement.setAttribute("role", i); }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["cdk-cell"], ["td", "cdk-cell", ""]], hostAttrs: [1, "cdk-cell"], features: [s.\u0275\u0275InheritDefinitionFeature] });
} return o; })(), Ke = "<ng-container cdkCellOutlet></ng-container>", H = (() => { class o {
    template = l(p);
    _differs = l(v);
    columns;
    _columnsDiffer;
    constructor() { }
    ngOnChanges(e) { if (!this._columnsDiffer) {
        let t = e.columns && e.columns.currentValue || [];
        this._columnsDiffer = this._differs.find(t).create(), this._columnsDiffer.diff(t);
    } }
    getColumnsDiff() { return this._columnsDiffer.diff(this.columns); }
    extractCellTemplate(e) { return this instanceof Z ? e.headerCell.template : this instanceof G ? e.footerCell.template : e.cell.template; }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, features: [s.\u0275\u0275NgOnChangesFeature] });
} return o; })(), Z = (() => { class o extends H {
    _table = l(w, { optional: !0 });
    _hasStickyChanged = !1;
    get sticky() { return this._sticky; }
    set sticky(e) { e !== this._sticky && (this._sticky = e, this._hasStickyChanged = !0); }
    _sticky = !1;
    constructor() { super(l(p), l(v)); }
    ngOnChanges(e) { super.ngOnChanges(e); }
    hasStickyChanged() { let e = this._hasStickyChanged; return this.resetStickyChanged(), e; }
    resetStickyChanged() { this._hasStickyChanged = !1; }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdkHeaderRowDef", ""]], inputs: { columns: [0, "cdkHeaderRowDef", "columns"], sticky: [2, "cdkHeaderRowDefSticky", "sticky", D] }, features: [s.\u0275\u0275InheritDefinitionFeature, s.\u0275\u0275NgOnChangesFeature] });
} return o; })(), G = (() => { class o extends H {
    _table = l(w, { optional: !0 });
    _hasStickyChanged = !1;
    get sticky() { return this._sticky; }
    set sticky(e) { e !== this._sticky && (this._sticky = e, this._hasStickyChanged = !0); }
    _sticky = !1;
    constructor() { super(l(p), l(v)); }
    ngOnChanges(e) { super.ngOnChanges(e); }
    hasStickyChanged() { let e = this._hasStickyChanged; return this.resetStickyChanged(), e; }
    resetStickyChanged() { this._hasStickyChanged = !1; }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdkFooterRowDef", ""]], inputs: { columns: [0, "cdkFooterRowDef", "columns"], sticky: [2, "cdkFooterRowDefSticky", "sticky", D] }, features: [s.\u0275\u0275InheritDefinitionFeature, s.\u0275\u0275NgOnChangesFeature] });
} return o; })(), pe = (() => { class o extends H {
    _table = l(w, { optional: !0 });
    when;
    constructor() { super(l(p), l(v)); }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdkRowDef", ""]], inputs: { columns: [0, "cdkRowDefColumns", "columns"], when: [0, "cdkRowDefWhen", "when"] }, features: [s.\u0275\u0275InheritDefinitionFeature] });
} return o; })(), S = (() => { class o {
    _viewContainer = l(b);
    cells;
    context;
    static mostRecentCellOutlet = null;
    constructor() { o.mostRecentCellOutlet = this; }
    ngOnDestroy() { o.mostRecentCellOutlet === this && (o.mostRecentCellOutlet = null); }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdkCellOutlet", ""]] });
} return o; })(), Xe = (() => { class o {
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275cmp = s.\u0275\u0275defineComponent({ type: o, selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]], hostAttrs: ["role", "row", 1, "cdk-header-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function (t, i) { t & 1 && s.\u0275\u0275elementContainer(0, 0); }, dependencies: [S], encapsulation: 2 });
} return o; })(), Ye = (() => { class o {
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275cmp = s.\u0275\u0275defineComponent({ type: o, selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]], hostAttrs: ["role", "row", 1, "cdk-footer-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function (t, i) { t & 1 && s.\u0275\u0275elementContainer(0, 0); }, dependencies: [S], encapsulation: 2 });
} return o; })(), Ze = (() => { class o {
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275cmp = s.\u0275\u0275defineComponent({ type: o, selectors: [["cdk-row"], ["tr", "cdk-row", ""]], hostAttrs: ["role", "row", 1, "cdk-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function (t, i) { t & 1 && s.\u0275\u0275elementContainer(0, 0); }, dependencies: [S], encapsulation: 2 });
} return o; })(), Re = (() => { class o {
    templateRef = l(p);
    _contentClassNames = ["cdk-no-data-row", "cdk-row"];
    _cellClassNames = ["cdk-cell", "cdk-no-data-cell"];
    _cellSelector = "td, cdk-cell, [cdk-cell], .cdk-cell";
    constructor() { }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["ng-template", "cdkNoDataRow", ""]] });
} return o; })(), K = ["top", "bottom", "left", "right"], I = class {
    _isNativeHtmlTable;
    _stickCellCss;
    _isBrowser;
    _needsPositionStickyOnElement;
    direction;
    _positionListener;
    _tableInjector;
    _elemSizeCache = new WeakMap;
    _resizeObserver = globalThis?.ResizeObserver ? new globalThis.ResizeObserver(r => this._updateCachedSizes(r)) : null;
    _updatedStickyColumnsParamsToReplay = [];
    _stickyColumnsReplayTimeout = null;
    _cachedCellWidths = [];
    _borderCellCss;
    _destroyed = !1;
    constructor(r, e, t = !0, i = !0, n, a, c) { this._isNativeHtmlTable = r, this._stickCellCss = e, this._isBrowser = t, this._needsPositionStickyOnElement = i, this.direction = n, this._positionListener = a, this._tableInjector = c, this._borderCellCss = { top: `${e}-border-elem-top`, bottom: `${e}-border-elem-bottom`, left: `${e}-border-elem-left`, right: `${e}-border-elem-right` }; }
    clearStickyPositioning(r, e) { (e.includes("left") || e.includes("right")) && this._removeFromStickyColumnReplayQueue(r); let t = []; for (let i of r)
        i.nodeType === i.ELEMENT_NODE && t.push(i, ...Array.from(i.children)); E({ write: () => { for (let i of t)
            this._removeStickyStyle(i, e); } }, { injector: this._tableInjector }); }
    updateStickyColumns(r, e, t, i = !0, n = !0) { if (!r.length || !this._isBrowser || !(e.some(_ => _) || t.some(_ => _))) {
        this._positionListener?.stickyColumnsUpdated({ sizes: [] }), this._positionListener?.stickyEndColumnsUpdated({ sizes: [] });
        return;
    } let a = r[0], c = a.children.length, d = this.direction === "rtl", u = d ? "right" : "left", h = d ? "left" : "right", m = e.lastIndexOf(!0), y = t.indexOf(!0), C, P, L; n && this._updateStickyColumnReplayQueue({ rows: [...r], stickyStartStates: [...e], stickyEndStates: [...t] }), E({ earlyRead: () => { C = this._getCellWidths(a, i), P = this._getStickyStartColumnPositions(C, e), L = this._getStickyEndColumnPositions(C, t); }, write: () => { for (let _ of r)
            for (let f = 0; f < c; f++) {
                let z = _.children[f];
                e[f] && this._addStickyStyle(z, u, P[f], f === m), t[f] && this._addStickyStyle(z, h, L[f], f === y);
            } this._positionListener && C.some(_ => !!_) && (this._positionListener.stickyColumnsUpdated({ sizes: m === -1 ? [] : C.slice(0, m + 1).map((_, f) => e[f] ? _ : null) }), this._positionListener.stickyEndColumnsUpdated({ sizes: y === -1 ? [] : C.slice(y).map((_, f) => t[f + y] ? _ : null).reverse() })); } }, { injector: this._tableInjector }); }
    stickRows(r, e, t) { if (!this._isBrowser)
        return; let i = t === "bottom" ? r.slice().reverse() : r, n = t === "bottom" ? e.slice().reverse() : e, a = [], c = [], d = []; E({ earlyRead: () => { for (let u = 0, h = 0; u < i.length; u++) {
            if (!n[u])
                continue;
            a[u] = h;
            let m = i[u];
            d[u] = this._isNativeHtmlTable ? Array.from(m.children) : [m];
            let y = this._retrieveElementSize(m).height;
            h += y, c[u] = y;
        } }, write: () => { let u = n.lastIndexOf(!0); for (let h = 0; h < i.length; h++) {
            if (!n[h])
                continue;
            let m = a[h], y = h === u;
            for (let C of d[h])
                this._addStickyStyle(C, t, m, y);
        } t === "top" ? this._positionListener?.stickyHeaderRowsUpdated({ sizes: c, offsets: a, elements: d }) : this._positionListener?.stickyFooterRowsUpdated({ sizes: c, offsets: a, elements: d }); } }, { injector: this._tableInjector }); }
    updateStickyFooterContainer(r, e) { this._isNativeHtmlTable && E({ write: () => { let t = r.querySelector("tfoot"); t && (e.some(i => !i) ? this._removeStickyStyle(t, ["bottom"]) : this._addStickyStyle(t, "bottom", 0, !1)); } }, { injector: this._tableInjector }); }
    destroy() { this._stickyColumnsReplayTimeout && clearTimeout(this._stickyColumnsReplayTimeout), this._resizeObserver?.disconnect(), this._destroyed = !0; }
    _removeStickyStyle(r, e) { if (!r.classList.contains(this._stickCellCss))
        return; for (let i of e)
        r.style[i] = "", r.classList.remove(this._borderCellCss[i]); K.some(i => e.indexOf(i) === -1 && r.style[i]) ? r.style.zIndex = this._getCalculatedZIndex(r) : (r.style.zIndex = "", this._needsPositionStickyOnElement && (r.style.position = ""), r.classList.remove(this._stickCellCss)); }
    _addStickyStyle(r, e, t, i) { r.classList.add(this._stickCellCss), i && r.classList.add(this._borderCellCss[e]), r.style[e] = `${t}px`, r.style.zIndex = this._getCalculatedZIndex(r), this._needsPositionStickyOnElement && (r.style.cssText += "position: -webkit-sticky; position: sticky; "); }
    _getCalculatedZIndex(r) { let e = { top: 100, bottom: 10, left: 1, right: 1 }, t = 0; for (let i of K)
        r.style[i] && (t += e[i]); return t ? `${t}` : ""; }
    _getCellWidths(r, e = !0) { if (!e && this._cachedCellWidths.length)
        return this._cachedCellWidths; let t = [], i = r.children; for (let n = 0; n < i.length; n++) {
        let a = i[n];
        t.push(this._retrieveElementSize(a).width);
    } return this._cachedCellWidths = t, t; }
    _getStickyStartColumnPositions(r, e) { let t = [], i = 0; for (let n = 0; n < r.length; n++)
        e[n] && (t[n] = i, i += r[n]); return t; }
    _getStickyEndColumnPositions(r, e) { let t = [], i = 0; for (let n = r.length; n > 0; n--)
        e[n] && (t[n] = i, i += r[n]); return t; }
    _retrieveElementSize(r) { let e = this._elemSizeCache.get(r); if (e)
        return e; let t = r.getBoundingClientRect(), i = { width: t.width, height: t.height }; return this._resizeObserver && (this._elemSizeCache.set(r, i), this._resizeObserver.observe(r, { box: "border-box" })), i; }
    _updateStickyColumnReplayQueue(r) { this._removeFromStickyColumnReplayQueue(r.rows), this._stickyColumnsReplayTimeout || this._updatedStickyColumnsParamsToReplay.push(r); }
    _removeFromStickyColumnReplayQueue(r) { let e = new Set(r); for (let t of this._updatedStickyColumnsParamsToReplay)
        t.rows = t.rows.filter(i => !e.has(i)); this._updatedStickyColumnsParamsToReplay = this._updatedStickyColumnsParamsToReplay.filter(t => !!t.rows.length); }
    _updateCachedSizes(r) { let e = !1; for (let t of r) {
        let i = t.borderBoxSize?.length ? { width: t.borderBoxSize[0].inlineSize, height: t.borderBoxSize[0].blockSize } : { width: t.contentRect.width, height: t.contentRect.height };
        i.width !== this._elemSizeCache.get(t.target)?.width && De(t.target) && (e = !0), this._elemSizeCache.set(t.target, i);
    } e && this._updatedStickyColumnsParamsToReplay.length && (this._stickyColumnsReplayTimeout && clearTimeout(this._stickyColumnsReplayTimeout), this._stickyColumnsReplayTimeout = setTimeout(() => { if (!this._destroyed) {
        for (let t of this._updatedStickyColumnsParamsToReplay)
            this.updateStickyColumns(t.rows, t.stickyStartStates, t.stickyEndStates, !0, !1);
        this._updatedStickyColumnsParamsToReplay = [], this._stickyColumnsReplayTimeout = null;
    } }, 0)); }
};
function De(o) { return ["cdk-cell", "cdk-header-cell", "cdk-footer-cell"].some(r => o.classList.contains(r)); }
var X = new A("CDK_SPL"), Ge = (() => { class o {
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["cdk-table", "recycleRows", ""], ["table", "cdk-table", "", "recycleRows", ""]], features: [s.\u0275\u0275ProvidersFeature([{ provide: O, useClass: U }])] });
} return o; })(), ge = (() => { class o {
    viewContainer = l(b);
    elementRef = l(R);
    constructor() { let e = l(w); e._rowOutlet = this, e._outletAssigned(); }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "rowOutlet", ""]] });
} return o; })(), ke = (() => { class o {
    viewContainer = l(b);
    elementRef = l(R);
    constructor() { let e = l(w); e._headerRowOutlet = this, e._outletAssigned(); }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "headerRowOutlet", ""]] });
} return o; })(), Se = (() => { class o {
    viewContainer = l(b);
    elementRef = l(R);
    constructor() { let e = l(w); e._footerRowOutlet = this, e._outletAssigned(); }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "footerRowOutlet", ""]] });
} return o; })(), ve = (() => { class o {
    viewContainer = l(b);
    elementRef = l(R);
    constructor() { let e = l(w); e._noDataRowOutlet = this, e._outletAssigned(); }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "noDataRowOutlet", ""]] });
} return o; })(), be = (() => {
    class o {
        _differs = l(v);
        _changeDetectorRef = l(ae);
        _elementRef = l(R);
        _dir = l(Q, { optional: !0 });
        _platform = l(B);
        _viewRepeater = l(O);
        _viewportRuler = l(V);
        _stickyPositioningListener = l(X, { optional: !0, skipSelf: !0 });
        _document = l(le);
        _data;
        _onDestroy = new fe;
        _renderRows;
        _renderChangeSubscription;
        _columnDefsByName = new Map;
        _rowDefs;
        _headerRowDefs;
        _footerRowDefs;
        _dataDiffer;
        _defaultRowDef;
        _customColumnDefs = new Set;
        _customRowDefs = new Set;
        _customHeaderRowDefs = new Set;
        _customFooterRowDefs = new Set;
        _customNoDataRow;
        _headerRowDefChanged = !0;
        _footerRowDefChanged = !0;
        _stickyColumnStylesNeedReset = !0;
        _forceRecalculateCellWidths = !0;
        _cachedRenderRowsMap = new Map;
        _isNativeHtmlTable;
        _stickyStyler;
        stickyCssClass = "cdk-table-sticky";
        needsPositionStickyOnElement = !0;
        _isServer;
        _isShowingNoDataRow = !1;
        _hasAllOutlets = !1;
        _hasInitialized = !1;
        _getCellRole() { if (this._cellRoleInternal === void 0) {
            let e = this._elementRef.nativeElement.getAttribute("role");
            return e === "grid" || e === "treegrid" ? "gridcell" : "cell";
        } return this._cellRoleInternal; }
        _cellRoleInternal = void 0;
        get trackBy() { return this._trackByFn; }
        set trackBy(e) { this._trackByFn = e; }
        _trackByFn;
        get dataSource() { return this._dataSource; }
        set dataSource(e) { this._dataSource !== e && this._switchDataSource(e); }
        _dataSource;
        get multiTemplateDataRows() { return this._multiTemplateDataRows; }
        set multiTemplateDataRows(e) { this._multiTemplateDataRows = e, this._rowOutlet && this._rowOutlet.viewContainer.length && (this._forceRenderDataRows(), this.updateStickyColumnStyles()); }
        _multiTemplateDataRows = !1;
        get fixedLayout() { return this._fixedLayout; }
        set fixedLayout(e) { this._fixedLayout = e, this._forceRecalculateCellWidths = !0, this._stickyColumnStylesNeedReset = !0; }
        _fixedLayout = !1;
        contentChanged = new ce;
        viewChange = new he({ start: 0, end: Number.MAX_VALUE });
        _rowOutlet;
        _headerRowOutlet;
        _footerRowOutlet;
        _noDataRowOutlet;
        _contentColumnDefs;
        _contentRowDefs;
        _contentHeaderRowDefs;
        _contentFooterRowDefs;
        _noDataRow;
        _injector = l(de);
        constructor() { l(new ue("role"), { optional: !0 }) || this._elementRef.nativeElement.setAttribute("role", "table"), this._isServer = !this._platform.isBrowser, this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === "TABLE", this._dataDiffer = this._differs.find([]).create((t, i) => this.trackBy ? this.trackBy(i.dataIndex, i.data) : i); }
        ngOnInit() { this._setupStickyStyler(), this._viewportRuler.change().pipe(x(this._onDestroy)).subscribe(() => { this._forceRecalculateCellWidths = !0; }); }
        ngAfterContentInit() { this._hasInitialized = !0; }
        ngAfterContentChecked() { this._canRender() && this._render(); }
        ngOnDestroy() { this._stickyStyler?.destroy(), [this._rowOutlet?.viewContainer, this._headerRowOutlet?.viewContainer, this._footerRowOutlet?.viewContainer, this._cachedRenderRowsMap, this._customColumnDefs, this._customRowDefs, this._customHeaderRowDefs, this._customFooterRowDefs, this._columnDefsByName].forEach(e => { e?.clear(); }), this._headerRowDefs = [], this._footerRowDefs = [], this._defaultRowDef = null, this._onDestroy.next(), this._onDestroy.complete(), T(this.dataSource) && this.dataSource.disconnect(this); }
        renderRows() { this._renderRows = this._getAllRenderRows(); let e = this._dataDiffer.diff(this._renderRows); if (!e) {
            this._updateNoDataRow(), this.contentChanged.next();
            return;
        } let t = this._rowOutlet.viewContainer; this._viewRepeater.applyChanges(e, t, (i, n, a) => this._getEmbeddedViewArgs(i.item, a), i => i.item.data, i => { i.operation === j.INSERTED && i.context && this._renderCellTemplateForItem(i.record.item.rowDef, i.context); }), this._updateRowIndexContext(), e.forEachIdentityChange(i => { let n = t.get(i.currentIndex); n.context.$implicit = i.item.data; }), this._updateNoDataRow(), this.contentChanged.next(), this.updateStickyColumnStyles(); }
        addColumnDef(e) { this._customColumnDefs.add(e); }
        removeColumnDef(e) { this._customColumnDefs.delete(e); }
        addRowDef(e) { this._customRowDefs.add(e); }
        removeRowDef(e) { this._customRowDefs.delete(e); }
        addHeaderRowDef(e) { this._customHeaderRowDefs.add(e), this._headerRowDefChanged = !0; }
        removeHeaderRowDef(e) { this._customHeaderRowDefs.delete(e), this._headerRowDefChanged = !0; }
        addFooterRowDef(e) { this._customFooterRowDefs.add(e), this._footerRowDefChanged = !0; }
        removeFooterRowDef(e) { this._customFooterRowDefs.delete(e), this._footerRowDefChanged = !0; }
        setNoDataRow(e) { this._customNoDataRow = e; }
        updateStickyHeaderRowStyles() { let e = this._getRenderedRows(this._headerRowOutlet); if (this._isNativeHtmlTable) {
            let i = Y(this._headerRowOutlet, "thead");
            i && (i.style.display = e.length ? "" : "none");
        } let t = this._headerRowDefs.map(i => i.sticky); this._stickyStyler.clearStickyPositioning(e, ["top"]), this._stickyStyler.stickRows(e, t, "top"), this._headerRowDefs.forEach(i => i.resetStickyChanged()); }
        updateStickyFooterRowStyles() { let e = this._getRenderedRows(this._footerRowOutlet); if (this._isNativeHtmlTable) {
            let i = Y(this._footerRowOutlet, "tfoot");
            i && (i.style.display = e.length ? "" : "none");
        } let t = this._footerRowDefs.map(i => i.sticky); this._stickyStyler.clearStickyPositioning(e, ["bottom"]), this._stickyStyler.stickRows(e, t, "bottom"), this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, t), this._footerRowDefs.forEach(i => i.resetStickyChanged()); }
        updateStickyColumnStyles() { let e = this._getRenderedRows(this._headerRowOutlet), t = this._getRenderedRows(this._rowOutlet), i = this._getRenderedRows(this._footerRowOutlet); (this._isNativeHtmlTable && !this._fixedLayout || this._stickyColumnStylesNeedReset) && (this._stickyStyler.clearStickyPositioning([...e, ...t, ...i], ["left", "right"]), this._stickyColumnStylesNeedReset = !1), e.forEach((n, a) => { this._addStickyColumnStyles([n], this._headerRowDefs[a]); }), this._rowDefs.forEach(n => { let a = []; for (let c = 0; c < t.length; c++)
            this._renderRows[c].rowDef === n && a.push(t[c]); this._addStickyColumnStyles(a, n); }), i.forEach((n, a) => { this._addStickyColumnStyles([n], this._footerRowDefs[a]); }), Array.from(this._columnDefsByName.values()).forEach(n => n.resetStickyChanged()); }
        _outletAssigned() { !this._hasAllOutlets && this._rowOutlet && this._headerRowOutlet && this._footerRowOutlet && this._noDataRowOutlet && (this._hasAllOutlets = !0, this._canRender() && this._render()); }
        _canRender() { return this._hasAllOutlets && this._hasInitialized; }
        _render() { this._cacheRowDefs(), this._cacheColumnDefs(), !this._headerRowDefs.length && !this._footerRowDefs.length && this._rowDefs.length; let t = this._renderUpdatedColumns() || this._headerRowDefChanged || this._footerRowDefChanged; this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || t, this._forceRecalculateCellWidths = t, this._headerRowDefChanged && (this._forceRenderHeaderRows(), this._headerRowDefChanged = !1), this._footerRowDefChanged && (this._forceRenderFooterRows(), this._footerRowDefChanged = !1), this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription ? this._observeRenderChanges() : this._stickyColumnStylesNeedReset && this.updateStickyColumnStyles(), this._checkStickyStates(); }
        _getAllRenderRows() { let e = [], t = this._cachedRenderRowsMap; if (this._cachedRenderRowsMap = new Map, !this._data)
            return e; for (let i = 0; i < this._data.length; i++) {
            let n = this._data[i], a = this._getRenderRowsForData(n, i, t.get(n));
            this._cachedRenderRowsMap.has(n) || this._cachedRenderRowsMap.set(n, new WeakMap);
            for (let c = 0; c < a.length; c++) {
                let d = a[c], u = this._cachedRenderRowsMap.get(d.data);
                u.has(d.rowDef) ? u.get(d.rowDef).push(d) : u.set(d.rowDef, [d]), e.push(d);
            }
        } return e; }
        _getRenderRowsForData(e, t, i) { return this._getRowDefs(e, t).map(a => { let c = i && i.has(a) ? i.get(a) : []; if (c.length) {
            let d = c.shift();
            return d.dataIndex = t, d;
        }
        else
            return { data: e, rowDef: a, dataIndex: t }; }); }
        _cacheColumnDefs() { this._columnDefsByName.clear(), M(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs).forEach(t => { this._columnDefsByName.has(t.name), this._columnDefsByName.set(t.name, t); }); }
        _cacheRowDefs() { this._headerRowDefs = M(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs), this._footerRowDefs = M(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs), this._rowDefs = M(this._getOwnDefs(this._contentRowDefs), this._customRowDefs); let e = this._rowDefs.filter(t => !t.when); !this.multiTemplateDataRows && e.length > 1, this._defaultRowDef = e[0]; }
        _renderUpdatedColumns() { let e = (a, c) => { let d = !!c.getColumnsDiff(); return a || d; }, t = this._rowDefs.reduce(e, !1); t && this._forceRenderDataRows(); let i = this._headerRowDefs.reduce(e, !1); i && this._forceRenderHeaderRows(); let n = this._footerRowDefs.reduce(e, !1); return n && this._forceRenderFooterRows(), t || i || n; }
        _switchDataSource(e) { this._data = [], T(this.dataSource) && this.dataSource.disconnect(this), this._renderChangeSubscription && (this._renderChangeSubscription.unsubscribe(), this._renderChangeSubscription = null), e || (this._dataDiffer && this._dataDiffer.diff([]), this._rowOutlet && this._rowOutlet.viewContainer.clear()), this._dataSource = e; }
        _observeRenderChanges() { if (!this.dataSource)
            return; let e; T(this.dataSource) ? e = this.dataSource.connect(this) : _e(this.dataSource) ? e = this.dataSource : Array.isArray(this.dataSource) && (e = q(this.dataSource)), this._renderChangeSubscription = e.pipe(x(this._onDestroy)).subscribe(t => { this._data = t || [], this.renderRows(); }); }
        _forceRenderHeaderRows() { this._headerRowOutlet.viewContainer.length > 0 && this._headerRowOutlet.viewContainer.clear(), this._headerRowDefs.forEach((e, t) => this._renderRow(this._headerRowOutlet, e, t)), this.updateStickyHeaderRowStyles(); }
        _forceRenderFooterRows() { this._footerRowOutlet.viewContainer.length > 0 && this._footerRowOutlet.viewContainer.clear(), this._footerRowDefs.forEach((e, t) => this._renderRow(this._footerRowOutlet, e, t)), this.updateStickyFooterRowStyles(); }
        _addStickyColumnStyles(e, t) { let i = Array.from(t?.columns || []).map(c => { let d = this._columnDefsByName.get(c); return d; }), n = i.map(c => c.sticky), a = i.map(c => c.stickyEnd); this._stickyStyler.updateStickyColumns(e, n, a, !this._fixedLayout || this._forceRecalculateCellWidths); }
        _getRenderedRows(e) { let t = []; for (let i = 0; i < e.viewContainer.length; i++) {
            let n = e.viewContainer.get(i);
            t.push(n.rootNodes[0]);
        } return t; }
        _getRowDefs(e, t) { if (this._rowDefs.length == 1)
            return [this._rowDefs[0]]; let i = []; if (this.multiTemplateDataRows)
            i = this._rowDefs.filter(n => !n.when || n.when(t, e));
        else {
            let n = this._rowDefs.find(a => a.when && a.when(t, e)) || this._defaultRowDef;
            n && i.push(n);
        } return i.length, i; }
        _getEmbeddedViewArgs(e, t) { let i = e.rowDef, n = { $implicit: e.data }; return { templateRef: i.template, context: n, index: t }; }
        _renderRow(e, t, i, n = {}) { let a = e.viewContainer.createEmbeddedView(t.template, n, i); return this._renderCellTemplateForItem(t, n), a; }
        _renderCellTemplateForItem(e, t) { for (let i of this._getCellTemplates(e))
            S.mostRecentCellOutlet && S.mostRecentCellOutlet._viewContainer.createEmbeddedView(i, t); this._changeDetectorRef.markForCheck(); }
        _updateRowIndexContext() { let e = this._rowOutlet.viewContainer; for (let t = 0, i = e.length; t < i; t++) {
            let a = e.get(t).context;
            a.count = i, a.first = t === 0, a.last = t === i - 1, a.even = t % 2 === 0, a.odd = !a.even, this.multiTemplateDataRows ? (a.dataIndex = this._renderRows[t].dataIndex, a.renderIndex = t) : a.index = this._renderRows[t].dataIndex;
        } }
        _getCellTemplates(e) { return !e || !e.columns ? [] : Array.from(e.columns, t => { let i = this._columnDefsByName.get(t); return e.extractCellTemplate(i); }); }
        _forceRenderDataRows() { this._dataDiffer.diff([]), this._rowOutlet.viewContainer.clear(), this.renderRows(); }
        _checkStickyStates() { let e = (t, i) => t || i.hasStickyChanged(); this._headerRowDefs.reduce(e, !1) && this.updateStickyHeaderRowStyles(), this._footerRowDefs.reduce(e, !1) && this.updateStickyFooterRowStyles(), Array.from(this._columnDefsByName.values()).reduce(e, !1) && (this._stickyColumnStylesNeedReset = !0, this.updateStickyColumnStyles()); }
        _setupStickyStyler() { let e = this._dir ? this._dir.value : "ltr"; this._stickyStyler = new I(this._isNativeHtmlTable, this.stickyCssClass, this._platform.isBrowser, this.needsPositionStickyOnElement, e, this._stickyPositioningListener, this._injector), (this._dir ? this._dir.change : q()).pipe(x(this._onDestroy)).subscribe(t => { this._stickyStyler.direction = t, this.updateStickyColumnStyles(); }); }
        _getOwnDefs(e) { return e.filter(t => !t._table || t._table === this); }
        _updateNoDataRow() { let e = this._customNoDataRow || this._noDataRow; if (!e)
            return; let t = this._rowOutlet.viewContainer.length === 0; if (t === this._isShowingNoDataRow)
            return; let i = this._noDataRowOutlet.viewContainer; if (t) {
            let n = i.createEmbeddedView(e.templateRef), a = n.rootNodes[0];
            if (n.rootNodes.length === 1 && a?.nodeType === this._document.ELEMENT_NODE) {
                a.setAttribute("role", "row"), a.classList.add(...e._contentClassNames);
                let c = a.querySelectorAll(e._cellSelector);
                for (let d = 0; d < c.length; d++)
                    c[d].classList.add(...e._cellClassNames);
            }
        }
        else
            i.clear(); this._isShowingNoDataRow = t, this._changeDetectorRef.markForCheck(); }
        static \u0275fac = function (t) { return new (t || o); };
        static \u0275cmp = s.\u0275\u0275defineComponent({ type: o, selectors: [["cdk-table"], ["table", "cdk-table", ""]], contentQueries: function (t, i, n) { if (t & 1 && (s.\u0275\u0275contentQuery(n, Re, 5), s.\u0275\u0275contentQuery(n, g, 5), s.\u0275\u0275contentQuery(n, pe, 5), s.\u0275\u0275contentQuery(n, Z, 5), s.\u0275\u0275contentQuery(n, G, 5)), t & 2) {
                let a;
                s.\u0275\u0275queryRefresh(a = s.\u0275\u0275loadQuery()) && (i._noDataRow = a.first), s.\u0275\u0275queryRefresh(a = s.\u0275\u0275loadQuery()) && (i._contentColumnDefs = a), s.\u0275\u0275queryRefresh(a = s.\u0275\u0275loadQuery()) && (i._contentRowDefs = a), s.\u0275\u0275queryRefresh(a = s.\u0275\u0275loadQuery()) && (i._contentHeaderRowDefs = a), s.\u0275\u0275queryRefresh(a = s.\u0275\u0275loadQuery()) && (i._contentFooterRowDefs = a);
            } }, hostAttrs: [1, "cdk-table"], hostVars: 2, hostBindings: function (t, i) { t & 2 && s.\u0275\u0275classProp("cdk-table-fixed-layout", i.fixedLayout); }, inputs: { trackBy: "trackBy", dataSource: "dataSource", multiTemplateDataRows: [2, "multiTemplateDataRows", "multiTemplateDataRows", D], fixedLayout: [2, "fixedLayout", "fixedLayout", D] }, outputs: { contentChanged: "contentChanged" }, exportAs: ["cdkTable"], features: [s.\u0275\u0275ProvidersFeature([{ provide: w, useExisting: o }, { provide: O, useClass: $ }, { provide: X, useValue: null }])], ngContentSelectors: te, decls: 5, vars: 2, consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]], template: function (t, i) { t & 1 && (s.\u0275\u0275projectionDef(ee), s.\u0275\u0275projection(0), s.\u0275\u0275projection(1, 1), s.\u0275\u0275conditionalCreate(2, ie, 1, 0), s.\u0275\u0275conditionalCreate(3, oe, 7, 0)(4, se, 4, 0)), t & 2 && (s.\u0275\u0275advance(2), s.\u0275\u0275conditional(i._isServer ? 2 : -1), s.\u0275\u0275advance(), s.\u0275\u0275conditional(i._isNativeHtmlTable ? 3 : 4)); }, dependencies: [ke, ge, ve, Se], styles: [`.cdk-table-fixed-layout{table-layout:fixed}
`], encapsulation: 2 });
    }
    return o;
})();
function M(o, r) { return o.concat(Array.from(r)); }
function Y(o, r) { let e = r.toUpperCase(), t = o.viewContainer.element.nativeElement; for (; t;) {
    let i = t.nodeType === 1 ? t.nodeName : null;
    if (i === e)
        return t;
    if (i === "TABLE")
        break;
    t = t.parentNode;
} return null; }
var Je = (() => { class o {
    _table = l(be, { optional: !0 });
    _options = l(me, { optional: !0 });
    get name() { return this._name; }
    set name(e) { this._name = e, this._syncColumnDefName(); }
    _name;
    headerText;
    dataAccessor;
    justify = "start";
    columnDef;
    cell;
    headerCell;
    constructor() { this._options = this._options || {}; }
    ngOnInit() { this._syncColumnDefName(), this.headerText === void 0 && (this.headerText = this._createDefaultHeaderText()), this.dataAccessor || (this.dataAccessor = this._options.defaultDataAccessor || ((e, t) => e[t])), this._table && (this.columnDef.cell = this.cell, this.columnDef.headerCell = this.headerCell, this._table.addColumnDef(this.columnDef)); }
    ngOnDestroy() { this._table && this._table.removeColumnDef(this.columnDef); }
    _createDefaultHeaderText() { let e = this.name; return this._options && this._options.defaultHeaderTextTransform ? this._options.defaultHeaderTextTransform(e) : e[0].toUpperCase() + e.slice(1); }
    _syncColumnDefName() { this.columnDef && (this.columnDef.name = this.name); }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275cmp = s.\u0275\u0275defineComponent({ type: o, selectors: [["cdk-text-column"]], viewQuery: function (t, i) { if (t & 1 && (s.\u0275\u0275viewQuery(g, 7), s.\u0275\u0275viewQuery(N, 7), s.\u0275\u0275viewQuery(F, 7)), t & 2) {
            let n;
            s.\u0275\u0275queryRefresh(n = s.\u0275\u0275loadQuery()) && (i.columnDef = n.first), s.\u0275\u0275queryRefresh(n = s.\u0275\u0275loadQuery()) && (i.cell = n.first), s.\u0275\u0275queryRefresh(n = s.\u0275\u0275loadQuery()) && (i.headerCell = n.first);
        } }, inputs: { name: "name", headerText: "headerText", dataAccessor: "dataAccessor", justify: "justify" }, decls: 3, vars: 0, consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]], template: function (t, i) { t & 1 && (s.\u0275\u0275elementContainerStart(0, 0), s.\u0275\u0275template(1, ne, 2, 3, "th", 1)(2, re, 2, 3, "td", 2), s.\u0275\u0275elementContainerEnd()); }, dependencies: [g, F, we, N, Ce], encapsulation: 2 });
} return o; })();
var et = (() => { class o {
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275mod = s.\u0275\u0275defineNgModule({ type: o });
    static \u0275inj = s.\u0275\u0275defineInjector({ imports: [W] });
} return o; })();
export { k as BaseCdkCell, H as BaseRowDef, Ke as CDK_ROW_TEMPLATE, w as CDK_TABLE, Ce as CdkCell, N as CdkCellDef, S as CdkCellOutlet, g as CdkColumnDef, qe as CdkFooterCell, ye as CdkFooterCellDef, Ye as CdkFooterRow, G as CdkFooterRowDef, we as CdkHeaderCell, F as CdkHeaderCellDef, Xe as CdkHeaderRow, Z as CdkHeaderRowDef, Re as CdkNoDataRow, Ge as CdkRecycleRows, Ze as CdkRow, pe as CdkRowDef, be as CdkTable, et as CdkTableModule, Je as CdkTextColumn, ge as DataRowOutlet, J as DataSource, Se as FooterRowOutlet, ke as HeaderRowOutlet, ve as NoDataRowOutlet, X as STICKY_POSITIONING_LISTENER, me as TEXT_COLUMN_OPTIONS };
