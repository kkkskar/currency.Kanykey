import React, {useState}from 'react'
import { NavLink } from 'react-router-dom'

export const Header = ({setCurrency}) => {
    const[info, setInfo] = useState('')
    const handleInput =(e)=>{
      setInfo(e.target.value)
    }

    const handleKeyDown =(e)=>{
    //  console.log(info);
    if(e.target.value && e.key === 'Enter'){
        setCurrency(info);
    }
    }
  return (
    <><header className='header'>
        <div className='container'>
            <div className='header__wrapper'>
                <div className='header__logo'><NavLink to={'/'}>LOGO</NavLink></div>
                <input type='text' onInput={handleInput} onKeyDown={handleKeyDown}/>
            </div>
        </div>
        </header></>
  )
}

