import { Link, Outlet } from "react-router-dom";

function EmployeeList() {
  return (
    <>
      <div>Employee Details List</div>
       <div><Link to="Register">Add Employee</Link></div>
       <div><Link to="List">View Employee</Link></div>
       <Outlet/>
     
    </>
  );
}

export default EmployeeList;
