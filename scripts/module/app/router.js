var modulePath = "module/app/"

define([
  'jquery',
  'underscore',
  'backbone',
  modulePath+'config/config',
  modulePath+'views/index',
  modulePath+'views/gallery',
  modulePath+'views/events',
  modulePath+'views/contact'

], 

function($, _, Backbone, Config, IndexView, GalleryView, EventsView, ContactView){

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'landing',
            'events': 'events',
            'gallery': 'gallery',
            'contact': 'contact'
        },
        initialize:function () {},
        landing:function() {
            console.log('Index Loading');

            this.changePage(new IndexView());
        },
        events:function() {
            console.log('Events Loading');

            this.changePage(new EventsView());
        },
        gallery: function() {
            console.log('Gallery Loading');

            this.changePage(new GalleryView());
        },
        contact:function() {
            console.log('Contact Loading');

            this.changePage(new ContactView());
        },
        changePage:function (page) {
            $('.container').empty();
            page.render();
            $('.container').append($(page.el));
        }
    });

  var initialize = function(){
      var app_router = new AppRouter;

      Backbone.history.start();
  };
  return {
    initialize: initialize
  };

});