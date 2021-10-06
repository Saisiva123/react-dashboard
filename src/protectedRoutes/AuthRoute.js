import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function AuthRoute({ component: Component, props }) {
  const userStore = useSelector((state) => state.userReducer);
  return (
    <Route
      {...props}
      render={() =>
        !userStore.userDetails.name ? <Component {...props} /> : <Redirect to="/overview" />
      }
    ></Route>
  );
}

export default AuthRoute;
