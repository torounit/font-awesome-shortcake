
import FaShortCode from './fa';

/* global tinymce */
tinymce.PluginManager.add('fa', function( editor ) {

	let shortcode = new FaShortCode(window.jQuery);

	editor.on( 'BeforeSetContent', function( event ) {
		event.content = shortcode.replace( event.content );
	});

	editor.on( 'PostProcess', function( event ) {
		if ( event.get ) {
			event.content = shortcode.restore( event.content );
		}
	});
});