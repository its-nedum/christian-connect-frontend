import React from 'react'
import './chatStyles/chatHead.css'

import onlineIcon from '../../icons/onlineIcon.png'
import closeIcon from '../../icons/closeIcon.png'

const ChatHead = () => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online icon" />
                <h3>Room Name</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="#"><img src={closeIcon} alt="close icon" /></a>
            </div>
        </div>
    )
}

export default ChatHead
