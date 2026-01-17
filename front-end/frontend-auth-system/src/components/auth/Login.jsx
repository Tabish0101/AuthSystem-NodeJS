import React from "react";

const Login = () => {
  return (
    <div className="bg-emerald-100 p-20">
      <form action="">
        <label htmlFor="">Email: </label>
        <input type="text" />
        <br />
        <label htmlFor="">Password: </label>
        <input type="text" />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
