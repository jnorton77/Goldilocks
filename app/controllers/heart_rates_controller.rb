class HeartRatesController < ApplicationController
  def mobile_create
    @heart_rate = HeartRate.create(bpm: params[:bpm], recorded_at: params[:recorded_at])
    redirect_to root_path
  end
end
