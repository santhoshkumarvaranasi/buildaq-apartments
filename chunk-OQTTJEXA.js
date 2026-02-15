import { a as E } from "@nf-internal/chunk-X7SFHLJ5";
import { a as O, c as N } from "@nf-internal/chunk-ZPLV3KDQ";
import { b as L } from "@nf-internal/chunk-QA6ELNH7";
import { a as T } from "@nf-internal/chunk-7N7HFQKY";
import { b as k } from "@nf-internal/chunk-QXX5WOHX";
import { b as F, c as w, d as _ } from "@nf-internal/chunk-OIQ2QPHM";
import { c as m } from "@nf-internal/chunk-JYXTBF5A";
import { a as l } from "@nf-internal/chunk-DQM2BKPX";
import { a as g } from "@nf-internal/chunk-4CLCTAJ7";
function M(n) { return n.buttons === 0 || n.detail === 0; }
function D(n) { let i = n.touches && n.touches[0] || n.changedTouches && n.changedTouches[0]; return !!i && i.identifier === -1 && (i.radiusX == null || i.radiusX === 1) && (i.radiusY == null || i.radiusY === 1); }
import * as f from "@angular/core";
import { InjectionToken as S, inject as a, NgZone as x, DOCUMENT as B, RendererFactory2 as Y, ElementRef as q, EventEmitter as X } from "@angular/core";
import { BehaviorSubject as z, Subject as R, of as J } from "rxjs";
import { skip as Q, distinctUntilChanged as ee, takeUntil as te } from "rxjs/operators";
var ne = new S("cdk-input-modality-detector-options"), oe = { ignoreKeys: [18, 17, 224, 91, 16] }, j = 650, A = { passive: !0, capture: !0 }, ie = (() => { class n {
    _platform = a(l);
    _listenerCleanups;
    modalityDetected;
    modalityChanged;
    get mostRecentModality() { return this._modality.value; }
    _mostRecentTarget = null;
    _modality = new z(null);
    _options;
    _lastTouchMs = 0;
    _onKeydown = e => { this._options?.ignoreKeys?.some(t => t === e.keyCode) || (this._modality.next("keyboard"), this._mostRecentTarget = _(e)); };
    _onMousedown = e => { Date.now() - this._lastTouchMs < j || (this._modality.next(M(e) ? "keyboard" : "mouse"), this._mostRecentTarget = _(e)); };
    _onTouchstart = e => { if (D(e)) {
        this._modality.next("keyboard");
        return;
    } this._lastTouchMs = Date.now(), this._modality.next("touch"), this._mostRecentTarget = _(e); };
    constructor() { let e = a(x), t = a(B), o = a(ne, { optional: !0 }); if (this._options = g(g({}, oe), o), this.modalityDetected = this._modality.pipe(Q(1)), this.modalityChanged = this.modalityDetected.pipe(ee()), this._platform.isBrowser) {
        let s = a(Y).createRenderer(null, null);
        this._listenerCleanups = e.runOutsideAngular(() => [s.listen(t, "keydown", this._onKeydown, A), s.listen(t, "mousedown", this._onMousedown, A), s.listen(t, "touchstart", this._onTouchstart, A)]);
    } }
    ngOnDestroy() { this._modality.complete(), this._listenerCleanups?.forEach(e => e()); }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = f.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })(), b = (function (n) { return n[n.IMMEDIATE = 0] = "IMMEDIATE", n[n.EVENTUAL = 1] = "EVENTUAL", n; })(b || {}), se = new S("cdk-focus-monitor-default-options"), p = k({ passive: !0, capture: !0 }), re = (() => { class n {
    _ngZone = a(x);
    _platform = a(l);
    _inputModalityDetector = a(ie);
    _origin = null;
    _lastFocusOrigin;
    _windowFocused = !1;
    _windowFocusTimeoutId;
    _originTimeoutId;
    _originFromTouchInteraction = !1;
    _elementInfo = new Map;
    _monitoredElementCount = 0;
    _rootNodeFocusListenerCount = new Map;
    _detectionMode;
    _windowFocusListener = () => { this._windowFocused = !0, this._windowFocusTimeoutId = setTimeout(() => this._windowFocused = !1); };
    _document = a(B);
    _stopInputModalityDetector = new R;
    constructor() { let e = a(se, { optional: !0 }); this._detectionMode = e?.detectionMode || b.IMMEDIATE; }
    _rootNodeFocusAndBlurListener = e => { let t = _(e); for (let o = t; o; o = o.parentElement)
        e.type === "focus" ? this._onFocus(e, o) : this._onBlur(e, o); };
    monitor(e, t = !1) { let o = m(e); if (!this._platform.isBrowser || o.nodeType !== 1)
        return J(); let s = F(o) || this._document, r = this._elementInfo.get(o); if (r)
        return t && (r.checkChildren = !0), r.subject; let d = { checkChildren: t, subject: new R, rootNode: s }; return this._elementInfo.set(o, d), this._registerGlobalListeners(d), d.subject; }
    stopMonitoring(e) { let t = m(e), o = this._elementInfo.get(t); o && (o.subject.complete(), this._setClasses(t), this._elementInfo.delete(t), this._removeGlobalListeners(o)); }
    focusVia(e, t, o) { let s = m(e), r = this._document.activeElement; s === r ? this._getClosestElementsInfo(s).forEach(([d, G]) => this._originChanged(d, t, G)) : (this._setOrigin(t), typeof s.focus == "function" && s.focus(o)); }
    ngOnDestroy() { this._elementInfo.forEach((e, t) => this.stopMonitoring(t)); }
    _getWindow() { return this._document.defaultView || window; }
    _getFocusOrigin(e) { return this._origin ? this._originFromTouchInteraction ? this._shouldBeAttributedToTouch(e) ? "touch" : "program" : this._origin : this._windowFocused && this._lastFocusOrigin ? this._lastFocusOrigin : e && this._isLastInteractionFromInputLabel(e) ? "mouse" : "program"; }
    _shouldBeAttributedToTouch(e) { return this._detectionMode === b.EVENTUAL || !!e?.contains(this._inputModalityDetector._mostRecentTarget); }
    _setClasses(e, t) { e.classList.toggle("cdk-focused", !!t), e.classList.toggle("cdk-touch-focused", t === "touch"), e.classList.toggle("cdk-keyboard-focused", t === "keyboard"), e.classList.toggle("cdk-mouse-focused", t === "mouse"), e.classList.toggle("cdk-program-focused", t === "program"); }
    _setOrigin(e, t = !1) { this._ngZone.runOutsideAngular(() => { if (this._origin = e, this._originFromTouchInteraction = e === "touch" && t, this._detectionMode === b.IMMEDIATE) {
        clearTimeout(this._originTimeoutId);
        let o = this._originFromTouchInteraction ? j : 1;
        this._originTimeoutId = setTimeout(() => this._origin = null, o);
    } }); }
    _onFocus(e, t) { let o = this._elementInfo.get(t), s = _(e); !o || !o.checkChildren && t !== s || this._originChanged(t, this._getFocusOrigin(s), o); }
    _onBlur(e, t) { let o = this._elementInfo.get(t); !o || o.checkChildren && e.relatedTarget instanceof Node && t.contains(e.relatedTarget) || (this._setClasses(t), this._emitOrigin(o, null)); }
    _emitOrigin(e, t) { e.subject.observers.length && this._ngZone.run(() => e.subject.next(t)); }
    _registerGlobalListeners(e) { if (!this._platform.isBrowser)
        return; let t = e.rootNode, o = this._rootNodeFocusListenerCount.get(t) || 0; o || this._ngZone.runOutsideAngular(() => { t.addEventListener("focus", this._rootNodeFocusAndBlurListener, p), t.addEventListener("blur", this._rootNodeFocusAndBlurListener, p); }), this._rootNodeFocusListenerCount.set(t, o + 1), ++this._monitoredElementCount === 1 && (this._ngZone.runOutsideAngular(() => { this._getWindow().addEventListener("focus", this._windowFocusListener); }), this._inputModalityDetector.modalityDetected.pipe(te(this._stopInputModalityDetector)).subscribe(s => { this._setOrigin(s, !0); })); }
    _removeGlobalListeners(e) { let t = e.rootNode; if (this._rootNodeFocusListenerCount.has(t)) {
        let o = this._rootNodeFocusListenerCount.get(t);
        o > 1 ? this._rootNodeFocusListenerCount.set(t, o - 1) : (t.removeEventListener("focus", this._rootNodeFocusAndBlurListener, p), t.removeEventListener("blur", this._rootNodeFocusAndBlurListener, p), this._rootNodeFocusListenerCount.delete(t));
    } --this._monitoredElementCount || (this._getWindow().removeEventListener("focus", this._windowFocusListener), this._stopInputModalityDetector.next(), clearTimeout(this._windowFocusTimeoutId), clearTimeout(this._originTimeoutId)); }
    _originChanged(e, t, o) { this._setClasses(e, t), this._emitOrigin(o, t), this._lastFocusOrigin = t; }
    _getClosestElementsInfo(e) { let t = []; return this._elementInfo.forEach((o, s) => { (s === e || o.checkChildren && s.contains(e)) && t.push([s, o]); }), t; }
    _isLastInteractionFromInputLabel(e) { let { _mostRecentTarget: t, mostRecentModality: o } = this._inputModalityDetector; if (o !== "mouse" || !t || t === e || e.nodeName !== "INPUT" && e.nodeName !== "TEXTAREA" || e.disabled)
        return !1; let s = e.labels; if (s) {
        for (let r = 0; r < s.length; r++)
            if (s[r].contains(t))
                return !0;
    } return !1; }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = f.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })(), Ke = (() => { class n {
    _elementRef = a(q);
    _focusMonitor = a(re);
    _monitorSubscription;
    _focusOrigin = null;
    cdkFocusChange = new X;
    constructor() { }
    get focusOrigin() { return this._focusOrigin; }
    ngAfterViewInit() { let e = this._elementRef.nativeElement; this._monitorSubscription = this._focusMonitor.monitor(e, e.nodeType === 1 && e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t => { this._focusOrigin = t, this.cdkFocusChange.emit(t); }); }
    ngOnDestroy() { this._focusMonitor.stopMonitoring(this._elementRef), this._monitorSubscription && this._monitorSubscription.unsubscribe(); }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275dir = f.\u0275\u0275defineDirective({ type: n, selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]], outputs: { cdkFocusChange: "cdkFocusChange" }, exportAs: ["cdkMonitorFocus"] });
} return n; })();
import * as u from "@angular/core";
import { inject as c, afterNextRender as ce, NgZone as C, DOCUMENT as I, Injector as ue, ElementRef as K, booleanAttribute as P, InjectionToken as Z } from "@angular/core";
var H = class {
    ignoreVisibility = !1;
}, ae = (() => { class n {
    _platform = c(l);
    constructor() { }
    isDisabled(e) { return e.hasAttribute("disabled"); }
    isVisible(e) { return le(e) && getComputedStyle(e).visibility === "visible"; }
    isTabbable(e) { if (!this._platform.isBrowser)
        return !1; let t = de(Te(e)); if (t && (V(t) === -1 || !this.isVisible(t)))
        return !1; let o = e.nodeName.toLowerCase(), s = V(e); return e.hasAttribute("contenteditable") ? s !== -1 : o === "iframe" || o === "object" || this._platform.WEBKIT && this._platform.IOS && !be(e) ? !1 : o === "audio" ? e.hasAttribute("controls") ? s !== -1 : !1 : o === "video" ? s === -1 ? !1 : s !== null ? !0 : this._platform.FIREFOX || e.hasAttribute("controls") : e.tabIndex >= 0; }
    isFocusable(e, t) { return ge(e) && !this.isDisabled(e) && (t?.ignoreVisibility || this.isVisible(e)); }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = u.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })();
function de(n) { try {
    return n.frameElement;
}
catch {
    return null;
} }
function le(n) { return !!(n.offsetWidth || n.offsetHeight || typeof n.getClientRects == "function" && n.getClientRects().length); }
function he(n) { let i = n.nodeName.toLowerCase(); return i === "input" || i === "select" || i === "button" || i === "textarea"; }
function _e(n) { return me(n) && n.type == "hidden"; }
function fe(n) { return pe(n) && n.hasAttribute("href"); }
function me(n) { return n.nodeName.toLowerCase() == "input"; }
function pe(n) { return n.nodeName.toLowerCase() == "a"; }
function $(n) { if (!n.hasAttribute("tabindex") || n.tabIndex === void 0)
    return !1; let i = n.getAttribute("tabindex"); return !!(i && !isNaN(parseInt(i, 10))); }
function V(n) { if (!$(n))
    return null; let i = parseInt(n.getAttribute("tabindex") || "", 10); return isNaN(i) ? -1 : i; }
function be(n) { let i = n.nodeName.toLowerCase(), e = i === "input" && n.type; return e === "text" || e === "password" || i === "select" || i === "textarea"; }
function ge(n) { return _e(n) ? !1 : he(n) || fe(n) || n.hasAttribute("contenteditable") || $(n); }
function Te(n) { return n.ownerDocument && n.ownerDocument.defaultView || window; }
var y = class {
    _element;
    _checker;
    _ngZone;
    _document;
    _injector;
    _startAnchor;
    _endAnchor;
    _hasAttached = !1;
    startAnchorListener = () => this.focusLastTabbableElement();
    endAnchorListener = () => this.focusFirstTabbableElement();
    get enabled() { return this._enabled; }
    set enabled(i) { this._enabled = i, this._startAnchor && this._endAnchor && (this._toggleAnchorTabIndex(i, this._startAnchor), this._toggleAnchorTabIndex(i, this._endAnchor)); }
    _enabled = !0;
    constructor(i, e, t, o, s = !1, r) { this._element = i, this._checker = e, this._ngZone = t, this._document = o, this._injector = r, s || this.attachAnchors(); }
    destroy() { let i = this._startAnchor, e = this._endAnchor; i && (i.removeEventListener("focus", this.startAnchorListener), i.remove()), e && (e.removeEventListener("focus", this.endAnchorListener), e.remove()), this._startAnchor = this._endAnchor = null, this._hasAttached = !1; }
    attachAnchors() { return this._hasAttached ? !0 : (this._ngZone.runOutsideAngular(() => { this._startAnchor || (this._startAnchor = this._createAnchor(), this._startAnchor.addEventListener("focus", this.startAnchorListener)), this._endAnchor || (this._endAnchor = this._createAnchor(), this._endAnchor.addEventListener("focus", this.endAnchorListener)); }), this._element.parentNode && (this._element.parentNode.insertBefore(this._startAnchor, this._element), this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling), this._hasAttached = !0), this._hasAttached); }
    focusInitialElementWhenReady(i) { return new Promise(e => { this._executeOnStable(() => e(this.focusInitialElement(i))); }); }
    focusFirstTabbableElementWhenReady(i) { return new Promise(e => { this._executeOnStable(() => e(this.focusFirstTabbableElement(i))); }); }
    focusLastTabbableElementWhenReady(i) { return new Promise(e => { this._executeOnStable(() => e(this.focusLastTabbableElement(i))); }); }
    _getRegionBoundary(i) { let e = this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`); return i == "start" ? e.length ? e[0] : this._getFirstTabbableElement(this._element) : e.length ? e[e.length - 1] : this._getLastTabbableElement(this._element); }
    focusInitialElement(i) { let e = this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]"); if (e) {
        if (!this._checker.isFocusable(e)) {
            let t = this._getFirstTabbableElement(e);
            return t?.focus(i), !!t;
        }
        return e.focus(i), !0;
    } return this.focusFirstTabbableElement(i); }
    focusFirstTabbableElement(i) { let e = this._getRegionBoundary("start"); return e && e.focus(i), !!e; }
    focusLastTabbableElement(i) { let e = this._getRegionBoundary("end"); return e && e.focus(i), !!e; }
    hasAttached() { return this._hasAttached; }
    _getFirstTabbableElement(i) { if (this._checker.isFocusable(i) && this._checker.isTabbable(i))
        return i; let e = i.children; for (let t = 0; t < e.length; t++) {
        let o = e[t].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(e[t]) : null;
        if (o)
            return o;
    } return null; }
    _getLastTabbableElement(i) { if (this._checker.isFocusable(i) && this._checker.isTabbable(i))
        return i; let e = i.children; for (let t = e.length - 1; t >= 0; t--) {
        let o = e[t].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(e[t]) : null;
        if (o)
            return o;
    } return null; }
    _createAnchor() { let i = this._document.createElement("div"); return this._toggleAnchorTabIndex(this._enabled, i), i.classList.add("cdk-visually-hidden"), i.classList.add("cdk-focus-trap-anchor"), i.setAttribute("aria-hidden", "true"), i; }
    _toggleAnchorTabIndex(i, e) { i ? e.setAttribute("tabindex", "0") : e.removeAttribute("tabindex"); }
    toggleAnchors(i) { this._startAnchor && this._endAnchor && (this._toggleAnchorTabIndex(i, this._startAnchor), this._toggleAnchorTabIndex(i, this._endAnchor)); }
    _executeOnStable(i) { this._injector ? ce(i, { injector: this._injector }) : setTimeout(i); }
}, Ee = (() => { class n {
    _checker = c(ae);
    _ngZone = c(C);
    _document = c(I);
    _injector = c(ue);
    constructor() { c(T).load(E); }
    create(e, t = !1) { return new y(e, this._checker, this._ngZone, this._document, t, this._injector); }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = u.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })(), it = (() => { class n {
    _elementRef = c(K);
    _focusTrapFactory = c(Ee);
    focusTrap;
    _previouslyFocusedElement = null;
    get enabled() { return this.focusTrap?.enabled || !1; }
    set enabled(e) { this.focusTrap && (this.focusTrap.enabled = e); }
    autoCapture;
    constructor() { c(l).isBrowser && (this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, !0)); }
    ngOnDestroy() { this.focusTrap?.destroy(), this._previouslyFocusedElement && (this._previouslyFocusedElement.focus(), this._previouslyFocusedElement = null); }
    ngAfterContentInit() { this.focusTrap?.attachAnchors(), this.autoCapture && this._captureFocus(); }
    ngDoCheck() { this.focusTrap && !this.focusTrap.hasAttached() && this.focusTrap.attachAnchors(); }
    ngOnChanges(e) { let t = e.autoCapture; t && !t.firstChange && this.autoCapture && this.focusTrap?.hasAttached() && this._captureFocus(); }
    _captureFocus() { this._previouslyFocusedElement = w(), this.focusTrap?.focusInitialElementWhenReady(); }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275dir = u.\u0275\u0275defineDirective({ type: n, selectors: [["", "cdkTrapFocus", ""]], inputs: { enabled: [2, "cdkTrapFocus", "enabled", P], autoCapture: [2, "cdkTrapFocusAutoCapture", "autoCapture", P] }, exportAs: ["cdkTrapFocus"], features: [u.\u0275\u0275NgOnChangesFeature] });
} return n; })(), Ae = new Z("liveAnnouncerElement", { providedIn: "root", factory: ve });
function ve() { return null; }
var ye = new Z("LIVE_ANNOUNCER_DEFAULT_OPTIONS"), Ce = 0, Ie = (() => { class n {
    _ngZone = c(C);
    _defaultOptions = c(ye, { optional: !0 });
    _liveElement;
    _document = c(I);
    _previousTimeout;
    _currentPromise;
    _currentResolve;
    constructor() { let e = c(Ae, { optional: !0 }); this._liveElement = e || this._createLiveElement(); }
    announce(e, ...t) { let o = this._defaultOptions, s, r; return t.length === 1 && typeof t[0] == "number" ? r = t[0] : [s, r] = t, this.clear(), clearTimeout(this._previousTimeout), s || (s = o && o.politeness ? o.politeness : "polite"), r == null && o && (r = o.duration), this._liveElement.setAttribute("aria-live", s), this._liveElement.id && this._exposeAnnouncerToModals(this._liveElement.id), this._ngZone.runOutsideAngular(() => (this._currentPromise || (this._currentPromise = new Promise(d => this._currentResolve = d)), clearTimeout(this._previousTimeout), this._previousTimeout = setTimeout(() => { this._liveElement.textContent = e, typeof r == "number" && (this._previousTimeout = setTimeout(() => this.clear(), r)), this._currentResolve?.(), this._currentPromise = this._currentResolve = void 0; }, 100), this._currentPromise)); }
    clear() { this._liveElement && (this._liveElement.textContent = ""); }
    ngOnDestroy() { clearTimeout(this._previousTimeout), this._liveElement?.remove(), this._liveElement = null, this._currentResolve?.(), this._currentPromise = this._currentResolve = void 0; }
    _createLiveElement() { let e = "cdk-live-announcer-element", t = this._document.getElementsByClassName(e), o = this._document.createElement("div"); for (let s = 0; s < t.length; s++)
        t[s].remove(); return o.classList.add(e), o.classList.add("cdk-visually-hidden"), o.setAttribute("aria-atomic", "true"), o.setAttribute("aria-live", "polite"), o.id = `cdk-live-announcer-${Ce++}`, this._document.body.appendChild(o), o; }
    _exposeAnnouncerToModals(e) { let t = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]'); for (let o = 0; o < t.length; o++) {
        let s = t[o], r = s.getAttribute("aria-owns");
        r ? r.indexOf(e) === -1 && s.setAttribute("aria-owns", r + " " + e) : s.setAttribute("aria-owns", e);
    } }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = u.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })(), st = (() => { class n {
    _elementRef = c(K);
    _liveAnnouncer = c(Ie);
    _contentObserver = c(O);
    _ngZone = c(C);
    get politeness() { return this._politeness; }
    set politeness(e) { this._politeness = e === "off" || e === "assertive" ? e : "polite", this._politeness === "off" ? this._subscription && (this._subscription.unsubscribe(), this._subscription = null) : this._subscription || (this._subscription = this._ngZone.runOutsideAngular(() => this._contentObserver.observe(this._elementRef).subscribe(() => { let t = this._elementRef.nativeElement.textContent; t !== this._previousAnnouncedText && (this._liveAnnouncer.announce(t, this._politeness, this.duration), this._previousAnnouncedText = t); }))); }
    _politeness = "polite";
    duration;
    _previousAnnouncedText;
    _subscription;
    constructor() { c(T).load(E); }
    ngOnDestroy() { this._subscription && this._subscription.unsubscribe(); }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275dir = u.\u0275\u0275defineDirective({ type: n, selectors: [["", "cdkAriaLive", ""]], inputs: { politeness: [0, "cdkAriaLive", "politeness"], duration: [0, "cdkAriaLiveDuration", "duration"] }, exportAs: ["cdkAriaLive"] });
} return n; })(), h = (function (n) { return n[n.NONE = 0] = "NONE", n[n.BLACK_ON_WHITE = 1] = "BLACK_ON_WHITE", n[n.WHITE_ON_BLACK = 2] = "WHITE_ON_BLACK", n; })(h || {}), W = "cdk-high-contrast-black-on-white", U = "cdk-high-contrast-white-on-black", v = "cdk-high-contrast-active", Fe = (() => { class n {
    _platform = c(l);
    _hasCheckedHighContrastMode;
    _document = c(I);
    _breakpointSubscription;
    constructor() { this._breakpointSubscription = c(L).observe("(forced-colors: active)").subscribe(() => { this._hasCheckedHighContrastMode && (this._hasCheckedHighContrastMode = !1, this._applyBodyHighContrastModeCssClasses()); }); }
    getHighContrastMode() { if (!this._platform.isBrowser)
        return h.NONE; let e = this._document.createElement("div"); e.style.backgroundColor = "rgb(1,2,3)", e.style.position = "absolute", this._document.body.appendChild(e); let t = this._document.defaultView || window, o = t && t.getComputedStyle ? t.getComputedStyle(e) : null, s = (o && o.backgroundColor || "").replace(/ /g, ""); switch (e.remove(), s) {
        case "rgb(0,0,0)":
        case "rgb(45,50,54)":
        case "rgb(32,32,32)": return h.WHITE_ON_BLACK;
        case "rgb(255,255,255)":
        case "rgb(255,250,239)": return h.BLACK_ON_WHITE;
    } return h.NONE; }
    ngOnDestroy() { this._breakpointSubscription.unsubscribe(); }
    _applyBodyHighContrastModeCssClasses() { if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
        let e = this._document.body.classList;
        e.remove(v, W, U), this._hasCheckedHighContrastMode = !0;
        let t = this.getHighContrastMode();
        t === h.BLACK_ON_WHITE ? e.add(v, W) : t === h.WHITE_ON_BLACK && e.add(v, U);
    } }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = u.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })(), rt = (() => { class n {
    constructor() { c(Fe)._applyBodyHighContrastModeCssClasses(); }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275mod = u.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = u.\u0275\u0275defineInjector({ imports: [N] });
} return n; })();
export { M as a, D as b, ne as c, oe as d, ie as e, b as f, se as g, re as h, Ke as i, H as j, ae as k, y as l, Ee as m, it as n, Ae as o, ve as p, ye as q, Ie as r, st as s, h as t, Fe as u, rt as v };
