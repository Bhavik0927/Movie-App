import '../CSS/Card.css';
import PercentageRing from './PercentageRing';


const TrendingCard = ( {title, date, poster, vote} ) => {
    return (
        <>
            <div className='mainCardData'>
                <div className="Trendingcard">
                    <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="logo" />

                    <div className='percentage'>{<PercentageRing percent={Math.floor(vote * 10)} />}</div>
                </div>
                <h3>{title}</h3>
                <p>{date}</p>
            </div>
        </>
    )
}

export default TrendingCard;