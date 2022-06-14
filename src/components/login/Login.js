import { Button } from "@material-ui/core";
import React, { useState } from "react";
import * as axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ updateUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const EventClick = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = (event) => {
    event.preventDefault();

    axios.post("http://localhost:9000/login", user).then((res) => {
      alert(res.data.message);
      updateUser(res.data.user);
      navigate("/");
    });

    // setUser({ name: "", email: "", password: "" });
  };

  return (
    <div className="login">
      <div className="container">
        <form>
          <h2>Login</h2>
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
          <Button
            type="submit"
            onClick={login}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
          <span>OR</span>
          <br />
          <Link to="/register">
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
