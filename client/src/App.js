import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const user = false;
  return (
  <Router>
    <TopBar/>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/register">
       {user ? <Home/> : <Register />}
      </Route>
      <Route path="/login">
      {user ? <Home/> : <Login />}
        <Login />
      </Route>
      <Route path="/write">
      {user ? <Write/> : <Register />}
      </Route>
      <Route path="/settings">
      {user ? <Settings/> : <Register />}
      </Route>
      <Route path="/post/:postId">
        <Single />
      </Route>  
    </Switch>
  </Router>
  );
}

export default App;
