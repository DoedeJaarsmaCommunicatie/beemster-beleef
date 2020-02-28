<?php
declare(strict_types=1);

namespace App\Helpers\Transients;

use Timber\Image;
use Timber\Helper;
use App\Models\Post;
use Timber\PostQuery;
use DusanKasan\Knapsack\Collection;

class ArrangementTransients
{
	/**
	 * @param int|\Timber\Post $post
	 * @param int $limit default = 43200
	 *
	 * @return bool|mixed
	 */
	public static function getSingleArrangementMeta($post, int $limit = 43200)
	{
		if ($post instanceof \Timber\Post) {
			$id = $post->id;
		} else {
			$id = $post;
			$post = new Post($id);
		}

		return Helper::transient("single_arrangement_meta_{$id}", static function () use ($post) {
			return [
				'image' => new Image($post->get_field('image')),
				'price' => $post->get_field('price'),
				'time' => $post->get_field('time'),
				'gallery' => $post->get_field('gallery')
			];
		}, $limit);
	}

	/**
	 * @param int|\Timber\Post $post
	 * @param int $limit
	 *
	 * @return bool|mixed
	 */
	public static function getSingleArrangementLocations($post, int $limit = 43200)
	{
		if ($post instanceof \Timber\Post) {
			$id = $post->id;
		} else {
			$id = $post;
			$post = new Post($id);
		}

		return Helper::transient("single_arrangement_locations_{$id}", static function () use ($post) {
			$locations = [];
			$posts = $post->get_field('locations');

			foreach ($posts as $value) {
				$location = new Post($value['id']);

				$location->meta = LocationTransients::getSingleLocationMeta($location);
				$location->arrangements = LocationTransients::getSingleLocationArrangements($location);
				$locations []= $location;
			}

			return $locations;
		}, $limit);
	}

	/**
	 * @return bool|mixed
	 */
	public static function getFrontArrangements()
	{
		return Helper::transient('arrangements', static function () {
			return Collection::from(new PostQuery([
				'post_type' => 'arrangement',
				'posts_per_page' => 3
			], Post::class))->toArray();
		}, 3600);
	}
}
