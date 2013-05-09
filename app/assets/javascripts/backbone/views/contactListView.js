ContactApp.Views.ContactListView = Backbone.View.extend({

	initialize: function(){
		// this.contactList = new ContactApp.Collections.contacts([{"contact_type":"Bussiness","created_at":"2013-05-08T19:02:50Z","id":3,"updated_at":"2013-05-08T19:02:50Z"},{"contact_type":"University","created_at":"2013-05-08T19:09:00Z","id":4,"updated_at":"2013-05-08T19:09:00Z"},{"contact_type":"University","created_at":"2013-05-08T19:10:28Z","id":5,"updated_at":"2013-05-08T19:10:28Z"},{"contact_type":"Friends","created_at":"2013-05-08T19:16:25Z","id":6,"updated_at":"2013-05-08T19:16:25Z"},{"contact_type":"Aquaintance","created_at":"2013-05-08T19:26:29Z","id":7,"updated_at":"2013-05-08T19:26:29Z"},{"contact_type":"","created_at":"2013-05-08T20:38:29Z","id":8,"updated_at":"2013-05-09T00:14:11Z"}]);
		this.contactList = new ContactApp.Collections.contacts();
		this.contactViews = [];

		this.contactList.on("all", this.refresh, this);
	},

	refresh: function(){
		var self = this;
		this.contactList.each(function(model){
			self.contactViews.push(new ContactApp.Views.ContactView({ model: model }));

		});

		_.each(this.contactViews, function(view){
			self.$el.append(view.render().el);
		});

	},

	render: function(){
		var self = this;
		this.contactList.fetch({reset:true});

		return this;
	}

});
