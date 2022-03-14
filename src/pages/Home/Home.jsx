import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from '../../components/Header/Header'
import NavOptions from '../../components/NavOptions/NavOptions'
import NewsContainer from '../../components/NewsContainer/NewsContainer'
import NewsSelector from '../../components/NewsSelector/NewsSelector'
import { fetchNews } from '../../redux/newsSelector/newsSelectorActions'
import './Home.css'

const currentNewsSelected = localStorage.getItem('currentNewsSelected')

const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchNews(currentNewsSelected,0))
  },[])

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