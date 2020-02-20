<?php

namespace App\Controllers\Meta\Pages;

use Carbon_Fields\Field;
use Carbon_Fields\Container;
use App\Controllers\Meta\Meta;

class Home extends Meta
{
	public static function register()
	{
		Container::make('post_meta', __('Homepage settings'))
			->where('post_type', '=', 'page')
			->where('post_id', '=', get_option('page_on_front'))
			->add_tab(__('Header'), static::HeaderTab())
			->add_tab(__('Button'), static::ButtonTab());
	}

	public static function HeaderTab(): array
	{
		$fields = [];

		$fields [] = Field::make('text', 'header_title', __('Title'))
			->set_default_value('De leukste activiteiten voor groepen');
		$fields [] = Field::make('image', 'header_image', __('Image'));

		return $fields;
	}

	public static function ButtonTab(): array
	{
		$fields = [];

		$fields [] = Field::make('text', 'button_title', __('Title'))
			->set_default_value('Organiseer je dagje uit in de beemster');

		$fields [] = Field::make('image', 'button_image', __('Image'));

		return $fields;
	}


}
