export default  {

	/**
	 *
	 * JavaScript.
	 *
	 */
	browserify: {
		bundleOption: {
			cache: {}, packageCache: {}, fullPaths: false,
			debug: true,
			entries: './assets/js/tinymce-plugin.js',
			extensions: ['js']
		},
		dest: './dist/js/',
		filename: 'tinymce-plugin.js'

	}
};