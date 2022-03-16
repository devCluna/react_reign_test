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
  const [pageNumber, setPageNumber] = useState(0);

  const pageCount = Math.ceil(newsData.nbPages / newsData.hitsPerPage)
  const pagesVisited = pageNumber * 8;
  const pageCountFavNews = Math.ceil(likedNews.length / 8)

  const getHours = (postDate, currentDate) => {
    const milliseconds = Math.abs(currentDate - new Date(postDate))
    const hours = milliseconds /36e5
     return hours < 1 ? `${Math.floor(hours * 60)} minutes`  : `${Math.round(hours)} hours`
  }

  const changePages = ({ selected }) => {
      dispatch(changePage(selected))
      dispatch(fetchNews(state.newsSelector.news, selected))
  }

  const changePageFavNews = ({selected}) => {
    setPageNumber(selected)
  }

  return (
    <>
      {navOption 
      ?
      <div style={{display: "flex", flexDirection: "column"}}>
      <div className="newsContainer">
      
      {newsData.hits?.map(item => {
        
        return (<NewsItem key={item.objectID} picked={likedNews.some(news => news.objectID === item.objectID ? true: false)} data={item} date={getHours(item.created_at, new Date)}/>)
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
      {likedNews.slice(pagesVisited,pagesVisited + 8).map(item => {
        return (<NewsItem key={item.objectID} picked={likedNews.some(news => news.objectID === item.objectID ? true: false)} data={item} date={getHours(item.created_at, new Date)}/>)
      })}
      </div>

      {likedNews.length >0 &&
        <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCountFavNews}
        containerClassName ={"newsPage-counter"}
        onPageChange={changePageFavNews}
        pageClassName={"pages-item"}
        breakClassName={"pages-item"}
        previousLinkClassName={"newsPage-arrow-counter"}
        nextLinkClassName={"newsPage-arrow-counter"}
        activeClassName={"page-item-selected"}
      />}
    </div>
    }
    
    </>
  )
}

export default NewsContainer