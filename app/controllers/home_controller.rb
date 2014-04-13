class HomeController < ApplicationController

  def index
    @user = current_user
    @all_responses = Response.all.count
    @panic = Response.where(answer: 1).count
    @panic_edge = Response.where(answer: 2).count
    @learning = Response.where(answer: 3).count
    @comfort_edge = Response.where(answer: 4).count
    @comfort = Response.where(answer: 5).count
  end

  def today
  	@all_responses = Response.where(created_at: (Date.yesterday..Date.today)).count
  	@panic = Response.where(answer: 1, created_at: (Date.yesterday..Date.today)).count
    @panic_edge = Response.where(answer: 2, created_at: (Date.yesterday..Date.today)).count
    @learning = Response.where(answer: 3, created_at: (Date.yesterday..Date.today)).count
    @comfort_edge = Response.where(answer: 4, created_at: (Date.yesterday..Date.today)).count
    @comfort = Response.where(answer: 5, created_at: (Date.yesterday..Date.today)).count
  	render 'index'
  end

  def yesterday
  	@all_responses = Response.where(created_at: (Date.yesterday-1.day..Date.yesterday)).count
  	@panic = Response.where(answer: 1, created_at: (Date.yesterday-1.day..Date.yesterday)).count
    @panic_edge = Response.where(answer: 2, created_at: (Date.yesterday-1.day..Date.yesterday)).count
    @learning = Response.where(answer: 3, created_at: (Date.yesterday-1.day..Date.yesterday)).count
    @comfort_edge = Response.where(answer: 4, created_at: (Date.yesterday-1.day..Date.yesterday)).count
    @comfort = Response.where(answer: 5, created_at: (Date.yesterday-1.day..Date.yesterday)).count
  	render 'index'
  end

  def this_week
  	@all_responses = Response.where(created_at: (Date.yesterday-7.day..Date.yesterday)).count
  	@panic = Response.where(answer: 1, created_at: (Date.yesterday-7.day..Date.yesterday)).count
    @panic_edge = Response.where(answer: 2, created_at: (Date.yesterday-7.day..Date.yesterday)).count
    @learning = Response.where(answer: 3, created_at: (Date.yesterday-7.day..Date.yesterday)).count
    @comfort_edge = Response.where(answer: 4, created_at: (Date.yesterday-7.day..Date.yesterday)).count
    @comfort = Response.where(answer: 5, created_at: (Date.yesterday-7.day..Date.yesterday)).count
  	render 'index'
  end

  def logout
    session[:user_id].destroy
    redirect_to root_url, notice: "You have successfully logged out."
  end

end
