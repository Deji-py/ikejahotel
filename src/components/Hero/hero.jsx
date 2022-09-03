import { Button, Card, CardActions, IconButton, Input } from "@mui/material";
import React from "react";
import { FaChevronCircleDown, FaChevronDown, FaCompass } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import back from "../../Asset/back.jpg";
import About from "../About/About";
import "./hero.css";

export function Home() {
  return (
    <div className="herosection">
      <img src={back} alt="back" className="back backed" />
      <div className="heroCard">
        <img src={back} alt="back" className="back" />

        <div className="right">
          <h3>Welcome to Lagos Airport Hotel</h3>
          <h1> HOSPITALITY WITH A GRAND ATTENTION </h1>
         <p style={{opacity:"0.8", fontSize:"12px", transform:"translateY(-10px)"}}>LAGOS AIRPORT HOTEL LIMITED is a member company of O’dua group of
          companies and is in fact a pace setter hotel and pan yoruba company in
          all ages. The hotel has 277 rooms comprising one Monarchial Suite,
          several Presidential Suites, Executive Suites, Business Suites, Luxury
          Rooms, Classic Rooms, Deluxe Rooms, Flats 1 and 2, Standard and
          Executive double rooms. </p>
          
        </div>

        <Card
          className="reserve flex__column"
          sx={{ background: "whitesmoke", borderRadius: "10px" }}
        >
          <form className="flex__wrapper">
            <label className="flex__column">
              Check in
              <input type="date" variant="filled" />
            </label>
            <label className="flex__column">
              Check out
              <input type="date" variant="filled" />
            </label>
            <label className="flex__column">
              Size
              <input
                type="number"
                variant="filled"
                style={{ width: "100px" }}
              />
            </label>
          </form>
          <div className="cardActions flex__wrapper">
            <Button
              variant="contained"
              disableElevation
              size="small"
              sx={{
                borderRadius: "100px",
                padding: "10px 20px",
                margin: "20px",
                background: "var(--secondary)",
                ":hover": {
                  background: "var(--secondary)",
                },
              }}
            >
              Check Availability
            </Button>
            <Button
              endIcon={<FaCompass />}
              className="explore"
              style={{
                borderRadius: "100px",
                border: "solid 2px var(--secondary)",
                color: "var(--secondary)",
              }}
            >
              Explore
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
function Hero() {
  return <Outlet />;
}

export default Hero;
