// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import "./App.css";
// import EmplyeeDetails from "./EmployeeDetails";
// import EmployeeList from "./EmployeeList";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./HomeCom";
// import EmployeeDetails from "./EmployeeDetails";

// function App() {
//   //const [employee, setEmployee] = useState([]);
//   // return <><EmplyeeDetails employee={employee} setEmployee={setEmployee}/> <EmployeeList/> </>
//   //fragments <> </>
//   return (
//     <BrowserRouter>
//       <h2>Well Come to Mandya</h2>
//       <hr/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path="/Contact" element={<Contect/>} />
//         <Route path="/Services" element={<Services/>} />
//         <Route path="/Employee" element={<EmployeeDetails  />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import EmployeeDetails from "./EmployeeDetails";
import EmployeeList from "./EmployeeList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./HomeCom";
import Contect from "./Contect";
import Services from "./Services";
import Nav1 from "./Nav";
import AddEmp from "./AddEmp";
import Login from "./Login";
import Edit from "./Edit";

function App() {
  return (
    <BrowserRouter>
      <h2>Well Come to PK Enterprices</h2>
      <div><Nav1/></div>
      <hr/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Contact" element={<Contect/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Employee" element={<EmployeeList />}>
          
          <Route path="List" element={<EmployeeDetails />} />
          <Route path="Register" element={<AddEmp />} />
          <Route path="Edit/:id" element={<Edit />} />
        </Route>
        <Route path="/Login" element={<Login/>} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
