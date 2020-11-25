import Container from 'Container'
import ReactMarkdown from 'react-markdown'
import Card from 'Card'
import { useState } from 'react'
import useGetJobs from 'useGetJobs'
import SearchForm from 'SearchForm'

const Jobs = () => {
  const [params, setParams] = useState({ full_time: false })
  const [page, setPage] = useState(1)

  const handleCheckBoxChange = e => {
    setParams(prevParams => {
      return { ...prevParams, full_time: !prevParams.full_time }
    })
  }

  const handlePageChange = number => {
    setPage(prevPage => prevPage + number)
  }

  const handleChange = e => {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return {
        ...prevParams,
        [param]: value
      }
    })
  }

  const { jobs, loading, error } = useGetJobs(params, page)
  return (
    <Container>
      <h2>jobs</h2>
      <SearchForm
        params={params}
        handleChange={handleChange}
        handleCheckBoxChange={handleCheckBoxChange}
      />
      {loading && <h2>Loading</h2>}
      {error && <h2>something went wrong</h2>}
      <h3>Display {jobs.length} jobs</h3>
      <button onClick={() => handlePageChange(-1)} disabled={page === 1}>
        &lt;
      </button>
      <button className='active'>{page}</button>
      <button onClick={() => handlePageChange(1)} disabled={jobs.length < 50}>
        &gt;
      </button>
      {jobs &&
        jobs.map(job => {
          return (
            <Card key={job.id}>
              <details>
                <summary>
                  <section>
                    <img src={job.company_logo} />
                    <h3>{job.title}</h3>
                    <em>{job.type}</em>
                    <span>@{job.location}</span>
                    <time>{new Date(job.created_at).toLocaleDateString()}</time>
                  </section>
                </summary>
                <article>
                  <h2>{job.company}</h2>
                  <a href={job.company_url}>company website</a>
                  <ReactMarkdown children={job.how_to_apply} />
                  <ReactMarkdown children={job.description} />
                </article>
              </details>
            </Card>
          )
        })}
    </Container>
  )
}

export default Jobs
// export async function getStaticProps () {
//   const baseUrl = 'https://jobs.github.com/positions.json'
//   const { data: jobs } = await axios.get(baseUrl)
//   return {
//     props: { jobs }
//   }
// }
