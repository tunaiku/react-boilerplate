const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const svg2z = require('gulp-svg2z');

gulp.task('optimize_assets', () => {
  return gulp
    .src('./build/media/*')
    .pipe(
      imagemin([
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 9 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
        })
      ])
    )
    .pipe(webp())
    .pipe(svg2z())
    .pipe(gulp.dest('./build/media'));
});

gulp.task('default', gulp.parallel(['optimize_assets']));
