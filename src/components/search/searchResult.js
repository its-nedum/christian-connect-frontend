import React from 'react'
import SearchPagination from './searchPagination'
import moment from 'moment'
import {NavLink} from 'react-router-dom'

const SearchResult = (props) => { 
    let {result, postsPerPage, totalPosts, paginate} = props
    
    return (
        <div>
            <div className="container">
            
            <div className="row">
                {result && result.map((item) => { 
                    return(
                        <div className="col s12 m6" key={item.id}>
                            <div className="card">
                                <div className="card-content">
                                    <NavLink to={`/category/music/${item.id}`} >
                                    <span className="card-title">{item.music_title}</span>
                                    </NavLink>
                                    <p>Category: {item.category}</p>
                                    <p>Uploaded: {moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                                    
                                </div>
                            </div>
                        </div>
                    )
                })}
                
                
            </div>
            <SearchPagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate}/>
            </div>
        </div>
    )
}

export default SearchResult
