class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def retrieve_user_responses
    @user = User.find(params[:id])
    render json: Response.where(:user_id => params[:id])
  end

  def retrieve_all_responses
    render json: Response.all
  end

  def retrieve_all_heart_rates
    render json: HeartRate.all
  end

  def retrieve_user_heart_rates
    @user = User.find(params[:id])
    render json: HeartRate.where(:user_id => params[:id])
  end
end
