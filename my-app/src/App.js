import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "./SideBar";
import Home from "./Home";
import Employee from "./Employee";

function App() {
  return (
    <Router>
      <div className="App row mx-0 justify-content-between">
        <SideBar />
        <div className="content col-md-9 px-0  pt-5">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/employee">
              <Employee />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
