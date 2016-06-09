<?php
/**
 * Plugin Name: Font-awesome-shortcake
 * Version: 0.1-alpha
 * Description: PLUGIN DESCRIPTION HERE
 * Author: YOUR NAME HERE
 * Author URI: YOUR SITE HERE
 * Plugin URI: PLUGIN SITE HERE
 * Text Domain: font-awesome-shortcake
 * Domain Path: /languages
 * @package Font-awesome-shortcake
 */


class Font_Awesome_Shortcake {


	/**
	 * Font_Awesome_Shortcake constructor.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'add_mce_plugin' ) );
		add_action( 'after_setup_theme', function(){
			add_editor_style( '//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' );
		});

	}

	public function add_mce_plugin() {
		if ( ! current_user_can( 'edit_posts' ) && ! current_user_can( 'edit_pages' ) ) {
			return;
		}
		//リッチエディタの時だけ追加
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
		//プラグイン関数名＝ファイルの位置
		$plugin_array['fa'] = plugin_dir_url( __FILE__ ) . 'dist/js/tinymce-plugin.js';

		return $plugin_array;
	}
}

new Font_Awesome_Shortcake();