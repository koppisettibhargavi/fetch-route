import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {itemData} = props
  const {id, imageUrl, topic, tittle, avatarUrl, author} = itemData
  return (
    <li>
      <Link to={`/blogs/${id}`}>
        <div className="div">
          <img src={imageUrl} alt={`item${id}`} className="img" />
          <div>
            <p>{topic}</p>
            <p>{tittle}</p>
          </div>
          <img src={avatarUrl} alt={`avatar${id}`} className="img" />
          <p>{author}</p>
        </div>
      </Link>
    </li>
  )
}
export default BlogItem
