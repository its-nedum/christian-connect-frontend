import React from 'react'
import ComHeader from '../layouts/comHeader'
import Footer from '../layouts/footer'
import ComSidenav from '../layouts/comSidenav'
import Banner2 from '../adverts/banner2'
import ComSidebar from '../layouts/comSidebar'
import ViewUser from './viewUser'
import axios from 'axios'
import {ClipLoader} from 'react-spinners'
import {setAuthToken, isLoggedIn} from '../../helpers/utility'
import {Redirect} from 'react-router-dom'
class SingleConnect extends React.Component {
    state = {
        user: [],
        isLoaded: false,
        notFound: null
    }

    async componentDidMount(){
        await axios({
            method: 'get',
            url: `https://christian-connect-api.herokuapp.com/api/v1/users/${this.props.match.params.userId}`,
            //url: `http://localhost:4242/api/v1/users/${this.props.match.params.userId}`,
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            let { data } = response.data
            this.setState({
                user: data,
                isLoaded: true
            })
        }).catch((err) => {
            console.log(err)
            this.setState({
                notFound: 'The link you followed may be broken, or the page may have been removed.'
            })
        })
    }
    
    
    sendFriendRequest = async (requesteeId) => {
        axios({
            method: 'post',
            url: `https://christian-connect-api.herokuapp.com/api/v1/sendfriendrequest/${requesteeId}`,
            //url: `http://localhost:4242/api/v1/sendfriendrequest/${requesteeId}`,
            headers: {
                'Authorization': setAuthToken()
            }
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
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
                    <h5 className="white-text left-align" style={{background:'#000033', padding:'10px', borderRadius:'5px'}}>Community Member</h5>
                    {this.state.isLoaded ? 
                        <ViewUser user={this.state.user} sendFriendRequest={this.sendFriendRequest}/>        
                    :
                    <div className="sweet-loading">
                        <ClipLoader
                        sizeUnit={"px"}
                        size={100}
                        color={"#fff"}
                        />
                    </div>
                    }
                    {this.state.notFound ? 
                    <div className="red-text center">
                    <p>{this.state.notFound}</p>
                    </div> : null}
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

export default SingleConnect
