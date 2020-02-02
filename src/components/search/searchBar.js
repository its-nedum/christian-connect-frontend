import React from 'react'
import {connect} from 'react-redux'
import { createSearch } from '../../store/actions/searchActions'
import axios from 'axios'
class SearchBar extends React.Component {
    state= {
        term: null,
        results: []
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let { term } = this.state
        if(!term || term.length < 3){
            //Do nothing
        }else{
            const formData = new FormData()
            formData.append('term', term)
            //this.props.createSearch(formData)
            axios({
                method: 'post',
                //url: `https://christian-connect-api.herokuapp.com/api/v1/search`,
                url: `http://localhost:4242/api/v1/search`,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: formData
            }).then( (response) => {
                //console.log(response)
                let { results } = response.data.data;
                this.setState({
                    results
                })
               
            }).catch( (err) => {
                console.log(err)
            })
        }
        
    }

    render(){
        console.log(this.state.results)
    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <form style={{marginTop:'0px'}} onSubmit={this.handleSubmit}>
                        <div className="input-field">
                            <input id="term" type="search" onChange={this.handleChange} placeholder="What are you looking for?" className="white" style={{paddingLeft:'10px',borderRadius:'15px'}} />
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </div> 
        </div>
    )
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        createSearch: (searchItem) => dispatch(createSearch(searchItem))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);