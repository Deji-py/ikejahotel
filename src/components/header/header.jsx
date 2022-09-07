import React, { useState, useSyncExternalStore } from "react";
import "./header.css";
import { AiFillHome } from "react-icons/ai";
import { RiHotelFill, RiContactsBookFill } from "react-icons/ri";
import {
  FaAddressBook,
  FaDoorOpen,
  FaHamburger,
  FaHome,
  FaImages,
} from "react-icons/fa";
import { Button, IconButton } from "@mui/material";
import logo from "../../Asset/mylogo.svg";
import { NavLink } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="flex__wrapper">
      <div className="logo flex__wrapper">
        <img src={logo} alt="logo" className="logoimg" />
        <h2>IKEJA AIRPORT HOTEL</h2>
      </div>
      <nav className="navbar flex__wrapper desktop" id="navbar">
        <NavLink
          to="/"
          className={`navItem flex__column ${({ isActive }) =>
            isActive ? "active" : "inactive"}`}
        >
          <p>Home</p>
          <AiFillHome className="navicon" />
        </NavLink>

        <NavLink
          to="/about"
          className={`navItem flex__column ${({ isActive }) =>
            isActive ? "active" : "inactive"}`}
        >
          <p>About</p>
          <RiHotelFill className="navicon" />
        </NavLink>

        <NavLink
          to="/reservation"
          className={`navItem flex__column ${({ isActive }) =>
            isActive ? "active" : "inactive"}`}
        >
          <p>Rooms</p>
          <FaDoorOpen className="navicon" />
        </NavLink>

        <NavLink
          to="/gallery"
          className={`navItem flex__column ${({ isActive }) =>
            isActive ? "active" : "inactive"}`}
        >
          <p>Gallery</p>
          <FaImages className="navicon" />
        </NavLink>
        <NavLink
          to="/contact"
          className={`navItem flex__column ${({ isActive }) =>
            isActive ? "active" : "inactive"}`}
        >
          <p>Contact us</p>
          <FaAddressBook className="navicon" />
        </NavLink>

        <div className="navItem">
          <NavLink to="/login">
            <Button
              variant="contained"
              disableElevation
              size="small"
              sx={{
                padding: "10px",
                width: "10vw",
                marginRight: "10px",
                background: "var(--secondary)",
                ":hover": {
                  background: "var(--secondary)",
                },
              }}
            >
              Login
            </Button>
          </NavLink>
          <NavLink to="/signup">
          <Button
            variant="contained"
            disableElevation
            size="small"
            sx={{
              padding: "10px",
              background: "var(--primary)",
              width: "10vw",
              ":hover": {
                background: "var(--primary)",
              },
            }}
          >
            Signup
          </Button>
          </NavLink>
        </div>
      </nav>
      <div className="mobileNav">
        <IconButton onClick={() => setToggle(!toggle)}>
          <HiMenuAlt4 size={35} />
        </IconButton>

        <nav
          className="mobilenavbar"
          onClick={() => setToggle(false)}
          style={{ display: toggle ? "block" : "none" }}
        >
          <NavLink to="/" className="mobilenavItem flex__column ">
            <h3>Home</h3>
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setToggle(false)}
            className="mobilenavItem flex__column "
          >
            <h3>About</h3>
          </NavLink>

          <NavLink
            to="/reservation"
            onClick={() => setToggle(false)}
            className="mobilenavItem flex__column "
          >
            <h3>Reservation</h3>
          </NavLink>
          <NavLink
            to="/reservation"
            onClick={() => setToggle(false)}
            className="mobilenavItem flex__column "
          >
            <h3>Gallery</h3>
          </NavLink>

          <div className="mobilenavItem flex__column ">
            <h3>Contact us</h3>
          </div>

          <div className="mobilenavItem">
            <Button
              variant="contained"
              disableElevation
              size="small"
              sx={{
                padding: "10px",
                background: "var(--secondary)",
                ":hover": {
                  background: "var(--secondary)",
                },
              }}
            >
              Reserve Now
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
