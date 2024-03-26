import React, { useState, useContext } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from 'react-redux';
// import UserContex from '../utils/UserContex';

const Header=()=> {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems);
  // const {loggedInUser} = useContext(UserContex);
  // console.log(loggedInUser);
 
  return (
    <div className='header flex justify-between bg-pink-100 shadow-lg'>
      <div className='logo-container'>
        <img className="logo w-36"
        src={LOGO_URL} alt="logo"/>
      </div>
      <div className="nav-items flex items-center">
        <ul className='flex p-4'>
            <li className='px-4'>Online Status: {onlineStatus ? "Yes" : "No"}</li>
            <li className='px-4'><Link to="/">Home</Link></li>
            <li className='px-4'><Link to="/about">About</Link></li>
            <li className='px-4'><Link to="/contact">ContactUs</Link></li>
            <li className='px-4 font-bold text-xl'><Link to="/cart">Cart ({cartItems.length})</Link></li>
            <button className="login-btn" 
            onClick={()=>{ btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}}>
              {btnName}</button>
            {/* <li className='px-4 font-bold'>loggedInUser</li> */}
        </ul>
      </div>
    </div>
  );
};
export default Header;
//"https://png.pngtree.com/png-vector/20220706/ourmid/pngtree-food-logo-png-image_5687717.png"
//if no dependancy array => useEffect is called on every render.
//if dependancy array is empty = [] => useEffect is called on intial render(only once).