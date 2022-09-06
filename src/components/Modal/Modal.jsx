import { Button, Card, CardMedia, Divider, IconButton } from "@mui/material";
import React, { useState } from "react";
import "./modal.css";
import image from "../../Asset/back.jpg";
import { FaChevronLeft, FaMinus, FaPlus } from "react-icons/fa";

function Modal({ setToggle, toggle }) {
  const pricemultiplier = 60000;
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(pricemultiplier);

  const increase = (prevCount, prevTotal) => {
    setCount((prevCount += 1));
    setTotal((prevTotal += pricemultiplier));
  };
  const decrease = (prevCount, prevTotal) => {
    setCount((prevCount -= 1));
    setTotal((prevTotal -= pricemultiplier));
  };
  return (
    <div
      className="modal flex__column"
      style={{ display: toggle ? "flex" : "none" }}
    >
      <div
        className="card flex__column"
        id="paycard"
        style={{ position: "relative" }}
      >
        <IconButton
          onClick={() => setToggle(false)}
          style={{ position: "absolute", right: "20px", top: "20px" }}
        >
          <FaChevronLeft />
        </IconButton>
        <h1>Make Payment</h1>
        <form className="flex__center">
          <div className="leftform flex__column">
            <div className="imputwrapper">
              <div className="amountcont flex__center">
                <h1>
                  $60,000
                  <span style={{ fontSize: "15px", fontWeight: "300" }}>
                    /Night
                  </span>
                </h1>
              </div>
              <label>Card no</label>
              <div className="cardnoinputcont flex__center">
                <input type={"number"}  maxLength={4} placeholder="XXXX" />
                <input type={"number"} maxLength={4} placeholder="XXXX" />
                <input type={"number"} maxLength={4}placeholder="XXXX" />
              </div>
            </div>
            <div className="imputwrapper flex__center">
              <div className="subinputcont">
                <label>Expiry Date</label>
                <input type={"text"} />
              </div>
              <div className="subinputcont">
                <label>Cvv</label>
                <input type={"text"} />
              </div>
            </div>
            <div className="paymentCount flex__wrapper">
              <div className="counter flex__center">
                <IconButton size="small" onClick={() => decrease(count, total)}>
                  <FaMinus />
                </IconButton>
                <h3 style={{ padding: "10px" }}>{count}</h3>

                <IconButton size="small" onClick={() => increase(count, total)}>
                  <FaPlus />
                </IconButton>
              </div>
              <div className="extPrice">
                <h5>Total</h5>
                <h4>${total}</h4>
              </div>
            </div>
            <Button
              disableElevation
              variant="contained"
              size="large"
              sx={{
                width: "10vw",
                borderRadius: "10px",
                padding: "8px",
                background: "var(--primary-light)",
                color: "white",
                fontSize: "15px",
                fontWeight: "bolder",
                margin: "10px",
                ":hover": {
                  background: "var(--primary-light)",
                },
              }}
            >
              Pay
            </Button>
          </div>
          <div className="rightform flex__column">
            <h3>Payment Method</h3>
            <div className="flex__column">
              <div className="grid paymentMet">
                <Card sx={{ position: "relative", cursor: "pointer" }}>
                  <h2
                    className="card flex__column "
                    style={{
                      bottom: "20px",
                      color: "white",
                      width: "100%",
                      height: "100%",
                      top: 0,
                      background: "crimson",
                    }}
                  >
                    Bank Tranfer
                  </h2>
                </Card>
                <Card sx={{ position: "relative", cursor: "pointer" }}>
                  <h2
                    className="card flex__column "
                    style={{
                      bottom: "20px",
                      color: "white",
                      width: "100%",
                      height: "100%",
                      top: 0,
                      background: "orange",
                    }}
                  >
                    USSD
                  </h2>
                </Card>
                <Card sx={{ position: "relative", cursor: "pointer" }}>
                  <h2
                    className="card flex__column "
                    style={{
                      bottom: "20px",
                      color: "white",
                      width: "100%",
                      height: "100%",
                      top: 0,
                      background: "green",
                    }}
                  >
                    Cash
                  </h2>
                </Card>
              </div>
              <Divider />
              <div className="grid paymentMet">
                <Card sx={{ position: "relative", cursor: "pointer" }}>
                  <h2
                    className="card flex__column "
                    style={{
                      bottom: "20px",
                      color: "white",
                      width: "100%",
                      height: "100%",
                      top: 0,
                      background: "var(--primary-light)",
                    }}
                  >
                    Card
                  </h2>
                </Card>
                <Card sx={{ position: "relative", cursor: "pointer" }}>
                  <h2
                    className="card flex__column "
                    style={{
                      bottom: "20px",
                      color: "white",
                      width: "100%",
                      height: "100%",
                      top: 0,
                      background: "brown",
                    }}
                  >
                    Gateway
                  </h2>
                </Card>
                <Card sx={{ position: "relative", cursor: "pointer" }}>
                  <h2
                    className="card flex__column "
                    style={{
                      bottom: "20px",
                      color: "white",
                      width: "100%",
                      height: "100%",
                      top: 0,
                      background: "orangered",
                    }}
                  >
                    Remiita
                  </h2>
                </Card>
              </div>

              <h3>Details</h3>
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                molestiae cumque nobis sit sed facilis quam. Facilis earum quae
                in
              </blockquote>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
