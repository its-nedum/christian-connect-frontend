import React from 'react'
import moment from 'moment'
import {NavLink} from 'react-router-dom'

const RecentDetails = (props) => {
    let {recents} = props
    let {event, lyric, music, video} = recents
    return (
        <div>
            <div className="col s12 m6">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <NavLink to={`/category/music/${music.id}`}>{music.music_title}</NavLink>
                        <p>Category: Music</p>
                        <p>Added: {moment(music.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    </div>
                </div>
            </div>

            <div className="col s12 m6">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <NavLink to={`/category/video/${video.id}`}>{video.video_title}</NavLink>
                        <p>Category: Video</p>
                        <p>Added: {moment(video.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    </div>
                </div>
            </div>

            <div className="col s12 m6">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <NavLink to={`/category/lyric/${lyric.id}`}>{lyric.lyric_title}</NavLink>
                        <p>Category: Lyric</p>
                        <p>Added: {moment(lyric.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    </div>
                </div>
            </div>

            <div className="col s12 m6">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <NavLink to={`/category/events`}>{event.theme}</NavLink>
                        <p>Category: Event</p>
                        <p>Added: {moment(event.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentDetails