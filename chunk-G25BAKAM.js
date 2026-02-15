import * as o from "@angular/core";
import { inject as a, APP_ID as c } from "@angular/core";
var n = {}, s = (() => { class e {
    _appId = a(c);
    getId(t) { return this._appId !== "ng" && (t += this._appId), n.hasOwnProperty(t) || (n[t] = 0), `${t}${n[t]++}`; }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
export { s as a };
