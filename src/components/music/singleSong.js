import React from 'react'
import songCover from '../../image/giphy.gif'

const SingleSong = () => {
    return (
        <div className="row">
        <div className="white-text lighten-2" style={{marginTop:'150px', paddingLeft:'10px', backgroundColor:'#000033'}}>
            <strong><p>Download Music Mp3: Mercy Chinwo - Chinedum</p></strong>
            <p>Posted by: Admin on December 9, 2019</p>
            </div>
            
            <div className="center" >
            <img src={songCover} alt="cover" className="responsive-img" style={{width:'400px',height:'300px'}}/>
            </div>
            <div className="card z-depth-0 ">
                <div className="card-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt in facilis. Accusantium quasi assumenda nostrum fugit corrupti, eius delectus vero sapiente ipsa eum blanditiis dolor! Reiciendis nulla nihil dolorum.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, facere veniam sit ut laborum dolorum quia delectus molestias velit nam repellendus consequatur, eius illo, corporis quis nulla excepturi repellat iure.</p>
                <div className="card-action center">
                   <a href="#"> Download Here: <i className="material-icons">file_download</i></a>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default SingleSong