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
  const newsData = useSelector(state => state.newsSelector.newsData)
  const [pageNumber, setPageNumber] = useState(0)

  const pageCount = Math.ceil(newsData.nbPages / newsData.hitsPerPage)

  const changePages = ({ selected }) => {
      dispatch(changePage(selected))
      dispatch(fetchNews(state.newsSelector.news, state.newsPagination.currentPage))
  }

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <div className="newsContainer">
      
      {newsData.hits?.map(item => (
        <NewsItem key={item.objectID} picked={true} data={item}/>
      ))}
      </div>

      <div className='newsPage-counter'>
        
        {/* <div className='newsPage-arrow-counter'>
          <img src={arrow} style={{'transform': "rotate(270deg)"}}/>
        </div>

        <div className='pages-container' style={{display:"flex"}}>
          <div className='pages-item'>{currentPage+1}</div>
          <div className='pages-item page-item-selected'>{currentPage+2}</div>
          <div className='pages-item'>{currentPage+3}</div>
          <div className='pages-item'>{currentPage+4}</div>
          <div className='pages-item'>{currentPage+5}</div>
          <div className='pages-item'>{currentPage+6}</div>

        </div>
        

        <div className='newsPage-arrow-counter'>
          <img className='arrow-slider' src={arrow} style={{'transform': "rotate(90deg)"}}/>
        </div> */}

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
    </div>
  )
}

export default NewsContainer