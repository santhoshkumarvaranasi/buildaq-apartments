import * as s from "@angular/core";
import "@angular/core";
var h = (() => { class r {
    isErrorState(t, e) { return !!(t && t.invalid && (t.touched || e && e.submitted)); }
    static \u0275fac = function (e) { return new (e || r); };
    static \u0275prov = s.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" });
} return r; })();
var i = class {
    _defaultMatcher;
    ngControl;
    _parentFormGroup;
    _parentForm;
    _stateChanges;
    errorState = !1;
    matcher;
    constructor(a, t, e, o, n) { this._defaultMatcher = a, this.ngControl = t, this._parentFormGroup = e, this._parentForm = o, this._stateChanges = n; }
    updateErrorState() { let a = this.errorState, t = this._parentFormGroup || this._parentForm, e = this.matcher || this._defaultMatcher, o = this.ngControl ? this.ngControl.control : null, n = e?.isErrorState(o, t) ?? !1; n !== a && (this.errorState = n, this._stateChanges.next()); }
};
export { h as a, i as b };
