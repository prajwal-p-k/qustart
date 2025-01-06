import React, { useState } from "react";

function Practice({ data }) {
  // Create a local state to manage data
  const [localData, setLocalData] = useState([...data]);

  const increment = (id) => {
    setLocalData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
// const increment=(id) =>{
//     setLocalData(...localData,quantity =>id.quantity + 1
//     );
// }

  const decrement = (id) => {
    setLocalData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      )
    );
  };

  return (
    <>
      <table
        border="1"
        style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {localData.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.product}</td>
              <td>{emp.quantity}</td>
              <td>
                <button type="button" onClick={ ()=>increment(emp.id)}>+</button>
                <button type="button" onClick={() => decrement(emp.id)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Practice;
