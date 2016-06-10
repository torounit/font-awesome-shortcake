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

		add_action('wp_enqueue_scripts', function(){
			wp_enqueue_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' );
		});

		if( defined( 'SHORTCODE_UI_VERSION') ) {
			//new ShortCake();
		}

		
	}
}