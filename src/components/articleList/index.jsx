import React from 'react';
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
        return (
          <div className="article-preview" id={post.slug}>
              <div className="article-preview--date">
                  {this.formatDate(post.published_date)}
              </div>
              <div className="article-preview--description">
                  <h2 className="title">{post.title}</h2>
                  <p className="summary">{post.custom_excerpt}</p>
              </div>
              <div className="article-preview--feature_image">
                  <img src={post.feature_image} alt="featured" className="img-fluid"/>
              </div>
          </div>)
      })}
      </div>

    )
  }
}

export default ArticleList;