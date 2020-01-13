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

{/* [Verse]<br/>
He's done so much for me<br/>
I can not tell it all<br/>
Narakele Mo<br/>
If I Had ten thousand tongues<br/>
It won't still be enough<br/>
Narakele Mo<br/>
Chukwu na gwom o ria le<br/>
When You heal You heal completely<br/>
Nara elele mo<br/>
Chukwu mara obim o<br/>
Isi ikendu le<br/>
Nara ekele mo<br/>
[Pre-Chorus]<br />
What shall I render to Jehovah?<br/>
For he has done so very much for me<br/>
What shall I render to Jehovah?<br/>
For he has done so very much for me<br/>
[Chorus] <br/>
Naranara e, Narakele<br/>
Narakele Mo<br/>
Nara nara e, Narakele<br/>
Narakele Mo<br/>
Nara nara e, Narakele<br/>
Narakele Mo<br/>
[Pre-Chorus]<br />
What shall I render to Jehovah?<br/>
For he has done so very much for me<br/>
What shall I render to Jehovah?<br/>
For he has done… <br/> */}
