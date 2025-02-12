import { useState, createContext } from "react";
 
const ThemeContext = createContext(); // creates a Context object

function ThemeProviderWrapper(props) {
    const [theme, setTheme] = useState("light"); // <== ADD
 
  const toggleTheme = () => {    // <== ADD
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {props.children}
      </ThemeContext.Provider>
    )
  }
 
export { ThemeContext, ThemeProviderWrapper };