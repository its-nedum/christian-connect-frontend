import React, { Component } from 'react'
import Navbar from '../layouts/navbar'
import Events from './events'
import Recent from './recent'


export class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Events />
                <Recent />
            </div>
        )
    }
}

export default Home
