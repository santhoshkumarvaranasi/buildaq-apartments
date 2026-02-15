import { a as K, b as j } from "@nf-internal/chunk-HP7X34UI";
import { a as F } from "@nf-internal/chunk-G6LXKUAW";
import { d as A } from "@nf-internal/chunk-ON5JNFS5";
import { a as V } from "@nf-internal/chunk-4MZRILT7";
import { a as N, b as B } from "@nf-internal/chunk-3NHTYYND";
import { a as W } from "@nf-internal/chunk-HEQZYXO4";
import { i as P, m as L } from "@nf-internal/chunk-PMOWQU6U";
import { b as T } from "@nf-internal/chunk-BMKAYT4V";
import { a as z } from "@nf-internal/chunk-7ZTCWLLR";
import { a as g } from "@nf-internal/chunk-2H5YBILG";
import { a as E } from "@nf-internal/chunk-X7SFHLJ5";
import { a as u } from "@nf-internal/chunk-NCEIK542";
import { a as R } from "@nf-internal/chunk-7N7HFQKY";
import { _IdGenerator as H } from "@angular/cdk/a11y";
import * as n from "@angular/core";
import { InjectionToken as G, inject as m, booleanAttribute as q, ElementRef as ce, ChangeDetectorRef as de, signal as me, EventEmitter as pe, isSignal as he } from "@angular/core";
import { Subject as ue } from "rxjs";
var ge = ["*", [["mat-option"], ["ng-container"]]], _e = ["*", "mat-option, ng-container"], fe = ["text"], ye = [[["mat-icon"]], "*"], be = ["mat-icon", "*"];
function ve(o, s) { if (o & 1 && n.\u0275\u0275element(0, "mat-pseudo-checkbox", 1), o & 2) {
    let e = n.\u0275\u0275nextContext();
    n.\u0275\u0275property("disabled", e.disabled)("state", e.selected ? "checked" : "unchecked");
} }
function Ce(o, s) { if (o & 1 && n.\u0275\u0275element(0, "mat-pseudo-checkbox", 3), o & 2) {
    let e = n.\u0275\u0275nextContext();
    n.\u0275\u0275property("disabled", e.disabled);
} }
function ke(o, s) { if (o & 1 && (n.\u0275\u0275elementStart(0, "span", 4), n.\u0275\u0275text(1), n.\u0275\u0275elementEnd()), o & 2) {
    let e = n.\u0275\u0275nextContext();
    n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate1("(", e.group.label, ")");
} }
var b = new G("MAT_OPTION_PARENT_COMPONENT"), v = new G("MatOptgroup"), bt = (() => {
    class o {
        label;
        disabled = !1;
        _labelId = m(H).getId("mat-optgroup-label-");
        _inert;
        constructor() { let e = m(b, { optional: !0 }); this._inert = e?.inertGroups ?? !1; }
        static \u0275fac = function (t) { return new (t || o); };
        static \u0275cmp = n.\u0275\u0275defineComponent({ type: o, selectors: [["mat-optgroup"]], hostAttrs: [1, "mat-mdc-optgroup"], hostVars: 3, hostBindings: function (t, a) { t & 2 && n.\u0275\u0275attribute("role", a._inert ? null : "group")("aria-disabled", a._inert ? null : a.disabled.toString())("aria-labelledby", a._inert ? null : a._labelId); }, inputs: { label: "label", disabled: [2, "disabled", "disabled", q] }, exportAs: ["matOptgroup"], features: [n.\u0275\u0275ProvidersFeature([{ provide: v, useExisting: o }])], ngContentSelectors: _e, decls: 5, vars: 4, consts: [["role", "presentation", 1, "mat-mdc-optgroup-label", 3, "id"], [1, "mdc-list-item__primary-text"]], template: function (t, a) { t & 1 && (n.\u0275\u0275projectionDef(ge), n.\u0275\u0275domElementStart(0, "span", 0)(1, "span", 1), n.\u0275\u0275text(2), n.\u0275\u0275projection(3), n.\u0275\u0275domElementEnd()(), n.\u0275\u0275projection(4, 1)), t & 2 && (n.\u0275\u0275classProp("mdc-list-item--disabled", a.disabled), n.\u0275\u0275domProperty("id", a._labelId), n.\u0275\u0275advance(2), n.\u0275\u0275textInterpolate1("", a.label, " ")); }, styles: [`.mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-optgroup-label-text-font, var(--mat-sys-title-small-font));line-height:var(--mat-optgroup-label-text-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-optgroup-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-optgroup-label-text-tracking, var(--mat-sys-title-small-tracking));font-weight:var(--mat-optgroup-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal;color:inherit}
`], encapsulation: 2, changeDetection: 0 });
    }
    return o;
})(), O = class {
    source;
    isUserInput;
    constructor(s, e = !1) { this.source = s, this.isUserInput = e; }
}, C = (() => {
    class o {
        _element = m(ce);
        _changeDetectorRef = m(de);
        _parent = m(b, { optional: !0 });
        group = m(v, { optional: !0 });
        _signalDisableRipple = !1;
        _selected = !1;
        _active = !1;
        _mostRecentViewValue = "";
        get multiple() { return this._parent && this._parent.multiple; }
        get selected() { return this._selected; }
        value;
        id = m(H).getId("mat-option-");
        get disabled() { return this.group && this.group.disabled || this._disabled(); }
        set disabled(e) { this._disabled.set(e); }
        _disabled = me(!1);
        get disableRipple() { return this._signalDisableRipple ? this._parent.disableRipple() : !!this._parent?.disableRipple; }
        get hideSingleSelectionIndicator() { return !!(this._parent && this._parent.hideSingleSelectionIndicator); }
        onSelectionChange = new pe;
        _text;
        _stateChanges = new ue;
        constructor() { let e = m(R); e.load(V), e.load(E), this._signalDisableRipple = !!this._parent && he(this._parent.disableRipple); }
        get active() { return this._active; }
        get viewValue() { return (this._text?.nativeElement.textContent || "").trim(); }
        select(e = !0) { this._selected || (this._selected = !0, this._changeDetectorRef.markForCheck(), e && this._emitSelectionChangeEvent()); }
        deselect(e = !0) { this._selected && (this._selected = !1, this._changeDetectorRef.markForCheck(), e && this._emitSelectionChangeEvent()); }
        focus(e, t) { let a = this._getHostElement(); typeof a.focus == "function" && a.focus(t); }
        setActiveStyles() { this._active || (this._active = !0, this._changeDetectorRef.markForCheck()); }
        setInactiveStyles() { this._active && (this._active = !1, this._changeDetectorRef.markForCheck()); }
        getLabel() { return this.viewValue; }
        _handleKeydown(e) { (e.keyCode === 13 || e.keyCode === 32) && !u(e) && (this._selectViaInteraction(), e.preventDefault()); }
        _selectViaInteraction() { this.disabled || (this._selected = this.multiple ? !this._selected : !0, this._changeDetectorRef.markForCheck(), this._emitSelectionChangeEvent(!0)); }
        _getTabIndex() { return this.disabled ? "-1" : "0"; }
        _getHostElement() { return this._element.nativeElement; }
        ngAfterViewChecked() { if (this._selected) {
            let e = this.viewValue;
            e !== this._mostRecentViewValue && (this._mostRecentViewValue && this._stateChanges.next(), this._mostRecentViewValue = e);
        } }
        ngOnDestroy() { this._stateChanges.complete(); }
        _emitSelectionChangeEvent(e = !1) { this.onSelectionChange.emit(new O(this, e)); }
        static \u0275fac = function (t) { return new (t || o); };
        static \u0275cmp = n.\u0275\u0275defineComponent({ type: o, selectors: [["mat-option"]], viewQuery: function (t, a) { if (t & 1 && n.\u0275\u0275viewQuery(fe, 7), t & 2) {
                let r;
                n.\u0275\u0275queryRefresh(r = n.\u0275\u0275loadQuery()) && (a._text = r.first);
            } }, hostAttrs: ["role", "option", 1, "mat-mdc-option", "mdc-list-item"], hostVars: 11, hostBindings: function (t, a) { t & 1 && n.\u0275\u0275listener("click", function () { return a._selectViaInteraction(); })("keydown", function (l) { return a._handleKeydown(l); }), t & 2 && (n.\u0275\u0275domProperty("id", a.id), n.\u0275\u0275attribute("aria-selected", a.selected)("aria-disabled", a.disabled.toString()), n.\u0275\u0275classProp("mdc-list-item--selected", a.selected)("mat-mdc-option-multiple", a.multiple)("mat-mdc-option-active", a.active)("mdc-list-item--disabled", a.disabled)); }, inputs: { value: "value", id: "id", disabled: [2, "disabled", "disabled", q] }, outputs: { onSelectionChange: "onSelectionChange" }, exportAs: ["matOption"], ngContentSelectors: be, decls: 8, vars: 5, consts: [["text", ""], ["aria-hidden", "true", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled", "state"], [1, "mdc-list-item__primary-text"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled"], [1, "cdk-visually-hidden"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-mdc-option-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"]], template: function (t, a) { t & 1 && (n.\u0275\u0275projectionDef(ye), n.\u0275\u0275conditionalCreate(0, ve, 1, 2, "mat-pseudo-checkbox", 1), n.\u0275\u0275projection(1), n.\u0275\u0275elementStart(2, "span", 2, 0), n.\u0275\u0275projection(4, 1), n.\u0275\u0275elementEnd(), n.\u0275\u0275conditionalCreate(5, Ce, 1, 1, "mat-pseudo-checkbox", 3), n.\u0275\u0275conditionalCreate(6, ke, 2, 1, "span", 4), n.\u0275\u0275element(7, "div", 5)), t & 2 && (n.\u0275\u0275conditional(a.multiple ? 0 : -1), n.\u0275\u0275advance(5), n.\u0275\u0275conditional(!a.multiple && a.selected && !a.hideSingleSelectionIndicator ? 5 : -1), n.\u0275\u0275advance(), n.\u0275\u0275conditional(a.group && a.group._inert ? 6 : -1), n.\u0275\u0275advance(), n.\u0275\u0275property("matRippleTrigger", a._getHostElement())("matRippleDisabled", a.disabled || a.disableRipple)); }, dependencies: [K, A], styles: [`.mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-option-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-option-label-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container))}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}@media(forced-colors: active){.mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{right:auto;left:16px}}.mat-mdc-option-multiple{--mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-focus-indicator::before{content:""}
`], encapsulation: 2, changeDetection: 0 });
    }
    return o;
})();
function Q(o, s, e) { if (e.length) {
    let t = s.toArray(), a = e.toArray(), r = 0;
    for (let l = 0; l < o + 1; l++)
        t[l].group && t[l].group === a[r] && r++;
    return r;
} return 0; }
function Y(o, s, e, t) { return o < e ? o : o + s > e + t ? Math.max(0, o - t + s) : e; }
import * as k from "@angular/core";
import "@angular/core";
var x = (() => { class o {
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275mod = k.\u0275\u0275defineNgModule({ type: o });
    static \u0275inj = k.\u0275\u0275defineInjector({ imports: [F, g, j, C] });
} return o; })();
import { createRepositionScrollStrategy as oe, CdkConnectedOverlay as $, CdkOverlayOrigin as J, OverlayModule as Se } from "@angular/cdk/overlay";
import * as i from "@angular/core";
import { InjectionToken as I, inject as c, Injector as re, ChangeDetectorRef as De, ElementRef as Ie, Renderer2 as Re, signal as Ee, EventEmitter as w, HostAttributeToken as Te, booleanAttribute as h, numberAttribute as Z } from "@angular/core";
import { ViewportRuler as Ae, CdkScrollableModule as Ve } from "@angular/cdk/scrolling";
import { _IdGenerator as Fe, LiveAnnouncer as Pe, removeAriaReferencedId as ee, addAriaReferencedId as Le, ActiveDescendantKeyManager as Ne } from "@angular/cdk/a11y";
import { Directionality as Be } from "@angular/cdk/bidi";
import { NgControl as We, Validators as Ke, NgForm as ze, FormGroupDirective as je } from "@angular/forms";
import { Subject as M, defer as He, merge as S } from "rxjs";
import { startWith as te, switchMap as ie, filter as ae, map as ne, takeUntil as _, take as Ge } from "rxjs/operators";
import { NgClass as qe } from "@angular/common";
var Qe = ["trigger"], Ye = ["panel"], Ue = [[["mat-select-trigger"]], "*"], Xe = ["mat-select-trigger", "*"];
function $e(o, s) { if (o & 1 && (i.\u0275\u0275elementStart(0, "span", 4), i.\u0275\u0275text(1), i.\u0275\u0275elementEnd()), o & 2) {
    let e = i.\u0275\u0275nextContext();
    i.\u0275\u0275advance(), i.\u0275\u0275textInterpolate(e.placeholder);
} }
function Je(o, s) { o & 1 && i.\u0275\u0275projection(0); }
function Ze(o, s) { if (o & 1 && (i.\u0275\u0275elementStart(0, "span", 11), i.\u0275\u0275text(1), i.\u0275\u0275elementEnd()), o & 2) {
    let e = i.\u0275\u0275nextContext(2);
    i.\u0275\u0275advance(), i.\u0275\u0275textInterpolate(e.triggerValue);
} }
function et(o, s) { if (o & 1 && (i.\u0275\u0275elementStart(0, "span", 5), i.\u0275\u0275conditionalCreate(1, Je, 1, 0)(2, Ze, 2, 1, "span", 11), i.\u0275\u0275elementEnd()), o & 2) {
    let e = i.\u0275\u0275nextContext();
    i.\u0275\u0275advance(), i.\u0275\u0275conditional(e.customTrigger ? 1 : 2);
} }
function tt(o, s) { if (o & 1) {
    let e = i.\u0275\u0275getCurrentView();
    i.\u0275\u0275elementStart(0, "div", 12, 1), i.\u0275\u0275listener("keydown", function (a) { i.\u0275\u0275restoreView(e); let r = i.\u0275\u0275nextContext(); return i.\u0275\u0275resetView(r._handleKeydown(a)); }), i.\u0275\u0275projection(2, 1), i.\u0275\u0275elementEnd();
} if (o & 2) {
    let e = i.\u0275\u0275nextContext();
    i.\u0275\u0275classMap(i.\u0275\u0275interpolate1("mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open ", e._getPanelTheme())), i.\u0275\u0275classProp("mat-select-panel-animations-enabled", !e._animationsDisabled), i.\u0275\u0275property("ngClass", e.panelClass), i.\u0275\u0275attribute("id", e.id + "-panel")("aria-multiselectable", e.multiple)("aria-label", e.ariaLabel || null)("aria-labelledby", e._getPanelAriaLabelledby());
} }
var le = new I("mat-select-scroll-strategy", { providedIn: "root", factory: () => { let o = c(re); return () => oe(o); } });
function it(o) { let s = c(re); return () => oe(s); }
var at = new I("MAT_SELECT_CONFIG"), nt = { provide: le, deps: [], useFactory: it }, se = new I("MatSelectTrigger"), D = class {
    source;
    value;
    constructor(s, e) { this.source = s, this.value = e; }
}, ni = (() => {
    class o {
        _viewportRuler = c(Ae);
        _changeDetectorRef = c(De);
        _elementRef = c(Ie);
        _dir = c(Be, { optional: !0 });
        _idGenerator = c(Fe);
        _renderer = c(Re);
        _parentFormField = c(L, { optional: !0 });
        ngControl = c(We, { self: !0, optional: !0 });
        _liveAnnouncer = c(Pe);
        _defaultOptions = c(at, { optional: !0 });
        _animationsDisabled = T();
        _initialized = new M;
        _cleanupDetach;
        options;
        optionGroups;
        customTrigger;
        _positions = [{ originX: "start", originY: "bottom", overlayX: "start", overlayY: "top" }, { originX: "end", originY: "bottom", overlayX: "end", overlayY: "top" }, { originX: "start", originY: "top", overlayX: "start", overlayY: "bottom", panelClass: "mat-mdc-select-panel-above" }, { originX: "end", originY: "top", overlayX: "end", overlayY: "bottom", panelClass: "mat-mdc-select-panel-above" }];
        _scrollOptionIntoView(e) { let t = this.options.toArray()[e]; if (t) {
            let a = this.panel.nativeElement, r = Q(e, this.options, this.optionGroups), l = t._getHostElement();
            e === 0 && r === 1 ? a.scrollTop = 0 : a.scrollTop = Y(l.offsetTop, l.offsetHeight, a.scrollTop, a.offsetHeight);
        } }
        _positioningSettled() { this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0); }
        _getChangeEvent(e) { return new D(this, e); }
        _scrollStrategyFactory = c(le);
        _panelOpen = !1;
        _compareWith = (e, t) => e === t;
        _uid = this._idGenerator.getId("mat-select-");
        _triggerAriaLabelledBy = null;
        _previousControl;
        _destroy = new M;
        _errorStateTracker;
        stateChanges = new M;
        disableAutomaticLabeling = !0;
        userAriaDescribedBy;
        _selectionModel;
        _keyManager;
        _preferredOverlayOrigin;
        _overlayWidth;
        _onChange = () => { };
        _onTouched = () => { };
        _valueId = this._idGenerator.getId("mat-select-value-");
        _scrollStrategy;
        _overlayPanelClass = this._defaultOptions?.overlayPanelClass || "";
        get focused() { return this._focused || this._panelOpen; }
        _focused = !1;
        controlType = "mat-select";
        trigger;
        panel;
        _overlayDir;
        panelClass;
        disabled = !1;
        get disableRipple() { return this._disableRipple(); }
        set disableRipple(e) { this._disableRipple.set(e); }
        _disableRipple = Ee(!1);
        tabIndex = 0;
        get hideSingleSelectionIndicator() { return this._hideSingleSelectionIndicator; }
        set hideSingleSelectionIndicator(e) { this._hideSingleSelectionIndicator = e, this._syncParentProperties(); }
        _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? !1;
        get placeholder() { return this._placeholder; }
        set placeholder(e) { this._placeholder = e, this.stateChanges.next(); }
        _placeholder;
        get required() { return this._required ?? this.ngControl?.control?.hasValidator(Ke.required) ?? !1; }
        set required(e) { this._required = e, this.stateChanges.next(); }
        _required;
        get multiple() { return this._multiple; }
        set multiple(e) { this._selectionModel, this._multiple = e; }
        _multiple = !1;
        disableOptionCentering = this._defaultOptions?.disableOptionCentering ?? !1;
        get compareWith() { return this._compareWith; }
        set compareWith(e) { this._compareWith = e, this._selectionModel && this._initializeSelection(); }
        get value() { return this._value; }
        set value(e) { this._assignValue(e) && this._onChange(e); }
        _value;
        ariaLabel = "";
        ariaLabelledby;
        get errorStateMatcher() { return this._errorStateTracker.matcher; }
        set errorStateMatcher(e) { this._errorStateTracker.matcher = e; }
        typeaheadDebounceInterval;
        sortComparator;
        get id() { return this._id; }
        set id(e) { this._id = e || this._uid, this.stateChanges.next(); }
        _id;
        get errorState() { return this._errorStateTracker.errorState; }
        set errorState(e) { this._errorStateTracker.errorState = e; }
        panelWidth = this._defaultOptions && typeof this._defaultOptions.panelWidth < "u" ? this._defaultOptions.panelWidth : "auto";
        canSelectNullableOptions = this._defaultOptions?.canSelectNullableOptions ?? !1;
        optionSelectionChanges = He(() => { let e = this.options; return e ? e.changes.pipe(te(e), ie(() => S(...e.map(t => t.onSelectionChange)))) : this._initialized.pipe(ie(() => this.optionSelectionChanges)); });
        openedChange = new w;
        _openedStream = this.openedChange.pipe(ae(e => e), ne(() => { }));
        _closedStream = this.openedChange.pipe(ae(e => !e), ne(() => { }));
        selectionChange = new w;
        valueChange = new w;
        constructor() { let e = c(N), t = c(ze, { optional: !0 }), a = c(je, { optional: !0 }), r = c(new Te("tabindex"), { optional: !0 }); this.ngControl && (this.ngControl.valueAccessor = this), this._defaultOptions?.typeaheadDebounceInterval != null && (this.typeaheadDebounceInterval = this._defaultOptions.typeaheadDebounceInterval), this._errorStateTracker = new B(e, this.ngControl, a, t, this.stateChanges), this._scrollStrategy = this._scrollStrategyFactory(), this.tabIndex = r == null ? 0 : parseInt(r) || 0, this.id = this.id; }
        ngOnInit() { this._selectionModel = new z(this.multiple), this.stateChanges.next(), this._viewportRuler.change().pipe(_(this._destroy)).subscribe(() => { this.panelOpen && (this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin), this._changeDetectorRef.detectChanges()); }); }
        ngAfterContentInit() { this._initialized.next(), this._initialized.complete(), this._initKeyManager(), this._selectionModel.changed.pipe(_(this._destroy)).subscribe(e => { e.added.forEach(t => t.select()), e.removed.forEach(t => t.deselect()); }), this.options.changes.pipe(te(null), _(this._destroy)).subscribe(() => { this._resetOptions(), this._initializeSelection(); }); }
        ngDoCheck() { let e = this._getTriggerAriaLabelledby(), t = this.ngControl; if (e !== this._triggerAriaLabelledBy) {
            let a = this._elementRef.nativeElement;
            this._triggerAriaLabelledBy = e, e ? a.setAttribute("aria-labelledby", e) : a.removeAttribute("aria-labelledby");
        } t && (this._previousControl !== t.control && (this._previousControl !== void 0 && t.disabled !== null && t.disabled !== this.disabled && (this.disabled = t.disabled), this._previousControl = t.control), this.updateErrorState()); }
        ngOnChanges(e) { (e.disabled || e.userAriaDescribedBy) && this.stateChanges.next(), e.typeaheadDebounceInterval && this._keyManager && this._keyManager.withTypeAhead(this.typeaheadDebounceInterval); }
        ngOnDestroy() { this._cleanupDetach?.(), this._keyManager?.destroy(), this._destroy.next(), this._destroy.complete(), this.stateChanges.complete(), this._clearFromModal(); }
        toggle() { this.panelOpen ? this.close() : this.open(); }
        open() { this._canOpen() && (this._parentFormField && (this._preferredOverlayOrigin = this._parentFormField.getConnectedOverlayOrigin()), this._cleanupDetach?.(), this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin), this._applyModalPanelOwnership(), this._panelOpen = !0, this._overlayDir.positionChange.pipe(Ge(1)).subscribe(() => { this._changeDetectorRef.detectChanges(), this._positioningSettled(); }), this._overlayDir.attachOverlay(), this._keyManager.withHorizontalOrientation(null), this._highlightCorrectOption(), this._changeDetectorRef.markForCheck(), this.stateChanges.next(), Promise.resolve().then(() => this.openedChange.emit(!0))); }
        _trackedModal = null;
        _applyModalPanelOwnership() { let e = this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]'); if (!e)
            return; let t = `${this.id}-panel`; this._trackedModal && ee(this._trackedModal, "aria-owns", t), Le(e, "aria-owns", t), this._trackedModal = e; }
        _clearFromModal() { if (!this._trackedModal)
            return; let e = `${this.id}-panel`; ee(this._trackedModal, "aria-owns", e), this._trackedModal = null; }
        close() { this._panelOpen && (this._panelOpen = !1, this._exitAndDetach(), this._keyManager.withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr"), this._changeDetectorRef.markForCheck(), this._onTouched(), this.stateChanges.next(), Promise.resolve().then(() => this.openedChange.emit(!1))); }
        _exitAndDetach() { if (this._animationsDisabled || !this.panel) {
            this._detachOverlay();
            return;
        } this._cleanupDetach?.(), this._cleanupDetach = () => { t(), clearTimeout(a), this._cleanupDetach = void 0; }; let e = this.panel.nativeElement, t = this._renderer.listen(e, "animationend", r => { r.animationName === "_mat-select-exit" && (this._cleanupDetach?.(), this._detachOverlay()); }), a = setTimeout(() => { this._cleanupDetach?.(), this._detachOverlay(); }, 200); e.classList.add("mat-select-panel-exit"); }
        _detachOverlay() { this._overlayDir.detachOverlay(), this._changeDetectorRef.markForCheck(); }
        writeValue(e) { this._assignValue(e); }
        registerOnChange(e) { this._onChange = e; }
        registerOnTouched(e) { this._onTouched = e; }
        setDisabledState(e) { this.disabled = e, this._changeDetectorRef.markForCheck(), this.stateChanges.next(); }
        get panelOpen() { return this._panelOpen; }
        get selected() { return this.multiple ? this._selectionModel?.selected || [] : this._selectionModel?.selected[0]; }
        get triggerValue() { if (this.empty)
            return ""; if (this._multiple) {
            let e = this._selectionModel.selected.map(t => t.viewValue);
            return this._isRtl() && e.reverse(), e.join(", ");
        } return this._selectionModel.selected[0].viewValue; }
        updateErrorState() { this._errorStateTracker.updateErrorState(); }
        _isRtl() { return this._dir ? this._dir.value === "rtl" : !1; }
        _handleKeydown(e) { this.disabled || (this.panelOpen ? this._handleOpenKeydown(e) : this._handleClosedKeydown(e)); }
        _handleClosedKeydown(e) { let t = e.keyCode, a = t === 40 || t === 38 || t === 37 || t === 39, r = t === 13 || t === 32, l = this._keyManager; if (!l.isTyping() && r && !u(e) || (this.multiple || e.altKey) && a)
            e.preventDefault(), this.open();
        else if (!this.multiple) {
            let p = this.selected;
            l.onKeydown(e);
            let d = this.selected;
            d && p !== d && this._liveAnnouncer.announce(d.viewValue, 1e4);
        } }
        _handleOpenKeydown(e) { let t = this._keyManager, a = e.keyCode, r = a === 40 || a === 38, l = t.isTyping(); if (r && e.altKey)
            e.preventDefault(), this.close();
        else if (!l && (a === 13 || a === 32) && t.activeItem && !u(e))
            e.preventDefault(), t.activeItem._selectViaInteraction();
        else if (!l && this._multiple && a === 65 && e.ctrlKey) {
            e.preventDefault();
            let p = this.options.some(d => !d.disabled && !d.selected);
            this.options.forEach(d => { d.disabled || (p ? d.select() : d.deselect()); });
        }
        else {
            let p = t.activeItemIndex;
            t.onKeydown(e), this._multiple && r && e.shiftKey && t.activeItem && t.activeItemIndex !== p && t.activeItem._selectViaInteraction();
        } }
        _handleOverlayKeydown(e) { e.keyCode === 27 && !u(e) && (e.preventDefault(), this.close()); }
        _onFocus() { this.disabled || (this._focused = !0, this.stateChanges.next()); }
        _onBlur() { this._focused = !1, this._keyManager?.cancelTypeahead(), !this.disabled && !this.panelOpen && (this._onTouched(), this._changeDetectorRef.markForCheck(), this.stateChanges.next()); }
        _getPanelTheme() { return this._parentFormField ? `mat-${this._parentFormField.color}` : ""; }
        get empty() { return !this._selectionModel || this._selectionModel.isEmpty(); }
        _initializeSelection() { Promise.resolve().then(() => { this.ngControl && (this._value = this.ngControl.value), this._setSelectionByValue(this._value), this.stateChanges.next(); }); }
        _setSelectionByValue(e) { if (this.options.forEach(t => t.setInactiveStyles()), this._selectionModel.clear(), this.multiple && e)
            Array.isArray(e), e.forEach(t => this._selectOptionByValue(t)), this._sortValues();
        else {
            let t = this._selectOptionByValue(e);
            t ? this._keyManager.updateActiveItem(t) : this.panelOpen || this._keyManager.updateActiveItem(-1);
        } this._changeDetectorRef.markForCheck(); }
        _selectOptionByValue(e) { let t = this.options.find(a => { if (this._selectionModel.isSelected(a))
            return !1; try {
            return (a.value != null || this.canSelectNullableOptions) && this._compareWith(a.value, e);
        }
        catch {
            return !1;
        } }); return t && this._selectionModel.select(t), t; }
        _assignValue(e) { return e !== this._value || this._multiple && Array.isArray(e) ? (this.options && this._setSelectionByValue(e), this._value = e, !0) : !1; }
        _skipPredicate = e => this.panelOpen ? !1 : e.disabled;
        _getOverlayWidth(e) { return this.panelWidth === "auto" ? (e instanceof J ? e.elementRef : e || this._elementRef).nativeElement.getBoundingClientRect().width : this.panelWidth === null ? "" : this.panelWidth; }
        _syncParentProperties() { if (this.options)
            for (let e of this.options)
                e._changeDetectorRef.markForCheck(); }
        _initKeyManager() { this._keyManager = new Ne(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate), this._keyManager.tabOut.subscribe(() => { this.panelOpen && (!this.multiple && this._keyManager.activeItem && this._keyManager.activeItem._selectViaInteraction(), this.focus(), this.close()); }), this._keyManager.change.subscribe(() => { this._panelOpen && this.panel ? this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0) : !this._panelOpen && !this.multiple && this._keyManager.activeItem && this._keyManager.activeItem._selectViaInteraction(); }); }
        _resetOptions() { let e = S(this.options.changes, this._destroy); this.optionSelectionChanges.pipe(_(e)).subscribe(t => { this._onSelect(t.source, t.isUserInput), t.isUserInput && !this.multiple && this._panelOpen && (this.close(), this.focus()); }), S(...this.options.map(t => t._stateChanges)).pipe(_(e)).subscribe(() => { this._changeDetectorRef.detectChanges(), this.stateChanges.next(); }); }
        _onSelect(e, t) { let a = this._selectionModel.isSelected(e); !this.canSelectNullableOptions && e.value == null && !this._multiple ? (e.deselect(), this._selectionModel.clear(), this.value != null && this._propagateChanges(e.value)) : (a !== e.selected && (e.selected ? this._selectionModel.select(e) : this._selectionModel.deselect(e)), t && this._keyManager.setActiveItem(e), this.multiple && (this._sortValues(), t && this.focus())), a !== this._selectionModel.isSelected(e) && this._propagateChanges(), this.stateChanges.next(); }
        _sortValues() { if (this.multiple) {
            let e = this.options.toArray();
            this._selectionModel.sort((t, a) => this.sortComparator ? this.sortComparator(t, a, e) : e.indexOf(t) - e.indexOf(a)), this.stateChanges.next();
        } }
        _propagateChanges(e) { let t; this.multiple ? t = this.selected.map(a => a.value) : t = this.selected ? this.selected.value : e, this._value = t, this.valueChange.emit(t), this._onChange(t), this.selectionChange.emit(this._getChangeEvent(t)), this._changeDetectorRef.markForCheck(); }
        _highlightCorrectOption() { if (this._keyManager)
            if (this.empty) {
                let e = -1;
                for (let t = 0; t < this.options.length; t++)
                    if (!this.options.get(t).disabled) {
                        e = t;
                        break;
                    }
                this._keyManager.setActiveItem(e);
            }
            else
                this._keyManager.setActiveItem(this._selectionModel.selected[0]); }
        _canOpen() { return !this._panelOpen && !this.disabled && this.options?.length > 0 && !!this._overlayDir; }
        focus(e) { this._elementRef.nativeElement.focus(e); }
        _getPanelAriaLabelledby() { if (this.ariaLabel)
            return null; let e = this._parentFormField?.getLabelId() || null, t = e ? e + " " : ""; return this.ariaLabelledby ? t + this.ariaLabelledby : e; }
        _getAriaActiveDescendant() { return this.panelOpen && this._keyManager && this._keyManager.activeItem ? this._keyManager.activeItem.id : null; }
        _getTriggerAriaLabelledby() { if (this.ariaLabel)
            return null; let e = this._parentFormField?.getLabelId() || ""; return this.ariaLabelledby && (e += " " + this.ariaLabelledby), e || (e = this._valueId), e; }
        get describedByIds() { return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ") || []; }
        setDescribedByIds(e) { e.length ? this._elementRef.nativeElement.setAttribute("aria-describedby", e.join(" ")) : this._elementRef.nativeElement.removeAttribute("aria-describedby"); }
        onContainerClick() { this.focus(), this.open(); }
        get shouldLabelFloat() { return this.panelOpen || !this.empty || this.focused && !!this.placeholder; }
        static \u0275fac = function (t) { return new (t || o); };
        static \u0275cmp = i.\u0275\u0275defineComponent({ type: o, selectors: [["mat-select"]], contentQueries: function (t, a, r) { if (t & 1 && (i.\u0275\u0275contentQuery(r, se, 5), i.\u0275\u0275contentQuery(r, C, 5), i.\u0275\u0275contentQuery(r, v, 5)), t & 2) {
                let l;
                i.\u0275\u0275queryRefresh(l = i.\u0275\u0275loadQuery()) && (a.customTrigger = l.first), i.\u0275\u0275queryRefresh(l = i.\u0275\u0275loadQuery()) && (a.options = l), i.\u0275\u0275queryRefresh(l = i.\u0275\u0275loadQuery()) && (a.optionGroups = l);
            } }, viewQuery: function (t, a) { if (t & 1 && (i.\u0275\u0275viewQuery(Qe, 5), i.\u0275\u0275viewQuery(Ye, 5), i.\u0275\u0275viewQuery($, 5)), t & 2) {
                let r;
                i.\u0275\u0275queryRefresh(r = i.\u0275\u0275loadQuery()) && (a.trigger = r.first), i.\u0275\u0275queryRefresh(r = i.\u0275\u0275loadQuery()) && (a.panel = r.first), i.\u0275\u0275queryRefresh(r = i.\u0275\u0275loadQuery()) && (a._overlayDir = r.first);
            } }, hostAttrs: ["role", "combobox", "aria-haspopup", "listbox", 1, "mat-mdc-select"], hostVars: 21, hostBindings: function (t, a) { t & 1 && i.\u0275\u0275listener("keydown", function (l) { return a._handleKeydown(l); })("focus", function () { return a._onFocus(); })("blur", function () { return a._onBlur(); }), t & 2 && (i.\u0275\u0275attribute("id", a.id)("tabindex", a.disabled ? -1 : a.tabIndex)("aria-controls", a.panelOpen ? a.id + "-panel" : null)("aria-expanded", a.panelOpen)("aria-label", a.ariaLabel || null)("aria-required", a.required.toString())("aria-disabled", a.disabled.toString())("aria-invalid", a.errorState)("aria-activedescendant", a._getAriaActiveDescendant()), i.\u0275\u0275classProp("mat-mdc-select-disabled", a.disabled)("mat-mdc-select-invalid", a.errorState)("mat-mdc-select-required", a.required)("mat-mdc-select-empty", a.empty)("mat-mdc-select-multiple", a.multiple)("mat-select-open", a.panelOpen)); }, inputs: { userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"], panelClass: "panelClass", disabled: [2, "disabled", "disabled", h], disableRipple: [2, "disableRipple", "disableRipple", h], tabIndex: [2, "tabIndex", "tabIndex", e => e == null ? 0 : Z(e)], hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", h], placeholder: "placeholder", required: [2, "required", "required", h], multiple: [2, "multiple", "multiple", h], disableOptionCentering: [2, "disableOptionCentering", "disableOptionCentering", h], compareWith: "compareWith", value: "value", ariaLabel: [0, "aria-label", "ariaLabel"], ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"], errorStateMatcher: "errorStateMatcher", typeaheadDebounceInterval: [2, "typeaheadDebounceInterval", "typeaheadDebounceInterval", Z], sortComparator: "sortComparator", id: "id", panelWidth: "panelWidth", canSelectNullableOptions: [2, "canSelectNullableOptions", "canSelectNullableOptions", h] }, outputs: { openedChange: "openedChange", _openedStream: "opened", _closedStream: "closed", selectionChange: "selectionChange", valueChange: "valueChange" }, exportAs: ["matSelect"], features: [i.\u0275\u0275ProvidersFeature([{ provide: P, useExisting: o }, { provide: b, useExisting: o }]), i.\u0275\u0275NgOnChangesFeature], ngContentSelectors: Xe, decls: 11, vars: 9, consts: [["fallbackOverlayOrigin", "cdkOverlayOrigin", "trigger", ""], ["panel", ""], ["cdk-overlay-origin", "", 1, "mat-mdc-select-trigger", 3, "click"], [1, "mat-mdc-select-value"], [1, "mat-mdc-select-placeholder", "mat-mdc-select-min-line"], [1, "mat-mdc-select-value-text"], [1, "mat-mdc-select-arrow-wrapper"], [1, "mat-mdc-select-arrow"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "focusable", "false", "aria-hidden", "true"], ["d", "M7 10l5 5 5-5z"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "detach", "backdropClick", "overlayKeydown", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayWidth", "cdkConnectedOverlayFlexibleDimensions"], [1, "mat-mdc-select-min-line"], ["role", "listbox", "tabindex", "-1", 3, "keydown", "ngClass"]], template: function (t, a) { if (t & 1) {
                let r = i.\u0275\u0275getCurrentView();
                i.\u0275\u0275projectionDef(Ue), i.\u0275\u0275elementStart(0, "div", 2, 0), i.\u0275\u0275listener("click", function () { return i.\u0275\u0275restoreView(r), i.\u0275\u0275resetView(a.open()); }), i.\u0275\u0275elementStart(3, "div", 3), i.\u0275\u0275conditionalCreate(4, $e, 2, 1, "span", 4)(5, et, 3, 1, "span", 5), i.\u0275\u0275elementEnd(), i.\u0275\u0275elementStart(6, "div", 6)(7, "div", 7), i.\u0275\u0275namespaceSVG(), i.\u0275\u0275elementStart(8, "svg", 8), i.\u0275\u0275element(9, "path", 9), i.\u0275\u0275elementEnd()()()(), i.\u0275\u0275template(10, tt, 3, 10, "ng-template", 10), i.\u0275\u0275listener("detach", function () { return i.\u0275\u0275restoreView(r), i.\u0275\u0275resetView(a.close()); })("backdropClick", function () { return i.\u0275\u0275restoreView(r), i.\u0275\u0275resetView(a.close()); })("overlayKeydown", function (p) { return i.\u0275\u0275restoreView(r), i.\u0275\u0275resetView(a._handleOverlayKeydown(p)); });
            } if (t & 2) {
                let r = i.\u0275\u0275reference(1);
                i.\u0275\u0275advance(3), i.\u0275\u0275attribute("id", a._valueId), i.\u0275\u0275advance(), i.\u0275\u0275conditional(a.empty ? 4 : 5), i.\u0275\u0275advance(6), i.\u0275\u0275property("cdkConnectedOverlayDisableClose", !0)("cdkConnectedOverlayPanelClass", a._overlayPanelClass)("cdkConnectedOverlayScrollStrategy", a._scrollStrategy)("cdkConnectedOverlayOrigin", a._preferredOverlayOrigin || r)("cdkConnectedOverlayPositions", a._positions)("cdkConnectedOverlayWidth", a._overlayWidth)("cdkConnectedOverlayFlexibleDimensions", !0);
            } }, dependencies: [J, $, qe], styles: [`@keyframes _mat-select-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}@keyframes _mat-select-exit{from{opacity:1}to{opacity:0}}.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));font-family:var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking))}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-disabled .mat-mdc-select-placeholder{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color, var(--mat-sys-error))}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-select-open .mat-mdc-select-arrow{transform:rotate(180deg)}.mat-form-field-animations-enabled .mat-mdc-select-arrow{transition:transform 80ms linear}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}@media(forced-colors: active){.mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .mat-mdc-select-arrow svg{fill:GrayText}}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:relative;background-color:var(--mat-select-panel-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-select-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.mat-select-panel-animations-enabled{animation:_mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1)}.mat-select-panel-animations-enabled.mat-select-panel-exit{animation:_mat-select-exit 100ms linear}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder,._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform, translateY(-8px))}
`], encapsulation: 2, changeDetection: 0 });
    }
    return o;
})(), oi = (() => { class o {
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = i.\u0275\u0275defineDirective({ type: o, selectors: [["mat-select-trigger"]], features: [i.\u0275\u0275ProvidersFeature([{ provide: se, useExisting: o }])] });
} return o; })(), ri = (() => { class o {
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275mod = i.\u0275\u0275defineNgModule({ type: o });
    static \u0275inj = i.\u0275\u0275defineInjector({ providers: [nt], imports: [Se, x, g, Ve, W, x, g] });
} return o; })();
export { bt as a, C as b, le as c, it as d, at as e, nt as f, se as g, D as h, ni as i, oi as j, ri as k };
