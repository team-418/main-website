class SessionsController < Devise::SessionsController
  clear_respond_to # do not respond to HTML
  respond_to :json

  def create
    sign_in(resource_name, warden.authenticate!(scope: resource_name, recall: "#{controller_path}#failure"))
    render status: 200, json: {success: true}, content_type: 'application/json'
  end

  def failure
    render status: 401, json: {success: false}, content_type: 'application/json'
  end
end
