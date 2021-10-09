import React, { useState, useEffect } from "react";
import Navbar from "../../shared/components/navbar/Navbar";
import Filters from "../../shared/components/filters/Filters";
import Kpis from "../../shared/components/kpis/Kpis";
import Breadcrumb from "../../shared/components/breadcrumb/Breadcrumb";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { RoutePaths } from "../../config/RouteConstants";
import Overview from "../overview/Overview";
import Analysis from "../analysis/Analysis";

function Dashboard() {
  const [showKpis, toggleKpiSection] = useState(true);

  function toggleKpi(path)
  {
    path === RoutePaths.analysis.path ? toggleKpiSection(false) : toggleKpiSection(true)
  }

  return (
    <div>
      <Router>
        <Navbar getRoute = {toggleKpi}/>
        <Filters />
        {showKpis && <Kpis />}
        <Breadcrumb />
        <Switch>
          <Route path={RoutePaths.overview.path} component={Overview} />
          <Route path={RoutePaths.analysis.path} component={Analysis} />
        </Switch>
      </Router>
    </div>
  );
}

export default Dashboard;
