<?php

namespace App;

use App\Providers\MenuServiceProvider;
use App\Providers\AssetServiceProvider;
use App\Providers\CarbonServiceProvider;
use App\Providers\ContentServiceProvider;

return [
    'providers'     => [
        MenuServiceProvider::class,
        AssetServiceProvider::class,
        CarbonServiceProvider::class,
        ContentServiceProvider::class
    ]
];
