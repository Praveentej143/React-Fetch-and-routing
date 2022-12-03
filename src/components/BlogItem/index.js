// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogListDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogListDetails
  return (
    <li className="list-items">
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <div className="blog-item-container">
          <img src={imageUrl} className="img-url" alt={`item${id}`} />
          <div className="content-container">
            <p className="name">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="author-container">
              <img src={avatarUrl} className="avatar-img" alt={`avatar${id}`} />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
