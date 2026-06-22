import fs from 'fs';
import path from 'path';

const srcDir = '.trendrush';
const destDir = '.';

const files = fs.readdirSync(srcDir);
for (const file of files) {
  if (file === '.git') continue;
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(destDir, file);
  fs.cpSync(srcPath, destPath, { recursive: true });
}
console.log('Done!');
