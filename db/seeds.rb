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

rand(100).times { Response.create(answer: "panic") }
rand(100).times { Response.create(answer: "panic edge") }
rand(100).times { Response.create(answer: "learning") }
rand(100).times { Response.create(answer: "comfort edge") }
rand(100).times { Response.create(answer: "comfort") }
