import React from 'react'

const SearchPagination = () => {
    return (
        <div>
        <ul className="pagination center">
            <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
            <li className="active"><a href="#!">1</a></li>
            <li className="waves-effect"><a href="#!">2</a></li>
            <li className="waves-effect"><a href="#!">3</a></li>
            <li className="waves-effect"><a href="#!">4</a></li>
            <li className="waves-effect"><a href="#!">5</a></li>
            <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
        </ul>
        </div>
    )
}

export default SearchPagination
