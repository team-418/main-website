class RegistrationsController < Devise::RegistrationsController

  clear_respond_to
  respond_to :json

  skip_before_filter :verify_authenticity_token, :only => [ :create, :cancel ]

  def sign_up_params
    params.require(:user).permit(
      :email,
      :password,
      :password_confirmation,
      :role,
      :first_name,
      :last_name
    )
  end

  def account_update_params
    params.require(:user).permit(
      :user_name,
      :email,
      :password,
      :password_confirmation,
      :current_password,
      :phone,
      :street_1,
      :street_2,
      :city,
      :state,
      :zip,
      :country
    )
  end
end
