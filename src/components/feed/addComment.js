import React from 'react'
import '../../myStyles/main.css'
import {connect} from 'react-redux'
import {postComment} from '../../store/actions/usersActions'

class AddComment extends React.Component {
    state = {
        comment: null,
        post_id: this.props.post_id,
        error: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let {post_id, comment} = this.state
        if(!comment){
            return this.setState({error: '*Comment is required'})
        }else{
            this.setState({error: null})
        }

        let newComment = {
            post_id,
            comment
        }
        this.props.postComment(newComment)
        
    }

    render(){
        const { notification } = this.props
    return (
        <div className="white">
            <form id="commentForm" onSubmit={this.handleSubmit}>
                <div className="row">
                <div className="input-field col s9">
                    <input type="text" id="comment" className="commentText" onChange={this.handleChange} placeholder="Say something..."/>
                </div>
                <div className="input-field col s2">
                    <input type="button" onClick={this.handleSubmit} className="btn pink lighten-1 z-depth-0" value="Post" />
                </div>
                </div>
                <div className="red-text center">
                { this.state.error ? <p>{this.state.error}</p> : null}
                {notification ? <p>{notification}</p> : null}
                </div>
            </form>
        </div>
    )
}
}

const mapStateToProps = (state) => {
    return {
        notification: state.users.notification,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postComment: (newComment) => dispatch(postComment(newComment)),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment)
