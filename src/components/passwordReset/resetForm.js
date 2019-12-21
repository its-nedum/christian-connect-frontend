import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../layouts/footer'
import '../../myStyles/main.css'
import logo from '../../image/logo-logo.png'

const ResetForm = () => {
    return (
        <div>
        <nav className="header-nav">
                <a href='/' className="brand-logo left logo"><img src={logo} alt="logo" className="responsive-img"/></a>
                    <ul className="right">
                        <li><Link to='/signin'>Sign In</Link></li>
                        <li><a href='/'>Home</a></li>
                    </ul>
                </nav>
                    <div className="container login-div">
                        <div className="row">
                            <div className="col m2"></div>
                            <form className="white loginForm col s12 m8">
                            <h5 className="grey-text text-darken-3 center">Reset Password</h5>
                            <div style={{color:'#000033'}}>Enter your registered email address here to receive a reset link</div>
                            <div className="row">
                                <div className="input-field col s12">
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email">E-mail</label>
                                </div>   
                            </div>
                            <div className="input-field center">
                            <input type="button" className="btn pink lighten-1 z-depth-0" value="Submit" />
                            </div>

                            </form>
                            <div className="col m2"></div>
                        </div>
                    </div>
                <Footer />
        </div>
    )
}

export default ResetForm
