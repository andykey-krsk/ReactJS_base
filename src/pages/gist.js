import debounce from "lodash.debounce"
import { useEffect, useState, useMemo } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getGists, searchGistsByUserName } from "../store/gists"

// const API_URL_PUBLIC = (page) =>
//   `https://api.github.com/gists/public?page=${page}`

// const useGists = () => {
//   const [gists, setGists] = useState([])
//   const [penging, setPenging] = useState(false)
//   const [error, setError] = useState(null)

//   const getGists = async (page = 1) => {
//     try {
//       setPenging(true)

//       const response = await fetch(API_URL_PUBLIC(page))
//       const result = await response.json()

//       setGists(result)
//     } catch (e) {
//       setError(e)
//     } finally {
//       setPenging(false)
//     }
//   }

//   useEffect(() => {
//     getGists()
//   }, [])

//   return { gists, penging, error, getGists }
// }

const searchGistDebounced = debounce((query, dispatch) => {
  dispatch(searchGistsByUserName(query))
}, 500)

export function Gist() {
  // const { gists, penging, error, getGists } = useGists()
  const { gistsPending, gists, gistsError } = useSelector(
    (state) => state.gists
  )

  const [search, setSearch] = useState("")

  const dispatch = useDispatch()

  useEffect(() => {
    if (!gists.length) {
      dispatch(getGists())
    }
  }, [dispatch, gists])

  useEffect(() => {
    if (search) {
      searchGistDebounced(search, dispatch)
    }
  }, [search, dispatch])

  if (gistsPending) {
    return <h1>Загразка...</h1>
  }

  if (gistsError) {
    return <h1>Ошибка!</h1>
  }
  return (
    <div>
      {Array.from({ length: 10 }).map((_, index) => (
        <button key={index} onClick={() => dispatch(getGists(index + 1))}>
          button {index}
        </button>
      ))}
      <hr />
      <h1>Search</h1>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <hr />

      {gistsPending ? (
        <h1>pending...</h1>
      ) : (
        <ul>
          {gists.map((gist, index) => (
            <li key={index}>{gist.description}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
