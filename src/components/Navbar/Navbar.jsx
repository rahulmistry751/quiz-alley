import { Link } from 'react-router-dom'
import './Navbar.css';
const Navbar=()=>{
    return(
        <nav className="navbar">
  <Link to="/" className="navbar-brand h2 fw-600 brand-name">
    QuizAlley
  </Link> 
</nav>

    )
}
export {Navbar}