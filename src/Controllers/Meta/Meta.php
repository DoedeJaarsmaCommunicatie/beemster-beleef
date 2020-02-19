<?php
namespace App\Controllers\Meta;

abstract class Meta
{
	abstract public static function register();
	public static function fields(): array { return []; }

}
