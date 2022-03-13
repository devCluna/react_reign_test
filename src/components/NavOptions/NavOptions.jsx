import React,{useState} from 'react'
import './NavOptions.css'

const NavOptions = () => {
  const [toggleOption, setToggleOption] = useState(true)
  return (
    <div className='navOptions'>
        <div onClick={()=>setToggleOption(true)} className= {toggleOption ? 'navOption navOption-left left-selected': 'navOption navOption-left'} >All</div>
        <div onClick={()=>setToggleOption(false)} className={toggleOption ?'navOption navOption-right' : 'navOption navOption-right right-selected'} >My faves</div>
    </div>
  )
}

export default NavOptions