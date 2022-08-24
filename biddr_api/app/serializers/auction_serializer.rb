class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :closing_date, :reserve_price

  has_many :bids
  belongs_to :user, key: :author

  class BidSerializer < ActiveModel::Serializer
    attributes :id, :bid_price, :created_at
  end

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :name
  end
end
