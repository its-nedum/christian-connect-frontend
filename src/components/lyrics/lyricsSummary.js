import React from 'react'
import {NavLink} from 'react-router-dom'
import {HashLoader} from 'react-spinners'
import moment from 'moment'

const LyricsSummary = (props) => {
    let {lyric, isLoaded} = props
    console.log(lyric)
    return (
        <div className="row">
            {isLoaded ?
            <div>
            {lyric && lyric.map( (singleLyric) => {
                return(
                    <div className="col s12 m6" key={singleLyric.id}>
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title"><NavLink to={`/category/lyric/${singleLyric.id}`}><strong>{singleLyric.lyric_title}</strong></NavLink></span>
                            <p>Category: {singleLyric.category}</p>
                            <p>Posted on: {moment(singleLyric.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                        </div>
                    </div>
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
        
    )
}

export default LyricsSummary
