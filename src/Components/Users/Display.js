import React from 'react';
import Axios from 'axios';

class Display extends React.Component{

    constructor(props){
        super(props);
        this.state = {userNames: false, createDate: "", message: "loading..."}
    }

    render(){
        

        if(this.state.userNames){
            /*console.log(this.state.userNames);
            var people = this.state.userNames.map((hello) => {
                return( 
                    <div>
                        <h1>{hello.password}</h1>
                    </div>
                )
            })
            return (
                <div>
                    {people}
                </div>
            )*/
            var people = []
            for(var i =0; i< this.state.userNames.length; i++){
                people.push(
                    <div>
                        <p>{this.state.userNames[i].password}</p>
                    </div>
                )
            }
            return (
                <div>
                    {people}
                </div>
            );


        } else {
            return(
                <h1>HIIIIII</h1>
            )
        }    
    }
        
        /*return(
            <div>
                <h2>DANIEL!!</h2>
                <h1>{this.state.userNames[1].password}</h1>
            </div>
        )*/

    


    componentDidMount(){
        Axios.get("http://54.245.42.196/users").then((response) => {
            console.log(response.data)
            this.setState({
                userNames: response.data,
                message: ""
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}


export default Display