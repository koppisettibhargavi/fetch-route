import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const statusCode = await response.statusCode
    const data = await response.json()
    const formattedData = data.map(each => ({
      id: each.id,
      tittle: each.tittle,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, blogsData} = this.state
    console.log(blogsData)
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader Type="Tailspin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {blogsData.map(each => (
              <BlogItem itemData={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default BlogList
