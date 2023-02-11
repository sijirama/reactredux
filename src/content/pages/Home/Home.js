import React, { useState , useEffect} from 'react'
import './Home.scss'
import MovieListing from '../../components/MovieListing/MovieListing'
import movieApi from '../../../utility/api/MovieApi'
import {ApiKey} from '../../../utility/api/ApiKey'

const Home = () => {
  const [search, setSearch] = useState('percy')
  const [type, setType] = useState('movie')

  useEffect(() => {
    const fetchdata = async () => {
      const response = await movieApi.get(`?apikey=${ApiKey}&s=${search}&type=${type}`)
      .catch((err) => { console.log(err.message) })
      console.log(response)
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
