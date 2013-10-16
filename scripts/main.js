require.config({
    paths: {
        text: 'lib/require-plugins/text',
        domReady: 'lib/require-plugins/domReady',
        jquery: 'lib/jquery',
        bootstraps: '//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        localStorage: 'libs/backbone-plugins/backbone.localStorage-min',
        appModule: 'module/app/app'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        bootstraps: {
            deps: ['jquery'],
            exports: 'Bootstraps'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require(
    [
        'jquery',
        'underscore',
        'backbone',
        'domReady',
        'appModule'
    ],
    function($, _, Backbone, domReady, app) {
        domReady(function () {
            console.log(domReady);
            console.log(app);

            app.initialize();
        });
    }
);