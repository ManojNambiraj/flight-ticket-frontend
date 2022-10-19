import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarCopy from "../Navbar/NavbarCopy";
import "./FlightDetails.css";

function FlightDetails() {
  const [loc, setLoc] = useState([]);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let datas = await axios.get(
      "https://61d2932eda87830017e5963d.mockapi.io/user"
    );
    setLoc(datas.data);
  };

  const handleSearch = () => {
    setTickets([...loc]);
  };

  return (
    <>
      <div className="details_bg_img">
        <div className="row">
          <NavbarCopy />
        </div>
        <div className="col-lg-12 details_container">
          <div className="row">
            <form className="col-lg-4 flight_details_form">
              <div>
                <label
                  for="exampleInputPassword1"
                  class="form-label from_and_to_label"
                >
                  From:
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>--Select--</option>
                  {loc.map((place) => {
                    return (
                      <option value={place.location}>{place.location}</option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label
                  for="exampleInputPassword1"
                  class="form-label from_and_to_label"
                >
                  To:
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>--Select--</option>
                  {loc.map((place) => {
                    return (
                      <option value={place.location}>{place.location}</option>
                    );
                  })}
                </select>
              </div>

              <input
                type={"button"}
                className="btn btn-primary details_search_btn"
                value={"Search"}
                onClick={handleSearch}
              />
            </form>
          </div>
        </div>
        <hr />

        <div className="details_cards">
          {tickets.map((datas) => {
            return (
              <Link to={`/booking/${datas.id}`} className="flight_links">
                <div class="card flight_based_cards">
                  <img
                    src={datas.img}
                    className="card-img-top "
                    alt="..."
                    width={20}
                    height={150}
                  />
                  <div class="card-body flight_details_body">
                    <h3 class="card-title">{datas.flightName}</h3>
                    <p class="card-text">{datas.from}</p>
                    <p class="card-text">to</p>
                    <p class="card-text">{datas.to}</p>
                  </div>
                  <div class="card-footer card_details_footer">
                    <small class="text-muted">
                      <span>{datas.dispature}</span>
                      &nbsp;&nbsp;-&nbsp;&nbsp;<span>{datas.arrival}</span>
                      <br />
                      <br />
                      <h5>₹ {datas.price} /-</h5>
                      <br />
                    </small>
                    <input
                      type={"button"}
                      className="btn btn-sm btn-danger details_card_select_btn"
                      value={"Select"}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FlightDetails;
