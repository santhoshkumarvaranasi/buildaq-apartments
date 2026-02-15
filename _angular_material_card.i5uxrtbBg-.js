import { a as i } from "@nf-internal/chunk-2H5YBILG";
import "@nf-internal/chunk-4CLCTAJ7";
import * as a from "@angular/core";
import { InjectionToken as c, inject as n } from "@angular/core";
import "@angular/cdk/a11y";
import "@angular/cdk/bidi";
var o = ["*"], m = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["", "mat-card-image", ""], ["", "matCardImage", ""], ["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""], ["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""], ["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""], ["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]], "*"], s = [`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`, `[mat-card-image], [matCardImage],
                    [mat-card-sm-image], [matCardImageSmall],
                    [mat-card-md-image], [matCardImageMedium],
                    [mat-card-lg-image], [matCardImageLarge],
                    [mat-card-xl-image], [matCardImageXLarge]`, "*"], l = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"], g = ["[mat-card-avatar], [matCardAvatar]", `mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`, "*"], u = new c("MAT_CARD_CONFIG"), w = (() => {
    class t {
        appearance;
        constructor() { let r = n(u, { optional: !0 }); this.appearance = r?.appearance || "raised"; }
        static \u0275fac = function (e) { return new (e || t); };
        static \u0275cmp = a.\u0275\u0275defineComponent({ type: t, selectors: [["mat-card"]], hostAttrs: [1, "mat-mdc-card", "mdc-card"], hostVars: 8, hostBindings: function (e, d) { e & 2 && a.\u0275\u0275classProp("mat-mdc-card-outlined", d.appearance === "outlined")("mdc-card--outlined", d.appearance === "outlined")("mat-mdc-card-filled", d.appearance === "filled")("mdc-card--filled", d.appearance === "filled"); }, inputs: { appearance: "appearance" }, exportAs: ["matCard"], ngContentSelectors: o, decls: 1, vars: 0, template: function (e, d) { e & 1 && (a.\u0275\u0275projectionDef(), a.\u0275\u0275projection(0)); }, styles: [`.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-elevated-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mat-card-outlined-container-color, var(--mat-sys-surface));border-radius:var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));border-width:var(--mat-card-outlined-outline-width, 1px);border-color:var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mat-card-outlined-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mat-mdc-card-filled{background-color:var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));border-radius:var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-filled-container-elevation, var(--mat-sys-level0))}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}
`], encapsulation: 2, changeDetection: 0 });
    }
    return t;
})(), A = (() => { class t {
    static \u0275fac = function (e) { return new (e || t); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: t, selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]], hostAttrs: [1, "mat-mdc-card-title"] });
} return t; })(), I = (() => { class t {
    static \u0275fac = function (e) { return new (e || t); };
    static \u0275cmp = a.\u0275\u0275defineComponent({ type: t, selectors: [["mat-card-title-group"]], hostAttrs: [1, "mat-mdc-card-title-group"], ngContentSelectors: s, decls: 4, vars: 0, template: function (e, d) { e & 1 && (a.\u0275\u0275projectionDef(m), a.\u0275\u0275domElementStart(0, "div"), a.\u0275\u0275projection(1), a.\u0275\u0275domElementEnd(), a.\u0275\u0275projection(2, 1), a.\u0275\u0275projection(3, 2)); }, encapsulation: 2, changeDetection: 0 });
} return t; })(), _ = (() => { class t {
    static \u0275fac = function (e) { return new (e || t); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: t, selectors: [["mat-card-content"]], hostAttrs: [1, "mat-mdc-card-content"] });
} return t; })(), F = (() => { class t {
    static \u0275fac = function (e) { return new (e || t); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: t, selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]], hostAttrs: [1, "mat-mdc-card-subtitle"] });
} return t; })(), j = (() => { class t {
    align = "start";
    static \u0275fac = function (e) { return new (e || t); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: t, selectors: [["mat-card-actions"]], hostAttrs: [1, "mat-mdc-card-actions", "mdc-card__actions"], hostVars: 2, hostBindings: function (e, d) { e & 2 && a.\u0275\u0275classProp("mat-mdc-card-actions-align-end", d.align === "end"); }, inputs: { align: "align" }, exportAs: ["matCardActions"] });
} return t; })(), S = (() => { class t {
    static \u0275fac = function (e) { return new (e || t); };
    static \u0275cmp = a.\u0275\u0275defineComponent({ type: t, selectors: [["mat-card-header"]], hostAttrs: [1, "mat-mdc-card-header"], ngContentSelectors: g, decls: 4, vars: 0, consts: [[1, "mat-mdc-card-header-text"]], template: function (e, d) { e & 1 && (a.\u0275\u0275projectionDef(l), a.\u0275\u0275projection(0), a.\u0275\u0275domElementStart(1, "div", 0), a.\u0275\u0275projection(2, 1), a.\u0275\u0275domElementEnd(), a.\u0275\u0275projection(3, 2)); }, encapsulation: 2, changeDetection: 0 });
} return t; })(), k = (() => { class t {
    static \u0275fac = function (e) { return new (e || t); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: t, selectors: [["mat-card-footer"]], hostAttrs: [1, "mat-mdc-card-footer"] });
} return t; })(), T = (() => { class t {
    static \u0275fac = function (e) { return new (e || t); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: t, selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]], hostAttrs: [1, "mat-mdc-card-image", "mdc-card__media"] });
} return t; })(), z = (() => { class t {
    static \u0275fac = function (e) { return new (e || t); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: t, selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]], hostAttrs: [1, "mat-mdc-card-sm-image", "mdc-card__media"] });
} return t; })(), E = (() => { class t {
    static \u0275fac = function (e) { return new (e || t); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: t, selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]], hostAttrs: [1, "mat-mdc-card-md-image", "mdc-card__media"] });
} return t; })(), L = (() => { class t {
    static \u0275fac = function (e) { return new (e || t); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: t, selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]], hostAttrs: [1, "mat-mdc-card-lg-image", "mdc-card__media"] });
} return t; })(), B = (() => { class t {
    static \u0275fac = function (e) { return new (e || t); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: t, selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]], hostAttrs: [1, "mat-mdc-card-xl-image", "mdc-card__media"] });
} return t; })(), G = (() => { class t {
    static \u0275fac = function (e) { return new (e || t); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: t, selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], hostAttrs: [1, "mat-mdc-card-avatar"] });
} return t; })();
var H = (() => { class t {
    static \u0275fac = function (e) { return new (e || t); };
    static \u0275mod = a.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = a.\u0275\u0275defineInjector({ imports: [i, i] });
} return t; })();
export { u as MAT_CARD_CONFIG, w as MatCard, j as MatCardActions, G as MatCardAvatar, _ as MatCardContent, k as MatCardFooter, S as MatCardHeader, T as MatCardImage, L as MatCardLgImage, E as MatCardMdImage, H as MatCardModule, z as MatCardSmImage, F as MatCardSubtitle, A as MatCardTitle, I as MatCardTitleGroup, B as MatCardXlImage };
