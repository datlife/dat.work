import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss'

class ArticleList extends React.Component {
  formatDate(date){
    return Intl.DateTimeFormat('en-US',  
      {year: 'numeric',  
      month: 'short', 
      day: '2-digit'})
    .format(date)
  }
  render() {
    let {articles} = this.props
  
    return (
      <div className="articles-list">
      {articles.map(post => {
        const location = {
            pathname: `/blog/${post.slug}`, 
            state: {postID: post.id}
        }
        return (
          <div className="overview" key={post.slug}>
            <div className="overview__date">
              {this.formatDate(post.published_date)}
            </div>
            <div className="overview__description">
              <Link to={location}
                    className='overview__description--link'>
                <h2 className="overview__description--title">{post.title}</h2>
                <p className="overview__description--excerpt">{post.custom_excerpt}</p>
              </Link>
            </div>
            <div className="overview__feature_image">
              <img src={post.feature_image} alt="featured" className="img-fluid"/>
            </div>
          </div>)
      })}
      </div>

    )
  }
}

export default ArticleList;