ContactApp.Views.SelectView = Backbone.View.extend({
	initialize: function(){
		this.list = [
									{ contact_type: "Bussiness" },
									{ contact_type: "Aquaintance" },
									{ contact_type: "Family" },
									{ contact_type: "Friends" },
									{ contact_type: "University" }
								];
	},

	template: JST['backbone/templates/selectView'],

	render: function(){
		this.$el.html(this.template({list: this.list}));
		return this;
	}

});