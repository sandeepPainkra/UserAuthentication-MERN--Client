import React, { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [user, setLoginUser] = useState({});
  console.log(user);

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("MyUser")));
  }, []);

  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user));
    setLoginUser(user);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              user && user._id ? (
                <Homepage userData={user} updateUser={updateUser} />
              ) : (
                <Login updateUser={updateUser} />
              )
            }
          />
          <Route path="/login" element={<Login updateUser={updateUser} />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
