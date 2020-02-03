import React from 'react'
import RecommededSummary from './recommededSummary' 
import Pagination from './pagination'

const Recommended = (props) => {
    let {music, isLoaded, postsPerPage, totalPosts, paginate} = props
    
    return (
        <div className="container">
        <h5 className="white-text left-align">Recommended</h5>
            <RecommededSummary music={music} isLoaded={isLoaded}/>
            <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate}/>
        </div>
    )
}

export default Recommended
