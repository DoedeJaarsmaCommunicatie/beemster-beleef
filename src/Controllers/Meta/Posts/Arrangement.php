<?php

namespace App\Controllers\Meta\Posts;

use Carbon_Fields\Field;
use Carbon_Fields\Container;
use App\Controllers\Meta\Meta;

class Arrangement extends Meta
{
    public static function register()
    {
        Container::make('post_meta', __('Arrangement informatie'))
            ->where('post_type', '=', 'arrangement')
            ->add_fields(static::fields());

        Container::make('post_meta', __('Arrangement locaties'))
            ->where('post_type', '=', 'arrangement')
            ->add_fields(static::locationFields());
    }

    public static function fields(): array
    {
        $fields = [];
        $fields [] = Field::make('image', 'image', __('Featured image'));

        $fields [] = Field::make('text', 'price', 'Prijs')
            ->set_attribute('placeholder', 'Bijvoorbeeld v.a. 23,00 p.p.')
            ->set_help_text('Het euro-teken kom op de site er bij');

        $fields [] = Field::make('select', 'time', __('Time'))
            ->set_options([
                '1,5 uur' => '1,5 uur',
                'Dagdeel' => 'Dagdeel',
                'Hele dag' => 'Hele dag'
            ]);

        return $fields;
    }

    public static function locationFields(): array
    {
        $fields = [];
        $fields [] = Field::make('association', 'locations', __('Locatie'))
            ->set_types([
                [
                    'type' => 'post',
                    'post_type' => 'location'
                ]
            ]);

        return $fields;
    }
}
