ContactApp.Views.SelectView = Backbone.View.extend({

	initialize: function(options){
		debugger;
		this.selection = options.contact_type;

		this.list = [
									{ contact_type: "Business" },
									{ contact_type: "Aquaintance" },
									{ contact_type: "Family" },
									{ contact_type: "Friends" },
									{ contact_type: "University" }
								];
	},

	template: JST['backbone/templates/selectView'],

	render: function(){

		this.$el.html(this.template({list: this.list, select: this.selection}));
		return this;
	}

});