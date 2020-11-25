const SearchForm = ({ params, handleChange, handleCheckBoxChange }) => {
  return (
    <>
      <input
        type='text'
        placeholder='search description'
        onChange={handleChange}
        value={params.description}
        name='description'
      />
      <input
        type='text'
        placeholder='search city'
        onChange={handleChange}
        value={params.location}
        name='location'
      />
      <input
        type='checkbox'
        onChange={handleCheckBoxChange}
        value={params.full_time}
        name='full_time'
      />
      <label htmlFor='full-time'>Only full time</label>
    </>
  )
}
export default SearchForm
