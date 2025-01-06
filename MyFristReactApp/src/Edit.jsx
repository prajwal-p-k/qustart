import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Edit() {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [departments, setDepartments] = useState([]);
  const [empId, setEmpId] = useState(id);
  const [empInfo, setEmpInfo] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    dob: "",
    doj: "",
    salary: 0,
    skillset: "",
    address: "",
    departmentId: 0,
    departmentName: "xyz",
  });

  useEffect(() => {
    async function listDepartments() {
      const response = await fetch(
        "https://localhost:7006/api/Employee/Departments"
      );
      const data = await response.json();
      setDepartments(data);
    }

    async function fetchEmployeeData() {
      if (empId) {
        const response = await fetch(
          `https://localhost:7006/api/Employee/GetEmployee/${empId}`
        );
        if (response.ok) {
          const data = await response.json();
          setEmpInfo(data);
        }
      }
    }

    listDepartments();
    fetchEmployeeData();
  }, [empId]);

  async function updateEmployee(e) {
    e.preventDefault();
    console.log(JSON.stringify(empInfo));

    const response = await fetch("https://localhost:7006/api/Employee/Edit", {
      method: "PUT", // Use PUT to update the employee
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(empInfo),
    });

    if (response.status === 200) {
      setMessage("Employee Updated Successfully");
    } else {
      setMessage("Failed to update employee");
    }
  }

  return (
    <div style={{ fontFamily: "calibri" }}>
      <div style={{ padding: "3px", margin: "5px", textAlign: "center" }}>
        <h3>Update Employee</h3>
      </div>
      <div>
        <form onSubmit={(e) => updateEmployee(e)}>
          <div className="form-group">
            <div>Name</div>
            <div>
              <input
                type="text"
                className="form-control"
                value={empInfo.name}
                onChange={(e) =>
                  setEmpInfo({ ...empInfo, name: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <div>Email</div>
            <div>
              <input
                type="email"
                className="form-control"
                value={empInfo.email}
                onChange={(e) =>
                  setEmpInfo({ ...empInfo, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <div>Mobile</div>
            <div>
              <input
                type="text"
                className="form-control"
                value={empInfo.mobile}
                onChange={(e) =>
                  setEmpInfo({ ...empInfo, mobile: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <div>Password</div>
            <div>
              <input
                type="text"
                className="form-control"
                value={empInfo.password}
                onChange={(e) =>
                  setEmpInfo({ ...empInfo, password: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <div>Birth Date</div>
            <div>
              <input
                type="text"
                className="form-control"
                value={empInfo.dob}
                onChange={(e) =>
                  setEmpInfo({ ...empInfo, dob: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <div>Join Date</div>
            <div>
              <input
                type="text"
                className="form-control"
                value={empInfo.doj}
                onChange={(e) =>
                  setEmpInfo({ ...empInfo, doj: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <div>Salary</div>
            <div>
              <input
                type="text"
                className="form-control"
                value={empInfo.salary}
                onChange={(e) =>
                  setEmpInfo({ ...empInfo, salary: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <div>SkillSet</div>
            <div>
              <input
                type="text"
                className="form-control"
                value={empInfo.skillset}
                onChange={(e) =>
                  setEmpInfo({ ...empInfo, skillset: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <div>Address</div>
            <div>
              <input
                type="text"
                className="form-control"
                value={empInfo.address}
                onChange={(e) =>
                  setEmpInfo({ ...empInfo, address: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <div>Department</div>
            <select
              className="form-control"
              value={empInfo.departmentId}
              onChange={(e) =>
                setEmpInfo({ ...empInfo, departmentId: e.target.value })
              }
            >
              {departments.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.departmentName}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Update Employee
            </button>
          </div>
        </form>
        {message && <div className="alert alert-info">{message}</div>}
      </div>
    </div>
  );
}

export default Edit;