class HeartRatesController < ApplicationController
  def create
    @data = params
    @heart_rate = HeartRate.create(bpm: params[:bpm], recorded_at: Datetime.strptime(params[:recorded_at],s%))
    redirect_to root_path
  end




end
