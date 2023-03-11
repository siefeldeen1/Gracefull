import React, { useState,useEffect } from 'react'
import './slider.css'
import img from '../../../../img/pesce-huang-CNMMvIQJS2Y-unsplash.jpg'


function slider() {
const [counter, setcounter] = useState(0)


setInterval(() => {
 
  document.querySelectorAll(".slider_compount").forEach(e=> {
    console.log(e.offsetWidth);

      document.querySelector(".slider_cont").scrollTo({
        top:0,
        left:document.querySelector(".slider_cont").scrollLeft +e.offsetWidth ,
        behavior:"smooth"
      })

 

    setTimeout(() => {
      document.querySelector(".slider_cont").scrollTo({
        top:0,
        left:document.querySelector(".slider_cont").scrollLeft +e.offsetWidth ,
        behavior:"smooth"
      })

    }, 2000);
    setTimeout(() => {
      document.querySelector(".slider_cont").scrollTo({
        top:0,
        left:document.querySelector(".slider_cont").scrollLeft - 2*e.offsetWidth ,
        behavior:"smooth"
      })
    }, 4000);
     
     
    
  
  });

  

}, 6000);

 
  return (
    <div className='slider_cont'>
          <div className='slider_compount'>
              <img className='img_class' src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/original/image-manager/rest-assured.jpg?t=1663703636&_gl=1*1nyv6jg*_ga*MTIzNjY1NjYwNy4xNjUyMTM3Njc4*_ga_WS2VZYPC6G*MTY2MzcwMzE2MC40MDIuMS4xNjYzNzAzNzM0LjU3LjAuMA." alt="" />
              <div className='gird_background1'></div>
          </div>

          <div className='slider_compount'>
              <img className='img_class' src={img} alt="" />
              <div className='gird_background2'></div>
          </div>

          <div className='slider_compount'>
              <img className='img_class' src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/original/image-manager/twintout-l-s.jpg?t=1659985460&_gl=1*iuxuwe*_ga*MTUxMDA1OTkuMTY2NTE4MDA3OQ..*_ga_WS2VZYPC6G*MTY3Mjc4MzEzNS4yNTguMS4xNjcyNzg1OTAwLjUuMC4w" alt="" />
              <div className='gird_background3'></div>
          </div>

    </div>
  )
}

export default slider