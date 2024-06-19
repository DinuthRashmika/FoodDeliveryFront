import React from 'react'
import './Header.css'

function header() {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Order your favourite food here</h2>
        <p>Welcome to DashDine! Enjoy a variety of delicious meals delivered straight to your door. Browse, order, and track your food easily with our user-friendly platform. Sit back and relax—your next meal is just a few clicks away!</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default header
