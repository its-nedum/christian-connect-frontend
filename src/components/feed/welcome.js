import React from 'react'
import ComHeader from '../layouts/comHeader'
import Footer from '../layouts/footer'
import ComSidenav from '../layouts/comSidenav'
import Dashboard from './dashboard'
import Banner2 from '../adverts/banner2'
import ComSidebar from '../layouts/comSidebar'
import {isLoggedIn} from '../../helpers/utility'
import {Redirect} from 'react-router-dom'

const Welcome = () => {
    if(!isLoggedIn()) return <Redirect to='/signin' />
    return (
        <div>
            <ComHeader />
            <br/>
            <ComSidenav />
            <div className="">
                <div className="row">
                    <div className="col m2 hide-on-small-only">
                    <ComSidebar />
                    </div>
                    <div className="col s12 m7">
                        <Dashboard />
                    </div>
                    <div className="col s3 hide-on-small-only">
                        <Banner2 />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Welcome
