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


# require 'faker'

rand(800..1000).times { Response.create(answer: ["panic","panic edge", "learning",
										  "comfort edge", "comfort"].sample,
								 user_id: [1,2,3].sample,
								 created_at: Date.today - rand(14).day + rand(24).hour + rand(60).minute + rand(60).second) }
# rand(64).times { Response.create(answer: "panic edge", user_id: 1) }
# rand(15).times { Response.create(answer: "learning", user_id: 1) }
# rand(39).times { Response.create(answer: "comfort edge", user_id: 1) }
# rand(53).times { Response.create(answer: "comfort", user_id: 1) }
