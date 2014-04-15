class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.integer :answer
      t.integer :question_id
      t.string :email
      # t.string :cohort

      t.timestamps
    end
  end
end
