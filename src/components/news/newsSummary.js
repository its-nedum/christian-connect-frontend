import React from 'react'

import NewsPagination from './newsPagination'

const NewsSummary = ({news, postsPerPage, totalPosts, paginate}) => {
    
    return (
        <div>
            <div className="col s12">
                <div className="row">
                    {news && news.map((article) => {
                        return(
                            <div className="col s12" key={article.title}>
                                
                                <div className="card">
                                <div className="card-content">
                                <a href={article.url} target='_blank' rel="noopener noreferrer">
                                    <div className="card-title">{article.title}</div>
                                    </a>
                                        <p>{article.description}</p>
                                </div>
                                    
                                </div>
                                   
                            </div>
                        )
                    })}
                    
                    
                </div>
                <NewsPagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate}/>
            </div>
        </div>
    )
}

export default NewsSummary
