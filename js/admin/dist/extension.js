'use strict';

System.register('noriods/flarum-messages/main', ['flarum/app'], function (_export, _context) {
    "use strict";

    var app;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }],
        execute: function () {

            app.initializers.add('noriods/flarum-messages', function () {
                // alert('Hello, admin!');
            });
        }
    };
});