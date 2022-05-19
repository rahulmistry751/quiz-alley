import { useEffect,useState } from "react";
import { db } from '../../firebase';
import { Card} from "../../components"
import style from './Home.module.css';
import { collection, getDocs,setDoc,doc } from 'firebase/firestore';
const Home=()=>{
    const [categoriesData,setCategoriesData]=useState([]);
    useEffect(()=>{
        (async ()=>{
            try{
                console.log("inside")
                const snapshot=await getDocs(collection(db,"quizData"));
                
                console.log(snapshot.docs)
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
    console.log(categoriesData)

    const {categories}=categoriesData;

    return (
        <>
        {categories && <main className={`${style.main}`}>
            {categories.map(card=>(<Card detail={card} ></Card>))}
            
        </main>}
        </>

    )
}
export {Home}