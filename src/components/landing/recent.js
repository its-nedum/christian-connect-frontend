import React from 'react'
import RecentDetails from './recentDetails'


const Recent = () => {
    return (
        <div className="container">
            <h5 className="white-text center">Recently Added</h5>
            <div className="row">
                <RecentDetails />
                <RecentDetails />
                <RecentDetails />
                <RecentDetails />
                <RecentDetails />
                <RecentDetails />
            </div>
        </div>
    )
}

export default Recent