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
console.log(`Searching for git.exe in: ${githubDesktopPath}`);

if (fs.existsSync(githubDesktopPath)) {
  const gitPath = findGit(githubDesktopPath);
  if (gitPath) {
    console.log(`Found git.exe at: ${gitPath}`);
    try {
      const status = execSync(`"${gitPath}" status`, { encoding: 'utf8' });
      console.log('=== Git Status ===');
      console.log(status);
    } catch (e) {
      console.error('Error running git status:', e.message);
    }
  } else {
    console.log('git.exe not found in GitHubDesktop folder.');
  }
} else {
  console.log('GitHubDesktop directory does not exist.');
}
