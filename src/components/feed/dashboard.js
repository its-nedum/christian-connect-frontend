import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import UrThoughts from './urThoughts'
import '../../myStyles/main.css'
import FeedPagination from './feedPagination'


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
                             <Link to="feed/1/comments" className="cardActionLink pink-text"> Comments</Link>
                              </span>
                              
                        <span className="col s6 m4"><i className="material-icons">thumb_up</i> 17 <Link to="#" className="cardActionLink pink-text">Like </Link></span>
                    </div>
                </div>
            </div>
            {/* This card below handles feeds with image */}
            <div className="card">
                <div className="card-content">
                    <span className="card-title">
                        <div className="btn btn-floating pink lighten-1">ZB</div>
                        <span> Zee Baba</span>
                    </span>
                    <div className="card-image">
                        <img src="https://res.cloudinary.com/its-nedum/image/upload/v1574430886/lofkg0pzowvvaljislf4.gif" style={{width:'300px', height:'200px'}} alt="feed-pic" className="responsive-img"/>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo odio suscipit esse fuga. Quam id, repellendus, provident at ad quidem porro expedita, natus aspernatur quasi ea corporis sint eaque soluta!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, ipsa suscipit nostrum distinctio!
                    </div>
                    <div className="card-action">
                        <span className="col s12 m4">Posted 4:55pm yesterday </span>
                        <span className="col s6 m4">
                            <i className="material-icons">comment</i>
                             88 
                             <Link to="feed/1/comments" className="cardActionLink pink-text"> Comments</Link>
                              </span>
                              
                        <span className="col s6 m4"><i className="material-icons">thumb_up</i> 17 <Link to="#" className="cardActionLink pink-text">Like </Link></span>
                    </div>
                </div>
            </div>

            <FeedPagination />
        </div>
    )
}
}

export default Dashboard
