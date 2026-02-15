import { a as i } from "@nf-internal/chunk-2H5YBILG";
import "@nf-internal/chunk-4CLCTAJ7";
import * as t from "@angular/core";
import { inject as l, ElementRef as s, DOCUMENT as c } from "@angular/core";
import { Platform as d } from "@angular/cdk/platform";
import "@angular/cdk/a11y";
import "@angular/cdk/bidi";
var b = ["*", [["mat-toolbar-row"]]], f = ["*", "mat-toolbar-row"], h = (() => { class e {
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["mat-toolbar-row"]], hostAttrs: [1, "mat-toolbar-row"], exportAs: ["matToolbarRow"] });
} return e; })(), R = (() => {
    class e {
        _elementRef = l(s);
        _platform = l(d);
        _document = l(c);
        color;
        _toolbarRows;
        constructor() { }
        ngAfterViewInit() { this._platform.isBrowser && (this._checkToolbarMixedModes(), this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes())); }
        _checkToolbarMixedModes() { this._toolbarRows.length; }
        static \u0275fac = function (o) { return new (o || e); };
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: e, selectors: [["mat-toolbar"]], contentQueries: function (o, a, m) { if (o & 1 && t.\u0275\u0275contentQuery(m, h, 5), o & 2) {
                let n;
                t.\u0275\u0275queryRefresh(n = t.\u0275\u0275loadQuery()) && (a._toolbarRows = n);
            } }, hostAttrs: [1, "mat-toolbar"], hostVars: 6, hostBindings: function (o, a) { o & 2 && (t.\u0275\u0275classMap(a.color ? "mat-" + a.color : ""), t.\u0275\u0275classProp("mat-toolbar-multiple-rows", a._toolbarRows.length > 0)("mat-toolbar-single-row", a._toolbarRows.length === 0)); }, inputs: { color: "color" }, exportAs: ["matToolbar"], ngContentSelectors: f, decls: 2, vars: 0, template: function (o, a) { o & 1 && (t.\u0275\u0275projectionDef(b), t.\u0275\u0275projection(0), t.\u0275\u0275projection(1, 1)); }, styles: [`.mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}
`], encapsulation: 2, changeDetection: 0 });
    }
    return e;
})();
function E() { throw Error("MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row."); }
var k = (() => { class e {
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275mod = t.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = t.\u0275\u0275defineInjector({ imports: [i, i] });
} return e; })();
export { R as MatToolbar, k as MatToolbarModule, h as MatToolbarRow, E as throwToolbarMixedModesError };
