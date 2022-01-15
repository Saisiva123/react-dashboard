import React, { lazy, useState, useEffect } from "react";
import Navbar from "../../shared/components/navbar/Navbar";
import Filters from "../../shared/components/filters/Filters";
import Kpis from "../../shared/components/kpis/Kpis";
import Breadcrumb from "../../shared/components/breadcrumb/Breadcrumb";
import { Switch, Route, useHistory } from "react-router-dom";
import { RoutePaths } from "../../config/RouteConstants";
import Overview from "../overview/Overview";
const Analysis = lazy(() => import("../analysis/Analysis"));

function Dashboard() {
  const history = useHistory();
  const [showKpis, toggleKpiSection] = useState(true);

  useEffect(() => {
    history.push(RoutePaths.overview.path);
  }, []);

  function toggleKpi(path) {
    path === RoutePaths.analysis.path
      ? toggleKpiSection(false)
      : toggleKpiSection(true);
  }

  return (
    <div>
      <Navbar getRoute={toggleKpi} />
      <Filters />
      {showKpis && <Kpis />}
      <Breadcrumb />
      <Switch>
        <Route path={RoutePaths.overview.path} component={Overview} />
        <Route path={RoutePaths.analysis.path} component={Analysis} />
      </Switch>
    </div>
  );
}

export default Dashboard;
