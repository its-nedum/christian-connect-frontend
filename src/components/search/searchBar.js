import React from 'react'
import { history } from '../../App'

class SearchBar extends React.Component {
    state = {
        term: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { term } = this.state;
        if(!term || term.length < 3){
            //Do nothing
        }else{
            history.push(`/search/${term}`);
            window.location.reload();
        }
    }

     render(){   
    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <form style={{marginTop:'0px'}} onSubmit={this.handleSubmit}>
                        <div className="input-field">
                            <input id="term" type="search" onChange={this.handleChange}  placeholder="What are you looking for?" className="white" style={{paddingLeft:'10px',borderRadius:'15px'}} />
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </div> 
        </div>
    )
    }
}



export default SearchBar;