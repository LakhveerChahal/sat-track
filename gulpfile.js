const { src, dest, series } = require('gulp');
const del = require('del');
const fs = require('fs');
const log = require('fancy-log');
var exec = require('child_process').exec;

const paths = {
    ang_src: 'client/dev/',
    ang_dist_src: 'client/dev/dist/satrack/**/*',
    ang_dist_dest: 'public/',
}

function clean() {
    log('[1/7] Deleting existing build folders...');
    return del(paths.ang_dist_dest + '**', { force: true });
}

function createBuildFolder() {
    const dir = paths.ang_dist_dest;

    log(`[2/7] Creating the folder if not exist  ${dir}`);
    if(!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        log('📁  folder created:', dir);
    }

    return Promise.resolve('created build folder if it was needed!');
}

function installAngularCLI(cb) {
    log('[3/7] installing Angular CLI...');
    return exec(`cd ${paths.ang_src} && npm i -g @angular/cli`, function (err, stdout, stderr) {
        log(stdout);
        log(stderr);
        cb(err);
    });
}

function installNpmDependencies(cb) {
    log('[4/7] installing dependencies...');
    return exec(`cd ${paths.ang_src} && npm i`, function (err, stdout, stderr) {
        log(stdout);
        log(stderr);
        cb(err);
    });
}

function buildAngularCodeTask(cb) {
    log('[5/7] building Angular code into the directory');
    return exec(`cd ${paths.ang_src} && ng build --prod`, function (err, stdout, stderr) {
        log(stdout);
        log(stderr);
        cb(err);
    });
}

function copyAngularCodeTask() {
    log('[6/7] copying Angular code into the directory');
    return src(`${paths.ang_dist_src}`)
        .pipe(dest(`${paths.ang_dist_dest}`));
}

function deleteNodeModules() {
    log('[7/7] Deleting Node modules to decrease bundle size...');
    return del(paths.ang_src + 'node_modules/**');
}

exports.default = series(
    clean,
    createBuildFolder,
    installAngularCLI,
    installNpmDependencies,
    buildAngularCodeTask,
    copyAngularCodeTask,
    deleteNodeModules,
);
