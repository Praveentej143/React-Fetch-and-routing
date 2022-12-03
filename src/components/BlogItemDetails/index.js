// Write your JS code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({blogItemData: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogItemData} = this.state
    const {
      id,
      title,
      imageUrl,
      avatarUrl,
      author,
      content,
      topic,
    } = blogItemData

    return (
      <div className="item-container">
        <h1 className="blog-detail-heading">{title}</h1>
        <div className="author-container">
          <img src={avatarUrl} className="avatar-img" alt={author} />
          <p className="author">{author}</p>
        </div>
        <img src={imageUrl} className="image-url" alt={title} />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="main-item-container">
        {isLoading ? (
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={50}
            width={50}
            timeout={3000}
          />
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
