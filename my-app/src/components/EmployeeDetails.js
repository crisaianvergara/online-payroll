import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";

const EmployeeDetails = () => {
  const { id } = useParams();
  const {
    data: employee,
    error,
    isPending,
  } = useFetch("http://127.0.0.1:5000/employee/" + id);

  return (
    <div className="employee-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {employee && (
        <article>
          <p>{employee.id}</p>
          <p>{employee.first_name}</p>
          <p>{employee.email}</p>
        </article>
      )}
    </div>
  );
};

export default EmployeeDetails;
