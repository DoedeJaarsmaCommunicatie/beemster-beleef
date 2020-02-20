<?php

use App\Models\Post;
use Timber\Timber;
use App\Models\Term;
use App\Helpers\Template;

$context         = Timber::get_context();
$context['post'] = new Post();
$context['themes'] = Timber::get_terms([
	'taxonomy' => 'theme',
	'meta_query' => [
		'key' => 'position',
		'type' => 'NUMERIC'
	],
	'orderby' => 'meta_value_num',
	'order' => 'ASC'
], [], Term::class);

return Timber::render([
	Template::viewHtmlTwigFile('front-page'),
	Template::viewHtmlTwigFile('page'),
],$context);
