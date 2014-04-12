class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def retrieve_ind_user_results
    @user = User.find(params[:id])

    user_panic = Response.where(:answer => "panic", :user_id => @user.id).count
    user_panic_edge = Response.where(:answer => "panic edge", :user_id => @user.id).count
    user_learning = Response.where(:answer => "learning", :user_id => @user.id).count
    user_comfort_edge = Response.where(:answer => "comfort edge", :user_id => @user.id).count
    user_comfort = Response.where(:answer => "comfort", :user_id => @user.id).count

    render json: {
      "panic" => user_panic,
      "panic_edge" => user_panic_edge,
      "learning" => user_learning,
      "comfort_edge" => user_comfort_edge,
      "comfort" => user_comfort
    }
  end

  def retrieve_all_user_results
    total_panic = Response.where(:answer => "panic").count
    total_panic_edge = Response.where(:answer => "panic edge").count
    total_learning = Response.where(:answer => "learning").count
    total_comfort_edge = Response.where(:answer => "comfort edge").count
    total_comfort = Response.where(:answer => "comfort").count

    render json: {
      "total_panic" => total_panic,
      "total_panic_edge" => total_panic_edge,
      "total_learning" => total_learning,
      "total_comfort_edge" => total_comfort_edge,
      "total_comfort" => total_comfort
    }
  end
end
