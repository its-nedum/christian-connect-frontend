import React, { Component } from 'react'
import '../../myStyles/main.css'

 class UrThoughts extends Component {
    state = {
        formStatus: false,
        swapValue: 'Add Image'
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
    render() {
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
                        <input type="text" placeholder="What's on your mind?" />
                    </div>
                    <div className="input-field">
                        <input type="button" className="btn pink lighten-1 z-depth-0" value="Share" />
                    </div>
                    </form>

                    <form className="hide" id="imageForm">
                    <div className="input-field">
                        <input type="text" placeholder="What's on your mind?"/>
                    </div>
                    <div className="file-field input-field col s12">
                        <div className="btn-small">
                            <span>Image</span>
                            <input type="file" name="image" />
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text"/>
                        </div>
                    </div>
                    <div className="input-field">
                        <input type="button" className="btn pink lighten-1 z-depth-0" value="Share" />
                    </div>
                    </form>

                </div>
            </div>
            </div>
        )
    }
}

export default UrThoughts
