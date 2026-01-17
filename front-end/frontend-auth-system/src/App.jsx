import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/auth/Login.jsx";
import RegisterUser from "./components/auth/RegisterUser.jsx";

function App() {
  return (
    <>
      {/* <Login /> */}
      <RegisterUser />
    </>
  );
}

export default App;
