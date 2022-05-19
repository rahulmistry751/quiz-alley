import { useParams } from "react-router-dom";
import {QuestionAnswer } from "../../components"
import style from './Quiz.module.css'
const Quiz=()=>{
    const {categoryName}=useParams();
    return(
        <div>
        <div class={`${style['main-content']}`}>
            <QuestionAnswer category={categoryName} ></QuestionAnswer>
           
        </div>
        </div>
       
    )
}
export {Quiz}