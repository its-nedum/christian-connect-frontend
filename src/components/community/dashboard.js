import React, {Component} from 'react'
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
                        <span>Posted 4:55pm yesterday </span>
                        <span><i className="material-icons">comment</i> 88 Comments </span>
                        <span><i className="material-icons">thumb_up</i> 17 like </span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
}

export default Dashboard
