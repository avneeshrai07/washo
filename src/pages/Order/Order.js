import React, { useEffect, useState } from 'react';
import './order.css'; // Create order.css for styling
import Navbar from '../../components/Navbar/Navbar';

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Load orders from local storage on component mount
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders.reverse()); // Reverse the order of the array
  }, []);

  return (
    <div className='order'>  
      <Navbar />
      <div className="order_order-container">
        <h1>Order History</h1>

        {orders.map((order, index) => (
          <div key={index} className="order_item">
            <h3>{order.date}</h3>
            <ul>
              {Object.entries(order.items).map(([section, { count, cost }]) => (
                <li key={section}>
                  {section}: {count} items (Rs {count * cost})
                </li>
              ))}
            </ul>
            <p>Total Cost: Rs {order.totalCost}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
