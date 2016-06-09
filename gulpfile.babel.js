
import gulp from 'gulp';
import { rollup } from 'rollup';
import npm      from 'rollup-plugin-npm'
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

gulp.task('default', function () {
	return rollup({
		entry: 'src/js/tinymce-plugin.js',
		sourceMap: true,
		plugins: [
			commonjs(),
			babel({
				babelrc: false,
				presets: ['es2015-rollup']
			}),
			npm({
				jsnext: true,
				skip: ['jquery']
			}),
		]
	}).then(function (bundle) {
		return bundle.write({
			format: 'iife',
			dest: 'dist/js/tinymce-plugin.js'
		});
	});
});