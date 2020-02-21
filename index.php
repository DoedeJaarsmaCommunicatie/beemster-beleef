<?php

use Timber\{Post, Timber};
use App\Helpers\Template;

$context         = Timber::get_context();
$context['post'] = new Post();

return Timber::render([
	Template::viewHtmlTwigFile('page'),
],$context);
