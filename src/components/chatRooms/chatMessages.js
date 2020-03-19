import React from 'react'
import ChatSingleMessage from './chatSingleMessage'
import './chatStyles/chatMessages.css'
import {css} from 'glamor'
import ScrollToBottom from 'react-scroll-to-bottom'

const scroll_style = css({
    height: 400
})

const ChatMessages = ({messages, username}) => (
            <ScrollToBottom className="messages" className={scroll_style}>
                {messages.map((message, i) => <div key={i}><ChatSingleMessage message={message} username={username} /></div>)}
            </ScrollToBottom>
)   
   

export default ChatMessages
