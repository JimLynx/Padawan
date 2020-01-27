import fs from 'fs';
import ncp from 'ncp';
import path from 'path';
import { promisify } from 'util';

const mkdir = promisify(fs.mkdir);
const copy = promisify(ncp);
const read = promisify(fs.readdir);

export async function copyTemplateFiles(options) {
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false,
  });
}
export async function copyCommonFiles(options) {
  return copy(options.commonDir, options.targetDirectory, {
    clobber: false,
  });
}
export async function copyBackendFiles(options) {
  return copy(options.backendDir, options.targetDirectory, {
    clobber: false,
  });
}
export async function copyFrontendFiles(options) {
  return copy(options.frontendDir, options.targetDirectory, {
    clobber: false,
  });
}

export async function createProjectDir(options) {
  options.targetDirectory = path.resolve(
    process.cwd(),
    options.name.replace(/[^A-Z0-9]+/gi, '-').toLowerCase(),
  );
  try {
    const existing = await read(options.targetDirectory);
    console.log(existing);
    if(existing.length)
  } catch (e) {
    return mkdir(options.targetDirectory);
  }
}
