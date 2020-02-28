<?php

defined('ABSPATH') || exit(1);

use App\Models\Post;
use Timber\{Timber, PostQuery};
use App\Models\Term;
use App\Helpers\Template;
use App\Helpers\Transients\ThemeTransients;
use App\Helpers\Transients\LocationTransients;

$templates = [
	Template::viewHtmlTwigFile('archive'),
	Template::viewHtmlTwigFile('page'),
];

$context = Timber::get_context();

if (is_post_type_archive()) {
	array_unshift(
		$templates,
		Template::viewHtmlTwigFile('archive/'. get_post_type())
	);
}

$context['posts'] = new PostQuery();

if (is_post_type_archive('arrangement')) {
	global $params;

	$context['title'] = apply_filters('bdb/pages/archives/arrangements/content/title', __('Arrangementen', 'bdb'));
	$context['posts'] = new PostQuery(false, Post::class);
	$context['selected_themes'] = explode(',' ,$params['theme']?? '');
	$context['selected_times'] = explode(',', $params['tijd']?? '');
	$context['themes'] = ThemeTransients::getCachedThemes();

	if (count($context['selected_themes']) === 1) {
		$context['selected_theme'] = new Term(get_term_by('slug', $context['selected_themes'][0], 'theme'));
	}
}

if (is_post_type_archive('location')) {
	$context['title'] = apply_filters('bdb/pages/archives/locations/content/title', __('Highlights', 'bdb'));
	$context['posts'] = LocationTransients::getAllLocations();
}

return Timber::render(
	apply_filters('bdb/pages/archives/templates', $templates),
	apply_filters('bdb/pages/archives/context', $context),
	apply_filters('bdb/pages/archives/cache/expire', [3600, false])
);
