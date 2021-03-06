class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    @responses = Response.where(email: @user.email)
    beats = HeartRate.where(email: @user.email)
    @avg_heart_rate = beats.inject(0) { |sum, beat| sum += beat.bpm.to_i }.to_f / beats.count
  end

  def avg
    beats = HeartRate.where(email: params[:email])
    @avg_heart_rate = (beats.inject(0) { |sum, beat| sum += beat.bpm.to_i }.to_f / beats.count).round(4)
    @current_heart_rate = beats.last.bpm
    @lowest_heart_rate = beats.map {|beat| beat.bpm.to_i }.min
    @highest_heart_rate = beats.map {|beat| beat.bpm.to_i }.max
    render partial: "avg_heart_rate"
  end

  def retrieve_user_responses
    @user = User.find(params[:id])
    render json: Response.where(:email => @user.email)
  end

  def retrieve_all_responses
    render json: Response.all
  end

  def retrieve_all_heart_rates
    render json: HeartRate.all
  end

  def retrieve_user_heart_rates
    @user = User.find(params[:id])
    render json: HeartRate.where(:email => @user.email).select(:created_at, :bpm)
  end
end
