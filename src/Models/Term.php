<?php

namespace App\Models;

use Timber\Helper;

class Term extends \Timber\Term
{
	/**
	 * Finds any WP_Post objects and converts them to Timber\Posts
	 * @param array|WP_Post $data
	 * @param string $class
	 */
	public function convert( $data ) {
		if ( is_object($data) ) {
			$data = Helper::convert_wp_object($data);
		} else if ( is_array($data) ) {
			$func = __FUNCTION__;
			foreach ( $data as &$ele ) {
				if ( is_array($ele) ) {
					$ele = $this->$func($ele);
				} else if ( is_object($ele) ) {
					$ele = Helper::convert_wp_object($ele);
				}
			}
		}
		return $data;
	}

	public function get_field( $field_name )
	{
		$value = carbon_get_term_meta($this->id, $field_name);
		$value = $this->convert($value);
		return $value;
	}
}
