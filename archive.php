<?php

use Timber\Timber;
use App\Models\Post;
use Timber\PostQuery;
use App\Helpers\Template;

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
	$context['posts'] = new PostQuery(false, Post::class);
}

return Timber::render($templates, $context);
