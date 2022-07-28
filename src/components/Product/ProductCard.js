import * as React from 'react';
import "./Product.scss"
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

export default function ProductCard({data}) {
  return (
    <>
      <Link to={`/product/${data?.name}`}
            state= {{data}}
        className="link-decoration"
      >
        <div className="product-card">
          <div className="product-card-container"> 
            <div className="product-card-container-top">
              <img 
                src={data?.image_link} 
                alt={data?.name}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
                }}
              />
            </div>
            <div className="product-card-container-bottom">
              <div className="product-card-container-bottom-name">
                {data?.name}
              </div>
              <div className="product-card-container-bottom-rating">
                <Rating
                  name="simple-controlled"
                  value={data.rating}
                />
                {" ("} {data?.id} {") "}
              </div>
              <div className="product-card-container-bottom-price">
                ${data?.price} {"  "} <span style={{textDecoration: 'line-through'}}>${2 + data?.price}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
