class ResponsesController < ApplicationController
  def index
  end

  def create
    @response = Response.create(answer: params[:response][:answer], user_id: current_user.id)
    redirect_to root_path
  end

  def mobile_create
    @mobile_response = Response.create(answer: params[:answer], email: params[:email], cohort: params[:cohort])
    redirect_to root_path
  end
end
