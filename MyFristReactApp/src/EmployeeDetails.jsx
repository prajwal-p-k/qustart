import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from "./EmployeeList";
import { useNavigate } from "react-router-dom";

// function EmplyeeDetails() {
//     const [name, setName] = useState("");
//    const [employee, setEmployee] = useState([]);
//   useEffect(() => 
//    async function GetEmployee()
//     {
//      const result=await fetch("https://localhost:7006/api/Employee/GetEmployee");
//      const data=await result.json();
//      setEmployee(data);
//      console.log(data);
   
//   }, []);
//   return (
//     <>
//       <div>
//         <h3 style={ {color: "red" }}>List of Employee</h3>
//         <hr />
//         <div>
//             <table className="table table-bordered">
//                 <thead>
//                     <tr>
//                         <th>Employee Id</th>
//                         <th>Employee Name</th>
//                         <th>Employee Email</th>
//                         <th>Employee Mobil</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {employee.map((emp) => (
//                         <tr >
//                             <td>{emp.id}</td>
//                             <td>{emp.name}</td>
//                             <td>{emp.email}</td>
//                             <td>{emp.mobile}</td>
//                             <td><button type="button">Edit</button></td>
        
//                         </tr>
//                     ))}
//                     <AddEmp empDataemployee={employee} 
//                     />
//                 </tbody>
               
                    
//             </table>
//         </div>
//         <input type="text" onChange={(e)=>setName(e.target.value)} />
//       </div>
//     </>
//   );
// }

// export default EmplyeeDetails;


function EmployeeDetails()
{
    const navigate = useNavigate();
    const[name, setname] = useState("");
    const[empData, setEmpdata] = useState([]);
    useEffect(() =>
        async function getEmployees()
    {
        // console.log("consume API");
        const result = await fetch("https://localhost:7006/api/Employee/GetEmployee");
        const data = await result.json();
 
        setEmpdata(data);
 
        console.log(data);
    },[]);

    function handle(e){
        // navigate("/Employee/Edit/"+e.target.id);
        navigate("/Edit/"+e.target.id) ;
    }

 
    return(
    <div style={{fontFamily:'calibri'}}>
<h3 style={{color:'blue'}}>List of Employees</h3>
<hr/>
<div style={{padding:'10px', margin:'10px', border:'solid 1px wheat'}}>
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Department</th>
                <th></th>
       
            </tr>
        </thead>
        <tbody>
            {empData.map((e) => <tr>
                <td>{e.id} </td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.mobile}</td>
                <td>{e.departmentName}</td>
                <td><button type="submit" id={e.id} onClick={(e=>handle(e))}>Edit</button></td>
            </tr>)}
        </tbody>
 
    </table>
</div>
    </div>)
}
  export default EmployeeDetails;
  

