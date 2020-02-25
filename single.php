<?php

use Timber\Timber;
use App\Models\Post;
use App\Helpers\Template;
use App\Helpers\Transients\ArrangementTransients;

defined('ABSPATH') || exit(1);

$templates = [
	Template::viewHtmlTwigFile('single'),
	Template::viewHtmlTwigFile('page'),
];

$context = Timber::get_context();
$context['post'] = new Post();

if (is_singular('arrangement')) {
	$context['meta'] = ArrangementTransients::getSingleArrangementMeta($context['post']);
	$context['locations'] = ArrangementTransients::getSingleArrangementLocations($context['post']);

	array_unshift($templates,
		Template::viewHtmlTwigFile('single/arrangement/' . $context['post']->id),
		Template::viewHtmlTwigFile('single/arrangement/' . $context['post']->slug),
		Template::viewHtmlTwigFile('single/arrangement'),
		Template::viewHtmlTwigFile('single-arrangement'),
	);
}

Timber::render($templates, $context);
