<?php

namespace NorioDS\Messages\Http\Controllers;

use Flarum\Forum\Controller\WebAppController;
use Flarum\Core\Access\AssertPermissionTrait;
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
}
