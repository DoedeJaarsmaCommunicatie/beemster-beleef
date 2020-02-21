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


	public function register()
	{
		add_rewrite_tag('%theme%', '([^&]+)');
		add_rewrite_tag('%time%', '([^&]+)');
		add_rewrite_rule('arrangement/page/?([0-9]{1,})/?$', 'index.php?post_type=arrangement&paged=$matches[1]', 'top');

		add_rewrite_rule('arrangement/thema/([^/]*)/tijdsduur/([^/]*)/page/?([0-9]{1,})/?', 'index.php?post_type=arrangement&theme=$matches[1]&time[]=$matches[2]&paged=$matches[3]', 'top');
		add_rewrite_rule('arrangement/thema/([^/]*)/tijdsduur/([^/]*)/?', 'index.php?post_type=arrangement&theme=$matches[1]&time[]=$matches[2]', 'top');

		add_rewrite_rule('arrangement/thema/([^/]*)/page/?([0-9]{1,})/?', 'index.php?post_type=arrangement&theme=$matches[1]&paged=$matches[2]', 'top');
		add_rewrite_rule('arrangement/thema/([^/]*)/?', 'index.php?post_type=arrangement&theme=$matches[1]', 'top');
	}

}
