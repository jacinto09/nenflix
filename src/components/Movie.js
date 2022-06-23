import React from 'react'
import handleUndefined from '../services/handleUndefined'
function Movie({imdbID, title, year, runtime, posterURLs }) {
  return (
    <div className='movie' key={imdbID}>
        <h2>{title}</h2>
        <img src={handleUndefined(posterURLs.original)} alt="movie" />
        <p>
            Year: {handleUndefined(year)}
        <br />
            Duration: { handleUndefined(runtime)} minutes
        </p>
    </div>

  )
}

export default Movie