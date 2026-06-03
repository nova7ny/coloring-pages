const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function findGit(dir, depth = 0) {
  if (depth > 6) return null;
  try {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      if (file.isDirectory()) {
        const found = findGit(fullPath, depth + 1);
        if (found) return found;
      } else if (file.name.toLowerCase() === 'git.exe') {
        return fullPath;
      }
    }
  } catch (e) {}
  return null;
}

const githubDesktopPath = path.join(process.env.USERPROFILE || 'C:\\Users\\Jose', 'AppData\\Local\\GitHubDesktop');

if (!fs.existsSync(githubDesktopPath)) {
  console.error('GitHub Desktop directory not found.');
  process.exit(1);
}

const gitPath = findGit(githubDesktopPath);
if (!gitPath) {
  console.error('Could not find git.exe inside GitHub Desktop.');
  process.exit(1);
}

console.log(`Using Git at: ${gitPath}`);

try {
  // 1. Stage all changes
  console.log('Staging changes (git add .)...');
  execSync(`"${gitPath}" add .`);
  
  // 2. Commit changes
  console.log('Committing changes...');
  const commitOutput = execSync(`"${gitPath}" commit -m "feat: add Cars pages and commit all local autopilot generated batches"`, { encoding: 'utf8' });
  console.log('=== Commit Result ===');
  console.log(commitOutput);
  
} catch (e) {
  console.error('Error committing changes:', e.message);
  if (e.stdout) console.log('stdout:', e.stdout);
  if (e.stderr) console.log('stderr:', e.stderr);
}
