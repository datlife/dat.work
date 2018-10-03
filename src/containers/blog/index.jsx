import React, { Component } from 'react'
import './style.scss'
import Ghost from '../../api/ghost.api';

const URL = 'http://35.208.9.206/ghost/api/v0.1'
const CLIENT_ID = 'ghost-frontend';
const CLIENT_SECRET = 'ec2e9f4fefe0';

const ghostAPI = new Ghost(URL, CLIENT_ID, CLIENT_SECRET);


class Blog extends Component {
  render() {
    ghostAPI.get('posts', {
        page: 1, 
        limit: 3, 
        absolute_urls: true,
        fields: "slug,title,author,feature_image,published_at"})
        .then(data => console.log(data))
        .catch(err => console.log(err));

    return (
      <div className="blog">
        <h3>This is a Blog</h3>
      </div>
    )
  }

}

export default Blog;