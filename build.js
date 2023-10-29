import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

const versionFile = 'public/views/version.html';
const version = execSync('git rev-parse HEAD').toString().trim();

writeFileSync(versionFile, version);