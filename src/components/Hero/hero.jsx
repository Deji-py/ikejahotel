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
      <img
        src={
          "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        }
        alt="back"
        className="backed"
      />
      <div className="heroCard">
        <div className="imagecon">
          <img
            src={
              "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            }
            alt="back"
            className="back"
          />
        </div>
        <div className="right">
          <h3>Welcome to Blooz Hotel and suites </h3>
          <h1> HOSPITALITY WITH A GRAND ATTENTION </h1>
          <p
            style={{
              opacity: "0.8",
              fontSize: "12px",
              transform: "translateY(-10px)",
            }}
          >
            BLOOZ HOTEL AND SUITES is a member company of O’dua group of
            companies and is in fact a pace setter hotel and pan yoruba company
            in all ages. The hotel has 277 rooms comprising one Monarchial
            Suite, several Presidential Suites, Executive Suites, Business
            Suites, Luxury Rooms, Classic Rooms, Deluxe Rooms, Flats 1 and 2,
            Standard and Executive double rooms.{" "}
          </p>
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
