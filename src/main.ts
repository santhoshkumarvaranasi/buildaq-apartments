import { environment } from './environments/environment';

// Avoid importing the native-federation package at top-level in development
// because it evaluates runtime code that uses es-module-shims and may
// trigger browser fetches for bare specifiers like `@angular/core`.
// Dynamically import the federation initializer only in production.
if (environment.production) {
  import('@angular-architects/native-federation')
    .then(({ initFederation }) =>
      initFederation()
        .catch(err => console.error('Federation init failed:', err))
    )
    .then(() => import('./bootstrap'))
    .catch(err => console.error('Bootstrap failed:', err));
} else {
  import('./bootstrap').catch(err => console.error('Bootstrap failed:', err));
}
