ContactApp.Models.contact = Backbone.Model.extend({
	default: {
		contact_type: 'Aquaintace'
	}
});

ContactApp.Collections.contacts = Backbone.Collection.extend({
	model: ContactApp.Models.contact,
	url: '/contacts',

	parse: function(response){
		return response;
	}

});