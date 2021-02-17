import React from 'react';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import PostDetails from './PostDetail'
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/post" component={Post}/>
                <Route path="/post/:id" component={PostDetails}/>
                <Route path="/profile" component={Profile}/>
            </div>
        </BrowserRouter>
    )
}
    
export default Routing;