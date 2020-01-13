import React from 'react'
import VidRecommendedSummary from './vidRecommendedSummary'
import VidPagination from './vidPagination'

const VidRecommended = (props) => {
    let {video, isLoaded} = props
    return (
        <div className="container">
        <h5 className="white-text left-align">Recommended</h5>
        <VidRecommendedSummary video={video} isLoaded={isLoaded} />
        <VidPagination />
        </div>
    )
}

export default VidRecommended
