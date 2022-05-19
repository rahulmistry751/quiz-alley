import { useParams } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";
import { ResultCard } from "./component/ResultCard";
import style from './Result.module.css'
const Result=()=>{
    const {categoryName}=useParams();
    const {userScore,quizQuestions}=useQuiz();
    return(
        <>
        <div className={`${style['main-content']}`}>
        <div className="result">
            <h2 className={`h2 mgt-16 mgb-16 fw-600 ${style['result-heading']}`}>Result</h2>
            <p className={`${style['user-score']} txt-c mgt-16 mgb-16 fs-20`}>You Scored: {userScore}</p>
            {quizQuestions[categoryName].map((questionSet,index)=><ResultCard questionSet={questionSet} key={index}></ResultCard>)}
         </div>
        
        </div>
        </>
    )
}
export {Result}