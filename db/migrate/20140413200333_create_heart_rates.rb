class CreateHeartRates < ActiveRecord::Migration
  def change
    create_table :heart_rates do |t|
      t.string :user_id
      t.string :bpm
      t.string :recorded_at

      t.timestamps
    end
  end
end
