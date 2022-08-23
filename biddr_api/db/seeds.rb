# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Auction.destroy_all
Bid.destroy_all
User.destroy_all

PASSWORD = "123"
super_user = User.create(
    name: "Admin",
    email: "admin@user.com",
    password: PASSWORD
)

5.times do
    name = Faker::Name.first_name
    User.create(
        name: name,
        email: "#{name}@email.com",
        password: PASSWORD
    )
end

users = User.all

50.times do
    created_at = Faker::Date.backward(days: 365*5)
    a = Auction.create(
        title: Faker::Commerce.product_name,
        description: Faker::ChuckNorris.fact,
        closing_date: Faker::Date.forward(days: 50),
        reserve_price: rand(50..1000),
        created_at: created_at,
        updated_at: created_at,
        user: users.sample
    )
    if a.valid?
        rand(1..10).times do
            Bid.create(
                bid_price: rand(50..2000),
                auction: a,
                created_at: created_at,
                user: users.sample
            )     
        end
    end
end

auctions = Auction.all
bids = Bid.all


puts "generated #{auctions.count} many auctions"
puts "generated #{bids.count} many bids"
puts "generated #{users.count} many users"