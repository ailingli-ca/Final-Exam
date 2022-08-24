import React from 'react';
import { User } from '../requests';

const SignUpPage = (props) => {
    const { onSignUp } = props;
    const handleSubmit = event => {
        const { currentTarget } = event
        event.preventDefault()
        const formData = new FormData(currentTarget)
        const params = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation')
        }
        User.create(params).then(user => {
            if(user?.id){
                onSignUp() //store the user in the App state
                props.history.push('/auctions') //navigate to index
            }
        })
    }
    return(
        <main className="content-page">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} className="content-page-form">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <br />
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>
                <br />
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <br />
                <div>
                    <label htmlFor="password_confirmation">Password Confirmation</label>
                    <input type="password" name="password_confirmation" id="password_confirmation" />
                </div>
                <br />
                <input type="submit" value="Sign Up" />
            </form>
        </main>
    )
}

export default SignUpPage;