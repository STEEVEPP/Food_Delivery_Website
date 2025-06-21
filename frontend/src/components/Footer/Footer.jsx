import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>"Taste and see that the Lord is good; blessed is the one who takes refuge in him." -  Psalm 34:8

At stjosephbakes, we believe in spreading joy and sweetness, just as the Lord fills our lives with His blessings. Every cake we bake is crafted with love and care, reminding you of the simple pleasures He provides. Celebrate life's moments with us, and may each bite bring a little more happiness to your day!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>            
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 7875758786</li>
                    <li>stjosephbakes@gmail.com</li>
                </ul>
            </div>
            
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 @ stjosephbakes.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
