import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

function DeletView() {
    const navigate = useNavigate();
    const [empData, setEmpdata] = useState([]);

    useEffect(() => {
        async function getEmployees() {
            const result = await fetch("https://localhost:7006/api/Employee/GetEmployee");
            const data = await result.json();
            setEmpdata(data);
            console.log(data);
        }
        getEmployees();
    }, []);

    async function handle(e) {
        const employeeId = e.target.id;

        const confirmDelete = window.confirm(`Are you sure you want to delete employee with ID ${employeeId}?`);
        if (!confirmDelete) return;

        try {
            const response = await fetch(`https://localhost:7006/api/Employee/Delete/${employeeId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                alert("Employee deleted successfully");
                setEmpdata((prevData) => prevData.filter((emp) => emp.id !== parseInt(employeeId)));
            } else {
                const errorMessage = await response.text();
                alert(`Failed to delete employee: ${errorMessage}`);
            }
        } catch (error) {
            console.error("Error during deletion:", error);
            alert("An error occurred while trying to delete the employee.");
        }
    }

    return (
        <div style={{ fontFamily: 'calibri' }}>
            <h3 style={{ color: 'blue' }}>List of Employees</h3>
            <hr />
            <div style={{ padding: '10px', margin: '10px', border: 'solid 1px wheat' }}>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Department</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empData.map((e) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.mobile}</td>
                                <td>{e.departmentName}</td>
                                <td>
                                    <button type="submit" id={e.id} onClick={handle} className="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DeletView;
