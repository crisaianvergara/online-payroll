import {
  Speedometer2,
  Calendar,
  People,
  CardList,
  Briefcase,
  CardChecklist,
  Clock,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side-bar d-flex flex-column flex-shrink-0 p-3 text-bg-dark col-lg-2">
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">Online Payroll</span>
      </Link>

      <hr></hr>
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <Link to="/dashboard" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <Speedometer2 />
            </svg>
            Dashboard
          </Link>
        </li>
        <hr></hr>
        <li>
          <Link to="/attendance" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <Calendar />
            </svg>
            Attendance
          </Link>
        </li>
        <li>
          <Link to="/employee" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <People />
            </svg>
            Employees
          </Link>
        </li>
        <li>
          <Link to="/deduction" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <CardList />
            </svg>
            Deductions
          </Link>
        </li>
        <li>
          <Link to="/position" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <Briefcase />
            </svg>
            Positions
          </Link>
        </li>
        <hr></hr>
        <li>
          <Link to="/payroll" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <CardChecklist />
            </svg>
            Payroll
          </Link>
        </li>
        <li>
          <Link to="/schedule" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <Clock />
            </svg>
            Schedule
          </Link>
        </li>
      </ul>
      <hr></hr>
      <div className="dropdown">
        <Link
          to="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          ></img>
          <strong>idk29</strong>
        </Link>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <Link className="dropdown-item" to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider"></hr>
          </li>
          <li>
            <Link className="dropdown-item" to="/logout">
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
