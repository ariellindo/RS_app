ContactApp.Views.ContactView = Backbone.View.extend({

	initialize: function(options){
		this.model = options.model;
		this.listenTo(this.model, 'change', this.refreshContact);
	},

	template: JST['backbone/templates/viewContact'],

	events: {
		'click .edit': 'editContact',
		'click .save': 'saveContact',
		'click .cancel': 'cancelAction'
	},

	refreshContact: function(model){
		this.$('#contact-type').html(model.get('contact_type'));
	},

	editContact: function(){
		this.$(".btn.save").removeClass('hide');
		this.$(".btn.cancel").removeClass('hide');
		this.$(".btn.edit").addClass('hide');
		this.$("#type").addClass('hide');

		if(!this.selView){
			this.selView = new ContactApp.Views.SelectView();
		}
		this.$("#contact-type").html(this.selView.render().el);
	},

	saveContact: function(){
		this.$(".btn.save").addClass('hide');
		this.$(".btn.cancel").addClass('hide');
		this.$(".btn.edit").removeClass('hide');

		var selValue = this.$('#type-list').val();

			debugger;
		if(_.isEmpty(this.model.attributes)){
			newModel = ContactApp.Models.contact({newVal: 'new'});
			newModel.save({contact_type: selValue});
		}
		else{
			this.model.save({contact_type: selValue} );
		}
	},

	cancelAction: function(){
		this.$(".btn.save").addClass('hide');
		this.$(".btn.cancel").addClass('hide');
		this.$(".btn.edit").removeClass('hide');
		this.render();
	},

	render: function(){
		self = this;
		this.$el.html(this.template());
		this.model.fetch();

		if(_.isEmpty(this.model.attributes)){
			this.$("#contact-type").html('Unset');
		}
		else{
			this.$("#contact-type").html(this.model.get('contact_type'));
		}
		return this;

	}
});