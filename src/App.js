import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './components/landing/home';
import AllMusic from './components/music/allMusic';
import SingleSongWithComments from './components/music/singleSongWithComments';
import AllVideos from './components/videos/allVideos'
import SingleVideoWithComments from './components/videos/singleVideoWithComments'
import AllLyrics from './components/lyrics/allLyrics';
import SingleLyricWithComments from './components/lyrics/singleLyricWithComments';
import AllNews from './components/news/allNews';
import SignIn from './components/auths/signIn';
import SignUp from './components/auths/signUp';
import Welcome from './components/feed/welcome';
import PostComments from './components/feed/postComments';
import AllJobs from './components/jobs/allJobs';
import JobDescription from './components/jobs/jobDescription'
import ChatRoomHolder from './components/chatRooms/chatRoomHolder';
import AllConnect from './components/connect/allConnect';
import SingleConnect from './components/connect/singleConnect';
import ProfileHolder from './components/profile/profileHolder';
import AllEvents from './components/events/allEvents';
import ChatHolder from './components/chatRooms/chatHolder';
import MyConnectHolder from './components/connect/myConnectHolder'
import ChatHome from './components/chat/chatHome';
import SearchHolder from './components/search/searchHolder';
import ResetForm from './components/passwordReset/resetForm';
import TermsAndConditions from './components/terms/termsAndCons';
import ConnectRequest from './components/connect/connectRequest'

import {createBrowserHistory} from 'history'
export const history = createBrowserHistory()

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/category/music' component={AllMusic} />
        <Route path='/category/music/:songId' component={SingleSongWithComments} />
        <Route exact path='/category/videos' component={AllVideos} />
        <Route path='/category/video/:videoId' component={SingleVideoWithComments} />
        <Route exact path="/category/lyrics" component={AllLyrics} />
        <Route path="/category/lyric/:lyricsId" component={SingleLyricWithComments} />
        <Route exact path="/category/news" component={AllNews} />
        <Route path= '/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route exact path='/feed' component={Welcome} />
        <Route path='/feed/:postId/comments' component={PostComments} />
        <Route exact path='/job-connect' component={AllJobs} />
        <Route path='/job-connect/:jobId/:jobTitle' component={JobDescription} />
        <Route exact path='/chat-room' component={ChatRoomHolder} />
        <Route path='/chat-room/:chatRoomName' component={ChatHolder} />
        <Route exact path='/users' component={AllConnect} />
        <Route exact path='/users/:userId' component={SingleConnect} />
        <Route path='/users/:userId/my-connect' component={MyConnectHolder} />
        <Route path='/profile' component={ProfileHolder} />
        <Route exact path='/category/events' component={AllEvents} />
        <Route path='/users/:userId/chat' component={ChatHome} />
        <Route path='/search/:searchItems' component={SearchHolder} />
        <Route path='/password-reset' component={ResetForm} />
        <Route path='/legal/terms' component={TermsAndConditions} />
        <Route path='/connect-request' component={ConnectRequest} />
    </Switch>
    </div>
    </BrowserRouter>
  );
  }
}
export default App;
