import React from 'react'
import "./MovieListing.scss"
import {getAllMovies} from '../../../features/movies/movieSlice.js'
import {useSelector} from "react-redux"

const MovieListing = () => {
    
  const movies = useSelector(getAllMovies)
  let rendermovies = ""

  rendermovies = movies.Response == 'True' ? ():()

  return (
    <div>MovieListing</div>
  )
}

export default MovieListing
