import React from "react";
import { VscThreeBars } from "react-icons/vsc";


export default function NavBar({ handleOpenClose }) {
  return (
    <>
      <nav className="navbar-container">
        {/* lOGO */}
        <h1 className="logo">AGENCY</h1>

        {/* Navigation menu */}
        <ul className="nav-menu">
          <li>
            <a href="/">Discover</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Contact us</a>
          </li>
        </ul>

        {/* Sign in and sign up buttons */}
        <ul className="sign-in-up">
          <li>
            <a href="/">SIGN UP</a>
          </li>
          <li id="sign-in">
            <a href="/">SIGN IN</a>
          </li>
        </ul>

        <figure className="mobile-icon" onClick={handleOpenClose}>
          <VscThreeBars color="white" />
        </figure>
      </nav>
    </>
  );
}
