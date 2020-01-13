import React from 'react'
import LyricsSummary from './lyricsSummary'
import LyricsPagination from './lyricsPagination'

const LyricsRecommended = (props) => {
    let {lyric, isLoaded} = props
    return (
        <div className="container">
        <h5 className="white-text left-align">Recommended</h5>
        <LyricsSummary lyric={lyric} isLoaded={isLoaded}/>
        <LyricsPagination />
        </div>
    )
}

export default LyricsRecommended
