class HomeController < ApplicationController

  def index
    @user = current_user
    @responses = Response.all
  end

  def logout
    session[:user_id].destroy
    redirect_to root_url, notice: "You have successfully logged out."
  end

end
