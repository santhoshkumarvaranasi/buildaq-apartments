import { a as d, b as f } from "@nf-internal/chunk-4CLCTAJ7";
var o = null, g = !1, A = 1, h = null, S = Symbol("SIGNAL");
function p(e) { let r = o; return o = e, r; }
function H() { return o; }
function J() { return g; }
function Q(e) { return e[S] !== void 0; }
var E = { version: 0, lastCleanEpoch: 0, dirty: !1, producers: void 0, producersTail: void 0, consumers: void 0, consumersTail: void 0, recomputing: !1, consumerAllowSignalWrites: !1, consumerIsAlwaysLive: !1, kind: "unknown", producerMustRecompute: () => !1, producerRecomputeValue: () => { }, consumerMarkedDirty: () => { }, consumerOnSignalRead: () => { } };
function N(e) { if (g)
    throw new Error(""); if (o === null)
    return; o.consumerOnSignalRead(e); let r = o.producersTail; if (r !== void 0 && r.producer === e)
    return; let n, u = o.recomputing; if (u && (n = r !== void 0 ? r.nextProducer : o.producers, n !== void 0 && n.producer === e)) {
    o.producersTail = n, n.lastReadVersion = e.version;
    return;
} let t = e.consumersTail; if (t !== void 0 && t.consumer === o && (!u || _(t, o)))
    return; let i = v(o), c = { producer: e, consumer: o, nextProducer: n, prevConsumer: t, lastReadVersion: e.version, nextConsumer: void 0 }; o.producersTail = c, r !== void 0 ? r.nextProducer = c : o.producers = c, i && b(e, c); }
function F() { A++; }
function m(e) { if (!(v(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === A)) {
    if (!e.producerMustRecompute(e) && !M(e)) {
        C(e);
        return;
    }
    e.producerRecomputeValue(e), C(e);
} }
function L(e) { if (e.consumers === void 0)
    return; let r = g; g = !0; try {
    for (let n = e.consumers; n !== void 0; n = n.nextConsumer) {
        let u = n.consumer;
        u.dirty || U(u);
    }
}
finally {
    g = r;
} }
function V() { return o?.consumerAllowSignalWrites !== !1; }
function U(e) { e.dirty = !0, L(e), e.consumerMarkedDirty?.(e); }
function C(e) { e.dirty = !1, e.lastCleanEpoch = A; }
function T(e) { return e && G(e), p(e); }
function G(e) { e.producersTail = void 0, e.recomputing = !0; }
function w(e, r) { p(r), e && q(e); }
function q(e) { e.recomputing = !1; let r = e.producersTail, n = r !== void 0 ? r.nextProducer : e.producers; if (n !== void 0) {
    if (v(e))
        do
            n = x(n);
        while (n !== void 0);
    r !== void 0 ? r.nextProducer = void 0 : e.producers = void 0;
} }
function M(e) { for (let r = e.producers; r !== void 0; r = r.nextProducer) {
    let n = r.producer, u = r.lastReadVersion;
    if (u !== n.version || (m(n), u !== n.version))
        return !0;
} return !1; }
function X(e) { if (v(e)) {
    let r = e.producers;
    for (; r !== void 0;)
        r = x(r);
} e.producers = void 0, e.producersTail = void 0, e.consumers = void 0, e.consumersTail = void 0; }
function b(e, r) { let n = e.consumersTail, u = v(e); if (n !== void 0 ? (r.nextConsumer = n.nextConsumer, n.nextConsumer = r) : (r.nextConsumer = void 0, e.consumers = r), r.prevConsumer = n, e.consumersTail = r, !u)
    for (let t = e.producers; t !== void 0; t = t.nextProducer)
        b(t.producer, t); }
function x(e) { let r = e.producer, n = e.nextProducer, u = e.nextConsumer, t = e.prevConsumer; if (e.nextConsumer = void 0, e.prevConsumer = void 0, u !== void 0 ? u.prevConsumer = t : r.consumersTail = t, t !== void 0)
    t.nextConsumer = u;
else if (r.consumers = u, !v(r)) {
    let i = r.producers;
    for (; i !== void 0;)
        i = x(i);
} return n; }
function v(e) { return e.consumerIsAlwaysLive || e.consumers !== void 0; }
function P(e) { h?.(e); }
function Y(e) { let r = h; return h = e, r; }
function _(e, r) { let n = r.producersTail; if (n !== void 0) {
    let u = r.producers;
    do {
        if (u === e)
            return !0;
        if (u === n)
            break;
        u = u.nextProducer;
    } while (u !== void 0);
} return !1; }
function D(e, r) { return Object.is(e, r); }
function Z(e, r) { let n = Object.create(W); n.computation = e, r !== void 0 && (n.equal = r); let u = () => { if (m(n), N(n), n.value === s)
    throw n.error; return n.value; }; return u[S] = n, P(n), u; }
var a = Symbol("UNSET"), l = Symbol("COMPUTING"), s = Symbol("ERRORED"), W = f(d({}, E), { value: a, dirty: !0, error: null, equal: D, kind: "computed", producerMustRecompute(e) { return e.value === a || e.value === l; }, producerRecomputeValue(e) { if (e.value === l)
        throw new Error(""); let r = e.value; e.value = l; let n = T(e), u, t = !1; try {
        u = e.computation(), p(null), t = r !== a && r !== s && u !== s && e.equal(r, u);
    }
    catch (i) {
        u = s, e.error = i;
    }
    finally {
        w(e, n);
    } if (t) {
        e.value = r;
        return;
    } e.value = u, e.version++; } });
function $() { throw new Error; }
var I = $;
function O(e) { I(e); }
function ee(e) { I = e; }
var y = null;
function re(e, r) { let n = Object.create(B); n.value = e, r !== void 0 && (n.equal = r); let u = () => j(n); return u[S] = n, P(n), [u, c => R(n, c), c => k(n, c)]; }
function ne(e) { let r = y; return y = e, r; }
function j(e) { return N(e), e.value; }
function R(e, r) { V() || O(e), e.equal(e.value, r) || (e.value = r, z(e)); }
function k(e, r) { V() || O(e), R(e, r(e.value)); }
function ue(e) { y?.(e); }
var B = f(d({}, E), { equal: D, value: void 0, kind: "signal" });
function z(e) { e.version++, F(), L(e), y?.(e); }
function ce(e, r, n) { let u = Object.create(K); u.source = e, u.computation = r, n != null && (u.equal = n); let i = () => { if (m(u), N(u), u.value === s)
    throw u.error; return u.value; }; return i[S] = u, P(u), i; }
function se(e, r) { m(e), R(e, r), C(e); }
function ae(e, r) { m(e), k(e, r), C(e); }
var K = f(d({}, E), { value: a, dirty: !0, error: null, equal: D, kind: "linkedSignal", producerMustRecompute(e) { return e.value === a || e.value === l; }, producerRecomputeValue(e) { if (e.value === l)
        throw new Error(""); let r = e.value; e.value = l; let n = T(e), u; try {
        let t = e.source(), i = r === a || r === s ? void 0 : { source: e.sourceValue, value: r };
        u = e.computation(t, i), e.sourceValue = t;
    }
    catch (t) {
        u = s, e.error = t;
    }
    finally {
        w(e, n);
    } if (r !== a && u !== s && e.equal(r, u)) {
        e.value = r;
        return;
    } e.value = u, e.version++; } });
function le(e) { let r = p(null); try {
    return e();
}
finally {
    p(r);
} }
var de = f(d({}, E), { consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, dirty: !0, kind: "effect" });
function fe(e) { if (e.dirty = !1, e.version > 0 && !M(e))
    return; e.version++; let r = T(e); try {
    e.cleanup(), e.fn();
}
finally {
    w(e, r);
} }
function ve(e) { }
export { S as a, p as b, H as c, J as d, Q as e, E as f, N as g, F as h, m as i, L as j, V as k, U as l, C as m, T as n, G as o, w as p, q, M as r, X as s, P as t, Y as u, D as v, Z as w, ee as x, re as y, ne as z, j as A, R as B, k as C, ue as D, B as E, ce as F, se as G, ae as H, le as I, de as J, fe as K, ve as L };
/*! Bundled license information:

@angular/core/fesm2022/signal.mjs:
@angular/core/fesm2022/effect.mjs:
@angular/core/fesm2022/weak_ref.mjs:
  (**
   * @license Angular v20.3.16
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
