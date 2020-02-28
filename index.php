<?php

defined('ABSPATH') || exit(1);

use Timber\{Post, Timber};
use App\Helpers\Template;

$context         = Timber::get_context();
$context['post'] = new Post();

$templates = [
	Template::viewHtmlTwigFile('page'),
];

return Timber::render(
	apply_filters('bdb/pages/index/templates', $templates),
	apply_filters('bdb/pages/index/context', $context),
	apply_filters('bdb/pages/index/cache/expire', [3600, false])
);
