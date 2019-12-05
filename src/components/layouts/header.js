import React,{Component} from 'react'
import {Link} from 'react-router-dom'
// import logo from '../../image/cc-logo.jpg'

class Header extends Component {
    getStyle = () => {
        return {
            background: '#FF00FF'
        }
    }
    
    render(){
    return(
        <div style={this.getStyle()}>
            <Link to='/' className="brand-logo left cc-logo">Christian Connect</Link>
            <ul className="right hide-on-small-only">
                <li><Link to='/'>SignIn</Link></li>
                <li><Link to='/'>SignUp</Link></li>
            </ul>
        </div>
    )
}
}

export default Header;