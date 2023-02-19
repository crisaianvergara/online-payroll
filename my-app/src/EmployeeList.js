const EmployeeList = ({ employees, title }) => {
  return (
    <div className="employee-list">
      <h2>{title}</h2>
      <div className="employee-preview">
        <table className="table table table-striped">
          <thead>
            <tr>
              <th scope="col">Employee Id</th>
              <th scope="col">First</th>
              <th scope="col">Middle</th>
              <th scope="col">Last</th>
              <th scope="col">Email Address</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.first_name}</td>
                <td>{employee.middle_name}</td>
                <td>{employee.last_name}</td>
                <td>{employee.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
