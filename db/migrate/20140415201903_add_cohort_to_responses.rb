class AddCohortToResponses < ActiveRecord::Migration
  def change
    add_column :responses, :cohort, :string
  end
end
