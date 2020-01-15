import React from 'react'
import Navbar from '../layouts/navbar'
import SingleLyric from './singleLyric'
import AddLyricComment from './addLyricComment'
import LyricsComment from './lyricsComment'
import Footer from '../layouts/footer'
import Header from '../layouts/header'
import SearchBar from '../search/searchBar'
import axios from 'axios'
import {HashLoader} from 'react-spinners'

class SingleLyricWithComments extends React.Component {
    state = {
        lyric: [],
        isLoaded: false
    }
 
    async componentDidMount() {
        await axios({
            method: 'get',
            url: `https://christian-connect-api.herokuapp.com/api/v1/category/lyric/${this.props.match.params.lyricsId}`,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( (response) => {
            let {data} = response.data;
            this.setState({
                lyric: data,
                isLoaded: true
            })
        }).catch( (err) => {
            console.log(err)
        })
    }
    render() {
       
    return (
        <div>
            <Header />
            <Navbar />
            <SearchBar />
            <div className="container">
                {this.state.isLoaded ? 
                <div>
                <SingleLyric lyric={this.state.lyric}/>
                <AddLyricComment lyricId={this.props.match.params.lyricsId}/>
                <LyricsComment comments={this.state.lyric.comments}/>
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
            <Footer />
        </div>
    )
}
}
export default SingleLyricWithComments
