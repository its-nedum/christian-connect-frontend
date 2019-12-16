import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Footer from '../layouts/footer'
import '../../myStyles/main.css'
import logo from '../../image/logo-logo.png'

class SignUp extends Component {
    render() {
        return (
            <div>
            <nav className="header-nav">
                <Link to='/' className="brand-logo left logo"><img src={logo} alt="logo" className="responsive-img"/></Link>
                    <ul className="right">
                        <li><Link to='/signin'>Sign In</Link></li>
                        <li><a href='/'>Home</a></li>
                    </ul>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col m2"></div>
                    <form className="col s12 m8 white signupForm">
                    <h5 className="grey-text text-darken-3 center">Join Christian Connect</h5>
                    <div className="row">
                         <div className="input-field col s12 m6">
                            <input id="firstname" type="text" className="validate" />
                            <label htmlFor="firstname">First Name</label>
                        </div>
                        <div className="input-field col s12 m6">
                            <input id="lastname" type="text" className="validate" />
                            <label htmlFor="lastname">Last Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">E-mail</label>
                        </div> 
                        <div className="input-field col s6">
                            <input id="telephone" type="text" className="validate" />
                            <label htmlFor="telephone">Phone No.</label>
                        </div>
                        <div className="input-field col s6">
                            <select className="browser-default">
                                <option value="" disabled selected>Choose your gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="input-field col s6">
                            <input id="birthdate" type="text" className="datepicker" />
                            <label htmlFor="birthdate">Birthdate</label>
                        </div>
                        <div className="input-field col s6">
                            <select className="browser-default">
                                <option value="" disabled selected>State of residence</option>
                                <option>Abia</option>
                                <option>Adamawa</option>
                                <option>Akwa Ibom</option>
                                <option>Anambra</option>
                                <option>Bauchi</option>
                                <option>Bayelsa</option>
                                <option>Benue</option>
                                <option>Borno</option>
                                <option>Cross River</option>
                                <option>Delta</option>
                                <option>Ebonyi</option>
                                <option>Edo</option>
                                <option>Ekiti</option>
                                <option>Enugu</option>
                                <option>Gombe</option>
                                <option>Imo</option>
                                <option>Jigawa</option>
                                <option>Kaduna</option>
                                <option>Kano</option>
                                <option>Katsina</option>
                                <option>Kebbi</option>
                                <option>Kogi</option>
                                <option>Kwara</option>
                                <option>Lagos</option>
                                <option>Nasarawa</option>
                                <option>Niger</option>
                                <option>Ogun</option>
                                <option>Ondo</option>
                                <option>Osun</option>
                                <option>Oyo</option>
                                <option>Plateau</option>
                                <option>Rivers</option>
                                <option>Sokoto</option>
                                <option>Taraba </option>
                                <option>Yobe</option>
                                <option>Zamfara</option>
                                <option>Federal Capital Territory</option>
                            </select>
                        </div>
                        <div className="input-field col s6">
                            <input id="username" type="text" className="validate" />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="passwordConfirm" type="password" className="validate" />
                            <label htmlFor="passwordConfirm">Confirm Password</label>
                        </div>
                        <div className="input-field center">
                            <input type="button" className="btn pink lighten-1 z-depth-0" value="Sign Up" />
                            </div>
                    </div>
                    </form>
                    <div className="col m2"></div>
                </div>
                <div className="center" style={{color:'#000033', marginTop:'6px', marginBottom:'15px'}}>Already have an account? <Link to='/signin' style={{textDecoration:'underline', color:'white'}}>Sign In</Link></div>
            </div>
             <Footer />   
            </div>
        )
    }
}

export default SignUp
