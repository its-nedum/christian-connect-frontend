import React from 'react'
import './styles/message.css'

const Message = () => {
    return (
        <div>
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10"> 09:34am </p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">Hello world Lorem ipsum dolor.</p>
                </div>
            </div>

            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">Hey world Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <p className="sentText pl-10"> 09:37am </p>
            </div>

            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10"> 09:34am </p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">Hello world Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        </div>
    )
}

export default Message
