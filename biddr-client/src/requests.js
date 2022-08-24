const baseUrl = "http://localhost:3000/api/v1";

export const Auction = {
   
    index(){
        return fetch(`${baseUrl}/auctions`)
        .then(response => {
            return response.json()
        })
    },
    show(id){
        return fetch(`${baseUrl}/auctions/${id}`)
        .then(res => res.json());
    },
    create(params){
        return fetch(`${baseUrl}/auctions`, {
            method: 'POST',
            credentials: 'include', //need this for cookies
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then((res) => res.json());
    }

}

export const Bid = {
    create(params){
        return fetch(`${baseUrl}/auctions/${params.auction_id}/bids`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params),
        }).then(res => res.json())
    }
}

export const Session = {
    create(params) {
        return fetch(`${baseUrl}/session`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params),
        }).then(res => res.json());
    },
    destroy() {
        return fetch(`${baseUrl}/session`, {
            method: 'DELETE',
            credentials: 'include',
        }).then(res => res.json())
    }
}

export const User = {
    current() {
        return fetch(`${baseUrl}/users/current`, {
            credentials: 'include'
        }).then(res => res.json());
    },
    create(params) {
        return fetch(`${baseUrl}/users`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: params })
        }).then(res => res.json())
    }
}
