import React from 'react'
import {getMovies} from '../services/getMovies'
import { useState, useEffect } from 'react'
import Movie from './Movie'
function ListOfMovies() {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    function handleChange(e) {
      setSearchTerm(e.target.value.toLowerCase())
    }

  
    useEffect(() => {
     if(searchTerm.length > 0) {
      getMovies(searchTerm).then (data => {
      setMovies(typeof data !=="undefined" ? data : setSearchTerm(''))
        })
        console.log(movies);
     }else{
      getMovies().then (data => {
      setMovies(typeof data !=="undefined" ? data : setSearchTerm(''))
        }
        )
     }
      
      
    }, [searchTerm])


    
    
  return (
   <>
    
    <div className='listofmovies'> 
    <input type="text" name="search" id="nav-search" placeholder='Search' value={searchTerm} onChange={handleChange}/>    
    <Movie key={movies.imdbID} {...movies} />
    </div>
    </>
  )
  }


export default ListOfMovies