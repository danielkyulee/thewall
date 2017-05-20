import Axios from 'axios';
import React, { Component } from 'react';
class FilmItem extends Component {
    constructor(props){
        super(props);
        this.state ={films: false, message: "loading...."};
    }

    render(){
        if(this.state.films){
            console.log(this.state.films);
            var movies = this.state.films.map((movie) => {
                return (<div>
                    <h1>{movie.title}</h1>
                    <p>{movie.opening_crawl}</p>
                </div> )
            })
            console.log(movies);
            return(
                <div>
                    {movies}
                </div>
            ) 
        } else {
            return(
                <h1>working</h1>
                // <h1>{this.state.message}</h1>
            )
        } 
    }

    componentDidMount(){
        Axios.get("http://swapi.co/api/films/").then((response) => {
            this.setState({
                films: response.data.results,
                message: ""
            })

        }).catch((err) => {
            console.log(err);
        })
    }

}

export default FilmItem