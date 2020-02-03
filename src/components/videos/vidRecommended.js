import React from 'react'
import VidRecommendedSummary from './vidRecommendedSummary'
import VidPagination from './vidPagination'

const VidRecommended = (props) => {
    let {video, isLoaded, postsPerPage, totalPosts, paginate} = props
    return (
        <div className="container">
        <h5 className="white-text left-align">Recommended</h5>
        <VidRecommendedSummary video={video} isLoaded={isLoaded} />
        <VidPagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate}/>
        </div>
    )
}

export default VidRecommended
