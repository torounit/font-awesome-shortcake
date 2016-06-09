import {assert} from 'chai';
import FaShortCode from '../../src/js/fa';

import {jsdom} from 'jsdom';

const window = jsdom().defaultView;
const jquery = 'https://code.jquery.com/jquery-1.12.4.js';

describe('FaShortCode', () => {
	it('is method jquery depend test', (done) => {

		jsdom.jQueryify(window, jquery, () => {
			let shortcode = new FaShortCode(window.$);

			describe('replace', () => {
				it('should return <span>', () => {

					assert.equal(
						'<span class="fa fa-wordpress fa-2x"><!-- [fa icon="wordpress" size="2x"] --></span>',
						shortcode.replace('[fa icon="wordpress" size="2x"]')
					);

				});

				it('should match', () => {

					assert.equal(
						'<span class="fa fa-wordpress fa-2x"><!-- [fa icon="wordpress" size="2x"] --></span>',
						shortcode.replace('[fa icon="wordpress" size="2x"]')
					);
				});
			});

			describe('restore', () => {
				it('should return shortcode', () => {
					assert.equal(
						'[fa icon="wordpress" size="2x"]',
						shortcode.restore('<span class="fa fa-wordpress fa-2x"><!-- [fa icon="wordpress" size="2x"] --></span>')
					);
				});
			});

			done();
		})
	})
})



