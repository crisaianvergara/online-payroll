import {
  Grid,
  ChevronDown,
  Circle,
  MenuButtonWide,
  Briefcase,
  Clock,
  CreditCard,
  CreditCard2Front,
  PersonSquare,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const Aside = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/">
            <i>
              <Grid />
            </i>

            <span>Dashboard</span>
          </Link>
        </li>
        <hr />
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/attendance">
            <i>
              <MenuButtonWide />
            </i>
            <span>Attendance</span>
          </Link>
        </li>

        <li className="nav-item">
          <button
            className="nav-link collapsed border-0 w-100"
            data-bs-target="#employees-nav"
            data-bs-toggle="collapse"
          >
            <i>
              <PersonSquare />
            </i>
            <span>Employees</span>
            <i className="ms-auto">
              <ChevronDown />
            </i>
          </button>
          <ul
            id="employees-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link className="nav-link collapsed" to="/employee">
                <i>
                  <Circle />
                </i>
                <span>Employee List</span>
              </Link>
            </li>
            <li>
              <Link className="nav-link collapsed" to="/overtime">
                <i>
                  <Circle />
                </i>
                <span>Overtime</span>
              </Link>
            </li>
            <li>
              <Link className="nav-link collapsed" to="/cash-advance">
                <i>
                  <Circle />
                </i>
                <span>Cash Advance</span>
              </Link>
            </li>
            <li>
              <Link className="nav-link collapsed" to="/schedule">
                <i>
                  <Circle />
                </i>
                <span>Schedules</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link className="nav-link collapsed" to="/deduction">
            <i>
              <CreditCard2Front />
            </i>
            <span>Deductions</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/position">
            <i>
              <Briefcase />
            </i>
            <span>Positions</span>
          </Link>
        </li>
        <hr />
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/payroll">
            <i>
              <CreditCard />
            </i>
            <span>Payroll</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/schedule">
            <i>
              <Clock />
            </i>
            <span>Schedule</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
