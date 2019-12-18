import React from 'react'

const MyProfile = () => {
    return (
        <div>
            <div className="row">
                <div className="col s7">
                    <div className="card">
                    <form style={{marginTop:'0px'}}>
                    <h5 className="center">Update Profile</h5>
                        <div className="row">
                            <div className="input-field col s6">
                                <input type="text" id="firstname" />
                                <label htmlFor="firstname">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input type="text" id="lastname" />
                                <label htmlFor="lastname">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input type="email" id="email" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s6">
                                <input type="text" id="username" />
                                <label htmlFor="username">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input type="text" id="telephone" />
                                <label htmlFor="telephone">Telephone</label>
                            </div>
                            <div className="input-field col s6">
                                <input type="text" id="gender" />
                                <label htmlFor="gender">Gender</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input type="text" id="state" />
                                <label htmlFor="state">State</label>
                            </div>
                            <div className="input-field col s6">
                                <input type="text" id="city" />
                                <label htmlFor="city">City</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input type="text" id="birthdate" />
                                <label htmlFor="birthdate">Birthdate</label>
                            </div>
                            <div className="input-field col s6">
                                <select className="browser-default">
                                    <option value="" disabled selected>Relationship Status</option>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                    <option value="inRelationship">In a Relationship</option>
                                    <option value="notSay">Prefer not to say</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input type="text" id="work" />
                                <label htmlFor="work">Work</label>
                            </div>
                            <div className="input-field col s6">
                                <input type="text" id="school" />
                                <label htmlFor="school">School (Grad. School)</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor="about">About Me</label>
                                <textarea id="about" className="materialize-textarea"></textarea>
                            </div>
                        </div>
                        <div className="input-field center">
                            <input type="button" className="btn pink lighten-1 z-depth-0" value="Send" />
                        </div>
                    </form>
                    </div>
                </div>
                <div className="col s4">
                    <div className="card">
                    <form style={{marginTop:'0px'}} className="">
                    <h5 className="center">Change Password</h5>
                        <div className="row">
                        <div className="input-field col s12">
                            <input type="password" id="oldPassword" />
                            <label htmlFor="oldPassword">Current Password</label>
                        </div>
                        
                        <div className="input-field col s12">
                            <input type="password" id="newPassword" />
                            <label htmlFor="oldPassword">New Password</label>
                        </div>
                        
                        <div className="input-field col s12">
                            <input type="password" id="newPassword2" />
                            <label htmlFor="oldPassword">Confirm Password</label>
                        </div>
                        </div>
                        <div className="input-field center">
                            <input type="button" className="btn pink lighten-1 z-depth-0" value="Send" />
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile
