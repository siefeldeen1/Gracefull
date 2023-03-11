import React from 'react'
import './home_page.css'
import Header from '../../compounts/header/header'
import Slider from './home_compounts/slider/slider'

function home_page() {
  return (
    <div>
        <Header/>
        <Slider/>
    </div>
  )
}

export default home_page