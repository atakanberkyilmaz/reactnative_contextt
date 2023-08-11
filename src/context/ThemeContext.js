// import { createContext, useState } from "react";

// const ThemeContext = createContext();

// export const ThemeContextProvider = ({children}) => {
//     const {theme, setTheme} = useState("dark");

//     const toggleTheme = () => {
//         setTheme(theme === 'dark' ? 'light' : 'dark');
//       };
    
    

//     const values = {
//         theme,
//         setTheme,
//     };
//     return <ThemeContext.Provider value = {{theme, setTheme}}>
//         {children}
//     </ThemeContext.Provider>
// }

// export default ThemeContext;