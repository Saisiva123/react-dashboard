import "./App.css";
import "./index.css";
import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthRoute from "./protectedRoutes/AuthRoute";
import {RoutePaths} from "./config/RouteConstants";
function App() {
  return (
    // if we want any context provider we can wrap all these components inside that
    <div>
      <Router>
        <Switch>
          <AuthRoute exact path="/" component={SignIn} />
          <AuthRoute exact path="/signUp" component={SignUp}/>
          {/*  TODO:ADD PROTECTED ROUTE */}
          <Route path={RoutePaths.overview.path} component={Home}/>
          <Route path="*" component={()=>('cannot find page')}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
