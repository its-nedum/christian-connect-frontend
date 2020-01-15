import React from 'react'
import Navbar from '../layouts/navbar'
import SingleVideo from './singleVideo'
import AddVidComment from './addVidComment'
import VidComments from './vidComments'
import Footer from '../layouts/footer'
import Header from '../layouts/header'
import SearchBar from '../search/searchBar'
import axios from 'axios'
import {HashLoader} from 'react-spinners'

class SingleVideoWithComments extends React.Component {
    state = {
        video: [],
        isLoaded: false
    }
 
    async componentDidMount() {
        await axios({
            method: 'get',
            url: `https://christian-connect-api.herokuapp.com/api/v1/category/video/${this.props.match.params.videoId}`,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( (response) => {
            let {data} = response.data;
            this.setState({
                video: data,
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
                <SingleVideo video={this.state.video}/>
                <AddVidComment videoId={this.props.match.params.videoId}/>
                <VidComments comments={this.state.video.comments}/>
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
export default SingleVideoWithComments
