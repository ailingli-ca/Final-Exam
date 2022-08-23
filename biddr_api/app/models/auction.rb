class Auction < ApplicationRecord
    has_many :bids, dependent: :destroy
    belongs_to :user

    validates :title, presence: true
    validates :description, presence: true
    validates :closing_date, presence: true
    validates :reserve_price, presence: true

end
