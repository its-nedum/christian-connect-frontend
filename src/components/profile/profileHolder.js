import React from 'react'
import ComHeader from '../layouts/comHeader'
import Footer from '../layouts/footer'
import ComSidenav from '../layouts/comSidenav'
import ComSidebar from '../layouts/comSidebar'
import MyProfile from './myProfile'


const ProfileHolder = () => {
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
                    <div className="col s12 m9">
                    <MyProfile />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProfileHolder
