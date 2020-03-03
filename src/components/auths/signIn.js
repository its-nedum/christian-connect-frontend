import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Footer from '../layouts/footer'
import '../../myStyles/main.css'
import logo from '../../image/logo-logo.png'
import {connect} from 'react-redux'
import {loginUser} from '../../store/actions/usersActions'

class SignIn extends Component {
    state = {
        email: null,
        password: null,

        btnValue: 'Login',
        requiredEmail: false,
        requiredPassword: false,
        emailError: false,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let {email, password} = this.state
        if(!email){
            return this.setState({requiredEmail: true})
        }else{
            this.setState({requiredEmail: false})
        }
        if(!password){
            return this.setState({requiredPassword: true})
        }else{
            this.setState({requiredPassword: false})
        }
        let validEmail = /\S+@\S+\.\S+/.test(email)
        if(!validEmail){
            return this.setState({emailError: true})
        }else{
            this.setState({emailError: false})
        }
        let credentials = {
            email,
            password
        }
        this.setState({btnValue: 'Please wait...'})
        this.props.loginUser(credentials)
    }
    render() {
        const { notification } = this.props
        return (
            <div>
                <nav className="header-nav">
                <Link to='/' className="brand-logo left logo"><img src={logo} alt="logo" className="responsive-img"/></Link>
                    <ul className="right">
                        <li><Link to='/signup'>SignUp</Link></li>
                        <li><Link to='/'>Home</Link></li>
                    </ul>
                </nav>
                    <div className="container login-div">
                        <div className="row">
                            <div className="col m2"></div>
                            <form className="white loginForm col s12 m8">
                            <h5 className="grey-text text-darken-3 center">Sign in to Christian Connect</h5>
                            <div className="row">
                                <div className="input-field col s12">
                                <i className="material-icons prefix">email</i>
                                <input id="email" type="email" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="email">E-mail</label>
                                {this.state.requiredEmail ? <span style={{color:'red'}}>*Email is required</span> : null}
                                {this.state.emailError ? <span style={{color:'red'}}>*Enter a valid email</span> : null}
                                </div>
                                <div className="input-field col s12">
                                <i className="material-icons prefix">lock</i>
                                <input id="password" type="password" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="password">Password</label>
                                {this.state.requiredPassword ? <span style={{color:'red'}}>*Password is required</span> : null}
                                </div>
                            </div>
                            <div className="input-field center">
                            <input type="button" className="btn pink lighten-1 z-depth-0" onClick={this.handleSubmit} value={this.state.btnValue} />
                            </div>
                            
                                { notification ? <p className="red-text center">{ notification }</p> : null}
                            
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

const mapStateToProps = (state) => {
    return {
        notification: state.users.notification
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (credentials) => dispatch(loginUser(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)