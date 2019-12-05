import React, { Component } from 'react'
import Navbar from '../layouts/navbar'
import Events from './events'
import Recent from './recent'
import Footer from '../layouts/footer'


export class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Events />
                <Recent />
                <Footer />
            </div>
        )
    }
}

export default Home
