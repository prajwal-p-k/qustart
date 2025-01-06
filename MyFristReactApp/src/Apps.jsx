import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import HomeCom from "./HomeCom";
import AddEmp from "./AddEmp";
import Edit from "./Edit";
import Login from "./Login";
import EmployeeDetails from "./EmployeeDetails";
import DeletView from "./DeletView";

function Apps() {
    const navigate = useNavigate();
    const [loginMessage, setLoginMessage] = useState("");
    const [user, setUser] = useState({
        email: "",
        password: "",
        id: 0,
        message: "",
        name: "",
        isLoggedIn: false
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://localhost:7006/api/Employee/Login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            });

            const msg = await response.json();

            if (!msg.isLoggedIn) {
                setLoginMessage("Login Failed");
                console.log("Response:", msg.message);
                setIsLoggedIn(false);
            } else {
                setLoginMessage("Login Successful");
                console.log("Response:", msg.message);
                setIsLoggedIn(true);
                navigate("/Home");
                
                
            }
        } catch (error) {
            console.error("Error during login:", error);
            setLoginMessage("An error occurred. Please try again.");
        }
    };

    return (
        <div style={{ fontFamily: 'Calibri', color: 'blue' }}>
            <h3>Login</h3>
            <div style={{ padding: '10px', margin: '10px', border: 'solid 1px wheat' }}>
                <form onSubmit={login}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            className="form-control"
                            value={user.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            value={user.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    <div className="form-group">
                        <div style={{ color: isLoggedIn ? 'green' : 'red' }}>{loginMessage}</div>
                    </div>
                </form>
            </div>
        </div>
    );
}


function AppWrapper() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Apps />} />
                <Route path="/Home" element={<HomeCom />} />
                <Route path="/Employee" element={<HomeCom />} />
                <Route path="/insert" element={<AddEmp />} />
                <Route path="/update" element={<EmployeeDetails />} />
                <Route path="/delete" element={<DeletView />} />
                
                <Route path="Edit/:id" element={<Edit />} />

                
                <Route path="/logout" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}


export default AppWrapper;
