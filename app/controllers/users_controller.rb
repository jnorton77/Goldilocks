class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    @json = { "panic" => Response.where(:answer => "panic", :user_id => @user.id).count,
     "panic edge" => Response.where(:answer => "panic edge", :user_id => @user.id).count,
     "learning" => Response.where(:answer => "learning", :user_id => @user.id).count,
     "comfort edge" => Response.where(:answer => "comfort edge", :user_id => @user.id).count,
     "comfort" => Response.where(:answer => "comfort", :user_id => @user.id).count }.to_json
  end

  def retrieve_results
    @user = User.find(params[:id])


     render json: { "panic" => Response.where(:answer => "panic", :user_id => @user.id).count,
     "panic_edge" => Response.where(:answer => "panic edge", :user_id => @user.id).count,
     "learning" => Response.where(:answer => "learning", :user_id => @user.id).count,
     "comfort_edge" => Response.where(:answer => "comfort edge", :user_id => @user.id).count,
     "comfort" => Response.where(:answer => "comfort", :user_id => @user.id).count }
  end
end
