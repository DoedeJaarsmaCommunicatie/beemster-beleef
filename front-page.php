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

    return $themes->sort(static function (Term $first, Term $second) {
        return (int) $first->get_field('position') > (int) $second->get_field('position');
    })->toArray();
}, 3600);

$context['arrangements'] = Helper::transient('arrangements', static function () {
    return Collection::from(new PostQuery([
        'post_type' => 'arrangement',
        'posts_per_page' => 3
    ], Post::class))->toArray();
}, 600);

return Timber::render([
    Template::viewHtmlTwigFile('front-page'),
    Template::viewHtmlTwigFile('page'),
], $context);
