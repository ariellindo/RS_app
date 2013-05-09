class ContactsController < ApplicationController
  respond_to :json

  # GET /contacts.json
  def index
    headers['Last-Modified'] = Time.now.httpdate
    populateDB
    @contacts = Contact.all
    respond_with @contacts
  end

  # GET /contacts/1.json
  def show
    headers['Last-Modified'] = Time.now.httpdate
    @contact = Contact.find(params[:id])
    respond_with @contact
  end

  def update
    @contact = Contact.find(params[:id])
    @contact.update_attributes(contact_type: params[:contact_type])
    respond_with @contact
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.save
    respond_with @contact
  end


  private

  #test data
  def populateDB
    if Contact.count == 0
      0.upto(5) { Contact.new(contact_type: "").save }
    end
  end
end
