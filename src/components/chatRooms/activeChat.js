import React, {useState, useEffect} from 'react'
import ChatHead from './chatHead'
import ChatMessages from './chatMessages'
import ChatInput from './chatInput'
// import queryString from 'query-string'
import io from 'socket.io-client'
import './chatStyles/activeChat.css'
import {chatHost, getUsername} from '../../helpers/utility'

let socket;

const ActiveChat = (props) => {
    const [message, setMessage] = useState([])
    const [messages, setMessages] = useState([])

    const room = 'Region 28'
    const username = getUsername()
    const ENDPOINT = chatHost()

    useEffect(() => {
        socket = io(ENDPOINT)
        
        socket.emit('join', {username: username, room: room}, () => {

        });

        return () => {
            socket.emit('disconnect')
            socket.off()
        }

    }, [ENDPOINT])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages])

    //function for sending messages
    const sendMessage = (e) => {
        e.preventDefault()
        if(message){
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    //console.log(message, messages)
    return (
        <div className="">
            <div className="chat-container">
                <ChatHead room={room}/>
                <ChatMessages messages={messages} username={username} />
                <ChatInput message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
}

export default ActiveChat
