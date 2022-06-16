import React from 'react'
import handleUndefined from '../services/handleUndefined'
function Movie({imdbID, Title, Type, Runtime, Poster}) {
  return (
    <div className='movie' key={imdbID}>
        <h2>{Title}</h2>
        <img src={handleUndefined(Poster)} alt="movie" />
        <p>
            Type: {handleUndefined(Type)}
        <br />
            Duration: { handleUndefined(Runtime)}
        </p>
    </div>

  )
}

export default Movie