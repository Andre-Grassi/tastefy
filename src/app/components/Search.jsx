const Search = () => {
  return (
    <form className='row mx-auto' action='get'>
      <input className='col-6' type='text' name='recipe' id='recipe' />
      <button className='btn btn-secondary col-2'>Search</button>
    </form>
  )
}

export default Search
