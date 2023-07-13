import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getItemDetails()
  }

  getItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const statusCode = await response.statusCode
    const data = await response.json()
    const updatedData = {
      id: data.id,
      tittle: data.tittle,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
      content: data.content,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  renderData = () => {
    const {blogData} = this.state
    const {tittle, content, imageUrl, avatarUrl, author} = blogData
    return (
      <div className="div">
        <h2>{tittle}</h2>
        <div>
          <img src={avatarUrl} alt={author} className="img" />
          <p>{author}</p>
        </div>
        <div>
          <img src={imageUrl} alt={tittle} className="img" />
          <p>{content}</p>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderData()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
