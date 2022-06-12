import React from "react";
import Button from "@material-ui/core/Button";
import "./Homepage.css";
const Homepage = ({ userData, setLoginUser }) => {
  return (
    <div className="homepage">
      <div className="container">
        <h2>Welcome {userData.name}</h2>
        <span>{userData.email}</span>
        <Button
          variant="contained"
          onClick={() => setLoginUser({})}
          color="primary"
        >
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Homepage;
