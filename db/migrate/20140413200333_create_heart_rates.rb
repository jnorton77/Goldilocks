class CreateHeartRates < ActiveRecord::Migration
  def change
    create_table :heart_rates do |t|
      t.integer :user_id
      t.integer :bpm
      t.datetime :recorded_at

      t.timestamps
    end
  end
end
