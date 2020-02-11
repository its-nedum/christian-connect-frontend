import React from 'react'
import ComHeader from '../layouts/comHeader'
import Footer from '../layouts/footer'
import ComSidenav from '../layouts/comSidenav'
import Banner2 from '../adverts/banner2'
import ComSidebar from '../layouts/comSidebar'
import ViewUser from './viewUser'
import axios from 'axios'
import {HashLoader} from 'react-spinners'
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
    render(){
        
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
                    {this.state.isLoaded ? 
                        <ViewUser user={this.state.user}/>        
                    :
                    <div className="sweet-loading">
                        <HashLoader
                        sizeUnit={"px"}
                        size={200}
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
