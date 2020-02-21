<?php

use App\Models\{Term, Post};
use Timber\{Timber, Helper, PostQuery};
use App\Helpers\Template;
use DusanKasan\Knapsack\Collection;

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

	$context['themes'] = Helper::transient('themes', static function () {
		$themes = Timber::get_terms([
			'taxonomy' => 'theme'
		], [], Term::class);

		$themes = Collection::from($themes);

		return $themes->sort(static function (Term $first, Term $second) {
			return (int) $first->get_field('position') > (int) $second->get_field('position');
		})->toArray();
	});
}

return Timber::render($templates, $context);
