<?php

namespace App;

use App\Providers\{MenuServiceProvider, AssetServiceProvider, CarbonServiceProvider, ContentServiceProvider, RewriteServiceProvider};

return [
    'providers'     => [
        MenuServiceProvider::class,
        AssetServiceProvider::class,
        CarbonServiceProvider::class,
        ContentServiceProvider::class,
	    RewriteServiceProvider::class
    ]
];
