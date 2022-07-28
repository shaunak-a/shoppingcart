import React from 'react'
import "./Searchbox.css"
import { FaPhone } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Searchbox = () => {
  return (
    <div className='searchbar'>
        
        <div className='Search'>
            <div className='hding'>Mimingo</div>
            <div className='phone'> CONTACT US 9999999 < FaPhone/></div>
            <div class="bar"><input/><FaSistrix /></div>
        </div>
    
        <div className='Search2'>
            <div><FaUserAlt/></div>
            <div className='addcart'>
              <Link to="/addtocart">
                <FaCartPlus/>
              </Link>
            </div>
            <div className='heart'><FaHeart/></div>
        </div>
    </div>
    
  )
}

export default Searchbox
