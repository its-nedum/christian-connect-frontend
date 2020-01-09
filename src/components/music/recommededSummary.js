import React from 'react'
import {NavLink} from 'react-router-dom' 
import {HashLoader} from 'react-spinners'


const RecommededSummary = (props) => {
    let {music, isLoaded} = props;
    console.log(music)
    return (
        <div>
            <div className="row">
            {isLoaded ? 
            <div>
                { music && music.map( (song) => {
                    return(
                        <div className="col s12 m6 l3" key={song.id}>
                        <NavLink to={`/category/music/${song.id}`}>
                            <div className="card z-depth-0">
                            <div className="card-image">
                                <img src={song.image_url} alt="cover" className="responsive-img"/>
                            </div>
                            <div className="card-content">
                                <p className="grey-text">{song.music_title}</p>
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
                        color={"#003333"}
                        />
                 </div>
            }
            </div>
        </div>
    )
}

export default RecommededSummary