import React from 'react'
import './chatStyles/chatSingleMessage.css'

const ChatSingleMessage = () => {
    return (
        <div>
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">its_nedum</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">Hello world </p>
                </div>
            </div>

            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorWhite">Hey world </p>
                </div>
                <p className="sentText pl-10">zee baba</p>
            </div>
        </div>
    )
}

export default ChatSingleMessage
