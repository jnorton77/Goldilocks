class HomeController < ApplicationController

  def index
    @user = current_user
    @all_responses = Response.all.count
    @panic = 0
    @panic_edge = 0
    @learning = 0
    @comfort_edge = 0
    @comfort = 0
    render 'index'
  end

  def today
  	@all_responses = Response.where(created_at: (Time.now.to_datetime - 1.day..Time.now.to_datetime)).count
  	@panic = Response.where(answer: 1, created_at: (Time.now.to_datetime - 1.day..Time.now.to_datetime)).count
    @panic_edge = Response.where(answer: 2, created_at: (Time.now.to_datetime - 1.day..Time.now.to_datetime)).count
    @learning = Response.where(answer: 3, created_at: (Time.now.to_datetime - 1.day..Time.now.to_datetime)).count
    @comfort_edge = Response.where(answer: 4, created_at: (Time.now.to_datetime - 1.day..Time.now.to_datetime)).count
    @comfort = Response.where(answer: 5, created_at: (Time.now.to_datetime - 1.day..Time.now.to_datetime)).count
  	render 'index'
  end

  def yesterday
  	@all_responses = Response.where(created_at: (Time.now.to_datetime - 2.day..Time.now.to_datetime - 1.day)).count
  	@panic = Response.where(answer: 1, created_at: (Time.now.to_datetime - 2.day..Time.now.to_datetime - 1.day)).count
    @panic_edge = Response.where(answer: 2, created_at: (Time.now.to_datetime - 2.day..Time.now.to_datetime - 1.day)).count
    @learning = Response.where(answer: 3, created_at: (Time.now.to_datetime - 2.day..Time.now.to_datetime - 1.day)).count
    @comfort_edge = Response.where(answer: 4, created_at: (Time.now.to_datetime - 2.day..Time.now.to_datetime - 1.day)).count
    @comfort = Response.where(answer: 5, created_at: (Time.now.to_datetime - 2.day..Time.now.to_datetime - 1.day)).count
  	render 'index'
  end

  def this_week
  	@all_responses = Response.where(created_at: (Date.yesterday-7.day..Time.now.to_datetime)).count
  	@panic = Response.where(answer: 1, created_at: (Date.yesterday-7.day..Time.now.to_datetime)).count
    @panic_edge = Response.where(answer: 2, created_at: (Date.yesterday-7.day..Time.now.to_datetime)).count
    @learning = Response.where(answer: 3, created_at: (Date.yesterday-7.day..Time.now.to_datetime)).count
    @comfort_edge = Response.where(answer: 4, created_at: (Date.yesterday-7.day..Time.now.to_datetime)).count
    @comfort = Response.where(answer: 5, created_at: (Date.yesterday-7.day..Time.now.to_datetime)).count
  	render 'index'
  end

  def logout
    session[:user_id].destroy
    redirect_to root_url, notice: "You have successfully logged out."
  end

end
