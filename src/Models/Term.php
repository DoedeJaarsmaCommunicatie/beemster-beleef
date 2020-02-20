<?php

namespace App\Models;

use Timber\Term as TaxTerm;

class Term extends TaxTerm
{
	public function get_field( $field_name ) {
		return carbon_get_post_meta($this->id, $field_name);
	}
}
