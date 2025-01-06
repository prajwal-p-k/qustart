import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";


function AddEmp(employees) {
  let lstdepartments = [];
  const [message, setMessage] = useState("");
  const [departments, setdepartments] = useState([]);
  const [empInfo, setEmpInfo] = useState({
    Id:"12",
    Name: "",
    Email: "",
    Mobile: "",
    Password: "",
    DOB: "",
    DOJ: "",
    Salary: 0,
    SkillSet: "",
    Address: "",
    DepartmentId: 0,
    departmentName: "HR",
  });

  useEffect(
    () =>
      async function listDepartments() {
        const response = await fetch(
          "https://localhost:7006/api/Employee/Departments"
        );
        const data = await response.json();
        setdepartments(data);
        console.log(data);
        lstdepartments = data;
        console.log("loading department");
        console.log(lstdepartments);
        await setdepartments(lstdepartments);
      },
    []
  );

  async function registerEmp(e) {
    e.preventDefault();
    console.log(JSON.stringify(empInfo));
    const response = await fetch("https://localhost:7006/api/Employee/New", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(empInfo),
    });
    console.log(response);
    if (response.ok) {
        setMessage("Employee registered successfully!");
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Error registering employee");
      }

  }
  // useEffect(() => function saveEmp(){

  // })

  return (
    <div style={{ fontFamily: "calibri" }}>
      <div style={{ padding: "3px", margin: "5px", textAlign: "center" }}>
        <h3>Add new Employee</h3>
      </div>
      <div>
        <form onSubmit={(e) => registerEmp(e)}>
          <div className="form-group">
            <div>Name</div>
            <div>
              <input
                type="text"
                className="form-control"
                onClick={empInfo.Name}
                onChange={(e) => (empInfo.Name = e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <div>email</div>
            <div>
              <input
                type="text"
                className="form-control"
                onClick={empInfo.Email}
                onChange={(e) => (empInfo.Email = e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <div>mobile</div>
            <div>
              <input
                type="text"
                className="form-control"
                onClick={empInfo.Mobile}
                onChange={(e) => (empInfo.Mobile = e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <div>password</div>
            <div>
              <input
                type="text"
                className="form-control"
                onClick={empInfo.Password}
                onChange={(e) => (empInfo.Password = e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <div>date of birth</div>
            <div>
              <input
                type="text"
                className="form-control"
                onClick={empInfo.DOB}
                onChange={(e) => (empInfo.DOB = e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <div>date of join</div>
            <div>
              <input
                type="text"
                className="form-control"
                onClick={empInfo.DOJ}
                onChange={(e) => (empInfo.DOJ = e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <div>salary</div>
            <div>
              <input
                type="text"
                className="form-control"
                onClick={empInfo.Salary}
                onChange={(e) => (empInfo.Salary = e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <div>SkillSet</div>
            <div>
              <input
                type="text"
                className="form-control"
                onClick={empInfo.SkillSet}
                onChange={(e) => (empInfo.SkillSet = e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <div>Address</div>
            <div>
              <input
                type="text"
                className="form-control"
                onClick={empInfo.Address}
                onChange={(e) => (empInfo.Address = e.target.value)}
              />
            </div>
          </div>

          {/* <div className="form-group">
            <div>Department</div> */}
            {/* <div><input type="text" className="form-control" onChange={(e=>(empInfo.departmentid=e.target.value))}/></div> */}

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
              Register Employee
            </button>
          </div>
        </form>
        <div style={{ color: "red", marginTop: "10px" }}>{message}</div>
      </div>
    </div>
  );
}



export default AddEmp;
//   export default AddEmp;
