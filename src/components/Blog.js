const Blog = ({ blog, addLike }) => (
    <div>
      {blog.title} | {blog.author} | likes: {blog.likes} &nbsp;
      <button onClick={() => addLike(blog.id)}>like</button>
    </div>
)

export default Blog