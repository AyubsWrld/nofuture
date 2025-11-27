// patch-use-sync-external-store.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'node_modules/use-sync-external-store/shim/index.js');

if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(
    /if \(typeof module !== 'undefined'\)/g,
    "if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')"
  );
  fs.writeFileSync(filePath, content);
  console.log('✓ Patched use-sync-external-store');
} else {
  console.log('⚠ use-sync-external-store not found, skipping patch');
}
