import React from 'react'
import {NavLink} from 'react-router-dom'
import {HashLoader} from 'react-spinners'

const VidRecommendedSummary = (props) => {
    let {video, isLoaded} = props
    return (
        <div>
            <div className="row">
               {isLoaded ? 
               <div>
               {video && video.map( (vid) => {
                   return(
                    <div className="col s12 m6 l3" key={vid.id}>
                    <NavLink to={`/category/video/${vid.id}`}>
                        <div className="card z-depth-0">
                        <div className="card-image">
                            <img src={vid.image_url} alt="video cover" className="responsive-img"/>
                        </div>
                        <div className="card-content">
                            <p className="grey-text">{vid.video_title}</p>
                        </div>
                        </div>
                    </NavLink>
                    </div>
                   )
               })}
                </div>
                :
                 <div className="sweet-loading">
                        <HashLoader
                        sizeUnit={"px"}
                        size={200}
                        color={"#fff"}
                        />
                 </div>
               }    
            </div>
        </div>
    )
}

export default VidRecommendedSummary
