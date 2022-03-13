import React, {useState, useEffect, useRef} from 'react'
import './NewsSelector.css'
import arrow from '../../assets/svg/up-arrow.svg'
import angularIcon from '../../assets/svg/image-138@3x.png'
import reactIcon from '../../assets/svg/image-140@3x.png'
import vueIcon from '../../assets/svg/image-141@3x.png'

const NewsSelector = () => {
    const [toggleSelector, setToggleSelector] = useState(false)
    const selectorRef = useRef()

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
    <div className="newsSelector">
        <div ref={selectorRef} className="newsSelector-holder" onClick={()=>{
            setToggleSelector(!toggleSelector)
        }}>
            Select your news
            <img src={arrow}/>
        </div>

        <div className={toggleSelector ? 'newsSelector-options': 'unselected-options'}>
            <div className='newsSelector-option' onClick={()=>{
                setToggleSelector(!toggleSelector)
            }}>
                <img className='newsSelector-option-icon' src={angularIcon}/>
                Angular
            </div>
            <div className='newsSelector-option' onClick={()=>{
                setToggleSelector(!toggleSelector)
            }}>
                <img className='newsSelector-option-icon' src={reactIcon}/>
                React
            </div>
            <div className='newsSelector-option' onClick={()=>{
                setToggleSelector(!toggleSelector)
            }}>
                <img className='newsSelector-option-icon' src={vueIcon}/>
                Vue
            </div>
        </div>
    </div>
  )
}

export default NewsSelector