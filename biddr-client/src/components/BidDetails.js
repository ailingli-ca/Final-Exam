const BidDetails = (props) =>{
    return(
        <div>
            <p>
               $ {props.bid_price}  on: {props.created_at ? props.created_at.toLocaleString() : null}
            </p>
        </div>
    )
}

export default BidDetails;
