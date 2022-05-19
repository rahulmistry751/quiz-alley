import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import {createContext,useContext,useEffect,useState} from 'react';

const QuizContext=createContext();

const QuizContextProvider=({children})=>{
    const [userScore,setUserScore]=useState(0);
    const [userAnswer,setUserAnswer]=useState({});
    const [quizQuestions,setQuizQuestions]=useState([])
    useEffect(()=>{
        (async ()=>{
            try{
                const snapshot=await getDocs(collection(db,"quizData"));
                setQuizQuestions(snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                  }))[1])
            }
            catch(error){
                console.error(error)
            }
        })()
    },[])
    return(
        <QuizContext.Provider value={{userScore,setUserScore,userAnswer,setUserAnswer,quizQuestions}}>
            {children}
        </QuizContext.Provider>
    )
}

const useQuiz=()=>useContext(QuizContext);

export {useQuiz,QuizContextProvider};