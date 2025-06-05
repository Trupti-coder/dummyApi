import React, { useState } from 'react'

const Product = () => {

    let[data,setData]=useState([]);

    async function getAllProduct(){

        let response=await fetch('');
        
        
    }
  return (
    <>
    <h3>Product </h3>
    </>
  )
}

export default Product;