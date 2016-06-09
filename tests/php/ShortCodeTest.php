<?php

/**
 * Created by PhpStorm.
 * User: torounit
 * Date: 2016/06/10
 * Time: 4:40
 */
class ShortCodeTest extends PHPUnit_Framework_TestCase {

	public function test_shortcode_output() {

		$this->assertEquals( '<span class="fa-wordpress fa-1x "></span>', do_shortcode( '[fa icon="wordpress"]' ) );
		$this->assertEquals( '<span class="fa-wordpress fa-2x "></span>', do_shortcode( '[fa icon="wordpress" size="2x"]' ) );
		$this->assertEquals( '<span class="fa-wordpress fa-3x fa-border"></span>', do_shortcode( '[fa icon="wordpress" size="3x" class="fa-border"]' ) );
	}
}
