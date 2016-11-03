const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');
const exec = require('child_process').exec;

const paths = {
    allSrcJs: 'src/**/*.js',
    libDir: 'lib'
};

/* 'Clean' is a task that simply deletes our entire auto-generated 'lib' folder before every 'build'*/

gulp.task('clean', () => {
    return del(paths.libDir);
});

/* 'build' is where babel is called to transform all of our source files 
located under 'src' and write the transformed ones to 'lib' */

gulp.task('build', ['clean'], () => {
    return gulp.src(paths.allSrcJs)
        .pipe(babel())
        .pipe(gulp.dest(paths.libDir));
});

/* 'main' is the equivalent of running 'node .' */

gulp.task('main', ['build'], (callback) => {
    exec(`node ${paths.libDir}`, (error, stdout) => {
        console.log(stdout);
        return callback(error);
    });
});

gulp.task('watch', () => {
    gulp.watch(paths.allSrcJs, ['main']);
});

gulp.task('default', ['watch', 'main']);