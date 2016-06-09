
import gulp from 'gulp';
import { rollup } from 'rollup';
import npm      from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import requireDir from 'require-dir'




gulp.task('default', function () {
	return rollup({
		entry: 'src/js/tinymce-plugin.js',
		sourceMap: true,
		plugins: [
			//commonjs(),
			npm({
				jsnext: true,
				skip: ['jquery']
			}),
			babel({
				babelrc: false,
				presets: ['es2015-rollup']
			}),
		]
	}).then(function (bundle) {
		return bundle.write({
			format: 'iife',
			dest: 'dist/js/tinymce-plugin.js'
		});
	});
});




requireDir("./gulp/tasks", {
	recurse: true
});