import React from "react";
import Navbar from "../navbar/Navbar";
import Filters from "../filters/Filters";
import Kpis from "../kpis/Kpis";
import ProductAvailability from "../product-availability/ProductAvailability";
import PriceChange from "../price-change/PriceChange";
import { Switch, Route } from "react-router-dom";
import { RoutePaths } from "../../config/RouteConstants";

function Home() {
  return (
    <div>
      <Navbar />
      <Filters />
      <Kpis />
         
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

export default Home;
