import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer'
import JSON from '../db.json';
import NewsDetails from './NewsDetails';

class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    /*
        var a= [2,3,6,8,9,1,4,7]
        a.filter((data)=>{return data>2})
    */

    filterNews = (userInput) => {
        const out = this.state.news.filter((data) => {
            return (data.title.toLowerCase().indexOf(userInput.toLowerCase())>-1)
        })

        this.setState({filtered:out})
    }

    render(){
        console.log(this.state.news)
        return(
            <React.Fragment>
                <Header userText={(data) => {this.filterNews(data)}}/>
                <NewsDetails newsdata={this.state.filtered}/>
                <Footer year="2022" month="Feb"/>
            </React.Fragment>
        )
    }
}

export default Home;

