<?php

namespace App\Providers;

use App\Helpers\WP;

class RewriteServiceProvider implements ServiceProvider
{
	public function __construct () {
		$this->boot();
	}

	public function boot(): void
	{
		$this->registerArrangementThemeRoutes();
	}

	protected function registerArrangementThemeRoutes(): void
	{
		WP::base_url('routes/arrangements.php');
	}

	public function register () {}
}
