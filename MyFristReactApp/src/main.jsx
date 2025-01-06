import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Qustart from "./qustrat";
import Employee from "./Employee";
import Counter from "./Counter";
import EmplyeeDetails from "./EmployeeDetails";
import EmployeeList from "./EmployeeList";
import AddEmp from "./AddEmp";
import Login from "./Login";
import practice from "./Practice";
import Practice from "./Practice";
import Home from "./HomeCom";
import Services from "./Services";
import Contect from "./Contect";
import EmployeeHome from "./EmployeeHome";
import Nav1 from "./Nav";
import Edit from "./Edit";
import Apps from "./Apps";

//let emp1=[{id:1, name:"prajwal", skill:"dot.net", goodat:["Technologies", "Mysore","basket", "cricket"]}];
//let goodat1=["Technologies", "Mysore","basket", "cricket"];
// var employess = [
//   {
//     id: 1,
//     name: "prajwal",
//     skill: "dot.net",
//     goodat: ["Technologies", "Mysore", "basket", "cricket"],
//   },
//   {
//     id: 2,
//     name: "bharath",
//     skill: "java",
//     goodat: ["Technologies", "Mysore", "basket", "cricket"],
//   },
//   {
//     id: 3,
//     name: "rahul",
//     skill: "react.js",
//     goodat: ["Technologies", "Mysore", "basket", "cricket"],
//   },
//   {
//     id: 4,
//     name: "suresh",
//     skill: "java",
//     goodat: ["Technologies", "Mysore", "basket", "cricket"],
//   },
//   {
//     id: 5,
//     name: "sachin",
//     skill: "dot.net",
//     goodat: ["Technologies", "Mysore", "basket", "cricket"],
//   },
//   {
//     id: 6,
//     name: "shashank",
//     skill: "angular",
//     goodat: ["Technologies", "Mysore", "basket", "cricket"],
//   },
//   {
//     id: 7,
//     name: "vishal",
//     skill: "node.js",
//     goodat: ["Technologies", "Mysore", "basket", "cricket"],
//   },
//   {
//     id: 8,
//     name: "vivek",
//     skill: "java",
//     goodat: ["Technologies", "Mysore", "basket", "cricket"],
//   },
//   {
//     id: 9,
//     name: "praveen",
//     skill: "dot.net",
//     goodat: ["Technologies", "Mysore", "basket", "cricket"],
//   },
//   {
//     id: 10,
//     name: "pradeep",
//     skill: "angular",
//     goodat: ["Technologies", "Mysore", "basket", "cricket"],
//   },
//   {
//     id: 11,
//     name: "mahesh",
//     skill: "react.js",
//     goodat: ["Technologies", "Mysore", "basket", "cricket"],
//   },
//   {
//     id: 12,
//     name: "santosh",
//     skill: "java",
//     goodat: ["Technologies", "Mysore", "basket", "cricket"],
//   },
// ];
let data1 = [
  { id: 1, product: "mobiles", quantity: 10 },
  { id: 2, product: "laptops", quantity: 5 },
  { id: 3, product: "televisions", quantity: 8 },
  { id: 4, product: "speakers", quantity: 3 },
  { id: 5, product: "headphones", quantity: 6 },
  { id: 6, product: "chargers", quantity: 4 },
  { id: 7, product: "accessories", quantity: 2 },
  { id: 8, product: "batteries", quantity: 7 },
];
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Qustart/> */}
    {/* <App /> */}
    <Apps/>
    {/* <Edit/> */}
    {/* <Nav/> */}
    {/* <EmployeeHome/> */}
    {/* <AddEmp/> */}
    {/* <Login/> */}
    {/* <Practice/> */}
    {/* <Counter/> */}
    {/* <EmplyeeDetails/>
     <EmployeeList/> */}
    {/* <Employee  emp1={employess} /> */}

    {/* {employess.map((emp) => {
      return <Employee emp1={emp} />;
    })} */}
     {/* <Practice data={data1} /> */}
     {/* <Practice/> */}
    
     {/* <Contect/> */}
     {/* <Home/> */}
     {/* <Services/> */}

    {/* <Employee name="prajwal P K" skill="dot.net" goodat={goodat} emp1={emp1}/>
    <Employee name="Bharath" skill="react.js" goodat={goodat} />
    <Employee name="rahul" skill="java" goodat={goodat}/> */}
  </React.StrictMode>
);
