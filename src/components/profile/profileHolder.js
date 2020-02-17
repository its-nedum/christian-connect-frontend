import React from 'react'
import ComHeader from '../layouts/comHeader'
import Footer from '../layouts/footer'
import ComSidenav from '../layouts/comSidenav'
import ComSidebar from '../layouts/comSidebar'
import MyProfile from './myProfile'
import {Redirect} from 'react-router-dom'
import {isLoggedIn} from '../../helpers/utility'

 
const ProfileHolder = () => {
      
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
                    <div className="col s12 m9">
                    <h5 className="white-text left-align" style={{background:'#000033', padding:'10px', borderRadius:'5px'}}>My Profile Information</h5>
                    
                        <MyProfile />
                    
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProfileHolder
