import { useEffect,useState } from "react";
import { db } from '../../firebase';
import { Card} from "../../components"
import style from './Home.module.css';
import { collection, getDocs} from 'firebase/firestore';
const Home=()=>{
    const [categoriesData,setCategoriesData]=useState([]);
    useEffect(()=>{
        (async ()=>{
            try{
                const snapshot=await getDocs(collection(db,"quizData"));
                setCategoriesData(snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                  }))[0])
            }
            catch(error){
                console.error(error)
            }
        })()
    },[])
    const {categories}=categoriesData;
    return (
        <>
        {categories && <main className={`${style.main}`}>
            {categories.map((card,index)=>(<Card detail={card} key={index}></Card>))}
            
        </main>}
        </>

    )
}
export {Home}