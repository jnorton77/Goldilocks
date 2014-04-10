class ResponsesController < ApplicationController
  def index
  end

  def create
    @response = Response.create(answer: params[:response][:answer], user_id: current_user.id)
    redirect_to :back
  end
end
