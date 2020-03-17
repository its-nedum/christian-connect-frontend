import React from 'react'
import './styles/myChat.css'
import Head from './head'
import Messages from './messages'
import Input from './input'
import io from 'socket.io-client'
const socketUrl = "localhost:4242"
class MyChat extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            socket: null
        }
    }

    componentDidMount(){
        this.initSocket()
    }

    initSocket = () => {
        const socket = io(socketUrl)
        socket.on('connect', () => {
            console.log('Connected')
        })
    }
    render(){
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
}
export default MyChat
