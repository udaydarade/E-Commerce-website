// import React from 'react'

import "../../assets/Footer.css"
import { SocialIcon } from 'react-social-icons'

const Footer = ( ) => {
    return (
        // <>
        <div className="mainfooter" >
            <div className="container" >
                <div className="row" >
                    <div className="col" >
                        <h4 className="heading">Office Address</h4>
                        <ul className="list" style={{ listStyleType: 'none', padding: 0 }} >
                            <li>Street name</li>
                            <li>City name</li>
                            <li>Contact Us | Phone Number </li>
                        </ul>
                    </div>
                    <div  className="col">
                        <h4>Join our Mailing List</h4>
                        {/* <ul className="list" >
                            
                        </ul> */}
                        <input type="email" name="Email" id="email" />
                        <button className="sign_up">SIGN UP</button>
                    </div>
                    <div className="col">
                        {/* <ul className="list" ></ul> */}
                        {/* <input type="text" /> */}
                        <h4>Follow Us</h4>
                        {/* <a href="https://www.instagram.com" target="_blank"> </a> */}
                        <SocialIcon  className="icons"  url="www.instagram.com" />
                        <SocialIcon className="icons"   url="www.facebook.com" />
                        <SocialIcon  className="icons"  url="www.pinterest.com" />
                        <SocialIcon className="icons"   url="www.twitter.com" />
                        <SocialIcon  className="icons"   url="www.youtube.com" />
                    </div>
                </div>

                <br />

                <div className="row" >
                    <p className="copyright" >
                        <pre>
                        &copy;{new Date().getFullYear()} Ecommercewebsite |     All rights reserved |         Terms of Service |          Privacy Policy
                        </pre>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;