import React from 'react'



const SearchBar = () => {
    return(
        <div>
            <form>
            <div className="input-field">
            <input id="search" type="search" required />
            <label className="label-icon" for="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
            </div>
            </form>
        </div>
    )
}

export default SearchBar;