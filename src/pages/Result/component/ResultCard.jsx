import style from '../Result.module.css';
import { useQuiz } from '../../../context/quiz-context';
const ResultCard=({questionSet})=>{
    const {id,question,answer,option}=questionSet;
    const {userAnswer}=useQuiz();
    return(
        <>
        <hr></hr>
        <div className={`${style['quiz-content']}`}>
            <h3 className="h3">{question}</h3>
            <div className={`${style.mcqs}`}>
                {option.map((opt,index)=>{
                    return <p className={`${style.opt} ${userAnswer[id]===opt && style.incorrect} ${answer===opt && style.correct}`} key={index}>{opt}</p>
                })}
            </div>
        </div>
        </>
    )
}
export {ResultCard}