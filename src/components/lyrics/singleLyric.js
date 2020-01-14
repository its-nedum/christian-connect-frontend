import React from 'react'
import moment from 'moment'

const SingleLyric = (props) => {
    let { lyric } = props

    return (
        <div className="row">
        <div className="white-text lighten-2" style={{marginTop:'0px', paddingLeft:'10px', borderRadius:'10px', backgroundColor:'#000033'}}>
            <strong><p>Song Lyrics: {lyric.lyricTitle}</p></strong>
            <p>Posted by: {lyric.uploadedBy} on {moment(lyric.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
            
            <div className="card z-depth-0 ">
                <div className="card-content">
                    <p>
                        {lyric.lyric}
                    
                    </p>
                
                </div>
                
            </div>
        </div>
    )
}

export default SingleLyric

