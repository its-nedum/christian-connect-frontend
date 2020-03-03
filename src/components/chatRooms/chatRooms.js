import React from 'react'
import { Link } from 'react-router-dom'

const ChatRooms = () => {
    return (
        <div>
        <h5 className="white-text left-align" style={{background:'#000033', padding:'10px', borderRadius:'5px'}}>Chat Rooms</h5>
        <div className="row">

            <div className="col s12 m6">
                <div className="card">
                    <div className="card-content">
                        <Link to='#'><span className="card-title">Region 28</span></Link>
                        <p>Region 28 Chat Room</p>
                    </div>
                    <div className="card-action center">
                        <Link to='/chat-room/region28' >JOIN</Link>
                    </div>
                </div>
            </div>
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-content">
                        <Link to='#'><span className="card-title">Football</span></Link>
                        <p>Christian Connect Football Chat Room</p>
                    </div>
                    <div className="card-action center">
                    <Link to='/chat-room/region28' >JOIN</Link>
                    </div>
                </div>
            </div>
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-content">
                        <Link to='#'><span className="card-title">House Fellowship</span></Link>
                        <p>Connect with other House Fellowship</p>
                    </div>
                    <div className="card-action center">
                    <Link to='/chat-room/region28' >JOIN</Link>
                    </div>
                </div>
            </div>
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-content">
                        <Link to='#'><span className="card-title">All Parish</span></Link>
                        <p>Connect with everybody</p>
                    </div>
                    <div className="card-action center">
                    <Link to='/chat-room/region28' >JOIN</Link>
                    </div>
                </div>
            </div>
                       
        </div>
        </div>
    )
}

export default ChatRooms
