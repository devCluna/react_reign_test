import React from 'react'
import NewsItem from '../NewsItem/NewsItem'
import './NewsContainer.css'
import arrow from '../../assets/svg/up-arrow.svg'

const NewsContainer = () => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <div className="newsContainer">
        <NewsItem picked={true}/>
        <NewsItem picked={false}/>
        <NewsItem picked={true}/>
        <NewsItem picked={false}/>
        <NewsItem picked={true}/>
        <NewsItem picked={true}/>
        <NewsItem picked={false}/>
        <NewsItem picked={false}/>
      </div>

      <div className='newsPage-counter'>
        {/* //Prev page */}
        <div className='newsPage-arrow-counter'>
          <img src={arrow} style={{'transform': "rotate(270deg)"}}/>
        </div>

        <div className='pages-container' style={{display:"flex"}}>
          <div className='pages-item'>1</div>
          <div className='pages-item page-item-selected'>2</div>
          <div className='pages-item'>3</div>
          <div className='pages-item'>4</div>
          <div className='pages-item'>5</div>
          <div className='pages-item'>6</div>
        </div>
        
        {/* //Next page */}
        <div className='newsPage-arrow-counter'>
          <img className='arrow-slider' src={arrow} style={{'transform': "rotate(90deg)"}}/>
        </div>
      </div>
    </div>
  )
}

export default NewsContainer