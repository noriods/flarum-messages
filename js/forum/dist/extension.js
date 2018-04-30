'use strict';

System.register('noriods/flarum-messages/main', ['flarum/app', 'flarum/extend', 'flarum/components/HeaderPrimary', 'noriods/flarum-messages/MessagesPage'], function (_export, _context) {
    "use strict";

    var app, extend, HeaderPrimary, MessagesPage;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsHeaderPrimary) {
            HeaderPrimary = _flarumComponentsHeaderPrimary.default;
        }, function (_noriodsFlarumMessagesMessagesPage) {
            MessagesPage = _noriodsFlarumMessagesMessagesPage.default;
        }],
        execute: function () {

            // import User from "flarum/models/User";
            // import Message from "noriods/messages/models/Message";
            // import Model from 'flarum/Model';

            app.initializers.add('noriods-messages', function (app) {
                // app.store.models['messages-message'] = Message;

                // menu link
                extend(HeaderPrimary.prototype, 'items', function (items) {
                    items.add('messages', m(
                        'a',
                        { href: '/messages', className: 'Button Button--link' },
                        'Messages'
                    ));
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
        }
    };
});;
'use strict';

System.register('noriods/flarum-messages/MessageComposer', ['flarum/components/ComposerBody'], function (_export, _context) {
    "use strict";

    var ComposerBody, MessageComposer;
    return {
        setters: [function (_flarumComponentsComposerBody) {
            ComposerBody = _flarumComponentsComposerBody.default;
        }],
        execute: function () {
            MessageComposer = function (_ComposerBody) {
                babelHelpers.inherits(MessageComposer, _ComposerBody);

                function MessageComposer() {
                    babelHelpers.classCallCheck(this, MessageComposer);
                    return babelHelpers.possibleConstructorReturn(this, (MessageComposer.__proto__ || Object.getPrototypeOf(MessageComposer)).apply(this, arguments));
                }

                babelHelpers.createClass(MessageComposer, [{
                    key: 'init',
                    value: function init() {
                        babelHelpers.get(MessageComposer.prototype.__proto__ || Object.getPrototypeOf(MessageComposer.prototype), 'init', this).call(this);

                        this.editor.props.preview = function (e) {
                            // minimizeComposerIfFullScreen(e);

                            // m.route(app.route.discussion(this.props.discussion, 'reply'));
                        };
                    }
                }]);
                return MessageComposer;
            }(ComposerBody);

            _export('default', MessageComposer);
        }
    };
});;
'use strict';

System.register('noriods/flarum-messages/MessagesPage', ['flarum/components/Page'], function (_export, _context) {
    "use strict";

    var Page, MessagesPage;
    return {
        setters: [function (_flarumComponentsPage) {
            Page = _flarumComponentsPage.default;
        }],
        execute: function () {
            MessagesPage = function (_Page) {
                babelHelpers.inherits(MessagesPage, _Page);

                function MessagesPage() {
                    babelHelpers.classCallCheck(this, MessagesPage);
                    return babelHelpers.possibleConstructorReturn(this, (MessagesPage.__proto__ || Object.getPrototypeOf(MessagesPage)).apply(this, arguments));
                }

                babelHelpers.createClass(MessagesPage, [{
                    key: 'init',
                    value: function init() {
                        babelHelpers.get(MessagesPage.prototype.__proto__ || Object.getPrototypeOf(MessagesPage.prototype), 'init', this).call(this);
                        this.loading = true;
                        this.username = m.route.param('username');

                        this.chatters = [{
                            id: 2,
                            name: 'V8'
                        }, {
                            id: 3,
                            name: 'AxeMan'
                        }];
                        this.user = {
                            id: 1,
                            name: 'NorioDS'
                        };
                        this.messages = !this.username ? [] : [{
                            id: 69,
                            sender_id: 2,
                            receiver_id: 1,
                            message: "1. You up for a game of pool?"
                        }, {
                            id: 6969,
                            sender_id: 1,
                            receiver_id: 2,
                            message: "2. Cool, let's do it."
                        }, {
                            id: 69,
                            sender_id: 2,
                            receiver_id: 1,
                            message: "3. What time?"
                        }, {
                            id: 6969,
                            sender_id: 1,
                            receiver_id: 2,
                            message: "4. Na dude. Mañana!"
                        }, {
                            id: 69,
                            sender_id: 2,
                            receiver_id: 1,
                            message: "5. You up for a game of pool?"
                        }, {
                            id: 6969,
                            sender_id: 1,
                            receiver_id: 2,
                            message: "6. Cool, let's do it."
                        }, {
                            id: 69,
                            sender_id: 2,
                            receiver_id: 1,
                            message: "7. What time?"
                        }, {
                            id: 6969,
                            sender_id: 1,
                            receiver_id: 2,
                            message: "8. Na dude. Mañana!"
                        }, {
                            id: 69,
                            sender_id: 2,
                            receiver_id: 1,
                            message: "9. You up for a game of pool?"
                        }, {
                            id: 6969,
                            sender_id: 1,
                            receiver_id: 2,
                            message: "10. Cool, let's do it."
                        }, {
                            id: 69,
                            sender_id: 2,
                            receiver_id: 1,
                            message: "11. What time?"
                        }, {
                            id: 6969,
                            sender_id: 1,
                            receiver_id: 2,
                            message: "12. Na dude. Mañana!"
                        }];

                        // default should be current user's messages
                        // if the param exists, load that convo
                        // this.loadUser(m.route.param('username'));
                    }
                }, {
                    key: 'view',
                    value: function view() {
                        var _this2 = this;

                        var heading = this.username ? 'Messages with ' + this.username : 'Messages';

                        var replyBox = this.messages.length == 0 ? '' : m(
                            'div',
                            { className: 'MessagesReply' },
                            m(
                                'div',
                                { 'class': 'container' },
                                m(
                                    'div',
                                    { 'class': 'sideNavOffset' },
                                    m('textarea', { 'class': 'FormControl', placeholder: 'reply' })
                                )
                            )
                        );

                        return m(
                            'div',
                            { className: 'IndexPage' },
                            m(
                                'div',
                                { className: 'container' },
                                m(
                                    'nav',
                                    { className: 'IndexPage-nav sideNav' },
                                    m(
                                        'ul',
                                        null,
                                        this.chatters.map(function (chatter) {
                                            return m(
                                                'li',
                                                { key: chatter.id, 'data-id': chatter.id, 'class': "chatter " + _this2.owner(chatter) },
                                                chatter.name
                                            );
                                        })
                                    )
                                ),
                                m(
                                    'div',
                                    { className: 'IndexPage-results sideNavOffset' },
                                    m(
                                        'div',
                                        { className: 'IndexPage-toolbar' },
                                        m(
                                            'ul',
                                            { className: 'IndexPage-toolbar-view' },
                                            m(
                                                'li',
                                                null,
                                                'one'
                                            )
                                        ),
                                        m(
                                            'ul',
                                            { className: 'IndexPage-toolbar-action' },
                                            m(
                                                'li',
                                                null,
                                                'two'
                                            )
                                        )
                                    ),
                                    m(
                                        'h1',
                                        null,
                                        heading
                                    ),
                                    m(
                                        'div',
                                        { className: 'MessagesList' },
                                        this.messages.map(function (message) {
                                            return m(
                                                'div',
                                                { key: message.id, 'data-id': message.id, 'class': "message " + _this2.owner(message) },
                                                message.message
                                            );
                                        }),
                                        m('div', { 'class': 'clearfix' })
                                    )
                                )
                            ),
                            replyBox
                        );
                    }
                }, {
                    key: 'owner',
                    value: function owner(message) {
                        return message.sender_id == this.user.id ? 'owner' : '';
                    }
                }, {
                    key: 'content',
                    value: function content() {}
                    // let meh = m.route.param('username');
                    // return m('h1', {
                    //         className: 'Messages-Page'
                    //     }, "Messages with " + meh
                    // );


                    // load(user) {
                    //     // app.request({
                    //     //     method: 'GET',
                    //     //     url: app.forum.attribute('apiUrl') + '/masquerade/profile/' + user.id(),
                    //     // }).then(
                    //     //     this.parseResponse.bind(this)
                    //     // );
                    // }

                    // show(user) {
                    //     // this.load(user);

                    //     // super.show(user);
                    // }

                }, {
                    key: 'parseResponse',
                    value: function parseResponse(response) {
                        this.messages = [];
                        this.loading = false;
                        m.redraw();
                    }
                }]);
                return MessagesPage;
            }(Page);

            _export('default', MessagesPage);
        }
    };
});