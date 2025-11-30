import { b as D } from "@nf-internal/chunk-U6VGVGKT";
import "@nf-internal/chunk-4CLCTAJ7";
import { FocusTrapFactory as I, FocusMonitor as P, InteractivityChecker as V } from "@angular/cdk/a11y";
import { Directionality as j, BidiModule as z } from "@angular/cdk/bidi";
import { coerceBooleanProperty as l, coerceNumberProperty as x } from "@angular/cdk/coercion";
import { ESCAPE as O, hasModifierKey as Q } from "@angular/cdk/keycodes";
import { Platform as v } from "@angular/cdk/platform";
import { CdkScrollable as m, ScrollDispatcher as W, ViewportRuler as G, CdkScrollableModule as M } from "@angular/cdk/scrolling";
import * as t from "@angular/core";
import { InjectionToken as T, inject as a, ChangeDetectorRef as b, ElementRef as y, NgZone as C, Renderer2 as N, DOCUMENT as Z, signal as H, EventEmitter as f, Injector as R, afterNextRender as A, QueryList as L } from "@angular/core";
import { Subject as c, fromEvent as q, merge as U } from "rxjs";
import { filter as h, map as E, mapTo as F, takeUntil as d, take as K, startWith as S, debounceTime as $ } from "rxjs/operators";
import "@angular/cdk/layout";
var u = ["*"], J = ["content"], X = [[["mat-drawer"]], [["mat-drawer-content"]], "*"], Y = ["mat-drawer", "mat-drawer-content", "*"];
function ee(n, _) { if (n & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "div", 1), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i._onBackdropClicked()); }), t.\u0275\u0275elementEnd();
} if (n & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275classProp("mat-drawer-shown", e._isShowingBackdrop());
} }
function te(n, _) { n & 1 && (t.\u0275\u0275elementStart(0, "mat-drawer-content"), t.\u0275\u0275projection(1, 2), t.\u0275\u0275elementEnd()); }
var re = [[["mat-sidenav"]], [["mat-sidenav-content"]], "*"], ie = ["mat-sidenav", "mat-sidenav-content", "*"];
function ne(n, _) { if (n & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "div", 1), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i._onBackdropClicked()); }), t.\u0275\u0275elementEnd();
} if (n & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275classProp("mat-drawer-shown", e._isShowingBackdrop());
} }
function ae(n, _) { n & 1 && (t.\u0275\u0275elementStart(0, "mat-sidenav-content"), t.\u0275\u0275projection(1, 2), t.\u0275\u0275elementEnd()); }
var oe = `.mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}
`;
function Se(n) { throw Error(`A drawer was already declared for 'position="${n}"'`); }
var se = new T("MAT_DRAWER_DEFAULT_AUTOSIZE", { providedIn: "root", factory: () => !1 }), k = new T("MAT_DRAWER_CONTAINER"), p = (() => { class n extends m {
    _platform = a(v);
    _changeDetectorRef = a(b);
    _container = a(g);
    constructor() { let e = a(y), r = a(W), i = a(C); super(e, r, i); }
    ngAfterContentInit() { this._container._contentMarginChanges.subscribe(() => { this._changeDetectorRef.markForCheck(); }); }
    _shouldBeHidden() { if (this._platform.isBrowser)
        return !1; let { start: e, end: r } = this._container; return e != null && e.mode !== "over" && e.opened || r != null && r.mode !== "over" && r.opened; }
    static \u0275fac = function (r) { return new (r || n); };
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: n, selectors: [["mat-drawer-content"]], hostAttrs: [1, "mat-drawer-content"], hostVars: 6, hostBindings: function (r, i) { r & 2 && (t.\u0275\u0275styleProp("margin-left", i._container._contentMargins.left, "px")("margin-right", i._container._contentMargins.right, "px"), t.\u0275\u0275classProp("mat-drawer-content-hidden", i._shouldBeHidden())); }, features: [t.\u0275\u0275ProvidersFeature([{ provide: m, useExisting: n }]), t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: u, decls: 1, vars: 0, template: function (r, i) { r & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
} return n; })(), w = (() => { class n {
    _elementRef = a(y);
    _focusTrapFactory = a(I);
    _focusMonitor = a(P);
    _platform = a(v);
    _ngZone = a(C);
    _renderer = a(N);
    _interactivityChecker = a(V);
    _doc = a(Z);
    _container = a(k, { optional: !0 });
    _focusTrap = null;
    _elementFocusedBeforeDrawerWasOpened = null;
    _eventCleanups;
    _isAttached;
    _anchor;
    get position() { return this._position; }
    set position(e) { e = e === "end" ? "end" : "start", e !== this._position && (this._isAttached && this._updatePositionInParent(e), this._position = e, this.onPositionChanged.emit()); }
    _position = "start";
    get mode() { return this._mode; }
    set mode(e) { this._mode = e, this._updateFocusTrapState(), this._modeChanged.next(); }
    _mode = "over";
    get disableClose() { return this._disableClose; }
    set disableClose(e) { this._disableClose = l(e); }
    _disableClose = !1;
    get autoFocus() { let e = this._autoFocus; return e ?? (this.mode === "side" ? "dialog" : "first-tabbable"); }
    set autoFocus(e) { (e === "true" || e === "false" || e == null) && (e = l(e)), this._autoFocus = e; }
    _autoFocus;
    get opened() { return this._opened(); }
    set opened(e) { this.toggle(l(e)); }
    _opened = H(!1);
    _openedVia;
    _animationStarted = new c;
    _animationEnd = new c;
    openedChange = new f(!0);
    _openedStream = this.openedChange.pipe(h(e => e), E(() => { }));
    openedStart = this._animationStarted.pipe(h(() => this.opened), F(void 0));
    _closedStream = this.openedChange.pipe(h(e => !e), E(() => { }));
    closedStart = this._animationStarted.pipe(h(() => !this.opened), F(void 0));
    _destroyed = new c;
    onPositionChanged = new f;
    _content;
    _modeChanged = new c;
    _injector = a(R);
    _changeDetectorRef = a(b);
    constructor() { this.openedChange.pipe(d(this._destroyed)).subscribe(e => { e ? (this._elementFocusedBeforeDrawerWasOpened = this._doc.activeElement, this._takeFocus()) : this._isFocusWithinDrawer() && this._restoreFocus(this._openedVia || "program"); }), this._ngZone.runOutsideAngular(() => { let e = this._elementRef.nativeElement; q(e, "keydown").pipe(h(r => r.keyCode === O && !this.disableClose && !Q(r)), d(this._destroyed)).subscribe(r => this._ngZone.run(() => { this.close(), r.stopPropagation(), r.preventDefault(); })), this._eventCleanups = [this._renderer.listen(e, "transitionrun", this._handleTransitionEvent), this._renderer.listen(e, "transitionend", this._handleTransitionEvent), this._renderer.listen(e, "transitioncancel", this._handleTransitionEvent)]; }), this._animationEnd.subscribe(() => { this.openedChange.emit(this.opened); }); }
    _forceFocus(e, r) { this._interactivityChecker.isFocusable(e) || (e.tabIndex = -1, this._ngZone.runOutsideAngular(() => { let i = () => { o(), s(), e.removeAttribute("tabindex"); }, o = this._renderer.listen(e, "blur", i), s = this._renderer.listen(e, "mousedown", i); })), e.focus(r); }
    _focusByCssSelector(e, r) { let i = this._elementRef.nativeElement.querySelector(e); i && this._forceFocus(i, r); }
    _takeFocus() { if (!this._focusTrap)
        return; let e = this._elementRef.nativeElement; switch (this.autoFocus) {
        case !1:
        case "dialog": return;
        case !0:
        case "first-tabbable":
            A(() => { !this._focusTrap.focusInitialElement() && typeof e.focus == "function" && e.focus(); }, { injector: this._injector });
            break;
        case "first-heading":
            this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
            break;
        default:
            this._focusByCssSelector(this.autoFocus);
            break;
    } }
    _restoreFocus(e) { this.autoFocus !== "dialog" && (this._elementFocusedBeforeDrawerWasOpened ? this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, e) : this._elementRef.nativeElement.blur(), this._elementFocusedBeforeDrawerWasOpened = null); }
    _isFocusWithinDrawer() { let e = this._doc.activeElement; return !!e && this._elementRef.nativeElement.contains(e); }
    ngAfterViewInit() { this._isAttached = !0, this._position === "end" && this._updatePositionInParent("end"), this._platform.isBrowser && (this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement), this._updateFocusTrapState()); }
    ngOnDestroy() { this._eventCleanups.forEach(e => e()), this._focusTrap?.destroy(), this._anchor?.remove(), this._anchor = null, this._animationStarted.complete(), this._animationEnd.complete(), this._modeChanged.complete(), this._destroyed.next(), this._destroyed.complete(); }
    open(e) { return this.toggle(!0, e); }
    close() { return this.toggle(!1); }
    _closeViaBackdropClick() { return this._setOpen(!1, !0, "mouse"); }
    toggle(e = !this.opened, r) { e && r && (this._openedVia = r); let i = this._setOpen(e, !e && this._isFocusWithinDrawer(), this._openedVia || "program"); return e || (this._openedVia = null), i; }
    _setOpen(e, r, i) { return e === this.opened ? Promise.resolve(e ? "open" : "close") : (this._opened.set(e), this._container?._transitionsEnabled ? this._setIsAnimating(!0) : setTimeout(() => { this._animationStarted.next(), this._animationEnd.next(); }), this._elementRef.nativeElement.classList.toggle("mat-drawer-opened", e), !e && r && this._restoreFocus(i), this._changeDetectorRef.markForCheck(), this._updateFocusTrapState(), new Promise(o => { this.openedChange.pipe(K(1)).subscribe(s => o(s ? "open" : "close")); })); }
    _setIsAnimating(e) { this._elementRef.nativeElement.classList.toggle("mat-drawer-animating", e); }
    _getWidth() { return this._elementRef.nativeElement.offsetWidth || 0; }
    _updateFocusTrapState() { this._focusTrap && (this._focusTrap.enabled = !!this._container?.hasBackdrop && this.opened); }
    _updatePositionInParent(e) { if (!this._platform.isBrowser)
        return; let r = this._elementRef.nativeElement, i = r.parentNode; e === "end" ? (this._anchor || (this._anchor = this._doc.createComment("mat-drawer-anchor"), i.insertBefore(this._anchor, r)), i.appendChild(r)) : this._anchor && this._anchor.parentNode.insertBefore(r, this._anchor); }
    _handleTransitionEvent = e => { let r = this._elementRef.nativeElement; e.target === r && this._ngZone.run(() => { e.type === "transitionrun" ? this._animationStarted.next(e) : (e.type === "transitionend" && this._setIsAnimating(!1), this._animationEnd.next(e)); }); };
    static \u0275fac = function (r) { return new (r || n); };
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: n, selectors: [["mat-drawer"]], viewQuery: function (r, i) { if (r & 1 && t.\u0275\u0275viewQuery(J, 5), r & 2) {
            let o;
            t.\u0275\u0275queryRefresh(o = t.\u0275\u0275loadQuery()) && (i._content = o.first);
        } }, hostAttrs: [1, "mat-drawer"], hostVars: 12, hostBindings: function (r, i) { r & 2 && (t.\u0275\u0275attribute("align", null)("tabIndex", i.mode !== "side" ? "-1" : null), t.\u0275\u0275styleProp("visibility", !i._container && !i.opened ? "hidden" : null), t.\u0275\u0275classProp("mat-drawer-end", i.position === "end")("mat-drawer-over", i.mode === "over")("mat-drawer-push", i.mode === "push")("mat-drawer-side", i.mode === "side")); }, inputs: { position: "position", mode: "mode", disableClose: "disableClose", autoFocus: "autoFocus", opened: "opened" }, outputs: { openedChange: "openedChange", _openedStream: "opened", openedStart: "openedStart", _closedStream: "closed", closedStart: "closedStart", onPositionChanged: "positionChanged" }, exportAs: ["matDrawer"], ngContentSelectors: u, decls: 3, vars: 0, consts: [["content", ""], ["cdkScrollable", "", 1, "mat-drawer-inner-container"]], template: function (r, i) { r & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275elementStart(0, "div", 1, 0), t.\u0275\u0275projection(2), t.\u0275\u0275elementEnd()); }, dependencies: [m], encapsulation: 2, changeDetection: 0 });
} return n; })(), g = (() => {
    class n {
        _dir = a(j, { optional: !0 });
        _element = a(y);
        _ngZone = a(C);
        _changeDetectorRef = a(b);
        _animationDisabled = D();
        _transitionsEnabled = !1;
        _allDrawers;
        _drawers = new L;
        _content;
        _userContent;
        get start() { return this._start; }
        get end() { return this._end; }
        get autosize() { return this._autosize; }
        set autosize(e) { this._autosize = l(e); }
        _autosize = a(se);
        get hasBackdrop() { return this._drawerHasBackdrop(this._start) || this._drawerHasBackdrop(this._end); }
        set hasBackdrop(e) { this._backdropOverride = e == null ? null : l(e); }
        _backdropOverride;
        backdropClick = new f;
        _start;
        _end;
        _left;
        _right;
        _destroyed = new c;
        _doCheckSubject = new c;
        _contentMargins = { left: null, right: null };
        _contentMarginChanges = new c;
        get scrollable() { return this._userContent || this._content; }
        _injector = a(R);
        constructor() { let e = a(v), r = a(G); this._dir?.change.pipe(d(this._destroyed)).subscribe(() => { this._validateDrawers(), this.updateContentMargins(); }), r.change().pipe(d(this._destroyed)).subscribe(() => this.updateContentMargins()), !this._animationDisabled && e.isBrowser && this._ngZone.runOutsideAngular(() => { setTimeout(() => { this._element.nativeElement.classList.add("mat-drawer-transition"), this._transitionsEnabled = !0; }, 200); }); }
        ngAfterContentInit() { this._allDrawers.changes.pipe(S(this._allDrawers), d(this._destroyed)).subscribe(e => { this._drawers.reset(e.filter(r => !r._container || r._container === this)), this._drawers.notifyOnChanges(); }), this._drawers.changes.pipe(S(null)).subscribe(() => { this._validateDrawers(), this._drawers.forEach(e => { this._watchDrawerToggle(e), this._watchDrawerPosition(e), this._watchDrawerMode(e); }), (!this._drawers.length || this._isDrawerOpen(this._start) || this._isDrawerOpen(this._end)) && this.updateContentMargins(), this._changeDetectorRef.markForCheck(); }), this._ngZone.runOutsideAngular(() => { this._doCheckSubject.pipe($(10), d(this._destroyed)).subscribe(() => this.updateContentMargins()); }); }
        ngOnDestroy() { this._contentMarginChanges.complete(), this._doCheckSubject.complete(), this._drawers.destroy(), this._destroyed.next(), this._destroyed.complete(); }
        open() { this._drawers.forEach(e => e.open()); }
        close() { this._drawers.forEach(e => e.close()); }
        updateContentMargins() { let e = 0, r = 0; if (this._left && this._left.opened) {
            if (this._left.mode == "side")
                e += this._left._getWidth();
            else if (this._left.mode == "push") {
                let i = this._left._getWidth();
                e += i, r -= i;
            }
        } if (this._right && this._right.opened) {
            if (this._right.mode == "side")
                r += this._right._getWidth();
            else if (this._right.mode == "push") {
                let i = this._right._getWidth();
                r += i, e -= i;
            }
        } e = e || null, r = r || null, (e !== this._contentMargins.left || r !== this._contentMargins.right) && (this._contentMargins = { left: e, right: r }, this._ngZone.run(() => this._contentMarginChanges.next(this._contentMargins))); }
        ngDoCheck() { this._autosize && this._isPushed() && this._ngZone.runOutsideAngular(() => this._doCheckSubject.next()); }
        _watchDrawerToggle(e) { e._animationStarted.pipe(d(this._drawers.changes)).subscribe(() => { this.updateContentMargins(), this._changeDetectorRef.markForCheck(); }), e.mode !== "side" && e.openedChange.pipe(d(this._drawers.changes)).subscribe(() => this._setContainerClass(e.opened)); }
        _watchDrawerPosition(e) { e.onPositionChanged.pipe(d(this._drawers.changes)).subscribe(() => { A({ read: () => this._validateDrawers() }, { injector: this._injector }); }); }
        _watchDrawerMode(e) { e._modeChanged.pipe(d(U(this._drawers.changes, this._destroyed))).subscribe(() => { this.updateContentMargins(), this._changeDetectorRef.markForCheck(); }); }
        _setContainerClass(e) { let r = this._element.nativeElement.classList, i = "mat-drawer-container-has-open"; e ? r.add(i) : r.remove(i); }
        _validateDrawers() { this._start = this._end = null, this._drawers.forEach(e => { e.position == "end" ? (this._end != null, this._end = e) : (this._start != null, this._start = e); }), this._right = this._left = null, this._dir && this._dir.value === "rtl" ? (this._left = this._end, this._right = this._start) : (this._left = this._start, this._right = this._end); }
        _isPushed() { return this._isDrawerOpen(this._start) && this._start.mode != "over" || this._isDrawerOpen(this._end) && this._end.mode != "over"; }
        _onBackdropClicked() { this.backdropClick.emit(), this._closeModalDrawersViaBackdrop(); }
        _closeModalDrawersViaBackdrop() { [this._start, this._end].filter(e => e && !e.disableClose && this._drawerHasBackdrop(e)).forEach(e => e._closeViaBackdropClick()); }
        _isShowingBackdrop() { return this._isDrawerOpen(this._start) && this._drawerHasBackdrop(this._start) || this._isDrawerOpen(this._end) && this._drawerHasBackdrop(this._end); }
        _isDrawerOpen(e) { return e != null && e.opened; }
        _drawerHasBackdrop(e) { return this._backdropOverride == null ? !!e && e.mode !== "side" : this._backdropOverride; }
        static \u0275fac = function (r) { return new (r || n); };
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: n, selectors: [["mat-drawer-container"]], contentQueries: function (r, i, o) { if (r & 1 && (t.\u0275\u0275contentQuery(o, p, 5), t.\u0275\u0275contentQuery(o, w, 5)), r & 2) {
                let s;
                t.\u0275\u0275queryRefresh(s = t.\u0275\u0275loadQuery()) && (i._content = s.first), t.\u0275\u0275queryRefresh(s = t.\u0275\u0275loadQuery()) && (i._allDrawers = s);
            } }, viewQuery: function (r, i) { if (r & 1 && t.\u0275\u0275viewQuery(p, 5), r & 2) {
                let o;
                t.\u0275\u0275queryRefresh(o = t.\u0275\u0275loadQuery()) && (i._userContent = o.first);
            } }, hostAttrs: [1, "mat-drawer-container"], hostVars: 2, hostBindings: function (r, i) { r & 2 && t.\u0275\u0275classProp("mat-drawer-container-explicit-backdrop", i._backdropOverride); }, inputs: { autosize: "autosize", hasBackdrop: "hasBackdrop" }, outputs: { backdropClick: "backdropClick" }, exportAs: ["matDrawerContainer"], features: [t.\u0275\u0275ProvidersFeature([{ provide: k, useExisting: n }])], ngContentSelectors: Y, decls: 4, vars: 2, consts: [[1, "mat-drawer-backdrop", 3, "mat-drawer-shown"], [1, "mat-drawer-backdrop", 3, "click"]], template: function (r, i) { r & 1 && (t.\u0275\u0275projectionDef(X), t.\u0275\u0275conditionalCreate(0, ee, 1, 2, "div", 0), t.\u0275\u0275projection(1), t.\u0275\u0275projection(2, 1), t.\u0275\u0275conditionalCreate(3, te, 2, 0, "mat-drawer-content")), r & 2 && (t.\u0275\u0275conditional(i.hasBackdrop ? 0 : -1), t.\u0275\u0275advance(3), t.\u0275\u0275conditional(i._content ? -1 : 3)); }, dependencies: [p], styles: [`.mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}
`], encapsulation: 2, changeDetection: 0 });
    }
    return n;
})(), B = (() => { class n extends p {
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = t.\u0275\u0275getInheritedFactory(n)))(i || n); }; })();
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: n, selectors: [["mat-sidenav-content"]], hostAttrs: [1, "mat-drawer-content", "mat-sidenav-content"], features: [t.\u0275\u0275ProvidersFeature([{ provide: m, useExisting: n }]), t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: u, decls: 1, vars: 0, template: function (r, i) { r & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
} return n; })(), de = (() => { class n extends w {
    get fixedInViewport() { return this._fixedInViewport; }
    set fixedInViewport(e) { this._fixedInViewport = l(e); }
    _fixedInViewport = !1;
    get fixedTopGap() { return this._fixedTopGap; }
    set fixedTopGap(e) { this._fixedTopGap = x(e); }
    _fixedTopGap = 0;
    get fixedBottomGap() { return this._fixedBottomGap; }
    set fixedBottomGap(e) { this._fixedBottomGap = x(e); }
    _fixedBottomGap = 0;
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = t.\u0275\u0275getInheritedFactory(n)))(i || n); }; })();
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: n, selectors: [["mat-sidenav"]], hostAttrs: [1, "mat-drawer", "mat-sidenav"], hostVars: 16, hostBindings: function (r, i) { r & 2 && (t.\u0275\u0275attribute("tabIndex", i.mode !== "side" ? "-1" : null)("align", null), t.\u0275\u0275styleProp("top", i.fixedInViewport ? i.fixedTopGap : null, "px")("bottom", i.fixedInViewport ? i.fixedBottomGap : null, "px"), t.\u0275\u0275classProp("mat-drawer-end", i.position === "end")("mat-drawer-over", i.mode === "over")("mat-drawer-push", i.mode === "push")("mat-drawer-side", i.mode === "side")("mat-sidenav-fixed", i.fixedInViewport)); }, inputs: { fixedInViewport: "fixedInViewport", fixedTopGap: "fixedTopGap", fixedBottomGap: "fixedBottomGap" }, exportAs: ["matSidenav"], features: [t.\u0275\u0275ProvidersFeature([{ provide: w, useExisting: n }]), t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: u, decls: 3, vars: 0, consts: [["content", ""], ["cdkScrollable", "", 1, "mat-drawer-inner-container"]], template: function (r, i) { r & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275elementStart(0, "div", 1, 0), t.\u0275\u0275projection(2), t.\u0275\u0275elementEnd()); }, dependencies: [m], encapsulation: 2, changeDetection: 0 });
} return n; })(), Be = (() => { class n extends g {
    _allDrawers = void 0;
    _content = void 0;
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = t.\u0275\u0275getInheritedFactory(n)))(i || n); }; })();
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: n, selectors: [["mat-sidenav-container"]], contentQueries: function (r, i, o) { if (r & 1 && (t.\u0275\u0275contentQuery(o, B, 5), t.\u0275\u0275contentQuery(o, de, 5)), r & 2) {
            let s;
            t.\u0275\u0275queryRefresh(s = t.\u0275\u0275loadQuery()) && (i._content = s.first), t.\u0275\u0275queryRefresh(s = t.\u0275\u0275loadQuery()) && (i._allDrawers = s);
        } }, hostAttrs: [1, "mat-drawer-container", "mat-sidenav-container"], hostVars: 2, hostBindings: function (r, i) { r & 2 && t.\u0275\u0275classProp("mat-drawer-container-explicit-backdrop", i._backdropOverride); }, exportAs: ["matSidenavContainer"], features: [t.\u0275\u0275ProvidersFeature([{ provide: k, useExisting: n }, { provide: g, useExisting: n }]), t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: ie, decls: 4, vars: 2, consts: [[1, "mat-drawer-backdrop", 3, "mat-drawer-shown"], [1, "mat-drawer-backdrop", 3, "click"]], template: function (r, i) { r & 1 && (t.\u0275\u0275projectionDef(re), t.\u0275\u0275conditionalCreate(0, ne, 1, 2, "div", 0), t.\u0275\u0275projection(1), t.\u0275\u0275projection(2, 1), t.\u0275\u0275conditionalCreate(3, ae, 2, 0, "mat-sidenav-content")), r & 2 && (t.\u0275\u0275conditional(i.hasBackdrop ? 0 : -1), t.\u0275\u0275advance(3), t.\u0275\u0275conditional(i._content ? -1 : 3)); }, dependencies: [B], styles: [oe], encapsulation: 2, changeDetection: 0 });
} return n; })(), Te = (() => { class n {
    static \u0275fac = function (r) { return new (r || n); };
    static \u0275mod = t.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = t.\u0275\u0275defineInjector({ imports: [M, z, M] });
} return n; })();
export { se as MAT_DRAWER_DEFAULT_AUTOSIZE, w as MatDrawer, g as MatDrawerContainer, p as MatDrawerContent, de as MatSidenav, Be as MatSidenavContainer, B as MatSidenavContent, Te as MatSidenavModule, Se as throwMatDuplicatedDrawerError };
