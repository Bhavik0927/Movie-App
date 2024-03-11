import { useState } from 'react';
import '../CSS/Search.css';
import { useNavigate } from 'react-router';

const Search = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const HandleChanges = (e) => { setSearchQuery(e.target.value); }


    const HandleData = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGY0MzMyZTQ3ZmI5NGMyZTI2MGM5MWE1NDZlNWFiNiIsInN1YiI6IjY1Yjk1MGY5MmYyNjZiMDE3ZGUxZGJlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1s-ZXoEUwPQaApeeJRMIsW2M-nAnGrUoFLHq5DEKgrI'
            }
        };
        
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${searchQuery}&include_adult=true&language=en-US&page=1`, options);
            const result = await response.json();
            console.log(result.results);
            navigate(`/result?query=${searchQuery}`,
            {
                state: {searchData : result.results }
            });
        } catch (error) {
            console.log(error.message);
        }
    }
    

    return (
        <div className='headingContainer'>  
            <h1>Welcome</h1>
            <h2>Millions of movies,TV shows and people to discover.Explore now.</h2>

            <input type="text" value={searchQuery} onChange={HandleChanges} placeholder="Search for a movie,tv show,person...." />
            <button onClick={() => HandleData()}>Search</button>

        </div>
    )
}

export default Search;