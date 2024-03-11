import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../CSS/Crousal.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";



const Carouse = () => {


    const [Data, setData] = useState([]);
    // console.log(Data)

    useEffect(() => { fetchData() }, [])

    const fetchData = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGY0MzMyZTQ3ZmI5NGMyZTI2MGM5MWE1NDZlNWFiNiIsInN1YiI6IjY1Yjk1MGY5MmYyNjZiMDE3ZGUxZGJlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1s-ZXoEUwPQaApeeJRMIsW2M-nAnGrUoFLHq5DEKgrI'
            }
        };

        await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setData(response.results);
            })
            .catch(err => console.error(err));
    }
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <>
            <Carousel responsive={responsive}
                showDots={true}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style">

                {Data?.map((elm) => {

                    return (
                        <Link style={{ textDecoration: "none" }} key={elm.id} to={"/movie/" + elm.id}>
                            <div className="Crousal">
                                {/* <h1>Hello world</h1> */}
                                <img src={`https://image.tmdb.org/t/p/original${elm.backdrop_path || elm.poster_path}`} alt="poster" />
                            </div>
                            <div className="info_overlay">
                                <h1>{elm.title}</h1>
                                <h2>{elm.release_date} <span>{Math.floor(elm.vote_average)} <FaStar /> </span></h2>
                                <p>{elm.overview}</p>

                            </div>
                        </Link>
                    )
                })}
            </Carousel>
        </>
    )
}

export default Carouse;