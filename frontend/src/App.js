import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState({
    status: false,
    name: "",
    image: "",
    Oauth: "",
  });
  // useEffect(() => {
  //   console.log("login",login);
  // }, [login]);
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login setLogin={setLogin} />} />
        <Route path="/" element={<Home login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
