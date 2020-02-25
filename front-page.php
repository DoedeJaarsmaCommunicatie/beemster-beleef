<?php

defined('ABSPATH') || exit(1);

use App\Models\Post;
use Timber\Timber;
use App\Helpers\Template;
use App\Helpers\Transients\{ThemeTransients, ArrangementTransients};

$context         = Timber::get_context();
$context['post'] = new Post();

$context['themes'] = ThemeTransients::getCachedThemes();
$context['arrangements'] = ArrangementTransients::getFrontArrangements();

Timber::render([
    Template::viewHtmlTwigFile('front-page'),
    Template::viewHtmlTwigFile('page'),
], $context);
