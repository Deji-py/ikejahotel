import { Button } from "@mui/material";
import React from "react";
import { FaChevronRight, FaMapMarker, FaPhone } from "react-icons/fa";
import "./contact.css";
import image from "../../Asset/media1.jpg";

function Contact() {
  return (
    <div className="contact flex__column">
      <h1 style={{color:'white'}}>CONTACT US</h1>
      <div className="main flex__wrapper">
        <form className="flex__center">
          <div className="leftform">
            <label>Name</label>
            <input type={"text"} />

            <label>Phone no</label>
            <input type={"text"} />

            <label>Email</label>
            <input type={"text"} />

            <label>Address</label>
            <input type={"text"} />
          </div>
          <div className="rightform flex__column">
            <label>Message</label>
            <textarea />
            <Button
              disableElevation
              variant="contained"
              size="large"
              sx={{
                width: "10vw",
                borderRadius: "100px",
                padding: "8px",
                background: "var(--primary)",
                color: "white",
                fontSize: "15px",
                fontWeight: "bolder",
                margin: "10px",
                ":hover": {
                  background: "var(--primary)",
                },
              }}
            >
              Send
            </Button>
          </div>
        </form>
        <div className="mainright">
          <div className="card">
           
            <div className="det">
              <h2>
                {" "}
                <FaMapMarker /> Address
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              </p>
            </div>
            <div className="det">
              <h2>
                {" "}
                <FaPhone />
                Contact{" "}
              </h2>
              <p>080987345, 090678456, +34256789095</p>
            </div>
            <div className="imagesshow flex">
            <img src={image} alt="image" className="backimage" />
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
