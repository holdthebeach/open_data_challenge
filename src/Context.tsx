import React, {useState, useEffect, useContext} from "react"
import ministryData from "./ministryData.json"

//fix type later
export const Context = React.createContext<any>(null);

export const DashboardProvider = ({children}) => {
    const [ministriesData, setMinistriesData] = useState<any>([]);

    useEffect(()=>{
        setMinistriesData(ministryData)
    }, [])

    function showSort(sortedData){
        
        setMinistriesData(sortedData)
        console.log('ministriesdData', ministriesData)
    }

    const contextValue = {
        ministriesData,
        showSort
    }

    return (
        <Context.Provider value={contextValue}>
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