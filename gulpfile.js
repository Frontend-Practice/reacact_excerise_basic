let gulp        = require('gulp');
let concat      = require('gulp-concat');
let concatCss   = require('gulp-concat-css');
let sass        = require('gulp-sass');
let rename      = require('gulp-rename');
let uglify      = require('gulp-uglify');
let uglifycss   = require('gulp-uglifycss');
let gutil       = require('gulp-util');
let gulpWatch   = require('gulp-watch');
let watchSass   = require("gulp-watch-sass");
let runSequence = require('run-sequence');
let browserSync = require('browser-sync').create();

let jsDestFolder      = './public/asset/js';
let cssDestFolder     = './public/asset/css';
let fontsDestFolder   = './public/asset/fonts';
let jsPrefixPath      = './frontend/js/';

gulp.task('frontend-theme-js', function() {
    return gulp.src([
            './frontend/js/index.js',
        ])
        .pipe(concat('frontend-theme.js'))
        .pipe(rename('frontend-theme.min.js'))
        .pipe(uglify().on('error', function(err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })) // min files and throw Exception
        .pipe(gulp.dest(jsDestFolder));
});

gulp.task('frontend-theme-css', function() {
    return gulp.src([
            './frontend/scss/style.scss',
        ])
        .pipe(sass())
        .pipe(concatCss('frontend-theme.css'))
        .pipe(rename('frontend-theme.min.css'))
        .pipe(uglifycss()) // min file
        .pipe(gulp.dest(cssDestFolder));
});

gulp.task('lib-img', function() {
    return gulp.src([
    ])
    .pipe(gulp.dest(imagesDestFolder))
})

gulp.task('lib-fonts', function() {
    return gulp.src([
    ])
    .pipe(gulp.dest(fontsDestFolder))
})

// file watch with task gulp
gulp.task('watch-style-css', function () {
    gulp.watch([
        'frontend/scss/style.scss',
        'frontend/scss/_variable.scss',
        'frontend/scss/_primary_menu.scss',
        'frontend/scss/_header.scss',
        'frontend/scss/_body_top.scss',
        'frontend/scss/_body_bottom.scss',
        'frontend/scss/_footer.scss',
        'frontend/scss/_main.scss',
    ], ['frontend-theme-css']);
});

gulp.task('watch-js', function () {
    gulp.watch([
       'frontend/js/index.js',
    ], ['frontend-theme-js']);
});

gulp.task('default', function(callback) {
    runSequence('frontend-theme-js', 'frontend-theme-css', callback);
});
