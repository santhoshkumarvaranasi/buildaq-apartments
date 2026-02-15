import { A as $, B as R, C as B, D as G, E as V, F as q, G as z, H, I as J, J as K, K as Q, L as X, a as i, b, c as v, d, e as E, f as p, g as k, h as D, i as N, j as P, k as j, l as m, m as w, n as g, o as T, p as y, q as O, r as F, s as h, t as x, u as I, v as L, w as W, x as M, y as U, z as _ } from "@nf-internal/chunk-ZAXD3EXQ";
import { a, b as l } from "@nf-internal/chunk-4CLCTAJ7";
var c = { header: (e, o) => { if (!u(e) || o?.ngSkipFormatting)
        return null; let n; try {
        n = e();
    }
    catch {
        return ["span", "Signal(\u26A0\uFE0F Error)"];
    } let r = "computation" in e[i] ? "Computed" : "Signal", s = n === null || !Array.isArray(n) && typeof n != "object"; return ["span", {}, ["span", {}, `${r}(`], u(n) ? c.header(n, o) : s && n !== void 0 && typeof n != "function" ? ["object", { object: n }] : Y(n), ["span", {}, ")"]]; }, hasBody: (e, o) => { if (!u(e))
        return !1; try {
        e();
    }
    catch {
        return !1;
    } return !o?.ngSkipFormatting; }, body: (e, o) => { let n = "var(--sys-color-primary)"; return ["div", { style: "background: #FFFFFF10; padding-left: 4px; padding-top: 2px; padding-bottom: 2px;" }, ["div", { style: `color: ${n}` }, "Signal value: "], ["div", { style: "padding-left: .5rem;" }, ["object", { object: e(), config: o }]], ["div", { style: `color: ${n}` }, "Signal function: "], ["div", { style: "padding-left: .5rem;" }, ["object", { object: e, config: l(a({}, o), { skipFormatting: !0 }) }]]]; } };
function Y(e) { if (e === null)
    return "null"; if (Array.isArray(e))
    return `Array(${e.length})`; if (e instanceof Element)
    return `<${e.tagName.toLowerCase()}>`; if (e instanceof URL)
    return "URL"; switch (typeof e) {
    case "undefined": return "undefined";
    case "function": return "prototype" in e ? "class" : "() => {\u2026}";
    case "object": return e.constructor.name === "Object" ? "{\u2026}" : `${e.constructor.name} {}`;
    default: return ["object", { object: e, config: { skipFormatting: !0 } }];
} }
function u(e) { return e[i] !== void 0; }
function re() { globalThis.devtoolsFormatters ??= [], globalThis.devtoolsFormatters.some(e => e === c) || globalThis.devtoolsFormatters.push(c); }
function ne(e, o, n) { let r = Object.create(Z); n && (r.consumerAllowSignalWrites = !0), r.fn = e, r.schedule = o; let s = t => { r.cleanupFn = t; }; function S(t) { return t.fn === null && t.schedule === null; } function C(t) { S(t) || (h(t), t.cleanupFn(), t.fn = null, t.schedule = null, t.cleanupFn = f); } let A = () => { if (r.fn === null)
    return; if (d())
    throw new Error(""); if (r.dirty = !1, r.version > 0 && !F(r))
    return; r.version++; let t = g(r); try {
    r.cleanupFn(), r.cleanupFn = f, r.fn(s);
}
finally {
    y(r, t);
} }; return r.ref = { notify: () => m(r), run: A, cleanup: () => r.cleanupFn(), destroy: () => C(r), [i]: r }, r.ref; }
var f = () => { }, Z = l(a({}, p), { consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !1, consumerMarkedDirty: e => { e.schedule !== null && e.schedule(e.ref); }, cleanupFn: f });
export { K as BASE_EFFECT_NODE, p as REACTIVE_NODE, i as SIGNAL, V as SIGNAL_NODE, y as consumerAfterComputation, g as consumerBeforeComputation, h as consumerDestroy, m as consumerMarkDirty, F as consumerPollProducersForChange, W as createComputed, q as createLinkedSignal, U as createSignal, ne as createWatch, L as defaultEquals, O as finalizeConsumerAfterComputation, v as getActiveConsumer, re as installDevToolsSignalFormatter, d as isInNotificationPhase, E as isReactive, z as linkedSignalSetFn, H as linkedSignalUpdateFn, k as producerAccessed, D as producerIncrementEpoch, w as producerMarkClean, P as producerNotifyConsumers, N as producerUpdateValueVersion, j as producerUpdatesAllowed, T as resetConsumerBeforeComputation, Q as runEffect, x as runPostProducerCreatedFn, G as runPostSignalSetFn, b as setActiveConsumer, X as setAlternateWeakRefImpl, I as setPostProducerCreatedFn, _ as setPostSignalSetFn, M as setThrowInvalidWriteToSignalError, $ as signalGetFn, R as signalSetFn, B as signalUpdateFn, J as untracked };
/*! Bundled license information:

@angular/core/fesm2022/primitives/signals.mjs:
  (**
   * @license Angular v20.3.16
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
