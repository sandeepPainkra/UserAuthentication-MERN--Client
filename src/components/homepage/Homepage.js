import React from "react";
import Button from "@material-ui/core/Button";
import "./Homepage.css";
const Homepage = ({ userData, updateUser }) => {
  return (
    <div className="homepage">
      <div className="container">
        <h2>Welcome {userData.name}</h2>
        <span>{userData.email}</span>
        <Button
          variant="contained"
          onClick={() => updateUser({})}
          color="primary"
        >
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Homepage;
