<?php

use Timber\{Helper, Post, Timber};
use App\Models\Term;
use App\Helpers\Template;
use DusanKasan\Knapsack\Collection;

$context = Timber::get_context();
$context['post'] = new Post();

$context['themes'] = Helper::transient('themes', static function () {
	$themes = Timber::get_terms([
		'taxonomy' => 'theme'
	], [], Term::class);

	$themes = Collection::from($themes);
	$themes = $themes->map(static function (Term $term) {
		$term->color = $term->get_field('color');
		$term->position = $term->get_field('position');
		return $term;
	});

	return $themes->sort(static function (Term $first, Term $second) {
		return (int) $first->position > (int) $second->position;
	})->toArray();
});

return Timber::render([
	Template::viewHtmlTwigFile('error-404'),
	Template::viewHtmlTwigFile('error'),
	Template::viewHtmlTwigFile('page'),
],$context, 43200);
