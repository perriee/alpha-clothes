import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("Beranda");

  return (
    <div className="flex justify-around p-4 z-10 backdrop-blur-sm font-bold text-xl">
      <div className="flex items-center gap-4">
        <img src={logo} alt="" />
        <p>Alpha Clothes</p>
      </div>
      <ul className="flex list-none gap-12 items-center ">
        <li
          onClick={() => {
            setMenu("Home");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>{" "}
          {menu === "Home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("About");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/About">
            About
          </Link>
          {menu === "About" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Product");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/Product">
            Product
          </Link>{" "}
          {menu === "Product" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Contact");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/Contact">
            Contact
          </Link>
          {menu === "Contact" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="flex items-center gap-11">
        <Link to="/login">
          <button className="w-[157px] h-[58px] outline-none border-2 rounded-lg border-slate-600 ">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
