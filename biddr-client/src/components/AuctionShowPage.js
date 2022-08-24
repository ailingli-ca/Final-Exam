import { useState, useEffect } from 'react'
import AuctionDetails from './AuctionDetails';
import BidList from './BidList'
import { Auction } from '../requests';
import { Bid } from '../requests';
import NewBidForm from './NewBidForm';
import '../App.css';

export default function AuctionsShowPage(props){
    const [auction, setAuctions] = useState({});

    useEffect(() => {
        Auction.show(props.match.params.id)
        .then((fetchedAPIAuctions) => {
            setAuctions(fetchedAPIAuctions)
        })
    }, [])

    function createNewBid(params) {
        Bid.create(params)
        .then((bid) => {
            // console.log(`bid: ${bid.errors}`)
            if (bid.errors) {
                console.log(`bidErrors: ${bid.errors}`, bid.errors);
                this.setState({ errors: bid.errors })
            } else {
                this.props.history.push(`/auctions/${params.auction_id}/bids/${bid.id}`)
            }
        })
    }

    // console.log(auction)

    const {id, title, description, author, reserve_price, closing_date } = auction;

    return (
        <div className="content-page">
            <AuctionDetails 
            title={title}
            description={description}
            author={author}
            closing_date={closing_date}
            reserve_price={reserve_price}
            />
            <NewBidForm auction_id={id} submitForm={(params) => createNewBid(params)} />
            <h2>Previous Bids</h2>
            <BidList list={auction.bids}  />
        </div>
    )
}