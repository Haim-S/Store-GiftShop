import React from 'react'

import "./orderTable.css"
import CancelIcon from '@mui/icons-material/Cancel';

const OrderTable = () => {


    const formattedDate = (creatAt) => {
        
const date = new Date(creatAt);
return date.toLocaleDateString();
    }


    const products = [
        {_id: '644e3c5657129eb7a21b8027', client: null, creatAt: "2023-04-30T09:17:40.977Z", products: [{name: 'MacBook Pro', quantity: 1, _id: '644e3c5657129eb7a21b8028'}, {name: 'Key Holder', quantity: 6, _id: '644e3c5657129eb7a21b8029'}], total: 2000.3842},
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
          <th>Cancel</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product._id}>
            <td>{product._id}</td>
            <td>{formattedDate(product.creatAt)}</td>
            <td>
              {product.products.map(item => (
                <div key={item._id}>
                  {item.name}
                  {/* <hr/> */}
                </div>
              ))}
            </td>
            <td>
              {product.products.map(item => (
                <div key={item._id}>
                  {item.quantity}
                  {/* <hr/> */}
                </div>
              ))}
            </td>
            <td>{product.total}</td>
            <td><CancelIcon/></td>
          </tr>
        ))}
      </tbody>
    </table>
    
    </>
  )
}

export default OrderTable