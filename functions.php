<?php
use Timber\Timber;

include_once get_stylesheet_directory() . '/vendor/autoload.php';

add_theme_support('custom-logo');
add_theme_support('post-thumbnails');
add_theme_support('html5', ['comment-list', 'comment-form', 'search-form', 'gallery', 'caption']);

Timber::$locations = [
    get_stylesheet_directory() . '/templates/',
];

if (is_admin()) {
	Puc_v4_Factory::buildUpdateChecker(
		'https://github.com/DoedeJaarsmaCommunicatie/beemster-beleef',
		__FILE__,
		'beemster-beleef'
	);
}
