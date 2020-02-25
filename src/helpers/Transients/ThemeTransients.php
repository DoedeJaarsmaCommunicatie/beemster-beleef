<?php

namespace App\Helpers\Transients;

use Timber\Helper;
use Timber\Timber;
use App\Models\Term;
use DusanKasan\Knapsack\Collection;

class ThemeTransients
{
	public static function getCachedThemes() {
		return Helper::transient('themes', static function () {
			$themes = Timber::get_terms([
				'taxonomy' => 'theme'
			], [], Term::class);

			$themes = Collection::from($themes);
			$themes = $themes->map(static function (Term $term) {
				$term->color = $term->get_field('color');
				$term->position = $term->get_field('position');
				return $term;
			});

			return $themes->sort(static function (Term $first, Term $second) {
				return (int) $first->position > (int) $second->position;
			})->toArray();
		});
	}
}
