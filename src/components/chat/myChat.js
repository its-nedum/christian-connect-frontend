import React from 'react'
import './styles/myChat.css'
import Head from './head'
import Messages from './messages'
import Input from './input'

const MyChat = () => {
    return (
        <div>
            <div className="chat-container">
                <Head />
                <Messages />
                <Input />
            </div>
        </div>
    )
}

export default MyChat
