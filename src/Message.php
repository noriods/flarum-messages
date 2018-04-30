<?php

namespace NorioDS\Messages;

use Flarum\Core\User;
use Flarum\Database\AbstractModel;

class Answer extends AbstractModel
{
    protected $table = 'noriods_messages';
    protected $fillable = ['message'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function sender()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function receiver()
    {
        return $this->belongsTo(User::class);
    }
}
