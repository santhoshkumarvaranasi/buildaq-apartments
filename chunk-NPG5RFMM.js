import * as r from "@angular/core";
import { ElementRef as D, NgModuleRef as m, EnvironmentInjector as _, createComponent as P, Injector as R, inject as a, TemplateRef as g, ViewContainerRef as v, DOCUMENT as E, EventEmitter as C } from "@angular/core";
var s = class {
    _attachedHost;
    attach(e) { return this._attachedHost = e, e.attach(this); }
    detach() { let e = this._attachedHost; e != null && (this._attachedHost = null, e.detach()); }
    get isAttached() { return this._attachedHost != null; }
    setAttachedHost(e) { this._attachedHost = e; }
}, h = class extends s {
    component;
    viewContainerRef;
    injector;
    projectableNodes;
    constructor(e, t, o, i) { super(), this.component = e, this.viewContainerRef = t, this.injector = o, this.projectableNodes = i; }
}, d = class extends s {
    templateRef;
    viewContainerRef;
    context;
    injector;
    constructor(e, t, o, i) { super(), this.templateRef = e, this.viewContainerRef = t, this.context = o, this.injector = i; }
    get origin() { return this.templateRef.elementRef; }
    attach(e, t = this.context) { return this.context = t, super.attach(e); }
    detach() { return this.context = void 0, super.detach(); }
}, l = class extends s {
    element;
    constructor(e) { super(), this.element = e instanceof D ? e.nativeElement : e; }
}, c = class {
    _attachedPortal;
    _disposeFn;
    _isDisposed = !1;
    hasAttached() { return !!this._attachedPortal; }
    attach(e) { if (e instanceof h)
        return this._attachedPortal = e, this.attachComponentPortal(e); if (e instanceof d)
        return this._attachedPortal = e, this.attachTemplatePortal(e); if (this.attachDomPortal && e instanceof l)
        return this._attachedPortal = e, this.attachDomPortal(e); }
    attachDomPortal = null;
    detach() { this._attachedPortal && (this._attachedPortal.setAttachedHost(null), this._attachedPortal = null), this._invokeDisposeFn(); }
    dispose() { this.hasAttached() && this.detach(), this._invokeDisposeFn(), this._isDisposed = !0; }
    setDisposeFn(e) { this._disposeFn = e; }
    _invokeDisposeFn() { this._disposeFn && (this._disposeFn(), this._disposeFn = null); }
}, u = class extends c {
    outletElement;
    _appRef;
    _defaultInjector;
    constructor(e, t, o) { super(), this.outletElement = e, this._appRef = t, this._defaultInjector = o; }
    attachComponentPortal(e) { let t; if (e.viewContainerRef) {
        let o = e.injector || e.viewContainerRef.injector, i = o.get(m, null, { optional: !0 }) || void 0;
        t = e.viewContainerRef.createComponent(e.component, { index: e.viewContainerRef.length, injector: o, ngModuleRef: i, projectableNodes: e.projectableNodes || void 0 }), this.setDisposeFn(() => t.destroy());
    }
    else {
        let o = this._appRef, i = e.injector || this._defaultInjector || R.NULL, w = i.get(_, o.injector);
        t = P(e.component, { elementInjector: i, environmentInjector: w, projectableNodes: e.projectableNodes || void 0 }), o.attachView(t.hostView), this.setDisposeFn(() => { o.viewCount > 0 && o.detachView(t.hostView), t.destroy(); });
    } return this.outletElement.appendChild(this._getComponentRootNode(t)), this._attachedPortal = e, t; }
    attachTemplatePortal(e) { let t = e.viewContainerRef, o = t.createEmbeddedView(e.templateRef, e.context, { injector: e.injector }); return o.rootNodes.forEach(i => this.outletElement.appendChild(i)), o.detectChanges(), this.setDisposeFn(() => { let i = t.indexOf(o); i !== -1 && t.remove(i); }), this._attachedPortal = e, o; }
    attachDomPortal = e => { let t = e.element; t.parentNode; let o = this.outletElement.ownerDocument.createComment("dom-portal"); t.parentNode.insertBefore(o, t), this.outletElement.appendChild(t), this._attachedPortal = e, super.setDisposeFn(() => { o.parentNode && o.parentNode.replaceChild(t, o); }); };
    dispose() { super.dispose(), this.outletElement.remove(); }
    _getComponentRootNode(e) { return e.hostView.rootNodes[0]; }
}, f = (() => { class n extends d {
    constructor() { let t = a(g), o = a(v); super(t, o); }
    static \u0275fac = function (o) { return new (o || n); };
    static \u0275dir = r.\u0275\u0275defineDirective({ type: n, selectors: [["", "cdkPortal", ""]], exportAs: ["cdkPortal"], features: [r.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), A = (() => { class n extends f {
    static \u0275fac = (() => { let t; return function (i) { return (t || (t = r.\u0275\u0275getInheritedFactory(n)))(i || n); }; })();
    static \u0275dir = r.\u0275\u0275defineDirective({ type: n, selectors: [["", "cdk-portal", ""], ["", "portal", ""]], exportAs: ["cdkPortal"], features: [r.\u0275\u0275ProvidersFeature([{ provide: f, useExisting: n }]), r.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), p = (() => { class n extends c {
    _moduleRef = a(m, { optional: !0 });
    _document = a(E);
    _viewContainerRef = a(v);
    _isInitialized = !1;
    _attachedRef;
    constructor() { super(); }
    get portal() { return this._attachedPortal; }
    set portal(t) { this.hasAttached() && !t && !this._isInitialized || (this.hasAttached() && super.detach(), t && super.attach(t), this._attachedPortal = t || null); }
    attached = new C;
    get attachedRef() { return this._attachedRef; }
    ngOnInit() { this._isInitialized = !0; }
    ngOnDestroy() { super.dispose(), this._attachedRef = this._attachedPortal = null; }
    attachComponentPortal(t) { t.setAttachedHost(this); let o = t.viewContainerRef != null ? t.viewContainerRef : this._viewContainerRef, i = o.createComponent(t.component, { index: o.length, injector: t.injector || o.injector, projectableNodes: t.projectableNodes || void 0, ngModuleRef: this._moduleRef || void 0 }); return o !== this._viewContainerRef && this._getRootNode().appendChild(i.hostView.rootNodes[0]), super.setDisposeFn(() => i.destroy()), this._attachedPortal = t, this._attachedRef = i, this.attached.emit(i), i; }
    attachTemplatePortal(t) { t.setAttachedHost(this); let o = this._viewContainerRef.createEmbeddedView(t.templateRef, t.context, { injector: t.injector }); return super.setDisposeFn(() => this._viewContainerRef.clear()), this._attachedPortal = t, this._attachedRef = o, this.attached.emit(o), o; }
    attachDomPortal = t => { let o = t.element; o.parentNode; let i = this._document.createComment("dom-portal"); t.setAttachedHost(this), o.parentNode.insertBefore(i, o), this._getRootNode().appendChild(o), this._attachedPortal = t, super.setDisposeFn(() => { i.parentNode && i.parentNode.replaceChild(o, i); }); };
    _getRootNode() { let t = this._viewContainerRef.element.nativeElement; return t.nodeType === t.ELEMENT_NODE ? t : t.parentNode; }
    static \u0275fac = function (o) { return new (o || n); };
    static \u0275dir = r.\u0275\u0275defineDirective({ type: n, selectors: [["", "cdkPortalOutlet", ""]], inputs: { portal: [0, "cdkPortalOutlet", "portal"] }, outputs: { attached: "attached" }, exportAs: ["cdkPortalOutlet"], features: [r.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), x = (() => { class n extends p {
    static \u0275fac = (() => { let t; return function (i) { return (t || (t = r.\u0275\u0275getInheritedFactory(n)))(i || n); }; })();
    static \u0275dir = r.\u0275\u0275defineDirective({ type: n, selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]], inputs: { portal: [0, "cdkPortalHost", "portal"] }, exportAs: ["cdkPortalHost"], features: [r.\u0275\u0275ProvidersFeature([{ provide: p, useExisting: n }]), r.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), I = (() => { class n {
    static \u0275fac = function (o) { return new (o || n); };
    static \u0275mod = r.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = r.\u0275\u0275defineInjector({});
} return n; })();
export { s as a, h as b, d as c, l as d, c as e, u as f, f as g, A as h, p as i, x as j, I as k };
