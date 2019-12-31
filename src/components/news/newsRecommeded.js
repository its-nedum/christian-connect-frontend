import React from 'react'
import NewsSummary from './newsSummary'


const NewsRecommeded = () => {
    return (
        <div className="container">
            <h5 className="white-text left-align">Top News</h5>
        <div className="row">
            <NewsSummary />
            
        </div>
        </div>
    )
}

export default NewsRecommeded
