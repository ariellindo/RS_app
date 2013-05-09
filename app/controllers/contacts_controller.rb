class ContactsController < ApplicationController
  respond_to :json


  # GET /contacts
  # GET /contacts.json
  def index
    headers['Last-Modified'] = Time.now.httpdate
    @contacts = Contact.all
    respond_with @contacts
  end

  # GET /contacts/last
  # GET /contacts/last.json
  def show
    headers['Last-Modified'] = Time.now.httpdate
    begin
      @contact = Contact.find(params[:id])
      respond_with @contact
    rescue Exception => e
      respond_with "{}"
    end
  end

  def update
    @contact = Contact.last

    @contact.update_attributes(contact_type: params[:contact_type])
    respond_with @contact
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.save
    respond_with @contact
  end
end
