import React from "react";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Facebook = () => {
  const navigate = useNavigate();
  const handleAuth = () => {
    navigate("/home_page");
  };
  return (
    <div onClick={handleAuth}>
      <BsFacebook size={"25px"} />
      <button>Login With Fackbook</button>
    </div>
  );
};

export default Facebook;
