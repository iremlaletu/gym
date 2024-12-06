import React from "react";
import Button from "../components/UI/Button";

const SignIn = () => {
  return (
    <div id="container">
      <div>
        <form>
          <h1> Create Account </h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <Button> Register </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
