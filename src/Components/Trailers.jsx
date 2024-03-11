import { useState, useEffect } from "react";
import TrailerCard from "./TrailerCard";

const Trailers = () => {

    const [data, setData] = useState([]);

    useEffect(() => { fetchData(); }, []);


    const fetchData = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGY0MzMyZTQ3ZmI5NGMyZTI2MGM5MWE1NDZlNWFiNiIsInN1YiI6IjY1Yjk1MGY5MmYyNjZiMDE3ZGUxZGJlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1s-ZXoEUwPQaApeeJRMIsW2M-nAnGrUoFLHq5DEKgrI'
            }
        };
        try {
            const response = await fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=44f4332e47fb94c2e260c91a546e5ab6', options);
            const data = await response.json();
            // console.log(data.results);
            setData(data.results);
        }
        catch (err) {
            console.log(err);
        }

    };

    const [backgroundImage, setBackgroundImage] = useState('default-background.jpg');

    const handleCardHover = (newImage) =>{
        setBackgroundImage(newImage)
    }

    return (
        <>
            <div className="TrailerContainer" style={{ backgroundImage: `url(${backgroundImage})` }}>
                {data.map((elm) => {
                    return <div key={elm.id}  onMouseEnter={() => handleCardHover(`https://image.tmdb.org/t/p/original${elm.backdrop_path}`)} >
                        <TrailerCard id={elm.id} img={elm.backdrop_path} name={elm.name} />;
                    </div>


                })}
            </div>
        </>
    );
}

export default Trailers;
