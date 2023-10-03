import React, {useState} from "react"

export const Context = React.createContext();

export const DashboardProvider = ({children}) => {
    const [items, setItems] = useState(0);

    return (
        <Context.Provider value={{items, setItems}}>
            {children}
        </Context.Provider>
    )
}