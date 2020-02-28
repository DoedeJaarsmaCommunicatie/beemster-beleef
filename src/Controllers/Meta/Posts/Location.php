<?php

namespace App\Controllers\Meta\Posts;

use Carbon_Fields\{Field, Container};
use App\Controllers\Meta\Meta;

class Location extends Meta
{
    public static function register()
    {
        Container::make('post_meta', __('Locatie informatie'))
            ->where('post_type', '=', 'location')
            ->add_fields(static::fields());

        Container::make('post_meta', __('Locatie arrangementen'))
            ->where('post_type', '=', 'location')
            ->add_fields(static::arrangementFields());
    }

    public static function fields (): array
    {
    	$fields = [];
    	$fields [] = Field::make('image', 'image', __('Featured image'));
    	$fields [] = Field::make('media_gallery', 'gallery', __('Media Gallery'))
	                      ->set_duplicates_allowed(false)
	                      ->set_type(['image']);

    	return apply_filters('bdb/meta/location/information/fields', $fields);
    }

	public static function arrangementFields(): array
    {
        $fields = [];

        $fields [] = Field::make('association', 'arrangements', __('Arrangementen'))
            ->set_types([
                [
                    'type' => 'post',
                    'post_type' => 'arrangement'
                ]
            ]);

        return apply_filters('bdb/meta/location/arrangements/fields', $fields);
    }
}
