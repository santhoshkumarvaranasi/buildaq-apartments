const { withNativeFederation } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'apartments',

  exposes: {
    './ApartmentsModule': './src/app/apartments/apartments.module.ts',
  },

  shared: {
    '@angular/core': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/core/primitives/signals': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/core/primitives/di': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/common': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/common/http': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/forms': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/platform-browser': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/platform-browser/animations': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/router': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/cdk': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/cdk/a11y': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/cdk/bidi': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/cdk/overlay': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/cdk/platform': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/cdk/portal': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/cdk/scrolling': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/cdk/table': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/cdk/text-field': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material/core': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material/button': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material/icon': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material/input': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material/form-field': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material/select': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material/table': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material/card': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material/toolbar': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material/dialog': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material/list': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material/checkbox': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material/slide-toggle': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material/button-toggle': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material/sidenav': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material/chips': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material/paginator': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material/sort': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material/tooltip': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material/progress-bar': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material/snack-bar': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    'rxjs': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    'rxjs/operators': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    'tslib': { singleton: true, strictVersion: false, requiredVersion: 'auto' }
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

  features: {
    // New feature for more performance and avoiding
    // issues with node libs. Comment this out to
    // get the traditional behavior:
    ignoreUnusedDeps: true
  }
  
});
