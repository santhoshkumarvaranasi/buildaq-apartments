import { MediaMatcher as t } from "@angular/cdk/layout";
import { InjectionToken as i, inject as e, ANIMATION_MODULE_TYPE as o } from "@angular/core";
var a = new i("MATERIAL_ANIMATIONS"), n = null;
function r() { return e(a, { optional: !0 })?.animationsDisabled || e(o, { optional: !0 }) === "NoopAnimations" ? "di-disabled" : (n ??= e(t).matchMedia("(prefers-reduced-motion)").matches, n ? "reduced-motion" : "enabled"); }
function A() { return r() !== "enabled"; }
export { r as a, A as b };
