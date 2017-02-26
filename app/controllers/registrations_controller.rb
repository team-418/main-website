class RegistrationsController < Devise::RegistrationsController
  
  clear_respond_to
  respond_to :json

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) do |user_params|
      user_params.require(:user)
      user_params.permit({ roles: [] }, :email, :password, :password_confirmation)
    end
    devise_parameter_sanitizer.for(:account_update) do |user_params|
      user_params.permit(:user_name,
        :email, :password, :password_confirmation, :current_password, :phone, :street_1, :street_2, :city, :state, :zip, :country)
    end
  end
end
