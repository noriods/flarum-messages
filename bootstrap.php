<?php

/**
 *  This file is part of noriods/flarum-messages.
 *
 *  Copyright (c) 2018 .
 *
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 */

namespace NorioDS\Messages;

use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->subscribe(Listener\AddClientAssets::class);
    $events->subscribe(Listener\AddWebRoutes::class);
    $events->subscribe(Listener\AddApiRoutes::class);
};
