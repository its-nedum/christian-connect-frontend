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
import SingleNewsWithComments from './components/news/singleNewsWithComments';
import SignIn from './components/auths/signIn';
import SignUp from './components/auths/signUp';
import Welcome from './components/feed/welcome';
import PostComments from './components/feed/postComments';
import AllJobs from './components/jobs/allJobs';
import JobDescription from './components/jobs/jobDescription'
import ChatBox from './components/chats/chatBox';
import AllConnect from './components/connect/allConnect';
import SingleConnect from './components/connect/singleConnect';
import ProfileHolder from './components/profile/profileHolder';
import AllEvents from './components/events/allEvents';


class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/music' component={AllMusic} />
        <Route path='/music/:songId' component={SingleSongWithComments} />
        <Route exact path='/videos' component={AllVideos} />
        <Route path='/videos/:videoId' component={SingleVideoWithComments} />
        <Route exact path="/lyrics" component={AllLyrics} />
        <Route path="/lyrics/:lyricsId" component={SingleLyricWithComments} />
        <Route exact path="/news" component={AllNews} />
        <Route path="/news/:newsId" component={SingleNewsWithComments} />
        <Route path= '/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route exact path='/feed' component={Welcome} />
        <Route path='/feed/:postId/comments' component={PostComments} />
        <Route exact path='/job-connect' component={AllJobs} />
        <Route path='/job-connect/:jobTitle' component={JobDescription} />
        <Route path='/chat-room' component={ChatBox} />
        <Route exact path='/users' component={AllConnect} />
        <Route exact path='/users/:userId' component={SingleConnect} />
        <Route path='/profile' component={ProfileHolder} />
        <Route exact path='/events' component={AllEvents} />
-      </Switch>
    </div>
    </BrowserRouter>
  );
  }
}
export default App;
