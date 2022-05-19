import { Link } from 'react-router-dom';
import style from './Card.module.css';
import { useQuiz } from '../../context/quiz-context';
import { clearUserData } from '../../utils/clearUserData';
const Card=({detail})=>{
    const {title,subtitle,img_url,categoryName}=detail;
    const {setUserAnswer,setUserScore,userAnswer}=useQuiz();
    return(
        <>
        <Link to={`/rules/${categoryName}`} onClick={()=>clearUserData(setUserAnswer,setUserScore)}>
            <div className={`card ${style.card}`}>
        <div className={`${style['card-image-container']}`}>
            <img src={img_url} alt={`${categoryName}'s`}/>
        </div>
        <div className={`${style['card-content']}`}>
            <div className={`${style['card-header']} fs-20`}>
                <h2 className="title">{title}</h2>
                <small className="subtitle">{subtitle}</small>
         </div>
         </div>
         
     </div>
    
        </Link>
            </>
    )
}
export {Card}