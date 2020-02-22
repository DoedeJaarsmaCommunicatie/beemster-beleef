<?php

use App\Models\{Post, Term};
use Timber\{Helper, Timber, PostQuery};
use App\Helpers\Template;
use DusanKasan\Knapsack\Collection;

$context         = Timber::get_context();
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

$context['arrangements'] = Helper::transient('arrangements', static function () {
    return Collection::from(new PostQuery([
        'post_type' => 'arrangement',
        'posts_per_page' => 3
    ], Post::class))->toArray();
}, 3600);

Timber::render([
    Template::viewHtmlTwigFile('front-page'),
    Template::viewHtmlTwigFile('page'),
], $context, 600);
