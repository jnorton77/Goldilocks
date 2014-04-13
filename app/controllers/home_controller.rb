class HomeController < ApplicationController

  def index
    @user = current_user
    @all_responses = Response.all.count
    @panic = Response.where(answer: "panic").count
    @panic_edge = Response.where(answer: "panic edge").count
    @learning = Response.where(answer: "learning").count
    @comfort_edge = Response.where(answer: "comfort edge").count
    @comfort = Response.where(answer: "comfort").count
  end

  def today
  	@all_responses = Response.where(created_at: (Date.yesterday..Date.today)).count
  	@panic = Response.where(answer: "panic", created_at: (Date.yesterday..Date.today)).count
    @panic_edge = Response.where(answer: "panic edge", created_at: (Date.yesterday..Date.today)).count
    @learning = Response.where(answer: "learning", created_at: (Date.yesterday..Date.today)).count
    @comfort_edge = Response.where(answer: "comfort edge", created_at: (Date.yesterday..Date.today)).count
    @comfort = Response.where(answer: "comfort", created_at: (Date.yesterday..Date.today)).count
  	render 'index'
  end

  def yesterday
  	@all_responses = Response.where(created_at: (Date.yesterday-1.day..Date.yesterday)).count
  	@panic = Response.where(answer: "panic", created_at: (Date.yesterday-1.day..Date.yesterday)).count
    @panic_edge = Response.where(answer: "panic edge", created_at: (Date.yesterday-1.day..Date.yesterday)).count
    @learning = Response.where(answer: "learning", created_at: (Date.yesterday-1.day..Date.yesterday)).count
    @comfort_edge = Response.where(answer: "comfort edge", created_at: (Date.yesterday-1.day..Date.yesterday)).count
    @comfort = Response.where(answer: "comfort", created_at: (Date.yesterday-1.day..Date.yesterday)).count
  	render 'index'
  end

  def this_week
  	@all_responses = Response.where(created_at: (Date.yesterday-7.day..Date.yesterday)).count
  	@panic = Response.where(answer: "panic", created_at: (Date.yesterday-7.day..Date.yesterday)).count
    @panic_edge = Response.where(answer: "panic edge", created_at: (Date.yesterday-7.day..Date.yesterday)).count
    @learning = Response.where(answer: "learning", created_at: (Date.yesterday-7.day..Date.yesterday)).count
    @comfort_edge = Response.where(answer: "comfort edge", created_at: (Date.yesterday-7.day..Date.yesterday)).count
    @comfort = Response.where(answer: "comfort", created_at: (Date.yesterday-7.day..Date.yesterday)).count
  	render 'index'
  end

  def logout
    session[:user_id].destroy
    redirect_to root_url, notice: "You have successfully logged out."
  end

end
