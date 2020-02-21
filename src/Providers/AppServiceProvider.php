<?php

namespace App\Providers;

use PostTypes\{PostType, Taxonomy};

class AppServiceProvider implements ServiceProvider
{
    protected $providers;
    public function __construct()
    {
        $providers = include get_stylesheet_directory() . '/src/config/app.php';
        $this->providers = $providers['providers'];
        $this->boot();
        $this->register();
    }

    public function boot(): void
    {
        foreach ($this->providers as $provider) {
            new $provider();
        }
    }

    public function register(): void
    {
        $arrangement = new PostType([
            'name'     => 'arrangement',
            'singular' => 'Arrangement',
            'plural'   => 'Arrangementen',
            'slug'     => 'arrangement',
        ], [
            'has_archive' => true
        ]);

        $locations = new PostType([
            'name'     => 'location',
            'singular' => 'Locatie',
            'plural'   => 'Locaties',
            'slug'     => 'locatie',
        ], [
            'has_archive' => true
        ]);

        $reviews = new PostType([
            'name'     => 'review',
            'singular' => 'Review',
            'plural'   => 'Reviews',
            'slug'     => 'review',
        ], [
            'public' => false,
            'show_ui' => true
        ]);

        $theme = new Taxonomy([
            'name'     => 'theme',
            'singular' => 'Thema',
            'plural'   => 'Themas',
            'slug'     => 'thema',
        ]);

        $arrangement->taxonomy('theme');
        $arrangement->register();
        $locations->register();
        $reviews->register();
        $theme->register();
    }
}
