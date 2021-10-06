import React from "react";
import "./Auth.css";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  function signedIn(data) {
    console.log(data);
  }

  return (
    <div className="signIn">
      <form className="popup p-4 table">
        <h3 className="text-center text-xs font-bold mb-4 mt-2">Sign In</h3>
        <TextField
          id="outlined-required"
          label="User Name"
          variant="filled"
          {...register("username", { required: true })}
        />
        <p className="mb-4 error text-sm">
          {errors.username?.type === "required" && "Username is required"}
        </p>
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          {...register("password", { required: true })}
        />
        <p className="mb-4 error  text-sm">
          {errors.password?.type === "required" && "Password is required"}
        </p>
        <Button
          variant="contained"
          className="float-right btn"
          onClick={handleSubmit(signedIn)}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
