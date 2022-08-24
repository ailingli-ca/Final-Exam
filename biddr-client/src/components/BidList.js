import BidDetails from './BidDetails'

const BidList = (props) => {
    const bids = props.list
    return (
        <div>
            <h4>Previous Bids</h4>
            <div>
                {
                    bids ?
                    bids.map((b, i) => {
                        return <BidDetails 
                        key={i} 
                        bid_price={b.bid_price} 
                        author_name={b.author_name} 
                        created_at={b.created_at} />
                    })
                    :
                    null
                }     
            </div>
        </div>
    )
}

export default BidList; 
