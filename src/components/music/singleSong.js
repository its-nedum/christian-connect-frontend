import React from 'react'
import moment from 'moment'


const SingleSong = (props) => {
    let {music} = props;
    let dbUrl = music.musicUrl;
    let replaced = dbUrl.replace('//','/');
    let splitted = replaced.split('/')
    let downloadUrl = `${splitted[0]}//${splitted[1]}/${splitted[2]}/${splitted[3]}/${splitted[4]}/fl_attachment:${music.musicTitle}/${splitted[5]}/${splitted[6]}/${splitted[7]}/${splitted[8]}`
    return (
        <div className="row">
        <div className="white-text lighten-2" style={{marginTop:'0px', paddingLeft:'10px', borderRadius:'10px', backgroundColor:'#000033'}}>
            <strong><p>Download Music Mp3: {music.musicTitle}</p></strong>
            <p>Posted by: {music.uploadedBy} on {moment(music.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
            
            <div className="center" >
            <img src={music.imageUrl} alt="cover" className="responsive-img" style={{width:'400px',height:'300px'}}/>
            </div>
            <div className="card z-depth-0 ">
                <div className="card-content">
                    <p>{music.musicAbout}</p>
                <div className="card-action center">
                   <a href={downloadUrl} rel="noopener noreferrer" download> Download Here: <i className="material-icons">file_download</i></a>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default SingleSong