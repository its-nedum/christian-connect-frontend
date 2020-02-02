import React from 'react'
import NewsSummary from './newsSummary'
import {HashLoader} from 'react-spinners'


const NewsRecommeded = ({news, isLoaded}) => {
    return (
        <div className="container">
            <h5 className="white-text left-align">Top News</h5>
            {isLoaded ? 
                <div className="row">
                    <NewsSummary news={news}/> 
                </div>
            :
            <div className="sweet-loading">
                <HashLoader
                sizeUnit={"px"}
                size={200}
                color={"#fff"}
                />
            </div>
            }
        
        </div>
    )
}

export default NewsRecommeded
