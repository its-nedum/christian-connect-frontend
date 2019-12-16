import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import UrThoughts from './urThoughts'


class Dashboard extends Component {
    
    render(){
    return (
        <div>
            <UrThoughts />
            <div className="card">
                <div className="card-content">
                    <span className="card-title">
                        <div className="btn btn-floating pink lighten-1">CE</div>
                        <span> Chinedu Emesue</span>
                    </span>
                    <div>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo odio suscipit esse fuga. Quam id, repellendus, provident at ad quidem porro expedita, natus aspernatur quasi ea corporis sint eaque soluta!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, ipsa suscipit nostrum distinctio impedit quidem asperiores, provident unde blanditiis, perspiciatis at dolorem! Ipsum eaque, molestias id consequatur soluta iusto beatae!
                    </div>
                    <div className="card-action">
                        <span className="col s12 m4">Posted 4:55pm yesterday </span>
                        <span className="col s6 m4">
                            <i className="material-icons">comment</i>
                             88 
                             <Link to="feed/1/comments">Comments</Link>
                              </span>
                              
                        <span className="col s6 m4"><i className="material-icons">thumb_up</i> 17 like </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default Dashboard
