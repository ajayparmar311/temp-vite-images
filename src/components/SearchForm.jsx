import { useGlobelContext } from '../Context'

const SearchForm = () => {
  const { getSearchVAlue } = useGlobelContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchImageValue = e.target.elements.search.value
    getSearchVAlue(searchImageValue)
  }
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button className="btn" type="submit">
          search
        </button>
      </form>
    </section>
  )
}
export default SearchForm
