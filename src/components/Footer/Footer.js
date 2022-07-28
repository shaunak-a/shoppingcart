import React from 'react'
import "./Footer.scss"
import SearchContainer from '../../containers/SearchContainer/SearchContainer';
import Button from '@mui/material/Button';

const Footer = () => {
  return (
    <>
 <div className="footer">
    <div className='footer-container'>
        <div className='footer-container-top'>
          <h3>Subscribe Now </h3>
          <div><SearchContainer style={{backgroundColor: "white"}}/></div>
          <div><Button style={{marginRight:"350px"}}variant="outlined">Sign Up</Button></div>
        </div>
        <hr/>
           <div className='footer-container-bottom'>
               <div className='footer-container-left'>
                  <h3>LOGO</h3>
                  <p>Download the App for easy order</p>
                  <p>our products are 100% original </p>
                  <p>and verified</p>
                  <div className='imgsymbols'>
                    <img src="data:image/png;base64,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"></img>
                    <img src="data:image/png;base64,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"></img>
                  </div>
                </div>
               <div className='footer-container-left2'>
                <h2>About</h2>
                <h4>Blog</h4>
                <h4>Food</h4>
                <h4>Delivery</h4>
               </div>
               <div className='footer-container-middle'>
               <h2>About</h2>
                <h4>Blog</h4>
                <h4>Food</h4>
                <h4>Delivery</h4>
               </div>
               <div className='footer-container-right'>
               <h2>About</h2>
                <h4>Blog</h4>
                <h4>Food</h4>
                <h4>Delivery</h4>
               </div>
            </div>
    </div>
 </div>
 </>
  )
}

export default Footer
