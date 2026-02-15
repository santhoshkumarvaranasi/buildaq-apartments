import { b as F } from "@nf-internal/chunk-BMKAYT4V";
import "@nf-internal/chunk-PRCOYL4O";
import { a as M } from "@nf-internal/chunk-2H5YBILG";
import { h as W, k as Q, m as q, v as U } from "@nf-internal/chunk-OQTTJEXA";
import "@nf-internal/chunk-X7SFHLJ5";
import "@nf-internal/chunk-ZPLV3KDQ";
import "@nf-internal/chunk-QA6ELNH7";
import { A as it, E as ot, a as K, j as X, r as J, s as tt, x as et } from "@nf-internal/chunk-3L53O3WG";
import "@nf-internal/chunk-K3GOACLW";
import { a as Y } from "@nf-internal/chunk-G25BAKAM";
import { a as v } from "@nf-internal/chunk-NCEIK542";
import "@nf-internal/chunk-7N7HFQKY";
import "@nf-internal/chunk-FSAIB72R";
import "@nf-internal/chunk-QXX5WOHX";
import "@nf-internal/chunk-PJPD4VSJ";
import { c as b } from "@nf-internal/chunk-OIQ2QPHM";
import { b as I, c as Z, e as $, i as S, k as E } from "@nf-internal/chunk-NPG5RFMM";
import "@nf-internal/chunk-7DWQP4SD";
import "@nf-internal/chunk-6BLY3LJ7";
import { a as w } from "@nf-internal/chunk-JYXTBF5A";
import { b as k } from "@nf-internal/chunk-JHGJD5QO";
import "@nf-internal/chunk-OH3XPIE7";
import { a as H } from "@nf-internal/chunk-DQM2BKPX";
import { a as u, b as z } from "@nf-internal/chunk-4CLCTAJ7";
import * as d from "@angular/core";
import { inject as c, ElementRef as bt, NgZone as vt, Renderer2 as Ct, ChangeDetectorRef as At, Injector as f, DOCUMENT as Tt, afterNextRender as xt, InjectionToken as P, TemplateRef as Ot, signal as wt, EventEmitter as kt } from "@angular/core";
import { Subject as C, defer as It } from "rxjs";
import { startWith as Et, take as Ft } from "rxjs/operators";
import "@angular/common";
function St(i, a) { }
var p = class {
    viewContainerRef;
    injector;
    id;
    role = "dialog";
    panelClass = "";
    hasBackdrop = !0;
    backdropClass = "";
    disableClose = !1;
    closePredicate;
    width = "";
    height = "";
    minWidth;
    minHeight;
    maxWidth;
    maxHeight;
    positionStrategy;
    data = null;
    direction;
    ariaDescribedBy = null;
    ariaLabelledBy = null;
    ariaLabel = null;
    ariaModal = !1;
    autoFocus = "first-tabbable";
    restoreFocus = !0;
    scrollStrategy;
    closeOnNavigation = !0;
    closeOnDestroy = !0;
    closeOnOverlayDetachments = !0;
    disableAnimations = !1;
    providers;
    container;
    templateContext;
};
var R = (() => {
    class i extends $ {
        _elementRef = c(bt);
        _focusTrapFactory = c(q);
        _config;
        _interactivityChecker = c(Q);
        _ngZone = c(vt);
        _focusMonitor = c(W);
        _renderer = c(Ct);
        _changeDetectorRef = c(At);
        _injector = c(f);
        _platform = c(H);
        _document = c(Tt);
        _portalOutlet;
        _focusTrapped = new C;
        _focusTrap = null;
        _elementFocusedBeforeDialogWasOpened = null;
        _closeInteractionType = null;
        _ariaLabelledByQueue = [];
        _isDestroyed = !1;
        constructor() { super(), this._config = c(p, { optional: !0 }) || new p, this._config.ariaLabelledBy && this._ariaLabelledByQueue.push(this._config.ariaLabelledBy); }
        _addAriaLabelledBy(t) { this._ariaLabelledByQueue.push(t), this._changeDetectorRef.markForCheck(); }
        _removeAriaLabelledBy(t) { let e = this._ariaLabelledByQueue.indexOf(t); e > -1 && (this._ariaLabelledByQueue.splice(e, 1), this._changeDetectorRef.markForCheck()); }
        _contentAttached() { this._initializeFocusTrap(), this._captureInitialFocus(); }
        _captureInitialFocus() { this._trapFocus(); }
        ngOnDestroy() { this._focusTrapped.complete(), this._isDestroyed = !0, this._restoreFocus(); }
        attachComponentPortal(t) { this._portalOutlet.hasAttached(); let e = this._portalOutlet.attachComponentPortal(t); return this._contentAttached(), e; }
        attachTemplatePortal(t) { this._portalOutlet.hasAttached(); let e = this._portalOutlet.attachTemplatePortal(t); return this._contentAttached(), e; }
        attachDomPortal = t => { this._portalOutlet.hasAttached(); let e = this._portalOutlet.attachDomPortal(t); return this._contentAttached(), e; };
        _recaptureFocus() { this._containsFocus() || this._trapFocus(); }
        _forceFocus(t, e) { this._interactivityChecker.isFocusable(t) || (t.tabIndex = -1, this._ngZone.runOutsideAngular(() => { let o = () => { s(), l(), t.removeAttribute("tabindex"); }, s = this._renderer.listen(t, "blur", o), l = this._renderer.listen(t, "mousedown", o); })), t.focus(e); }
        _focusByCssSelector(t, e) { let o = this._elementRef.nativeElement.querySelector(t); o && this._forceFocus(o, e); }
        _trapFocus(t) { this._isDestroyed || xt(() => { let e = this._elementRef.nativeElement; switch (this._config.autoFocus) {
            case !1:
            case "dialog":
                this._containsFocus() || e.focus(t);
                break;
            case !0:
            case "first-tabbable":
                this._focusTrap?.focusInitialElement(t) || this._focusDialogContainer(t);
                break;
            case "first-heading":
                this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]', t);
                break;
            default:
                this._focusByCssSelector(this._config.autoFocus, t);
                break;
        } this._focusTrapped.next(); }, { injector: this._injector }); }
        _restoreFocus() { let t = this._config.restoreFocus, e = null; if (typeof t == "string" ? e = this._document.querySelector(t) : typeof t == "boolean" ? e = t ? this._elementFocusedBeforeDialogWasOpened : null : t && (e = t), this._config.restoreFocus && e && typeof e.focus == "function") {
            let o = b(), s = this._elementRef.nativeElement;
            (!o || o === this._document.body || o === s || s.contains(o)) && (this._focusMonitor ? (this._focusMonitor.focusVia(e, this._closeInteractionType), this._closeInteractionType = null) : e.focus());
        } this._focusTrap && this._focusTrap.destroy(); }
        _focusDialogContainer(t) { this._elementRef.nativeElement.focus?.(t); }
        _containsFocus() { let t = this._elementRef.nativeElement, e = b(); return t === e || t.contains(e); }
        _initializeFocusTrap() { this._platform.isBrowser && (this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement), this._document && (this._elementFocusedBeforeDialogWasOpened = b())); }
        static \u0275fac = function (e) { return new (e || i); };
        static \u0275cmp = d.\u0275\u0275defineComponent({ type: i, selectors: [["cdk-dialog-container"]], viewQuery: function (e, o) { if (e & 1 && d.\u0275\u0275viewQuery(S, 7), e & 2) {
                let s;
                d.\u0275\u0275queryRefresh(s = d.\u0275\u0275loadQuery()) && (o._portalOutlet = s.first);
            } }, hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"], hostVars: 6, hostBindings: function (e, o) { e & 2 && d.\u0275\u0275attribute("id", o._config.id || null)("role", o._config.role)("aria-modal", o._config.ariaModal)("aria-labelledby", o._config.ariaLabel ? null : o._ariaLabelledByQueue[0])("aria-label", o._config.ariaLabel)("aria-describedby", o._config.ariaDescribedBy || null); }, features: [d.\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkPortalOutlet", ""]], template: function (e, o) { e & 1 && d.\u0275\u0275template(0, St, 0, 0, "ng-template", 0); }, dependencies: [S], styles: [`.cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}
`], encapsulation: 2 });
    }
    return i;
})(), _ = class {
    overlayRef;
    config;
    componentInstance;
    componentRef;
    containerInstance;
    disableClose;
    closed = new C;
    backdropClick;
    keydownEvents;
    outsidePointerEvents;
    id;
    _detachSubscription;
    constructor(a, t) { this.overlayRef = a, this.config = t, this.disableClose = t.disableClose, this.backdropClick = a.backdropClick(), this.keydownEvents = a.keydownEvents(), this.outsidePointerEvents = a.outsidePointerEvents(), this.id = t.id, this.keydownEvents.subscribe(e => { e.keyCode === 27 && !this.disableClose && !v(e) && (e.preventDefault(), this.close(void 0, { focusOrigin: "keyboard" })); }), this.backdropClick.subscribe(() => { !this.disableClose && this._canClose() ? this.close(void 0, { focusOrigin: "mouse" }) : this.containerInstance._recaptureFocus?.(); }), this._detachSubscription = a.detachments().subscribe(() => { t.closeOnOverlayDetachments !== !1 && this.close(); }); }
    close(a, t) { if (this._canClose(a)) {
        let e = this.closed;
        this.containerInstance._closeInteractionType = t?.focusOrigin || "program", this._detachSubscription.unsubscribe(), this.overlayRef.dispose(), e.next(a), e.complete(), this.componentInstance = this.containerInstance = null;
    } }
    updatePosition() { return this.overlayRef.updatePosition(), this; }
    updateSize(a = "", t = "") { return this.overlayRef.updateSize({ width: a, height: t }), this; }
    addPanelClass(a) { return this.overlayRef.addPanelClass(a), this; }
    removePanelClass(a) { return this.overlayRef.removePanelClass(a), this; }
    _canClose(a) { let t = this.config; return !!this.containerInstance && (!t.closePredicate || t.closePredicate(a, t, this.componentInstance)); }
}, Mt = new P("DialogScrollStrategy", { providedIn: "root", factory: () => { let i = c(f); return () => K(i); } }), Lt = new P("DialogData"), Pt = new P("DefaultDialogConfig");
function Rt(i) { let a = wt(i), t = new kt; return { valueSignal: a, get value() { return a(); }, change: t, ngOnDestroy() { t.complete(); } }; }
var B = (() => { class i {
    _injector = c(f);
    _defaultOptions = c(Pt, { optional: !0 });
    _parentDialog = c(i, { optional: !0, skipSelf: !0 });
    _overlayContainer = c(J);
    _idGenerator = c(Y);
    _openDialogsAtThisLevel = [];
    _afterAllClosedAtThisLevel = new C;
    _afterOpenedAtThisLevel = new C;
    _ariaHiddenElements = new Map;
    _scrollStrategy = c(Mt);
    get openDialogs() { return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel; }
    get afterOpened() { return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel; }
    afterAllClosed = It(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(Et(void 0)));
    constructor() { }
    open(t, e) { let o = this._defaultOptions || new p; e = u(u({}, o), e), e.id = e.id || this._idGenerator.getId("cdk-dialog-"), e.id && this.getDialogById(e.id); let s = this._getOverlayConfig(e), l = it(this._injector, s), r = new _(l, e), h = this._attachContainer(l, r, e); if (r.containerInstance = h, !this.openDialogs.length) {
        let O = this._overlayContainer.getContainerElement();
        h._focusTrapped ? h._focusTrapped.pipe(Ft(1)).subscribe(() => { this._hideNonDialogContentFromAssistiveTechnology(O); }) : this._hideNonDialogContentFromAssistiveTechnology(O);
    } return this._attachDialogContent(t, r, h, e), this.openDialogs.push(r), r.closed.subscribe(() => this._removeOpenDialog(r, !0)), this.afterOpened.next(r), r; }
    closeAll() { L(this.openDialogs, t => t.close()); }
    getDialogById(t) { return this.openDialogs.find(e => e.id === t); }
    ngOnDestroy() { L(this._openDialogsAtThisLevel, t => { t.config.closeOnDestroy === !1 && this._removeOpenDialog(t, !1); }), L(this._openDialogsAtThisLevel, t => t.close()), this._afterAllClosedAtThisLevel.complete(), this._afterOpenedAtThisLevel.complete(), this._openDialogsAtThisLevel = []; }
    _getOverlayConfig(t) { let e = new X({ positionStrategy: t.positionStrategy || et().centerHorizontally().centerVertically(), scrollStrategy: t.scrollStrategy || this._scrollStrategy(), panelClass: t.panelClass, hasBackdrop: t.hasBackdrop, direction: t.direction, minWidth: t.minWidth, minHeight: t.minHeight, maxWidth: t.maxWidth, maxHeight: t.maxHeight, width: t.width, height: t.height, disposeOnNavigation: t.closeOnNavigation, disableAnimations: t.disableAnimations }); return t.backdropClass && (e.backdropClass = t.backdropClass), e; }
    _attachContainer(t, e, o) { let s = o.injector || o.viewContainerRef?.injector, l = [{ provide: p, useValue: o }, { provide: _, useValue: e }, { provide: tt, useValue: t }], r; o.container ? typeof o.container == "function" ? r = o.container : (r = o.container.type, l.push(...o.container.providers(o))) : r = R; let h = new I(r, o.viewContainerRef, f.create({ parent: s || this._injector, providers: l })); return t.attach(h).instance; }
    _attachDialogContent(t, e, o, s) { if (t instanceof Ot) {
        let l = this._createInjector(s, e, o, void 0), r = { $implicit: s.data, dialogRef: e };
        s.templateContext && (r = u(u({}, r), typeof s.templateContext == "function" ? s.templateContext() : s.templateContext)), o.attachTemplatePortal(new Z(t, null, r, l));
    }
    else {
        let l = this._createInjector(s, e, o, this._injector), r = o.attachComponentPortal(new I(t, s.viewContainerRef, l));
        e.componentRef = r, e.componentInstance = r.instance;
    } }
    _createInjector(t, e, o, s) { let l = t.injector || t.viewContainerRef?.injector, r = [{ provide: Lt, useValue: t.data }, { provide: _, useValue: e }]; return t.providers && (typeof t.providers == "function" ? r.push(...t.providers(e, t, o)) : r.push(...t.providers)), t.direction && (!l || !l.get(k, null, { optional: !0 })) && r.push({ provide: k, useValue: Rt(t.direction) }), f.create({ parent: l || s, providers: r }); }
    _removeOpenDialog(t, e) { let o = this.openDialogs.indexOf(t); o > -1 && (this.openDialogs.splice(o, 1), this.openDialogs.length || (this._ariaHiddenElements.forEach((s, l) => { s ? l.setAttribute("aria-hidden", s) : l.removeAttribute("aria-hidden"); }), this._ariaHiddenElements.clear(), e && this._getAfterAllClosed().next())); }
    _hideNonDialogContentFromAssistiveTechnology(t) { if (t.parentElement) {
        let e = t.parentElement.children;
        for (let o = e.length - 1; o > -1; o--) {
            let s = e[o];
            s !== t && s.nodeName !== "SCRIPT" && s.nodeName !== "STYLE" && !s.hasAttribute("aria-live") && (this._ariaHiddenElements.set(s, s.getAttribute("aria-hidden")), s.setAttribute("aria-hidden", "true"));
        }
    } }
    _getAfterAllClosed() { let t = this._parentDialog; return t ? t._getAfterAllClosed() : this._afterAllClosedAtThisLevel; }
    static \u0275fac = function (e) { return new (e || i); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" });
} return i; })();
function L(i, a) { let t = i.length; for (; t--;)
    a(i[t]); }
var nt = (() => { class i {
    static \u0275fac = function (e) { return new (e || i); };
    static \u0275mod = d.\u0275\u0275defineNgModule({ type: i });
    static \u0275inj = d.\u0275\u0275defineInjector({ providers: [B], imports: [ot, E, U, E] });
} return i; })();
import { createBlockScrollStrategy as Bt, createGlobalPositionStrategy as jt, OverlayModule as Nt } from "@angular/cdk/overlay";
import { CdkPortalOutlet as Gt, PortalModule as Vt } from "@angular/cdk/portal";
import * as n from "@angular/core";
import { EventEmitter as zt, InjectionToken as G, inject as m, Injector as ct, ElementRef as mt } from "@angular/core";
import { Subject as T, merge as Ht, defer as Wt } from "rxjs";
import { filter as A, take as j, startWith as Qt } from "rxjs/operators";
import { _IdGenerator as ht } from "@angular/cdk/a11y";
import * as ut from "@angular/cdk/scrolling";
import "@angular/cdk/scrolling";
function qt(i, a) { }
var D = class {
    viewContainerRef;
    injector;
    id;
    role = "dialog";
    panelClass = "";
    hasBackdrop = !0;
    backdropClass = "";
    disableClose = !1;
    closePredicate;
    width = "";
    height = "";
    minWidth;
    minHeight;
    maxWidth;
    maxHeight;
    position;
    data = null;
    direction;
    ariaDescribedBy = null;
    ariaLabelledBy = null;
    ariaLabel = null;
    ariaModal = !1;
    autoFocus = "first-tabbable";
    restoreFocus = !0;
    delayFocusTrap = !0;
    scrollStrategy;
    closeOnNavigation = !0;
    enterAnimationDuration;
    exitAnimationDuration;
}, N = "mdc-dialog--open", st = "mdc-dialog--opening", rt = "mdc-dialog--closing", Ut = 150, Yt = 75, pt = (() => {
    class i extends R {
        _animationStateChanged = new zt;
        _animationsEnabled = !F();
        _actionSectionCount = 0;
        _hostElement = this._elementRef.nativeElement;
        _enterAnimationDuration = this._animationsEnabled ? dt(this._config.enterAnimationDuration) ?? Ut : 0;
        _exitAnimationDuration = this._animationsEnabled ? dt(this._config.exitAnimationDuration) ?? Yt : 0;
        _animationTimer = null;
        _contentAttached() { super._contentAttached(), this._startOpenAnimation(); }
        _startOpenAnimation() { this._animationStateChanged.emit({ state: "opening", totalTime: this._enterAnimationDuration }), this._animationsEnabled ? (this._hostElement.style.setProperty(lt, `${this._enterAnimationDuration}ms`), this._requestAnimationFrame(() => this._hostElement.classList.add(st, N)), this._waitForAnimationToComplete(this._enterAnimationDuration, this._finishDialogOpen)) : (this._hostElement.classList.add(N), Promise.resolve().then(() => this._finishDialogOpen())); }
        _startExitAnimation() { this._animationStateChanged.emit({ state: "closing", totalTime: this._exitAnimationDuration }), this._hostElement.classList.remove(N), this._animationsEnabled ? (this._hostElement.style.setProperty(lt, `${this._exitAnimationDuration}ms`), this._requestAnimationFrame(() => this._hostElement.classList.add(rt)), this._waitForAnimationToComplete(this._exitAnimationDuration, this._finishDialogClose)) : Promise.resolve().then(() => this._finishDialogClose()); }
        _updateActionSectionCount(t) { this._actionSectionCount += t, this._changeDetectorRef.markForCheck(); }
        _finishDialogOpen = () => { this._clearAnimationClasses(), this._openAnimationDone(this._enterAnimationDuration); };
        _finishDialogClose = () => { this._clearAnimationClasses(), this._animationStateChanged.emit({ state: "closed", totalTime: this._exitAnimationDuration }); };
        _clearAnimationClasses() { this._hostElement.classList.remove(st, rt); }
        _waitForAnimationToComplete(t, e) { this._animationTimer !== null && clearTimeout(this._animationTimer), this._animationTimer = setTimeout(e, t); }
        _requestAnimationFrame(t) { this._ngZone.runOutsideAngular(() => { typeof requestAnimationFrame == "function" ? requestAnimationFrame(t) : t(); }); }
        _captureInitialFocus() { this._config.delayFocusTrap || this._trapFocus(); }
        _openAnimationDone(t) { this._config.delayFocusTrap && this._trapFocus(), this._animationStateChanged.next({ state: "opened", totalTime: t }); }
        ngOnDestroy() { super.ngOnDestroy(), this._animationTimer !== null && clearTimeout(this._animationTimer); }
        attachComponentPortal(t) { let e = super.attachComponentPortal(t); return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"), e; }
        static \u0275fac = (() => { let t; return function (o) { return (t || (t = n.\u0275\u0275getInheritedFactory(i)))(o || i); }; })();
        static \u0275cmp = n.\u0275\u0275defineComponent({ type: i, selectors: [["mat-dialog-container"]], hostAttrs: ["tabindex", "-1", 1, "mat-mdc-dialog-container", "mdc-dialog"], hostVars: 10, hostBindings: function (e, o) { e & 2 && (n.\u0275\u0275domProperty("id", o._config.id), n.\u0275\u0275attribute("aria-modal", o._config.ariaModal)("role", o._config.role)("aria-labelledby", o._config.ariaLabel ? null : o._ariaLabelledByQueue[0])("aria-label", o._config.ariaLabel)("aria-describedby", o._config.ariaDescribedBy || null), n.\u0275\u0275classProp("_mat-animation-noopable", !o._animationsEnabled)("mat-mdc-dialog-container-with-actions", o._actionSectionCount > 0)); }, features: [n.\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 0, consts: [[1, "mat-mdc-dialog-inner-container", "mdc-dialog__container"], [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"], ["cdkPortalOutlet", ""]], template: function (e, o) { e & 1 && (n.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1), n.\u0275\u0275template(2, qt, 0, 0, "ng-template", 2), n.\u0275\u0275elementEnd()()); }, dependencies: [Gt], styles: [`.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mat-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;box-sizing:border-box;min-height:52px;margin:0;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}
`], encapsulation: 2 });
    }
    return i;
})(), lt = "--mat-dialog-transition-duration";
function dt(i) { return i == null ? null : typeof i == "number" ? i : i.endsWith("ms") ? w(i.substring(0, i.length - 2)) : i.endsWith("s") ? w(i.substring(0, i.length - 1)) * 1e3 : i === "0" ? 0 : null; }
var y = (function (i) { return i[i.OPEN = 0] = "OPEN", i[i.CLOSING = 1] = "CLOSING", i[i.CLOSED = 2] = "CLOSED", i; })(y || {}), g = class {
    _ref;
    _config;
    _containerInstance;
    componentInstance;
    componentRef;
    disableClose;
    id;
    _afterOpened = new T;
    _beforeClosed = new T;
    _result;
    _closeFallbackTimeout;
    _state = y.OPEN;
    _closeInteractionType;
    constructor(a, t, e) { this._ref = a, this._config = t, this._containerInstance = e, this.disableClose = t.disableClose, this.id = a.id, a.addPanelClass("mat-mdc-dialog-panel"), e._animationStateChanged.pipe(A(o => o.state === "opened"), j(1)).subscribe(() => { this._afterOpened.next(), this._afterOpened.complete(); }), e._animationStateChanged.pipe(A(o => o.state === "closed"), j(1)).subscribe(() => { clearTimeout(this._closeFallbackTimeout), this._finishDialogClose(); }), a.overlayRef.detachments().subscribe(() => { this._beforeClosed.next(this._result), this._beforeClosed.complete(), this._finishDialogClose(); }), Ht(this.backdropClick(), this.keydownEvents().pipe(A(o => o.keyCode === 27 && !this.disableClose && !v(o)))).subscribe(o => { this.disableClose || (o.preventDefault(), V(this, o.type === "keydown" ? "keyboard" : "mouse")); }); }
    close(a) { let t = this._config.closePredicate; t && !t(a, this._config, this.componentInstance) || (this._result = a, this._containerInstance._animationStateChanged.pipe(A(e => e.state === "closing"), j(1)).subscribe(e => { this._beforeClosed.next(a), this._beforeClosed.complete(), this._ref.overlayRef.detachBackdrop(), this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), e.totalTime + 100); }), this._state = y.CLOSING, this._containerInstance._startExitAnimation()); }
    afterOpened() { return this._afterOpened; }
    afterClosed() { return this._ref.closed; }
    beforeClosed() { return this._beforeClosed; }
    backdropClick() { return this._ref.backdropClick; }
    keydownEvents() { return this._ref.keydownEvents; }
    updatePosition(a) { let t = this._ref.config.positionStrategy; return a && (a.left || a.right) ? a.left ? t.left(a.left) : t.right(a.right) : t.centerHorizontally(), a && (a.top || a.bottom) ? a.top ? t.top(a.top) : t.bottom(a.bottom) : t.centerVertically(), this._ref.updatePosition(), this; }
    updateSize(a = "", t = "") { return this._ref.updateSize(a, t), this; }
    addPanelClass(a) { return this._ref.addPanelClass(a), this; }
    removePanelClass(a) { return this._ref.removePanelClass(a), this; }
    getState() { return this._state; }
    _finishDialogClose() { this._state = y.CLOSED, this._ref.close(this._result, { focusOrigin: this._closeInteractionType }), this.componentInstance = null; }
};
function V(i, a, t) { return i._closeInteractionType = a, i.close(t); }
var gt = new G("MatMdcDialogData"), ft = new G("mat-mdc-dialog-default-options"), _t = new G("mat-mdc-dialog-scroll-strategy", { providedIn: "root", factory: () => { let i = m(ct); return () => Bt(i); } }), x = (() => { class i {
    _defaultOptions = m(ft, { optional: !0 });
    _scrollStrategy = m(_t);
    _parentDialog = m(i, { optional: !0, skipSelf: !0 });
    _idGenerator = m(ht);
    _injector = m(ct);
    _dialog = m(B);
    _animationsDisabled = F();
    _openDialogsAtThisLevel = [];
    _afterAllClosedAtThisLevel = new T;
    _afterOpenedAtThisLevel = new T;
    dialogConfigClass = D;
    _dialogRefConstructor;
    _dialogContainerType;
    _dialogDataToken;
    get openDialogs() { return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel; }
    get afterOpened() { return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel; }
    _getAfterAllClosed() { let t = this._parentDialog; return t ? t._getAfterAllClosed() : this._afterAllClosedAtThisLevel; }
    afterAllClosed = Wt(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(Qt(void 0)));
    constructor() { this._dialogRefConstructor = g, this._dialogContainerType = pt, this._dialogDataToken = gt; }
    open(t, e) { let o; e = u(u({}, this._defaultOptions || new D), e), e.id = e.id || this._idGenerator.getId("mat-mdc-dialog-"), e.scrollStrategy = e.scrollStrategy || this._scrollStrategy(); let s = this._dialog.open(t, z(u({}, e), { positionStrategy: jt(this._injector).centerHorizontally().centerVertically(), disableClose: !0, closePredicate: void 0, closeOnDestroy: !1, closeOnOverlayDetachments: !1, disableAnimations: this._animationsDisabled || e.enterAnimationDuration?.toLocaleString() === "0" || e.exitAnimationDuration?.toString() === "0", container: { type: this._dialogContainerType, providers: () => [{ provide: this.dialogConfigClass, useValue: e }, { provide: p, useValue: e }] }, templateContext: () => ({ dialogRef: o }), providers: (l, r, h) => (o = new this._dialogRefConstructor(l, e, h), o.updatePosition(e?.position), [{ provide: this._dialogContainerType, useValue: h }, { provide: this._dialogDataToken, useValue: r.data }, { provide: this._dialogRefConstructor, useValue: o }]) })); return o.componentRef = s.componentRef, o.componentInstance = s.componentInstance, this.openDialogs.push(o), this.afterOpened.next(o), o.afterClosed().subscribe(() => { let l = this.openDialogs.indexOf(o); l > -1 && (this.openDialogs.splice(l, 1), this.openDialogs.length || this._getAfterAllClosed().next()); }), o; }
    closeAll() { this._closeDialogs(this.openDialogs); }
    getDialogById(t) { return this.openDialogs.find(e => e.id === t); }
    ngOnDestroy() { this._closeDialogs(this._openDialogsAtThisLevel), this._afterAllClosedAtThisLevel.complete(), this._afterOpenedAtThisLevel.complete(); }
    _closeDialogs(t) { let e = t.length; for (; e--;)
        t[e].close(); }
    static \u0275fac = function (e) { return new (e || i); };
    static \u0275prov = n.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" });
} return i; })(), Zt = (() => { class i {
    dialogRef = m(g, { optional: !0 });
    _elementRef = m(mt);
    _dialog = m(x);
    ariaLabel;
    type = "button";
    dialogResult;
    _matDialogClose;
    constructor() { }
    ngOnInit() { this.dialogRef || (this.dialogRef = Dt(this._elementRef, this._dialog.openDialogs)); }
    ngOnChanges(t) { let e = t._matDialogClose || t._matDialogCloseResult; e && (this.dialogResult = e.currentValue); }
    _onButtonClick(t) { V(this.dialogRef, t.screenX === 0 && t.screenY === 0 ? "keyboard" : "mouse", this.dialogResult); }
    static \u0275fac = function (e) { return new (e || i); };
    static \u0275dir = n.\u0275\u0275defineDirective({ type: i, selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]], hostVars: 2, hostBindings: function (e, o) { e & 1 && n.\u0275\u0275listener("click", function (l) { return o._onButtonClick(l); }), e & 2 && n.\u0275\u0275attribute("aria-label", o.ariaLabel || null)("type", o.type); }, inputs: { ariaLabel: [0, "aria-label", "ariaLabel"], type: "type", dialogResult: [0, "mat-dialog-close", "dialogResult"], _matDialogClose: [0, "matDialogClose", "_matDialogClose"] }, exportAs: ["matDialogClose"], features: [n.\u0275\u0275NgOnChangesFeature] });
} return i; })(), yt = (() => { class i {
    _dialogRef = m(g, { optional: !0 });
    _elementRef = m(mt);
    _dialog = m(x);
    constructor() { }
    ngOnInit() { this._dialogRef || (this._dialogRef = Dt(this._elementRef, this._dialog.openDialogs)), this._dialogRef && Promise.resolve().then(() => { this._onAdd(); }); }
    ngOnDestroy() { this._dialogRef?._containerInstance && Promise.resolve().then(() => { this._onRemove(); }); }
    static \u0275fac = function (e) { return new (e || i); };
    static \u0275dir = n.\u0275\u0275defineDirective({ type: i });
} return i; })(), $t = (() => { class i extends yt {
    id = m(ht).getId("mat-mdc-dialog-title-");
    _onAdd() { this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id); }
    _onRemove() { this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id); }
    static \u0275fac = (() => { let t; return function (o) { return (t || (t = n.\u0275\u0275getInheritedFactory(i)))(o || i); }; })();
    static \u0275dir = n.\u0275\u0275defineDirective({ type: i, selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]], hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"], hostVars: 1, hostBindings: function (e, o) { e & 2 && n.\u0275\u0275domProperty("id", o.id); }, inputs: { id: "id" }, exportAs: ["matDialogTitle"], features: [n.\u0275\u0275InheritDefinitionFeature] });
} return i; })(), Kt = (() => { class i {
    static \u0275fac = function (e) { return new (e || i); };
    static \u0275dir = n.\u0275\u0275defineDirective({ type: i, selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]], hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"], features: [n.\u0275\u0275HostDirectivesFeature([ut.CdkScrollable])] });
} return i; })(), Xt = (() => { class i extends yt {
    align;
    _onAdd() { this._dialogRef._containerInstance?._updateActionSectionCount?.(1); }
    _onRemove() { this._dialogRef._containerInstance?._updateActionSectionCount?.(-1); }
    static \u0275fac = (() => { let t; return function (o) { return (t || (t = n.\u0275\u0275getInheritedFactory(i)))(o || i); }; })();
    static \u0275dir = n.\u0275\u0275defineDirective({ type: i, selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]], hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"], hostVars: 6, hostBindings: function (e, o) { e & 2 && n.\u0275\u0275classProp("mat-mdc-dialog-actions-align-start", o.align === "start")("mat-mdc-dialog-actions-align-center", o.align === "center")("mat-mdc-dialog-actions-align-end", o.align === "end"); }, inputs: { align: "align" }, features: [n.\u0275\u0275InheritDefinitionFeature] });
} return i; })();
function Dt(i, a) { let t = i.nativeElement.parentElement; for (; t && !t.classList.contains("mat-mdc-dialog-container");)
    t = t.parentElement; return t ? a.find(e => e.id === t.id) : null; }
var Jt = (() => { class i {
    static \u0275fac = function (e) { return new (e || i); };
    static \u0275mod = n.\u0275\u0275defineNgModule({ type: i });
    static \u0275inj = n.\u0275\u0275defineInjector({ providers: [x], imports: [nt, Nt, Vt, M, M] });
} return i; })();
import "@angular/cdk/overlay";
import "@angular/cdk/portal";
import "@angular/core";
import "rxjs";
import "rxjs/operators";
import "@angular/cdk/a11y";
import "@angular/cdk/scrolling";
import "@angular/cdk/bidi";
var Ke = { params: { enterAnimationDuration: "150ms", exitAnimationDuration: "75ms" } }, Xe = { dialogContainer: { type: 7, name: "dialogContainer", definitions: [{ type: 0, name: "void, exit", styles: { type: 6, styles: { opacity: 0, transform: "scale(0.7)" }, offset: null } }, { type: 0, name: "enter", styles: { type: 6, styles: { transform: "none" }, offset: null } }, { type: 1, expr: "* => enter", animation: { type: 3, steps: [{ type: 4, styles: { type: 6, styles: { transform: "none", opacity: 1 }, offset: null }, timings: "{{enterAnimationDuration}} cubic-bezier(0, 0, 0.2, 1)" }, { type: 11, selector: "@*", animation: { type: 9, options: null }, options: { optional: !0 } }], options: null }, options: { params: { enterAnimationDuration: "150ms", exitAnimationDuration: "75ms" } } }, { type: 1, expr: "* => void, * => exit", animation: { type: 3, steps: [{ type: 4, styles: { type: 6, styles: { opacity: 0 }, offset: null }, timings: "{{exitAnimationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)" }, { type: 11, selector: "@*", animation: { type: 9, options: null }, options: { optional: !0 } }], options: null }, options: { params: { enterAnimationDuration: "150ms", exitAnimationDuration: "75ms" } } }], options: {} } };
export { gt as MAT_DIALOG_DATA, ft as MAT_DIALOG_DEFAULT_OPTIONS, _t as MAT_DIALOG_SCROLL_STRATEGY, x as MatDialog, Xt as MatDialogActions, Zt as MatDialogClose, D as MatDialogConfig, pt as MatDialogContainer, Kt as MatDialogContent, Jt as MatDialogModule, g as MatDialogRef, y as MatDialogState, $t as MatDialogTitle, V as _closeDialogVia, Ke as _defaultParams, Xe as matDialogAnimations };
