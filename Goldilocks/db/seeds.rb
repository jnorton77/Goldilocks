# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# todos: no comments get assigned to answers


require 'faker'

num_users = 3
num_questions = 5
num_answers = 100

num_users.times do
  User.create!(first_name: Faker::Name.first_name, email: Faker::Internet.email, password: "1234mary", password_confirmation: "1234mary")
end

Question.all.each do |q|
  q.author = User.all.sample
end

Question.create!(name: cat_name) }
