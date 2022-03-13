
import React, { useEffect } from "react";
import "./NewsItem.css";
import favIconDisable from '../../assets/svg/iconmonstr-favorite-2.svg'
import favIcon from '../../assets/svg/iconmonstr-favorite-3.svg'
import watchIcon from '../../assets/svg/iconmonstr-time-2.svg'

const NewsItem = ({picked, data}) => {

  return (
    <div className="newsItem">
      <div className="newsItem-body">
        <div className="newsItem-head">
          <img className="newsItem-watchIcon" src={watchIcon}/>
          <span className="newsItem-author-time">2 hours ago by {data.author} </span>
        </div>

        <div className="newsItem-description">{data.story_title ? data.story_title : data.title}</div>
      </div>

      <div className="newsItem-button-holder">
        <img className="newsItem-favIcon" src={picked ? favIcon :favIconDisable}/>
      </div>
    </div>
  );
};

export default NewsItem;
