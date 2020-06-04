<?php

defined('ABSPATH') || exit(1);

use App\Models\Post;
use Timber\Timber;
use App\Helpers\Template;
use App\Helpers\Transients\{ThemeTransients, ArrangementTransients};

$templates = [
	Template::viewHtmlTwigFile('front-page'),
	Template::viewHtmlTwigFile('page'),
];

$context         = Timber::get_context();
$context['post'] = new Post();

$context['themes'] = ThemeTransients::getCachedThemes();
$context['arrangements'] = ArrangementTransients::getFrontArrangements();

Timber::render(
	apply_filters('bdb/pages/front-page/templates', $templates),
	apply_filters('bdb/pages/front-page/context', $context),
	apply_filters('bdb/pages/front-page/cache/expire', false)
);
