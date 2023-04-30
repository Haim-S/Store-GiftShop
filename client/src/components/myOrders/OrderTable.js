import React from 'react'

const OrderTable = () => {


    const products = [
        {_id: '644e3c5657129eb7a21b8027', client: null, creatAt: "2023-04-30T09:17:40.977Z", products: [{name: 'MacBook Pro', quantity: 1, _id: '644e3c5657129eb7a21b8028'}, {name: 'Key Holder', quantity: 6, _id: '644e3c5657129eb7a21b8029'}], total: 1585.3842},
        {_id: '644e3c5657129eb7a21b8025', client: null, creatAt: "2023-04-30T09:17:40.977Z", products: [{name: 'MacBook Pro', quantity: 1, _id: '644e3c5657129eb7a21b8028'}, {name: 'Key Holder', quantity: 6, _id: '644e3c5657129eb7a21b8029'}], total: 1585.3842},
    ];

  return (
    <>
             
  <table>

  <tr>
  <thead>Order Num: {products.length}</thead>
  <thead>Product</thead>
  <thead>Quantity</thead>
  <thead>creatAt</thead>
  <thead>Actions</thead>
  </tr>
  {products.Object(products).key((products) => {
    console.log(products);
//  <tr>
//  <tbody>{products.name}</tbody>
//  <tbody>{products.quantity}</tbody>
//  <tbody>{products.creatAt}</tbody>
//  </tr>
  })}
 
  
  </table>
    
    </>
  )
}

export default OrderTable