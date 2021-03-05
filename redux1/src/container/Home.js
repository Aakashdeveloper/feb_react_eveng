import React,{Component} from 'react';
import {connect} from 'react-redux';
import {movieList} from '../actions/actionFile';
import DisplayMovies from '../component/DisplayMovies'

class Home extends Component{
    // call action
    componentDidMount(){
        this.props.dispatch(movieList())
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
                <DisplayMovies datalist={this.props.mydata}/>
            </div>
        )
    }
}


//will recive the state from store
function mapStateToProps(state){
    return{
        mydata:state.films
    }
}

export default connect(mapStateToProps)(Home)