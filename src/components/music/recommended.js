import React from 'react'
import RecommededSummary from './recommededSummary' 
import Pagination from './pagination'

const Recommended = (props) => {
    let {music, isLoaded} = props
    //console.log(music)
    return (
        <div className="container">
        <h5 className="white-text left-align">Recommended</h5>
            <RecommededSummary music={music} isLoaded={isLoaded}/>
            <Pagination />
        </div>
    )
}

export default Recommended
