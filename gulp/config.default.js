import dir from "./config.directory";

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
			entries: dir.src + '/scripts/all.js',
			extensions: ['js', 'jsx']
		},
		dest: dir.dist + '/scripts/',
		filename: 'all.js'

	}
};
