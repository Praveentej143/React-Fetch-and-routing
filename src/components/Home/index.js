import UserInfo from '../UserInfo'
import './index.css'
import BlogList from '../BlogList'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <div className="blog-list-container">
      <BlogList />
    </div>
  </div>
)

export default Home
