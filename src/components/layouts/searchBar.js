import React from 'react'



const SearchBar = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <form style={{marginTop:'0px'}}>
                        <div className="input-field">
                            <input id="search" type="search" placeholder="What are you looking for?" className="white" style={{paddingLeft:'10px',borderRadius:'15px'}} />
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </div> 
        </div>
    )
}

export default SearchBar;