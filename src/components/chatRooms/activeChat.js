import React from 'react'
import ChatHead from './chatHead'
import ChatMessages from './chatMessages'
import ChatInput from './chatInput'

import './chatStyles/activeChat.css'

const ActiveChat = () => {
    return (
        <div className="">
            <div className="chat-container">
                <ChatHead />
                <ChatMessages />
                <ChatInput />
            </div>
        </div>
    )
}

export default ActiveChat
