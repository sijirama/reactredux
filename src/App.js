import './App.scss';
import React from 'react';
import {BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Home from "./content/pages/Home/Home"
import Header from "./content/components/Header/Header"
import Footer from "./content/components/Footer/Footer"
import MovieDetail from './content/pages/MovieDetail/MovieDetail'
import PageNotFound from "./content/pages/PageNotFound/PageNotFound"
import Redline from './content/components/Redline/Redline';

function App() {
  return (
    <div className="App">       
      <Router>
        <Header />
        <Redline name={"Redline"}/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/movie/:imdbID' element={<MovieDetail />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
