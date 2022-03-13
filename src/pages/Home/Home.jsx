import React from 'react'
import Header from '../../components/Header/Header'
import NavOptions from '../../components/NavOptions/NavOptions'
import NewsContainer from '../../components/NewsContainer/NewsContainer'
import NewsSelector from '../../components/NewsSelector/NewsSelector'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <Header/>
        <NavOptions/>
        <NewsSelector/>
        <NewsContainer/>
    </div>
  )
}

export default Home