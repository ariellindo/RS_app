ContactApp.Views.ContactListView = Backbone.View.extend({

	initialize: function(){
		this.contactList = new ContactApp.Collections.contacts();
		this.contactViews = [];

		this.contactList.on("reset", this.refresh, this);
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
		this.contactList.fetch();

		return this;
	}

});
