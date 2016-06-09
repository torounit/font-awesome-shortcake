(function() {
	console.log(tinymce);
	/* global tinymce */
	tinymce.PluginManager.add('fa', function( editor ) {
		console.log("loaded!!!!!");
		function replaceFontAwesomeShortcodes( content ) {
			console.log('BeforeSetContent!');
			return content.replace( /\[fa([^\]]*)\]/g, function( match, attr ) {
				var dummyHTHL = match.replace('[','<').replace(']','>');

				return html( jQuery( dummyHTHL ), attr );
			});
		}

		function html( shortcodeHTML, attr ) {
			console.log(attr);
			var icon = shortcodeHTML.attr('icon');
			var size = shortcodeHTML.attr('size');
			return '<span class="fa fa-' + icon + ' fa-' + size + '" data-fa-icon="' + icon + '" data-fa-size="' + size + '">&nbsp;</span>';
		}

		function restoreFontAwesomeShortcodes( content ) {
			console.log(content);

			return content.replace( /(?:<span( [^>]+)?>)\s*(?:<\/span>)/g, function( match, attr ) {
				if ( typeof attr != 'undefined' && attr.indexOf('data-fa') > -1 ) {
					var shortcodeHTML = jQuery( match );
					var icon = shortcodeHTML.attr('data-fa-icon');
					var size = shortcodeHTML.attr('data-fa-size');
					return '[fa icon="'+ icon +'" size="'+ size +'"]';
				}

				return match;
			});
		}

		editor.on( 'BeforeSetContent', function( event ) {
			event.content = replaceFontAwesomeShortcodes( event.content );
		});

		editor.on( 'PostProcess', function( event ) {
			if ( event.get ) {
				event.content = restoreFontAwesomeShortcodes( event.content );
			}
		});
	});

})();