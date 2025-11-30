import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  try {
    const token = localStorage.getItem('auth_token') || localStorage.getItem('shellAuthToken');
    const tenantId = localStorage.getItem('tenant_id') || environment.multiTenant?.defaultTenant;

    let headers = req.headers;
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    if (tenantId) {
      headers = headers.set('X-Tenant-ID', tenantId);
    }

    // If the request is relative, prefix with the configured API base URL
    const isAbsolute = /^https?:\/\//i.test(req.url);
    const url = isAbsolute ? req.url : `${environment.apiUrl.replace(/\/$/, '')}/${req.url.replace(/^\//, '')}`;

    const newReq = req.clone({ headers, url });
    return next(newReq);
  } catch (e) {
    return next(req);
  }
};
