import React from 'react'

const VidPagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
            pageNumbers.push(i)
    }
    
    return (
        <div>
        <ul className="pagination center">
            <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
            {pageNumbers.map(number => ( 
                <li key={number} className="waves-effect">
                    <a onClick={ () => paginate(number)} href="#!">{number}</a>
                </li>
            ))}
            <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
        </ul>
        </div>
    ) 
}

export default VidPagination