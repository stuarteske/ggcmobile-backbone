define([
    'jquery',
    'underscore',
    'backbone'
],
function ($, _, Backbone){
    var GalleryView = Backbone.View.extend({
        properties: {},
        events: {},
        initialize: function(){},
        template:_.template('<h1>Gallery View</h1>'),
        render:function (eventName) {
            $(this.el).html(this.template());

            return this;
        }
    });
    return GalleryView;
});