import "./App.css";
import "./index.css";
import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";
import Overview from "./components/overview/Overview";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import AuthRoute from "./protectedRoutes/AuthRoute";
import {RoutePaths} from "./config/RouteConstants";
import Analysis from "./components/analysis/Analysis";
import  Dashboard  from "./components/dashboard/Dashboard";
function App() {

  return (
   
    // if we want any context provider we can wrap all these components inside that
    <div className='app'>
      <Router>
        <Switch>
          <AuthRoute exact path="/" component={SignIn} />
          <AuthRoute exact path="/signUp" component={SignUp}/>
          {/*  TODO:ADD PROTECTED ROUTE */}
          {/* <Route path={RoutePaths.overview.path} component={Overview}/>
          <Route path={RoutePaths.analysis.path} component={Analysis}/> */}
          <Route path="/dashboard"  component = {Dashboard}/>
          <Route path="*" component={()=>('cannot find page')}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
