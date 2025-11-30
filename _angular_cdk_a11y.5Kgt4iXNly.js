import { a as j, b as z, c as ie, d as se, e as re, f as ne, g as ae, h as oe, i as ce, j as he, k, l as C, m as de, n as _e, o as me, p as le, q as ue, r as Ie, s as fe, t as pe, u as ve } from "@nf-internal/chunk-7KUV4WVK";
import "@nf-internal/chunk-N4SNQY5V";
import { a as ye } from "@nf-internal/chunk-RMOXI6XO";
import "@nf-internal/chunk-PACPXHXL";
import "@nf-internal/chunk-ZGWTKG5Z";
import { a as E } from "@nf-internal/chunk-GMWYU74A";
import { a as x } from "@nf-internal/chunk-ZVGPI6ZI";
import "@nf-internal/chunk-MQ6KVUBG";
import { H as J, M as ee, c as Y, ja as te, lb as M, m as H, n as G, o as $, p as W, q as V, r as Z, s as q, t as Q, y as X } from "@nf-internal/chunk-VJYBASWG";
import "@nf-internal/chunk-QLZSQRL7";
import { a as A } from "@nf-internal/chunk-7RHXFCZM";
import "@nf-internal/chunk-XID2BBVI";
import "@nf-internal/chunk-4CLCTAJ7";
import * as l from "@angular/core";
import { inject as o, DOCUMENT as L, APP_ID as Pe, InjectionToken as Le, NgZone as Ne, Injector as Ke } from "@angular/core";
import { signal as D, QueryList as T, isSignal as w, effect as ke } from "@angular/core";
import { Subscription as Ce, Subject as R } from "rxjs";
import { Subject as F } from "rxjs";
import { tap as ge, debounceTime as be, filter as Ae, map as xe } from "rxjs/operators";
var Ee = 200, h = class {
    _letterKeyStream = new F;
    _items = [];
    _selectedItemIndex = -1;
    _pressedLetters = [];
    _skipPredicateFn;
    _selectedItem = new F;
    selectedItem = this._selectedItem;
    constructor(e, t) { let i = typeof t?.debounceInterval == "number" ? t.debounceInterval : Ee; t?.skipPredicate && (this._skipPredicateFn = t.skipPredicate), this.setItems(e), this._setupKeyHandler(i); }
    destroy() { this._pressedLetters = [], this._letterKeyStream.complete(), this._selectedItem.complete(); }
    setCurrentSelectedItemIndex(e) { this._selectedItemIndex = e; }
    setItems(e) { this._items = e; }
    handleKey(e) { let t = e.keyCode; e.key && e.key.length === 1 ? this._letterKeyStream.next(e.key.toLocaleUpperCase()) : (t >= 65 && t <= 90 || t >= 48 && t <= 57) && this._letterKeyStream.next(String.fromCharCode(t)); }
    isTyping() { return this._pressedLetters.length > 0; }
    reset() { this._pressedLetters = []; }
    _setupKeyHandler(e) { this._letterKeyStream.pipe(ge(t => this._pressedLetters.push(t)), be(e), Ae(() => this._pressedLetters.length > 0), xe(() => this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t => { for (let i = 1; i < this._items.length + 1; i++) {
        let s = (this._selectedItemIndex + i) % this._items.length, n = this._items[s];
        if (!this._skipPredicateFn?.(n) && n.getLabel?.().toLocaleUpperCase().trim().indexOf(t) === 0) {
            this._selectedItem.next(n);
            break;
        }
    } this._pressedLetters = []; }); }
};
var c = class {
    _items;
    _activeItemIndex = D(-1);
    _activeItem = D(null);
    _wrap = !1;
    _typeaheadSubscription = Ce.EMPTY;
    _itemChangesSubscription;
    _vertical = !0;
    _horizontal;
    _allowedModifierKeys = [];
    _homeAndEnd = !1;
    _pageUpAndDown = { enabled: !1, delta: 10 };
    _effectRef;
    _typeahead;
    _skipPredicateFn = e => e.disabled;
    constructor(e, t) { this._items = e, e instanceof T ? this._itemChangesSubscription = e.changes.subscribe(i => this._itemsChanged(i.toArray())) : w(e) && (this._effectRef = ke(() => this._itemsChanged(e()), { injector: t })); }
    tabOut = new R;
    change = new R;
    skipPredicate(e) { return this._skipPredicateFn = e, this; }
    withWrap(e = !0) { return this._wrap = e, this; }
    withVerticalOrientation(e = !0) { return this._vertical = e, this; }
    withHorizontalOrientation(e) { return this._horizontal = e, this; }
    withAllowedModifierKeys(e) { return this._allowedModifierKeys = e, this; }
    withTypeAhead(e = 200) { this._typeaheadSubscription.unsubscribe(); let t = this._getItemsArray(); return this._typeahead = new h(t, { debounceInterval: typeof e == "number" ? e : void 0, skipPredicate: i => this._skipPredicateFn(i) }), this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(i => { this.setActiveItem(i); }), this; }
    cancelTypeahead() { return this._typeahead?.reset(), this; }
    withHomeAndEnd(e = !0) { return this._homeAndEnd = e, this; }
    withPageUpDown(e = !0, t = 10) { return this._pageUpAndDown = { enabled: e, delta: t }, this; }
    setActiveItem(e) { let t = this._activeItem(); this.updateActiveItem(e), this._activeItem() !== t && this.change.next(this._activeItemIndex()); }
    onKeydown(e) { let t = e.keyCode, s = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(n => !e[n] || this._allowedModifierKeys.indexOf(n) > -1); switch (t) {
        case 9:
            this.tabOut.next();
            return;
        case 40: if (this._vertical && s) {
            this.setNextItemActive();
            break;
        }
        else
            return;
        case 38: if (this._vertical && s) {
            this.setPreviousItemActive();
            break;
        }
        else
            return;
        case 39: if (this._horizontal && s) {
            this._horizontal === "rtl" ? this.setPreviousItemActive() : this.setNextItemActive();
            break;
        }
        else
            return;
        case 37: if (this._horizontal && s) {
            this._horizontal === "rtl" ? this.setNextItemActive() : this.setPreviousItemActive();
            break;
        }
        else
            return;
        case 36: if (this._homeAndEnd && s) {
            this.setFirstItemActive();
            break;
        }
        else
            return;
        case 35: if (this._homeAndEnd && s) {
            this.setLastItemActive();
            break;
        }
        else
            return;
        case 33: if (this._pageUpAndDown.enabled && s) {
            let n = this._activeItemIndex() - this._pageUpAndDown.delta;
            this._setActiveItemByIndex(n > 0 ? n : 0, 1);
            break;
        }
        else
            return;
        case 34: if (this._pageUpAndDown.enabled && s) {
            let n = this._activeItemIndex() + this._pageUpAndDown.delta, a = this._getItemsArray().length;
            this._setActiveItemByIndex(n < a ? n : a - 1, -1);
            break;
        }
        else
            return;
        default:
            (s || M(e, "shiftKey")) && this._typeahead?.handleKey(e);
            return;
    } this._typeahead?.reset(), e.preventDefault(); }
    get activeItemIndex() { return this._activeItemIndex(); }
    get activeItem() { return this._activeItem(); }
    isTyping() { return !!this._typeahead && this._typeahead.isTyping(); }
    setFirstItemActive() { this._setActiveItemByIndex(0, 1); }
    setLastItemActive() { this._setActiveItemByIndex(this._getItemsArray().length - 1, -1); }
    setNextItemActive() { this._activeItemIndex() < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1); }
    setPreviousItemActive() { this._activeItemIndex() < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1); }
    updateActiveItem(e) { let t = this._getItemsArray(), i = typeof e == "number" ? e : t.indexOf(e), s = t[i]; this._activeItem.set(s ?? null), this._activeItemIndex.set(i), this._typeahead?.setCurrentSelectedItemIndex(i); }
    destroy() { this._typeaheadSubscription.unsubscribe(), this._itemChangesSubscription?.unsubscribe(), this._effectRef?.destroy(), this._typeahead?.destroy(), this.tabOut.complete(), this.change.complete(); }
    _setActiveItemByDelta(e) { this._wrap ? this._setActiveInWrapMode(e) : this._setActiveInDefaultMode(e); }
    _setActiveInWrapMode(e) { let t = this._getItemsArray(); for (let i = 1; i <= t.length; i++) {
        let s = (this._activeItemIndex() + e * i + t.length) % t.length, n = t[s];
        if (!this._skipPredicateFn(n)) {
            this.setActiveItem(s);
            return;
        }
    } }
    _setActiveInDefaultMode(e) { this._setActiveItemByIndex(this._activeItemIndex() + e, e); }
    _setActiveItemByIndex(e, t) { let i = this._getItemsArray(); if (i[e]) {
        for (; this._skipPredicateFn(i[e]);)
            if (e += t, !i[e])
                return;
        this.setActiveItem(e);
    } }
    _getItemsArray() { return w(this._items) ? this._items() : this._items instanceof T ? this._items.toArray() : this._items; }
    _itemsChanged(e) { this._typeahead?.setItems(e); let t = this._activeItem(); if (t) {
        let i = e.indexOf(t);
        i > -1 && i !== this._activeItemIndex() && (this._activeItemIndex.set(i), this._typeahead?.setCurrentSelectedItemIndex(i));
    } }
};
var u = class extends c {
    setActiveItem(e) { this.activeItem && this.activeItem.setInactiveStyles(), super.setActiveItem(e), this.activeItem && this.activeItem.setActiveStyles(); }
};
var I = class extends c {
    _origin = "program";
    setFocusOrigin(e) { return this._origin = e, this; }
    setActiveItem(e) { super.setActiveItem(e), this.activeItem && this.activeItem.focus(this._origin); }
};
import { Subject as Be } from "rxjs";
import { QueryList as De, InjectionToken as Te } from "@angular/core";
import { Subscription as we, isObservable as Re, Subject as Se, of as Oe } from "rxjs";
import { take as S } from "rxjs/operators";
import { isObservable as Me, of as Fe } from "rxjs";
function f(r) { return Me(r) ? r : Fe(r); }
var d = class {
    _activeItemIndex = -1;
    _activeItem = null;
    _shouldActivationFollowFocus = !1;
    _horizontalOrientation = "ltr";
    _skipPredicateFn = e => !1;
    _trackByFn = e => e;
    _items = [];
    _typeahead;
    _typeaheadSubscription = we.EMPTY;
    _hasInitialFocused = !1;
    _initializeFocus() { if (this._hasInitialFocused || this._items.length === 0)
        return; let e = 0; for (let i = 0; i < this._items.length; i++)
        if (!this._skipPredicateFn(this._items[i]) && !this._isItemDisabled(this._items[i])) {
            e = i;
            break;
        } let t = this._items[e]; t.makeFocusable ? (this._activeItem?.unfocus(), this._activeItemIndex = e, this._activeItem = t, this._typeahead?.setCurrentSelectedItemIndex(e), t.makeFocusable()) : this.focusItem(e), this._hasInitialFocused = !0; }
    constructor(e, t) { e instanceof De ? (this._items = e.toArray(), e.changes.subscribe(i => { this._items = i.toArray(), this._typeahead?.setItems(this._items), this._updateActiveItemIndex(this._items), this._initializeFocus(); })) : Re(e) ? e.subscribe(i => { this._items = i, this._typeahead?.setItems(i), this._updateActiveItemIndex(i), this._initializeFocus(); }) : (this._items = e, this._initializeFocus()), typeof t.shouldActivationFollowFocus == "boolean" && (this._shouldActivationFollowFocus = t.shouldActivationFollowFocus), t.horizontalOrientation && (this._horizontalOrientation = t.horizontalOrientation), t.skipPredicate && (this._skipPredicateFn = t.skipPredicate), t.trackBy && (this._trackByFn = t.trackBy), typeof t.typeAheadDebounceInterval < "u" && this._setTypeAhead(t.typeAheadDebounceInterval); }
    change = new Se;
    destroy() { this._typeaheadSubscription.unsubscribe(), this._typeahead?.destroy(), this.change.complete(); }
    onKeydown(e) { switch (e.key) {
        case "Tab": return;
        case "ArrowDown":
            this._focusNextItem();
            break;
        case "ArrowUp":
            this._focusPreviousItem();
            break;
        case "ArrowRight":
            this._horizontalOrientation === "rtl" ? this._collapseCurrentItem() : this._expandCurrentItem();
            break;
        case "ArrowLeft":
            this._horizontalOrientation === "rtl" ? this._expandCurrentItem() : this._collapseCurrentItem();
            break;
        case "Home":
            this._focusFirstItem();
            break;
        case "End":
            this._focusLastItem();
            break;
        case "Enter":
        case " ":
            this._activateCurrentItem();
            break;
        default:
            if (e.key === "*") {
                this._expandAllItemsAtCurrentItemLevel();
                break;
            }
            this._typeahead?.handleKey(e);
            return;
    } this._typeahead?.reset(), e.preventDefault(); }
    getActiveItemIndex() { return this._activeItemIndex; }
    getActiveItem() { return this._activeItem; }
    _focusFirstItem() { this.focusItem(this._findNextAvailableItemIndex(-1)); }
    _focusLastItem() { this.focusItem(this._findPreviousAvailableItemIndex(this._items.length)); }
    _focusNextItem() { this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex)); }
    _focusPreviousItem() { this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex)); }
    focusItem(e, t = {}) { t.emitChangeEvent ??= !0; let i = typeof e == "number" ? e : this._items.findIndex(a => this._trackByFn(a) === this._trackByFn(e)); if (i < 0 || i >= this._items.length)
        return; let s = this._items[i]; if (this._activeItem !== null && this._trackByFn(s) === this._trackByFn(this._activeItem))
        return; let n = this._activeItem; this._activeItem = s ?? null, this._activeItemIndex = i, this._typeahead?.setCurrentSelectedItemIndex(i), this._activeItem?.focus(), n?.unfocus(), t.emitChangeEvent && this.change.next(this._activeItem), this._shouldActivationFollowFocus && this._activateCurrentItem(); }
    _updateActiveItemIndex(e) { let t = this._activeItem; if (!t)
        return; let i = e.findIndex(s => this._trackByFn(s) === this._trackByFn(t)); i > -1 && i !== this._activeItemIndex && (this._activeItemIndex = i, this._typeahead?.setCurrentSelectedItemIndex(i)); }
    _setTypeAhead(e) { this._typeahead = new h(this._items, { debounceInterval: typeof e == "number" ? e : void 0, skipPredicate: t => this._skipPredicateFn(t) }), this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(t => { this.focusItem(t); }); }
    _findNextAvailableItemIndex(e) { for (let t = e + 1; t < this._items.length; t++)
        if (!this._skipPredicateFn(this._items[t]))
            return t; return e; }
    _findPreviousAvailableItemIndex(e) { for (let t = e - 1; t >= 0; t--)
        if (!this._skipPredicateFn(this._items[t]))
            return t; return e; }
    _collapseCurrentItem() { if (this._activeItem)
        if (this._isCurrentItemExpanded())
            this._activeItem.collapse();
        else {
            let e = this._activeItem.getParent();
            if (!e || this._skipPredicateFn(e))
                return;
            this.focusItem(e);
        } }
    _expandCurrentItem() { this._activeItem && (this._isCurrentItemExpanded() ? f(this._activeItem.getChildren()).pipe(S(1)).subscribe(e => { let t = e.find(i => !this._skipPredicateFn(i)); t && this.focusItem(t); }) : this._activeItem.expand()); }
    _isCurrentItemExpanded() { return this._activeItem ? typeof this._activeItem.isExpanded == "boolean" ? this._activeItem.isExpanded : this._activeItem.isExpanded() : !1; }
    _isItemDisabled(e) { return typeof e.isDisabled == "boolean" ? e.isDisabled : e.isDisabled?.(); }
    _expandAllItemsAtCurrentItemLevel() { if (!this._activeItem)
        return; let e = this._activeItem.getParent(), t; e ? t = f(e.getChildren()) : t = Oe(this._items.filter(i => i.getParent() === null)), t.pipe(S(1)).subscribe(i => { for (let s of i)
        s.expand(); }); }
    _activateCurrentItem() { this._activeItem?.activate(); }
}, O = new Te("tree-key-manager", { providedIn: "root", factory: () => (r, e) => new d(r, e) });
import "rxjs/operators";
import "@angular/common";
var N = " ";
function Ue(r, e, t) { let i = m(r, e); t = t.trim(), !i.some(s => s.trim() === t) && (i.push(t), r.setAttribute(e, i.join(N))); }
function je(r, e, t) { let i = m(r, e); t = t.trim(); let s = i.filter(n => n !== t); s.length ? r.setAttribute(e, s.join(N)) : r.removeAttribute(e); }
function m(r, e) { return r.getAttribute(e)?.match(/\S+/g) ?? []; }
var gt = "cdk-describedby-message-container", K = "cdk-describedby-message", _ = "cdk-describedby-host", v = 0, bt = (() => { class r {
    _platform = o(A);
    _document = o(L);
    _messageRegistry = new Map;
    _messagesContainer = null;
    _id = `${v++}`;
    constructor() { o(x).load(E), this._id = o(Pe) + "-" + v++; }
    describe(t, i, s) { if (!this._canBeDescribed(t, i))
        return; let n = p(i, s); typeof i != "string" ? (P(i, this._id), this._messageRegistry.set(n, { messageElement: i, referenceCount: 0 })) : this._messageRegistry.has(n) || this._createMessageElement(i, s), this._isElementDescribedByMessage(t, n) || this._addMessageReference(t, n); }
    removeDescription(t, i, s) { if (!i || !this._isElementNode(t))
        return; let n = p(i, s); if (this._isElementDescribedByMessage(t, n) && this._removeMessageReference(t, n), typeof i == "string") {
        let a = this._messageRegistry.get(n);
        a && a.referenceCount === 0 && this._deleteMessageElement(n);
    } this._messagesContainer?.childNodes.length === 0 && (this._messagesContainer.remove(), this._messagesContainer = null); }
    ngOnDestroy() { let t = this._document.querySelectorAll(`[${_}="${this._id}"]`); for (let i = 0; i < t.length; i++)
        this._removeCdkDescribedByReferenceIds(t[i]), t[i].removeAttribute(_); this._messagesContainer?.remove(), this._messagesContainer = null, this._messageRegistry.clear(); }
    _createMessageElement(t, i) { let s = this._document.createElement("div"); P(s, this._id), s.textContent = t, i && s.setAttribute("role", i), this._createMessagesContainer(), this._messagesContainer.appendChild(s), this._messageRegistry.set(p(t, i), { messageElement: s, referenceCount: 0 }); }
    _deleteMessageElement(t) { this._messageRegistry.get(t)?.messageElement?.remove(), this._messageRegistry.delete(t); }
    _createMessagesContainer() { if (this._messagesContainer)
        return; let t = "cdk-describedby-message-container", i = this._document.querySelectorAll(`.${t}[platform="server"]`); for (let n = 0; n < i.length; n++)
        i[n].remove(); let s = this._document.createElement("div"); s.style.visibility = "hidden", s.classList.add(t), s.classList.add("cdk-visually-hidden"), this._platform.isBrowser || s.setAttribute("platform", "server"), this._document.body.appendChild(s), this._messagesContainer = s; }
    _removeCdkDescribedByReferenceIds(t) { let i = m(t, "aria-describedby").filter(s => s.indexOf(K) != 0); t.setAttribute("aria-describedby", i.join(" ")); }
    _addMessageReference(t, i) { let s = this._messageRegistry.get(i); Ue(t, "aria-describedby", s.messageElement.id), t.setAttribute(_, this._id), s.referenceCount++; }
    _removeMessageReference(t, i) { let s = this._messageRegistry.get(i); s.referenceCount--, je(t, "aria-describedby", s.messageElement.id), t.removeAttribute(_); }
    _isElementDescribedByMessage(t, i) { let s = m(t, "aria-describedby"), n = this._messageRegistry.get(i), a = n && n.messageElement.id; return !!a && s.indexOf(a) != -1; }
    _canBeDescribed(t, i) { if (!this._isElementNode(t))
        return !1; if (i && typeof i == "object")
        return !0; let s = i == null ? "" : `${i}`.trim(), n = t.getAttribute("aria-label"); return s ? !n || n.trim() !== s : !1; }
    _isElementNode(t) { return t.nodeType === this._document.ELEMENT_NODE; }
    static \u0275fac = function (i) { return new (i || r); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" });
} return r; })();
function p(r, e) { return typeof r == "string" ? `${e || ""}/${r}` : r; }
function P(r, e) { r.id || (r.id = `${K}-${e}-${v++}`); }
var y = class {
    _isNoopTreeKeyManager = !0;
    change = new Be;
    destroy() { this.change.complete(); }
    onKeydown() { }
    getActiveItemIndex() { return null; }
    getActiveItem() { return null; }
    focusItem() { }
}, At = { provide: O, useFactory: () => () => new y }, g = class extends C {
    _focusTrapManager;
    _inertStrategy;
    get enabled() { return this._enabled; }
    set enabled(e) { this._enabled = e, this._enabled ? this._focusTrapManager.register(this) : this._focusTrapManager.deregister(this); }
    constructor(e, t, i, s, n, a, B, U) { super(e, t, i, s, B.defer, U), this._focusTrapManager = n, this._inertStrategy = a, this._focusTrapManager.register(this); }
    destroy() { this._focusTrapManager.deregister(this), super.destroy(); }
    _enable() { this._inertStrategy.preventFocus(this), this.toggleAnchors(!0); }
    _disable() { this._inertStrategy.allowFocus(this), this.toggleAnchors(!1); }
}, b = class {
    _listener = null;
    preventFocus(e) { this._listener && e._document.removeEventListener("focus", this._listener, !0), this._listener = t => this._trapFocus(e, t), e._ngZone.runOutsideAngular(() => { e._document.addEventListener("focus", this._listener, !0); }); }
    allowFocus(e) { this._listener && (e._document.removeEventListener("focus", this._listener, !0), this._listener = null); }
    _trapFocus(e, t) { let i = t.target, s = e._element; i && !s.contains(i) && !i.closest?.("div.cdk-overlay-pane") && setTimeout(() => { e.enabled && !s.contains(e._document.activeElement) && e.focusFirstTabbableElement(); }); }
}, ze = new Le("FOCUS_TRAP_INERT_STRATEGY"), Ye = (() => { class r {
    _focusTrapStack = [];
    register(t) { this._focusTrapStack = this._focusTrapStack.filter(s => s !== t); let i = this._focusTrapStack; i.length && i[i.length - 1]._disable(), i.push(t), t._enable(); }
    deregister(t) { t._disable(); let i = this._focusTrapStack, s = i.indexOf(t); s !== -1 && (i.splice(s, 1), i.length && i[i.length - 1]._enable()); }
    static \u0275fac = function (i) { return new (i || r); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" });
} return r; })(), xt = (() => { class r {
    _checker = o(k);
    _ngZone = o(Ne);
    _focusTrapManager = o(Ye);
    _document = o(L);
    _inertStrategy;
    _injector = o(Ke);
    constructor() { let t = o(ze, { optional: !0 }); this._inertStrategy = t || new b; }
    create(t, i = { defer: !1 }) { let s; return typeof i == "boolean" ? s = { defer: i } : s = i, new g(t, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, s, this._injector); }
    static \u0275fac = function (i) { return new (i || r); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" });
} return r; })();
export { ve as A11yModule, u as ActiveDescendantKeyManager, bt as AriaDescriber, _ as CDK_DESCRIBEDBY_HOST_ATTRIBUTE, K as CDK_DESCRIBEDBY_ID_PREFIX, Ie as CdkAriaLive, ce as CdkMonitorFocus, _e as CdkTrapFocus, g as ConfigurableFocusTrap, xt as ConfigurableFocusTrapFactory, b as EventListenerFocusTrapInertStrategy, ae as FOCUS_MONITOR_DEFAULT_OPTIONS, ze as FOCUS_TRAP_INERT_STRATEGY, I as FocusKeyManager, oe as FocusMonitor, ne as FocusMonitorDetectionMode, C as FocusTrap, de as FocusTrapFactory, fe as HighContrastMode, pe as HighContrastModeDetector, se as INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS, ie as INPUT_MODALITY_DETECTOR_OPTIONS, re as InputModalityDetector, k as InteractivityChecker, he as IsFocusableConfig, le as LIVE_ANNOUNCER_DEFAULT_OPTIONS, me as LIVE_ANNOUNCER_ELEMENT_TOKEN, c as ListKeyManager, ue as LiveAnnouncer, gt as MESSAGES_CONTAINER_ID, At as NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER, y as NoopTreeKeyManager, O as TREE_KEY_MANAGER, d as TreeKeyManager, ye as _IdGenerator, Ue as addAriaReferencedId, m as getAriaReferenceIds, j as isFakeMousedownFromScreenReader, z as isFakeTouchstartFromScreenReader, je as removeAriaReferencedId };
