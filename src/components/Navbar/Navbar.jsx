import { Link } from 'react-router-dom'
import './Navbar.css';
import { clearUserData } from '../../utils/clearUserData';
import { useQuiz } from '../../context/quiz-context';
const Navbar=()=>{
  const{setUserAnswer,setUserScore}=useQuiz();
    return(
        <nav className="navbar">
  <Link to="/" onClick={()=>clearUserData(setUserAnswer,setUserScore)} className="navbar-brand h2 fw-600 brand-name">
    QuizAlley
  </Link> 
</nav>

    )
}
export {Navbar}