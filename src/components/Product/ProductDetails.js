import { Button, Rating } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CartState } from '../../contexts/CartContext'

const ProductDetails = () => {

  const location = useLocation()
  const [data, setData] = useState()
  const { cart, setCart } = CartState()

  useEffect(() => {
    setData(location?.state?.data)
    console.log(location)
  }, [])

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <div className="product-detail-container-show">
          <div className="product-detail-container-show-left">
            <img src={data?.image_link} alt={data?.name} />
          </div>
          <div className="product-detail-container-show-right">
            <div className="product-detail-container-show-right-top">
              <span>{data?.name}</span><br />
              <span>{data?.price}</span> {"  "} <span style={{textDecoration: 'line-through'}}>{2 + data?.price}</span>
              <Rating
                  name="simple-controlled"
                  value={data?.rating}
                />
                {" ("} {data?.id} {") "}
            </div>
            <div className="product-detail-container-show-right-bottom">
                <Button onClick={() => setCart([...cart, data])} variant="contained">Add to Cart</Button>
                <Button variant="contained">Buy Now</Button>
            </div>
          </div>
        </div>
        <div className="product-detail-container-description">

        </div>
        <div className="product-detail-container-relatedProduct">

        </div>

      </div>
    </div>
  )
}

export default ProductDetails
