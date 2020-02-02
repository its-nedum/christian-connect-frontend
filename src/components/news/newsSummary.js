import React from 'react'

import NewsPagination from './newsPagination'

const NewsSummary = ({news}) => {
    console.log(news)
    return (
        <div>
            <div className="col s12">
                <div className="row">
                    {news && news.map((article) => {
                        return(
                            <div className="col s6" key={article.title}>
                                <div className="card">
                                    <div className="card-title">{article.title}</div>
                                    {/* <div className="card-image">
                                        <img src='https://res.cloudinary.com/its-nedum/image/upload/v1575989378/connect_fbzwrp.jpg' alt="news" className="responsive-img"/>
                                    </div> */}
                                    <div className="card-content">
                                        <p>{article.description}</p>
                                    </div>
                                    <div className="card-action">
                                    <a href={article.url}>Read more</a>
                                    </div>
                                </div>
                                
                            </div>
                        )
                    })}
                    
                    
                </div>
                <NewsPagination />
            </div>
        </div>
    )
}

export default NewsSummary
