import { useReducer, useEffect } from 'react'
import axios from 'axios'

const BASE_URL =
  'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error',
  HAS_NEXT_PAGE: 'has-next-page'
}
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, jobs: [] }

    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs }

    case ACTIONS.ERROR:
      return {
        jobs: [],
        error: action.payload.error,
        ...state,
        loading: false
      }

    case ACTIONS.HAS_NEXT_PAGE:
      return {
        ...state,
        hasNextPage: action.payload.hasNextPage
      }

    default:
      return state
  }
}

export default function useGetJobs (params, page) {
  const [state, dispatch] = useReducer(reducer, {
    jobs: [],
    loading: true
  })

  useEffect(() => {
    console.log(params)
    const cancelToken = axios.CancelToken.source()
    dispatch({ type: ACTIONS.MAKE_REQUEST })
    axios
      .get(BASE_URL, {
        cancelToken: cancelToken.token,
        params: { ...params, page: page, markdown: true }
      })
      .then(res => {
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: {
            jobs: res.data
          }
        })
      })
      .catch(e => {
        if (axios.isCancel(e)) return
        dispatch({
          type: ACTIONS.ERROR,
          payload: {
            error: e
          }
        })
      })

    const cancelToken2 = axios.CancelToken.source()
    axios
      .get(BASE_URL, {
        cancelToken: cancelToken.token2,
        params: { ...params, page: page + 1, markdown: true }
      })
      .then(res => {
        dispatch({
          type: ACTIONS.HAS_NEXT_PAGE,
          payload: {
            hasNextPage: res.data.length !== 0
          }
        })
      })
      .catch(e => {
        if (axios.isCancel(e)) return
        dispatch({
          type: ACTIONS.ERROR,
          payload: {
            error: e
          }
        })
      })
    return () => {
      cancelToken.cancel()
      cancelToken2.cancel()
    }
  }, [params, page])

  return state
}
