<?php

namespace NorioDS\Messages\Http\Controllers;

use NorioDS\Messages\Message;
use Flarum\Core\Access\AssertPermissionTrait;
use Flarum\Forum\Controller\WebAppController;
use Flarum\Core\Exception\PermissionDeniedException;
use Psr\Http\Message\ServerRequestInterface as Request;

class MessagesController extends WebAppController
{
    use AssertPermissionTrait;
    /**
     * {@inheritdoc}
     */
    public function render(Request $request)
    {
        if (! $request->getAttribute('session')->get('user_id')) {
            throw new PermissionDeniedException;
        }

        $this->assertCan($request->getAttribute('actor'), 'noriods.messages.message');

        return parent::render($request);
    }

    public function conversation($userId)
    {
        $actor = $request->getAttribute('actor');
        $messages = Message::where(function ($query) use ($userId, $actor) {
            $query
                ->whereSenderId($userId)
                ->whereReceiverId($actor->id);
        })->orWhere(function ($query) use ($userId, $actor) {
            $query->whereSenderId($actor->id)
                ->whereReceiverId($userId);
        })->latest()->limit(5);

        dd('tes');

        dd($messages);
    }
}
