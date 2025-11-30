const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'apartments',

  exposes: {
    './ApartmentsModule': './src/app/apartments/apartments.module.ts',
    './Component': './src/app/app.ts',
  },

  shared: shareAll({ 
    singleton: true, 
    strictVersion: false, 
    requiredVersion: 'auto',
    pinToShared: false
  }),

  // Explicitly ensure common Angular libs and rxjs are shared as singletons
  // This helps avoid duplicate Angular runtimes when a host and remote use different bundles
  sharedExplicit: {
    '@angular/core': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/common': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/router': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/cdk': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    'rxjs': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
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
