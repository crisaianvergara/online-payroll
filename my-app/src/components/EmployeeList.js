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
      <div className="employee-preview">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <Link to="/add" className="btn btn-success btn-sm rounded-0 mb-3">
              Add Employee
            </Link>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th scope="col">Employee Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Position</th>
                  <th scope="col">Schedule</th>
                  <th scope="col">Date Hired</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={employee.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{employee.id}</td>
                    <td>{`${employee.first_name} ${employee.last_name}`}</td>
                    <td>{employee.position.position}</td>
                    <td>
                      {`${employee.schedule.time_in} - ${employee.schedule.time_out}`}
                    </td>
                    <td>{employee.date_hired}</td>
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
      </div>
    </div>
  );
};

export default EmployeeList;
