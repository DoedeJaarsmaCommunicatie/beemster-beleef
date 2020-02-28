<?php

namespace App\Providers;

use App\Helpers\WP;
use function do_action;

class RewriteServiceProvider implements ServiceProvider
{
	public function __construct () {
		do_action('bdb/routes/register/init');
		$this->boot();
	}

	public function boot(): void
	{
		do_action('bdb/routes/register/pre');
		$this->registerArrangementThemeRoutes();
		do_action('bdb/routes/register/post');
	}

	protected function registerArrangementThemeRoutes(): void
	{
		WP::base_url('routes/arrangements.php');
	}

	public function register () {}
}
