import React from 'react'
import LyricsSummary from './lyricsSummary'
import LyricsPagination from './lyricsPagination'

const LyricsRecommended = (props) => {
    let {lyric, isLoaded, postsPerPage, totalPosts, paginate} = props
    return (
        <div className="container">
        <h5 className="white-text left-align">Recommended</h5>
        <LyricsSummary lyric={lyric} isLoaded={isLoaded}/>
        <LyricsPagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate}/>
        </div>
    )
}

export default LyricsRecommended
