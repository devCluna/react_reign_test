import React,{useEffect, useState} from 'react'
import NewsItem from '../NewsItem/NewsItem'
import './NewsContainer.css'
import arrow from '../../assets/svg/up-arrow.svg'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'
import { changePage } from '../../redux/newsPagination/newsPaginationActions'
import { fetchNews } from '../../redux/newsSelector/newsSelectorActions'

const NewsContainer = () => {
  const dispatch= useDispatch()
  const state = useSelector(state => state)
  const navOption = useSelector(state => state.navOptions.currentOption)
  const newsData = useSelector(state => state.newsSelector.newsData)
  const likedNews = useSelector(state => state.favNews.likedNews)

  const pageCount = Math.ceil(newsData.nbPages / newsData.hitsPerPage)

  const changePages = ({ selected }) => {
      dispatch(changePage(selected))
      dispatch(fetchNews(state.newsSelector.news, state.newsPagination.currentPage))
  }

  return (
    <>
      {navOption 
      ?
      <div style={{display: "flex", flexDirection: "column"}}>
      <div className="newsContainer">
      
      {newsData.hits?.map(item => {
        
        return (<NewsItem key={item.objectID} picked={likedNews.some(news => news.objectID === item.objectID ? true: false)} data={item}/>)
      })}
      </div>
   
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        containerClassName ={"newsPage-counter"}
        onPageChange={changePages}
        pageClassName={"pages-item"}
        breakClassName={"pages-item"}
        previousLinkClassName={"newsPage-arrow-counter"}
        nextLinkClassName={"newsPage-arrow-counter"}
        activeClassName={"page-item-selected"}
      />

    </div>
    : 
    <div style={{display: "flex", flexDirection: "column"}}>
      <div className="newsContainer">
      {likedNews.map(item => {
        return (<NewsItem key={item.objectID} picked={likedNews.some(news => news.objectID === item.objectID ? true: false)} data={item}/>)
      })}
      </div>
    </div>
    }
    
    </>
  )
}

export default NewsContainer