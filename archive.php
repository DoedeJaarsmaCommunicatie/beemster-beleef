<?php

defined('ABSPATH') || exit(1);

use App\Models\Post;
use Timber\{Timber, PostQuery};
use App\Helpers\Template;
use App\Helpers\Transients\ThemeTransients;

$templates = [
	Template::viewHtmlTwigFile('archive'),
	Template::viewHtmlTwigFile('page'),
];
$context = Timber::get_context();

if (is_post_type_archive()) {
	array_unshift($templates, Template::viewHtmlTwigFile('archive/'. get_post_type() . '.html.twig'));
}

$context['posts'] = new PostQuery();

if (is_post_type_archive('arrangement')) {
	global $params;

	$context['title'] = __('Arrangementen', 'bdb');
	$context['posts'] = new PostQuery(false, Post::class);
	$context['selected_themes'] = explode(',' ,$params['theme']?? '');
	$context['selected_times'] = explode(',', $params['tijd']?? '');
	$context['themes'] = ThemeTransients::getCachedThemes();
}

return Timber::render($templates, $context);
