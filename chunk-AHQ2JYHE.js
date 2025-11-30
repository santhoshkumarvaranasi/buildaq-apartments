import { b as I } from "@nf-internal/chunk-U6VGVGKT";
import { a } from "@nf-internal/chunk-4CLCTAJ7";
import { normalizePassiveListenerOptions as M, _getEventTarget as U, Platform as S } from "@angular/cdk/platform";
import * as p from "@angular/core";
import { InjectionToken as k, inject as h, ElementRef as H, NgZone as x, Injector as G } from "@angular/core";
import { isFakeMousedownFromScreenReader as B, isFakeTouchstartFromScreenReader as z } from "@angular/cdk/a11y";
import { coerceElement as y } from "@angular/cdk/coercion";
import { _CdkPrivateStyleLoader as Z } from "@angular/cdk/private";
var l = (function (s) { return s[s.FADING_IN = 0] = "FADING_IN", s[s.VISIBLE = 1] = "VISIBLE", s[s.FADING_OUT = 2] = "FADING_OUT", s[s.HIDDEN = 3] = "HIDDEN", s; })(l || {}), f = class {
    _renderer;
    element;
    config;
    _animationForciblyDisabledThroughCss;
    state = l.HIDDEN;
    constructor(t, e, i, n = !1) { this._renderer = t, this.element = e, this.config = i, this._animationForciblyDisabledThroughCss = n; }
    fadeOut() { this._renderer.fadeOutRipple(this); }
}, O = M({ passive: !0, capture: !0 }), v = class {
    _events = new Map;
    addHandler(t, e, i, n) { let r = this._events.get(e); if (r) {
        let d = r.get(i);
        d ? d.add(n) : r.set(i, new Set([n]));
    }
    else
        this._events.set(e, new Map([[i, new Set([n])]])), t.runOutsideAngular(() => { document.addEventListener(e, this._delegateEventHandler, O); }); }
    removeHandler(t, e, i) { let n = this._events.get(t); if (!n)
        return; let r = n.get(e); r && (r.delete(i), r.size === 0 && n.delete(e), n.size === 0 && (this._events.delete(t), document.removeEventListener(t, this._delegateEventHandler, O))); }
    _delegateEventHandler = t => { let e = U(t); e && this._events.get(t.type)?.forEach((i, n) => { (n === e || n.contains(e)) && i.forEach(r => r.handleEvent(t)); }); };
}, w = { enterDuration: 225, exitDuration: 150 }, V = 800, A = M({ passive: !0, capture: !0 }), F = ["mousedown", "touchstart"], C = ["mouseup", "mouseleave", "touchend", "touchcancel"], $ = (() => {
    class s {
        static \u0275fac = function (i) { return new (i || s); };
        static \u0275cmp = p.\u0275\u0275defineComponent({ type: s, selectors: [["ng-component"]], hostAttrs: ["mat-ripple-style-loader", ""], decls: 0, vars: 0, template: function (i, n) { }, styles: [`.mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}
`], encapsulation: 2, changeDetection: 0 });
    }
    return s;
})(), E = class s {
    _target;
    _ngZone;
    _platform;
    _containerElement;
    _triggerElement;
    _isPointerDown = !1;
    _activeRipples = new Map;
    _mostRecentTransientRipple;
    _lastTouchStartEvent;
    _pointerUpEventsRegistered = !1;
    _containerRect;
    static _eventManager = new v;
    constructor(t, e, i, n, r) { this._target = t, this._ngZone = e, this._platform = n, n.isBrowser && (this._containerElement = y(i)), r && r.get(Z).load($); }
    fadeInRipple(t, e, i = {}) { let n = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect(), r = a(a({}, w), i.animation); i.centered && (t = n.left + n.width / 2, e = n.top + n.height / 2); let d = i.radius || Y(t, e, n), N = t - n.left, P = e - n.top, u = r.enterDuration, o = document.createElement("div"); o.classList.add("mat-ripple-element"), o.style.left = `${N - d}px`, o.style.top = `${P - d}px`, o.style.height = `${d * 2}px`, o.style.width = `${d * 2}px`, i.color != null && (o.style.backgroundColor = i.color), o.style.transitionDuration = `${u}ms`, this._containerElement.appendChild(o); let b = window.getComputedStyle(o), L = b.transitionProperty, D = b.transitionDuration, g = L === "none" || D === "0s" || D === "0s, 0s" || n.width === 0 && n.height === 0, c = new f(this, o, i, g); o.style.transform = "scale3d(1, 1, 1)", c.state = l.FADING_IN, i.persistent || (this._mostRecentTransientRipple = c); let m = null; return !g && (u || r.exitDuration) && this._ngZone.runOutsideAngular(() => { let T = () => { m && (m.fallbackTimer = null), clearTimeout(R), this._finishRippleTransition(c); }, _ = () => this._destroyRipple(c), R = setTimeout(_, u + 100); o.addEventListener("transitionend", T), o.addEventListener("transitioncancel", _), m = { onTransitionEnd: T, onTransitionCancel: _, fallbackTimer: R }; }), this._activeRipples.set(c, m), (g || !u) && this._finishRippleTransition(c), c; }
    fadeOutRipple(t) { if (t.state === l.FADING_OUT || t.state === l.HIDDEN)
        return; let e = t.element, i = a(a({}, w), t.config.animation); e.style.transitionDuration = `${i.exitDuration}ms`, e.style.opacity = "0", t.state = l.FADING_OUT, (t._animationForciblyDisabledThroughCss || !i.exitDuration) && this._finishRippleTransition(t); }
    fadeOutAll() { this._getActiveRipples().forEach(t => t.fadeOut()); }
    fadeOutAllNonPersistent() { this._getActiveRipples().forEach(t => { t.config.persistent || t.fadeOut(); }); }
    setupTriggerEvents(t) { let e = y(t); !this._platform.isBrowser || !e || e === this._triggerElement || (this._removeTriggerEvents(), this._triggerElement = e, F.forEach(i => { s._eventManager.addHandler(this._ngZone, i, e, this); })); }
    handleEvent(t) { t.type === "mousedown" ? this._onMousedown(t) : t.type === "touchstart" ? this._onTouchStart(t) : this._onPointerUp(), this._pointerUpEventsRegistered || (this._ngZone.runOutsideAngular(() => { C.forEach(e => { this._triggerElement.addEventListener(e, this, A); }); }), this._pointerUpEventsRegistered = !0); }
    _finishRippleTransition(t) { t.state === l.FADING_IN ? this._startFadeOutTransition(t) : t.state === l.FADING_OUT && this._destroyRipple(t); }
    _startFadeOutTransition(t) { let e = t === this._mostRecentTransientRipple, { persistent: i } = t.config; t.state = l.VISIBLE, !i && (!e || !this._isPointerDown) && t.fadeOut(); }
    _destroyRipple(t) { let e = this._activeRipples.get(t) ?? null; this._activeRipples.delete(t), this._activeRipples.size || (this._containerRect = null), t === this._mostRecentTransientRipple && (this._mostRecentTransientRipple = null), t.state = l.HIDDEN, e !== null && (t.element.removeEventListener("transitionend", e.onTransitionEnd), t.element.removeEventListener("transitioncancel", e.onTransitionCancel), e.fallbackTimer !== null && clearTimeout(e.fallbackTimer)), t.element.remove(); }
    _onMousedown(t) { let e = B(t), i = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + V; !this._target.rippleDisabled && !e && !i && (this._isPointerDown = !0, this.fadeInRipple(t.clientX, t.clientY, this._target.rippleConfig)); }
    _onTouchStart(t) { if (!this._target.rippleDisabled && !z(t)) {
        this._lastTouchStartEvent = Date.now(), this._isPointerDown = !0;
        let e = t.changedTouches;
        if (e)
            for (let i = 0; i < e.length; i++)
                this.fadeInRipple(e[i].clientX, e[i].clientY, this._target.rippleConfig);
    } }
    _onPointerUp() { this._isPointerDown && (this._isPointerDown = !1, this._getActiveRipples().forEach(t => { let e = t.state === l.VISIBLE || t.config.terminateOnPointerUp && t.state === l.FADING_IN; !t.config.persistent && e && t.fadeOut(); })); }
    _getActiveRipples() { return Array.from(this._activeRipples.keys()); }
    _removeTriggerEvents() { let t = this._triggerElement; t && (F.forEach(e => s._eventManager.removeHandler(e, t, this)), this._pointerUpEventsRegistered && (C.forEach(e => t.removeEventListener(e, this, A)), this._pointerUpEventsRegistered = !1)); }
};
function Y(s, t, e) { let i = Math.max(Math.abs(s - e.left), Math.abs(s - e.right)), n = Math.max(Math.abs(t - e.top), Math.abs(t - e.bottom)); return Math.sqrt(i * i + n * n); }
var j = new k("mat-ripple-global-options"), rt = (() => { class s {
    _elementRef = h(H);
    _animationsDisabled = I();
    color;
    unbounded;
    centered;
    radius = 0;
    animation;
    get disabled() { return this._disabled; }
    set disabled(e) { e && this.fadeOutAllNonPersistent(), this._disabled = e, this._setupTriggerEventsIfEnabled(); }
    _disabled = !1;
    get trigger() { return this._trigger || this._elementRef.nativeElement; }
    set trigger(e) { this._trigger = e, this._setupTriggerEventsIfEnabled(); }
    _trigger;
    _rippleRenderer;
    _globalOptions;
    _isInitialized = !1;
    constructor() { let e = h(x), i = h(S), n = h(j, { optional: !0 }), r = h(G); this._globalOptions = n || {}, this._rippleRenderer = new E(this, e, this._elementRef, i, r); }
    ngOnInit() { this._isInitialized = !0, this._setupTriggerEventsIfEnabled(); }
    ngOnDestroy() { this._rippleRenderer._removeTriggerEvents(); }
    fadeOutAll() { this._rippleRenderer.fadeOutAll(); }
    fadeOutAllNonPersistent() { this._rippleRenderer.fadeOutAllNonPersistent(); }
    get rippleConfig() { return { centered: this.centered, radius: this.radius, color: this.color, animation: a(a(a({}, this._globalOptions.animation), this._animationsDisabled ? { enterDuration: 0, exitDuration: 0 } : {}), this.animation), terminateOnPointerUp: this._globalOptions.terminateOnPointerUp }; }
    get rippleDisabled() { return this.disabled || !!this._globalOptions.disabled; }
    _setupTriggerEventsIfEnabled() { !this.disabled && this._isInitialized && this._rippleRenderer.setupTriggerEvents(this.trigger); }
    launch(e, i = 0, n) { return typeof e == "number" ? this._rippleRenderer.fadeInRipple(e, i, a(a({}, this.rippleConfig), n)) : this._rippleRenderer.fadeInRipple(0, 0, a(a({}, this.rippleConfig), e)); }
    static \u0275fac = function (i) { return new (i || s); };
    static \u0275dir = p.\u0275\u0275defineDirective({ type: s, selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]], hostAttrs: [1, "mat-ripple"], hostVars: 2, hostBindings: function (i, n) { i & 2 && p.\u0275\u0275classProp("mat-ripple-unbounded", n.unbounded); }, inputs: { color: [0, "matRippleColor", "color"], unbounded: [0, "matRippleUnbounded", "unbounded"], centered: [0, "matRippleCentered", "centered"], radius: [0, "matRippleRadius", "radius"], animation: [0, "matRippleAnimation", "animation"], disabled: [0, "matRippleDisabled", "disabled"], trigger: [0, "matRippleTrigger", "trigger"] }, exportAs: ["matRipple"] });
} return s; })();
export { w as a, E as b, j as c, rt as d };
