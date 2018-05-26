<?php

namespace NorioDS\Messages;

use Flarum\Core\User;
use Flarum\Database\AbstractModel;

/**
 * @property int $id
 * @property string $message
 * @property Flarum\Core\User $sender
 * @property Flarum\Core\User $receiver
 * @property Carbon $deleted_at
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class Message extends AbstractModel
{
    protected $table = 'noriods_messages';
    protected $fillable = ['message'];

    public $timestamps = true;

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
