import { BrowserRouter, Route, Routes } from "react-router-dom";
import FlightDetails from "./components/FlightDetails/FlightDetails";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import "./App.css";
import Booking from "./components/Booking details/Booking";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="col-lg-12">
          <div className="row">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/flightDetails" element={<FlightDetails />} />
              <Route path="/booking/:id" element={<Booking />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
