import React from 'react'
import './style.scss'
import ghostAPI from '../../api/ghost.api';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, post: null }
  }
  async componentDidMount() {
    try {
      const slug =this.props.location.pathname.split('/')[2]
      const data = await ghostAPI.getPost(slug)
      this.setState({ loading: false, post: data.posts[0] })
    } catch (error) {
      console.error(error)
    }
  }

  createHTML(){
    return {__html: this.state.post.html}
  }

  render() {
    let post = this.state.post;
    return (
      this.state.loading 
        ? 'Loading Page'
        : <div className="article container" >
            <div className="article__feature_img">
              <img src={post.feature_image} alt="feature" className='img-fluid'/>
            </div>
            <h1 className="article__headline">{post.title}</h1>
            <span className="article__meta">
              <div className="article__meta--author">Dat Nguyen</div>
              <div className="article__meta--date">{post.published_at.split('T')[0]}</div>
            </span>
            <div className="article__body">
              <div dangerouslySetInnerHTML={this.createHTML()}></div>
            </div>
          </div>
      )
  }
}
export default Article