import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './component/home/Home';
import ListingApi from './component/listing/listingApi';
import HotelDetails from './component/details/hotelDetails';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/list/:id" component={ListingApi}/>
            <Route path="/details/:id" component={HotelDetails}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;