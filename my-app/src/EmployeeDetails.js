import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const EmployeeDetails = () => {
  const { id } = useParams();
  const {
    data: employee,
    error,
    isPending,
  } = useFetch("http://127.0.0.1:5000/employee/" + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch("http://127.0.0.1:5000/employee/" + employee.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/employee");
    });
  };
  return (
    <div className="employee-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {employee && (
        <article>
          <p>{employee.id}</p>
          <p>{employee.first_name}</p>
          <p>{employee.email}</p>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default EmployeeDetails;
