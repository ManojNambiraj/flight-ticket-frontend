import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

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

  const handleSearch = () => {
    navigate("/login");
  };

  return (
    <div className="home_container">
      <div className="col-lg-12">
        <div className="row">
          <Navbar />
        </div>
        <div className="col-lg-12">
          <div className="row">
            <form className="col-lg-12 location_box">
              <div className="row">
                <div className="col-lg-6 fromto_select_option">
                  <label
                    for="exampleInputPassword1"
                    class="form-label from_and_to_label"
                  >
                    From:
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>--Select--</option>
                    {loc.map((place) => {
                      return (
                        <option value={place.location}>{place.location}</option>
                      );
                    })}
                  </select>
                </div>
                <br />
                <div className="col-lg-6 fromto_select_option">
                  <label
                    for="exampleInputPassword1"
                    class="form-label from_and_to_label"
                  >
                    To:
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>--select--</option>
                    {loc.map((place) => {
                      return (
                        <option value={place.location}>{place.location}</option>
                      );
                    })}
                  </select>
                </div>
                <button
                  onClick={handleSearch}
                  className="btn btn-primary location_search_btn"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
