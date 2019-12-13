import React, { Component } from 'react'
import Navbar from '../layouts/navbar'
import Events from './events'
import Recent from './recent'
import Footer from '../layouts/footer'
import Header from '../layouts/header'


export class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <Events />
                <Recent />
                <Footer />
            </div>
        )
    }
}

export default Home
