import React, { useEffect } from "react";
import "./Overview.css";
import ProductAvailability from "../product-availability/ProductAvailability";
import PriceChange from "../price-change/PriceChange";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { RoutePaths } from "../../config/RouteConstants";

function Overview() {
  const history = useHistory();
  // const location = useLocation();

  useEffect(() => {
    console.log("overview loaded");
    setTimeout(() => {
      history.push(RoutePaths.productAvailability.path);
    }, 100);
  }, []);

  return (
    <div className="overview">
      <Switch>
        <Route
          exact
          path={RoutePaths.productAvailability.path}
          component={ProductAvailability}
        />
        <Route
          exact
          path={RoutePaths.priceChange.path}
          component={PriceChange}
        />
      </Switch>
    </div>
  );
}

export default Overview;
