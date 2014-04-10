class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  skip_before_filter :authenticate_user!

# The callback should be implemented as an action with the same name as the provider.
# Here, we'll use the alias_method command so we only need to write one method ('all') to
# account for all our omniauth options.

  alias_method :facebook, :all
  #alias_method :twitter, :all
  #alias_method :linkedin, :all
  alias_method :twitter, :all
  #alias_method :passthru, :all
  alias_method :google_oauth2, :all
  #alias_method :dropbox, :all

  def facebook
    # You need to implement the method below in your model (e.g. app/models/user.rb)
    @user = User.find_for_facebook_oauth(request.env["omniauth.auth"])

    if @user.persisted?
      sign_in_and_redirect @user, :event => :authentication #this will throw and error if @user is not activated
      set_flash_message(:notice, :success, :kind => "Facebook") if is_navigational_format?
    else
      session["devise.facebook_data"] = request.env["omniauth.auth"] #the right side of this equation should have all our data from FB
      redirect_to new_user_registration_url
    end
  end

  # def all
  #   p env["omniauth.auth"]
  #   @user = User.from_omniauth(env["omniauth.auth"], current_user)
  #   if @user.persisted?
  #     flash[:notice] = "Connected!"
  #     sign_in_and_redirect(user)
  #   else
  #     session["devise.user_attributes"] = user.attributes
  #     redirect_to new_user_registration_url
  #   end
  # end

  def failure
    redirect_to subjects_path , :flash => { :error => "This did not work out! Try again" }
    return
    #and delegate to super.
    #super
  end

  def sign_in_and_redirect(resource_or_scope, *args)
    options  = args.extract_options!
    scope    = Devise::Mapping.find_scope!(resource_or_scope)
    resource = args.last || resource_or_scope
    sign_in(scope, resource, options)
    redirect_to edit_user_registration_path
  end

end
