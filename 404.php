<?php

defined('ABSPATH') || exit(1);

use Timber\{Post, Timber};
use App\Helpers\Template;
use App\Helpers\Transients\ThemeTransients;

$templates = [
	Template::viewHtmlTwigFile('error-404'),
	Template::viewHtmlTwigFile('error'),
	Template::viewHtmlTwigFile('page'),
];

$context = Timber::get_context();
$context['post'] = new Post();

$context['themes'] = ThemeTransients::getCachedThemes();

return Timber::render(
	apply_filters('bdb/pages/404/templates', $templates),
	apply_filters('bdb/pages/404/context', $context),
	apply_filters('bdb/pages/404/cache/expire', [43200, false])
);
