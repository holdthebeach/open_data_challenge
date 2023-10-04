import React, {useState, useEffect, useContext} from "react"
import ministryData from "./ministryData.json"

//fix type later
export const Context = React.createContext<any>(null);
//console.table(ministryData)

export const DashboardProvider = ({children}) => {
    const [ministriesData, setMinistriesData] = useState<any>([]);

    useEffect(()=>{
        setMinistriesData(ministryData)
    }, [])

    return (
        <Context.Provider value={{ministriesData}}>
            {children}
        </Context.Provider>
    )
}

export const useDashboardContext = (): any => {
    const context = useContext(Context);

    if(!context){
        throw new Error('store empty')
    }

    return context;
}