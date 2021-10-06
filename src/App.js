import "./App.css";
import "./index.css";
import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthRoute from "./protectedRoutes/AuthRoute";

function App() {
  return (
    // if we want any context provider we can wrap all these components inside that
    <div>
      <Router>
        <Switch>
          <AuthRoute exact path="/" component={SignIn} />
          <AuthRoute exact path="/signUp" component={SignUp}/>
          <Route path="/home" component={Home}/>
         
          <Route path="*" component={()=>('cannot find page')}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
