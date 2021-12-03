import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const handleOpenClose = () => {
    setOpen(!open);
    console.log("HandleOpenClose is working");
  };

  return (
    <>
      <nav className={open ? "sidebar-container" : "navbar-container"}>
        {/* lOGO */}
        <h1 className={open ? "logo sidebar-logo" : "logo"}>AGENCY</h1>

        <figure
          className={open ? "close-icon" : "none"}
          onClick={handleOpenClose}
        >
          <IoMdClose color="white" />
        </figure>

        {/* Navigation menu */}
        <ul className={open ? "sidebar-menu" : "nav-menu"}>
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
        <ul className={open ? "sign-in-up sidebar-sign-in-up" : "sign-in-up"}>
          <li>
            <a href="/">SIGN UP</a>
          </li>
          <li id="sign-in">
            <a href="/">SIGN IN</a>
          </li>
        </ul>

        <figure
          className={open ? "none" : "mobile-icon"}
          onClick={handleOpenClose}
        >
          <VscThreeBars color="white" />
        </figure>
      </nav>
    </>
  );
}
