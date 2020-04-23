import React, { Component } from 'react'
import ReactLogo from '../img/logo.svg';
import { BrowserRouter as Router, Link } from "react-router-dom";

class BlogCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            'data': props.data,
            'id': props.data.id,
            'text': props.data.joke,
            'toLink': '/BlogView'
        }
    }

    render() {
        return (
            <div className="blog-card">
                <h1 className="blog-card-title">{this.state.data.Title}</h1>
                <img className="blog-card-image App-logo" src={ReactLogo} alt="React Logo" />
                <div className="blog-card-text">
                    {this.state.data.Text}
                </div>
                <div className="blog-card-details">
                <Router forceRefresh={true}>
                    <Link to={{
                        pathname: this.state.toLink,
                        state: {
                            data: this.state.data
                        }
                    }} >
                        View Details
                    </Link>
                </Router>
                </div>
            </div>
        )
    }
}

export default BlogCard