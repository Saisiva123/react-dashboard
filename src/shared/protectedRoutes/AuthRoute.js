import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RoutePaths } from "../../config/RouteConstants";

function AuthRoute({ component : Component, props }) {
  const userStore = useSelector((state) => state.userReducer);
  console.log("Auth route called",userStore.userLoggedIn)
  return (
    <Route
      {...props}
      render={() =>
        localStorage.getItem("userToken") ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: RoutePaths.signIn.path }} />
        )
      }
    ></Route>
  );
}

export default AuthRoute;
