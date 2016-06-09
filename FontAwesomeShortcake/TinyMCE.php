<?php
/**
 * Created by PhpStorm.
 * User: torounit
 * Date: 2016/06/10
 * Time: 4:13
 */

namespace FontAwesomeShortcake;


class TinyMCE {

	/**
	 * TinyMCE constructor.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'add_mce_plugin' ) );
		add_action( 'after_setup_theme',  array( $this, 'add_editor_style' ));

	}

	public function add_editor_style() {
		add_editor_style( '//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' );
	}

	public function add_mce_plugin() {
		if ( ! current_user_can( 'edit_posts' ) && ! current_user_can( 'edit_pages' ) ) {
			return;
		}

		if ( get_user_option( 'rich_editing' ) == 'true' ) {
			add_filter( "mce_external_plugins", array( $this, 'mce_external_plugins' ) );
		}
	}

	/**
	 * @param array $plugin_array
	 *
	 * @return mixed
	 */
	public function mce_external_plugins( $plugin_array ) {

		$plugin_array['fa'] = plugin_dir_url( __FILE__ ) . 'dist/js/tinymce-plugin.js';
		return $plugin_array;
	}
}

