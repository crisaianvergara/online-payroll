import EmployeeList from "./EmployeeList";
import useFetch from "../utils/useFetch";
const Employee = () => {
  const {
    data: employees,
    isPending,
    error,
  } = useFetch("http://127.0.0.1:5000/employee");

  return (
    <div className="employee">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {employees && (
        <EmployeeList employees={employees} title="Employees List" />
      )}
    </div>
  );
};

export default Employee;
