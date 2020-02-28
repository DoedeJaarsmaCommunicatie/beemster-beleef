<?php

use Timber\Timber;
use App\Models\Post;
use App\Helpers\Template;
use App\Helpers\Transients\LocationTransients;
use App\Helpers\Transients\ArrangementTransients;

defined('ABSPATH') || exit(1);

$templates = [
	Template::viewHtmlTwigFile('single'),
	Template::viewHtmlTwigFile('page'),
];

$context = Timber::get_context();
$context['post'] = new Post();

array_unshift($templates,
	Template::viewHtmlTwigFile('single/'  . get_post_type() . '/' . $context['post']->id),
	Template::viewHtmlTwigFile('single/' . get_post_type() . '/' . $context['post']->slug),
	Template::viewHtmlTwigFile('single/' . get_post_type()),
	Template::viewHtmlTwigFile('single-' . get_post_type()),
);

if (is_singular('arrangement')) {
	$context['meta'] = ArrangementTransients::getSingleArrangementMeta($context['post']);
	$context['locations'] = ArrangementTransients::getSingleArrangementLocations($context['post']);
}

if (is_singular('location')) {
	$context['meta'] = LocationTransients::getSingleLocationMeta($context['post']);
	$context['arrangements'] = LocationTransients::getSingleLocationArrangements($context['post']);
}

Timber::render($templates, $context, [ 3600, false ]);
