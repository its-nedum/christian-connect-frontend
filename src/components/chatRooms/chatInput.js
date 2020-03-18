import React from 'react'
import './chatStyles/chatInput.css'

const ChatInput = ({message, setMessage, sendMessage}) => {
    return (
        <div>
            <form className="form">
                <input className="input" type="text"
                 placeholder="Type a message..."  value={message}
                 onChange={(e) => setMessage(e.target.value)}
                 onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}
                 />
                <button className="sendButton" onClick={(e) => sendMessage(e)}><i className="material-icons">send</i></button>
            </form>
        </div>
    )
}

export default ChatInput
