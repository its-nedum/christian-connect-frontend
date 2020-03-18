import React from 'react'
import './styles/input.css'

const Input = () => {
     
    return (
        <div>
            <form className="form">
                <input className="input" type="text" id="message" placeholder="Type a message..." />
                <button className="sendButton" ><i className="material-icons">send</i></button>
            </form>
        </div>
    )
}

export default Input
