import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom';

const cityUrl = "https://developerfunnel.herokuapp.com/location"
const hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city="


class Search extends Component{
    constructor(props){
        super(props)
        console.log("inside>>>constructor")
        this.state={
            location:'',
            hotels:''
        }
    }

    renderCity = (data) => {
        console.log("data>>>",data)
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }
    renderHotel = (data) => {
        console.log("data>>>",data)
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.name} | {item.locality} 
                    </option>
                )
            })
        }
    }
    handleCity = (event) => {
        console.log(event.target.value)
        fetch(`${hotelUrl}${event.target.value}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({hotels:data})
        })
    }
    handleHotel =(event) => {
        this.props.history.push(`/details/${event.target.value}`)
    }
    render(){
        console.log("inside>>>render")
        return(
            <div className="imageContainer">
                <div id="logo">
                        D!
                </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleCity}>
                        <option>---SELECT CITY---</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput" onChange={this.handleHotel}>
                        <option>---SELECT HOTEL---</option>
                        {this.renderHotel(this.state.hotels)}
                    </select>
                </div>  
            </div>
        )
    }
    componentDidMount(){
        console.log("inside>>>componentDidMount")
        fetch(cityUrl,{
            method:'GET'
        })
        .then((res) =>res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default withRouter(Search);