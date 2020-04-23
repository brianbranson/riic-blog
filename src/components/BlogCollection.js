import React, { Component } from 'react'
import BlogCard from './BlogCard.js'

class BlogCollection extends Component {

    constructor(props) {
        super(props)

        // const min = 3;
        // const max = 15;
        // const rand = min + Math.random() * (max - min);
    
        this.state = {
          data: [],
          //count: rand
        }
    }

    componentDidMount() {
        this.getdata()
    }

    getdata() {

        //const { count } = this.state

        //const url = 'http://api.icndb.com/jokes/random/' + count
        //const url = 'https://o2czmnsmk7.execute-api.us-east-1.amazonaws.com/Demo/pets'
        const url = 'https://u2az8zi5ob.execute-api.us-east-1.amazonaws.com/Test/blogs'
        fetch(url)
            .then(result => result.json())
            .then(result => {
                var items = result.Items;
                items.forEach(function (item) { item.SortDate = new Date(item.CreateDate); });
                items.sort(function(a, b) { return b.SortDate - a.SortDate; });
                this.setState({
                    data: items
                })
            })
    }

    handleChange = event => {
        const { name, value } = event.target
      
        this.setState({
          [name]: value
        })
    }

    render() {
        const { data } = this.state

        const items = []

        for (const [index, value] of data.entries()) {
          items.push(<BlogCard key={index} data={value}></BlogCard>)
        }

        return (
            <div className="blog-collection">
                {items}
            </div>
        )
    }
}

export default BlogCollection