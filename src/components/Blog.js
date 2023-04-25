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

export default Blog