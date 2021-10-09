import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import {RoutePaths} from '../config/RouteConstants';

function AuthRoute({ component: Component, props }) {
  const userStore = useSelector((state) => state.userReducer);
  return (
    <Route
      {...props}
      render={() =>
        !userStore.userDetails.name ? <Component {...props} /> : <Redirect to={{pathname:RoutePaths.overview.path,state:{breadcrumbItem:'Overview'}}} />
      }
    ></Route>
  );
}

export default AuthRoute;
