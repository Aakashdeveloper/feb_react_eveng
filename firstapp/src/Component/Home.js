import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer'
import JSON from '../db.json';

class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON
        }
    }
    render(){
        console.log(this.state.news)
        return(
            <React.Fragment>
                <Header/>
                <h1>Hii To React</h1>
                <h2>My App</h2>
                <img src=''/>
                <a href=""/>
                <Footer year="2022" month="Feb"/>
            </React.Fragment>
        )
    }
}

export default Home;

