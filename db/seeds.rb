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

Question.destroy_all
Response.destroy_all

rand(8000..10000).times { Response.create(answer: rand(1..5),
								                        question_id: 1,
                                        user_id: rand(1..151),
                                        created_at: Date.today - rand(14).day + rand(24).hour + rand(60).minute + rand(60).second)

                      }
Question.create(
                content: Faker::Lorem.sentence(7),
                created_at: "2014-03-01 07:55:25",
                updated_at: "2014-03-01 07:55:25"
                )

User.create(
            first_name: "Dave",
            last_name: "Vacuum",
            email: "dave@devbootcamp.com",
            password: "marydear",
            password_confirmation: "marydear",
            created_at: "2014-03-01 07:54:25",
            updated_at: "2014-03-01 07:54:25"
            )

100.times { User.create(
                      first_name: Faker::Name.first_name,
                      last_name: Faker::Name.last_name,
                      email: Faker::Internet.email,
                      password: "molestiae",
                      password_confirmation: "molestiae",
                      created_at: "2014-03-01 07:54:25",
                      updated_at: "2014-03-01 07:54:25"
                      )
          }