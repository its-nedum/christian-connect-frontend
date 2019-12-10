import React from 'react'
import LyricsSummary from './lyricsSummary'
import LyricsPagination from './lyricsPagination'

const LyricsRecommended = () => {
    return (
        <div className="container">
        <h5 className="white-text left-align">Recommended</h5>
        <LyricsSummary />
        <LyricsSummary />
        <LyricsSummary />
        <LyricsSummary />
        <LyricsPagination />
        </div>
    )
}

export default LyricsRecommended
