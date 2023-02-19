import { Link } from "react-router-dom";

const EmployeeList = ({ employees, title }) => {
  const handleDelete = (id) => {
    fetch("http://127.0.0.1:5000/employee/" + id, {
      method: "DELETE",
    }).then(() => {
      window.location.reload(false);
    });
  };
  return (
    <div className="employee-list">
      <h2 className="mb-3">{title}</h2>
      <Link to="/add" className="btn btn-success btn-sm rounded-0 mb-3">
        Add
      </Link>
      <div className="employee-preview">
        <table className="table table table-striped">
          <thead>
            <tr>
              <th scope="col">Employee Id</th>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">Schedule</th>
              <th scope="col">Date Hired</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{`${employee.first_name} ${employee.middle_name} ${employee.last_name}`}</td>
                <td>Senior Developer</td>
                <td>08:00 AM - 05:00 PM</td>
                <td>October 10, 2022</td>
                <td>
                  <Link
                    className="btn btn-secondary btn-sm rounded-0 me-1"
                    to={`/employee/${employee.id}`}
                  >
                    View
                  </Link>
                  <button className="btn btn-primary btn-sm rounded-0 me-1">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="btn btn-danger btn-sm rounded-0 me-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
