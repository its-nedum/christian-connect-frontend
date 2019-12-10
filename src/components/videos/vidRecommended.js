import React from 'react'
import VidRecommendedSummary from './vidRecommendedSummary'
import VidPagination from './vidPagination'

const VidRecommended = () => {
    return (
        <div className="container">
        <h5 className="white-text left-align">Recommended</h5>
        <VidRecommendedSummary />
        <VidRecommendedSummary />
        <VidRecommendedSummary />
        <VidRecommendedSummary />
        <VidRecommendedSummary />
        <VidPagination />
        </div>
    )
}

export default VidRecommended
