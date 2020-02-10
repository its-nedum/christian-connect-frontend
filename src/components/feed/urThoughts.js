import React, { Component } from 'react'
import '../../myStyles/main.css'
import {Redirect} from 'react-router-dom'
import {isLoggedIn} from '../../helpers/utility'
import { connect } from 'react-redux'
import { createPost } from '../../store/actions/postsActions'

 class UrThoughts extends Component {
    state = {
        post: null,
        image: null,
        formStatus: false,
        swapValue: 'Add Image',
        postError: false,
        imagePostError: false
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

    handlePostWithoutImageError = () => {
        let { post } = this.state;
        if(!post || post === null){
            this.setState({
                postError: 'Post is required'
            })
            return false
        }else{
            this.setState({
                postError: false
            })
            return true
        }
    }

    handlePostWithoutImage = (e) => {
        e.preventDefault();
      if(this.handlePostWithoutImageError()){
        let { post } = this.state;
        let newPost = new FormData();
        newPost.append('post', post)
        this.props.createPost(newPost)
      }else{
        console.log('Bro. pls check the error message')
      }
    }

    handlePostWithImageError = () => {
        let { post, image } = this.state;
        if(!post || post === null || !image || image === null){
            this.setState({
                imagePostError: 'All fields are required'
            })
            return false
        }else{
            this.setState({
                imagePostError: false
            })
            return true
        }
    }

    handlePostWithImage = (e) => {
        e.preventDefault();
        if(this.handlePostWithImageError()){
        let { post, image } = this.state;
        let newPost = new FormData();
        newPost.append('post', post)
        newPost.append('image', image)
        this.props.createPost(newPost)
        }else{
            console.log('Bro. pls check the error message')
        }
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
                    {this.state.postError ? <span className="red-text">*Post is required</span> : null}
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
                    {this.state.imagePostError ? <span className="red-text">*All fields are required</span> : null}
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
