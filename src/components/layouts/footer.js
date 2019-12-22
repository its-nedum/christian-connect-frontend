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
                <p className="grey-text text-lighten-4">This is platform where christian can meet and connect This is platform where christian can meet and connect This is platform where christian can meet and connect...READ MORE</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Get In Touch</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Email</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Telephone</a></li>
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
