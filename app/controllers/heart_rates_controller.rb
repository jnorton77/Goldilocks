class HeartRatesController < ApplicationController
  def create
    @data = params
    puts "#{params}"
    @heart_rate = HeartRate.create(bpm: params[:bpm], email: params[:email])#, #recorded_at: Datetime.strptime(params[:recorded_at],s%))
    redirect_to root_path
  end




end
