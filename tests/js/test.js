import {assert} from 'chai';
import FaShortCode from '../../src/js/fa';

global.document = require('jsdom').jsdom('<html></html>');
global.window = document.defaultView;
var $ = require('jquery')(window);


describe('FaShortCode', function () {

	let shortcode = new FaShortCode($);

	describe('replace', function () {
		it('should return <span class="fa fa-wordpress fa-2x" data-fa-icon="wordpress" data-fa-size="2x"></span>', function () {
			assert.equal('<span class="fa fa-wordpress fa-2x" data-fa-icon="wordpress" data-fa-size="2x"></span>', shortcode.replace('[fa icon="wordpress" size="2x"]'));
		});
	});

	describe('restore', function () {
		it('should return [fa icon="wordpress" size="2x"]', function () {
			assert.equal(shortcode.replace('[fa icon="wordpress" size="2x"]'), '<span class="fa fa-wordpress fa-2x" data-fa-icon="wordpress" data-fa-size="2x"></span>');
		});
	});
});
