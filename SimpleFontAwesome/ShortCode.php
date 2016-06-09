<?php
/**
 * Created by PhpStorm.
 * User: torounit
 * Date: 2016/06/10
 * Time: 4:16
 */

namespace SimpleFontAwesome;


class ShortCode {

	/**
	 * ShortCode constructor.
	 */
	public function __construct() {
		add_shortcode( 'fa', array( $this, 'render' ) );
	}

	/**
	 * @param $atts
	 */
	public function render( $atts ) {
		$option = shortcode_atts( array(
			'icon'  => '',
			'class' => '',
			'size'  => '1x'
		), $atts );


		return sprintf( '<span class="fa fa-%s fa-%s %s"></span>', $option['icon'], $option['size'], $option['class'] );
	}

}