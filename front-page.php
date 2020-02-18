<?php

use Timber\Post;
use Timber\Timber;
use App\Helpers\Template;

$context         = Timber::get_context();
$context['post'] = new Post();

return Timber::render([
	Template::viewHtmlTwigFile('front-page'),
	Template::viewHtmlTwigFile('page'),
],$context);
