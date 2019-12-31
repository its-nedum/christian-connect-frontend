import React from 'react'
import RecommededSummary from './recommededSummary'
import Pagination from './pagination'

const Recommended = () => {
    return (
        <div className="container">
        <h5 className="white-text left-align">Recommended</h5>
            <RecommededSummary />
            <RecommededSummary />
            <RecommededSummary />
            <Pagination />
        </div>
    )
}

export default Recommended
