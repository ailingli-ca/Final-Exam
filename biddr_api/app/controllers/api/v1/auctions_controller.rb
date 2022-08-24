class Api::V1::AuctionsController < Api::ApplicationController
    before_action :authenticate_user!, except: [:index, :show]

    def index
        auctions = Auction.order(created_at: :desc)
        render(json: auctions, each_serializer: AuctionCollectionSerializer)
    end

    def show
        auction = Auction.find(params[:id])
        bids = auction.bids.order(bid_price: :desc)
        render(json: auction)
    end

    def create
        auction = Auction.new(auction_params)
        auction.user = current_user
        if auction.save
            render json:{id: auction.id}
        else
            render(
                json:{errors: auction.errors.messages},
                status: 422
            )
        end
    end

    def auction_params
        params.require(:auction).permit(:title,:description,:closing_date,:reserve_price)
    end
end
