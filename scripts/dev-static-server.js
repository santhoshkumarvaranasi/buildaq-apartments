#!/usr/bin/env node
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 4203;

const distDir = path.join(__dirname, '..', 'dist', 'buildaq-apartments', 'browser');
const nfCacheRoot = path.join(__dirname, '..', 'node_modules', '.cache', 'native-federation');
const nfCacheDirs = [
  path.join(nfCacheRoot, 'apartments'),
  nfCacheRoot,
];

if (!fs.existsSync(distDir)) {
  console.error('Dist folder not found. Run `npm run build` first. Expected:', distDir);
  process.exit(1);
}

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  next();
});

app.get('/importmap.json', (req, res) => {
  const importmapPath = path.join(distDir, 'importmap.json');
  if (!fs.existsSync(importmapPath)) return res.status(404).send('not found');
  try {
    let im = fs.readFileSync(importmapPath, 'utf8');
    try {
      const imJson = JSON.parse(im);
      if (imJson && imJson.imports) {
        for (const key of Object.keys(imJson.imports)) {
          const val = imJson.imports[key];
          if (typeof val === 'string' && !/^(?:https?:|\/|\.\/|\.\.\/)/i.test(val)) {
            imJson.imports[key] = './' + val;
          }
        }
      }
      im = JSON.stringify(imJson);
    } catch (e) {
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(im);
  } catch (err) {
    console.error('Error serving importmap.json', err);
    res.status(500).send('error');
  }
});

app.get('/remoteEntry.json', (req, res) => {
  const manifestPath = path.join(distDir, 'remoteEntry.json');
  if (!fs.existsSync(manifestPath)) return res.status(404).send('not found');
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(manifestPath);
});

app.get('/remoteEntry.js', (req, res) => {
  const manifestPath = path.join(distDir, 'remoteEntry.json');
  if (fs.existsSync(manifestPath)) {
    try {
      res.setHeader('Content-Type', 'application/json');
      console.log('[mf-static] returning manifest JSON for /remoteEntry.js');
      return res.send(fs.readFileSync(manifestPath, 'utf8'));
    } catch (e) {
      console.warn('[mf-static] failed to return manifest JSON', e && e.message);
    }
  }
  return res.status(404).send('not found');
});

app.get('/@angular-architects/native-federation:build-notifications', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders && res.flushHeaders();

  res.write(`data: ${JSON.stringify({ type: 'connected', ts: Date.now() })}\n\n`);

  const heartbeat = setInterval(() => {
    try {
      res.write(': heartbeat\n\n');
    } catch (e) {
      clearInterval(heartbeat);
    }
  }, 15000);

  req.on('close', () => {
    clearInterval(heartbeat);
  });
});

app.get(/.*\.js$/, (req, res, next) => {
  try {
    const requested = path.basename(req.path);
    const candidatePath = path.join(distDir, requested);
    if (fs.existsSync(candidatePath)) {
      return res.sendFile(candidatePath);
    }

    for (const cacheDir of nfCacheDirs) {
      const cachedPath = path.join(cacheDir, requested);
      if (fs.existsSync(cachedPath)) {
        return res.sendFile(cachedPath);
      }
    }

    const manifestPath = path.join(distDir, 'remoteEntry.json');
    if (!fs.existsSync(manifestPath)) return next();
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    const distFiles = fs.readdirSync(distDir).filter(f => f.endsWith('.js'));

    const exposeFiles = (manifest.exposes || []).map(e => e.outFileName).filter(Boolean);
    const sharedFiles = (manifest.shared || []).map(s => s.outFileName).filter(Boolean);
    const remapCandidates = [...exposeFiles, ...sharedFiles];

    const match = remapCandidates.find(o => {
      if (!o) return false;
      const base = o.split('-')[0];
      return requested === o || requested.startsWith(base);
    });

    if (match) {
      const base = match.split('-')[0];
      const foundInDist = distFiles.find(f => f === match) || distFiles.find(f => f.startsWith(base));
      if (foundInDist) {
        console.warn('[mf-static] remapping requested', requested, '->', foundInDist);
        return res.sendFile(path.join(distDir, foundInDist));
      }

      for (const cacheDir of nfCacheDirs) {
        try {
          const cacheFiles = fs.existsSync(cacheDir)
            ? fs.readdirSync(cacheDir).filter(f => f.endsWith('.js'))
            : [];
          const foundInCache = cacheFiles.find(f => f === match) || cacheFiles.find(f => f.startsWith(base));
          if (foundInCache) {
            console.warn('[mf-static] remapping requested', requested, '->', foundInCache, '(cache)');
            return res.sendFile(path.join(cacheDir, foundInCache));
          }
        } catch (e) {
        }
      }
    }

    return res.status(404).send('not found');
  } catch (e) {
    console.error('[mf-static] error remapping js request', e && e.message);
    return next();
  }
});

app.use(express.static(distDir, { index: false }));

app.use((req, res) => {
  const index = path.join(distDir, 'index.html');
  if (fs.existsSync(index)) {
    try {
      let html = fs.readFileSync(index, 'utf8');
      const shimScript = '<script src="https://ga.jspm.io/npm:es-module-shims@1.5.12/dist/es-module-shims.js"></script>';
      const importmapPath = path.join(distDir, 'importmap.json');
      let importmapTag = '';
      if (fs.existsSync(importmapPath)) {
        try {
          let im = fs.readFileSync(importmapPath, 'utf8');
          try {
            const imJson = JSON.parse(im);
            if (imJson && imJson.imports) {
              for (const key of Object.keys(imJson.imports)) {
                const val = imJson.imports[key];
                if (typeof val === 'string' && !/^(?:https?:|\/|\.\/|\.\.\/)/i.test(val)) {
                  imJson.imports[key] = './' + val;
                }
              }
            }
            im = JSON.stringify(imJson);
          } catch (e) {
          }
          importmapTag = `<script type="importmap">${im}</script>`;
        } catch (e) {
          importmapTag = '<script type="importmap" src="/importmap.json"></script>';
        }
      } else {
        importmapTag = '<script type="importmap" src="/importmap.json"></script>';
      }
      html = html.replace(/rel="modulepreload"/gi, 'rel="preload" as="script"');
      if (!/es-module-shims/.test(html)) {
        html = html.replace(/<head[^>]*>/i, (m) => m + '\n' + shimScript + '\n' + importmapTag);
      } else if (!/type="importmap"/i.test(html)) {
        html = html.replace(/<head[^>]*>/i, (m) => m + '\n' + importmapTag);
      }
      res.setHeader('Content-Type', 'text/html');
      res.send(html);
    } catch (e) {
      console.error('Error reading index.html for injection', e);
      res.sendFile(index);
    }
  } else {
    res.status(404).send('not found');
  }
});

app.listen(port, () => {
  console.log(`MF static server listening on http://localhost:${port} serving ${distDir}`);
});
