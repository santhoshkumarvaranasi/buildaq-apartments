export const environment = {
  production: false,
  // Use explicit IPv4 loopback to avoid platforms resolving `localhost` to IPv6 `::1`
  // which can cause connection-refused when services bind only to IPv4.
  apiUrl: 'http://127.0.0.1:3000/api',
  apiVersion: 'v1',
  multiTenant: {
    enabled: false,
    defaultTenant: 'default',
    tenantDetectionMode: 'subdomain', // 'subdomain' | 'domain' | 'path'
    tenantApiEndpoint: '/tenants'
  }
};
