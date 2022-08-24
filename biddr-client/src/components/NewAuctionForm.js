const NewAuctionForm = props => {

    const getDataAndSubmit = (event) => {
        event.preventDefault();
        const fd = new FormData(event.currentTarget);
        props.submitForm(
            {
                title: fd.get("title"),
                description: fd.get("description"),
                closing_date: fd.get("closing_date"),
                reserve_price: fd.get("reserve_price"),
                
            }
        )
        event.currentTarget.reset();
    }

    return (
        <form onSubmit={getDataAndSubmit} className="content-page-form">
            <div>
                <label htmlFor="title">Title*</label>
                <br />
                <input type="text" name="title" id="" />
            </div>
            <div>
                <label htmlFor="description">Description*</label>
                <br />
                <input type="text" name="description" id="" />
            </div>
            <div>
                <label htmlFor="closing_date">Ends At*</label>
                <br />
                <input type="date" name="closing_date" id="" />
            </div>
            <div>
                <label htmlFor="reserve_price">Reserve Price*</label>
                <br />
                <input type="float" name="reserve_price" id="" />
            </div>
            <div>
                <input type="submit" value="Create Auction" />
            </div>
        </form>
    )
}
export default NewAuctionForm