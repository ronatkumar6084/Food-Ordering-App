import React from 'react'
import { LOGO_URL } from '../utils/constants'

export default function Footer() {
  return (
    <div className="footer bg-black flex justify-evenly mt-14">
        <div className='copyright flex mt-20 mb-20'>
            <div className='logo w-12'>
                <img src={LOGO_URL} alt="" />
            </div>
            <div className= 'text-white  ml-1'>
                <h1 className=' text-xl'>Here's Your Food</h1>
                <p className='text-red-600'>&copy; copyright 2024 </p>
                <p className='text-red-600'>All rights reserved</p>
                <div className="icons">
                <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook mr-3"></i></a>
                <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter mr-3"></i></a>
                <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram mr-3"></i></a>
                <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
        </div>
        <div className='company mt-20 mb-20'>
            <ul>
                <li className='font-bold text-lg  text-white'>Company</li>
                <li className='text-red-600'>About</li>
                <li className='text-red-600'>Career</li>
                <li className='text-red-600'>Team</li>
            </ul>
        </div>
        <div className='contact mt-20 mb-20'>
            <ul>
                <li className='font-bold text-lg  text-white'>Contact Us</li>
                <li className='text-red-600'>Help & Support</li>
                <li className='text-red-600'>Partner With Us</li>
                <li className='text-red-600'>Ride With Us</li>
            </ul>
        </div>
        <div className='legal mt-20 mb-20'>
            <ul>
                <li className='font-bold text-lg  text-white'>Legal</li>
                <li className='text-red-600'>Terms & Conditions</li>
                <li className='text-red-600'>Cookie Policy</li>
                <li className='text-red-600'>Privacy Policy</li>
            </ul>
        </div>
    </div>
  )
}
