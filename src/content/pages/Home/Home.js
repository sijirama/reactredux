import React, { useState , useEffect} from 'react'
import './Home.scss'
import MovieListing from '../../components/MovieListing/MovieListing'
import movieApi from '../../../utility/api/MovieApi'
import {ApiKey} from '../../../utility/api/ApiKey'
import {useDispatch} from 'react-redux'
import {addMovie} from '../../../features/movies/movieSlice.js'

const Home = () => {
  const [search, setSearch] = useState('percy')
  const [type, setType] = useState('movie')
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchdata = async () => {
      const response = await movieApi.get(`?apikey=${ApiKey}&s=${search}&type=${type}`)
      .catch((err) => { console.log(err.message) })
      console.log(response)
      dispatch(addMovie(response.data))
    }

    fetchdata()
  },[])
  

  return (
    <div>
      <div className='banner'></div>
      <MovieListing/>
    </div>
  )
}

export default Home
