import axios from 'axios'
import Container from 'Container'

export async function getStaticProps () {
  // const baseUrl = 'https://posts.github.com/positions.json'
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts'
  const { data: posts } = await axios.get(baseUrl)
  return {
    props: { posts }
  }
}

const posts = ({ posts }) => {
  return (
    <Container>
      <h2>posts</h2>
      {posts &&
        posts.map(post => {
          return <div key={post.id}>{post.title}</div>
        })}
    </Container>
  )
}

export default posts
