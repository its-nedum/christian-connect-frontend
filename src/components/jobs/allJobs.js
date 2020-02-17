import React from 'react'
import ComHeader from '../layouts/comHeader'
import Footer from '../layouts/footer'
import ComSidenav from '../layouts/comSidenav'
import Banner2 from '../adverts/banner2'
import ComSidebar from '../layouts/comSidebar'
import Jobs from './jobs'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {isLoggedIn} from '../../helpers/utility'

class AllJobs extends React.Component {
    state = {
        job: [],
        isLoaded: false
    }

    async componentDidMount(){
        await axios({
            method: 'get',
            url: 'https://christian-connect-api.herokuapp.com/api/v1/category/job',
            //url: 'http://localhost:4242/api/v1/category/job',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            let { data } = response.data
            this.setState({
                job: data,
                isLoaded: true
            })
        }).catch((err) => {
            console.log(err)
        })
    }
    render(){
        if(!isLoggedIn()) return <Redirect to='/signin' /> 
    return (
        <div>
        <ComHeader />
            <br/>
            <ComSidenav />
            <div className="">
                <div className="row">
                    <div className="col m2 hide-on-small-only">
                    <ComSidebar />
                    </div>
                    <div className="col s12 m7">
                      <Jobs jobs={this.state.job} isLoaded={this.state.isLoaded}/>  
                    </div>
                    <div className="col s3 hide-on-small-only">
                        <Banner2 />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
    }
}
export default AllJobs
