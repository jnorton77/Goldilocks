class AddStudentdataToResponses < ActiveRecord::Migration
  def change
    add_column :responses, :student_data, :boolean
  end
end
