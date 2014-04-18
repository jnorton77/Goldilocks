class Addindextoheartrates < ActiveRecord::Migration
  def change
    add_index(:heart_rates, :user_id)
    add_index(:heart_rates, :bpm)
    add_index(:heart_rates, :recorded_at)
  end
end
