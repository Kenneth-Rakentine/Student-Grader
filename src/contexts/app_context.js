import { createContext } from "react";
import students from '../models/students'

export const AppContext = createContext()

const AppContextProvider = (props) => {
   

    return (
        <AppContext.Provider value={{
            students
        }}>
            {props.children}
        </AppContext.Provider>
    )
};


export default AppContextProvider