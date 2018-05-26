<?php

namespace NorioDS\Messages\Api\Serializer;

use Flarum\Core\Access\Gate;
use Flarum\Api\Serializer\AbstractSerializer;

class MessageSerializer extends AbstractSerializer
{
    /**
     * @var Gate
     */
    protected $gate;

    /**
     * @param \NorioDS\Messages\Access\Gate $gate
     */
    public function __construct(Gate $gate)
    {
        $this->gate = $gate;
    }

    /**
     * {@inheritdoc}
     */
    protected function getDefaultAttributes($model)
    {
        // dd($model->id);

        // $gate = $this->gate->forUser($this->actor);

        return [
            'id' => $model->id,
        ];
    }

    /**
     * @param  Message $model
     * @return string
     */
    public function getType($model)
    {
        return 'noriods-message';
    }
}
