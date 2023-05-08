import PropTypes from 'prop-types'

const Blog = ({ blog, addLike, user, deleteBlog }) => {
  const isOwner = user.username === blog.user.username

  return (
    <div>
      {blog.title} | {blog.author} | likes: {blog.likes} &nbsp;
      <button onClick={() => addLike(blog.id)}>like</button>
      {isOwner ? <button onClick={() => deleteBlog(blog)}>remove</button> : null}
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  addLike: PropTypes.func,
  user: PropTypes.object.isRequired,
  deleteBlog: PropTypes.func
}

Blog.displayName = 'Blog'

export default Blog