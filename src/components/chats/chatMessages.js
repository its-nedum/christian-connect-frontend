import React from 'react'
import ChatSingleMessage from './chatSingleMessage'
import './chatStyles/chatMessages.css'

const ChatMessages = () => {
    return (
        <div className="messages">
            <ChatSingleMessage />
        </div>
    )
}

export default ChatMessages
