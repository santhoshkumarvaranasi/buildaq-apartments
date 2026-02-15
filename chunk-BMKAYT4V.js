import { a as t } from "@nf-internal/chunk-QA6ELNH7";
import * as a from "@angular/core";
import "@angular/core";
import "rxjs";
import "rxjs/operators";
import "@angular/common";
import { InjectionToken as e, inject as i, ANIMATION_MODULE_TYPE as o } from "@angular/core";
var r = new e("MATERIAL_ANIMATIONS");
var n = null;
function d() { return i(r, { optional: !0 })?.animationsDisabled || i(o, { optional: !0 }) === "NoopAnimations" ? "di-disabled" : (n ??= i(t).matchMedia("(prefers-reduced-motion)").matches, n ? "reduced-motion" : "enabled"); }
function b() { return d() !== "enabled"; }
export { d as a, b };
