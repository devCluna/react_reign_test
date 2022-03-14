import React, {useState, useEffect, useRef} from 'react'
import './NewsSelector.css'
import arrow from '../../assets/svg/up-arrow.svg'
import angularIcon from '../../assets/svg/image-138@3x.png'
import reactIcon from '../../assets/svg/image-140@3x.png'
import vueIcon from '../../assets/svg/image-141@3x.png'
import { useDispatch, useSelector } from 'react-redux'
import {  pickNews, fetchNews} from '../../redux/newsSelector/newsSelectorActions'

const NewsSelector = () => {
    const [toggleSelector, setToggleSelector] = useState(false)
    const [optionSelector, setOptionSelector] = useState()
    const selectorRef = useRef()
    const navOption = useSelector(state => state.navOptions.currentOption)
    const pickNewsDispatch = useDispatch()
    const state = useSelector(state => state)

    const arrayNewsSelector =[
        {   
            id:1,
            displayName: "Angular",
            name: "angular",
            imgSrc:angularIcon
        },
        {
            id:2,
            displayName: "React",
            name: "react",
            imgSrc:reactIcon
        },
        {
            id:3,
            displayName: "Vue",
            name: "vue",
            imgSrc:vueIcon
        },
    ]

    //click outside to close toggle
    useEffect(()=>{
        const closeSelector= (e) => {
            if(e.target.className!== selectorRef.current.className){
                setToggleSelector(false)
            }
        }
        document.body.addEventListener('click', closeSelector);
        return ()=>document.body.addEventListener('click', closeSelector);
    },[])
    

  return (
      <>
      <div className="newsSelector" style={{visibility: navOption ? 'visible' : 'hidden'}}>
        <div ref={selectorRef} className="newsSelector-holder" onClick={()=>{
            setToggleSelector(!toggleSelector)
        }}>
            {localStorage.getItem('currentDisplayName') === undefined || localStorage.getItem('currentDisplayName') === null ? "Select your news" : localStorage.getItem('currentDisplayName')}
            {/* {!optionSelector ? "Select your news" : optionSelector} */}
            <img src={arrow}/>
        </div>

        <div className={toggleSelector ? 'newsSelector-options': 'unselected-options'}>
            {arrayNewsSelector.map(newsType => (
                <div key={newsType.id} className='newsSelector-option' onClick={()=>{
                    // setToggleSelector(!toggleSelector)
                    setOptionSelector(newsType.displayName)
                    pickNewsDispatch(pickNews(newsType.name))
                    pickNewsDispatch(fetchNews(newsType.name, state.newsPagination.currentPage))
                    localStorage.setItem('currentNewsSelected', newsType.name)
                    localStorage.setItem('currentDisplayName', newsType.displayName)
                }}>
                    <img className='newsSelector-option-icon' src={newsType.imgSrc}/>
                    {newsType.displayName}
                </div>
            ))
            }
        </div>
    </div>
      </>
    
  )
}

export default NewsSelector