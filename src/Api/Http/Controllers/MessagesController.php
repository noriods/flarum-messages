<?php

namespace NorioDS\Messages\Api\Controllers;

use Tobscure\JsonApi\Document;
use Psr\Http\Message\ServerRequestInterface;
use Flarum\Core\Access\AssertPermissionTrait;
use NorioDS\Messages\Repositories\MessageRepository;
use Flarum\Api\Controller\AbstractCollectionController;
use NorioDS\Messages\Api\Serializer\MessageSerializer;

class MessagesController extends AbstractCollectionController
{
    use AssertPermissionTrait;

    public $serializer = MessageSerializer::class;

    /**
     * @var MessageRepository
     */
    protected $messages;
    protected $username;

    public function __construct(MessageRepository $messages)
    {
        $this->messages = $messages;
    }

    /**
     * Get the data and return the data.
     *
     * @param  ServerRequestInterface $request
     * @param  Document               $document
     * @return mixed
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        /**
         * @todo  Figure out if it's index, delete, etc. Then call THAT.
         */

        if ('GET' === $request->getMethod()) { // $request->isGet()
            return $this->index($request, $document);
        }

        // if ($request->isDelete()) {
        //     return $this->delete();
        // }

        // if ($request->isPost()) {
        //     return $this->create();
        // }

        // if ($request->isPatch()) {
        //     return $this->update();
        // }

        abort(500, 'What what?');
    }

    protected function index(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');
        // $this->username = array_get($request->getQueryParams(), 'username');
        // return $this->messages->with($this->username);
        return $this->messages->all($actor);
    }

    protected function delete()
    {
        // $this->assertAdmin($request->getAttribute('actor'));
        // $id = Arr::get($request->getQueryParams(), 'id');
        // if ($deleted = $this->messages->delete($id)) {
        //     return $deleted;
        // }
        // abort(500, 'Could not delete Field');
    }
}
