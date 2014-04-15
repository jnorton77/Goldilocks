class AddEmailToHeartRates < ActiveRecord::Migration
  def change
    add_column :heart_rates, :email, :string
  end
end
