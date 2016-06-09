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

require 'SimpleFontAwesome/Bootstrap.php';
require 'SimpleFontAwesome/TinyMCE.php';
require 'SimpleFontAwesome/ShortCode.php';

new \SimpleFontAwesome\Bootstrap();