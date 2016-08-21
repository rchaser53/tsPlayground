const gulp = require('gulp');
const ts = require('gulp-typescript');
const project = ts.createProject({
    "noImplicitAny": false,
    "removeComments": false,
    "noLib": false,
    "target": "es6",
    "allowJs":false,
    "jsx": "react",
    "module": "ES2015",
    "experimentalDecorators": true
  });

gulp.task("tsCompile",()=>{
    return gulp.src([	"src/declare.ts",
						"typings/browser.d.ts",
						"typings/bundle.d.ts",
						'src/**/*.ts',
						'src/**/*.tsx'])
				.pipe(ts(project)).js
				.pipe(gulp.dest('./build'));
});