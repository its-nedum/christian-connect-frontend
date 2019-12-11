import React, { Component } from 'react'
import Navbar from '../layouts/navbar'
import Footer from '../layouts/footer'
import '../../myStyles/main.css'

class SignIn extends Component {
    render() {
        return (
            <div>
                <Navbar />
                    <div className="container login-form">
                        <form className="">
                        <h5 className="grey-text text-darken-3 center">Sign In</h5>
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label htmlfor="email">Email</label>
                            </div>
                            <div className="input-field col s12">
                            <input id="password" type="password" className="validate" />
                            <label htmlfor="password">Password</label>
                            </div>
                        </div>
                        <div className="input-field center">
                        <input type="button" className="btn pink lighten-1 z-depth-0" value="Login" />
                        </div>
                        </form>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default SignIn