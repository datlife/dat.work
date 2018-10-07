import React, { Component } from 'react'
import ghostAPI from '../../api/ghost.api';
import ArticleOverviewList from '../../components/articleOverviewList';
import './style.scss'

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
              <ArticleOverviewList articles={this.state.page.posts}/>               
          : 'Error'
        }
      </div>
    )
  }

}

export default Blog;