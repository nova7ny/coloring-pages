const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), 'scripts');
fs.readdirSync(dir).forEach(file => {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  if (content.toLowerCase().includes('.pdf')) {
    console.log('File:', file);
    content.split('\n').forEach((line, idx) => {
      if (line.toLowerCase().includes('pdf')) {
        console.log(`  Line ${idx+1}: ${line.trim()}`);
      }
    });
  }
});
