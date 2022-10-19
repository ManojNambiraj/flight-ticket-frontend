import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import NavbarCopy from "../Navbar/NavbarCopy";
import "./Signup.css";

function Signup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      age: "",
      gender: "",
      location: "",
    },
    onSubmit: async (values) => {
      await axios.post("http://localhost:5000/register", values);
      alert("User Registered");
    },
  });

  return (
    <>
      <div className="row">
        <NavbarCopy />
      </div>
      <div className="Signup_container">
        <form onSubmit={formik.handleSubmit} className="signup_form">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUgYuemV7b3RJ9bnFxeVfAtlxYXl9SG-G4B5g3Y0uRlE8JjKBy0F98p8Fd7bV1eRCclI&usqp=CAU"
            alt=""
            className="signup_profile"
            width={100}
            height={100}
          />
          <div class="mb-3">
            <label for="exampleInputUsername" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputUsername"
              aria-describedby="emailHelp"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
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
          <div className="mb-6 two_column_box">
            <div class="mb-3">
              <label for="exampleInputAge" class="form-label">
                Age
              </label>
              <input
                type="number"
                class="form-control age_input_box"
                id="exampleInputAge"
                name="age"
                value={formik.values.age}
                onChange={formik.handleChange}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputAge" class="form-label">
                Gender
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
              >
                <option selected>--Select--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>

          <div class="mb-3">
            <label for="exampleInputAge" class="form-label">
              Home Location
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="location"
              value={formik.values.location}
              onChange={formik.handleChange}
            >
              <option selected>--Select--</option>
              <option value="Chennai">Chennai</option>
              <option value="Banglore">Banglore</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary signup_button">
            Signup
          </button>

          <label for="exampleInputEmail1" className="form-label bottom_label">
            Already have an account?&nbsp;
            <Link to={"/login"}>Login</Link>
          </label>
        </form>
      </div>
    </>
  );
}

export default Signup;
