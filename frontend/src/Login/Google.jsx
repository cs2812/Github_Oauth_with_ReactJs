import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  signInWithPopup,
  // signInWithRedirect,
  // onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../config";

const Google = ({ setLogin }) => {
  const navigate = useNavigate();
  const handleAuth = () => {
    navigate("/");
  };

  const handleGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    let res = await signInWithPopup(auth, provider);
    // let res = await signInWithRedirect(auth,provider)
    // console.log("res",res)
    setLogin({
      status: true,
      name: res.user.displayName,
      image: res.user.photoURL,
      Oauth: "Google",
    });
    handleAuth();
  };

  // useEffect(()=>{
  // youtune link = https://www.youtube.com/watch?v=cZAnibwI9u8
  //   const resFun = onAuthStateChanged(auth,(currentUser)=>{
  //     console.log("current",currentUser)
  //   })
  //   return ()=>{
  //     resFun()
  //   }
  // },[])

  return (
    <div onClick={handleGoogleAuth}>
      <FcGoogle size={"25px"} />
      <button>Login With Google</button>
    </div>
  );
};

export default Google;
