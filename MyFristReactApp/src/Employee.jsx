import Qustart from "./qustrat";

function Employee(props) {

  //const {name,skill,goodat} = props;//destructuring
  const { emp1, goodat } = props; //destructuring

  //return <> <h1>Well come do employee {props.name}  and skills are {props.skill}  goodat are {goodat.map((item)=><li>{item}</li>)} </h1> <hr/><h1>Well come do employee {name} and skills are {skill} </h1> </>
  //return <> <h1>Well come do employee {emp1[0].name}  and skills are {emp1[0].skill}  goodat are {emp1[0].goodat.map((item)=><li>{item}</li>)} </h1> <hr/> </>
  return (
    <>
      <table border="1" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Skill</th>
            <th>Good at</th>
          </tr>
        </thead>
        <tbody>
        <tr key={emp1.id}>
          <td>{emp1.id}</td>
          <td>{emp1.name}</td>
          <td>{emp1.skill}</td>
          <td>
            <ul>
              {emp1.goodat.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </td>
        </tr>
      </tbody>
      </table>
    </>
  );

 
}


export default Employee;
