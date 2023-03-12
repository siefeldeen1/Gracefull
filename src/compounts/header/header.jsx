import React from 'react'
import './header.css'
import { BiSearchAlt2 } from 'react-icons/bi';
import { TfiLocationPin } from 'react-icons/tfi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { BsShop } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';

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
                        <VscAccount size={24}/>
                        <p>Login</p>
                </div>

                <div className='header_icon'>       
                        <HiOutlineShoppingBag size={24}/>
                        <p>Bag</p>
                </div>
                
                <div className='header_icon'>       
                        <BsShop size={24}/>
                        <p>Your shop</p>
                </div>
                
            </div>

    </header>
  )
}

export default header