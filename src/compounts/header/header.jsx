import React from 'react'
import './header.css'
import { BiSearchAlt2 } from 'react-icons/bi';
import { TfiLocationPin } from 'react-icons/tfi';
import { IoBagHandleSharp } from 'react-icons/io5';

function header() {
  return (
    <header className="header_class">
            <div className='header_icon_group'>
                <div className='header_icon'>       
                    <BiSearchAlt2 size={24}/>
                    <p>Search</p>
                </div>
                
                   <div className='header_icon'>
                        <TfiLocationPin size={24}/>
                        <p>Find us</p>
                   </div>
            
            </div>


            <div className='logo_dev'>
                <div className='logo' >Gracefull</div>

                <div className='nav_section'>
                    <li className='nav_element'>BEST SELLERS</li>
                    <li className='nav_element'>  SKINCARE</li>
                    <li className='nav_element'>BODY & HAIR CARE</li>
                    <li className='nav_element'>SETS & KITS</li>
                    <li className='nav_element'>SHOP ALL</li>
                    <li className='nav_element'>THIS IS GRACEFULL</li>
                </div>
            </div>


            <div className='header_icon_group'>

                <div className='header_icon'>       
                        <IoBagHandleSharp size={24}/>
                        <p>Bag</p>
                    </div>
                
            </div>

    </header>
  )
}

export default header