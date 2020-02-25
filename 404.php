<?php

defined('ABSPATH') || exit(1);

use Timber\{Post, Timber};
use App\Helpers\Template;
use App\Helpers\Transients\ThemeTransients;

$context = Timber::get_context();
$context['post'] = new Post();

$context['themes'] = ThemeTransients::getCachedThemes();

return Timber::render([
	Template::viewHtmlTwigFile('error-404'),
	Template::viewHtmlTwigFile('error'),
	Template::viewHtmlTwigFile('page'),
],$context, 43200);
