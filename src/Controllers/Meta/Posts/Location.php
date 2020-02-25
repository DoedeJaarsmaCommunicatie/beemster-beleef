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

    	return $fields;
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

        return $fields;
    }
}
