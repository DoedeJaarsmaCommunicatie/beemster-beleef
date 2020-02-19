<?php

namespace App\Providers;

use Carbon_Fields\Carbon_Fields;
use App\Controllers\Meta\Pages\Home;

class CarbonServiceProvider implements ServiceProvider
{
	public function __construct ()
	{
		$this->boot();
		$this->register();
	}

	public function boot ()
	{
		if(!Carbon_Fields::is_booted()) {
			Carbon_Fields::boot();
		}
	}

	public function register ()
	{
		add_action('carbon_fields_register_fields', [Home::class, 'register']);
	}
}