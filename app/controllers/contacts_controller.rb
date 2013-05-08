require 'pry'

class ContactsController < ApplicationController
  respond_to :json

  # GET /contacts
  # GET /contacts.json
  def index
    @contacts = Contact.all
    respond_with @contacts
  end

  # GET /contacts/last
  # GET /contacts/last.json
  def show
    begin
      if params[:id] == "last"

        @contact = Contact.last
        respond_with @contact
      end

    rescue Exception => e
      respond_with "{}"
    end
  end

  def update
    if params[:id] == "last"
      @contact = Contact.last

      @contact.update_attributes(contact_type: params[:contact_type])
      respond_with @contact
    end
  end
end
