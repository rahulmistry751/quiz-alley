import { createContext,useContext, useState } from "react";
const ThemeContext=createContext("light");

const ThemeContextProvider=({children})=>{
    const [theme,setTheme]=useState("light");

    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
const useTheme=()=>useContext(ThemeContext);

export {useTheme,ThemeContextProvider};