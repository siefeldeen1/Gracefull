import React from 'react'
import './home_page.css'
import Header from '../../compounts/header/header'
import Slider from './home_compounts/slider/slider'

function home_page() {
  return (
    <div>
      <div className='adver_home'><p>Start your very own shop now!!</p></div>
        <Header/>
        <Slider/>
    </div>
  )
}

export default home_page