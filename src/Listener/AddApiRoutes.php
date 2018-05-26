<?php

namespace NorioDS\Messages\Listener;

use NorioDS\Messages\Api\Controllers\ChattersController;
use NorioDS\Messages\Api\Controllers\MessagesController;
use Flarum\Event\ConfigureApiRoutes;
use Illuminate\Contracts\Events\Dispatcher;

class AddApiRoutes
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureApiRoutes::class, [$this, 'routes']);
    }

    /**
     * @param ConfigureApiRoutes $routes
     */
    public function routes(ConfigureApiRoutes $routes)
    {
        /**
         * Forum side
         */
        $routes->get('/messages/chatters', 'noriods.messages.api.chatters', ChattersController::class);
        $routes->get('/messages/{username}', 'noriods.messages.api.messages', MessagesController::class);
    }
}
