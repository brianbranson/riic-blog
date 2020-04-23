import React, { Component } from 'react'

class BlogFilter extends Component {
    render() {
        return (
            <div className="blog-filter">
                <div>
                    <select id="sort" className="form-control">
                        <option value="datedesc">Sort by Date Descending</option>
                        <option value="highpriority">Sort by High Priority</option>
                    </select>
                </div>
                <div>
                    <select id="tags" className="form-control">
                        <option value="">Select a Tag to filter...</option>
                        <option value="theft">theft</option>
                        <option value="burglary">burglary</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default BlogFilter