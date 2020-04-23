import React, { Component } from 'react';
import ReactLogo from '../img/logo.svg';
import { BrowserRouter as Router, withRouter, Link } from "react-router-dom";

class BlogView extends Component {
    constructor(props) {
        super(props);

        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        this.state = {
            toLink: '/',
            data: props.location.state.data,
            createDate: new Date(props.location.state.data.CreateDate).toLocaleDateString("en-US", options)
        };
    }

    render() {
        return (
            <div className="blog-view-container">
                <Router forceRefresh={true}>
                    <Link to={this.state.toLink} >
                        Return to list
                    </Link>
                </Router>
                <div className="blog-view">
                    <h1>{this.state.data.Title}</h1>
                    <div>
                        <img className="App-logo" src={ReactLogo} alt="React Logo" />
                        <div>
                            {this.state.data.Text}
                        </div>
                        <div>
                            <i>Posted <b>{this.state.createDate}</b> by <b>{this.state.data.CreatedBy}</b></i>
                        </div>
                        <div>
                            <button className="btn btn-primary">Delete Post</button>
                            <button className="btn btn-primary pull-right">Edit Post</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default withRouter(BlogView);