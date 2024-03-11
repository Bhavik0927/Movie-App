import { useEffect, useState } from "react";
import '../CSS/Recommandation.css';
import RecommandedCard from "./RecommandedCard";
import { Link } from "react-router-dom";

const Recommandation = ({ id }) => {

    const [data, setData] = useState([]);

    useEffect(() => { fetchData() }, [id])

    const fetchData = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGY0MzMyZTQ3ZmI5NGMyZTI2MGM5MWE1NDZlNWFiNiIsInN1YiI6IjY1Yjk1MGY5MmYyNjZiMDE3ZGUxZGJlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1s-ZXoEUwPQaApeeJRMIsW2M-nAnGrUoFLHq5DEKgrI'
            }
        };

        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`, options);
            const json = await response.json();
            console.log(json?.results);
            setData(json?.results);
        } catch (error) {
            console.log(error.message)
        }
    }

    return (<>
        <h2>Recommendations</h2>
        <div className="Container">

            {
                data && (
                    data.map((e, index) => {
                        return <Link key={index} to={"/movie/" + e.id + `/${encodeURIComponent(e.title)}`}>
                            <RecommandedCard title={e.title} img={e.poster_path} percent={e.popularity} Date={e.release_date} />
                        </Link>


                    })
                )
            }
        </div>
    </>
    )
}

export default Recommandation;