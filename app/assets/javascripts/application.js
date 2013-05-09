//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone
//= require backbone_rails_sync
//= require backbone_datalink
//= require backbone/contact_app
//= require_tree .

$(function(){


	var contacts = new ContactApp.Views.ContactListView();
	contacts.setElement("#app").render();
	Backbone.history.start();


});