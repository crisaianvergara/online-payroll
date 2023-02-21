import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const AddEmployee = () => {
  const [first_name, setFirst] = useState("");
  const [middle_name, setMiddle] = useState("");
  const [last_name, setLast] = useState("");
  const [address, setAddress] = useState("");
  const [birth_date, setBirthDate] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [date_hired, setDateHired] = useState("");

  const [positions, setPositions] = useState([]);
  const [position_id, setSelectedPosition] = useState("");

  const [schedules, setSchedules] = useState([]);
  const [schedule_id, setSelectedSchedule] = useState("");

  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetch("http://127.0.0.1:5000/position")
      .then((response) => response.json())
      .then((data) => setPositions(data))
      .catch((error) => console.log(error));

    fetch("http://127.0.0.1:5000/schedule")
      .then((response) => response.json())
      .then((data) => setSchedules(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      first_name,
      middle_name,
      last_name,
      email,
      address,
      birth_date,
      contact_number,
      gender,
      date_hired,
      position_id,
      schedule_id,
    };
    setIsPending(true);
    fetch("http://127.0.0.1:5000/employee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEmployee),
    })
      .then(() => {
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
        <div className="row">
          <div className="col-md-6">
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
              />
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
              />
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
              />
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
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <div className="form-floating">
                <textarea
                  type="text"
                  className="form-control"
                  id="address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={{ height: "125px" }}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="birth-date" className="form-label">
                Birth Date
              </label>
              <input
                type="date"
                className="form-control"
                id="birth-date"
                required
                value={birth_date}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contact-number" className="form-label">
                Contact Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="contact-number"
                required
                value={contact_number}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                className="form-select"
                id="gender"
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="date-hired" className="form-label">
                Date Hired
              </label>
              <input
                type="date"
                className="form-control"
                id="date-hired"
                required
                value={date_hired}
                onChange={(e) => setDateHired(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="position" className="form-label">
                Position
              </label>
              <select
                className="form-select"
                id="position"
                required
                value={position_id}
                onChange={(e) => setSelectedPosition(e.target.value)}
              >
                <option value="">Select Position</option>
                {positions.map((position) => (
                  <option key={position.id} value={position.id}>
                    {position.position}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="schedule" className="form-label">
                Schedule
              </label>
              <select
                className="form-select"
                id="schedule"
                required
                value={schedule_id}
                onChange={(e) => setSelectedSchedule(e.target.value)}
              >
                <option value="">Select Schedule</option>
                {schedules.map((schedule) => (
                  <option key={schedule.id} value={schedule.id}>
                    {`${schedule.time_in} - ${schedule.time_out}`}
                  </option>
                ))}
              </select>
            </div>
          </div>
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
