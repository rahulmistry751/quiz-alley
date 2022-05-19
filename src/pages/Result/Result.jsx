import { ResultCard } from "./component/ResultCard";
import style from './Result.module.css'
const Result=()=>{
    return(
        <>
        <div className={`${style['main-content']}`}>
        <div className="result">
            <h2 className={`h2 mgt-16 mgb-16 fw-600 ${style['result-heading']}`}>Result</h2>
            <p className={`${style['user-score']} txt-c mgt-16 mgb-16 fs-20`}>You Scored:</p>
           
         </div>
        
        </div>
        </>
    )
}
export {Result}