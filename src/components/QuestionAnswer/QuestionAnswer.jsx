import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import style from './QuestionAnswer.module.css';
import { useQuiz } from '../../context/quiz-context';
const QuestionAnswer=({category})=>{
    const navigate=useNavigate();
    const {userAnswer,setUserAnswer,userScore,setUserScore,quizQuestions}=useQuiz();
    const [currentQuestionIndex,setCurrentQuestion]=useState(0);
    const {question,option,id,answer}=quizQuestions[category][currentQuestionIndex];

    // proceed to next question
    const nextQuestionhandler=()=>{
        setCurrentQuestion(prevQuestion=>prevQuestion+1)
    }
   // verifies the user choice
    const checkAnswer=userChoice=>{
        if(userChoice===answer){
            setUserScore(prevScore=>prevScore+1)
        }
    }
    // sets user choice
    const userAnswerHandler=(userChoice)=>{
        setUserAnswer({...userAnswer,[id]:userChoice})
    }
    // 
    const userChoiceSubmitHandler=(e)=>{
        e.preventDefault();
        checkAnswer(Object.values(userAnswer)[Object.values(userAnswer).length-1])
        if(currentQuestionIndex===4){
            navigate(`/result/${category}`,{userScore:userScore});
        }
        else
         nextQuestionhandler();
    }
    return(
        <>
        <div className={`${style['current-info']}`}>
        <span className={`${style['question-status']}`}>Question {currentQuestionIndex+1}/5</span>
        <span className={`${style['score']}`}>Score:{userScore}</span>
        </div>
        <div>
        <h2 className={`${style.question} h2`}>
        {question}
        </h2>
        <form className={`${style['quiz-form']}`} onSubmit={(e)=>userChoiceSubmitHandler(e)}>
        <div className={`${style.options}`}>
        {option.map((choice,index)=>
        (   <div className={`${style['choice-section']}`} key={index}>

            <input type="radio" name="choice" id={choice} required onChange={()=>userAnswerHandler(choice)} autoComplete="0" checked={userAnswer!==undefined?Object.values(userAnswer).includes(choice):false}/>
            <label htmlFor={choice} className={`${style['choice-label']} ${(userAnswer!==undefined?Object.values(userAnswer).includes(choice):false) && style.selected} fs-20`} >
                {choice}
            </label>
            </div>
        )
        )}
        </div>
        <button type="submit" className={`button ${style.button} button-md`} >{currentQuestionIndex!==quizQuestions[category].length-1?"Next":"Submit"}</button>
        </form>
        </div>
        
        </>
    )
}
export {QuestionAnswer};