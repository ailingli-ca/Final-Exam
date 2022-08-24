import { useState, useEffect } from 'react';
import { Auction } from '../requests';
import { Link } from 'react-router-dom';

export default function AuctionIndexPage() {
    const [auctions, setAuctions] = useState([])

    useEffect(() => {
        Auction.index()
        .then((auctionsData) => {
            setAuctions(auctionsData)
        })
    }, [])



    return(
        <>
            <h1 className="index-page-heading">AUCTIONS</h1>
            <div>
                { auctions.map((a, i) => {
                    return (
                        <div  key={i}>
                            <h3 className="links"> <Link to={`/auctions/${a.id}`} className="links">{a.title}</Link>  </h3>
                            <p className="auctions" >{a.description}</p>
                        </div>
                        
                    )
                })}
            </div>
        </>
    )
}
