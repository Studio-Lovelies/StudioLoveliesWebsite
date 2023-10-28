const { execSync } = require('child_process');
const { writeFileSync } = require('fs');
const { join } = require('path');

const versionFile = join(__dirname, 'public/views/version.html');
const version = execSync('git rev-parse HEAD').toString().trim();

writeFileSync(versionFile, version);