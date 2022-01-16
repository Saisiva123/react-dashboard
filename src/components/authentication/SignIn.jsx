import React, { useEffect } from "react";
import "./Auth.css";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { loggedIn } from "../../store/actions/user-action.js";
import { useDispatch } from "react-redux";
import useFetch from "../../apis/useFetch";
import CircularProgress from "@mui/material/CircularProgress";
import {RoutePaths} from "../../config/RouteConstants"
import { useHistory } from "react-router-dom";
function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const { response, loading, fetchApi } = useFetch();

  function signedIn(data) {
    fetchApi({
      url: "/login",
      method: "post",
      body: { email: data.username, password: data.password },
    });
  }

  useEffect(() => {
    if (response) {
      let { firstName, lastName, token } = response;
      localStorage.setItem("userToken", token);
      history.push(RoutePaths.dashboard.path)
      // dispatch(loggedIn({ name: firstName + lastName }));
    }
  }, [response]);

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
          {loading ? <CircularProgress className="loading" /> : "Submit"}
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
