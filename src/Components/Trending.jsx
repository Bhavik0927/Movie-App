import { useEffect, useState } from "react";
import '../CSS/Card.css';
import TrendingCard from "./TrendingCard";
import { Link } from "react-router-dom";
import Search from "./Search";
import Trailers from "./Trailers";
import Carouse from "./Carouse";



const Trending = () => {

    const [data, setData] = useState([]);
    const [isChecked, setChecked] = useState(true);

    useEffect(() => { fetchData() }, [isChecked]);

    const fetchData = async () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGY0MzMyZTQ3ZmI5NGMyZTI2MGM5MWE1NDZlNWFiNiIsInN1YiI6IjY1Yjk1MGY5MmYyNjZiMDE3ZGUxZGJlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1s-ZXoEUwPQaApeeJRMIsW2M-nAnGrUoFLHq5DEKgrI'
            }
          };

        const response = await fetch(isChecked ? 'https://api.themoviedb.org/3/trending/movie/day?language=en-US' : 'https://api.themoviedb.org/3/trending/movie/week?language=en-US', options)
        const data = await response.json();
        console.log(data.results);
        setData(data.results);
    }

    return (
        <>
            <Carouse />

            <Search />
            <h1>Trending</h1>

            <span><label>{isChecked ? "Day" : "Week"}</label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setChecked(!isChecked)}
                />
            </span>


            <div className="TrendingContainer">
                {data && (
                    data.map((e, index) => {
                        return <Link key={index} to={"/movie/" + e.id + `/${encodeURIComponent(e.title)}`}>
                            <TrendingCard key={e.id} title={e.original_title} date={e.release_date} poster={e.poster_path
                            } vote={e.vote_average} />
                        </Link>
                    })
                )
                }
            </div>

            <Trailers />

        </>)
}

export default Trending;