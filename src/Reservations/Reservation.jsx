import { Button, Card, CardMedia } from "@mui/material";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import "./reservation.css";

const rooms = [
  {
    image:
      "https://lagosairporthotel.com.ng/wp-content/uploads/2019/12/LagosAirportHotelBudgetRoom1-1.jpg",
    title: "Budget Room",
    adults: 2,
    view: "city View",
    bedType: "6 X 6 Sized Bed",
    categories: "rooms",
    amenities:
      "6×6 sized Bed, Complimentary Breakfast for One, Free WiFi, Fully Air Conditioned, Reading & Dressing Table, Refrigerator, Toilet & Bath, Toilet and Bath En Suite, TV",
  },
  {
    image:
      "https://lagosairporthotel.com.ng/wp-content/uploads/2019/12/LagosAirportHotelBudgetRoom1-1.jpg",
    title: "Budget Room",
    adults: 2,
    view: "city View",
    bedType: "6 X 6 Sized Bed",
    categories: "rooms",
    amenities:
      "6×6 sized Bed, Complimentary Breakfast for One, Free WiFi, Fully Air Conditioned, Reading & Dressing Table, Refrigerator, Toilet & Bath, Toilet and Bath En Suite, TV",
  },
  {
    image:
      "https://lagosairporthotel.com.ng/wp-content/uploads/2019/12/LagosAirportHotelBudgetRoom1-1.jpg",
    title: "Budget Room",
    adults: 2,
    view: "city View",
    bedType: "6 X 6 Sized Bed",
    categories: "rooms",
    amenities:
      "6×6 sized Bed, Complimentary Breakfast for One, Free WiFi, Fully Air Conditioned, Reading & Dressing Table, Refrigerator, Toilet & Bath, Toilet and Bath En Suite, TV",
  },
  {
    image:
      "https://lagosairporthotel.com.ng/wp-content/uploads/2019/12/LagosAirportHotelBudgetRoom1-1.jpg",
    title: "Budget Room",
    adults: 2,
    view: "city View",
    bedType: "6 X 6 Sized Bed",
    categories: "rooms",
    amenities:
      "6×6 sized Bed, Complimentary Breakfast for One, Free WiFi, Fully Air Conditioned, Reading & Dressing Table, Refrigerator, Toilet & Bath, Toilet and Bath En Suite, TV",
  },
];

function Reservation() {
  return (
    <div className="main">
      <h1>Reservation</h1>
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
                <h3 style={{ fontSize: "35px", fontWeight: "500" }}>$60,000</h3>
                <p>/Per Night</p>
              </div>
              <Button
                disableElevation
                variant="contained"
                size="large"
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
    </div>
  );
}

export default Reservation;
