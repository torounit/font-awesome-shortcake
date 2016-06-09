<?php
/**
 * Created by PhpStorm.
 * User: torounit
 * Date: 2016/06/10
 * Time: 5:18
 */

namespace SimpleFontAwesome;


class ShortCake {


	/**
	 * ShortCake constructor.
	 */
	public function __construct() {
		/**
		 * Register a UI for the Shortcode.
		 * Pass the shortcode tag (string)
		 * and an array or args.
		 */
		shortcode_ui_register_for_shortcode(
			'fa',
			array(
				// Display label. String. Required.
				'label'         => 'Font Awesome',
				// Icon/image for shortcode. Optional. src or dashicons-$icon. Defaults to carrot.
				'listItemImage' => 'dashicons-editor-quote',
				// Available shortcode attributes and default values. Required. Array.
				// Attribute model expects 'attr', 'type' and 'label'
				// Supported field types: text, checkbox, textarea, radio, select, email, url, number, and date.
				'attrs'         => array(
					array(
						'label'       => 'Icon',
						'attr'        => 'icon',
						'type'        => 'text',
						'placeholder' => 'wordpress',
						'description' => 'Font Awesome Icon',
					),
					array(
						'label' => 'Size',
						'attr'  => 'size',
						'type'  => 'text',
					),
				),
			)
		);
	}
}