import { useState } from 'react';
import '../CSS/Trailer.css';
import { FaPlay } from "react-icons/fa";
import { useTrailerContext } from '../Context/TrailerProvider';
import { IoMdCloseCircle } from "react-icons/io"
import ReactPlayer from 'react-player';

const TrailerCard = ({ img, id, name }) => {


    const { updateId } = useTrailerContext();

    const [isOpen, setIsOpen] = useState(false);
    const [key, setKey] = useState('');

    const HandleClick = () => {
        updateId(id);
        getData();
        setIsOpen(true);
    }


    const getData = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGY0MzMyZTQ3ZmI5NGMyZTI2MGM5MWE1NDZlNWFiNiIsInN1YiI6IjY1Yjk1MGY5MmYyNjZiMDE3ZGUxZGJlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1s-ZXoEUwPQaApeeJRMIsW2M-nAnGrUoFLHq5DEKgrI'
            }
        };

        try {
            const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=44f4332e47fb94c2e260c91a546e5ab6`, options)
            const data = await response.json();
            console.log(data?.results[0]?.key)

            const filteredData = await data.results.filter((video) => {
                return (video.type === 'Trailer' || video.type === 'Official Trailer')
            });

            filteredData.map((elm) => setKey(elm.key));
            // setData(data.results);

        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className='container' >
            <img src={`https://image.tmdb.org/t/p/original${img}`} alt="trails" />
            <FaPlay className='play_icon' onClick={HandleClick} />

            <h2>{name}</h2>

            {
                isOpen && (
                    <div className="card">
                        <IoMdCloseCircle onClick={() => setIsOpen(false)} className='close' />
                        <ReactPlayer playing={false} url={`https://www.youtube.com/watch?v=${key}`} style={{ borderRadius: "10px" }} width={"700px"} height={"450px"} />

                    </div>

                )
            }
        </div>
    )
}

export default TrailerCard;