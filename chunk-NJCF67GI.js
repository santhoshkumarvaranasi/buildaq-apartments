import * as a from "@angular/core";
import { ElementRef as w, NgModuleRef as u, EnvironmentInjector as _, createComponent as v, Injector as R, inject as r, TemplateRef as D, ViewContainerRef as p, DOCUMENT as P, EventEmitter as g } from "@angular/core";
var s = class {
    _attachedHost;
    attach(e) { return this._attachedHost = e, e.attach(this); }
    detach() { let e = this._attachedHost; e != null && (this._attachedHost = null, e.detach()); }
    get isAttached() { return this._attachedHost != null; }
    setAttachedHost(e) { this._attachedHost = e; }
}, c = class extends s {
    component;
    viewContainerRef;
    injector;
    projectableNodes;
    constructor(e, t, o, n) { super(), this.component = e, this.viewContainerRef = t, this.injector = o, this.projectableNodes = n; }
}, d = class extends s {
    templateRef;
    viewContainerRef;
    context;
    injector;
    constructor(e, t, o, n) { super(), this.templateRef = e, this.viewContainerRef = t, this.context = o, this.injector = n; }
    get origin() { return this.templateRef.elementRef; }
    attach(e, t = this.context) { return this.context = t, super.attach(e); }
    detach() { return this.context = void 0, super.detach(); }
}, l = class extends s {
    element;
    constructor(e) { super(), this.element = e instanceof w ? e.nativeElement : e; }
}, h = class {
    _attachedPortal;
    _disposeFn;
    _isDisposed = !1;
    hasAttached() { return !!this._attachedPortal; }
    attach(e) { if (e instanceof c)
        return this._attachedPortal = e, this.attachComponentPortal(e); if (e instanceof d)
        return this._attachedPortal = e, this.attachTemplatePortal(e); if (this.attachDomPortal && e instanceof l)
        return this._attachedPortal = e, this.attachDomPortal(e); }
    attachDomPortal = null;
    detach() { this._attachedPortal && (this._attachedPortal.setAttachedHost(null), this._attachedPortal = null), this._invokeDisposeFn(); }
    dispose() { this.hasAttached() && this.detach(), this._invokeDisposeFn(), this._isDisposed = !0; }
    setDisposeFn(e) { this._disposeFn = e; }
    _invokeDisposeFn() { this._disposeFn && (this._disposeFn(), this._disposeFn = null); }
}, f = class extends h {
    outletElement;
    _appRef;
    _defaultInjector;
    constructor(e, t, o) { super(), this.outletElement = e, this._appRef = t, this._defaultInjector = o; }
    attachComponentPortal(e) { let t; if (e.viewContainerRef) {
        let o = e.injector || e.viewContainerRef.injector, n = o.get(u, null, { optional: !0 }) || void 0;
        t = e.viewContainerRef.createComponent(e.component, { index: e.viewContainerRef.length, injector: o, ngModuleRef: n, projectableNodes: e.projectableNodes || void 0 }), this.setDisposeFn(() => t.destroy());
    }
    else {
        let o = this._appRef, n = e.injector || this._defaultInjector || R.NULL, m = n.get(_, o.injector);
        t = v(e.component, { elementInjector: n, environmentInjector: m, projectableNodes: e.projectableNodes || void 0 }), o.attachView(t.hostView), this.setDisposeFn(() => { o.viewCount > 0 && o.detachView(t.hostView), t.destroy(); });
    } return this.outletElement.appendChild(this._getComponentRootNode(t)), this._attachedPortal = e, t; }
    attachTemplatePortal(e) { let t = e.viewContainerRef, o = t.createEmbeddedView(e.templateRef, e.context, { injector: e.injector }); return o.rootNodes.forEach(n => this.outletElement.appendChild(n)), o.detectChanges(), this.setDisposeFn(() => { let n = t.indexOf(o); n !== -1 && t.remove(n); }), this._attachedPortal = e, o; }
    attachDomPortal = e => { let t = e.element; t.parentNode; let o = this.outletElement.ownerDocument.createComment("dom-portal"); t.parentNode.insertBefore(o, t), this.outletElement.appendChild(t), this._attachedPortal = e, super.setDisposeFn(() => { o.parentNode && o.parentNode.replaceChild(t, o); }); };
    dispose() { super.dispose(), this.outletElement.remove(); }
    _getComponentRootNode(e) { return e.hostView.rootNodes[0]; }
}, M = (() => { class i extends d {
    constructor() { let t = r(D), o = r(p); super(t, o); }
    static \u0275fac = function (o) { return new (o || i); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: i, selectors: [["", "cdkPortal", ""]], exportAs: ["cdkPortal"], features: [a.\u0275\u0275InheritDefinitionFeature] });
} return i; })(), A = (() => { class i extends h {
    _moduleRef = r(u, { optional: !0 });
    _document = r(P);
    _viewContainerRef = r(p);
    _isInitialized = !1;
    _attachedRef;
    constructor() { super(); }
    get portal() { return this._attachedPortal; }
    set portal(t) { this.hasAttached() && !t && !this._isInitialized || (this.hasAttached() && super.detach(), t && super.attach(t), this._attachedPortal = t || null); }
    attached = new g;
    get attachedRef() { return this._attachedRef; }
    ngOnInit() { this._isInitialized = !0; }
    ngOnDestroy() { super.dispose(), this._attachedRef = this._attachedPortal = null; }
    attachComponentPortal(t) { t.setAttachedHost(this); let o = t.viewContainerRef != null ? t.viewContainerRef : this._viewContainerRef, n = o.createComponent(t.component, { index: o.length, injector: t.injector || o.injector, projectableNodes: t.projectableNodes || void 0, ngModuleRef: this._moduleRef || void 0 }); return o !== this._viewContainerRef && this._getRootNode().appendChild(n.hostView.rootNodes[0]), super.setDisposeFn(() => n.destroy()), this._attachedPortal = t, this._attachedRef = n, this.attached.emit(n), n; }
    attachTemplatePortal(t) { t.setAttachedHost(this); let o = this._viewContainerRef.createEmbeddedView(t.templateRef, t.context, { injector: t.injector }); return super.setDisposeFn(() => this._viewContainerRef.clear()), this._attachedPortal = t, this._attachedRef = o, this.attached.emit(o), o; }
    attachDomPortal = t => { let o = t.element; o.parentNode; let n = this._document.createComment("dom-portal"); t.setAttachedHost(this), o.parentNode.insertBefore(n, o), this._getRootNode().appendChild(o), this._attachedPortal = t, super.setDisposeFn(() => { n.parentNode && n.parentNode.replaceChild(o, n); }); };
    _getRootNode() { let t = this._viewContainerRef.element.nativeElement; return t.nodeType === t.ELEMENT_NODE ? t : t.parentNode; }
    static \u0275fac = function (o) { return new (o || i); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: i, selectors: [["", "cdkPortalOutlet", ""]], inputs: { portal: [0, "cdkPortalOutlet", "portal"] }, outputs: { attached: "attached" }, exportAs: ["cdkPortalOutlet"], features: [a.\u0275\u0275InheritDefinitionFeature] });
} return i; })(), F = (() => { class i {
    static \u0275fac = function (o) { return new (o || i); };
    static \u0275mod = a.\u0275\u0275defineNgModule({ type: i });
    static \u0275inj = a.\u0275\u0275defineInjector({});
} return i; })();
export { s as a, c as b, d as c, l as d, h as e, f, M as g, A as h, F as i };
