import React, { Component } from 'react'
import './style.scss'

class Blog extends Component {
  async getPosts(){
    const res = await fetch("http://35.208.9.206/ghost/api/v0.1/posts/?include=tags&limits=3&formats=json&client_id=ghost-frontend&client_secret=ec2e9f4fefe0")
    const posts = await res.json();
    return posts;
  }
  render() {
    console.log(this.getPosts())
    return (
      <div className="blog">
        <h3>This is a Blog</h3>
      </div>
    )
  }

}

export default Blog;