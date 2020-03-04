import React from 'react'
import {Link} from 'react-router-dom'
import '../../myStyles/main.css'
import {isLoggedIn, welcomeNote} from '../../helpers/utility'

class Navbar extends React.Component {
    
   loadSlider = () => {
       let slide = document.querySelector("#slide-out");
       slide.setAttribute("style","transform: translateX(-0%)");
       let overlay = document.querySelector(".overlay-content");
       overlay.style.display="block";
   }

   closeMe = () => {
    let slide = document.querySelector("#slide-out");
    slide.setAttribute("style","transform: translateX(-105%)");
    let overlay = document.querySelector(".overlay-content");
    overlay.style.display="none";
   }

    render(){
    return (
        <div>

   <div className="overlay-content" onClick={this.closeMe}></div>

        <nav className="link-nav">
            <div className="nav-wrapper">
                <div className="container">
                    <div className="row">
                    <Link to="#" onClick={this.loadSlider} className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </Link>                    
                        <ul className="center hide-on-med-and-down">
                            <li><Link className="link-font-size" to='/'>HOME</Link></li>
                            <li><Link className="link-font-size" to='/category/music'>MUSIC</Link></li>
                            <li><Link className="link-font-size" to='/category/videos'>VIDEO</Link></li>
                            <li><Link className="link-font-size" to='/category/lyrics'>LYRICS</Link></li>
                            <li><Link className="link-font-size" to='/category/events'>EVENTS</Link></li>
                            <li><Link className="link-font-size" to='/category/news'>NEWS</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        <ul id='slide-out' className="sidenav">
                <li><Link to="#" onClick={this.closeMe} className="sidenav-close right pink-text lighten-1">X</Link></li>
                <li><Link to='/' className="sidenav-close">HOME</Link></li><div className="divider" />
                <li><Link to='/category/music' className="sidenav-close">MUSIC</Link></li>
                <li><Link to='/category/videos' className="sidenav-close">VIDEO</Link></li>
                <li><Link to='/category/lyrics' className="sidenav-close">LYRICS</Link></li>
                <li><Link to='/category/events' className="sidenav-close">EVENTS</Link></li>
                <li><Link to='/category/news' className="sidenav-close">NEWS</Link></li><div className="divider" />
                {isLoggedIn() ?                 
                    <li><Link to='/feed'><i className="material-icons">forum</i>{welcomeNote()} </Link></li>
                :
                <div>
                    <li><Link to='/signin' className="sidenav-close">Sign In</Link></li><div className="divider" />
                    <li><Link to='/signup' className="sidenav-close">Sign Up</Link></li><div className="divider" />
                </div>
                }
                

         </ul>
         
        </div>


         
    )
}
}
export default Navbar