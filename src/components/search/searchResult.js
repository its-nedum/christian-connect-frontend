import React from 'react'
import SearchPagination from './searchPagination'

const SearchResult = () => {
    return (
        <div>
            <div className="container">
            <h5 className="white-text left-align">Search Result(s)</h5>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Frank Edwards - Mma Mma</span>
                            <p>Category: Music</p>
                            <p>Uploaded: August 17, 2020</p>
                            <p><a href="/music/17">Download</a></p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Frank Edwards - Mma Mma</span>
                            <p>Category: Video</p>
                            <p>Uploaded: August 17, 2020</p>
                            <p><a href="/videos/17">Download</a></p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Frank Edwards - Mma Mma</span>
                            <p>Category: Lyrics</p>
                            <p>Uploaded: August 17, 2020</p>
                            <p><a href="/lyrics/17">Download</a></p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Frank Edwards release new album</span>
                            <p>Category: News</p>
                            <p>Uploaded: August 17, 2020</p>
                            <p><a href="/news/17">Read More</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <SearchPagination />
            </div>
        </div>
    )
}

export default SearchResult
