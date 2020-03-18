import React from 'react'
import './chatStyles/chatSingleMessage.css'

const ChatSingleMessage = ({message: {user, text}, username}) => {
    let isSentByCurrentUser = false;
    const trimmedUsername = username.trim().toLowerCase();
    if(user === trimmedUsername){
        isSentByCurrentUser = true
    }

    return (
        isSentByCurrentUser ?
        (
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">
                    <span>{trimmedUsername}</span>
                    {/* <span>&nbsp; 09:34am</span> */}
                </p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{text}</p>
                </div>
            </div>
        )
        :
        (
            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{text}</p>
                </div>
                <p className="sentText pl-10">
                    <span>{user}</span>
                    {/* <span>&nbsp; 09:37am</span> */}
                </p>
            </div>
        )

    )
}

export default ChatSingleMessage
