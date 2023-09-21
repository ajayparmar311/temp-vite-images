import { useQuery } from '@tanstack/react-query'
import customFetch from '../axios/customFetch'
import { useGlobelContext } from '../Context'
import { useFetchImages } from '../axios/reactQueryCustomHook'

const Gallery = () => {
  const { searchValue } = useGlobelContext()
  const { isLoading, data, isError } = useFetchImages(searchValue)
  // console.log(isLoading, data, isError)
  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading.....</h4>
      </section>
    )
  }

  if (isError) {
    return (
      <section className="image-container">
        <h4>there is an error</h4>
      </section>
    )
  }

  return (
    <section className="image-container">
      {data?.results.map((data) => {
        const { id, alt_description, urls } = data
        const url = urls?.small
        return <img key={id} src={url} alt={alt_description} className="img" />
      })}
    </section>
  )
}
export default Gallery
