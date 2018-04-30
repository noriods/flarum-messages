<?php

namespace NorioDS\Messages;

use Flarum\Core\User;
use Flarum\Database\AbstractModel;

class Message extends AbstractModel
{
    protected $table = 'noriods_messages';
    protected $fillable = ['message'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function sender()
    {
        return $this->hasOne(User::class, 'id', 'sender_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function receiver()
    {
        return $this->hasOne(User::class, 'id', 'receiver_id');
    }
}
