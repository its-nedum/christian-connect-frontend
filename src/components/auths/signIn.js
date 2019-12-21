import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Footer from '../layouts/footer'
import '../../myStyles/main.css'
import logo from '../../image/logo-logo.png'

class SignIn extends Component {
    render() {
        return (
            <div>
                <nav className="header-nav">
                <a href='/' className="brand-logo left logo"><img src={logo} alt="logo" className="responsive-img"/></a>
                    <ul className="right">
                        <li><Link to='/signup'>SignUp</Link></li>
                        <li><a href='/'>Home</a></li>
                    </ul>
                </nav>
                    <div className="container login-div">
                        <div className="row">
                            <div className="col m2"></div>
                            <form className="white loginForm col s12 m8">
                            <h5 className="grey-text text-darken-3 center">Sign in to Christian Connect</h5>
                            <div className="row">
                                <div className="input-field col s12">
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email">E-mail</label>
                                </div>
                                <div className="input-field col s12">
                                <input id="password" type="password" className="validate" />
                                <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="input-field center">
                            <a href='/feed'><input type="button" className="btn pink lighten-1 z-depth-0" value="Login" /></a>
                            </div>
                            <div className="center" style={{marginBottom:'6px'}}><a href='/password-reset'>Forgot your log in details?</a></div>
                            </form>
                            <div className="col m2"></div>
                        </div>
                        <div className="center" style={{color:'#000033', marginTop:'6px'}}>Are you new to Christian Connect? <Link to='/signup' style={{textDecoration:'underline', color:'white'}}>Sign Up</Link></div>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default SignIn