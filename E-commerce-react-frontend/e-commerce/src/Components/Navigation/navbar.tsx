

//import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from './searchbar';
import '../../assets/navbar.css';
import { useState } from 'react';

const Navbar = () => {
  // State to manage the visibility of the dropdown menu
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Function to toggle the visibility of the dropdown menu
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
    <nav className="navbar sticky-top navbar-expand-lg">
      <div className="container-fluid">
        <div id="brand">
          <b className="Company_name">BYTE<br/> MART</b>
        </div>
        <SearchBar />
        {/* Right-most content outside collapsible section */}
        <div className="ml-auto">
          {/* Show dropdown button only on small screens below the lg breakpoint */}
          <div className="d-lg-none">
            <button className="btn btn-secondary dropdown-toggle" onClick={toggleDropdown}>
              Menu
            </button>
            <div className={`dropdown-menu${dropdownVisible ? ' show' : ''}`} aria-labelledby="navbarDropdown">
              <a className="dropdown-item other" href="#">
                Wishlist <img src="/images/heart-red.svg" alt="Heart" className="ml-2" />
              </a>
              <a className="dropdown-item cart" href="/AddtoCart/CartPage.tsx">
                Cart <img src="/images/cart3-white.svg" width="25px" alt="Cart" className="ml-2" />
              </a>
              <a className="dropdown-item other" href="#">
                Account <img src="/images/user.svg" alt="User" className="ml-2" />
              </a>
            </div>
          </div>
          {/* Hide buttons on small screens below the lg breakpoint */}
          <div className="d-none d-lg-flex options ">
            <button className="btn ml-2 other">
              Wishlist <img src="/images/heart-red.svg" alt="Heart" className="ml-2" />
            </button>
            <button className="btn ml-2 cart">
              Cart <img src="/images/cart3-white.svg" width="25px" alt="Cart" className="ml-2" />
            </button>
            <button className="btn ml-2 other">
              Account <img src="/images/user.svg" alt="User" className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </nav>

    </>
  );
};

export default Navbar;





