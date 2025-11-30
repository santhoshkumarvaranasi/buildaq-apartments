import { a as u } from "@nf-internal/chunk-BMPGQYLV";
import { a as l, b as c, c as a, d as _, e as d, f as m } from "@nf-internal/chunk-PY7ZE27C";
import "@nf-internal/chunk-4CLCTAJ7";
import * as o from "@angular/core";
import "@angular/core";
var g = (() => { class r {
    _listeners = [];
    notify(t, i) { for (let n of this._listeners)
        n(t, i); }
    listen(t) { return this._listeners.push(t), () => { this._listeners = this._listeners.filter(i => t !== i); }; }
    ngOnDestroy() { this._listeners = []; }
    static \u0275fac = function (i) { return new (i || r); };
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" });
} return r; })();
import { Subject as f } from "rxjs";
var h = class {
    _multiple;
    _emitChanges;
    compareWith;
    _selection = new Set;
    _deselectedToEmit = [];
    _selectedToEmit = [];
    _selected;
    get selected() { return this._selected || (this._selected = Array.from(this._selection.values())), this._selected; }
    changed = new f;
    constructor(e = !1, t, i = !0, n) { this._multiple = e, this._emitChanges = i, this.compareWith = n, t && t.length && (e ? t.forEach(s => this._markSelected(s)) : this._markSelected(t[0]), this._selectedToEmit.length = 0); }
    select(...e) { this._verifyValueAssignment(e), e.forEach(i => this._markSelected(i)); let t = this._hasQueuedChanges(); return this._emitChangeEvent(), t; }
    deselect(...e) { this._verifyValueAssignment(e), e.forEach(i => this._unmarkSelected(i)); let t = this._hasQueuedChanges(); return this._emitChangeEvent(), t; }
    setSelection(...e) { this._verifyValueAssignment(e); let t = this.selected, i = new Set(e.map(s => this._getConcreteValue(s))); e.forEach(s => this._markSelected(s)), t.filter(s => !i.has(this._getConcreteValue(s, i))).forEach(s => this._unmarkSelected(s)); let n = this._hasQueuedChanges(); return this._emitChangeEvent(), n; }
    toggle(e) { return this.isSelected(e) ? this.deselect(e) : this.select(e); }
    clear(e = !0) { this._unmarkAll(); let t = this._hasQueuedChanges(); return e && this._emitChangeEvent(), t; }
    isSelected(e) { return this._selection.has(this._getConcreteValue(e)); }
    isEmpty() { return this._selection.size === 0; }
    hasValue() { return !this.isEmpty(); }
    sort(e) { this._multiple && this.selected && this._selected.sort(e); }
    isMultipleSelection() { return this._multiple; }
    _emitChangeEvent() { this._selected = null, (this._selectedToEmit.length || this._deselectedToEmit.length) && (this.changed.next({ source: this, added: this._selectedToEmit, removed: this._deselectedToEmit }), this._deselectedToEmit = [], this._selectedToEmit = []); }
    _markSelected(e) { e = this._getConcreteValue(e), this.isSelected(e) || (this._multiple || this._unmarkAll(), this.isSelected(e) || this._selection.add(e), this._emitChanges && this._selectedToEmit.push(e)); }
    _unmarkSelected(e) { e = this._getConcreteValue(e), this.isSelected(e) && (this._selection.delete(e), this._emitChanges && this._deselectedToEmit.push(e)); }
    _unmarkAll() { this.isEmpty() || this._selection.forEach(e => this._unmarkSelected(e)); }
    _verifyValueAssignment(e) { e.length > 1 && this._multiple; }
    _hasQueuedChanges() { return !!(this._deselectedToEmit.length || this._selectedToEmit.length); }
    _getConcreteValue(e, t) { if (this.compareWith) {
        t = t ?? this._selection;
        for (let i of t)
            if (this.compareWith(e, i))
                return i;
        return e;
    }
    else
        return e; }
};
function p() { return Error("Cannot pass multiple values into SelectionModel with single-value mode."); }
import "@angular/core";
import "rxjs";
export { a as ArrayDataSource, l as DataSource, h as SelectionModel, g as UniqueSelectionDispatcher, u as _DisposeViewRepeaterStrategy, m as _RecycleViewRepeaterStrategy, d as _VIEW_REPEATER_STRATEGY, _ as _ViewRepeaterOperation, p as getMultipleValuesInSingleSelectionError, c as isDataSource };
