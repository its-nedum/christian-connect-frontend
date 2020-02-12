import React from 'react'
import ComHeader from '../layouts/comHeader'
import Footer from '../layouts/footer'
import ComSidenav from '../layouts/comSidenav'
import Banner2 from '../adverts/banner2'
import ComSidebar from '../layouts/comSidebar'
import RequestSent from './requestSent'
import RequestReceived from './requestReceived'


const connectRequest = () => {
          
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
                    <h5 className="white-text left-align" style={{background:'#000033', padding:'10px', borderRadius:'5px'}}>Connect Requests</h5>
                    <RequestReceived />
                    <RequestSent />
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

export default connectRequest
