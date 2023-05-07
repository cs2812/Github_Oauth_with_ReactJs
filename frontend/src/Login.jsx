import React from "react";
import Github from "./Login/Github";
import Google from "./Login/Google";
import "./App.css";

const Login = ({setLogin}) => {
  
  return (
    <div className="App">
      <div>
        <Github setLogin={setLogin}/>
      </div>
      <div>
        <Google/>
      </div>
    </div>
  );
};

export default Login;
