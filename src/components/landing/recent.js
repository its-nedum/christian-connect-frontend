import React from 'react'
import RecentDetails from './recentDetails'
import axios from 'axios'
import {HashLoader} from 'react-spinners'


class Recent extends React.Component{
    state = {
        recent: [],
        isLoaded: false
    }

    async componentDidMount(){
        await axios({
            method: 'get',
            url: 'https://christian-connect-api.herokuapp.com/api/v1/admin-extra',
            //url: 'http://localhost:4242/api/v1/admin-extra',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then( (response) => {
            let {data} = response.data
            this.setState({
                recent: data,
                isLoaded: true
            })
        }).catch( (err) => {
            console.log(err)
        })
    }

    render(){
        //console.log(this.state.recent)
    return (
        <div className="container">
            <h5 className="white-text center">Recently Added</h5>
            <div className="row">
                {this.state.isLoaded ?
                <RecentDetails recents={this.state.recent}/>
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
        </div>
    )
}
}
export default Recent