import app from 'flarum/app';
import { extend } from 'flarum/extend';
import HeaderPrimary from 'flarum/components/HeaderPrimary';
import MessagesPage from 'noriods/flarum-messages/MessagesPage';

// import User from "flarum/models/User";
// import Message from "noriods/messages/models/Message";
// import Model from 'flarum/Model';

app.initializers.add('noriods-messages', app => {
    // app.store.models['messages-message'] = Message;

    // menu link
    extend(HeaderPrimary.prototype, 'items', function(items) {
        items.add('messages', <a href="/messages" className="Button Button--link">Messages</a>);
    });

    app.routes['noriods-messages'] = {
        path: '/messages',
        component: MessagesPage.component()
    };

    app.routes['noriods-messages-user'] = {
        path: '/messages/:username',
        component: MessagesPage.component()
    };
});
