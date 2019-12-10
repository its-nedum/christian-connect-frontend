import React from 'react'
import NewsSummary from './newsSummary'
import NewsBanner from '../adverts/newsBanner'

const NewsRecommeded = () => {
    return (
        <div className="container">
            <h5 className="white-text left-align">Top News</h5>
        <div className="row">
            <NewsSummary />
            <NewsBanner />
        </div>
        </div>
    )
}

export default NewsRecommeded
