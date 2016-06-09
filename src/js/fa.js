//
// import jQuery from 'jquery';
// var $ = jQuery;
import Handlebars from 'handlebars';
export default class {

	constructor(jQuery) {
		this.jQuery = jQuery;
	}

	replace( content ) {
		return content.replace( /\[fa([^\]]*)\]/g, ( match, attr ) => {
			var dummyHTHL = match.replace('[fa','<i').replace(']','/>');
			return this.renderHTML( this.jQuery( dummyHTHL ).get(0), match );
		});
	}

	renderHTML( shortcodeHTML, original ) {
		let attributes = Array.prototype.reduce.call(shortcodeHTML.attributes, function(object, attribute) {
			object[attribute.name] =  attribute.value;
			return object;
		},{});
		let template = `<span class="fa fa-{{icon}} fa-{{size}}"><!-- ${original} --></span>`;
		return Handlebars.compile(template)(attributes);

	}

	restore( content ) {
		return content.replace( /(?:<span( [^>]+)?>)(\s*)(?:<\/span>)/g, ( match, attr, innerText ) => {
			console.log(innerText)
			if ( typeof attr != 'undefined' && attr.indexOf('data-fa-shortcode') > -1 ) {
				var shortcodeHTML = this.jQuery( match );
				return shortcodeHTML.attr('data-fa-shortcode');
			}

			return match;
		});
	}
}
