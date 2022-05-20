import { Link } from 'react-router-dom'
import './Navbar.css';
import { clearUserData } from '../../utils/clearUserData';
import { useQuiz } from '../../context/quiz-context';
import { useTheme } from '../../context/theme-context';
const Navbar=()=>{
  const{setUserAnswer,setUserScore}=useQuiz();
  const {theme,setTheme}=useTheme();
  const handleTheme=()=>{
    setTheme(prevTheme=>prevTheme==="light"?"dark":"light")
  }
    return(
        <nav className={`navbar ${theme==="dark" && 'dark-navbar'}`}>
  <Link to="/" onClick={()=>clearUserData(setUserAnswer,setUserScore)} className="navbar-brand h2 fw-600 brand-name">
    QuizAlley
  </Link> 
  <ul className="list">
    <li className="list-item" onClick={handleTheme}>
      <i title="app color theme" className={`fas fa-wand-magic ${theme==='dark'?"light-wand":""} `}></i>
    </li>
  </ul>
</nav>

    )
}
export {Navbar}