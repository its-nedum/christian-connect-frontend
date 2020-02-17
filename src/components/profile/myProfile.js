import React, {useState, useEffect}  from 'react'
import {ClipLoader} from 'react-spinners'
import axios from 'axios'
import {setAuthToken} from '../../helpers/utility'
 
class MyProfile extends React.Component {
    
    state = {
        firstname: null,
        lastname: null,
        email: null,
        username: null,
        telephone: null,
        country: null,
        state: null,
        city: null,
        gender: null,
        birthdate: null,
        relationship_status: null,
        work: null,
        school: null,
        about_me: null,
        avatar: null,
        oldPassword: null,
        newPassword1: null,
        newPassword2: null,
        passwordError: null,
        loading: false
    }

    async componentDidMount(){
        try{
            const res = await axios.get('http://localhost:4242/api/v1/user-details', { headers:{ 'Authorization': setAuthToken()} });
            const posts = res.data.data;

            this.setState({
              firstname: posts.firstname,
              lastname: posts.lastname,
              email: posts.email,
              username: posts.username,
              telephone: posts.telephone,
              country: posts.country,
              state: posts.state,
              city: posts.city,
              gender: posts.gender,
              birthdate: posts.birthdate,
              relationship_status: posts.relationship_status,
              work: posts.work,
              school: posts.school,
              about_me: posts.about_me,
              avatar: posts.avatar,
            })
            this.setState({loading: true})

        }catch(err){
            console.log(err)
        }
    }

    handlePasswordChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handlePasswordSubmit = (e) => {
        e.preventDefault();
        let {oldPassword, newPassword1, newPassword2} = this.state

        if(!oldPassword || !newPassword1 || !newPassword2){
            return this.setState({passwordError: '*All fields are required'})
        }else{
            this.setState({passwordError: null})
        }

        if(newPassword1 !== newPassword2){
            return this.setState({passwordError: '*Password mis-match'})
        }else{
            this.setState({passwordError: null})
        }

        const formData = new FormData()
        formData.append('current_password',)
        formData.append('new_password',)
        formData.append('confirm_password',)
        
    }

    handleProfileChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleProfileSubmit = (e) => {
        e.preventDefault()
    }

    render(){

    return (
        <div>
        {this.state.loading ? 
            <div className="row">
           
                <div className="col s12 m7">
                    <div className="card">
                    <form style={{marginTop:'0px'}}>
                    <h5 className="center">Update Profile</h5>
                        <div className="row">
                            <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                                <input type="text" id="firstname" value={this.state.firstname} onChange={this.handleProfileChange}/>
                                {/* <label htmlFor="firstname">First Name</label> */}
                            </div>
                            <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                                <input type="text" id="lastname" value={this.state.lastname} onChange={this.handleProfileChange}/>
                                {/* <label htmlFor="lastname">Last Name</label> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <i className="material-icons prefix">email</i>
                                <input type="email" id="email" value={this.state.email} onChange={this.handleProfileChange} readOnly/>
                                {/* <label htmlFor="email">Email</label> */}
                            </div>
                            <div className="input-field col s6">
                            <i className="material-icons prefix">perm_identity</i>
                                <input type="text" id="username" value={this.state.username} onChange={this.handleProfileChange} readOnly/>
                                {/* <label htmlFor="username">Username</label> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <i className="material-icons prefix">phone</i>
                                <input type="text" id="telephone" value={this.state.telephone} onChange={this.handleProfileChange}/>
                                {/* <label htmlFor="telephone">Telephone</label> */}
                            </div>
                            <div className="input-field col s6">
                            <i className="material-icons prefix">perm_identity</i>
                                <input type="text" id="gender" value={this.state.gender} onChange={this.handleProfileChange}/>
                                {/* <label htmlFor="gender">Gender</label> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <i className="material-icons prefix">location_city</i>
                                <input type="text" id="state" value={this.state.state} onChange={this.handleProfileChange}/>
                                {/* <label htmlFor="state">State</label> */}
                            </div>
                            <div className="input-field col s6">
                            <i className="material-icons prefix">location_city</i>
                                <input type="text" id="city" value={this.state.city} onChange={this.handleProfileChange}/>
                                <label htmlFor="city">City</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <i className="material-icons prefix">perm_contact_calender</i>
                                <input type="text" id="birthdate" value={this.state.birthdate} onChange={this.handleProfileChange}/>
                                {/* <label htmlFor="birthdate">Birthdate</label> */}
                            </div>
                            {this.state.relationship_status ? 
                            <div className="input-field col s6">
                                <i className="material-icons prefix">favorite</i>
                                <input type="text" id="relationship" value={this.state.relationship_status} onChange={this.handleProfileChange}/>
                            </div>
                            :
                            <div className="input-field col s6">
                            <i className="material-icons prefix">favorite</i>
                                <select id="relationship" className="browser-default" onChange={this.handleProfileChange}>
                                    <option value="" disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Relationship Status</option>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                    <option value="inRelationship">In a Relationship</option>
                                    <option value="notSay">Prefer not to say</option>
                                </select>
                            </div>
                            }
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <i className="material-icons prefix">work</i>
                                <input type="text" id="work" value={this.state.work} onChange={this.handleProfileChange}/>
                                <label htmlFor="work">Work</label>
                            </div>
                            <div className="input-field col s6">
                            <i className="material-icons prefix">school</i>
                                <input type="text" id="school" value={this.state.school} onChange={this.handleProfileChange}/>
                                <label htmlFor="school">School (Grad. School)</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <i className="material-icons prefix">account_circle</i>
                                <label htmlFor="about">About Me</label>
                                <textarea id="about" className="materialize-textarea" value={this.state.about_me} onChange={this.handleProfileChange}></textarea>
                            </div>
                        </div>
                        <div className="input-field center">
                            <input type="button" className="btn pink lighten-1 z-depth-0" value="Send" onClick={this.handleProfileSubmit}/>
                        </div>
                    </form>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card">
                    <form style={{marginTop:'0px'}} className="" onSubmit={this.handlePasswordSubmit}>
                    <h5 className="center">Change Password</h5>
                        <div className="row">
                        <div className="input-field col s12">
                        <i className="material-icons prefix">lock</i>
                            <input type="password" id="oldPassword" onChange={this.handlePasswordChange}/>
                            <label htmlFor="oldPassword">Current Password</label>
                        </div>
                        
                        <div className="input-field col s12">
                        <i className="material-icons prefix">lock</i>
                            <input type="password" id="newPassword1" onChange={this.handlePasswordChange}/>
                            <label htmlFor="oldPassword">New Password</label>
                        </div>
                        
                        <div className="input-field col s12">
                        <i className="material-icons prefix">lock</i>
                            <input type="password" id="newPassword2" onChange={this.handlePasswordChange}/>
                            <label htmlFor="oldPassword">Confirm Password</label>
                        </div>
                        </div>
                        <div className="input-field center">
                            <input type="button" className="btn pink lighten-1 z-depth-0" value="Send" onClick={this.handlePasswordSubmit}/>
                        </div>
                        <div className="red-text center">
                        { this.state.passwordError ? <p>{this.state.passwordError}</p> : null}
                        </div>
                    </form>
                    </div>
                </div>
                
            </div>
            : 
            <div className="sweet-loading">
                <ClipLoader
                sizeUnit={"px"}
                size={100}
                color={"#fff"}
                />
            </div>
            }
        </div>
    )
}
}
export default MyProfile
