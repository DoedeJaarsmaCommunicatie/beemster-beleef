<?php
namespace App\Controllers\Meta\Taxonomies;

use Carbon_Fields\{Field, Container};
use App\Controllers\Meta\Meta;

class Themes extends Meta
{

	public static function register()
	{
		Container::make('term_meta', __('Thema info'))
			->where('term_taxonomy', '=', 'theme')
			->add_fields(static::fields());
	}


	public static function fields(): array
	{
		$fields = [];

		$fields []= Field::make('text', 'position', __('Position'))
			->set_attribute('type', 'number')
			->set_default_value(1);

		$fields []= Field::make('image', 'image', __('Image'));
		$fields []= Field::make('select', 'color', __('Color'))
			->add_options([
				'is-red' => 'Rood',
				'is-green' => 'Groen',
				'is-yellow' => 'Geel',
				'is-blue' => 'Blauw',
			]);

		return apply_filters('bdb/meta/themes/information/fields', $fields);
	}
}
