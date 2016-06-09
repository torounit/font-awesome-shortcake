import {assert} from 'chai';
import FaShortCode from '../../src/js/fa';

import {jsdom} from 'jsdom';

const window = jsdom().defaultView;
const jquery = 'https://code.jquery.com/jquery-1.12.4.js';

describe('FaShortCode', () => {
	it('should pass when all is ok', (done) => {

		jsdom.jQueryify(window, jquery, () => {
			let shortcode = new FaShortCode(window.$);

			describe('replace', () => {
				it('should return <span class="fa fa-wordpress fa-2x" data-fa-icon="wordpress" data-fa-size="2x"><!-- fa-wordpress --></span>', () => {
					assert.equal('<span class="fa fa-wordpress fa-2x" data-fa-icon="wordpress" data-fa-size="2x"><!-- fa-wordpress --></span>', shortcode.replace('[fa icon="wordpress" size="2x"]'));
				});
			});

			describe('restore', () => {
				it('should return [fa icon="wordpress" size="2x"]', () => {
					assert.equal(shortcode.replace('[fa icon="wordpress" size="2x"]'), '<span class="fa fa-wordpress fa-2x" data-fa-icon="wordpress" data-fa-size="2x"><!-- fa-wordpress --></span>');
				});
			});

			done();
		})
	})
})



