import React,{useState , useEffect} from 'react'
import axios from 'axios'
import ProductCard from './ProductCard';
import "./Product.scss";

const Product = () => {

    const[data,setData]= useState();

    useEffect(() => {
       axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
       .then((response)=> { console.log(response.data)
       setData(response.data)})
       .catch((err)=>{console.log("Error",err)})
         },[])


  return (
    <>
      <div className="product">      
        <div className="product-container">
          <div className="product-container-list">
            { 
              data && data.map((value)=>{
                return(
                  <ProductCard data={value} />
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
