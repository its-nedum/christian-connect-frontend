import React from 'react'
import './chatStyles/chatInput.css'

const ChatInput = () => {
    return (
        <div>
            <form className="form">
                <input className="input" type="text" placeholder="Type a message..." />
                <button className="sendButton">Send</button>
            </form>
        </div>
    )
}

export default ChatInput
