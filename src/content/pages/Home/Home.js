import React from 'react'
import './Home.scss'
import MovieListing from '../../components/MovieListing/MovieListing'

const Home = () => {
  return (
    <div>
      <div className='banner'></div>
      <MovieListing/>
    </div>
  )
}

export default Home