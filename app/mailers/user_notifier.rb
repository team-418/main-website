class UserNotifier < ApplicationMailer
  default :from => 'josiah@oalva.com'

  def send_signup_email(user)
    @user = user
    mail( to: @user.email, subject: 'Test e-mail' )
  end
end
