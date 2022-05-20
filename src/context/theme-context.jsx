import { createContext,useContext, useEffect, useState } from "react";
const ThemeContext=createContext("light");

const ThemeContextProvider=({children})=>{
    const [theme,setTheme]=useState(localStorage.getItem("colorTheme")??"light");
    useEffect(()=>{
       localStorage.setItem("colorTheme",theme);
    },[theme])
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
const useTheme=()=>useContext(ThemeContext);

export {useTheme,ThemeContextProvider};