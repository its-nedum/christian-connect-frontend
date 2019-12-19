import React from 'react'
import './chatStyles/chatSingleMessage.css'

const ChatSingleMessage = () => {
    return (
        <div>
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">
                    <span>its_nedum </span>
                    <span>&nbsp; 09:34am</span>
                </p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">Hello world Lorem ipsum dolor.</p>
                </div>
            </div>

            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">Hey world Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <p className="sentText pl-10">
                    <span>zee baba </span>
                    <span>&nbsp; 09:37am</span>
                </p>
            </div>

            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">
                    <span>its_nedum </span>
                    <span>&nbsp; 09:34am</span>
                </p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">Hello world Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        </div>
    )
}

export default ChatSingleMessage
