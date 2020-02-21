<?php

namespace App\Routes\Arrangements;

use Routes;

Routes::map('arrangement/', '\\App\\Routes\\Arrangements\\singleArrangementCallback');
Routes::map('arrangement/page/:pg', '\\App\\Routes\\Arrangements\\singleArrangementCallback');
Routes::map('arrangement/thema/:theme', '\\App\\Routes\\Arrangements\\singleThemeCallback');
Routes::map('arrangement/thema/:theme/page/:pg', '\\App\\Routes\\Arrangements\\singleThemeCallback');
Routes::map('arrangement/thema/:theme/tijd/:tijd', '\\App\\Routes\\Arrangements\\singleThemeTimeCallback');
Routes::map('arrangement/thema/:theme/tijd/:tijd/page/:pg', '\\App\\Routes\\Arrangements\\singleThemeTimeCallback');
Routes::map('arrangement/tijd/:tijd', '\\App\\Routes\\Arrangements\\singleTimeCallback');
Routes::map('arrangement/tijd/:tijd/page/:pg', '\\App\\Routes\\Arrangements\\singleTimeCallback');
Routes::map('arrangement/tijd/:tijd/thema/:theme', '\\App\\Routes\\Arrangements\\singleThemeTimeCallback');
Routes::map('arrangement/tijd/:tijd/thema/:theme/page/:pg', '\\App\\Routes\\Arrangements\\singleThemeTimeCallback');

function singleArrangementCallback($params) {
	$query = [
		'post_type' => 'arrangement',
		'tax_query' => [
			'relation' => 'OR',
		],
		'posts_per_page' => per_page(),
	];

	if (isset($params['pg'])){
		$query['paged'] = $params['pg'];
	}

	Routes::load('archive.php', $params, $query);
}

function singleThemeCallback($params) {
	$query = [
		'post_type' => 'arrangement',
		'tax_query' => [
			'relation' => 'OR',
		],
		'posts_per_page' => per_page(),
	];

	if (isset($params['pg'])) {
		$query['paged'] = $params['pg'];
	}

	$query['tax_query'] []= [
		'taxonomy' => 'theme',
		'field'    => 'slug',
		'terms'    => explode(',', $params['theme']),
	];

	Routes::load('archive.php', $params, $query);
}

function singleTimeCallback($params) {
	$query = [
		'post_type' => 'arrangement',
		'meta_query' => [
			'relation' => 'OR',
		],
		'posts_per_page' => per_page(),
	];

	if (isset($params['pg'])) {
		$query['paged'] = $params['pg'];
	}

	foreach (explode(',', $params['tijd']) as $param) {
		$query['meta_query'] [] = [
			'key' => '_time',
			'value' => str_replace(['_', '-'], [',', ' '], $param),
		];
	}

	Routes::load('archive.php', $params, $query);
}

function singleThemeTimeCallback($params) {
	$query = [
		'post_type' => 'arrangement',
		'meta_query' => [
			'relation' => 'OR',
		],
		'tax_query' => [
			'relation' => 'OR',
		],
		'posts_per_page' => per_page(),
	];

	if (isset($params['pg'])) {
		$query['paged'] = $params['pg'];
	}

	$query['tax_query'] []= [
		'taxonomy' => 'theme',
		'field'    => 'slug',
		'terms'    => explode(',', $params['theme']),
	];

	foreach (explode(',', $params['tijd']) as $param) {
		$query['meta_query'] [] = [
			'key' => '_time',
			'value' => str_replace(['_', '-'], [',', ' '], $param),
		];
	}

	Routes::load('archive.php', $params, $query);
}

function per_page(): int {
	return 6;
}
