import React from "react";
import "./NewsItem.css";
import favIconDisable from '../../assets/svg/iconmonstr-favorite-2.svg'
import favIcon from '../../assets/svg/iconmonstr-favorite-3.svg'
import watchIcon from '../../assets/svg/iconmonstr-time-2.svg'

const NewsItem = ({picked}) => {
  return (
    <div className="newsItem">
      <div className="newsItem-body">
        <div className="newsItem-head">
          <img className="newsItem-watchIcon" src={watchIcon}/>
          <span className="newsItem-author-time">2 hours ago by author</span>
        </div>

        <div className="newsItem-description">From chaos to free will</div>
      </div>

      <div className="newsItem-button-holder">
        <img className="newsItem-favIcon" src={picked ? favIcon :favIconDisable}/>
      </div>
    </div>
  );
};

export default NewsItem;
