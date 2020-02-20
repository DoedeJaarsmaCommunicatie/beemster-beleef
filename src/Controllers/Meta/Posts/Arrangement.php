<?php
namespace App\Controllers\Meta\Posts;

use Carbon_Fields\Field;
use Carbon_Fields\Container;
use App\Controllers\Meta\Meta;

class Arrangement extends Meta
{
	public static function register ()
	{
		Container::make('post_meta', __('Arrangement informatie'))
			->where('post_type', '=', 'arrangement')
			->add_fields(static::fields());
	}

	public static function fields (): array
	{
		$fields = [];
		$fields []= Field::make('image', 'image', __('Featured image'));

		$fields []= Field::make('text', 'price', 'Prijs')
			->set_attribute('placeholder', 'Bijvoorbeeld v.a. 23,00 p.p.')
			->set_help_text('Het euro-teken kom op de site er bij');

		$fields []= Field::make('select', 'time', __('Time'))
			->set_options([
				0 => '1,5 uur',
				1 => 'Dagdeel',
				2 => 'Hele dag'
			]);

		return $fields;
	}
}
