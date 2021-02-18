import React,{Component} from 'react';
import './Search.css';

const cityUrl = "https://developerfunnel.herokuapp.com/location"



class Search extends Component{
    constructor(){
        super()
        console.log("inside>>>constructor")
        this.state={
            location:''
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
                    <select className="locationDropDown">
                        <option>---SELECT CITY---</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput">
                        <option>---SELECT HOTEL---</option>
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

export default Search;