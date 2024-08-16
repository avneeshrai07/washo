// Cart.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './cart.css';
import Navbar from '../../components/Navbar/Navbar';

const Cart = () => {
  const [cart, setCart] = useState({
    Shirts: { count: 0, cost: 30 },
    Tshirts: { count: 0, cost: 20 },
    Suites: { count: 0, cost: 40 },
    Jackets: { count: 0, cost: 35 },
    Pants: { count: 0, cost: 50 },
    Sweaters: { count: 0, cost: 60 },
    Shoes: { count: 0, cost: 25 },
    Bags: { count: 0, cost: 50 },
  });

  const handleAdd = (section) => {
    setCart({
      ...cart,
      [section]: { count: cart[section].count + 1, cost: cart[section].cost },
    });
  };

  const handleRemove = (section) => {
    if (cart[section].count > 0) {
      setCart({
        ...cart,
        [section]: { count: cart[section].count - 1, cost: cart[section].cost },
      });
    }
  };

  const renderMenuItems = () => {
    return Object.entries(cart).map(([section, { count, cost }]) => (
      <li key={section}>
        {section}: {count} items (Rs {count * cost})
      </li>
    ));
  };

  const navigate = useNavigate();

  const orderNowClicked = () => {
    const orderItems = {};
    let totalCost = 0;

    Object.entries(cart).forEach(([section, { count, cost }]) => {
      if (count > 0) {
        orderItems[section] = { count, cost };
        totalCost += count * cost;
      }
    });

    const newOrder = {
      date: new Date().toLocaleString(),
      items: orderItems,
      totalCost,
    };

    navigate('/washo/payment', { state: newOrder }); // Navigate to the payment page with order details
  };

  return (
    <div className='cart'>
      <Navbar />
      <div className="cart_cart-container">
        <h1>Washing Cart</h1>

        <div className="cart_sections-container">
          {Object.entries(cart).map(([section, { count }]) => (
            <div key={section} className="cart_section">
              <h1>{section}</h1>
              <h3>Cost: Rs {cart[section].cost}</h3>
              <button onClick={() => handleAdd(section)}>Add</button>
              <button onClick={() => handleRemove(section)}>Remove</button>
              <h3>Count: {count}</h3>
            </div>
          ))}
        </div>

        <div className="cart_menu-container">
          <h2>Shopping Cart Menu</h2>
          <ul>{renderMenuItems()}</ul>
          <p>Total Cost: Rs {Object.values(cart).reduce((total, { count, cost }) => total + count * cost, 0)}</p>
          <div className='orderNow'>
            <button className="orderNow_button" onClick={orderNowClicked}>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
