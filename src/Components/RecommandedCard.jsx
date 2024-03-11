import { useState } from 'react';
import '../CSS/Recommandation.css';

const RecommandedCard = ({ title, img, percent, Date }) => {

    const [showContent, setShowContent] = useState(false);

    return (
        <div className='CardData'>

            <div className='recommandCard' onMouseEnter={() => setShowContent(true)} onMouseLeave={() => setShowContent(false)} >
                <img src={`https://image.tmdb.org/t/p/original${img}`} alt="img" />

                {showContent && (
                <div className="date" >
                    <h3>{Date}</h3>
                </div>
                )}

                <div className='nameData'>
                    <p>{title}</p>
                    <p>{Math.floor(percent)}%</p>
                </div>
            </div>
        </div>
    )
}

export default RecommandedCard