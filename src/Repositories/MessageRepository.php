<?php

namespace NorioDS\Messages\Repositories;

use Illuminate\Database\Eloquent\Builder;
use NorioDS\Messages\Message;
use Flarum\Core\User;

class MessageRepository
{
    protected $message;
    protected $actor;

    public function __construct(Message $message)
    {
        $this->message = $message;
    }

    /**
     * Get a new query builder for the messages table.
     *
     * @return Builder
     */
    public function query()
    {
        return $this->message->newQuery();
    }

    public function all($actor)
    {
        return $this->query()->where('sender_id', $actor->id)->orWhere('receiver_id', $actor->id)->get();
    }

    /**
     * Scope a query to only include records that are visible to a user.
     *
     * @param  Builder $query
     * @param  User    $user
     * @return Builder
     */
    // protected function scopeVisibleTo(Builder $query, User $user = null)
    // {
    //     if ($user !== null) {
    //         $query->whereSenderId($user->id)->orWhereReceiverId($user->id);
    //     }

    //     return $query;
    // }
}
