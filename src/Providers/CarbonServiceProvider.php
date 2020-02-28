<?php

namespace App\Providers;

use Carbon_Fields\Carbon_Fields;
use App\Controllers\Meta\Pages\Home;
use App\Controllers\Meta\Posts\Location;
use App\Controllers\Meta\Taxonomies\Themes;
use App\Controllers\Meta\Posts\Arrangement;
use function do_action;

class CarbonServiceProvider implements ServiceProvider
{
    public function __construct()
    {
        $this->boot();
        $this->register();
    }

    public function boot()
    {
        if (!Carbon_Fields::is_booted()) {
            Carbon_Fields::boot();
        }
    }

    public function register()
    {
        add_action('carbon_fields_register_fields', [Home::class, 'register']);
        add_action('carbon_fields_register_fields', [Themes::class, 'register']);
        add_action('carbon_fields_register_fields', [Arrangement::class, 'register']);
        add_action('carbon_fields_register_fields', [Location::class, 'register']);
	    do_action('bdb/carbon_fields/registered');
    }
}
