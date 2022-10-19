import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarCopy from "../Navbar/NavbarCopy";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      await axios.post("http://localhost:5000/login", values);
      alert("Login Successfull");
      navigate("/flightDetails");
    },
  });

  return (
    <>
      <div className="row">
        <NavbarCopy />
      </div>
      <div className="login_container">
        <form onSubmit={formik.handleSubmit} className="login_form">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUgYuemV7b3RJ9bnFxeVfAtlxYXl9SG-G4B5g3Y0uRlE8JjKBy0F98p8Fd7bV1eRCclI&usqp=CAU"
            alt=""
            className="login_profile"
            width={100}
            height={100}
          />
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary signup_button">
            Login
          </button>
          <label for="exampleInputEmail1" className="form-label bottom_label">
            Don't have an account?&nbsp;
            <Link to={"/signup"}>Signup</Link>
          </label>
        </form>
      </div>
    </>
  );
}

export default Login;
