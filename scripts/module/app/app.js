var modulePath = "module/app/"

define([
  'jquery',
  'underscore',
  'backbone',
  modulePath + 'router', // Request router.js
  modulePath + 'config/config' // Request config.js
], 

function($, _, Backbone, Router, Config){

	var initialize = function(){
		// Pass in our Router module and call it's initialize function
		Router.initialize();
	}

	return {
		initialize: initialize
	};
});