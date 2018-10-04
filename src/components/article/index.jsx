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
      const data = await ghostAPI.getPost(this.props.location.state.postID)
      this.setState({ loading: false, post: data.posts[0] })
      console.log(this.state)
    } catch (error) {
      console.error(error)
    }
  }

  createHTML(){
    return {__html: this.state.post.html}
  }
  render() {
    console.log(this.state.post);
    let post = this.state.post;
    return (
      this.state.loading 
        ? 'Loading Page'
        : <div className="article container">
            <h1 className="article__headline">{post.title}</h1>
            <div className="aritcle__feature_img">
              <img src={post.feature_image} alt="feature" className='img-fluid'/>
            </div>
            <div className="article__body">
              <div dangerouslySetInnerHTML={this.createHTML()}></div>
            </div>
          </div>
      )
  }
}

export default Article