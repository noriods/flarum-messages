<?php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->create('noriods_messages', function (Blueprint $table) {
            $table->increments('id');
            $table->text('message')->nullable();
            $table->integer('sender_id')->unsigned();
            $table->integer('receiver_id')->unsigned();
            $table->softDeletes();
            $table->timestamps();

            $table->index(['sender_id', 'receiver_id']);

            $table->foreign('sender_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->foreign('receiver_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
        });
    },

    'down' => function (Builder $schema) {
        $schema->drop('noriods_messages');
    },
];
