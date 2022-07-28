import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
import CallIcon from '@mui/icons-material/Call';
import SearchContainer from '../../containers/SearchContainer/SearchContainer';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BadgeContainer from '../../containers/BadgeContainer/BadgeContainer';

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-container-banner">
          {/* Banner needs to be updated */}
          Black Friday Banner
        </div>
        <div className="header-container-top">
          <div className="header-container-top-left">
            <p>Welcome to shopping mart!</p>
          </div>
          <div className="header-container-top-right">
            <div className="header-container-top-right-links">
              <Link to="/">
                Home
              </Link>
              <Link to="/shop">
                Shop
              </Link>
              <Link to="/product">
                Product
              </Link>
              <Link to="/categories">
                Categories
              </Link>
              <Link to="/brands">
                Brands
              </Link>
              <Link to="/about-us">
                About
              </Link>
            </div>

          </div>
        </div>
        <div className="header-container-bottom">
          <div className="header-container-bottom-left">
            <div className="header-container-bottom-left-logo">
              <h1>mimingo</h1>
            </div>
            <div className="header-container-bottom-left-contactUs">
              <div className="header-container-bottom-left-contactUs-icon">
                <CallIcon />
              </div>
              <div className="header-container-bottom-left-contactUs-text">
                <span style={{color: '#4e4e4e', fontWeight: '700'}}>Contact Us</span><br />
                <span style={{color: '#6e6eff'}}>+8801556 6554 22</span>
              </div>
            </div>
          </div>
          <div className="header-container-bottom-center">
            <SearchContainer />
          </div>
          <div className="header-container-bottom-right">
            <div className="header-container-bottom-right-user">
              <PersonOutlineOutlinedIcon />
            </div>
            <div className="header-container-bottom-right-whislist">
              <FavoriteBorderOutlinedIcon />
            </div>
            <div className="header-container-bottom-right-cart">
              <Link to="/addtocart" style={{textDecoration: 'none'}}>
                <BadgeContainer>
                  <ShoppingCartIcon />
                </BadgeContainer>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
