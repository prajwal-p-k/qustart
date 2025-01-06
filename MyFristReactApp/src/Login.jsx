import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate } from "react-router-dom";
 
 
function Login()
{
    const navigate = useNavigate();
    const[LoginMessage, setLoginMessage] = useState("");
    const[user, setUser] = useState({email:"", password:"", id:0, message:"", name:"", isLoggedIn:false});
    const [isLoggedIn, setisLoggedIn] = useState(false);
 
   async function Login(e)
   {
        e.preventDefault();
        const response = await fetch("https://localhost:7006/api/Employee/Login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
 
        let msg = await response.json();
 
        if(!msg.isLoggedIn){
            setLoginMessage("Login Failed");
            console.log("Response:", msg);
        console.log(msg.message);
            setisLoggedIn(false);
            
        }
        else{
            setLoginMessage("Login successful");
            console.log("Response:", msg);
        console.log(msg.message);
            setisLoggedIn(true);
            navigate("/Employee");
        }
 
       
 
        // let msg = await response.json().message;
        // if(msg!=null){
        //     LoginMessage = "<p style='color:red'>login failed</p>"
        // }
        // else{
        //      LoginMessage = "<p style='color:green'>login failed</p>"
        // }
    }
 
 
    return <div style={{fontFamily:'calibri', color:'blue'}}>
    <h3>Login</h3>
    <div style={{padding:'10px', margin:'10px', border:'solid 1px wheat'}}>
    <form onSubmit={(e) => Login(e)}>
        <div className="form-group">
            <div>Email</div>
            <div><input type="text" className="form-control" onChange={(e=>user.email=e.target.value)}/></div>
        </div>
 
        <div className="form-group">
            <div>Password</div>
            <div><input type="password" className="form-control" onChange={(e=>user.password=e.target.value)}/></div>
        </div> <br />
 
        <div className="form-group">
           
            <div><button type="submit" className="btn btn-primary">Login</button></div>
        </div>
 
        <div className="form-group">
            <div style={{color:isLoggedIn?'green':'red'}}>{LoginMessage}</div>
            </div>
        </form>
 
 
    </div>
    </div>
}
 
export default Login;
 




// import "bootstrap/dist/css/bootstrap.css";
// import { useState } from "react";

// function Login() {
//   const [user, setuser] = useState({ email: "", password: "" });
//   const [loginMessage, setLoginMessage] = useState("");

//   async function login(e) {
//     e.preventDefault();

//     const email = encodeURIComponent(user.email);
//     const password = encodeURIComponent(user.password);
//     const url = `https://localhost:7006/api/Employee/Login/${email}/${password}`;

//     try {
//       const response = await fetch(url, {
//         method: "GET",
//         headers: {
//         //   "Accept": "application/json",
//         "Content-Type": "application/json",
//         },
//       });

     

//       if (response.ok) {
//         const result = await response.json();
        
//         setLoginMessage(result.message || "Login successful!");
         
       
//         console.log("Response:", result);
//         console.log(result.message);
       
//       } else {
        
//         setLoginMessage("Login failed!");
//         console.log("Response:", response);
//         console.log(result.message);
//         console.error("Error:", response.statusText);
        
//       }
      
//     } catch (error) {
//       setLoginMessage("An error occurred while connecting to the server.");
//       console.error("Error:", error);
//     }
    
//   }

//   return (
//     <>
//       <h3
//         style={{
//           fontFamily: "calibri",
//           color: "blue",
//           fontSize: "20px",
//           textAlign: "center",
//           marginTop: "0px",
//         }}
//       >
//         Login
//       </h3>
//       <div style={{ padding: "5px", margin: "3px", textAlign: "center" }}>
//         <form onSubmit={login}>
//           <div className="form-group">
//             <label>Email:</label>
//             <input
//               type="text"
//               className="form-control"
//               onChange={(e) => setuser({ ...user, email: e.target.value })}
//             />
//           </div>
//           <div className="form-group">
//             <label>Password:</label>
//             <input
//               type="password"
//               className="form-control"
//               onChange={(e) => setuser({ ...user, password: e.target.value })}
//             />
//           </div>
//           <button
//             type="submit"
//             className="btn btn-primary"
//             style={{ margin: "5px" }}
//           >
//             Submit
//           </button>
//         </form>
//         {loginMessage && (
//           <p style={{ color: loginMessage.includes("successful") ? "green" : "red" }}>
//             {loginMessage}
//           </p>
//         )}
//       </div>
//     </>
//   );
// }

// export default Login;
