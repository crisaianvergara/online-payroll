import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddEmployee = () => {
  const [first_name, setFirst] = useState("");
  const [middle_name, setMiddle] = useState("");
  const [last_name, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      first_name,
      middle_name,
      last_name,
      email,
    };
    setIsPending(true);
    fetch("http://127.0.0.1:5000/employee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEmployee),
    })
      .then(() => {
        console.log("Employee Added");
        setIsPending(false);
        history.push("/employee");
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
      });
  };

  return (
    <div className="create-employee">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="first-name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="first-name"
            required
            value={first_name}
            onChange={(e) => setFirst(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="middle-name" className="form-label">
            Middle Name
          </label>
          <input
            type="text"
            className="form-control"
            id="middle-name"
            required
            value={middle_name}
            onChange={(e) => setMiddle(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="last-name" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="last-name"
            required
            value={last_name}
            onChange={(e) => setLast(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        {!isPending && (
          <button type="submit" className="btn btn-primary">
            Add Employee
          </button>
        )}
        {isPending && (
          <button type="submit" className="btn btn-primary" disabled>
            Adding employee...
          </button>
        )}
      </form>
    </div>
  );
};

export default AddEmployee;
