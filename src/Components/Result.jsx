import { useLocation } from "react-router"
import { Link } from "react-router-dom";
import ResultCard from "./ResultCard";
import '../CSS/ResultCard.css';

import MediaResult from "./MediaResult";


const Result = () => {

    const location = useLocation();
    console.log(location)
    const searchQuery = new URLSearchParams(location.search);
    const query = searchQuery.get('query');
    const searchData = location.state.searchData;
    console.log(searchData)

    

    return (
        <>
            
            <h2>Search Result for :{query}</h2>
            <div className="result-box">
                <div className="left_box">
                    <MediaResult searchData={searchData} />
                </div>
                <div className="right-box">

                    {
                        searchData.map((e) => {
                            return (
                                <Link key={e.id} to={"/movie/" + e.id + `/${encodeURIComponent(e.title)}`} >
                                    <ResultCard info={e.overview} img={e.poster_path} title={e.title} name={e.name} date={e.release_date} airDate={e.first_air_date} />
                                </Link>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Result;