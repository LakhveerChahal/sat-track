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
    log('Deleting existing build folders...');
    return del(paths.ang_dist_dest + '**', { force: true });
}

function createBuildFolder() {
    const dir = paths.ang_dist_dest;

    log(`Creating the folder if not exist  ${dir}`);
    if(!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        log('📁  folder created:', dir);
    }

    return Promise.resolve('created build folder if it was needed!');
}

function buildAngularCodeTask(cb) {
    log('building Angular code into the directory');
        return exec(`cd ${paths.ang_src} && npm install @angular/cli -g && npm install`, function (err, stdout, stderr) {
            log(stdout);
            log(stderr);
            log(err);
        });
    
}

function buildAngularCodeTask1(cb) {
    log('building Angular code into the directory');
        return exec(`ng --version`, function (err, stdout, stderr) {
            log(stdout);
            log(stderr);
            log(err);
        });
    
}

function copyAngularCodeTask() {
    log('copying Angular code into the directory');
    return src(`${paths.ang_dist_src}`)
        .pipe(dest(`${paths.ang_dist_dest}`));
}

exports.default = series(
    clean,
    createBuildFolder,
    buildAngularCodeTask,
    buildAngularCodeTask1,
    copyAngularCodeTask
);
