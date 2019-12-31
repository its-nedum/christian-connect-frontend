import React from 'react'
import '../../myStyles/main.css'

const Footer = () => {
    return (
        <div>
        <footer className="page-footer footer-top">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Christian Connect</h5>
                <p className="grey-text text-lighten-4">
                This is platform where Christians can meet and connect and also find gospel musicals, lyrics and video. You can also advertise your church program with us, it’s purely Christian activities. 
                </p>
                <p className="grey-text text-lighten-4">
                For your advert placement, contribution and advice please use the Get in touch to get across to us. We promise to keep your information confidential and to always improve the community to be a place we can call our own.
                </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Get In Touch</h5>
                <ul>
                  <li><i className="material-icons">email</i><span> contact@christianconnect.net</span></li>
                  <li><i className="material-icons">phone</i><span> (+234) 817 348 8036</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright footer-down">
            <div className="container center">
            ©2020 Copyright || Powered by Zeabon Concepts and Middleware ICT Solutions || All rights reserved
            
            </div>
          </div>
        </footer>
        </div>
    )
}

export default Footer
