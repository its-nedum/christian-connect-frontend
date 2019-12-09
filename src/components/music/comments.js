import React from 'react'

const Comments = () => {
    return (
        <div className="row">
        <div className="col s12 m8">
             <h5 className="white-text left-align">Comments</h5>
            <div className="card z-depth-0">
                <div className="card-content">
                    <p>Nice song bro</p>
                    <div className="card-action grey lighten-2 grey-text"><p> Posted by: Bright Orji on 02-01-2020</p></div>
                </div>
            </div>
            <div className="card z-depth-0">
                <div className="card-content">
                    <p>I like this song</p>
                    <div className="card-action grey lighten-2 grey-text"><p> Posted by: Kayode on 12-01-2019</p></div>
                </div>
            </div>
            <div className="card z-depth-0">
                <div className="card-content">
                    <p>Nice one</p>
                    <div className="card-action grey lighten-2 grey-text"><p> Posted by: Zeabon on 12-01-2019</p></div>
                </div>
            </div>
        </div>
        {/* Advert banner goes here */}
        <div className="col m2 hide-on-small-only">
            <div className="card">
                
            </div>
        </div>
        </div>
    )
}

export default Comments