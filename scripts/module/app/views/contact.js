define([
    'jquery',
    'underscore',
    'backbone'
],
function ($, _, Backbone){
    var ContactView = Backbone.View.extend({
        properties: {},
        events: {},
        initialize: function(){},
        template:_.template('<h1>Contact View</h1>'),
        render:function (eventName) {
            $(this.el).html(this.template());

            return this;
        }
    });
    return ContactView;
});