class CreateCohorts < ActiveRecord::Migration
  def change
    create_table :cohorts do |t|
      t.string :name
      t.integer :user_id
      # t.integer :response_id
    end
  end
end
