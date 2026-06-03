console.log('=== Process Environment PATH ===');
const pathList = process.env.PATH.split(require('path').delimiter);
pathList.forEach(p => console.log(p));
