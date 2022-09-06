import {
  Button,
  Card,
  CardMedia,
  Pagination,
  PaginationItem,
} from "@mui/material";
import React from "react";
import { FaChevronRight, FaSearch } from "react-icons/fa";
import "./reservation.css";
import image from "../Asset/media1.jpg";
import Modal from "../components/Modal/Modal";
import { useState } from "react";

const rooms = [
  {
    image:
      "https://images.unsplash.com/photo-1631049035326-57414e7739eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Budget Room",
    adults: 2,
    price:"$60,000",
    view: "city View",
    bedType: "6 X 6 Sized Bed",
    categories: "rooms",
    amenities:
      "6×6 sized Bed, Complimentary Breakfast for One, Free WiFi, Fully Air Conditioned, Reading & Dressing Table, Refrigerator, Toilet & Bath, Toilet and Bath En Suite, TV",
  },
  {
    image:
      "https://images.unsplash.com/photo-1557127275-f8b5ba93e24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHxob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Standard Room",
    adults: 2,
    view: "city View",
    bedType: "6 X 6 Sized Bed",
    price:"$56,000",
    categories: "rooms",
    amenities:
      "6×6 sized Bed, Complimentary Breakfast for One, Free WiFi, Fully Air Conditioned, Reading & Dressing Table, Refrigerator, Toilet & Bath, Toilet and Bath En Suite, TV",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE4fHxob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Luxury Hall",
    adults: 2,
    view: "city View",
    bedType: "6 X 6 Sized Bed",
    categories: "rooms",
    price:"$120,000",
    amenities:
      "6×6 sized Bed, Complimentary Breakfast for One, Free WiFi, Fully Air Conditioned, Reading & Dressing Table, Refrigerator, Toilet & Bath, Toilet and Bath En Suite, TV",
  },
  {
    image:
      "https://images.unsplash.com/photo-1621891333819-00c206ec8994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Classic Room",
    adults: 2,
    view: "city View",
    price:"$44,000",
    bedType: "6 X 6 Sized Bed",
    categories: "rooms",
    amenities:
      "6×6 sized Bed, Complimentary Breakfast for One, Free WiFi, Fully Air Conditioned, Reading & Dressing Table, Refrigerator, Toilet & Bath, Toilet and Bath En Suite, TV",
  },
];

function Reservation() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="mainRes">
      <div className="imagecont">
        <img
          src={
            "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHxob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }
          alt="back"
          className="myback"
        />
      </div>
      <div className="top flex__wrapper">
        <h1>Rooms</h1>
        <div className="inputcont">
          <input
            type={"text"}
            className="serchbar"
            placeholder="Serch for Rooms"
          />
          <button className="searchIconcont">
            <FaSearch className="searchIcon" />
          </button>
        </div>
      </div>

      {rooms.map((room) => {
        return (
          <div className="mycard flex__wrapper">
            <div className="imagewrapper">
              <img src={room.image} alt="" style={{ width: "350px" }} />
            </div>
            <div className="middle">
              <h1>{room.title}</h1>
              <div>
                <p>Adults:{room.adults}</p>
                <p>View: {room.view}</p>
                <p>Bed Type:{room.bedType}</p>
                <p>Categories: {room.categories}</p>
                <p>Amenities:{room.amenities}</p>
              </div>
            </div>
            <div className="pricing flex__column">
              <div className="price flex__wrapper">
                <h3 style={{ fontSize: "35px", fontWeight: "500" }}>{room.price}</h3>
                <p>/Per Night</p>
              </div>
              <Button
                disableElevation
                variant="contained"
                size="large"
                onClick={() => setToggle(true)}
                sx={{
                  width: "20vw",
                  boxShadow: "0px 2px 6px #c5c5c5",
                  background: "var(--secondary)",
                  borderRadius: "100px",
                  padding: "10px",
                  fontSize: "15px",
                  fontWeight: "bolder",
                  margin: "10px",
                  ":hover": {
                    background: "var(--secondary)",
                  },
                }}
              >
                Book
              </Button>
              <Button
                disableElevation
                endIcon={<FaChevronRight size={15} />}
                variant="contained"
                size="large"
                sx={{
                  width: "20vw",
                  borderRadius: "100px",
                  padding: "10px",
                  background: "whitesmoke",
                  color: "black",
                  fontSize: "15px",
                  fontWeight: "bolder",
                  boxShadow: "0px 2px 6px #c5c5c5",
                  margin: "10px",
                  ":hover": {
                    background: "whitesmoke",
                  },
                }}
              >
                View Details
              </Button>
            </div>
          </div>
        );
      })}
      <Modal setToggle={setToggle} toggle={toggle} />
      <Pagination style={{ float: "right" }}>
        <PaginationItem>1</PaginationItem>
        <PaginationItem>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
      </Pagination>
    </div>
  );
}

export default Reservation;
