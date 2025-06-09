import React, { useEffect, useState } from 'react'

const Product = () => {

    let[data,setData]=useState([]);

    async function getAllProduct(){

        let response=await fetch('https://dummyjson.com/products');
        let result=response.json();
        console.log(result.products);
        setData(result.products);

        
    }

    useEffect(()=>{

      getAllProduct();

    },[]);

    function funDeleteRow(id){
      setData(data.filter(user=>user.id!=id))

    }


  return (
    <>
    <h3>Product </h3>

    <table>
        <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Description</td>
            <td>Category</td>
            <td>Price</td>
            <td>rating</td>
            <td>Stock</td>
            <td>Tag</td>
        </tr>
        {
          data.map((x)=>{
           return(
            <tr key={x.id}>

              <td>{x.id}</td>
              <td>{x.title}</td>
              <td>{x.description}</td>
              <td>{x.category}</td>
              <td>{x.price}</td>
              <td>{x.rating}</td>
              <td>{x.stock}</td>
              <td>{x.tag}</td>
              <td><img src='x.thumbnail'></img></td>
              <td onClick={funDeleteRow}>Remove</td>
              

            </tr>
           )
          })
        }
    </table>

    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
    </>
  )
}

export default Product;