import React from 'react'
import moment from 'moment'


const SingleSong = (props) => {
    let {music} = props;
    console.log(music)
    return (
        <div className="row">
        <div className="white-text lighten-2" style={{marginTop:'0px', paddingLeft:'10px', borderRadius:'10px', backgroundColor:'#000033'}}>
            <strong><p>Download Music Mp3: {music.musicTitle}</p></strong>
            <p>Posted by: {music.uploadedBy} on {moment(music.created_at).calendar()}</p>
            </div>
            
            <div className="center" >
            <img src={music.imageUrl} alt="cover" className="responsive-img" style={{width:'400px',height:'300px'}}/>
            </div>
            <div className="card z-depth-0 ">
                <div className="card-content">
                    <p>{music.musicAbout}</p>
                <div className="card-action center">
                   <a href={music.musicUrl} rel="noopener noreferrer" download> Download Here: <i className="material-icons">file_download</i></a>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default SingleSong