import React from 'react'
import EventDetails from './eventDetails'
import '../../myStyles/main.css'
import axios from 'axios'
import {HashLoader} from 'react-spinners'

class Events extends React.Component {
    state = {
        event: [],
        isLoaded: false
    }

    async componentDidMount(){
        await axios({
            method: 'get',
            url: 'https://christian-connect-api.herokuapp.com/api/v1/category/event/up-coming',
            //url: 'http://localhost:4242/api/v1/category/event/up-coming',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then( (response) => {
            let {data} = response.data
            this.setState({
                event: data,
                isLoaded: true
            })
        }).catch( (err) => {
            console.log(err)
        })
    }
    render(){
        
    return (
        <div className="container m-top">
            <h5 className="white-text center">Up Coming Events</h5>
            <div className="row">
                {this.state.isLoaded ? 
                <EventDetails events={this.state.event}/>
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
export default Events