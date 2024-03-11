// import { propTypes } from 'react-bootstrap/esm/Image';
import '../CSS/ResultCard.css';

const ResultCard = ({ img, info, title, name, date, airDate }) => {

    const a = info?.split(' ');
    const word = a?.splice(0,30).join(' ')
    // console.log(word)
    
    return (
        <div className="ResultContainer">

            <img src={`https://image.tmdb.org/t/p/w500${img}`} alt="pic" />
            <div className='SecondResult'>
                <div>
                    <h3>{title || name}</h3>
                    <h4>{date || airDate}</h4>
                </div>
                <p>{word}...</p>
            </div>

        </div>
    )
}


  
export default ResultCard;

