import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TrendingCard from "./TrendingCard";
import '../CSS/Popular.css';

const Popular = () => {


    const [data, setData] = useState([]);
    // const [isChecked, setChecked] = useState(true);

    useEffect(() => { fetchData() }, []);

    const fetchData = async () => {
        const options = { method: 'GET', headers: { accept: 'application/json' } };

        await fetch('https://api.themoviedb.org/3/movie/popular?api_key=44f4332e47fb94c2e260c91a546e5ab6', options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setData(response.results);
            })
            .catch(err => console.error(err));
    }

    return (
        <>
            <h1>Popular</h1>
            <ul className="list">
                <li>Streaming</li>
                <li>On Tv</li>
            </ul>
            <div className="PopularContainer">
                {data && (
                    data.map((e, index) => {
                        return <Link key={index} to={"/movie/" + e.id}>
                            <TrendingCard key={e.id} title={e.original_title} date={e.release_date} poster={e.poster_path
                            } vote={e.vote_average} />
                        </Link>
                    })
                )
                }
            </div>
        </>
    )
}

export default Popular;