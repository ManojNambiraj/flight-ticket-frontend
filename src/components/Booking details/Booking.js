import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavbarCopy from "../Navbar/NavbarCopy";
import "./Booking.css";

function Booking() {
  const { id } = useParams();

  const [loc, setLoc] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let datas = await axios.get(
      "https://61d2932eda87830017e5963d.mockapi.io/user"
    );
    setLoc(datas.data);
  };

  return (
    <div>
      <div className="details_bg_img">
        <div className="row">
          <NavbarCopy />
        </div>
      </div>
      {loc
        .filter((datas) => datas.id == id)
        .map((item) => {
          return (
            <div className="Booking_cards">
              <div class="card booking_details">
                <h5 class="card-header">Your's Booking Confirmed...!</h5>
                <div class="card-body">
                  <h5 class="card-title">{item.flightName}</h5>
                  <p class="card-text">
                    <span class="card-text">{item.from}</span>&nbsp;&nbsp;&nbsp;
                    <span class="card-text">to</span>&nbsp;&nbsp;&nbsp;
                    <span class="card-text">{item.to}</span>
                  </p>
                  <p class="card-text">
                    <span class="card-text">{item.dispature}</span>
                    &nbsp;&nbsp;&nbsp;
                    <span class="card-text">-</span>&nbsp;&nbsp;&nbsp;
                    <span class="card-text">{item.arrival}</span>
                  </p>
                  <p class="card-text">
                    <span class="card-text">
                      <h5>₹ {item.price} /-</h5>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Booking;
