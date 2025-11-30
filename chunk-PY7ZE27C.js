import { ConnectableObservable as C } from "rxjs";
var m = class {
};
function u(c) { return c && typeof c.connect == "function" && !(c instanceof C); }
import { isObservable as D, of as V } from "rxjs";
import { InjectionToken as r } from "@angular/core";
var _ = class extends m {
    _data;
    constructor(t) { super(), this._data = t; }
    connect() { return D(this._data) ? this._data : V(this._data); }
    disconnect() { }
}, o = (function (c) { return c[c.REPLACED = 0] = "REPLACED", c[c.INSERTED = 1] = "INSERTED", c[c.MOVED = 2] = "MOVED", c[c.REMOVED = 3] = "REMOVED", c; })(o || {}), M = new r("_ViewRepeater"), d = class {
    viewCacheSize = 20;
    _viewCache = [];
    applyChanges(t, i, s, n, e) { t.forEachOperation((h, f, E) => { let a, l; if (h.previousIndex == null) {
        let w = () => s(h, f, E);
        a = this._insertView(w, E, i, n(h)), l = a ? o.INSERTED : o.REPLACED;
    }
    else
        E == null ? (this._detachAndCacheView(f, i), l = o.REMOVED) : (a = this._moveView(f, E, i, n(h)), l = o.MOVED); e && e({ context: a?.context, operation: l, record: h }); }); }
    detach() { for (let t of this._viewCache)
        t.destroy(); this._viewCache = []; }
    _insertView(t, i, s, n) { let e = this._insertViewFromCache(i, s); if (e) {
        e.context.$implicit = n;
        return;
    } let h = t(); return s.createEmbeddedView(h.templateRef, h.context, h.index); }
    _detachAndCacheView(t, i) { let s = i.detach(t); this._maybeCacheView(s, i); }
    _moveView(t, i, s, n) { let e = s.get(t); return s.move(e, i), e.context.$implicit = n, e; }
    _maybeCacheView(t, i) { if (this._viewCache.length < this.viewCacheSize)
        this._viewCache.push(t);
    else {
        let s = i.indexOf(t);
        s === -1 ? t.destroy() : i.remove(s);
    } }
    _insertViewFromCache(t, i) { let s = this._viewCache.pop(); return s && i.insert(s, t), s || null; }
};
export { m as a, u as b, _ as c, o as d, M as e, d as f };
