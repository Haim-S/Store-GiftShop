import React from 'react'

const OrderTable = () => {


    const products = [
        {_id: '644e3c5657129eb7a21b8027', client: null, creatAt: "2023-04-30T09:17:40.977Z", products: [{name: 'MacBook Pro', quantity: 1, _id: '644e3c5657129eb7a21b8028'}, {name: 'Key Holder', quantity: 6, _id: '644e3c5657129eb7a21b8029'}], total: 1585.3842},
        {_id: '644e3c5657129eb7a21b8025', client: null, creatAt: "2023-04-30T09:17:40.977Z", products: [{name: 'MacBook Pro', quantity: 1, _id: '644e3c5657129eb7a21b8028'}, {name: 'Key Holder', quantity: 6, _id: '644e3c5657129eb7a21b8029'}], total: 1585.3842},
    ];

  return (
    <>
   <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Created At</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product._id}>
            <td>{product._id}</td>
            <td>{product.creatAt}</td>
            <td>
              {product.products.map(item => (
                <div key={item._id}>
                  {item.name}
                </div>
              ))}
            </td>
            <td>
              {product.products.map(item => (
                <div key={item._id}>
                  {item.quantity}
                </div>
              ))}
            </td>
            <td>{product.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
    
    </>
  )
}

export default OrderTable