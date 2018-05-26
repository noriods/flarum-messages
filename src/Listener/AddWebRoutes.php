<?php

namespace NorioDS\Messages\Listener;

use NorioDS\Messages\Http\Controllers\MessagesController;
use Flarum\Event\ConfigureForumRoutes;
use Illuminate\Contracts\Events\Dispatcher;

class AddWebRoutes
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureForumRoutes::class, [$this, 'routes']);
    }

    /**
     * @param ConfigureForumRoutes $routes
     */
    public function routes(ConfigureForumRoutes $routes)
    {
        $routes->get(
            '/messages',
            'noriods.messages',
            MessagesController::class
        );

        $routes->get(
            '/messages/{username}',
            'noriods.messages.user',
            MessagesController::class
        );
    }
}
