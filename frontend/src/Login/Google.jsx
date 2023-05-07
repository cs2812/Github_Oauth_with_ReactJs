import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Google = () => {
    const navigate = useNavigate();
    const handleAuth = () => {
      navigate("/home_page");
    };
  return (
    <div onClick={handleAuth}>
        <FcGoogle size={"25px"} />
        <button>Login With Google</button>
      </div>
  )
}

export default Google
