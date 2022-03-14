import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeOptions } from '../../redux/navOptions/navOptionsActions'
import './NavOptions.css'

const NavOptions = () => {
  const dispatch = useDispatch()
  const navOption = useSelector(state => state.navOptions.currentOption)

  return (
    <div className='navOptions'>
        <div onClick={()=>{
          dispatch(changeOptions(true))
        }} className= {navOption ? 'navOption navOption-left left-selected': 'navOption navOption-left'} >All</div>
        
        <div onClick={()=>{
          dispatch(changeOptions(false))
        }} className={navOption ?'navOption navOption-right' : 'navOption navOption-right right-selected'} >My faves</div>
    </div>
  )
}

export default NavOptions