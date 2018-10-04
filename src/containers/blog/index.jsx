import React, { Component } from 'react'
import Ghost from '../../api/ghost.api';
import ArticleList from '../../components/articleList';
import './style.scss'

const ghostAPI = new Ghost();

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: true, currentPage: 1, page: null}
  }

  async componentDidMount() {
    const page = await ghostAPI.getPage(this.state.currentPage)
    this.setState({loading: false, currentPage: 1, page: page})
  }

  render() {
    return (
      <div className="blog container">
        {this.state.loading ?
          'Loading Blog...'
          : this.state.page.posts?
              <ArticleList articles={this.state.page.posts} />               
          : 'Error'
        }
      </div>
    )
  }

}

export default Blog;