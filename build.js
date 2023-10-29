import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { join } from 'path';

const versionFile = join(__dirname, 'public/views/version.html');
const version = execSync('git rev-parse HEAD').toString().trim();

writeFileSync(versionFile, version);