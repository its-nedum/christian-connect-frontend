import React from 'react'
import './chatStyles/chatHead.css'
import {Link} from 'react-router-dom'
import onlineIcon from '../../icons/onlineIcon.png'
import closeIcon from '../../icons/closeIcon.png'

const ChatHead = ({room}) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online icon" />
                <h5>{room}</h5>
            </div>
            <div className="rightInnerContainer">
                <Link to="/feed"><img src={closeIcon} alt="close icon" /></Link>
            </div>
        </div>
    )
}

export default ChatHead
