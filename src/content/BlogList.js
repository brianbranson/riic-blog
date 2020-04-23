import React, { Component } from 'react';
import BlogCollection from '../components/BlogCollection.js'
import BlogFilter from '../components/BlogFilter.js'
import { withRouter } from "react-router-dom";

class BlogList extends Component {
  render() {
    return (
      <div>
        <h1>Blog Entries</h1>
        <div className="blog-body">
          <div className="blog-collection-container">
            <BlogCollection></BlogCollection>
          </div>
          <div className="blog-filter-container">
            <BlogFilter></BlogFilter>
          </div>
        </div>
      </div>
    );
  }
}
  
export default withRouter(BlogList);