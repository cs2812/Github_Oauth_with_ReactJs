import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ login }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!login.status) {
      navigate("/login");
    }
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to home</h1>
      <h1>User: {login.data?.name}</h1>
      <a target="_blank" href={login.data?.html_url}>
        Check Github Id
      </a>
      <br />
      <button
        style={{ marginTop: "10px" }}
        onClick={() => {
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
