class ModifyTableHeart < ActiveRecord::Migration
  def change
    change_column :heart_rates, :bpm, :string
    change_column :heart_rates, :user_id, :string
    change_column :heart_rates, :recorded_at, :string
  end
end
