import React, { Component } from 'react';
import { Auction } from '../requests';
import NewAuctionForm from './NewAuctionForm';

class NewAuctionPage extends Component {
    constructor(props) {
        super(props);
        this.state = { errors: [] };
        this.createNewAuction = this.createNewAuction.bind(this)
    }

    createNewAuction(params) {
        // console.log(`Params: ${params.title} ${params.body}`)
        Auction.create(params)
            .then((auction) => {
                console.log(`auction: ${auction.errors}`)
                if (auction.errors) {
                    console.log(`auctionErrors: ${auction.errors}`, auction.errors);
                    this.setState({ errors: auction.errors })
                } else {
                    this.props.history.push(`/auctions/${auction.id}`)
                }
            })
    }

    render() {
        return (
            <div>
                <NewAuctionForm errors={this.state.errors} submitForm={(params) => this.createNewAuction(params)} />
            </div>
        )
    }
}

export default NewAuctionPage;