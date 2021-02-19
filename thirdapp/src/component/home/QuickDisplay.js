import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const QuickDiplay = (props) => {
    const listTrip = ({tripdata}) => {
        if(tripdata){
            return tripdata.map((item) => {
                return(
                    <Link to={`/list/${item.trip}`}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.image}/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.name}
                                </div>
                                <div className="componentSubHeading">
                                    Start Your {item.name} Trip With Us.
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return(
        <div>
            <div className="quickSearchContainer">
                <p className="quickSearchHeading">
                    Quick Search
                </p>
                <p className="quickSearchSubHeading">
                    Discover By Trip Type
                </p>
                <br/>
                {listTrip(props)}
            </div>
        </div>
    )
}

export default QuickDiplay;