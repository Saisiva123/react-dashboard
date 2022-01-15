import "./App.css";
import "./index.css";
import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AuthRoute from "./shared/protectedRoutes/AuthRoute";
import NoAuthRoute from "./shared/protectedRoutes/NoAuthRoute";
import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";
import { RoutePaths } from "./config/RouteConstants";
import Loader from "./shared/components/loader/Loader";
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));

function App() {
  return (
    //Protected route gurards better to be individula insted of wrapping all commponents inside it because we need to specify for which route this protected route should work
    <div className="app">
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Redirect exact path="/" to={RoutePaths.signIn.path} />

            <NoAuthRoute path={RoutePaths.signIn.path} component={SignIn} />
            <NoAuthRoute path={RoutePaths.signUp.path} component={SignUp} />

            <AuthRoute path={RoutePaths.dashboard.path} component={Dashboard} />

            <Route path="*" component={() => "cannot find page"} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
