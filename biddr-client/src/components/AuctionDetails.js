const AuctionDetails = (props) =>{
    return(
        <div >
            <div>
                 <h2 className="links">
                    {props.title}
                </h2> 
            </div>
            <div className="auction-show-page">
                <div >
                    <p>
                        {props.description}
                    </p>
                </div>
                <div>
                    <p>
                    By {props.author ? props.author.name : null} | Ends at: {props.closing_date}
                    <br/>
                    <small>
                        Reserve Price: ${props.reserve_price}
                    </small>
                    </p>                
                </div>
            </div>
            
        </div>
    )
}
export default AuctionDetails;

