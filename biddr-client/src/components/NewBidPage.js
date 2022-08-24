import React, { Component } from 'react';
import { Bid } from '../requests';
import NewBidForm from './NewBidForm';

class NewBidPage extends Component {
    constructor(props) {
        super(props);
        this.state = { errors: [] };
        this.createNewBid = this.createNewBid.bind(this)
    }

    createNewBid(params) {
        Bid.create(params)
            .then((bid) => {
                console.log(`bid: ${bid.errors}`)
                if (bid.errors) {
                    console.log(`bidErrors: ${bid.errors}`, bid.errors);
                    this.setState({ errors: bid.errors })
                } else {
                    this.props.history.push(`/auctions/${params.auction_id}/bids/${bid.id}`)
                }
            })
    }

    render() {
        return (
            <div>
                <NewBidForm errors={this.state.errors} submitForm={(params) => this.createNewBid(params)} auction_id={this.props.auction_id} />
            </div>
        )
    }
}

export default NewBidPage;