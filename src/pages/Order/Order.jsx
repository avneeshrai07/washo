import React, { useEffect, useState } from 'react';
import './order.css';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import cookies from 'js-cookie';
const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const token = cookies.get('token');
    console.log('order token:',token);
    const fetchOrders = async () => {
      try {
        if (!token) {
          console.error("Token is Expired. Login Again");
          navigate('/washo/signin')
        }
        const response = await axios.get('http://localhost:5000/api/orders', {
          withCredentials: true,  
          headers: {
            Authorization: `Bearer ${token}`, // Standard way to pass token
          },
        });        
        console.log('Fetched Orders:', response.data);

        if (Array.isArray(response.data)) {
          setOrders(response.data);
        } else {
          console.error('Unexpected data format');
          setError('Unexpected data format');
          setOrders([]); // Ensure orders is an empty array
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('Failed to fetch orders');
        setOrders([]); // Ensure orders is an empty array
      }
    };

    fetchOrders();
  }, [navigate]);

  return ( 
    <div className='orderPage'>
    <Navbar></Navbar>
    <div className='orderPage_belowNav'>
      <h1 className='orderPage_h1'>Orders</h1>
      {error && <p className='orderPage_error'>{error}</p>}
      {orders.length === 0 ? (
        <p className='orderPage_noOrders'>No orders found</p>
      ) : (
        orders.map(order => (
          <div key={order._id} className='orderBox'>
            <p className='orderBox_date'>Date: {new Date(order.date).toLocaleString()}</p>
            <ul className='orderBox_items'>
              {Object.entries(order.items).map(([item, details]) => (
                <li key={item} className='orderBox_item'>
                  {item}: {details.count} items (Rs {details.count * details.cost})
                </li>
              ))}
            </ul>
            <p className='orderBox_totalCost'>Total Cost: Rs {order.totalCost}</p>
          </div>
        ))
      )}
      </div>
    </div>
  );
};

export default OrderPage;
