import { b as E, c as V, e as S, f as T } from "@nf-internal/chunk-6BLY3LJ7";
import { a as _, c as b } from "@nf-internal/chunk-JYXTBF5A";
import { b as z, d as w } from "@nf-internal/chunk-JHGJD5QO";
import { a as f, b as O, c as p } from "@nf-internal/chunk-OH3XPIE7";
import { a as g } from "@nf-internal/chunk-DQM2BKPX";
import * as o from "@angular/core";
import { InjectionToken as M, forwardRef as U, inject as s, NgZone as v, RendererFactory2 as I, ElementRef as x, Renderer2 as H, DOCUMENT as L, ChangeDetectorRef as G, signal as C, Injector as Z, effect as $, ApplicationRef as Y, DestroyRef as q, untracked as Q, afterNextRender as X, booleanAttribute as K, Optional as J, Inject as ee, ViewContainerRef as te, TemplateRef as ie, IterableDiffers as re } from "@angular/core";
import { Subject as u, of as P, Observable as A, Subscription as ne, animationFrameScheduler as oe, asapScheduler as se, isObservable as le } from "rxjs";
import { distinctUntilChanged as ae, auditTime as k, filter as ce, startWith as N, takeUntil as R, pairwise as de, switchMap as he, shareReplay as ue } from "rxjs/operators";
import "@angular/common";
var fe = ["contentWrapper"], pe = ["*"], W = new M("VIRTUAL_SCROLL_STRATEGY"), y = class {
    _scrolledIndexChange = new u;
    scrolledIndexChange = this._scrolledIndexChange.pipe(ae());
    _viewport = null;
    _itemSize;
    _minBufferPx;
    _maxBufferPx;
    constructor(c, e, t) { this._itemSize = c, this._minBufferPx = e, this._maxBufferPx = t; }
    attach(c) { this._viewport = c, this._updateTotalContentSize(), this._updateRenderedRange(); }
    detach() { this._scrolledIndexChange.complete(), this._viewport = null; }
    updateItemAndBufferSize(c, e, t) { t < e, this._itemSize = c, this._minBufferPx = e, this._maxBufferPx = t, this._updateTotalContentSize(), this._updateRenderedRange(); }
    onContentScrolled() { this._updateRenderedRange(); }
    onDataLengthChanged() { this._updateTotalContentSize(), this._updateRenderedRange(); }
    onContentRendered() { }
    onRenderedOffsetChanged() { }
    scrollToIndex(c, e) { this._viewport && this._viewport.scrollToOffset(c * this._itemSize, e); }
    _updateTotalContentSize() { this._viewport && this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize); }
    _updateRenderedRange() { if (!this._viewport)
        return; let c = this._viewport.getRenderedRange(), e = { start: c.start, end: c.end }, t = this._viewport.getViewportSize(), i = this._viewport.getDataLength(), n = this._viewport.measureScrollOffset(), l = this._itemSize > 0 ? n / this._itemSize : 0; if (e.end > i) {
        let a = Math.ceil(t / this._itemSize), d = Math.max(0, Math.min(l, i - a));
        l != d && (l = d, n = d * this._itemSize, e.start = Math.floor(l)), e.end = Math.max(0, Math.min(i, e.start + a));
    } let h = n - e.start * this._itemSize; if (h < this._minBufferPx && e.start != 0) {
        let a = Math.ceil((this._maxBufferPx - h) / this._itemSize);
        e.start = Math.max(0, e.start - a), e.end = Math.min(i, Math.ceil(l + (t + this._minBufferPx) / this._itemSize));
    }
    else {
        let a = e.end * this._itemSize - (n + t);
        if (a < this._minBufferPx && e.end != i) {
            let d = Math.ceil((this._maxBufferPx - a) / this._itemSize);
            d > 0 && (e.end = Math.min(i, e.end + d), e.start = Math.max(0, Math.floor(l - this._minBufferPx / this._itemSize)));
        }
    } this._viewport.setRenderedRange(e), this._viewport.setRenderedContentOffset(Math.round(this._itemSize * e.start)), this._scrolledIndexChange.next(Math.floor(l)); }
};
function _e(r) { return r._scrollStrategy; }
var He = (() => { class r {
    get itemSize() { return this._itemSize; }
    set itemSize(e) { this._itemSize = _(e); }
    _itemSize = 20;
    get minBufferPx() { return this._minBufferPx; }
    set minBufferPx(e) { this._minBufferPx = _(e); }
    _minBufferPx = 100;
    get maxBufferPx() { return this._maxBufferPx; }
    set maxBufferPx(e) { this._maxBufferPx = _(e); }
    _maxBufferPx = 200;
    _scrollStrategy = new y(this.itemSize, this.minBufferPx, this.maxBufferPx);
    ngOnChanges() { this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx); }
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: r, selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]], inputs: { itemSize: "itemSize", minBufferPx: "minBufferPx", maxBufferPx: "maxBufferPx" }, features: [o.\u0275\u0275ProvidersFeature([{ provide: W, useFactory: _e, deps: [U(() => r)] }]), o.\u0275\u0275NgOnChangesFeature] });
} return r; })(), ge = 20, me = (() => { class r {
    _ngZone = s(v);
    _platform = s(g);
    _renderer = s(I).createRenderer(null, null);
    _cleanupGlobalListener;
    constructor() { }
    _scrolled = new u;
    _scrolledCount = 0;
    scrollContainers = new Map;
    register(e) { this.scrollContainers.has(e) || this.scrollContainers.set(e, e.elementScrolled().subscribe(() => this._scrolled.next(e))); }
    deregister(e) { let t = this.scrollContainers.get(e); t && (t.unsubscribe(), this.scrollContainers.delete(e)); }
    scrolled(e = ge) { return this._platform.isBrowser ? new A(t => { this._cleanupGlobalListener || (this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen("document", "scroll", () => this._scrolled.next()))); let i = e > 0 ? this._scrolled.pipe(k(e)).subscribe(t) : this._scrolled.subscribe(t); return this._scrolledCount++, () => { i.unsubscribe(), this._scrolledCount--, this._scrolledCount || (this._cleanupGlobalListener?.(), this._cleanupGlobalListener = void 0); }; }) : P(); }
    ngOnDestroy() { this._cleanupGlobalListener?.(), this._cleanupGlobalListener = void 0, this.scrollContainers.forEach((e, t) => this.deregister(t)), this._scrolled.complete(); }
    ancestorScrolled(e, t) { let i = this.getAncestorScrollContainers(e); return this.scrolled(t).pipe(ce(n => !n || i.indexOf(n) > -1)); }
    getAncestorScrollContainers(e) { let t = []; return this.scrollContainers.forEach((i, n) => { this._scrollableContainsElement(n, e) && t.push(n); }), t; }
    _scrollableContainsElement(e, t) { let i = b(t), n = e.getElementRef().nativeElement; do
        if (i == n)
            return !0;
    while (i = i.parentElement); return !1; }
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" });
} return r; })(), j = (() => { class r {
    elementRef = s(x);
    scrollDispatcher = s(me);
    ngZone = s(v);
    dir = s(z, { optional: !0 });
    _scrollElement = this.elementRef.nativeElement;
    _destroyed = new u;
    _renderer = s(H);
    _cleanupScroll;
    _elementScrolled = new u;
    constructor() { }
    ngOnInit() { this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, "scroll", e => this._elementScrolled.next(e))), this.scrollDispatcher.register(this); }
    ngOnDestroy() { this._cleanupScroll?.(), this._elementScrolled.complete(), this.scrollDispatcher.deregister(this), this._destroyed.next(), this._destroyed.complete(); }
    elementScrolled() { return this._elementScrolled; }
    getElementRef() { return this.elementRef; }
    scrollTo(e) { let t = this.elementRef.nativeElement, i = this.dir && this.dir.value == "rtl"; e.left == null && (e.left = i ? e.end : e.start), e.right == null && (e.right = i ? e.start : e.end), e.bottom != null && (e.top = t.scrollHeight - t.clientHeight - e.bottom), i && p() != f.NORMAL ? (e.left != null && (e.right = t.scrollWidth - t.clientWidth - e.left), p() == f.INVERTED ? e.left = e.right : p() == f.NEGATED && (e.left = e.right ? -e.right : e.right)) : e.right != null && (e.left = t.scrollWidth - t.clientWidth - e.right), this._applyScrollToOptions(e); }
    _applyScrollToOptions(e) { let t = this.elementRef.nativeElement; O() ? t.scrollTo(e) : (e.top != null && (t.scrollTop = e.top), e.left != null && (t.scrollLeft = e.left)); }
    measureScrollOffset(e) { let t = "left", i = "right", n = this.elementRef.nativeElement; if (e == "top")
        return n.scrollTop; if (e == "bottom")
        return n.scrollHeight - n.clientHeight - n.scrollTop; let l = this.dir && this.dir.value == "rtl"; return e == "start" ? e = l ? i : t : e == "end" && (e = l ? t : i), l && p() == f.INVERTED ? e == t ? n.scrollWidth - n.clientWidth - n.scrollLeft : n.scrollLeft : l && p() == f.NEGATED ? e == t ? n.scrollLeft + n.scrollWidth - n.clientWidth : -n.scrollLeft : e == t ? n.scrollLeft : n.scrollWidth - n.clientWidth - n.scrollLeft; }
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: r, selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]] });
} return r; })(), ve = 20, we = (() => { class r {
    _platform = s(g);
    _listeners;
    _viewportSize;
    _change = new u;
    _document = s(L);
    constructor() { let e = s(v), t = s(I).createRenderer(null, null); e.runOutsideAngular(() => { if (this._platform.isBrowser) {
        let i = n => this._change.next(n);
        this._listeners = [t.listen("window", "resize", i), t.listen("window", "orientationchange", i)];
    } this.change().subscribe(() => this._viewportSize = null); }); }
    ngOnDestroy() { this._listeners?.forEach(e => e()), this._change.complete(); }
    getViewportSize() { this._viewportSize || this._updateViewportSize(); let e = { width: this._viewportSize.width, height: this._viewportSize.height }; return this._platform.isBrowser || (this._viewportSize = null), e; }
    getViewportRect() { let e = this.getViewportScrollPosition(), { width: t, height: i } = this.getViewportSize(); return { top: e.top, left: e.left, bottom: e.top + i, right: e.left + t, height: i, width: t }; }
    getViewportScrollPosition() { if (!this._platform.isBrowser)
        return { top: 0, left: 0 }; let e = this._document, t = this._getWindow(), i = e.documentElement, n = i.getBoundingClientRect(), l = -n.top || e.body.scrollTop || t.scrollY || i.scrollTop || 0, h = -n.left || e.body.scrollLeft || t.scrollX || i.scrollLeft || 0; return { top: l, left: h }; }
    change(e = ve) { return e > 0 ? this._change.pipe(k(e)) : this._change; }
    _getWindow() { return this._document.defaultView || window; }
    _updateViewportSize() { let e = this._getWindow(); this._viewportSize = this._platform.isBrowser ? { width: e.innerWidth, height: e.innerHeight } : { width: 0, height: 0 }; }
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" });
} return r; })(), m = new M("VIRTUAL_SCROLLABLE"), D = (() => { class r extends j {
    constructor() { super(); }
    measureViewportSize(e) { let t = this.elementRef.nativeElement; return e === "horizontal" ? t.clientWidth : t.clientHeight; }
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: r, features: [o.\u0275\u0275InheritDefinitionFeature] });
} return r; })();
function Se(r, c) { return r.start == c.start && r.end == c.end; }
var Ce = typeof requestAnimationFrame < "u" ? oe : se, Re = (() => {
    class r extends D {
        elementRef = s(x);
        _changeDetectorRef = s(G);
        _scrollStrategy = s(W, { optional: !0 });
        scrollable = s(m, { optional: !0 });
        _platform = s(g);
        _detachedSubject = new u;
        _renderedRangeSubject = new u;
        get orientation() { return this._orientation; }
        set orientation(e) { this._orientation !== e && (this._orientation = e, this._calculateSpacerSize()); }
        _orientation = "vertical";
        appendOnly = !1;
        scrolledIndexChange = new A(e => this._scrollStrategy.scrolledIndexChange.subscribe(t => Promise.resolve().then(() => this.ngZone.run(() => e.next(t)))));
        _contentWrapper;
        renderedRangeStream = this._renderedRangeSubject;
        _totalContentSize = 0;
        _totalContentWidth = C("");
        _totalContentHeight = C("");
        _renderedContentTransform;
        _renderedRange = { start: 0, end: 0 };
        _dataLength = 0;
        _viewportSize = 0;
        _forOf;
        _renderedContentOffset = 0;
        _renderedContentOffsetNeedsRewrite = !1;
        _changeDetectionNeeded = C(!1);
        _runAfterChangeDetection = [];
        _viewportChanges = ne.EMPTY;
        _injector = s(Z);
        _isDestroyed = !1;
        constructor() { super(); let e = s(we); this._scrollStrategy, this._viewportChanges = e.change().subscribe(() => { this.checkViewportSize(); }), this.scrollable || (this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"), this.scrollable = this); let t = $(() => { this._changeDetectionNeeded() && this._doChangeDetection(); }, { injector: s(Y).injector }); s(q).onDestroy(() => void t.destroy()); }
        ngOnInit() { this._platform.isBrowser && (this.scrollable === this && super.ngOnInit(), this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => { this._measureViewportSize(), this._scrollStrategy.attach(this), this.scrollable.elementScrolled().pipe(N(null), k(0, Ce), R(this._destroyed)).subscribe(() => this._scrollStrategy.onContentScrolled()), this._markChangeDetectionNeeded(); }))); }
        ngOnDestroy() { this.detach(), this._scrollStrategy.detach(), this._renderedRangeSubject.complete(), this._detachedSubject.complete(), this._viewportChanges.unsubscribe(), this._isDestroyed = !0, super.ngOnDestroy(); }
        attach(e) { this._forOf, this.ngZone.runOutsideAngular(() => { this._forOf = e, this._forOf.dataStream.pipe(R(this._detachedSubject)).subscribe(t => { let i = t.length; i !== this._dataLength && (this._dataLength = i, this._scrollStrategy.onDataLengthChanged()), this._doChangeDetection(); }); }); }
        detach() { this._forOf = null, this._detachedSubject.next(); }
        getDataLength() { return this._dataLength; }
        getViewportSize() { return this._viewportSize; }
        getRenderedRange() { return this._renderedRange; }
        measureBoundingClientRectWithScrollOffset(e) { return this.getElementRef().nativeElement.getBoundingClientRect()[e]; }
        setTotalContentSize(e) { this._totalContentSize !== e && (this._totalContentSize = e, this._calculateSpacerSize(), this._markChangeDetectionNeeded()); }
        setRenderedRange(e) { Se(this._renderedRange, e) || (this.appendOnly && (e = { start: 0, end: Math.max(this._renderedRange.end, e.end) }), this._renderedRangeSubject.next(this._renderedRange = e), this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered())); }
        getOffsetToRenderedContentStart() { return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset; }
        setRenderedContentOffset(e, t = "to-start") { e = this.appendOnly && t === "to-start" ? 0 : e; let i = this.dir && this.dir.value == "rtl", n = this.orientation == "horizontal", l = n ? "X" : "Y", a = `translate${l}(${Number((n && i ? -1 : 1) * e)}px)`; this._renderedContentOffset = e, t === "to-end" && (a += ` translate${l}(-100%)`, this._renderedContentOffsetNeedsRewrite = !0), this._renderedContentTransform != a && (this._renderedContentTransform = a, this._markChangeDetectionNeeded(() => { this._renderedContentOffsetNeedsRewrite ? (this._renderedContentOffset -= this.measureRenderedContentSize(), this._renderedContentOffsetNeedsRewrite = !1, this.setRenderedContentOffset(this._renderedContentOffset)) : this._scrollStrategy.onRenderedOffsetChanged(); })); }
        scrollToOffset(e, t = "auto") { let i = { behavior: t }; this.orientation === "horizontal" ? i.start = e : i.top = e, this.scrollable.scrollTo(i); }
        scrollToIndex(e, t = "auto") { this._scrollStrategy.scrollToIndex(e, t); }
        measureScrollOffset(e) { let t; return this.scrollable == this ? t = i => super.measureScrollOffset(i) : t = i => this.scrollable.measureScrollOffset(i), Math.max(0, t(e ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset()); }
        measureViewportOffset(e) { let t, i = "left", n = "right", l = this.dir?.value == "rtl"; e == "start" ? t = l ? n : i : e == "end" ? t = l ? i : n : e ? t = e : t = this.orientation === "horizontal" ? "left" : "top"; let h = this.scrollable.measureBoundingClientRectWithScrollOffset(t); return this.elementRef.nativeElement.getBoundingClientRect()[t] - h; }
        measureRenderedContentSize() { let e = this._contentWrapper.nativeElement; return this.orientation === "horizontal" ? e.offsetWidth : e.offsetHeight; }
        measureRangeSize(e) { return this._forOf ? this._forOf.measureRangeSize(e, this.orientation) : 0; }
        checkViewportSize() { this._measureViewportSize(), this._scrollStrategy.onDataLengthChanged(); }
        _measureViewportSize() { this._viewportSize = this.scrollable.measureViewportSize(this.orientation); }
        _markChangeDetectionNeeded(e) { e && this._runAfterChangeDetection.push(e), !Q(this._changeDetectionNeeded) && this.ngZone.runOutsideAngular(() => { Promise.resolve().then(() => { this.ngZone.run(() => { this._changeDetectionNeeded.set(!0); }); }); }); }
        _doChangeDetection() { this._isDestroyed || this.ngZone.run(() => { this._changeDetectorRef.markForCheck(), this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform, X(() => { this._changeDetectionNeeded.set(!1); let e = this._runAfterChangeDetection; this._runAfterChangeDetection = []; for (let t of e)
            t(); }, { injector: this._injector }); }); }
        _calculateSpacerSize() { this._totalContentHeight.set(this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`), this._totalContentWidth.set(this.orientation === "horizontal" ? `${this._totalContentSize}px` : ""); }
        static \u0275fac = function (t) { return new (t || r); };
        static \u0275cmp = o.\u0275\u0275defineComponent({ type: r, selectors: [["cdk-virtual-scroll-viewport"]], viewQuery: function (t, i) { if (t & 1 && o.\u0275\u0275viewQuery(fe, 7), t & 2) {
                let n;
                o.\u0275\u0275queryRefresh(n = o.\u0275\u0275loadQuery()) && (i._contentWrapper = n.first);
            } }, hostAttrs: [1, "cdk-virtual-scroll-viewport"], hostVars: 4, hostBindings: function (t, i) { t & 2 && o.\u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal", i.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", i.orientation !== "horizontal"); }, inputs: { orientation: "orientation", appendOnly: [2, "appendOnly", "appendOnly", K] }, outputs: { scrolledIndexChange: "scrolledIndexChange" }, features: [o.\u0275\u0275ProvidersFeature([{ provide: j, useFactory: (e, t) => e || t, deps: [[new J, new ee(m)], r] }]), o.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: pe, decls: 4, vars: 4, consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]], template: function (t, i) { t & 1 && (o.\u0275\u0275projectionDef(), o.\u0275\u0275domElementStart(0, "div", 1, 0), o.\u0275\u0275projection(2), o.\u0275\u0275domElementEnd(), o.\u0275\u0275domElement(3, "div", 2)), t & 2 && (o.\u0275\u0275advance(3), o.\u0275\u0275styleProp("width", i._totalContentWidth())("height", i._totalContentHeight())); }, styles: [`cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}
`], encapsulation: 2, changeDetection: 0 });
    }
    return r;
})();
function F(r, c, e) { let t = e; if (!t.getBoundingClientRect)
    return 0; let i = t.getBoundingClientRect(); return r === "horizontal" ? c === "start" ? i.left : i.right : c === "start" ? i.top : i.bottom; }
var Ge = (() => { class r {
    _viewContainerRef = s(te);
    _template = s(ie);
    _differs = s(re);
    _viewRepeater = s(S);
    _viewport = s(Re, { skipSelf: !0 });
    viewChange = new u;
    _dataSourceChanges = new u;
    get cdkVirtualForOf() { return this._cdkVirtualForOf; }
    set cdkVirtualForOf(e) { this._cdkVirtualForOf = e, E(e) ? this._dataSourceChanges.next(e) : this._dataSourceChanges.next(new V(le(e) ? e : Array.from(e || []))); }
    _cdkVirtualForOf;
    get cdkVirtualForTrackBy() { return this._cdkVirtualForTrackBy; }
    set cdkVirtualForTrackBy(e) { this._needsUpdate = !0, this._cdkVirtualForTrackBy = e ? (t, i) => e(t + (this._renderedRange ? this._renderedRange.start : 0), i) : void 0; }
    _cdkVirtualForTrackBy;
    set cdkVirtualForTemplate(e) { e && (this._needsUpdate = !0, this._template = e); }
    get cdkVirtualForTemplateCacheSize() { return this._viewRepeater.viewCacheSize; }
    set cdkVirtualForTemplateCacheSize(e) { this._viewRepeater.viewCacheSize = _(e); }
    dataStream = this._dataSourceChanges.pipe(N(null), de(), he(([e, t]) => this._changeDataSource(e, t)), ue(1));
    _differ = null;
    _data;
    _renderedItems;
    _renderedRange;
    _needsUpdate = !1;
    _destroyed = new u;
    constructor() { let e = s(v); this.dataStream.subscribe(t => { this._data = t, this._onRenderedDataChange(); }), this._viewport.renderedRangeStream.pipe(R(this._destroyed)).subscribe(t => { this._renderedRange = t, this.viewChange.observers.length && e.run(() => this.viewChange.next(this._renderedRange)), this._onRenderedDataChange(); }), this._viewport.attach(this); }
    measureRangeSize(e, t) { if (e.start >= e.end)
        return 0; e.start < this._renderedRange.start || e.end > this._renderedRange.end; let i = e.start - this._renderedRange.start, n = e.end - e.start, l, h; for (let a = 0; a < n; a++) {
        let d = this._viewContainerRef.get(a + i);
        if (d && d.rootNodes.length) {
            l = h = d.rootNodes[0];
            break;
        }
    } for (let a = n - 1; a > -1; a--) {
        let d = this._viewContainerRef.get(a + i);
        if (d && d.rootNodes.length) {
            h = d.rootNodes[d.rootNodes.length - 1];
            break;
        }
    } return l && h ? F(t, "end", h) - F(t, "start", l) : 0; }
    ngDoCheck() { if (this._differ && this._needsUpdate) {
        let e = this._differ.diff(this._renderedItems);
        e ? this._applyChanges(e) : this._updateContext(), this._needsUpdate = !1;
    } }
    ngOnDestroy() { this._viewport.detach(), this._dataSourceChanges.next(void 0), this._dataSourceChanges.complete(), this.viewChange.complete(), this._destroyed.next(), this._destroyed.complete(), this._viewRepeater.detach(); }
    _onRenderedDataChange() { this._renderedRange && (this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end), this._differ || (this._differ = this._differs.find(this._renderedItems).create((e, t) => this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(e, t) : t)), this._needsUpdate = !0); }
    _changeDataSource(e, t) { return e && e.disconnect(this), this._needsUpdate = !0, t ? t.connect(this) : P(); }
    _updateContext() { let e = this._data.length, t = this._viewContainerRef.length; for (; t--;) {
        let i = this._viewContainerRef.get(t);
        i.context.index = this._renderedRange.start + t, i.context.count = e, this._updateComputedContextProperties(i.context), i.detectChanges();
    } }
    _applyChanges(e) { this._viewRepeater.applyChanges(e, this._viewContainerRef, (n, l, h) => this._getEmbeddedViewArgs(n, h), n => n.item), e.forEachIdentityChange(n => { let l = this._viewContainerRef.get(n.currentIndex); l.context.$implicit = n.item; }); let t = this._data.length, i = this._viewContainerRef.length; for (; i--;) {
        let n = this._viewContainerRef.get(i);
        n.context.index = this._renderedRange.start + i, n.context.count = t, this._updateComputedContextProperties(n.context);
    } }
    _updateComputedContextProperties(e) { e.first = e.index === 0, e.last = e.index === e.count - 1, e.even = e.index % 2 === 0, e.odd = !e.even; }
    _getEmbeddedViewArgs(e, t) { return { templateRef: this._template, context: { $implicit: e.item, cdkVirtualForOf: this._cdkVirtualForOf, index: -1, count: -1, first: !1, last: !1, odd: !1, even: !1 }, index: t }; }
    static ngTemplateContextGuard(e, t) { return !0; }
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: r, selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]], inputs: { cdkVirtualForOf: "cdkVirtualForOf", cdkVirtualForTrackBy: "cdkVirtualForTrackBy", cdkVirtualForTemplate: "cdkVirtualForTemplate", cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize" }, features: [o.\u0275\u0275ProvidersFeature([{ provide: S, useClass: T }])] });
} return r; })(), Ze = (() => { class r extends D {
    constructor() { super(); }
    measureBoundingClientRectWithScrollOffset(e) { return this.getElementRef().nativeElement.getBoundingClientRect()[e] - this.measureScrollOffset(e); }
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: r, selectors: [["", "cdkVirtualScrollingElement", ""]], hostAttrs: [1, "cdk-virtual-scrollable"], features: [o.\u0275\u0275ProvidersFeature([{ provide: m, useExisting: r }]), o.\u0275\u0275InheritDefinitionFeature] });
} return r; })(), $e = (() => { class r extends D {
    constructor() { super(); let e = s(L); this.elementRef = new x(e.documentElement), this._scrollElement = e; }
    measureBoundingClientRectWithScrollOffset(e) { return this.getElementRef().nativeElement.getBoundingClientRect()[e]; }
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: r, selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]], features: [o.\u0275\u0275ProvidersFeature([{ provide: m, useExisting: r }]), o.\u0275\u0275InheritDefinitionFeature] });
} return r; })(), B = (() => { class r {
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275mod = o.\u0275\u0275defineNgModule({ type: r });
    static \u0275inj = o.\u0275\u0275defineInjector({});
} return r; })(), Ye = (() => { class r {
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275mod = o.\u0275\u0275defineNgModule({ type: r });
    static \u0275inj = o.\u0275\u0275defineInjector({ imports: [w, B, w, B] });
} return r; })();
export { W as a, y as b, _e as c, He as d, ge as e, me as f, j as g, ve as h, we as i, m as j, D as k, Re as l, Ge as m, Ze as n, $e as o, B as p, Ye as q };
