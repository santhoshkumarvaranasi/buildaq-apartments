import "@nf-internal/chunk-7ZTCWLLR";
import "@nf-internal/chunk-PRCOYL4O";
import { a as u } from "@nf-internal/chunk-2H5YBILG";
import "@nf-internal/chunk-K3GOACLW";
import "@nf-internal/chunk-FSAIB72R";
import { a as D } from "@nf-internal/chunk-ZOYGA7KW";
import { a as w, e as m, f as x } from "@nf-internal/chunk-6BLY3LJ7";
import { b } from "@nf-internal/chunk-JYXTBF5A";
import "@nf-internal/chunk-4CLCTAJ7";
import * as t from "@angular/core";
import { booleanAttribute as z } from "@angular/core";
import { CdkTable as C, CDK_TABLE as H, STICKY_POSITIONING_LISTENER as j, HeaderRowOutlet as L, DataRowOutlet as V, NoDataRowOutlet as G, FooterRowOutlet as W, CdkCellDef as _, CdkHeaderCellDef as F, CdkFooterCellDef as M, CdkColumnDef as I, CdkHeaderCell as $, CdkFooterCell as K, CdkCell as X, CdkHeaderRowDef as R, CdkFooterRowDef as k, CdkRowDef as E, CdkHeaderRow as S, CdkCellOutlet as g, CdkFooterRow as T, CdkRow as P, CdkNoDataRow as A, CdkTextColumn as Y, CdkTableModule as U } from "@angular/cdk/table";
import { BehaviorSubject as f, Subject as q, merge as O, of as B, combineLatest as h } from "rxjs";
import { map as p } from "rxjs/operators";
import "@angular/cdk/a11y";
import "@angular/cdk/bidi";
var J = [[["caption"]], [["colgroup"], ["col"]], "*"], Q = ["caption", "colgroup, col", "*"];
function Z(e, o) { e & 1 && t.\u0275\u0275projection(0, 2); }
function ee(e, o) { e & 1 && (t.\u0275\u0275elementStart(0, "thead", 0), t.\u0275\u0275elementContainer(1, 1), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(2, "tbody", 2), t.\u0275\u0275elementContainer(3, 3)(4, 4), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(5, "tfoot", 0), t.\u0275\u0275elementContainer(6, 5), t.\u0275\u0275elementEnd()); }
function te(e, o) { e & 1 && t.\u0275\u0275elementContainer(0, 1)(1, 3)(2, 4)(3, 5); }
function ae(e, o) { if (e & 1 && (t.\u0275\u0275elementStart(0, "th", 3), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), e & 2) {
    let a = t.\u0275\u0275nextContext();
    t.\u0275\u0275styleProp("text-align", a.justify), t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate1(" ", a.headerText, " ");
} }
function ie(e, o) { if (e & 1 && (t.\u0275\u0275elementStart(0, "td", 4), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), e & 2) {
    let a = o.$implicit, i = t.\u0275\u0275nextContext();
    t.\u0275\u0275styleProp("text-align", i.justify), t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate1(" ", i.dataAccessor(a, i.name), " ");
} }
var Fe = (() => { class e {
    static \u0275fac = function (i) { return new (i || e); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["mat-table", "recycleRows", ""], ["table", "mat-table", "", "recycleRows", ""]], features: [t.\u0275\u0275ProvidersFeature([{ provide: m, useClass: x }])] });
} return e; })(), Me = (() => {
    class e extends C {
        stickyCssClass = "mat-mdc-table-sticky";
        needsPositionStickyOnElement = !1;
        static \u0275fac = (() => { let a; return function (r) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(r || e); }; })();
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: e, selectors: [["mat-table"], ["table", "mat-table", ""]], hostAttrs: [1, "mat-mdc-table", "mdc-data-table__table"], hostVars: 2, hostBindings: function (i, r) { i & 2 && t.\u0275\u0275classProp("mdc-table-fixed-layout", r.fixedLayout); }, exportAs: ["matTable"], features: [t.\u0275\u0275ProvidersFeature([{ provide: C, useExisting: e }, { provide: H, useExisting: e }, { provide: m, useClass: D }, { provide: j, useValue: null }]), t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: Q, decls: 5, vars: 2, consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["role", "rowgroup", 1, "mdc-data-table__content"], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]], template: function (i, r) { i & 1 && (t.\u0275\u0275projectionDef(J), t.\u0275\u0275projection(0), t.\u0275\u0275projection(1, 1), t.\u0275\u0275conditionalCreate(2, Z, 1, 0), t.\u0275\u0275conditionalCreate(3, ee, 7, 0)(4, te, 4, 0)), i & 2 && (t.\u0275\u0275advance(2), t.\u0275\u0275conditional(r._isServer ? 2 : -1), t.\u0275\u0275advance(), t.\u0275\u0275conditional(r._isNativeHtmlTable ? 3 : 4)); }, dependencies: [L, V, G, W], styles: [`.mat-mdc-table-sticky{position:sticky !important}mat-table{display:block}mat-header-row{min-height:var(--mat-table-header-container-height, 56px)}mat-row{min-height:var(--mat-table-row-item-container-height, 52px)}mat-footer-row{min-height:var(--mat-table-footer-container-height, 52px)}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{min-width:100%;border:0;border-spacing:0;table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color, var(--mat-sys-surface))}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell{text-align:right}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));line-height:var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));font-weight:var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500))}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));font-weight:var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));font-weight:var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));font-weight:inherit;line-height:inherit;box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mat-mdc-header-cell{text-align:right}.mdc-data-table__row:last-child>.mat-mdc-header-cell{border-bottom:none}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));line-height:inherit}.mdc-data-table__row:last-child>.mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking))}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}
`], encapsulation: 2 });
    }
    return e;
})(), re = (() => { class e extends _ {
    static \u0275fac = (() => { let a; return function (r) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(r || e); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["", "matCellDef", ""]], features: [t.\u0275\u0275ProvidersFeature([{ provide: _, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), oe = (() => { class e extends F {
    static \u0275fac = (() => { let a; return function (r) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(r || e); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["", "matHeaderCellDef", ""]], features: [t.\u0275\u0275ProvidersFeature([{ provide: F, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), Ie = (() => { class e extends M {
    static \u0275fac = (() => { let a; return function (r) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(r || e); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["", "matFooterCellDef", ""]], features: [t.\u0275\u0275ProvidersFeature([{ provide: M, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), ne = (() => { class e extends I {
    get name() { return this._name; }
    set name(a) { this._setNameInput(a); }
    _updateColumnCssClassName() { super._updateColumnCssClassName(), this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`); }
    static \u0275fac = (() => { let a; return function (r) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(r || e); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["", "matColumnDef", ""]], inputs: { name: [0, "matColumnDef", "name"] }, features: [t.\u0275\u0275ProvidersFeature([{ provide: I, useExisting: e }, { provide: "MAT_SORT_HEADER_COLUMN_DEF", useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), le = (() => { class e extends $ {
    static \u0275fac = (() => { let a; return function (r) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(r || e); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "mat-mdc-header-cell", "mdc-data-table__header-cell"], features: [t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), Re = (() => { class e extends K {
    static \u0275fac = (() => { let a; return function (r) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(r || e); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]], hostAttrs: [1, "mat-mdc-footer-cell", "mdc-data-table__cell"], features: [t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), se = (() => { class e extends X {
    static \u0275fac = (() => { let a; return function (r) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(r || e); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["mat-cell"], ["td", "mat-cell", ""]], hostAttrs: [1, "mat-mdc-cell", "mdc-data-table__cell"], features: [t.\u0275\u0275InheritDefinitionFeature] });
} return e; })();
var ke = (() => { class e extends R {
    static \u0275fac = (() => { let a; return function (r) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(r || e); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["", "matHeaderRowDef", ""]], inputs: { columns: [0, "matHeaderRowDef", "columns"], sticky: [2, "matHeaderRowDefSticky", "sticky", z] }, features: [t.\u0275\u0275ProvidersFeature([{ provide: R, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), Ee = (() => { class e extends k {
    static \u0275fac = (() => { let a; return function (r) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(r || e); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["", "matFooterRowDef", ""]], inputs: { columns: [0, "matFooterRowDef", "columns"], sticky: [2, "matFooterRowDefSticky", "sticky", z] }, features: [t.\u0275\u0275ProvidersFeature([{ provide: k, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), Se = (() => { class e extends E {
    static \u0275fac = (() => { let a; return function (r) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(r || e); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["", "matRowDef", ""]], inputs: { columns: [0, "matRowDefColumns", "columns"], when: [0, "matRowDefWhen", "when"] }, features: [t.\u0275\u0275ProvidersFeature([{ provide: E, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), Te = (() => { class e extends S {
    static \u0275fac = (() => { let a; return function (r) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(r || e); }; })();
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: e, selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]], hostAttrs: ["role", "row", 1, "mat-mdc-header-row", "mdc-data-table__header-row"], exportAs: ["matHeaderRow"], features: [t.\u0275\u0275ProvidersFeature([{ provide: S, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function (i, r) { i & 1 && t.\u0275\u0275elementContainer(0, 0); }, dependencies: [g], encapsulation: 2 });
} return e; })(), Pe = (() => { class e extends T {
    static \u0275fac = (() => { let a; return function (r) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(r || e); }; })();
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: e, selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]], hostAttrs: ["role", "row", 1, "mat-mdc-footer-row", "mdc-data-table__row"], exportAs: ["matFooterRow"], features: [t.\u0275\u0275ProvidersFeature([{ provide: T, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function (i, r) { i & 1 && t.\u0275\u0275elementContainer(0, 0); }, dependencies: [g], encapsulation: 2 });
} return e; })(), Ae = (() => { class e extends P {
    static \u0275fac = (() => { let a; return function (r) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(r || e); }; })();
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: e, selectors: [["mat-row"], ["tr", "mat-row", ""]], hostAttrs: ["role", "row", 1, "mat-mdc-row", "mdc-data-table__row"], exportAs: ["matRow"], features: [t.\u0275\u0275ProvidersFeature([{ provide: P, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function (i, r) { i & 1 && t.\u0275\u0275elementContainer(0, 0); }, dependencies: [g], encapsulation: 2 });
} return e; })(), Oe = (() => { class e extends A {
    _cellSelector = "td, mat-cell, [mat-cell], .mat-cell";
    constructor() { super(), this._contentClassNames.push("mat-mdc-no-data-row", "mat-mdc-row", "mdc-data-table__row"), this._cellClassNames.push("mat-mdc-cell", "mdc-data-table__cell", "mat-no-data-cell"); }
    static \u0275fac = function (i) { return new (i || e); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["ng-template", "matNoDataRow", ""]], features: [t.\u0275\u0275ProvidersFeature([{ provide: A, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), Be = (() => { class e extends Y {
    static \u0275fac = (() => { let a; return function (r) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(r || e); }; })();
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: e, selectors: [["mat-text-column"]], features: [t.\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 0, consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]], template: function (i, r) { i & 1 && (t.\u0275\u0275elementContainerStart(0, 0), t.\u0275\u0275template(1, ae, 2, 3, "th", 1)(2, ie, 2, 3, "td", 2), t.\u0275\u0275elementContainerEnd()); }, dependencies: [ne, oe, le, re, se], encapsulation: 2 });
} return e; })();
var Ne = (() => { class e {
    static \u0275fac = function (i) { return new (i || e); };
    static \u0275mod = t.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = t.\u0275\u0275defineInjector({ imports: [u, U, u] });
} return e; })(), de = 9007199254740991, N = class extends w {
    _data;
    _renderData = new f([]);
    _filter = new f("");
    _internalPageChanges = new q;
    _renderChangesSubscription = null;
    filteredData;
    get data() { return this._data.value; }
    set data(o) { o = Array.isArray(o) ? o : [], this._data.next(o), this._renderChangesSubscription || this._filterData(o); }
    get filter() { return this._filter.value; }
    set filter(o) { this._filter.next(o), this._renderChangesSubscription || this._filterData(this.data); }
    get sort() { return this._sort; }
    set sort(o) { this._sort = o, this._updateChangeSubscription(); }
    _sort;
    get paginator() { return this._paginator; }
    set paginator(o) { this._paginator = o, this._updateChangeSubscription(); }
    _paginator;
    sortingDataAccessor = (o, a) => { let i = o[a]; if (b(i)) {
        let r = Number(i);
        return r < de ? r : i;
    } return i; };
    sortData = (o, a) => { let i = a.active, r = a.direction; return !i || r == "" ? o : o.sort((d, c) => { let n = this.sortingDataAccessor(d, i), l = this.sortingDataAccessor(c, i), y = typeof n, v = typeof l; y !== v && (y === "number" && (n += ""), v === "number" && (l += "")); let s = 0; return n != null && l != null ? n > l ? s = 1 : n < l && (s = -1) : n != null ? s = 1 : l != null && (s = -1), s * (r == "asc" ? 1 : -1); }); };
    filterPredicate = (o, a) => { let i = a.trim().toLowerCase(); return Object.values(o).some(r => `${r}`.toLowerCase().includes(i)); };
    constructor(o = []) { super(), this._data = new f(o), this._updateChangeSubscription(); }
    _updateChangeSubscription() { let o = this._sort ? O(this._sort.sortChange, this._sort.initialized) : B(null), a = this._paginator ? O(this._paginator.page, this._internalPageChanges, this._paginator.initialized) : B(null), i = this._data, r = h([i, this._filter]).pipe(p(([n]) => this._filterData(n))), d = h([r, o]).pipe(p(([n]) => this._orderData(n))), c = h([d, a]).pipe(p(([n]) => this._pageData(n))); this._renderChangesSubscription?.unsubscribe(), this._renderChangesSubscription = c.subscribe(n => this._renderData.next(n)); }
    _filterData(o) { return this.filteredData = this.filter == null || this.filter === "" ? o : o.filter(a => this.filterPredicate(a, this.filter)), this.paginator && this._updatePaginator(this.filteredData.length), this.filteredData; }
    _orderData(o) { return this.sort ? this.sortData(o.slice(), this.sort) : o; }
    _pageData(o) { if (!this.paginator)
        return o; let a = this.paginator.pageIndex * this.paginator.pageSize; return o.slice(a, a + this.paginator.pageSize); }
    _updatePaginator(o) { Promise.resolve().then(() => { let a = this.paginator; if (a && (a.length = o, a.pageIndex > 0)) {
        let i = Math.ceil(a.length / a.pageSize) - 1 || 0, r = Math.min(a.pageIndex, i);
        r !== a.pageIndex && (a.pageIndex = r, this._internalPageChanges.next());
    } }); }
    connect() { return this._renderChangesSubscription || this._updateChangeSubscription(), this._renderData; }
    disconnect() { this._renderChangesSubscription?.unsubscribe(), this._renderChangesSubscription = null; }
};
export { se as MatCell, re as MatCellDef, ne as MatColumnDef, Re as MatFooterCell, Ie as MatFooterCellDef, Pe as MatFooterRow, Ee as MatFooterRowDef, le as MatHeaderCell, oe as MatHeaderCellDef, Te as MatHeaderRow, ke as MatHeaderRowDef, Oe as MatNoDataRow, Fe as MatRecycleRows, Ae as MatRow, Se as MatRowDef, Me as MatTable, N as MatTableDataSource, Ne as MatTableModule, Be as MatTextColumn };
