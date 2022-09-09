import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";
import React from "react";
import "./about.css";
import med1 from "../../Asset/media1.jpg";
import med2 from "../../Asset/med2.jpg";
import {
  FaCalendar,
  FaEnvelopeOpen,
  FaHouseUser,
  FaPlane,
} from "react-icons/fa";
import { IoMdRestaurant } from "react-icons/io";
import { MdSportsBasketball } from "react-icons/md";
function About() {
  return (
    <>
      <img src={med1} alt="back" className="backimg" />
      <div className="about flex__wrapper">
        <div className="aboutCard flex__wrapper">
          <div className="left">
            <h1>About us</h1>
            <p style={{ color: "gray", fontSize: "14px" }}>
              BLOOZ HOTEL is a member company of O’dua group of
              companies and is in fact a pace setter hotel and pan yoruba
              company in all ages. The hotel has 277 rooms comprising one
              Monarchial Suite, several Presidential Suites, Executive Suites,
              Business Suites, Luxury Rooms, Classic Rooms, Deluxe Rooms, Flats
              1 and 2, Standard and Executive double rooms. We are constantly
              advancing personalized service which makes us to see our guests
              and customers as integral part of our sustenance. Guests are
              treated as owners and relationships are nurtured. No cosmetics in
              our services all is real and natural to make our guests feel
              desired, value and pampered.
            </p>
            <h1>Our Core Values</h1>
            <p>
              <ul>
                <li>
                  HOSPITALITY We receive our guests generously with a desire for
                  the dignity it brings to them and the joy it radiates in us.
                </li>
                <li>
                  QUALITY We embrace quality as inherent part of doing business
                  and maintaining the trust of our guests as it offers what is
                  best by giving optimum standard care at all times.
                </li>
                <li>
                  EFFECTIVE SERVICE DELIVERY We always seek to add value to our
                  hospitality business operations in order to deliver premium
                  quality products and services to our esteemed customers.
                </li>
              </ul>
            </p>
        
          </div>
          <div className="cards grid">
            <Card
              sx={{
                position: "relative",
                cursor: "pointer",
                boxShadow: "0px 2px 6px rgba(100,100,100, 0.3)",
              }}
            >
              <h2
                className="card flex__column "
                style={{
                  position: "absolute",
                  zIndex: "500",
                  bottom: "20px",
                  color: "var(--primary)",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  background: "whitesmoke",
                }}
              >
                <FaHouseUser size={60} />
                277 Rooms
              </h2>
            </Card>
          
            <Card
              sx={{
                position: "relative",
                boxShadow: "0px 2px 6px rgba(100,100,100, 0.3)",
                cursor: "pointer",
              }}
            >
              <h2
                className="card flex__column"
                style={{
                  boxShadow: "0px 2px 6px rgba(100,100,100, 0.3)",
                  position: "absolute",
                  zIndex: "500",
                  bottom: "20px",
                  color: "var(--primary)",
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  top: 0,
                  background: "whitesmoke",
                }}
              >
                <FaCalendar size={60} />
                57 Years in Business
              </h2>
            </Card>
            <Card
              sx={{
                position: "relative",
                boxShadow: "0px 2px 6px rgba(100,100,100, 0.3)",
                cursor: "pointer",
              }}
            >
              <h2
                className="card flex__column"
                style={{
                  boxShadow: "0px 2px 6px rgba(100,100,100, 0.3)",
                  position: "absolute",
                  zIndex: "500",
                  bottom: "20px",
                  color: "var(--primary)",
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  top: 0,
                  background: "whitesmoke",
                }}
              >
                <FaPlane size={60} />4 Km to the Airport
              </h2>
            </Card>
            <Card
              sx={{
                position: "relative",
                boxShadow: "0px 2px 6px rgba(100,100,100, 0.3)",
                cursor: "pointer",
              }}
            >
              <h2
                className="card flex__column"
                style={{
                  boxShadow: "0px 2px 6px rgba(100,100,100, 0.3)",
                  position: "absolute",
                  zIndex: "500",
                  bottom: "20px",
                  color: "var(--primary)",
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  top: 0,
                  background: "whitesmoke",
                }}
              >
                <FaEnvelopeOpen size={60} />
                11 Event Halls
              </h2>
            </Card>
            <Card
              sx={{
                position: "relative",
                cursor: "pointer",
                boxShadow: "0px 2px 6px rgba(100,100,100, 0.3)",
              }}
            >
              <h2
                className="card flex__column"
                style={{
                  position: "absolute",
                  zIndex: "500",
                  bottom: "20px",
                  color: "var(--primary)",
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  top: 0,
                  background: "whitesmoke",
                }}
              >
                <IoMdRestaurant size={60} />
                100 Restaurants
              </h2>
            </Card>
            <Card
              sx={{
                position: "relative",
                cursor: "pointer",
                boxShadow: "0px 2px 6px rgba(100,100,100, 0.3)",
              }}
            >
              <h2
                className="card flex__column"
                style={{
                  position: "absolute",
                  zIndex: "500",
                  bottom: "20px",
                  color: "var(--primary)",
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  top: 0,
                  background: "whitesmoke",
                }}
              >
                <MdSportsBasketball size={60} />
                24 Sport center
              </h2>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
