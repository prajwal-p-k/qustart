import "bootstrap/dist/css/bootstrap.min.css";
import {useNavigate} from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <button className="btn btn-primary" onClick={() => navigate("/insert")}>Insert</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-success" onClick={() => navigate("/update")}>Update</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-danger" onClick={() => navigate("/delete")}>Delete</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-secondary" onClick={() => navigate("/logout")}>Logout</button>
                    </div>
                </div>
            </div>
        </>
    );
     
}

export default Home;

