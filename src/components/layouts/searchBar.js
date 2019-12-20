import React from 'react'



const SearchBar = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <form style={{marginTop:'0px'}}>
                        <div className="input-field">
                            <input id="search" type="search" placeholder="What are you looking for?" className="white" style={{paddingLeft:'40px',borderRadius:'20px'}} />
                            <label className="label-icon" htmlFor="search">
                                <i className="material-icons">search</i>
                            </label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </div> 
        </div>
    )
}

export default SearchBar;