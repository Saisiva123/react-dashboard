import React from "react";
import "./Overview.css";
import ProductAvailability from "../product-availability/ProductAvailability";
import PriceChange from "../price-change/PriceChange";
import { Switch, Route } from "react-router-dom";
import { RoutePaths } from "../../config/RouteConstants";

function Overview() {
  return (
    <div className = 'overview'>
      <Switch>
        <Route
          exact
          path={ RoutePaths.overview.children.productAvailability.path}
          component={ProductAvailability}
        />
        <Route exact path={ RoutePaths.overview.children.priceChange.path} component={PriceChange} />
      </Switch>
    </div>
  );
}

export default Overview;
