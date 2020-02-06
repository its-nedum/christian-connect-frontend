import React, { Component } from 'react'
import '../../myStyles/main.css'
import {Redirect} from 'react-router-dom'
import {isLoggedIn} from '../../helpers/utility'
import { connect } from 'react-redux'
import { createPost } from '../../store/actions/postsActions'

 class UrThoughts extends Component {
    state = {
        formStatus: false,
        swapValue: 'Add Image',
        post: null,
        image: null
    }

    swapForm = (e) => {
       e.preventDefault()
       let textForm = document.getElementById('textForm');
       let imageForm = document.getElementById('imageForm');
        if(this.state.formStatus === false){
            textForm.classList.add('hide');
            imageForm.classList.replace('hide','show');
            this.setState({formStatus: true, swapValue: 'Remove Image'})
        }else{
            imageForm.classList.replace('show','hide');
            textForm.classList.replace('hide','show');
            this.setState({formStatus: false, swapValue: 'Add Image'})
        }
    }

    handleFile = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handlePostWithoutImage = (e) => {
        e.preventDefault();
        let { post } = this.state;
        console.log(post)
        let newPost = new FormData();
        newPost.append('post', post)
        //this.props.createPost(newPost)

    }

    handlePostWithImage = (e) => {
        e.preventDefault();
        let { post, image } = this.state;
        let posts = {post, image}
        console.log(posts)
        let newPost = new FormData();
        newPost.append('post', post)
        newPost.append('image', image)
        //this.props.createPost(newPost)

    }

    render() {
        const { notification } = this.props
        if(!isLoggedIn()) return <Redirect to='/signin' />
        return (
            <div>
            <div className="card">
                <div className="card-content">
                    <div className="card-title">
                    Share your thoughts
                    <input type="button" className="btn grey lighten-1 z-depth-0 right" onClick={this.swapForm} value={this.state.swapValue} />
                    </div>

                    <form id="textForm">
                    <div className="input-field">
                        <input type="text" id="post" onChange={this.handleChange} placeholder="What's on your mind?" />
                    </div>
                    <div className="input-field">
                        <input type="button" onClick={this.handlePostWithoutImage} className="btn pink lighten-1 z-depth-0" value="Share" />
                    </div>
                    <div className="red-text center">
                        {notification ? <span>{notification}</span> : null}
                    </div>
                    </form>

                    <form className="hide" id="imageForm">
                    <div className="input-field">
                        <input type="text" id="post" onChange={this.handleChange} placeholder="What's on your mind?"/>
                    </div>
                    <div className="file-field input-field">
                        <div className="btn-small">
                            <span>Image</span>
                            <input type="file" name="image" onChange={this.handleFile}/>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text"/>
                        </div>
                        
                    </div>
                    
                    <div className="input-field">
                        <input type="button" onClick={this.handlePostWithImage} className="btn pink lighten-1 z-depth-0" value="Share" />
                    </div>
                    <div className="red-text center">
                        {notification ? <span>{notification}</span> : null}
                    </div>
                    </form>

                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notification: state.posts.notification,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UrThoughts)
