const fs = require('fs');
const path = require('path');

const distBrowser = path.join(__dirname, '..', 'dist', 'buildaq-apartments', 'browser');
const manifestPath = path.join(distBrowser, 'remoteEntry.json');
const outPath = path.join(distBrowser, 'remote-metadata.json');

if (!fs.existsSync(manifestPath)) {
  console.error('remoteEntry.json not found. Build first. Expected:', manifestPath);
  process.exit(1);
}

try {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const metadata = {
    name: manifest.name || 'apartments',
    exposes: manifest.exposes || [],
    shared: manifest.shared || [],
    generatedAt: new Date().toISOString(),
    version: require(path.join(__dirname, '..', 'package.json')).version || '0.0.0'
  };
  fs.writeFileSync(outPath, JSON.stringify(metadata, null, 2), 'utf8');
  console.log('Wrote remote-metadata.json ->', outPath);
} catch (err) {
  console.error('Error generating remote metadata', err);
  process.exit(1);
}
