const Blog = ({ blog, addLike }) => (
    <div>
      {blog.title} {blog.author} likes: {blog.likes}
      <button onClick={() => addLike(blog.id)}>like</button>
    </div>
)

export default Blog