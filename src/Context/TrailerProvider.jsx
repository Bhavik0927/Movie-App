import { useContext, useState } from "react"
import TrailerContext from "./TrailerContext"


export const TrailerProvider = ({ children }) =>{

    const [seriesId,setSeriesId] = useState(null);
    const [youtubeKey,setYoutubeKey] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const updateId = (id) =>{ setSeriesId(id); }
    
    const updatedKey = (ukey) => { setYoutubeKey(ukey); }


    return(
        <TrailerContext.Provider value={{ seriesId,updateId,youtubeKey,updatedKey,isOpen,setIsOpen }}>
            {children }
        </TrailerContext.Provider>
    )
}

export const useTrailerContext = () =>{
    return useContext(TrailerContext);
}