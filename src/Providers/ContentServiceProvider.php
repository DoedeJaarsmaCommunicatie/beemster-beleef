<?php

namespace App\Providers;

use Timber\Helper;
use Twig\Environment;
use Timber\PostQuery;
use Twig\TwigFunction;
use DusanKasan\Knapsack\Collection;

class ContentServiceProvider implements ServiceProvider
{
    public function __construct()
    {
        $this->boot();
    }

    public function boot()
    {
        $this->register();
    }

    public function register()
    {
        add_filter('timber/twig', [$this, 'registerFunctions']);
        add_filter('timber/context', [$this, 'registerContext']);
    }

    /**
     * @param Environment $twig
     *
     * @return mixed
     */
    public function registerFunctions($twig)
    {
        $twig->addFunction(new TwigFunction('get_post_type_archive_link', 'get_post_type_archive_link'));
        $twig->addFunction(new TwigFunction('edit_post_link', 'edit_post_link'));
        $twig->addFunction(new TwigFunction('is_admin_bar_showing', 'is_admin_bar_showing'));
        return $twig;
    }

    /**
     * @param array $context
     *
     * @return array
     */
    public function registerContext($context)
    {
        $context['reviews'] = $this->getReviews();

        return $context;
    }

    protected function getReviews($limit = 3)
    {
        return Helper::transient('reviews', static function () use ($limit) {
            return Collection::from(new PostQuery([
                'post_type' => 'review',
                'posts_per_page' => $limit,

            ]))->toArray();
        }, 600);
    }
}
