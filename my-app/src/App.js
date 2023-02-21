import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Employee from "./components/Employee";
import EmployeeDetails from "./components/EmployeeDetails";
import AddEmployee from "./components/AddEmployee";
import NotFound from "./utils/NotFound";
import NavBar from "./components/NavBar";
import Aside from "./components/Aside";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Aside />
        <div className="content main" id="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/employee">
              <Employee />
            </Route>
            <Route exact path="/employee/:id">
              <EmployeeDetails />
            </Route>
            <Route exact path="/add">
              <AddEmployee />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
