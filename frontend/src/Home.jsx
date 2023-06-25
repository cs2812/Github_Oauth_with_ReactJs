import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./config";

const Home = ({ login }) => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Home", login);
    if (!login.status) {
      navigate("/login");
    }
  }, []);

  const handleLogout = async () => {
    try {
      signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to home</h1>
      <h3>This is {login?.Oauth} Oauth</h3>
      <div style={{ marginInline: "auto" }}>
        <img
          style={{ width: "100px", height: "100px" }}
          src={login.image}
          alt=""
        />
      </div>
      <h1>User: {login.name}</h1>
      <br />
      <button
        style={{ marginTop: "10px" }}
        onClick={() => {
          handleLogout();
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
