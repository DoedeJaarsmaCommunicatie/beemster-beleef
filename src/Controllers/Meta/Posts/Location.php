<?php

namespace App\Controllers\Meta\Posts;

use Carbon_Fields\Field;
use Carbon_Fields\Container;
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