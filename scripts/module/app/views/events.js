define([
    'jquery',
    'underscore',
    'backbone'
],
function ($, _, Backbone){
    var EventsView = Backbone.View.extend({
        properties: {},
        events: {},
        initialize: function(){},
        template:_.template('<h1>Events View</h1>'),
        render:function (eventName) {
            $(this.el).html(this.template());

            return this;
        }
    });
    return EventsView;
});