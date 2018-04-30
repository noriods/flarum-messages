import Page from 'flarum/components/Page';

export default class MessagesPage extends Page {
    init() {
        super.init();
        this.loading = true;
        this.username = m.route.param('username');

        this.chatters = [
            {
                id: 2,
                name: 'V8'
            },
            {
                id: 3,
                name: 'AxeMan'
            },
        ];
        this.user = {
            id: 1,
            name: 'NorioDS'
        }
        this.messages = !this.username ? [] : [
            {
                id: 69,
                sender_id: 2,
                receiver_id: 1,
                message: "1. You up for a game of pool?"
            },
            {
                id: 6969,
                sender_id: 1,
                receiver_id: 2,
                message: "2. Cool, let's do it."
            },
            {
                id: 69,
                sender_id: 2,
                receiver_id: 1,
                message: "3. What time?"
            },
            {
                id: 6969,
                sender_id: 1,
                receiver_id: 2,
                message: "4. Na dude. Mañana!"
            },
            {
                id: 69,
                sender_id: 2,
                receiver_id: 1,
                message: "5. You up for a game of pool?"
            },
            {
                id: 6969,
                sender_id: 1,
                receiver_id: 2,
                message: "6. Cool, let's do it."
            },
            {
                id: 69,
                sender_id: 2,
                receiver_id: 1,
                message: "7. What time?"
            },
            {
                id: 6969,
                sender_id: 1,
                receiver_id: 2,
                message: "8. Na dude. Mañana!"
            },
            {
                id: 69,
                sender_id: 2,
                receiver_id: 1,
                message: "9. You up for a game of pool?"
            },
            {
                id: 6969,
                sender_id: 1,
                receiver_id: 2,
                message: "10. Cool, let's do it."
            },
            {
                id: 69,
                sender_id: 2,
                receiver_id: 1,
                message: "11. What time?"
            },
            {
                id: 6969,
                sender_id: 1,
                receiver_id: 2,
                message: "12. Na dude. Mañana!"
            }
        ];

        // default should be current user's messages
        // if the param exists, load that convo
        // this.loadUser(m.route.param('username'));
    }

    view() {
        let heading = this.username ? 'Messages with ' + this.username : 'Messages';

        let replyBox = this.messages.length == 0 ? '' : (
            <div className="MessagesReply">
                <div class="container">
                    <div class="sideNavOffset">
                        <textarea class="FormControl" placeholder="reply" />
                    </div>
                </div>
            </div>
        );

        return (
            <div className="IndexPage">
                <div className="container">
                    <nav className="IndexPage-nav sideNav">
                        <ul>
                            {this.chatters.map(chatter => {
                                return (
                                    <li key={chatter.id} data-id={chatter.id} class={"chatter " + this.owner(chatter)}>
                                        {chatter.name}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <div className="IndexPage-results sideNavOffset">
                        <div className="IndexPage-toolbar">
                            <ul className="IndexPage-toolbar-view"><li>one</li></ul>
                            <ul className="IndexPage-toolbar-action"><li>two</li></ul>
                        </div>
                        <h1>{heading}</h1>
                        <div className="MessagesList">
                            {this.messages.map(message => {
                                return (
                                    <div key={message.id} data-id={message.id} class={"message " + this.owner(message)}>
                                        {message.message}
                                    </div>
                                );
                            })}
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
                {replyBox}
            </div>
        );
    }

    owner(message) {
        return (message.sender_id == this.user.id) ? 'owner' : '';
    }

    content() {
        // let meh = m.route.param('username');
        // return m('h1', {
        //         className: 'Messages-Page'
        //     }, "Messages with " + meh
        // );
    }

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

    parseResponse(response) {
        this.messages = [];
        this.loading = false;
        m.redraw();
    }
}