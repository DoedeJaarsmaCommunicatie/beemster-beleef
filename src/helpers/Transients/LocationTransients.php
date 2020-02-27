<?php
declare(strict_types=1);

namespace App\Helpers\Transients;


use Timber\Image;
use Timber\Helper;
use App\Models\Post;
use Timber\PostQuery;

class LocationTransients
{
	/**
	 * @param int|\Timber\Post $post
	 * @param int $limit
	 *
	 * @return bool|mixed
	 */
	public static function getSingleLocationMeta($post, int $limit = 43200)
	{
		if ($post instanceof \Timber\Post) {
			$id = $post->id;
		} else {
			$id = $post;
			$post = new Post($id);
		}

		return Helper::transient("single_location_meta_{$id}", static function () use ($post) {
			return [
				'image' => new Image($post->get_field('image')),
			];
		}, $limit);
	}

	/**
	 * @param int|\Timber\Post $post
	 * @param int $limit
	 *
	 * @return bool|mixed
	 */
	public static function getSingleLocationArrangements($post, int $limit = 43200)
	{
		if ($post instanceof \Timber\Post) {
			$id = $post->id;
		} else {
			$id = $post;
			$post = new Post($id);
		}


		return Helper::transient("single_location_arrangements_{$id}", static function () use ($post) {
			$arrangements = [];
			$posts = $post->get_field('arrangements');
			foreach ($posts as $val) {
				$arrangements []= new Post($val['id']);
			}

			return $arrangements;
		}, $limit);
	}

	public static function getAllLocations($limit = 600)
	{
		return Helper::transient('locations', static function () {
			$query = [
				'post_type' => 'location',
				'posts_per_page' => -1
			];
			$locations = [];

			$posts = new PostQuery($query, Post::class);

			foreach ($posts as $post) {
				$post->meta = static::getSingleLocationMeta($post);
				$post->arrangements = static::getSingleLocationArrangements($post);
				$locations []= $post;
			}

			return $locations;
		}, $limit);
	}
}
