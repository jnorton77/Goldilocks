class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def retrieve_user_results
    # @user = User.find(params[:id])
    render json: Response.where(:user_id => params[:id])
  end

  def retrieve_all_results
    render json: Response.all
  end
end
