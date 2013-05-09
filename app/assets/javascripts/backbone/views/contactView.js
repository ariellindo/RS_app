ContactApp.Views.ContactView = Backbone.View.extend({
	tagName: 'tr',

	initialize: function(options){
		this.model = options.model;
	},

	template: JST['backbone/templates/viewContact'],

	events: {
		'click .edit': 'editContact',
		'click .save': 'saveContact',
		'click .cancel': 'cancelAction'
	},

	editContact: function(){
		this.$(".btn.save").removeClass('hide');
		this.$(".btn.cancel").removeClass('hide');
		this.$(".btn.edit").addClass('hide');
		this.$("#type").addClass('hide');

		if(!this.selView){
			this.selView = new ContactApp.Views.SelectView();
		}
		this.$(".contact-type").html(this.selView.render().el);

		return false;
	},

	saveContact: function(){
		this.$(".btn.save").addClass('hide');
		this.$(".btn.cancel").addClass('hide');
		this.$(".btn.edit").removeClass('hide');

		var selValue = this.$('#type-list').val();
		this.model.set( "contact_type", selValue );
		this.model.save();
		this.render();

		return false;
	},

	cancelAction: function(){
		this.$(".btn.save").addClass('hide');
		this.$(".btn.cancel").addClass('hide');
		this.$(".btn.edit").removeClass('hide');
		this.render();

		return false;
	},

	render: function(){
		this.$el.html(this.template( {model: this.model}));
		return this;

	}
});