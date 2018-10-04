import React from 'react'

class Article extends React.Component {
  render(){
    let {title, featured_image, published_at , ...props} = props
    return(
      <div className="article">
        <div className="article-headline">
          Blog Title
        </div>
        <div className="aritcle-cover-img">
          IMG
        </div>
      </div>
    )
  }
}

export default Article