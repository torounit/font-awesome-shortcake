<?php
/**
 * Created by PhpStorm.
 * User: torounit
 * Date: 2016/06/10
 * Time: 4:13
 */

namespace SimpleFontAwesome;


class Bootstrap {


	/**
	 * Bootstrap constructor.
	 */
	public function __construct() {
		new TinyMCE();
		new ShortCode();

		if( defined( 'SHORTCODE_UI_VERSION') ) {
			new ShortCake();
		}

		
	}
}