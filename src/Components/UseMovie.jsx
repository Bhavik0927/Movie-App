import { useEffect, useState } from "react"
import { useDataContext } from "../Context/ContextProvider";

const UseMovie = (id) =>{

    const { setUrlLink } = useDataContext();
    const [getMovie,setGetMovie] = useState([]);

    useEffect(() => {MovieData()},[id]);

    const MovieData = async () =>{

        const options = { method: 'GET', headers: { accept: 'application/json' } };

        try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=44f4332e47fb94c2e260c91a546e5ab6`,options);
            const data =await response.json();
            // console.log(data);
            setGetMovie(data);

            setUrlLink(data.backdrop_path);
        }
        catch (err){
            console.log(err);
        }
    }

    return getMovie;
    
}

export default UseMovie;