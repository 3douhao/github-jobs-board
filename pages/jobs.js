import axios from 'axios'
import Container from 'Container'

export async function getStaticProps () {
  const baseUrl = 'https://jobs.github.com/positions.json'
  const { data: jobs } = await axios.get(baseUrl)
  return {
    props: { jobs }
  }
}

const Jobs = ({ jobs }) => {
  return (
    <Container>
      <h2>jobs</h2>
      {!jobs && <h3>loading</h3>}
      {jobs &&
        jobs.map(job => {
          return <div key={job.id}>{job.title}</div>
        })}
    </Container>
  )
}

export default Jobs
