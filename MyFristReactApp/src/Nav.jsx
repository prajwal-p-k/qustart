import { Link } from "react-router-dom";

function Nav1() {
  return (
    <>
      <Link to="/" style={{ marginRight: '10px', textDecoration: 'none', color: 'blue' }}>Home</Link>
      <Link to="/Contact" style={{ marginRight: '10px', textDecoration: 'none', color: 'blue' }}>Contact</Link>
      <Link to="/Employee" style={{ marginRight: '10px', textDecoration: 'none', color: 'blue' }}>Employee management</Link>
      <Link to="/Services" style={{marginRight: '10px', textDecoration: 'none', color: 'blue' }}>Services</Link>
      <Link to="/Login" style={{ marginRight: '10px',textDecoration: 'none', color: 'blue' }}>Login</Link>
    </>
  );
}

export default Nav1;
