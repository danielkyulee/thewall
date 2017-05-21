import React from 'react';
import Axios from 'axios';

//just adding a comment for fun

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {writing: false, posting: "", words: ""}
    }


    postSomething = (e) => {

        e.preventDefault();
        Axios({
            method: "post",
            url: "http://54.245.42.196/posts/create",
            data: {post: this.state.words, user_id: this.props.match.params.userId},
            headers: {
            Authorization: localStorage.getItem("jw-token")
        }}).then((result) => {
            console.log(result);
            this.setState({
                words: ""
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    handleChange = (e) => {
        console.log("it is working!")
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render(){
        if(this.state.writing){
            var thePosts = this.state.posting.map((value) => {
                return(
                    <div>
                        <h1>{value.post}</h1>
                    </div>
                )
            })
        
            return(
                <div>
                    <h1>{thePosts}</h1>
                    <div className="submitPost">
                        <h3>Want to Submit a Post?</h3>
                        <form onSubmit={this.postSomething}>
                            <label>Post</label>
                            <input 
                            type="text"
                            className="form-submit"
                            name="words"
                            onChange={this.handleChange}
                            value={this.state.words}

                            />
                        <input type="submit" className="btn btn-primary" />
                        </form>

                    </div>
                </div>
            )

        } else {
            return(
            <h1>Loading...</h1>
            )   
        }   
    }

    componentDidMount(){
        Axios.get("http://54.245.42.196/posts/"+this.props.match.params.userId, {headers: {
            Authorization: localStorage.getItem("jw-token")
        }}).then((response) => {
            this.setState({
                writing: true,
                posting: response.data.posts
            })

        }).catch((err) => {
            console.log(err);
        })
    }
}

export default Dashboard