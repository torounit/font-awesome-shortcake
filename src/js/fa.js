//
// import jQuery from 'jquery';
// var $ = jQuery;
export default class {

	constructor(jQuery) {
		this.jQuery = jQuery;
	}

	replace( content ) {
		return content.replace( /\[fa([^\]]*)\]/g, ( match, attr ) => {

			var dummyHTHL = match.replace('[fa','<i').replace(']','/>');
			console.log( this.renderHTML( this.jQuery( dummyHTHL ) ) );
			return this.renderHTML( this.jQuery( dummyHTHL ) );
		});
	}

	renderHTML( shortcodeHTML ) {
		var icon = shortcodeHTML.attr('icon');
		var size = shortcodeHTML.attr('size');
		return '<span class="fa fa-' + icon + ' fa-' + size + '" data-fa-icon="' + icon + '" data-fa-size="' + size + '"></span>';
	}

	restore( content ) {
		console.log(content);
		return content.replace( /(?:<span( [^>]+)?>)\s*(?:<\/span>)/g, ( match, attr ) => {
			if ( typeof attr != 'undefined' && attr.indexOf('data-fa') > -1 ) {
				var shortcodeHTML = this.jQuery( match );
				var icon = shortcodeHTML.attr('data-fa-icon');
				var size = shortcodeHTML.attr('data-fa-size');
				return '[fa icon="'+ icon +'" size="'+ size +'"]';
			}

			return match;
		});
	}
}
