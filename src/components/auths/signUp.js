import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Footer from '../layouts/footer'
import '../../myStyles/main.css'
import logo from '../../image/logo-logo.png'
import {connect} from 'react-redux'
import {createUser} from '../../store/actions/usersActions'
//import validator from 'validator'

class SignUp extends Component {
    state = {
        
        firstname: null,
        lastname: null,
        email: null,
        telephone: null,
        username: null,
        birthdate: null,
        state: null,
        gender: null,
        password: null,
        passwordConfirm: null,
        
        requiredFirstnameField: false,
        requiredLastnameField: false,
        requiredEmail: false,
        requiredTelephone: false,
        requiredUsername: false,
        requiredBirthdate: false,
        requiredState: false,
        requiredGender: false,
        requiredPassword: false,
        requiredPasswordConfirm: false,
        passwordMismatch: false,
        emailError: false,
        usernameError: false,
        shortFirstName: false,
        shortLastName: false,
        shortPassword: false,

        btnValue: 'Sign Up'
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    

    handleSubmit = (e) => {
        e.preventDefault();
        let {firstname, lastname, email, telephone, username, birthdate, state, gender, password, passwordConfirm} = this.state
        
        //Validation Checks
        if(!firstname){
            return this.setState({requiredFirstnameField:true})
        }else{
            this.setState({requiredFirstnameField: false})
        }

        if(!lastname){
            return this.setState({requiredLastnameField: true})
        }else{
            this.setState({requiredLastnamefield: false})
        }

        if(!email){
            return this.setState({requiredEmail: true})
        }else{
            this.setState({requiredEmail: false})
        }

        if(!telephone){
            return this.setState({requiredTelephone: true})
        }else{
            this.setState({requiredTelephone: false})
        }

        if(!username){
            return this.setState({requiredUsername: true})
        }else{
            this.setState({requiredUsername: false})
        }

        if(!birthdate){
            return this.setState({requiredBirthdate: true})
        }else{
            this.setState({requiredBirthdate: false})
        }

        if(!state){
            return this.setState({requiredState: true})
        }else{
            this.setState({requiredState: false})
        }

        if(!gender){
            return this.setState({requiredGender: true})
        }else{
            this.setState({requiredGender: false})
        }

        if(!password){
            return this.setState({requiredPassword: true})
        }else{
            this.setState({requiredPassword: false})
        }

        if(!passwordConfirm){
            return this.setState({requiredPasswordConfirm: true})
        }else{
            this.setState({requiredPasswordConfirm: false})
        }

        let validEmail = /\S+@\S+\.\S+/.test(email)
        if(!validEmail){
            return this.setState({emailError: true})
        }else{
            this.setState({emailError: false})
        }
        
        if(password !== passwordConfirm){
            return this.setState({passwordMismatch: true})
        }else{
            this.setState({passwordMismatch: false})
        }

        let user = {
            firstname,
            lastname,
            email,
            telephone,
            username,
            birthdate,
            state,
            gender,
            password
            }
        this.setState({btnValue: 'Please wait...'})
        this.props.createUser(user)
        
    }
    
    render() {
        const { notification } = this.props
        return ( 
            <div>
            <nav className="header-nav">
                <a href='/' className="brand-logo left logo"><img src={logo} alt="logo" className="responsive-img"/></a>
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
                    <div>{this.state.requiredField ? <span style={{color:'red'}}>*All fields are required</span> : null}</div>
                    <div className="row">
                         <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="firstname" type="text" onChange={this.handleChange} className="validate" />
                            <label htmlFor="firstname">First Name</label>
                            <div>{this.state.requiredFirstnameField ? <span style={{color:'red'}}>*Firstname is required</span> : null}</div>
                            
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="lastname" type="text" onChange={this.handleChange} className="validate" />
                            <label htmlFor="lastname">Last Name</label>
                            <div>{this.state.requiredLastnameField ? <span style={{color:'red'}}>*Lastname is required</span> : null}</div>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">email</i>
                            <input id="email" type="email" onChange={this.handleChange} className="validate" />
                            <label htmlFor="email">E-mail</label>
                            <div>{this.state.requiredEmail ? <span style={{color:'red'}}>*Email is required</span> : null}</div>
                            <div>{this.state.emailError ? <span style={{color:'red'}}>*Enter a valid email</span> : null}</div>
                        </div> 
                        <div className="input-field col s6">
                            <i className="material-icons prefix">phone</i>
                            <input id="telephone" type="text" onChange={this.handleChange} className="validate" />
                            <label htmlFor="telephone">Phone No.</label>
                            <div>{this.state.requiredTelephone ? <span style={{color:'red'}}>*Phone number is required</span> : null}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                        <i className="material-icons prefix">perm_identity</i>
                            <input id="username" type="text" onChange={this.handleChange} className="validate" />
                            <label htmlFor="username">Username</label>
                            <div>{this.state.requiredUsername ? <span style={{color:'red'}}>*Username is required</span> : null}</div>
                        </div>
                        <div className="input-field col s6">
                        <i className="material-icons prefix">perm_contact_calendar</i>
                            <input id="birthdate" type="date" onChange={this.handleChange} className="validate" />
                            <label htmlFor="birthdate">Birthdate</label>
                            <div>{this.state.requiredBirthdate ? <span style={{color:'red'}}>*Birthdate is required</span> : null}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                        <i className="material-icons prefix">location_city</i>
                            <select id="state" className="browser-default" onChange={this.handleChange}>
                                <option value="" disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;State of residence</option>
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
                            <div>{this.state.requiredState ? <span style={{color:'red'}}>*State is required</span> : null}</div>
                        </div>
                        <div className="input-field col s6">
                        <i className="material-icons prefix">perm_identity</i>
                        <select id="gender" className="browser-default" onChange={this.handleChange}>
                            <option value="" disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Choose your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <div>{this.state.requiredGender ? <span style={{color:'red'}}>*Gender is required</span> : null}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                        <i className="material-icons prefix">lock</i>
                            <input id="password" type="password" onChange={this.handleChange} className="validate" />
                            <label htmlFor="password">Password</label>
                            <div>{this.state.requiredPassword ? <span style={{color:'red'}}>*Password is required</span> : null}</div>
                            <div>{this.state.passwordMismatch ? <span style={{color:'red'}}>*Password mismatch</span> : null}</div>    
                        </div>
                        <div className="input-field col s6">
                        <i className="material-icons prefix">lock</i>
                            <input id="passwordConfirm" type="password" onChange={this.handleChange} className="validate" />
                            <label htmlFor="passwordConfirm">Confirm Password</label>
                            <div>{this.state.requiredPasswordConfirm ? <span style={{color:'red'}}>*Confirm password is required</span> : null}</div>
                            <div>{this.state.passwordMismatch ? <span style={{color:'red'}}>*Password mismatch</span> : null}</div> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                           <p> 
                            <span>By clicking Sign Up, you agree to our <a href="legal/terms">Terms and Conditions</a>.</span>
                           </p>
                        </div>
                        
                    </div>
                        <div className="input-field center">
                            <input type="button" className="btn pink lighten-1 z-depth-0" onClick={this.handleSubmit} value={this.state.btnValue} />
                            </div>
                    <div className="red-text center">
                        { notification ? <p>{ notification }</p> : null}
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

const mapStateToProps = (state) => {
    return {
        notification: state.users.notification
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
