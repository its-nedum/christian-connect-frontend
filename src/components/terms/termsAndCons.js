import React from 'react' 
import Footer from '../layouts/footer'
import {Link} from 'react-router-dom'
import '../../myStyles/main.css'
import logo from '../../image/logo-logo.png'

const TermsAndConditions = () => {
    return (
        <div>
            <nav className="header-nav">
                <Link to='/' className="brand-logo left logo"><img src={logo} alt="logo" className="responsive-img"/></Link>
                    <ul className="right">
                        <li><Link to='/signup'>SignUp</Link></li>
                        <li><Link to='/'>Home</Link></li>
                    </ul>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card" style={{marginTop:'20px'}}>
                            <div className="card-content">
                            <span className="card-title">Terms and conditions of use</span>
                            <p>
                            <b>1. Introduction</b>
                            </p>
                           <p> 1.1	These terms and conditions shall govern your use of our website.</p>
                           <p>1.2	By using our website, you accept these terms and conditions in full; accordingly, if you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website.</p>
                           <p>1.3	If you register with our website, submit any material to our website or use any of our website services, we will ask you to expressly agree to these terms and conditions.</p>
                           <p>1.4	You must be at least 18 years of age to use our website; by using our website or agreeing to these terms and conditions, you warrant and represent to us that you are at least 18 years of age.</p>
                            <br/>
                            <b>2.	Credit </b>
                            <p>2.1	This document was created using a template from SEQ Legal (https://seqlegal.com).</p>
                            <br/>
                            <b>3.	Copyright notice</b>
                            <p>3.1	Copyright (c)2020 christianconnect</p>
                            <p>3.2	Subject to the express provisions of these terms and conditions:</p>
                                <ul>
                                    <li>(a)	we, together with our licensors, own and control all the copyright and other intellectual property rights in our website and the material on our website; and</li>
                                    <li>(b)	all the copyright and other intellectual property rights in our website and the material on our website are reserved.</li>
                                </ul>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TermsAndConditions
