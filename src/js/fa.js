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
		let template = `<span class="fa fa-{{icon}}{{#if size}} fa-{{size}}{{/if}}"><!-- ${original} --></span>`;
		return Handlebars.compile(template)(attributes);

	}

	restore( content ) {

		return content.replace( /(?:<span( [^>]+)?>)<!--\s*(\[.+\])\s*-->(?:<\/span>)/g, ( match, attr , original ) => {
			return original;
		});
	}
}
