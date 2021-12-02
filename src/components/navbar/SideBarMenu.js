import React from "react";
import { IoMdClose } from "react-icons/io";

export default function SideBarMenu({ open, handleOpenClose }) {
  return (
    <>
      <div className="sidebar-container" open={open} onClick={handleOpenClose}>
        <figure className="close-icon" onClick={handleOpenClose}>
          <IoMdClose color="white" />
        </figure>

        <ul className="sidebar-menu">
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

        <ul className="sidebar-sign-in-up">
          <li>
            <a href="/">SIGN UP</a>
          </li>
          <li id="sign-in">
            <a href="/">SIGN IN</a>
          </li>
        </ul>
      </div>
    </>
  );
}
