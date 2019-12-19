import React from 'react'
import './styles/head.css'

import onlineIcon from '../../icons/onlineIcon.png'
import closeIcon from '../../icons/closeIcon.png'

const Head = () => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online icon" />
                <h5>Chinedu Emesue</h5>
            </div>
            <div className="rightInnerContainer">
                <a href="/feed"><img src={closeIcon} alt="close icon" /></a>
            </div>
        </div>
    )
}

export default Head
