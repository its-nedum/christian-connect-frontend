import React from 'react'
import moment from 'moment'

const SingleVideo = (props) => {
    
    let {video} = props;
    let dbUrl = video.videoUrl;
    let replaced = dbUrl.replace('//','/');
    let splitted = replaced.split('/')
    let downloadUrl = `${splitted[0]}//${splitted[1]}/${splitted[2]}/${splitted[3]}/${splitted[4]}/fl_attachment:${video.videoTitle}/${splitted[5]}/${splitted[6]}/${splitted[7]}/${splitted[8]}`
    
    return (
        <div className="row">
        <div className="white-text lighten-2" style={{marginTop:'0px', paddingLeft:'10px', borderRadius:'10px', backgroundColor:'#000033'}}>
            <strong><p>Download Music Video Mp4: {video.videoTitle}</p></strong>
            <p>Posted by: {video.uploadedBy} on {moment(video.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
            
            <div className="center" >
                    <video controls>
                        <source src={downloadUrl} type="video/mp3"></source>
                        <source src={downloadUrl} type="video/mp4"></source>
                        Your browser is not supported.
                    </video>
            {/* <img src={video.imageUrl} alt="video cover" className="responsive-img" style={{width:'400px',height:'300px'}}/> */}
            </div>
            <div className="card z-depth-0 ">
                <div className="card-content">
                    <p>{video.videoAbout}</p>
                <div className="card-action center">
                    
                   <p><a href={downloadUrl} rel="noopener noreferrer" download> Download Here: <i className="material-icons">file_download</i></a></p>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default SingleVideo
