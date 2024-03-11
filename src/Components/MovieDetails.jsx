import { useParams } from "react-router-dom";
import UseMovie from "./UseMovie";
import '../CSS/MovieDetails.css';
import net from '../assets/netflx.jpg';
import { useContext} from "react";
import dataContext from "../Context/dataContext";
import PercentageRing from "./PercentageRing";
import Recommandation from "./Recommandation";
import { FaPlay } from "react-icons/fa";

const MovieDetails = () => {

   
    const { urlLink } = useContext(dataContext);

    let { id } = useParams();

    const getMovie = UseMovie(id);


    const backGroundStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original${urlLink})`,
    }

    
    return (
        <>
            <div style={backGroundStyle} className="DetailsContainer">
                <div className="left-part">
                    <img src={`https://image.tmdb.org/t/p/original${getMovie.poster_path}`} alt="pic" />
                    <div className="bottom-part">
                        <img className="logo" src={net} alt="logo" />
                        <div>
                            <p>Now Streaming</p>
                            <p>Watch Now</p>
                        </div>
                    </div>
                </div>
                <div className="right-part">
                    <div>
                        <h1>{getMovie.original_title}</h1>
                        <ul className="time-duration">
                            <li>{getMovie.release_date}</li>

                        </ul>
                    </div>
                    <div className="score">
                        <PercentageRing className="percent" percent={Math.floor(getMovie.vote_average)} />
                        <h3>User Score</h3>
                        <div className="trailer">
                            <FaPlay className="playBtn" />
                            <h3>Play trailers</h3>
                        </div>
                    </div>

                    <p>{getMovie.tagline}</p>

                    <h2>Overview</h2>
                    <p>{getMovie.overview}</p>
                    <div>
                        <div className="director">
                            <h1></h1>
                        </div>
                    </div>
                </div>
            </div>

            <Recommandation id={id} />
        </>
    )
}
export default MovieDetails;