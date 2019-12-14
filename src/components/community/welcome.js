import React from 'react'
import ComHeader from '../layouts/comHeader'
import Footer from '../layouts/footer'
import ComSidebar from '../layouts/comSidebar'
import Dashboard from './dashboard'

const Welcome = () => {
    return (
        <div>
            <ComHeader />
            <br/>
            <div className="">
                <div className="row">
                    <div className="col s3">
                        <ComSidebar />
                    </div>
                    <div className="col s8">
                        <Dashboard />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Welcome
