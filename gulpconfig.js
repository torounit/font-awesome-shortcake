
/*
 *
 * Gulp User Settings. Override Default Settings.
 *
 */

import dir from "./gulp/config.directory";

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
			entries: dir.src + '/js/tinymce-plugin.js',
			extensions: ['js']
		},
		dest: dir.dist + '/js/',
		filename: 'tinymce-plugin.js'

	}
};