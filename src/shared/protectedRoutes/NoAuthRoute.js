import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RoutePaths } from "../../config/RouteConstants";

function NoAuthRoute({ component: Component, props }) {
  const userStore = useSelector((state) => state.userReducer);
  console.log("No auth route called",userStore.userLoggedIn)
  return (
    <Route
      {...props}
      render={() =>
        !localStorage.getItem("user") ? (
            <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: RoutePaths.dashboard.path
            }}
          />
        )
      }
    ></Route>
  );
}

export default NoAuthRoute;
