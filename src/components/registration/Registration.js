import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Registraion.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Registration = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const EventClick = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = (event) => {
    event.preventDefault();
    const { name, email, password, cpassword } = user;

    if (name && email && password && password === cpassword) {
      axios.post("http://localhost:9000/register", user).then((res) => {
        alert(res.data.message);
        navigate("/");
      });
    } else {
      alert("Invalid Input");
    }
  };

  return (
    <div className="register">
      <div className="container">
        <form>
          <h2>Register</h2>
          <input
            value={user.name}
            type="text"
            name="name"
            onChange={EventClick}
            placeholder="Enter Name"
          />
          <input
            value={user.email}
            type="email"
            name="email"
            onChange={EventClick}
            placeholder="Enter Email Id"
          />
          <input
            value={user.password}
            type="password"
            name="password"
            onChange={EventClick}
            placeholder="Enter Password"
          />
          <input
            value={user.cpassword}
            type="password"
            name="cpassword"
            onChange={EventClick}
            placeholder="Confirm Password"
          />
          <Button
            type="submit"
            onClick={register}
            variant="contained"
            color="primary"
          >
            Register
          </Button>
          <span>OR</span>
          <br />
          <Link to="/login">
            <Button type="submit" variant="contained" color="primary">
              login
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Registration;
