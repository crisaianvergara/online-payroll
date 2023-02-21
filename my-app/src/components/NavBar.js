import { List } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <span className="d-none d-lg-block">Payroll</span>
        </Link>
        <i className="toggle-sidebar-btn">
          <List />
        </i>
      </div>
    </header>
  );
};

export default NavBar;
