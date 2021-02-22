import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails"

class Details extends Component{
    constructor(){
        super()

        this.state={
            details:''
        }
    }

    render(){
        let {details} = this.state
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{details.name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className='row'>
                            <div className="col-md-12">
                                <img className="img-responsive" src={details.thumb} style={{height:400,width:1500}}/>
                            </div>
                            <div className="col-md-6">
                                <h3>{details.name}</h3>
                                <h3>{details.locality}</h3>
                                <h3>{details.address}</h3>
                            </div>
                        </div>
                        <hr/>
                         </div>
                </div>
            </div>
        )
    }

    async componentDidMount(){
        let hotelid= this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelid}`)
        this.setState({details:response.data[0]})
    }

}

export default Details;