class Api::V1::BidsController < Api::ApplicationController

    def create
        bid = Bid.new params.require(:bid).permit(:bid_price, :auction_id)
        bid.user = current_user
        auction = Auction.find_by(id: bid.auction_id)
        bid.auction = auction
        bid.save!
        render json: bid
    end
end
