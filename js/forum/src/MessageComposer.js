import ComposerBody from 'flarum/components/ComposerBody';

export default class MessageComposer extends ComposerBody {
    init() {
        super.init();

        this.editor.props.preview = e => {
            // minimizeComposerIfFullScreen(e);

            // m.route(app.route.discussion(this.props.discussion, 'reply'));
        };
    }
}