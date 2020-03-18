import React from 'react'
import ChatSingleMessage from './chatSingleMessage'
import './chatStyles/chatMessages.css'
import ScrollToBottom from 'react-scroll-to-bottom'

const ChatMessages = ({messages, username}) => {
    return (
        <div className="messages">
            <ScrollToBottom>

                {messages.map((message, i) => <div key={i}><ChatSingleMessage message={message} username={username} /></div>)}
            
            </ScrollToBottom>
        </div>
    )
}

export default ChatMessages
