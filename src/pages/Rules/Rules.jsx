import style from './Rules.module.css';
import {Link, useParams} from 'react-router-dom'
const Rules=()=>{
    const {categoryName}=useParams();
    return (
        <div className={`${style.rules}`}>
            <section className={`${style['rules-section']}`}>
                <h3 className='h3'>Instructions</h3>
                <div className="points">
               <div className={`${style.point}`}>
               This quiz consists of 5 multiple-choice questions. Muggles are not allowed.
                   </div> 
                <div className={`${style.point}`}>
                You will be awarded 2 points for each correct answer and no negative marking.
                </div>
                <div className={`${style.point}`}>
                To start, click the "Start" button.
                </div>
                </div>
                <Link to={`/quiz/${categoryName}`} className={`${style.start}`}>
                    <button className={`button ${style.button}`}>Start</button>
                </Link>
            </section>

        </div>
    )
}
export {Rules}