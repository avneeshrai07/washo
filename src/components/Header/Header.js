import React from 'react'
import { useNavigate } from 'react-router-dom';
import './header.css'
function Header() {

  const navigate = useNavigate();

  const handleMakeOrder= ()=>{
    navigate('/cart');
  }
  const handleViewOrder= ()=>{
    navigate('/order');
  }



  return (
    <div className='Header_'>
      <div className='Header_card'>
        <div className='Header_text'>
          <h1>Fresh Clothes Fresh You :)</h1>
          <p>Revitalize your wardrobe effortlessly with our expert cloth washing services.  <br></br> Embrace freshness, embrace style.</p>
          <div className='Header_buttons'>
          <button className='make_order' onClick={handleMakeOrder}>make order</button>
          <button className='view_order' onClick={handleViewOrder}>view order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header