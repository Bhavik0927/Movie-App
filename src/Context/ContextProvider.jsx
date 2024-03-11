import { useContext, useState } from 'react';
import dataContext from './dataContext';

export const ContextProvider = ({children}) =>{


    const[urlLink,setUrlLink] = useState('');


    return (
        <dataContext.Provider value={{urlLink,setUrlLink}}>
            {children}
        </dataContext.Provider>
    )
}

export const useDataContext = () =>{
    return useContext(dataContext)
}