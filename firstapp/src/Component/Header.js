import React,{Component} from 'react';

class Header extends Component{
    constructor(){
        super()

        this.state={
            title:'React App',
            keyword:'User Input'
        }
    }

    render(){
        return(
            <div>
                <center>
                    <h1>{this.state.title}</h1>
                </center>
                <hr/>
            </div>
        )
    } 
}
/*
const Header = () => {
    return(
        <div>
            <center>
                <h1>My React App</h1>
            </center>
            <hr/>
        </div>
    )
}*/

export default Header;