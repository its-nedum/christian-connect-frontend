import React from 'react'
import {Link} from 'react-router-dom'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
            pageNumbers.push(i)
    }
    
    return (
        <div>
        <ul className="pagination center">
            <li className="disabled"><Link to="#!"><i className="material-icons">chevron_left</i></Link></li>
            {pageNumbers.map(number => (
                <li key={number} className="waves-effect">
                    <Link onClick={ () => paginate(number)} to="#!">{number}</Link>
                </li>
            ))}
            <li className="waves-effect"><Link to="#!"><i className="material-icons">chevron_right</i></Link></li>
        </ul>
        </div>
    )  
}

export default Pagination