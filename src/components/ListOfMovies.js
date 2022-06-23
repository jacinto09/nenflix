import React from 'react'
import {getMovies} from '../services/getMovies'
import { useState, useEffect } from 'react'
import Movie from './Movie'
import NoMovies from './NoMovies';
function ListOfMovies() {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    function handleChange(e) {
      setSearchTerm(e.target.value.toLowerCase())
    }

  
    useEffect(() => {
     if(searchTerm.length > 0) {
      getMovies(searchTerm).then (data => {
      setMovies(data)
        })
        console.log(movies);
     }
      
      
    }, [searchTerm])


    
    
  return (
  
    <div className='listofmovies'> 
    <input type="text" name="search" id="nav-search" placeholder='Search' value={searchTerm} onChange={handleChange}/> 
    <div className='movies-container'> 
    
      {
       movies!==[]&& typeof movies !=='undefined'&& movies.length >0? movies.map(movie => {
          return <Movie key={movie.imdbID} {...movie} />

        }): <NoMovies />
      }
    </div>
    </div>

  )
  }


export default ListOfMovies