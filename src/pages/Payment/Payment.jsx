import React from 'react';
import './payment.css';
import Navbar from '../../components/Navbar/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handlePayment = async () => {
    const orderDetails = state;

    try {
      const response = await axios.post('http://localhost:5000/api/payment/initiate', orderDetails); 

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY, 
        amount: response.data.amount,
        currency: 'INR',
        name: 'WASHO',
        description: 'Order Payment',
        order_id: response.data.id,
        handler: async (response) => {
          try {
            const paymentResult = await axios.post('http://localhost:5000/api/payment/verify', { 
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              signature: response.razorpay_signature,
              items: orderDetails.items, 
              totalCost: orderDetails.totalCost,
            });

            if (paymentResult.data.success) {
              navigate('/washo/order');
            }
          } catch (error) {
            console.error('Payment verification failed:', error);
            alert('Payment verification failed');
          }
        },
        theme: {
          color: '#a555ef',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment initiation failed:', error);
      alert('Payment initiation failed');
    }
  };

  return (
    <div className='paymentPage'>
    <Navbar></Navbar>
    <div className='paymentPage_belowNav'>
      <h1 className='paymentPage_h1'>Payment</h1>
      <p className='paymentPage_date'>Date: {state.date}</p>
      <ul className='paymentPage_items'>
        {Object.entries(state.items).map(([item, details]) => (
          <li key={item} className='paymentPage_item'>
            {item}: {details.count} items (Rs {details.count * details.cost})
          </li>
        ))}
      </ul>
      <p className='paymentPage_totalCost'>Total Cost: Rs {state.totalCost}</p>
      <button className='paymentPage_button' onClick={handlePayment}>Pay Now</button>
    </div>
    </div>
  );
};


export default Payment;
