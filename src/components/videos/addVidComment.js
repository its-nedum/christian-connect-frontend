import React from 'react'
import {connect} from 'react-redux'
import {createComment} from '../../store/actions/videoActions'

class AddVidComment extends React.Component {
    state = {
        comment: "",
        videoId: this.props.videoId,
        requiredField: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let {comment, videoId} = this.state
        
        if(comment !== "" && comment !== " "){
            this.setState({
                requiredField: false
            })
            const newComment = {
                comment,
                videoId
            }
            this.props.createComment(newComment)
        }else{
            this.setState({
                requiredField: '*Comment field is required'
            })
        }
        
    }
    render(){
        const {notification} = this.props
    return (
       <div className="row">
        <div className="col s12 m8">
        <h5 className="white-text left-align">Post a Comment</h5>
            <form className="white">
            
                <div className="input-field">
                    <label htmlFor="comment">Comment</label>
                    <input type="text" id="comment" onChange={this.handleChange}/>
                </div>
                <div className="input-field center">
                    <button className="btn pink lighten-1 z-depth-0" onClick={this.handleSubmit}>Submit</button>
                </div>
                <div className="red-text center">
                    {notification ? <p>{notification}</p> : null}
                    {this.state.requiredField}
                </div>
            </form>
        </div>
        </div>
    )
}
}

const mapStateToProps = (state) => {
    return {
        notification: state.video.notification
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createComment: (newComment) => dispatch(createComment(newComment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddVidComment)
