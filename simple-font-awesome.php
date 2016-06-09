<?php
/**
 * Plugin Name: Simple Font Awesome
 * Version: 1.0.0
 * Description: PLUGIN DESCRIPTION HERE
 * Author: YOUR NAME HERE
 * Author URI: YOUR SITE HERE
 * Plugin URI: PLUGIN SITE HERE
 * Text Domain: simple-font-awesome
 * Domain Path: /languages
 * @package simple-font-awesome
 */

define( 'SFA_FILE', __FILE__ );
define( 'SFA_PATH', dirname( __FILE__ ) );
define( 'SFA_URL', plugins_url( '', __FILE__ ) );
define( 'SFA_BASENAME', plugin_basename( __FILE__ ) );

require 'SimpleFontAwesome/Bootstrap.php';
require 'SimpleFontAwesome/TinyMCE.php';
require 'SimpleFontAwesome/ShortCode.php';
require 'SimpleFontAwesome/ShortCake.php';

add_action('plugins_loaded', function(){
	new \SimpleFontAwesome\Bootstrap();
});
