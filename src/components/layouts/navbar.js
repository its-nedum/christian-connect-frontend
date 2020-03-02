import React from 'react'
import {Link} from 'react-router-dom'
// import Links from './links'
import '../../myStyles/main.css'



class Navbar extends React.Component {
    
   loadSlider = () =>
   {
       let slide = document.querySelector("#slide-out");
       slide.setAttribute("style","transform: translateX(-0%)");
       let overlay = document.querySelector(".overlay-content");
       overlay.style.display="block";
   }

   closeMe = () =>
   {
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
                        <Link to="#" onClick={this.loadSlider} >
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
                <li><a href='/' className="sidenav-close">HOME</a></li><div className="divider" />
                <li><a href='/category/music' className="sidenav-close">MUSIC</a></li>
                <li><a href='/category/videos' className="sidenav-close">VIDEO</a></li>
                <li><a href='/category/lyrics' className="sidenav-close">LYRICS</a></li>
                <li><a href='/category/events' className="sidenav-close">EVENTS</a></li>
                <li><a href='/category/news' className="sidenav-close">NEWS</a></li><div className="divider" />
                <li><a href='/signin' className="sidenav-close">Sign In</a></li><div className="divider" />
                <li><a href='/signup' className="sidenav-close">Sign Up</a></li><div className="divider" />
         </ul>

        </div>


         
    )
}
}
export default Navbar