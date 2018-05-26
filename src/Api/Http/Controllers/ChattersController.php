<?php

namespace NorioDS\Messages\Api\Controllers;

class ChattersController extends AbstractResourceController
{
    use AssertPermissionTrait;

    /**
     * @var ChattersRepository
     */
    protected $chatters;
    public function __construct(ChattersRepository $chatters)
    {
        $this->chatters = $chatters;
    }

    /**
     * Get and return the data.
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

        // $this->assertAdmin($request->getAttribute('actor'));
        // $id = Arr::get($request->getQueryParams(), 'id');
        // if ($deleted = $this->chatters->delete($id)) {
        //     return $deleted;
        // }
        // abort(500, 'Could not delete Field');
    }
}
