class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def retrieve_ind_user_results
    @user = User.find(params[:id])

    render json: {
      "panic" => Response.where(:answer => "panic", :user_id => @user.id).count,
      "panic_edge" => Response.where(:answer => "panic edge", :user_id => @user.id).count,
      "learning" => Response.where(:answer => "learning", :user_id => @user.id).count,
      "comfort_edge" => Response.where(:answer => "comfort edge", :user_id => @user.id).count,
      "comfort" => Response.where(:answer => "comfort", :user_id => @user.id).count
    }
  end

  def retrieve_all_user_results
    render json: {
      "user_panic" => Response.where(:answer => "panic", :user_id => @user.id).count,
      "user_panic_edge" => Response.where(:answer => "panic edge", :user_id => @user.id).count,
      "user_learning" => Response.where(:answer => "learning", :user_id => @user.id).count,
      "user_comfort_edge" => Response.where(:answer => "comfort edge", :user_id => @user.id).count,
      "total_comfort" => Response.where(:answer => "comfort").count,
      "total_panic" => Response.where(:answer => "panic").count,
      "total_panic_edge" => Response.where(:answer => "panic edge").count,
      "total_learning" => Response.where(:answer => "learning").count,
      "total_comfort_edge" => Response.where(:answer => "comfort edge").count,
      "total_comfort" => Response.where(:answer => "comfort").count,
    }
  end
end
