import { useState } from "react";
import "./Counter.css";
import "bootstrap/dist/css/bootstrap.min.css"; //importing bootstrap css

function Counter() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState({
    firstName: "prajwal",
    lastName: "PK",
    mobile: 9108022525,
    email: "prajwal@gmail.com",
  });
  const [items, setItem] = useState([]);
  const [emp, setEmp] = useState([{ fname: "", lname: "" }]);
  //const[setp,setvaletostep]=useState(0); //use default values
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function clear() {
    setCount(1);
  }
  function getNameFirst(event) {
    setName({ firstName: event.target.value, lastName: name.lastName });
    //setEmp({fname:name.firstName, lname:event.target.value}) //or
  }
  function getNamelast(event) {
    setName({ firstName: name.firstName, lastName: event.target.value });
    //or
    //setName({...name, lastName: event.target.value}); //...name is spread operator return previous value
    //setEmp({fname:event.target.value, lname:name.lastName})
  }
  function getmobil(event) {
    setName({
      firstName: name.firstName,
      lastName: name.lastName,
      mobile: event.target.value,
    });
  }
  function getemail(event) {
    setName({ ...name, email: event.target.value });
  }
  function savedata(e) {
    // items.push(name.firstName, name.lastName);
    setItem([
      ...items,
      name.firstName + " " + name.lastName + "" + name.email + "" + name.mobile,
    ]); //...items is spread operator return previous value
    console.log(name.firstName + " " + name.lastName);
    emp.push({
      fname: name.firstName,
      lname: name.lastName,
      mobile: name.mobile,
      email: name.email,
    });
    console.log(emp);
    e.preventDefault();
  }

  return (
    <>
      <div>WellCome :{name.firstName + " " + name.lastName}</div>
      <form onSubmit={(e) => savedata(e)}>
        <div>
          firstName :
          <input
            type="text"
            value={name.firstName}
            onChange={getNameFirst}
            style={{ color: "red" }}
            className="form-control"
          ></input>
        </div>
        <div>
          last :
          <input
            type="text"
            value={name.lastName}
            onChange={getNamelast}
            className="form-control"
          ></input>
        </div>
        <div>
          Moblie :
          <input
            type="number"
            value={name.mobile}
            onChange={getmobil}
            style={{ color: "red" }}
            className="form-control"
          ></input>
        </div>
        <div>
          email :
          <input
            type="text"
            value={name.email}
            onChange={getemail}
            style={{ color: "red" }}
            className="form-control"
          ></input>
        </div>
        <div>
          <button type="submit">save</button>
        </div>
      </form>
      <div>
        <table >
          <thead >
            <tr>
              <th style={{ border: "1px solid black" }}>First Name</th>
              <th style={{ border: "1px solid black" }}></th>
              <th style={{ border: "1px solid black" }}>Last Name</th>
              <th style={{ border: "1px solid black" }}></th>
              <th style={{ border: "1px solid black" }}>mobile</th>
              <th style={{ border: "1px solid black" }}></th>
              <th style={{ border: "1px solid black" }}>email</th>
            </tr>
          </thead>
          <tbody >
            {emp.map((emp) => (
              <tr >
                <td style={{ border: "1px solid black" }}>{emp.fname}</td>
                <td style={{ border: "1px solid black" }}></td>
                <td style={{ border: "1px solid black" }}>{emp.lname}</td>
                <td style={{ border: "1px solid black" }}></td>
                <td style={{ border: "1px solid black" }}>{emp.mobile}</td>
                <td style={{ border: "1px solid black" }}></td>
                <td style={{ border: "1px solid black" }}>{emp.email}</td>
              </tr>
            ))}
          </tbody>
          {/* {items.map((item) =>(
                <li style={{ border: "1px solid black" }}>{item}</li>
            ))} */}
        </table>
      </div>

      {/* <div>the counter value is {count}</div> 
       <button type="button" onClick={increment}>
        increment
      </button>
      <button type="button" onClick={decrement}>
        Decreement
      </button>
      <button type="button" onClick={clear}>
        clear
      </button> */}
    </>
  );
}

export default Counter;
